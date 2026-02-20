import { Check } from 'lucide-react';

const deliverables = [
  'Таблица нарушений с доказательствами — время, описание, фото и видео с камер',
  'Расчёт фактических потерь и их динамики с экстраполяцией',
  'Оценка системных рисков в процессах заведения',
  'Конкретные изменения в процессах — что и как перестроить',
  'Рекомендации по управлению командой без разрушения коллектива',
];

const futureVision = [
  { icon: '01', text: 'Бар работает как часы — каждая смена прозрачна' },
  { icon: '02', text: 'Вы управляете цифрами, а не догадками' },
  { icon: '03', text: 'Команда знает, что есть система — и работает честно' },
  { icon: '04', text: 'Прибыль прогнозируема и подконтрольна' },
];

export const Result: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-display font-bold mb-4 text-center uppercase">
          Что вы получите после аудита
        </h2>
        <p className="text-center text-slate-500 font-mono text-sm mb-12">
          Контроль. Управляемость. Прогнозируемая прибыль.
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

        {/* Positive Future Vision */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl text-white font-display font-bold mb-8 text-center">
            Как выглядит бизнес после внедрения
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {futureVision.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-sm hover:border-green-500/30 transition-colors">
                <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-slate-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
