import { ArrowRight, AlertTriangle, Eye, TrendingUp } from "lucide-react";

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
                <span className="block text-2xl font-bold text-amber-400">60+</span>
                <span className="text-sm text-slate-300">проверенных заведений</span>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
                <span className="block text-2xl font-bold text-amber-400">85%</span>
                <span className="text-sm text-slate-300">баров с утечками</span>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
                <span className="block text-2xl font-bold text-amber-400">1,2 млн&nbsp;&#8381;</span>
                <span className="text-sm text-slate-300">потери в месяц</span>
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

          {/* Right column — Audit simulation panel */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm p-6 lg:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-slate-400">
                Симуляция аудита
              </h3>
              <span className="flex items-center gap-1.5 text-xs text-red-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                LIVE
              </span>
            </div>

            {/* Risk zones */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                Зоны риска
              </p>

              <div className="flex items-center justify-between rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Барная стойка</p>
                    <p className="text-xs text-slate-400">Недолив, подмена, слив остатков</p>
                  </div>
                </div>
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-semibold text-red-400">Высокий</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Касса</p>
                    <p className="text-xs text-slate-400">Отмены, скидки без основания</p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">Средний</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Склад</p>
                    <p className="text-xs text-slate-400">Списание, завышение расхода</p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">Средний</span>
              </div>
            </div>

            {/* Blind zone */}
            <div className="rounded-lg border border-slate-600/50 bg-slate-800/60 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-slate-400" />
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">Слепая зона</p>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-slate-300">Операции вне зоны контроля камер</p>
                <span className="text-2xl font-bold text-red-400">34%</span>
              </div>
            </div>

            {/* Return potential */}
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-emerald-400/70">Потенциал возврата</p>
              </div>
              <p className="text-3xl font-bold text-emerald-400">+12,400&nbsp;&#8381;/смена</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
