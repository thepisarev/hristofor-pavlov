import { Eye, Shield, Coins } from "lucide-react";
import { useReveal } from '../../hooks/useReveal';

const myths = [
  {
    icon: Eye,
    title: "\u00ABУ меня везде камеры, я сам всё вижу\u00BB",
    subtitle: "Почему это работает лишь частично",
    description:
      "Опыт 100+ заведений показывает: камеры фиксируют факт, но не раскрывают схему. Без системного анализа видеозаписей вы видите картинку, но не понимаете, что за ней стоит. Профессиональный видеоаудит выявляет паттерны, которые невозможно заметить при обычном просмотре.",
  },
  {
    icon: Shield,
    title: "\u00ABЯ полностью доверяю своей команде\u00BB",
    subtitle: "Почему доверие — это не всегда контроль",
    description:
      "В 85% проверенных нами баров мы обнаруживаем скрытые потери — даже там, где владелец был уверен в команде на 100%. Доверие — это прекрасно, но оно не заменяет прозрачную систему контроля. Люди не всегда воруют осознанно: привычки, халатность и «серые зоны» процессов делают утечки неизбежными.",
  },
  {
    icon: Coins,
    title: "\u00ABЭти мелочи не стоят внимания\u00BB",
    subtitle: "Как «мелочи» превращаются в миллионы",
    description:
      "Один «лишний» эспрессо за смену кажется мелочью. Но посчитайте: 3 чашки x 180 ₽ x 30 дней x 4 бармена = 64 800 ₽/мес. Теперь умножьте на алкоголь, закуски и «угощения для друзей». Мелочи, на которые не обращают внимания, складываются в суммы, которые меняют P&L.",
  },
];

export default function MythsV2() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-[#162032] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className={`font-mono text-sm tracking-wider text-amber-400 mb-4 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          / Распространённые заблуждения в барном бизнесе
        </p>

        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 max-w-3xl mb-6 transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Почему даже опытные владельцы не видят скрытые потери
        </h2>

        {/* Intro text */}
        <p className={`text-lg text-slate-300 max-w-3xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Кажется, что вы контролируете каждый процесс, но невидимые утечки
          маскируются под обычную рутину. <span className="text-amber-400 font-medium">Мы знаем, как их выявить — и как это исправить.</span>
        </p>

        {/* Photo block */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-scale' : 'opacity-0 scale-95'}`}>
          <img
            src="/myths-bg.webp"
            alt="Бар — зона контроля"
            className="h-[200px] w-full rounded-lg object-cover"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myths.map((myth, i) => {
            const Icon = myth.icon;
            return (
              <div
                key={i}
                className={`rounded-lg border border-[#2D3F57] bg-[#1E2D45] p-6 space-y-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>

                {/* Title */}
                <h3 className="font-mono text-lg font-bold text-slate-100 leading-snug">
                  {myth.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="font-mono text-slate-400"
                  style={{ fontSize: "11px" }}
                >
                  {myth.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {myth.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
