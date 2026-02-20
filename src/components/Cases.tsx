import { TrendingUp } from 'lucide-react';

const cases = [
  {
    id: 1,
    city: '??????',
    type: '??????',
    turnover: '?? млн ₽',
    lossBefore: '??? тыс ₽/мес',
    lossPercent: '?%',
    lossAfter: '??? тыс ₽/мес',
    savedPercent: '?%',
    savedAmount: '?.? млн ₽/мес',
    details: 'Описание кейса появится после получения данных от клиента',
    placeholder: true,
  },
  {
    id: 2,
    city: '??????',
    type: '??????',
    turnover: '?? млн ₽',
    lossBefore: '??? тыс ₽/мес',
    lossPercent: '?%',
    lossAfter: '??? тыс ₽/мес',
    savedPercent: '?%',
    savedAmount: '?.? млн ₽/мес',
    details: 'Описание кейса появится после получения данных от клиента',
    placeholder: true,
  },
  {
    id: 3,
    city: '??????',
    type: '??????',
    turnover: '?? млн ₽',
    lossBefore: '??? тыс ₽/мес',
    lossPercent: '?%',
    lossAfter: '??? тыс ₽/мес',
    savedPercent: '?%',
    savedAmount: '?.? млн ₽/мес',
    details: 'Описание кейса появится после получения данных от клиента',
    placeholder: true,
  },
];

export const Cases: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Результаты</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
            Кейсы: было — стало
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-4 max-w-xl mx-auto">
            Реальные результаты аудитов. Цифры, которые собственники получили после внедрения рекомендаций.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className={`bg-slate-950 border rounded-sm overflow-hidden ${item.placeholder ? 'border-slate-800/50 opacity-60' : 'border-slate-700 hover:border-amber-500/30'} transition-all duration-300`}>
              {/* Header */}
              <div className="p-6 border-b border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-500 font-mono text-xs uppercase tracking-wider">Кейс #{item.id}</span>
                  <span className="text-slate-600 font-mono text-xs">{item.city}</span>
                </div>
                <div className="text-white font-display font-bold text-lg">{item.type}</div>
                <div className="text-slate-500 font-mono text-xs mt-1">Оборот: {item.turnover}</div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 divide-x divide-slate-800">
                <div className="p-4">
                  <div className="text-xs text-slate-500 uppercase font-mono mb-2">До аудита</div>
                  <div className="text-red-400 font-mono text-sm font-bold">{item.lossBefore}</div>
                  <div className="text-slate-600 font-mono text-xs">потери {item.lossPercent}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-500 uppercase font-mono mb-2">После</div>
                  <div className="text-green-400 font-mono text-sm font-bold">{item.lossAfter}</div>
                  <div className="text-slate-600 font-mono text-xs">потери {item.savedPercent}</div>
                </div>
              </div>

              {/* Savings */}
              <div className="p-4 bg-slate-900/50 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-xs">Экономия:</span>
                  <span className="text-amber-500 font-mono text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {item.savedAmount}
                  </span>
                </div>
                {item.placeholder && (
                  <p className="text-slate-600 font-mono text-xs mt-3 italic">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 font-mono text-xs">
            Данные обезличены по соглашению с клиентами. Подробности — при личном общении.
          </p>
        </div>
      </div>
    </section>
  );
};
