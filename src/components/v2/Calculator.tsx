import { useState, useMemo } from 'react';
import { TrendingDown, Wallet, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onCtaClick: () => void;
}

const MIN_TURNOVER = 3; // млн ₽/мес
const MAX_TURNOVER = 150;
const LOSS_PERCENT = 12;
const SERVICE_PERCENT = 1;

function formatRub(n: number): string {
  return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₽';
}

export default function Calculator({ onCtaClick }: CalculatorProps) {
  const [turnover, setTurnover] = useState(10); // млн ₽/мес

  const { monthLoss, monthService, monthProfit, yearProfit } = useMemo(() => {
    const turnoverRub = turnover * 1_000_000;
    const loss = turnoverRub * (LOSS_PERCENT / 100);
    const service = turnoverRub * (SERVICE_PERCENT / 100);
    const profit = loss - service;
    return {
      monthLoss: loss,
      monthService: service,
      monthProfit: profit,
      yearProfit: profit * 12,
    };
  }, [turnover]);

  // Calculate slider thumb position percentage
  const sliderPct = ((turnover - MIN_TURNOVER) / (MAX_TURNOVER - MIN_TURNOVER)) * 100;

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-slate-400">
          Калькулятор потерь
        </h3>
        <span className="flex items-center gap-1.5 text-xs text-amber-400">
          <Sparkles className="h-3.5 w-3.5" />
          LIVE
        </span>
      </div>

      {/* Slider */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
            Ваш оборот в месяц
          </label>
          <span className="text-2xl md:text-3xl font-bold text-amber-400 tabular-nums">
            {turnover} млн&nbsp;₽
          </span>
        </div>

        <div className="relative pt-1">
          <input
            type="range"
            min={MIN_TURNOVER}
            max={MAX_TURNOVER}
            step={1}
            value={turnover}
            onChange={(e) => setTurnover(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-amber-500
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-amber-300
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:shadow-amber-500/50
              [&::-webkit-slider-thumb]:cursor-grab
              [&::-webkit-slider-thumb]:active:cursor-grabbing
              [&::-moz-range-thumb]:w-5
              [&::-moz-range-thumb]:h-5
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-amber-500
              [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-amber-300
              [&::-moz-range-thumb]:cursor-grab"
            style={{
              background: `linear-gradient(to right, rgb(245 158 11) 0%, rgb(234 88 12) ${sliderPct}%, rgb(51 65 85) ${sliderPct}%, rgb(51 65 85) 100%)`,
            }}
          />
          <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-500">
            <span>{MIN_TURNOVER} млн</span>
            <span>{MAX_TURNOVER} млн</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {/* Your losses */}
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <TrendingDown className="h-4 w-4 text-red-400" />
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
              Ваши потери ({LOSS_PERCENT}% от оборота)
            </p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-red-400 tabular-nums">
            {formatRub(monthLoss)}<span className="text-sm text-slate-500 font-normal">/мес</span>
          </p>
        </div>

        {/* Service cost */}
        <div className="rounded-lg border border-slate-600/40 bg-slate-800/40 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Wallet className="h-4 w-4 text-slate-400" />
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
              Стоимость KING_CONTROL (~{SERVICE_PERCENT}%)
            </p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-slate-200 tabular-nums">
            {formatRub(monthService)}<span className="text-sm text-slate-500 font-normal">/мес</span>
          </p>
        </div>

        {/* Your gain */}
        <div className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-emerald-400/80">
              Ваша выгода
            </p>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-emerald-400 tabular-nums">
            +{formatRub(monthProfit)}
            <span className="text-sm text-slate-500 font-normal">/мес</span>
          </p>
          <p className="text-[13px] text-slate-400 mt-1">
            = <span className="text-emerald-400 font-semibold">{formatRub(yearProfit)}</span> в год
          </p>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onCtaClick}
        className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3.5 text-[15px] font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
      >
        Записаться на консультацию →
      </button>
    </div>
  );
}
