const metrics = [
  { turnover: '5 млн ₽', lossMonth: '200 000 – 600 000 ₽', lossYear: '2,4 – 7,2 млн ₽', barWidth: 20 },
  { turnover: '10 млн ₽', lossMonth: '400 000 – 1,2 млн ₽', lossYear: '4,8 – 14,4 млн ₽', barWidth: 50 },
  { turnover: '20 млн ₽', lossMonth: '800 000 – 2,4 млн ₽', lossYear: '9,6 – 28,8 млн ₽', barWidth: 90 },
];

export const LossTable: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 relative border-b border-slate-800/50 overflow-hidden">
      {/* Decorative Graph Vector */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,300 Q150,250 300,280 T600,200 T900,100 T1200,50" fill="none" stroke="url(#loss-gradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <defs>
            <linearGradient id="loss-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Масштаб проблемы</h4>
            <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
              Почему даже сильные бары теряют 8–15% оборота
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-mono max-w-xs mt-4 md:mt-0 text-right">
            Потери возникают не из-за плохих<br />сотрудников, а там, где нет системы.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-4 px-6 font-mono text-xs text-slate-500 uppercase tracking-wider">
          <span>Ваш оборот</span>
          <span>Потери в месяц</span>
          <span>Потери в год</span>
          <span></span>
        </div>

        <div className="grid gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-sm hover:border-slate-600 transition-colors group">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <span className="text-xs text-slate-500 uppercase md:hidden">Оборот: </span>
                  <span className="text-white font-display font-bold text-lg">{item.turnover}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase md:hidden">В месяц: </span>
                  <span className="text-amber-400 font-mono text-sm">{item.lossMonth}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase md:hidden">В год: </span>
                  <span className="text-red-500 font-mono text-sm font-bold">{item.lossYear}</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-red-500 shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-1000"
                    style={{ width: `${item.barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-amber-500 font-bold">В среднем — 12% оборота.</span> Это не процент от выручки — это ваша чистая прибыль.
            Сырьё оплачено, аренда оплачена, зарплаты выданы. Потери идут из того, что уже заработано.
          </p>
        </div>

        {/* Risk Zones */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Операции вне кассы',
            'Расхождения по порциям и списаниям',
            'Неконтролируемые допродажи',
            'Договорённости внутри смен',
            'Слепые зоны при масштабировании',
          ].map((zone, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-500 text-sm font-mono">
              <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full shrink-0"></span>
              {zone}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
