import { useReveal } from '../../hooks/useReveal';

interface CTAV2Props {
  onCtaClick: () => void;
}

export const CTAV2: React.FC<CTAV2Props> = ({ onCtaClick }) => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background image */}
      <img
        src="/cta-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
        loading="lazy"
      />

      <div ref={ref} className="max-w-3xl mx-auto relative z-10">
        {/* Accent line */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <div className="w-20 h-[3px] bg-amber-500 rounded-full"></div>
        </div>

        <h2 className={`text-3xl md:text-[40px] text-white font-display font-bold text-center mb-6 leading-[1.2] transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Получите ясность: бесплатная<br />стратегическая консультация
        </h2>

        <p className={`text-center text-slate-400 text-[17px] leading-relaxed mb-8 max-w-[600px] mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Начните возвращать свои деньги и обретите полный контроль уже сейчас. Запишитесь на 30-минутную консультацию с Христофором Павловым.
        </p>

        <div className={`text-center mb-8 space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <ul className="text-slate-300 text-sm space-y-3 inline-block text-left font-mono">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Разберём именно вашу ситуацию и процессы
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Определим зоны скрытых потерь прибыли
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Рассчитаем потенциальный возврат средств
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 shrink-0">{'>'}</span>
              Вы получите объективную оценку и сами решите
            </li>
          </ul>
        </div>

        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.4s' }}>
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-sm">
            <p className="text-amber-500 font-mono text-xs uppercase tracking-wider">
              Берём не более 3 новых проектов одновременно — работаем на качество
            </p>
          </div>
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.5s' }}>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-3 px-12 py-[22px] bg-amber-600 hover:bg-amber-500 text-white font-mono text-base rounded-md transition-all uppercase tracking-wider font-bold shadow-lg shadow-amber-600/20"
          >
            Записаться на консультацию
            <span className="text-xl">→</span>
          </button>
          <p className="text-slate-600 text-[13px] mt-6 max-w-[600px] mx-auto leading-relaxed">
            Без обязательств и давления. Если всё работает идеально — скажем честно. Ваш контроль и спокойствие — наша главная цель.
          </p>
        </div>
      </div>
    </section>
  );
};
