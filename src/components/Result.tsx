const deliverables = [
  'Таблица нарушений — время, описание, доказательства (фото и видео с камер)',
  'Расчёт потерь — сколько утекает за месяц с экстраполяцией',
  'Конкретные рекомендации — что изменить, чтобы это прекратить',
];

export const Result: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-display font-bold mb-4 text-center uppercase">
          Что вы получите
        </h2>
        <p className="text-center text-slate-500 font-mono text-sm mb-12">
          Не абстрактный «отчёт». Конкретные имена, даты, суммы.
        </p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 md:p-8 font-mono shadow-2xl">
          <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-500 ml-2">audit_report_final.pdf</span>
          </div>

          <div className="space-y-5 text-sm md:text-base">
            <p className="text-slate-500 text-xs">{'>'} После аудита у вас на руках:</p>
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-amber-500 shrink-0 mt-0.5">0{index + 1}.</span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
            <div className="animate-pulse text-amber-500 mt-4">_</div>
          </div>
        </div>
      </div>
    </section>
  );
};
