interface CTAProps {
  onCtaClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-32 px-4 bg-slate-950 relative overflow-hidden">
      {/* Grid background effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl text-white font-display font-bold text-center mb-6">
          Запишитесь на бесплатную консультацию
        </h2>

        <div className="text-center mb-8 space-y-4">
          <p className="text-slate-400 text-base leading-relaxed">
            За 30 минут созвона мы:
          </p>
          <ul className="text-slate-300 text-sm space-y-2 inline-block text-left font-mono">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Разберём вашу ситуацию и процессы
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Определим зоны, где вероятнее всего теряется прибыль
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Рассчитаем потенциал возврата
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Вы решите, нужен ли аудит
            </li>
          </ul>
        </div>

        {/* Urgency Block */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-sm">
            <p className="text-amber-500 font-mono text-xs uppercase tracking-wider">
              Берём не более 3 проектов одновременно — работаем на качество
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white font-mono text-base rounded-sm transition-all uppercase tracking-wider font-bold shadow-lg shadow-amber-600/20"
          >
            Записаться на консультацию
            <span className="text-xl">→</span>
          </button>
          <p className="text-slate-600 text-xs mt-6">
            Без давления. Если у вас всё работает хорошо — мы скажем об этом честно.
          </p>
        </div>
      </div>
    </section>
  );
};
