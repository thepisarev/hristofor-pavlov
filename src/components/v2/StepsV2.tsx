import { Phone, Video, ScanEye, FileText, Rocket } from "lucide-react";
import { useReveal } from '../../hooks/useReveal';

interface StepData {
  number: number;
  icon: React.ReactNode;
  title: string;
  detail?: string;
  description: string;
}

const steps: StepData[] = [
  {
    number: 1,
    icon: <Phone className="w-6 h-6 text-amber-500" />,
    title: "СТРАТЕГИЧЕСКИЙ СОЗВОН",
    detail: "(30 мин)",
    description:
      "Разбираемся в ситуации, определяем потенциальные зоны потерь",
  },
  {
    number: 2,
    icon: <Video className="w-6 h-6 text-amber-500" />,
    title: "УДАЛЁННОЕ ПОДКЛЮЧЕНИЕ",
    description: "К вашим камерам. Вам ничего не нужно делать",
  },
  {
    number: 3,
    icon: <ScanEye className="w-6 h-6 text-amber-500" />,
    title: "ЭКСПЕРТНЫЙ АУДИТ",
    detail: "(3\u20135 смен)",
    description: "Живые эксперты выявляют даже неочевидные утечки",
  },
  {
    number: 4,
    icon: <FileText className="w-6 h-6 text-amber-500" />,
    title: "ДЕТАЛЬНЫЙ ОТЧЁТ",
    description: "Полная картина с доказательствами и расчётом потерь",
  },
  {
    number: 5,
    icon: <Rocket className="w-6 h-6 text-amber-500" />,
    title: "ПЛАН ВНЕДРЕНИЯ",
    description:
      "Конкретные рекомендации: как перестроить систему и исключить потери",
  },
];

export default function StepsV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-slate-950 py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className={`text-amber-500 font-mono text-sm uppercase tracking-wider mb-4 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          / Ваша прозрачность за 1\u20132 недели
        </p>

        {/* H2 */}
        <h2 className={`text-white font-bold text-3xl md:text-[42px] md:leading-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          5 простых шагов к управляемости
        </h2>

        {/* Subtitle */}
        <p className={`text-slate-500 text-lg mb-12 max-w-2xl transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          От первого звонка до получения полного отчёта проходит всего 1\u20132
          недели.
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`bg-slate-900 rounded-xl p-6 flex flex-col hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              {/* Number circle + icon row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-slate-950 font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                {step.title}
              </h3>

              {/* Detail */}
              {step.detail && (
                <p className="text-slate-500 font-mono text-xs mb-3">
                  {step.detail}
                </p>
              )}

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
