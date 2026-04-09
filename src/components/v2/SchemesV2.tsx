import { Database, Lock, AlertTriangle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const operationalSchemes = [
  { num: '01', text: 'Недолив в коктейлях и пиве — систематическая экономия на госте' },
  { num: '02', text: 'Подмена премиальных ингредиентов дешёвыми аналогами' },
  { num: '03', text: 'Пересорт — продажа дешёвого товара по цене дорогого' },
  { num: '04', text: 'Работа мимо кассы — пробитие после факта или вовсе без чека' },
  { num: '05', text: 'Вынос продукции и расходников сотрудниками' },
];

const systemicSchemes = [
  { num: '06', text: 'Необоснованные удаления, отмены и скидки в системе' },
  { num: '07', text: 'Списания, не подтверждённые реальным расходом сырья' },
  { num: '08', text: 'Оформление персонала, который не работает (перерасход ФОТ)' },
  { num: '09', text: 'Искажение инвентаризаций — подгонка остатков под отчёт' },
  { num: '10', text: 'Сговор между сотрудниками: бар + кухня + менеджер' },
];

export default function SchemesV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-[#162032] py-20 md:py-28 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className={`inline-block bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
            Выявлено в 16 000+ аудитах KING_CONTROL
          </span>
          <h2 className={`text-slate-100 font-bold text-3xl md:text-5xl leading-tight mb-5 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
            10 сценариев, как деньги незаметно<br className="hidden md:block" /> утекают из вашего бара
          </h2>
          <p className={`text-slate-300 text-[15px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
            Это не единичные инциденты — это системная проблема отрасли. Каждый сценарий
            выявлен в реальных заведениях и подтверждён видеозаписями.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card 1 — Operational */}
          <div className={`bg-[#1E2D45] border border-[#2D3F57] rounded-xl p-8 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-left' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-[#F1F5F9] font-bold text-lg uppercase tracking-wide">
                Операционные
              </h3>
            </div>
            <ul className="space-y-4">
              {operationalSchemes.map((item) => (
                <li key={item.num} className="flex items-start gap-3">
                  <span className="text-[#F59E0B] font-mono font-bold text-sm mt-0.5 flex-shrink-0">
                    [{item.num}]
                  </span>
                  <span className="text-[#CBD5E1] text-[15px] leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Systemic */}
          <div className={`bg-[#1E2D45] border border-[#2D3F57] rounded-xl p-8 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-right' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-[#F1F5F9] font-bold text-lg uppercase tracking-wide">
                Системные
              </h3>
            </div>
            <ul className="space-y-4">
              {systemicSchemes.map((item) => (
                <li key={item.num} className="flex items-start gap-3">
                  <span className="text-[#F59E0B] font-mono font-bold text-sm mt-0.5 flex-shrink-0">
                    [{item.num}]
                  </span>
                  <span className="text-[#CBD5E1] text-[15px] leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning Block */}
        <div className={`bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 flex items-start gap-4 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.5s' }}>
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <p className="text-amber-400 font-semibold text-sm mb-1">Важно понимать</p>
            <p className="text-slate-300 text-[15px] leading-relaxed">
              Большинство этих схем невозможно выявить стандартными средствами — инвентаризацией,
              отчётами из системы автоматизации или камерами без экспертного анализа. Именно
              поэтому они работают годами незамеченными.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
