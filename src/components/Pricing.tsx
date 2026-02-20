import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Стоимость</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
            Формат работы
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Card: Express Audit */}
          <div className="flex-1 bg-slate-950 border border-slate-700 p-10 rounded-lg relative overflow-hidden group hover:border-amber-500/50 transition-colors shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check className="w-24 h-24" />
            </div>

            <h3 className="text-amber-500 font-mono text-sm uppercase mb-4 tracking-widest">Экспресс-аудит</h3>
            <div className="text-5xl text-white font-display font-bold mb-2">
              50 000 <span className="text-2xl">₽</span>
            </div>
            <p className="text-slate-500 text-sm mb-8">Анализ 3–5 смен. Вы получаете полную картину: где теряете, сколько и почему.</p>

            <ul className="space-y-4 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Таблица нарушений с доказательствами</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Расчёт потерь с экстраполяцией</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Оценка системных рисков</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Конкретные рекомендации по процессам</li>
            </ul>

            <p className="text-slate-600 text-xs mt-8 border-t border-slate-800 pt-4">
              Если после аудита окажется, что потерь нет — мы скажем об этом честно. Подтверждение, что система работает — тоже ценный результат.
            </p>
          </div>

          {/* Card: Full Implementation */}
          <div className="flex-1 bg-gradient-to-br from-amber-900/20 to-slate-900 border border-amber-900/30 p-10 rounded-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-[10px] uppercase tracking-wider rounded-sm">
              Максимальный результат
            </div>

            <div>
              <h3 className="text-amber-500 font-mono text-sm uppercase mb-4 tracking-widest">Квартальное внедрение</h3>
              <div className="text-5xl text-white font-display font-bold mb-2">
                по запросу
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                3 месяца работы: находим проблемы, пишем инструкции, выстраиваем систему контроля под ваше заведение.
              </p>

              <ul className="space-y-4 font-mono text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Всё из экспресс-аудита</li>
                <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Разработка процессов под ваш бар</li>
                <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Инструкции для персонала</li>
                <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Контроль внедрения на протяжении квартала</li>
              </ul>
            </div>

            <p className="text-slate-500 text-sm">
              После внедрения — возможность ежемесячного обслуживания для поддержания системы.
            </p>
          </div>
        </div>

        {/* Scale Note */}
        <div className="mt-12 bg-slate-950/60 border border-slate-800 p-6 rounded-sm">
          <h4 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">Когда аудит особенно нужен</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-400 font-mono">
            <div className="flex items-center gap-2"><span className="text-amber-500/60">—</span> Открываете вторую точку</div>
            <div className="flex items-center gap-2"><span className="text-amber-500/60">—</span> Оборот свыше 10 млн</div>
            <div className="flex items-center gap-2"><span className="text-amber-500/60">—</span> В штате 15+ сотрудников</div>
            <div className="flex items-center gap-2"><span className="text-amber-500/60">—</span> Нет возможности контролировать каждую смену</div>
          </div>
        </div>
      </div>
    </section>
  );
};
