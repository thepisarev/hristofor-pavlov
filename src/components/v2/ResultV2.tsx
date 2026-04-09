import { CheckCircle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const deliverables = [
  {
    num: '1',
    title: 'Ясная картина потерь:',
    desc: 'Таблица нарушений с таймкодами, скриншотами и видеофрагментами — каждый факт задокументирован.',
  },
  {
    num: '2',
    title: 'Финансовая прозрачность:',
    desc: 'Расчёт фактических потерь в рублях — вы увидите, сколько именно денег утекает и откуда.',
  },
  {
    num: '3',
    title: 'Системная защита:',
    desc: 'Оценка рисков + рекомендации по устранению — не абстрактные советы, а конкретный план действий.',
  },
  {
    num: '4',
    title: 'Прозрачные отношения с командой:',
    desc: 'Управление без разрушения доверия — рекомендации, как внедрить изменения, сохранив коллектив.',
  },
];

const visionItems = [
  {
    title: 'Финансовая прозрачность',
    desc: 'Каждая операция на виду — выручка прозрачна и предсказуема в любой час работы заведения.',
  },
  {
    title: 'Управление цифрами',
    desc: 'Решения принимаются на основе данных и цифр, а не догадок и интуиции.',
  },
  {
    title: 'Честная команда',
    desc: 'Система, в которой сотрудники работают честно и эффективно — потому что по-другому невыгодно.',
  },
  {
    title: 'Прогнозируемая прибыль',
    desc: 'Прибыль становится прогнозируемой — вы точно знаете, сколько заработаете в конце месяца.',
  },
  {
    title: 'Свобода и спокойствие',
    desc: 'Вы управляете бизнесом, а не тушите пожары — время для стратегии, развития и жизни.',
  },
];

export default function ResultV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-[#162032] py-20 md:py-28 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
        </div>

        {/* Header */}
        <h2 className={`text-slate-100 font-bold text-3xl md:text-4xl leading-tight text-center mb-4 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Ваш бизнес после KING_CONTROL: полный контроль, спокойствие и рост прибыли.
        </h2>
        <p className={`text-slate-400 font-mono text-sm text-center mb-14 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          KING_CONTROL — это не просто аудит. Это фундамент для вашего спокойствия и процветания.
        </p>

        {/* Terminal Block */}
        <div className={`bg-slate-950 border border-slate-800 rounded-xl overflow-hidden mb-14 transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-scale' : 'opacity-0 scale-95'}`}>
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-slate-500 text-xs font-mono">result.log</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-5">
            {deliverables.map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <span className="text-amber-500 font-mono font-bold text-sm mt-0.5 flex-shrink-0">
                  {item.num}.
                </span>
                <div>
                  <span className="text-white font-semibold">{item.title}</span>{' '}
                  <span className="text-slate-400 text-[15px] leading-relaxed">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h3 className={`text-slate-100 font-bold text-xl md:text-2xl text-center mb-8 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.5s' }}>
            Как выглядит бизнес после внедрения
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {visionItems.map((item, i) => (
              <div
                key={i}
                className={`bg-[#1E2D45] border border-[#2D3F57] rounded-xl p-5 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${
                  i >= 3 ? 'md:col-span-1' : ''
                } ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
