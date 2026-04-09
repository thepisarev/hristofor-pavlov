import { ArrowRight } from "lucide-react";
import Calculator from "./Calculator";

interface HeroV2Props {
  onCtaClick: () => void;
}

export default function HeroV2({ onCtaClick }: HeroV2Props) {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background bar image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url('/bar-bg.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Super headline — full width, centered */}
        <div className="text-center mb-20 space-y-3 pt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 mb-4">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-sm font-medium text-amber-300">
              Операционная прозрачность баров
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
            Ваш бар приносит больше,
            <br />
            чем вы видите.{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Вопрос&nbsp;&mdash; кому?
            </span>
          </h1>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8">
            {/* Prominent subtitle on amber accent card */}
            <div className="rounded-xl bg-gradient-to-r from-amber-500/15 to-amber-600/5 border border-amber-500/30 p-6 lg:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-[1.15]">
                Верните полный контроль над деньгами вашего бара
              </h2>
              <p className="text-amber-300/80 text-sm mt-3 font-medium">
                Видеоаудит покажет, где именно уходят деньги — и как это исправить
              </p>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed">
              По данным из 60+ проверенных заведений, <span className="text-white font-medium">85% баров</span> теряют от 8 до 15% оборота из-за отсутствия прозрачной системы контроля.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
                <span className="block text-2xl font-bold text-amber-400">100+</span>
                <span className="text-sm text-slate-300">заведений</span>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
                <span className="block text-2xl font-bold text-amber-400">8 из 10</span>
                <span className="text-sm text-slate-300">баров с потерями</span>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
                <span className="block text-2xl font-bold text-amber-400">12%</span>
                <span className="text-sm text-slate-300">средние потери от оборота</span>
              </div>
            </div>

            {/* CTA button */}
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Узнайте, как вернуть контроль над прибылью
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right column — Calculator */}
          <Calculator onCtaClick={onCtaClick} />
        </div>
      </div>
    </section>
  );
}
