import { Database, Lock, AlertTriangle } from 'lucide-react';

const operationalRisks = [
  'Продажи мимо кассы — расхождение между выдачей и чеком',
  'Потребление продукции бара без учёта',
  'Реализация собственных товаров через ваше заведение',
  'Неучтённые «чаевые» с каждого гостя',
  'Махинации с акциями и спецпредложениями',
];

const systemicRisks = [
  'Продажа позиций с нулевой себестоимостью (лёд, вода) без фиксации',
  'Платный вход для «отказных» гостей в обход кассы',
  'Оформление персонала, который не работает',
  'Реализация реквизита и инвентаря',
  'Обсчёт гостей с присвоением разницы',
];

export const Schemes: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 pointer-events-none"></div>

      {/* Decorative Background Wireframes */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none rotate-12">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-slate-400">
          <rect x="20" y="20" width="60" height="80" rx="2" strokeWidth="0.5" />
          <line x1="25" y1="30" x2="75" y2="30" strokeWidth="0.5" />
          <line x1="25" y1="40" x2="65" y2="40" strokeWidth="0.5" />
          <line x1="25" y1="50" x2="75" y2="50" strokeWidth="0.5" />
          <line x1="25" y1="80" x2="45" y2="80" strokeWidth="0.5" />
          <path d="M30 60 L40 70 L50 60 L60 70" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 font-mono text-xs rounded-sm mb-4 uppercase tracking-widest border border-amber-500/20">
            Типовые зоны риска по данным 16 000+ аудитов
          </div>
          <h2 className="text-3xl md:text-5xl text-white font-display font-bold">
            Где бары теряют прибыль
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card: Operational */}
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-amber-500">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M45 20 L55 20 L55 35 L65 35 L70 90 L30 90 L35 35 L45 35 Z" />
                <line x1="32" y1="80" x2="68" y2="80" strokeDasharray="2 2" />
                <path d="M50 45 L50 75" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 relative z-10">
              <h3 className="text-xl text-white font-display font-medium uppercase">Операционные</h3>
              <Database className="text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-400 relative z-10">
              {operationalRisks.map((scheme, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-amber-500 font-bold shrink-0">[{String(idx + 1).padStart(2, '0')}]</span>
                  <p>{scheme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card: Systemic */}
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-amber-500">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="25" y="40" width="50" height="40" rx="2" />
                <path d="M35 40 L35 25 Q35 20 40 20 L60 20 Q65 20 65 25 L65 40" />
                <line x1="40" y1="55" x2="60" y2="55" strokeDasharray="2 2" />
                <line x1="40" y1="65" x2="60" y2="65" strokeDasharray="2 2" />
                <rect x="70" y="50" width="10" height="20" rx="1" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 relative z-10">
              <h3 className="text-xl text-white font-display font-medium uppercase">Системные</h3>
              <Lock className="text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-400 relative z-10">
              {systemicRisks.map((scheme, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-amber-500 font-bold shrink-0">[{String(idx + 6).padStart(2, '0')}]</span>
                  <p>{scheme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlighted Note */}
        <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-slate-900 border border-amber-900/30 p-6 rounded-sm flex items-start gap-4">
          <AlertTriangle className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-amber-400 font-bold">Важно:</span> Эти зоны риска существуют в большинстве заведений — независимо от уровня команды. Потери возникают не потому что сотрудники плохие, а потому что процессы не прозрачны.
          </p>
        </div>
      </div>
    </section>
  );
};
