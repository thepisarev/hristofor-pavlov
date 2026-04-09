# KING_CONTROL — Лендинг Христофора Павлова

## Проект
Лендинг для услуги видеоаудита баров и ресторанов. Клиент — Христофор Павлов.
Стек: React + TypeScript + Vite + Tailwind CSS.

## Команды
- `npm run dev` — локальный дев-сервер
- `npm run build` — сборка в dist/
- Деплой: `npm run build && scp -r dist/* root@159.194.207.24:/var/www/html/`

## VPS сервер
- **IP:** 159.194.207.24
- **SSH:** `ssh root@159.194.207.24` (ключ ed25519 с этой машины)
- **ОС:** Ubuntu 24.04 LTS
- **Конфиг:** 1 CPU / 1 GB RAM / 10 GB NVMe
- **Nginx конфиг:** `/etc/nginx/sites-available/king-control`
- **Веб-корень:** `/var/www/html/`
- **SSL:** Let's Encrypt (certbot, автообновление)

## Домены
- **king-control.ru** — основной домен
- **king-audit.ru** → редирект на king-control.ru
- **корольконтроль.рф** (xn--j1aacbjdacbofx0kh.xn--p1ai) → редирект
- **король-контроль.рф** (xn----stbbccldadbpgz9ki.xn--p1ai) → редирект

## Контакты Христофора
- Телефон: +79219879823
- Telegram: @hristoforpavlov

## Структура компонентов
Hero → LossTable → Schemes → Myths → Expert → Result → Cases → Geography → Steps → Pricing → CTA → Footer

## География (карта)
- Используется react-simple-maps с GeoJSON (`public/russia.geojson`)
- Lazy-loaded (отдельный чанк)
- 25 городов где работали (из списка клиента)
- Города где НЕ работали: Минск, Могилев, Ессентуки, Самара, Иваново, Улан-Удэ, Тагил, Сыктывкар, Череповец, Мурманск, Рязань, МО, Ростов

## Формы
Форма консультации пока НЕ отправляет данные — просто открывает Telegram. Нужно подключить (Telegram-бот, email или Google Sheets).

## Оптимизации (выполнены)
- Gzip для JS/CSS/JSON
- Security headers (HSTS, X-Frame-Options, nosniff, Referrer-Policy)
- expert.jpg оптимизирован (554KB → 34KB WebP + 56KB JPG fallback)
- Lazy-load карты (отдельный чанк ~110KB)
- Кеширование: assets 1 год (immutable), статика 30д, HTML no-cache
- Font preconnect, favicon
- OG-теги для соцсетей
