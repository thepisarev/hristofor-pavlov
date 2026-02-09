import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Стоимость</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
            Сколько стоит
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Card: Price */}
          <div className="flex-1 bg-slate-950 border border-slate-700 p-10 rounded-lg relative overflow-hidden group hover:border-amber-500/50 transition-colors shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check className="w-24 h-24" />
            </div>

            <h3 className="text-amber-500 font-mono text-sm uppercase mb-4 tracking-widest">Экспресс-аудит</h3>
            <div className="text-5xl text-white font-display font-bold mb-2">
              от 50 000 <span className="text-2xl">₽</span>
            </div>
            <p className="text-slate-500 text-sm mb-8">Это стоимость 2-3 дней работы. Вы узнаете, теряете ли деньги и сколько.</p>

            <ul className="space-y-4 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Таблица нарушений с доказательствами</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Расчёт потерь с экстраполяцией</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Конкретные рекомендации</li>
            </ul>

            <p className="text-slate-600 text-xs mt-8 border-t border-slate-800 pt-4">
              Если после аудита окажется, что у вас всё хорошо — я скажу об этом честно. Это тоже результат, и ваше спокойствие тоже стоит денег.
            </p>
          </div>

          {/* Card: Cost of Doing Nothing */}
          <div className="flex-1 bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-900/30 p-10 rounded-lg flex flex-col justify-center">
            <h3 className="text-red-500 font-mono text-sm uppercase mb-6 tracking-widest">Ваши текущие потери</h3>
            <div className="text-5xl text-white font-display font-bold mb-4">
              от 800 000 ₽<span className="text-red-500">/мес</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Средние потери бара с оборотом 20 млн. Аудит окупается за первые 2 дня после внедрения изменений.
            </p>
            <p className="text-slate-500 text-sm">
              Для сравнения: один нечестный сотрудник может стоить вам в 5 раз больше цены аудита. Ежемесячно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
