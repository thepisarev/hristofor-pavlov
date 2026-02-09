const steps = [
  { num: '01', title: 'СОЗВОН', text: '30 минут — разбираемся в вашей ситуации' },
  { num: '02', title: 'ПОДКЛЮЧЕНИЕ', text: 'Подключаемся к камерам удалённо, вам ничего не нужно делать' },
  { num: '03', title: 'АУДИТ', text: '3-5 смен, живые эксперты смотрят записи' },
  { num: '04', title: 'ОТЧЁТ', text: 'Вы видите реальную картину с доказательствами' },
  { num: '05', title: 'РЕКОМЕНДАЦИИ', text: 'Как закрыть дыры и прекратить потери' },
];

export const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Протокол</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold uppercase">
            Как это <span className="text-amber-500">работает</span>
          </h2>
        </div>
        <p className="text-center text-slate-500 font-mono text-sm mb-16">
          1-2 недели от старта до отчёта
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-4 hidden md:block z-0 opacity-50">
            <svg width="100%" height="100%">
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#475569" strokeWidth="1" strokeDasharray="8 4" className="animate-dash" />
            </svg>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex-1 group">
              <div className="w-16 h-16 bg-slate-900 border-2 border-slate-700 group-hover:border-amber-500 text-slate-500 group-hover:text-amber-500 flex items-center justify-center font-mono text-xl font-bold rounded-full mb-6 transition-all duration-300 mx-auto md:mx-0 shadow-xl relative">
                {step.num}
                <div className="absolute inset-0 rounded-full border-2 border-amber-500 opacity-0 group-hover:animate-ping"></div>
              </div>
              <h3 className="text-white font-display font-medium mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-center md:text-left">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
