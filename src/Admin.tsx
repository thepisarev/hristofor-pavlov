import { useState, useEffect, type FormEvent } from 'react';
import { Phone, Clock, CheckCircle2, Circle, LogOut, Search, Building2, Lock } from 'lucide-react';

type LeadStatus = 'new' | 'in_progress' | 'closed';

interface Lead {
  id: number;
  name: string;
  phone: string;
  bar: string | null;
  source: string | null;
  status: LeadStatus;
  note: string | null;
  created_at: string;
  updated_at: string;
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'Новая',
  in_progress: 'В работе',
  closed: 'Закрыта',
};

const STATUS_COLORS: Record<LeadStatus, string> = {
  new: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  in_progress: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  closed: 'bg-slate-700/30 text-slate-400 border-slate-700',
};

function formatDate(iso: string): string {
  const d = new Date(iso.replace(' ', 'T') + 'Z');
  return d.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Admin() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | LeadStatus>('all');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  async function loadLeads() {
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/leads', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('admin_token');
        setToken(null);
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      setError('Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      loadLeads();
      const interval = setInterval(loadLeads, 15000);
      return () => clearInterval(interval);
    }
  }, [token]);

  async function updateStatus(id: number, status: LeadStatus, note?: string) {
    if (!token) return;
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status, note }),
    });
    loadLeads();
  }

  function logout() {
    localStorage.removeItem('admin_token');
    setToken(null);
    setLeads([]);
  }

  if (!token) {
    return <LoginForm onLogin={(t) => { localStorage.setItem('admin_token', t); setToken(t); }} />;
  }

  const filtered = leads
    .filter((l) => filter === 'all' || l.status === filter)
    .filter((l) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.phone.toLowerCase().includes(q) ||
        (l.bar || '').toLowerCase().includes(q)
      );
    });

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    in_progress: leads.filter((l) => l.status === 'in_progress').length,
    closed: leads.filter((l) => l.status === 'closed').length,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <h1 className="text-lg font-bold text-white tracking-wider">
              KING_CONTROL <span className="text-slate-500 font-normal text-sm">/ admin</span>
            </h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {(['all', 'new', 'in_progress', 'closed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                filter === f
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {f === 'all' ? 'Все' : STATUS_LABELS[f]}
              <span className="ml-2 text-xs opacity-70">{counts[f]}</span>
            </button>
          ))}
          <div className="flex-1 min-w-[200px] relative ml-auto">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск по имени, телефону, бару..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-amber-500 outline-none"
            />
          </div>
        </div>

        {error && <div className="text-red-400 text-sm mb-4">{error}</div>}

        {loading && leads.length === 0 ? (
          <div className="text-center py-16 text-slate-500">Загрузка...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            {leads.length === 0 ? 'Заявок пока нет' : 'Ничего не найдено'}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onUpdate={updateStatus} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function LeadCard({ lead, onUpdate }: { lead: Lead; onUpdate: (id: number, status: LeadStatus, note?: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [noteDraft, setNoteDraft] = useState(lead.note || '');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-white font-semibold text-lg">{lead.name}</h3>
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${STATUS_COLORS[lead.status]}`}>
                {STATUS_LABELS[lead.status]}
              </span>
              <span className="text-slate-600 text-xs font-mono">#{lead.id}</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {lead.phone}
              </a>
              {lead.bar && (
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {lead.bar}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-3.5 h-3.5" />
                {formatDate(lead.created_at)}
              </span>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-slate-500 hover:text-white text-sm"
          >
            {expanded ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>

        {/* Quick status buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onUpdate(lead.id, 'new', lead.note || undefined)}
            disabled={lead.status === 'new'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              lead.status === 'new'
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-amber-500/40'
            }`}
          >
            <Circle className="w-3 h-3" />
            Новая
          </button>
          <button
            onClick={() => onUpdate(lead.id, 'in_progress', lead.note || undefined)}
            disabled={lead.status === 'in_progress'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              lead.status === 'in_progress'
                ? 'bg-blue-500/20 border-blue-500/40 text-blue-400'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-blue-500/40'
            }`}
          >
            <Clock className="w-3 h-3" />
            В работе
          </button>
          <button
            onClick={() => onUpdate(lead.id, 'closed', lead.note || undefined)}
            disabled={lead.status === 'closed'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              lead.status === 'closed'
                ? 'bg-green-500/20 border-green-500/40 text-green-400'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-green-500/40'
            }`}
          >
            <CheckCircle2 className="w-3 h-3" />
            Закрыта
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-slate-800 p-5 bg-slate-950/50">
          <label className="text-slate-500 text-xs font-mono uppercase tracking-wider block mb-2">
            Заметка
          </label>
          <textarea
            value={noteDraft}
            onChange={(e) => setNoteDraft(e.target.value)}
            rows={3}
            placeholder="Комментарий по заявке..."
            className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-sm text-white focus:border-amber-500 outline-none resize-none"
          />
          <button
            onClick={() => onUpdate(lead.id, lead.status, noteDraft)}
            className="mt-3 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            Сохранить заметку
          </button>
          {lead.source && (
            <div className="mt-4 text-xs text-slate-600">
              Источник: <span className="text-slate-400">{lead.source}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError('Неверный пароль');
        return;
      }
      const data = await res.json();
      onLogin(data.token);
    } catch {
      setError('Ошибка сети');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <form
        onSubmit={submit}
        className="bg-slate-900 border border-slate-800 rounded-xl p-8 w-full max-w-md space-y-5"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <h1 className="text-white font-bold text-xl tracking-wider">KING_CONTROL</h1>
        </div>
        <p className="text-slate-400 text-sm">Вход в админку</p>
        <div className="relative">
          <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            autoFocus
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white focus:border-amber-500 outline-none"
          />
        </div>
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-colors"
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
}
