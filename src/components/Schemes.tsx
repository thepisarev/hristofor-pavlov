import { Database, Lock, AlertTriangle } from 'lucide-react';

const classicSchemes = [
  'Не пробивают в кассу — деньги в карман',
  'Употребляют продукцию бара без оплаты',
  'Продают свои сигареты, стики — позиций нет в меню, контролировать невозможно',
  'Берут «чаевые» с каждого гостя без вашего ведома',
  'Махинации по акциям',
];

const creativeSchemes = [
  'Продают лёд по 200₽ за стакан (себестоимость — 0)',
  'Пускают «за косарь» тех, кому отказали на входе',
  'Оформляют 5 диджеев, по факту работают 3',
  'Продают ваш реквизит гостям',
  'Обманывают и обсчитывают гостей',
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
          <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 font-mono text-xs rounded-sm mb-4 uppercase tracking-widest border border-red-500/20">
            Вот что я нахожу в первую же неделю проверки
          </div>
          <h2 className="text-3xl md:text-5xl text-white font-display font-bold">
            Как именно у вас воруют
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card: Classic */}
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-amber-500">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M45 20 L55 20 L55 35 L65 35 L70 90 L30 90 L35 35 L45 35 Z" />
                <line x1="32" y1="80" x2="68" y2="80" strokeDasharray="2 2" />
                <path d="M50 45 L50 75" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 relative z-10">
              <h3 className="text-xl text-white font-display font-medium uppercase">Классика</h3>
              <Database className="text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-400 relative z-10">
              {classicSchemes.map((scheme, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-red-500 font-bold shrink-0">[!]</span>
                  <p>{scheme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card: Creative */}
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
              <h3 className="text-xl text-white font-display font-medium uppercase">Изобретательное</h3>
              <Lock className="text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-400 relative z-10">
              {creativeSchemes.map((scheme, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-amber-500 font-bold shrink-0">[warn]</span>
                  <p>{scheme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlighted Case */}
        <div className="mt-12 bg-gradient-to-r from-red-900/20 to-slate-900 border border-red-900/30 p-6 rounded-sm flex items-start gap-4">
          <AlertTriangle className="text-red-500 w-6 h-6 shrink-0 mt-0.5" />
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-red-400 font-bold">Реальный кейс:</span> В Сочи бармены уволились, не расстроились — и открыли свой бар. На ваши деньги.
          </p>
        </div>
      </div>
    </section>
  );
};
