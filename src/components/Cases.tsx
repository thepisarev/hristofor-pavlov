import { TrendingUp } from 'lucide-react';

const cases = [
  {
    id: 1,
    city: 'Москва',
    type: 'Коктейльный бар',
    turnover: '10 млн ₽',
    lossDay: '~17 000 ₽',
    lossMonth: '~520 000 ₽',
    lossYear: '~6,2 млн ₽',
    problem: 'Часть гостей проходила с оплатой наличными без отражения в системе. Фиксировались удаления позиций из выданных чеков без корректного списания товара.',
    solution: 'Перестроена система входной и кассовой зоны: новые регламенты контроля операций, усилена управленческая дисциплина, настроены регулярные видеоаудиты ключевых точек.',
  },
  {
    id: 2,
    city: 'Ярославль',
    type: 'Коктейльный бар',
    turnover: '4–5 млн ₽',
    lossDay: '~6 000–7 000 ₽',
    lossMonth: '~190 000 ₽',
    lossYear: '~2,2 млн ₽',
    problem: 'Бармен системно переливал алкоголь сверх норм ТТК и получал от гостей допсредства под видом чаевых. Несанкционированное увеличение себестоимости и вывод маржи.',
    solution: 'Усилен контроль соблюдения ТТК, внедрены регулярные видеоаудиты приготовления напитков. Восстановлен контроль за нормами налива, стабилизированы показатели списаний.',
  },
  {
    id: 3,
    city: 'Наб. Челны',
    type: 'Коктейльный бар',
    turnover: '10–12 млн ₽',
    lossDay: '~3 200 ₽',
    lossMonth: '~96 000 ₽',
    lossYear: '~1,15 млн ₽',
    problem: 'При формальной 12-часовой смене часть персонала покидала рабочее место раньше. В сумме по команде поваров — около 8 часов оплачиваемого, но неотработанного времени в день.',
    solution: 'Внедрена постоянная проверка кухни через видеоаудит с регулярной сверкой графиков и фактического присутствия. Сокращены потери фонда оплаты труда.',
  },
];

export const Cases: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Результаты</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
            Реальные кейсы
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-4 max-w-xl mx-auto">
            Что находим, сколько теряется и как решаем — на примерах из практики.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="bg-slate-950 border border-slate-700 rounded-sm overflow-hidden hover:border-amber-500/30 transition-all duration-300 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-500 font-mono text-xs uppercase tracking-wider">Кейс #{item.id}</span>
                  <span className="text-slate-500 font-mono text-xs">{item.city}</span>
                </div>
                <div className="text-white font-display font-bold text-lg">{item.type}</div>
                <div className="text-slate-500 font-mono text-xs mt-1">Оборот: {item.turnover}</div>
              </div>

              {/* Losses */}
              <div className="p-6 border-b border-slate-800 bg-red-500/5">
                <div className="text-xs text-slate-500 uppercase font-mono mb-3">Выявленные потери</div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-red-400 font-mono text-xs font-bold">{item.lossDay}</div>
                    <div className="text-slate-600 font-mono text-[10px]">в день</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-mono text-xs font-bold">{item.lossMonth}</div>
                    <div className="text-slate-600 font-mono text-[10px]">в месяц</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-mono text-xs font-bold">{item.lossYear}</div>
                    <div className="text-slate-600 font-mono text-[10px]">в год</div>
                  </div>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono mb-2">Что нашли</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <div className="text-xs text-amber-500/80 uppercase font-mono mb-2">Что сделали</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>

              {/* Annual Impact */}
              <div className="p-4 bg-slate-900/50 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-xs">Потенциал возврата:</span>
                  <span className="text-amber-500 font-mono text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {item.lossYear}/год
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 font-mono text-xs">
            Данные обезличены. Подробности — при личном общении.
          </p>
        </div>
      </div>
    </section>
  );
};
