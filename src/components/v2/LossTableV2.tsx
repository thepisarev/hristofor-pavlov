import { useReveal } from '../../hooks/useReveal';

const tiers = [
  {
    turnover: '5 000 000 ₽/мес',
    percent: '15%',
    monthLoss: '750 000 ₽/мес',
    yearLoss: '9 000 000 ₽/год',
    barWidth: '31%',
  },
  {
    turnover: '10 000 000 ₽/мес',
    percent: '13%',
    monthLoss: '1 300 000 ₽/мес',
    yearLoss: '15 600 000 ₽/год',
    barWidth: '54%',
  },
  {
    turnover: '20 000 000 ₽/мес',
    percent: '12%',
    monthLoss: '2 400 000 ₽/мес',
    yearLoss: '28 800 000 ₽/год',
    barWidth: '100%',
  },
];

const riskZones = [
  'Недоливы и пересорт на баре',
  'Отмены чеков, скидки без основания',
  'Несанкционированные списания товара',
  'Долив коктейлей на 2/3 — систематическое нарушение ТТК',
  'Работа мимо кассы — пробитие после факта или без чека',
];

export default function LossTableV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-slate-950 py-20 md:py-28 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className={`font-mono text-amber-500 uppercase tracking-widest text-xs mb-4 transition-all duration-700 ${isVisible ? 'animate-reveal-left' : 'opacity-0 -translate-x-8'}`}>
            / Масштаб проблемы, которую вы могли не замечать
          </p>
          <h2 className={`text-white font-bold text-3xl md:text-4xl leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-left' : 'opacity-0 -translate-x-8'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
            От 9 до 28,8 миллионов рублей: сколько вашей чистой прибыли утекает ежегодно?
          </h2>
          <p className={`text-slate-400 text-[15px] leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-left' : 'opacity-0 -translate-x-8'}`}>
            Потери возникают не из-за плохих сотрудников, а там, где нет прозрачной системы контроля.
            Эти деньги — ваша чистая прибыль, которую вы уже заработали. Сырьё оплачено, аренда
            оплачена, зарплаты выданы. Закономерность: чем меньше оборот, тем больше процент потерь —
            в малых барах меньше развита система контроля.
          </p>
        </div>

        {/* Table Header */}
        <div className={`hidden md:grid grid-cols-[1.2fr_0.6fr_1fr_1.1fr_0.8fr] gap-4 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 px-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <span>Оборот</span>
          <span>% потерь</span>
          <span>Потери / мес</span>
          <span>Потери / год</span>
          <span>Масштаб</span>
        </div>

        {/* Table Rows */}
        <div className="space-y-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-slate-900/40 border border-slate-800 rounded-lg p-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.6fr_1fr_1.1fr_0.8fr] gap-4 items-center hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div>
                <span className="md:hidden text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Оборот
                </span>
                <span className="text-white font-semibold text-base">{tier.turnover}</span>
              </div>
              <div>
                <span className="md:hidden text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  % потерь
                </span>
                <span className="text-amber-500 font-bold text-lg">{tier.percent}</span>
              </div>
              <div>
                <span className="md:hidden text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Потери / мес
                </span>
                <span className="text-slate-300">{tier.monthLoss}</span>
              </div>
              <div>
                <span className="md:hidden text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Потери / год
                </span>
                <span className="text-amber-400 font-semibold">{tier.yearLoss}</span>
              </div>
              <div>
                <span className="md:hidden text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Масштаб
                </span>
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-red-500"
                    style={{ width: tier.barWidth }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Block */}
        <div className={`mt-8 bg-slate-900/30 border border-slate-800 rounded-lg p-5 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-amber-500 font-semibold">Почему проценты разные:</span>{' '}
            В заведениях с меньшим оборотом слабее развита система контроля, поэтому потери выше.
            В крупных заведениях процессы закручены, пространства для хищений меньше — но абсолютные суммы растут пропорционально обороту.
          </p>
        </div>

        {/* Risk Zones */}
        <div className={`mt-10 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-white font-semibold text-lg mb-4">Зоны риска, где чаще всего теряются деньги:</h3>
          <ul className="space-y-3">
            {riskZones.map((zone, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-slate-300 text-[15px]">{zone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
