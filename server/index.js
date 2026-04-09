import express from 'express';
import rateLimit from 'express-rate-limit';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Config
const PORT = process.env.PORT || 3001;
const TG_TOKEN = process.env.TG_TOKEN || '8615255583:AAH8mGEeFI8FEumVS-8Um62J6a9WkI_73a4';
const TG_CHAT_ID = process.env.TG_CHAT_ID || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'king_control_2026';
const DB_PATH = process.env.DB_PATH || join(__dirname, 'leads.db');

// Database
const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    bar TEXT,
    source TEXT,
    status TEXT DEFAULT 'new',
    note TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`);

const insertLead = db.prepare(
  'INSERT INTO leads (name, phone, bar, source) VALUES (?, ?, ?, ?)'
);
const listLeads = db.prepare('SELECT * FROM leads ORDER BY id DESC');
const updateLead = db.prepare(
  "UPDATE leads SET status = ?, note = ?, updated_at = datetime('now') WHERE id = ?"
);
const getSetting = db.prepare('SELECT value FROM settings WHERE key = ?');
const setSetting = db.prepare(
  'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'
);

// Telegram helpers
async function tg(method, body) {
  const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram API error: ${JSON.stringify(data)}`);
  return data.result;
}

function getChatId() {
  const stored = getSetting.get('chat_id');
  if (stored?.value) return stored.value;
  return TG_CHAT_ID || null;
}

function escapeMd(s) {
  return String(s).replace(/([_*`\[\]()])/g, '\\$1');
}

async function sendLeadToTelegram(lead) {
  const chatId = getChatId();
  if (!chatId) {
    console.warn('[tg] No chat_id — lead not sent to Telegram');
    return;
  }
  const text =
    `🔔 *Новая заявка #${lead.id}*\n\n` +
    `👤 *Имя:* ${escapeMd(lead.name)}\n` +
    `📞 *Телефон:* ${escapeMd(lead.phone)}\n` +
    (lead.bar ? `🍸 *Бар:* ${escapeMd(lead.bar)}\n` : '') +
    `\n_Источник: ${lead.source || '—'}_\n` +
    `🔗 https://king-control.ru/admin`;
  try {
    await tg('sendMessage', {
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });
  } catch (e) {
    console.error('[tg] sendMessage failed:', e.message);
  }
}

// Telegram bot polling — listens for /start from owner
let lastUpdateId = 0;
async function pollTelegram() {
  try {
    const updates = await tg('getUpdates', { offset: lastUpdateId + 1, timeout: 25 });
    for (const upd of updates) {
      lastUpdateId = upd.update_id;
      const msg = upd.message;
      if (!msg) continue;
      const text = (msg.text || '').trim();
      const chatId = msg.chat.id;

      if (text === '/start') {
        setSetting.run('chat_id', String(chatId));
        await tg('sendMessage', {
          chat_id: chatId,
          text:
            '✅ *KING_CONTROL Bot активирован*\n\n' +
            'Теперь все заявки с сайта будут приходить сюда.\n\n' +
            'Открыть админку: https://king-control.ru/admin',
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        });
        console.log(`[tg] chat_id saved: ${chatId}`);
      } else if (text === '/leads') {
        const rows = listLeads.all().slice(0, 10);
        if (rows.length === 0) {
          await tg('sendMessage', { chat_id: chatId, text: 'Заявок пока нет.' });
        } else {
          const body = rows
            .map(
              (l) =>
                `#${l.id} ${l.status === 'new' ? '🔔' : '✅'} ${l.name} — ${l.phone}` +
                (l.bar ? `\n    ${l.bar}` : '')
            )
            .join('\n\n');
          await tg('sendMessage', { chat_id: chatId, text: `Последние заявки:\n\n${body}` });
        }
      }
    }
  } catch (e) {
    console.error('[tg] polling error:', e.message);
  } finally {
    setTimeout(pollTelegram, 1000);
  }
}

// Express app
const app = express();
app.set('trust proxy', 1); // behind nginx
app.use(express.json({ limit: '10kb' }));

// Rate limiters
const leadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'too many requests' },
});
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'too many login attempts' },
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

app.post('/api/leads', leadLimiter, async (req, res) => {
  try {
    const { name, phone, bar, source } = req.body || {};
    if (!name || !phone) {
      return res.status(400).json({ error: 'name and phone are required' });
    }
    const nameStr = String(name).slice(0, 200);
    const phoneStr = String(phone).slice(0, 50);
    const barStr = bar ? String(bar).slice(0, 300) : null;
    const sourceStr = source ? String(source).slice(0, 100) : null;

    const info = insertLead.run(nameStr, phoneStr, barStr, sourceStr);
    const lead = { id: info.lastInsertRowid, name: nameStr, phone: phoneStr, bar: barStr, source: sourceStr };

    sendLeadToTelegram(lead).catch(() => {});

    res.json({ ok: true, id: lead.id });
  } catch (e) {
    console.error('[api] POST /api/leads:', e);
    res.status(500).json({ error: 'server error' });
  }
});

// Admin auth
function checkAuth(req, res, next) {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) return res.status(401).json({ error: 'unauthorized' });
  const token = auth.slice(7);
  if (token !== ADMIN_PASSWORD) return res.status(401).json({ error: 'unauthorized' });
  next();
}

app.post('/api/admin/login', loginLimiter, (req, res) => {
  const { password } = req.body || {};
  if (password === ADMIN_PASSWORD) {
    return res.json({ token: ADMIN_PASSWORD });
  }
  res.status(401).json({ error: 'wrong password' });
});

app.get('/api/admin/leads', checkAuth, (_req, res) => {
  res.json({ leads: listLeads.all() });
});

app.patch('/api/admin/leads/:id', checkAuth, (req, res) => {
  const id = Number(req.params.id);
  const { status, note } = req.body || {};
  if (!['new', 'in_progress', 'closed'].includes(status)) {
    return res.status(400).json({ error: 'invalid status' });
  }
  updateLead.run(status, note || null, id);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`[server] listening on :${PORT}`);
  console.log(`[server] DB at ${DB_PATH}`);
});

pollTelegram();
