import { Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const bullets = [
  'Удалённое подключение к камерам — без вмешательства в работу персонала',
  'Экспертная насмотренность — видим то, что скрыто от нетренированного взгляда',
  'Детальный отчёт с таймкодами, скриншотами и видео',
  'Конкретные рекомендации — не просто «что не так», а «как исправить»',
];

const stats = [
  { value: '12 лет', label: 'В индустрии баров, зная её изнутри' },
  { value: '60+', label: 'Проверенных заведений' },
  { value: '6 000+', label: 'Нарушений, устранённых у клиентов' },
];

export default function ExpertV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-slate-900 py-20 md:py-28 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className={`font-mono text-amber-500 uppercase tracking-widest text-xs mb-10 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          / Эксперт по операционной прозрачности баров и ресторанов
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          {/* Photo */}
          <div className={`flex-shrink-0 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-left' : 'opacity-0 -translate-x-8'}`}>
            <picture>
              <source srcSet="/expert.webp" type="image/webp" />
              <img
                src="/expert.jpg"
                alt="Христофор Павлов — эксперт KING_CONTROL"
                width={360}
                height={360}
                loading="lazy"
                className="w-[280px] md:w-[360px] rounded-xl object-cover"
              />
            </picture>
          </div>

          {/* Info */}
          <div className={`flex-1 transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-right' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-white font-bold text-[32px] leading-tight mb-4">
              Христофор Павлов
            </h3>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
              Стратегический партнёр, который помогает владельцам баров выстроить прозрачную
              и управляемую операционную систему. С опытом работы с крупнейшими барными сетями
              России, трансформирует бизнес из «чёрного ящика» в предсказуемый механизм.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-amber-500" />
                  </div>
                  <span className="text-slate-300 text-[15px] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className={`border-t-2 border-amber-500 pt-4 hover:border-amber-500/50 transition-colors duration-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
