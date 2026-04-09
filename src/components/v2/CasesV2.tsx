import { ArrowRight, MapPin } from "lucide-react";
import { useReveal } from '../../hooks/useReveal';

interface CasesV2Props {
  onCtaClick?: () => void;
}

interface CaseData {
  num: string;
  city: string;
  result: string;
  type: string;
  turnover: string;
  lossDay: string;
  lossMonth: string;
  lossYear: string;
  problem: string;
  solution: string;
}

const cases: CaseData[] = [
  {
    num: "КЕЙС #1",
    city: "Москва",
    result: "+6,2 млн ₽/год к прибыли",
    type: "HoReCa (барный сегмент)",
    turnover: "Оборот: 10 млн ₽",
    lossDay: "~17 000 ₽",
    lossMonth: "~520 000 ₽",
    lossYear: "~6,2 млн ₽",
    problem: "Расчёты мимо кассы — наличные уходили напрямую бармену. Удаление чеков и пречеков после оплаты гостем.",
    solution: "Новый регламент работы с кассой и пречеками. Дисциплинарная система + контроль. Регулярные видеоаудиты смен.",
  },
  {
    num: "КЕЙС #2",
    city: "Ярославль",
    result: "+2,2 млн ₽/год к прибыли",
    type: "Танцевальный бар",
    turnover: "Оборот: 4–5 млн ₽",
    lossDay: "~6–7 000 ₽",
    lossMonth: "~190 000 ₽",
    lossYear: "~2,2 млн ₽",
    problem: "Бармен систематически переливал порции сверх ТТК и получал допсредства под видом чаевых.",
    solution: "Контроль соблюдения ТТК на каждую позицию. Регулярные видеоаудиты барной зоны.",
  },
  {
    num: "КЕЙС #3",
    city: "Наб. Челны",
    result: "+1,15 млн ₽/год к прибыли",
    type: "Ресторан",
    turnover: "Оборот: 10–12 млн ₽",
    lossDay: "~3 200 ₽",
    lossMonth: "~96 000 ₽",
    lossYear: "~1,15 млн ₽",
    problem: "Персонал покидал рабочее место раньше. ~8 часов неотработанного времени в день по команде поваров.",
    solution: "Видеоаудит кухни и зоны выдачи. Сверка графика с фактическим присутствием по камерам.",
  },
];

function CaseCard({ data, onCtaClick }: { data: CaseData; onCtaClick?: () => void }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
      {/* Header: num + city icon */}
      <div className="bg-gradient-to-b from-amber-900/20 to-slate-950 px-6 py-5 flex items-start justify-between">
        <div>
          <span className="text-amber-500 font-mono text-[11px] uppercase tracking-widest font-bold">{data.num}</span>
          <h3 className="text-white font-bold text-lg mt-1">
            <span className="text-amber-400">{data.result}</span>
          </h3>
        </div>
        <span className="flex items-center gap-1 text-slate-500 text-[11px] mt-1">
          <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
          {data.city}
        </span>
      </div>

      {/* Type + turnover row */}
      <div className="px-6 py-3 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <span className="text-slate-300 text-sm font-medium">{data.type}</span>
        <span className="text-slate-500 font-mono text-xs">{data.turnover}</span>
      </div>

      {/* Losses row */}
      <div className="grid grid-cols-3 border-b border-slate-800">
        <div className="px-4 py-3 text-center border-r border-slate-800">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">День</p>
          <p className="text-amber-400 font-bold text-sm">{data.lossDay}</p>
        </div>
        <div className="px-4 py-3 text-center border-r border-slate-800">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">Месяц</p>
          <p className="text-amber-400 font-bold text-sm">{data.lossMonth}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">Год</p>
          <p className="text-red-500 font-bold text-sm">{data.lossYear}</p>
        </div>
      </div>

      {/* Problem */}
      <div className="px-6 py-4 border-b border-slate-800">
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-2">Ситуация до KING_CONTROL:</p>
        <p className="text-slate-400 text-sm leading-relaxed">{data.problem}</p>
      </div>

      {/* Solution */}
      <div className="px-6 py-4 flex-1">
        <p className="text-green-500 font-mono text-[10px] uppercase tracking-widest mb-2">Внедрение:</p>
        <p className="text-slate-400 text-sm leading-relaxed">{data.solution}</p>
      </div>

      {/* CTA button — no duplicated amount */}
      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={onCtaClick}
          className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-center py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          Оставить заявку
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function CasesV2({ onCtaClick }: CasesV2Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className={`text-amber-500 font-mono text-sm uppercase tracking-wider mb-4 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          / Ваша прибыль — наша работа
        </p>

        <h2 className={`text-white font-bold text-3xl md:text-[42px] md:leading-tight mb-4 max-w-4xl transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Реальные кейсы: Как KING_CONTROL возвращает миллионы рублей
        </h2>

        <p className={`text-slate-400 text-lg mb-10 max-w-3xl transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Что находим, сколько терялось и главное — какие результаты получили клиенты после внедрения системы. Данные обезличены. Подробности — при личной встрече.
        </p>

        <div className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-scale' : 'opacity-0 scale-95'}`}>
          <img
            src="/cases-bg.webp"
            alt="Кейсы KING_CONTROL"
            className="w-full h-[180px] sm:h-[280px] rounded-xl object-cover border border-slate-700"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <CaseCard data={c} onCtaClick={onCtaClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
