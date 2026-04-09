import {
  Search,
  ShieldCheck,
  RefreshCw,
  Check,
  TrendingDown,
  Users,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { useReveal } from '../../hooks/useReveal';

interface PricingCard {
  icon: React.ReactNode;
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  footer?: string;
  highlighted?: boolean;
  badge?: string;
}

const cards: PricingCard[] = [
  {
    icon: <Search className="w-8 h-8 text-amber-500" />,
    title: "ЭКСПРЕСС-АУДИТ",
    price: "50 000 \u20BD",
    description:
      "Полная проверка вашего заведения за 3\u20135 смен. Вы получите детальный отчёт с доказательствами и расчётом потерь.",
    features: [
      "Удалённое подключение к камерам",
      "Аудит 3\u20135 рабочих смен",
      "Детальный отчёт с видеодоказательствами",
      "Расчёт потерь и рекомендации",
    ],
    footer: "Ваши 50 000 \u20BD могут вернуть до 7,2 млн \u20BD в год",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "КВАРТАЛЬНОЕ ВНЕДРЕНИЕ",
    price: "от 300 000 \u20BD",
    priceNote: "точные условия индивидуально",
    description:
      "Полный цикл: аудит, разработка и внедрение регламентов, проверка работы по ним, корректировка в течение квартала.",
    features: [
      "Всё из экспресс-аудита",
      "Разработка и внедрение регламентов",
      "Проверка работы по регламентам",
      "Корректировка в течение квартала",
      "Включает ежемесячное обслуживание",
    ],
    footer:
      "Система контроля под ключ на 3 месяца",
    highlighted: true,
    badge: "МАКСИМАЛЬНЫЙ РЕЗУЛЬТАТ",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-amber-500" />,
    title: "ЕЖЕМЕСЯЧНОЕ ОБСЛУЖИВАНИЕ",
    price: "по договорённости",
    priceNote: "после квартального внедрения",
    description:
      "Постоянный контроль после внедрения системы. Гарантия, что результаты сохраняются и улучшаются.",
    features: [
      "Регулярные видеоаудиты смен",
      "Мониторинг соблюдения регламентов",
      "Ежемесячные отчёты и рекомендации",
    ],
  },
];

const triggers = [
  {
    icon: <TrendingDown className="w-6 h-6 text-amber-500" />,
    title: "Падает стабильность прибыли",
    desc: "При стабильном потоке гостей выручка снижается",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-500" />,
    title: "Открываете вторую точку",
    desc: "Масштабируете бизнес — нужны регламенты",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
    title: "Нет прозрачности",
    desc: "Вы не понимаете, куда уходят деньги",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    title: "Подозрения",
    desc: "Есть ощущение, что персонал работает \u00ABна себя\u00BB",
  },
];

interface PricingV2Props {
  onCtaClick?: () => void;
}

export default function PricingV2({ onCtaClick }: PricingV2Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-[#162032] py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className={`text-amber-500 font-mono text-sm uppercase tracking-wider mb-4 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          / Инвестиция в вашу прибыль
        </p>

        {/* H2 */}
        <h2 className={`text-slate-100 font-bold text-3xl md:text-[42px] md:leading-tight mb-12 max-w-3xl transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          От обнаружения потерь до полного контроля
        </h2>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative rounded-xl p-6 flex flex-col hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${
                card.highlighted
                  ? "border-2 border-amber-500 bg-gradient-to-b from-amber-900/10 to-[#1E2D45]"
                  : "bg-[#1E2D45] border border-[#2D3F57]"
              } ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Badge */}
              {card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 mt-1">{card.icon}</div>

              {/* Title */}
              <h3 className="text-[#F1F5F9] font-bold text-lg mb-4 tracking-wide">
                {card.title}
              </h3>

              {/* Price */}
              <p className="text-[#F1F5F9] font-bold text-3xl mb-1">
                {card.price}
              </p>
              {card.priceNote && (
                <p className="text-[#94A3B8] text-sm mb-4">{card.priceNote}</p>
              )}

              {/* Description */}
              <p className="text-[#CBD5E1] text-sm mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {card.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-[#CBD5E1] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              {card.footer && (
                <div className="border-t border-[#2D3F57] pt-4">
                  <p className="text-[#F59E0B] text-sm font-semibold mb-4">
                    {card.footer}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={onCtaClick}
                className={`w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors mt-auto ${
                  card.highlighted
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    : 'bg-[#2D3F57] hover:bg-[#3D5070] text-[#F1F5F9]'
                }`}
              >
                {card.highlighted ? 'Запросить расчёт' : i === 0 ? 'Записаться на консультацию' : 'Подать заявку'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom block */}
        <div className={`bg-[#1E2D45] border border-[#2D3F57] rounded-xl p-8 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="text-[#F1F5F9] font-bold text-xl mb-6 text-center">
            КОГДА АУДИТ ОСОБЕННО НУЖЕН
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {triggers.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-3">{t.icon}</div>
                <p className="text-[#F1F5F9] font-semibold text-sm mb-1">
                  {t.title}
                </p>
                <p className="text-[#94A3B8] text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sochi story */}
        <div className={`mt-12 relative rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.9s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-[#1E2D45] to-[#162032]" />
          <div className="relative p-8 md:p-12 border border-amber-500/20 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-amber-500 font-mono text-xs uppercase tracking-widest shrink-0 mt-1">История из практики</span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/40 to-transparent mt-3" />
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-6">
              Пять лет доверия — и свой бар на соседней улице
            </h3>

            <div className="space-y-4 text-slate-300 text-[15px] md:text-base leading-relaxed max-w-3xl">
              <p>
                Ко мне обратился владелец коктейль-бара в Сочи. История классическая: <span className="text-white font-medium">пять лет</span> с ним работала одна и та же команда барменов — «свои в доску», «ребята как семья», «я им доверяю как себе».
              </p>
              <p>
                Мы подключились к камерам. <span className="text-white font-medium">За три смены</span> нашли систематические схемы: недоливы, продажи мимо кассы, «свои» гости без чеков. Владелец долго не верил — пока не увидел записи.
              </p>
              <p>
                Он уволил всех. А через <span className="text-amber-400 font-medium">месяц</span> те ребята открыли <span className="text-amber-400 font-medium">свой собственный бар</span> на соседней улице.
              </p>
              <div className="pt-2 border-l-2 border-amber-500 pl-5 mt-6 italic text-amber-300 text-lg">
                «Наворовались ровно столько, чтобы хватило открыть своё заведение».
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
