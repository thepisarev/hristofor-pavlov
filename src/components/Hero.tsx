import { ChevronRight, AlertCircle, Eye, TrendingDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden border-b border-slate-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

      {/* Scanning Animation Line */}
      <div className="absolute inset-0 bg-scan-line bg-[length:100%_200%] animate-scan pointer-events-none opacity-30" />

      {/* Decorative Rotating CCTV Graphic */}
      <div className="absolute top-20 right-[-100px] opacity-10 animate-spin-slow pointer-events-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-slate-600">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
          <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" strokeWidth="1" />
          <path d="M20 20 L30 20 M20 20 L20 30" strokeWidth="1" />
          <path d="M80 20 L70 20 M80 20 L80 30" strokeWidth="1" />
          <path d="M20 80 L30 80 M20 80 L20 70" strokeWidth="1" />
          <path d="M80 80 L70 80 M80 80 L80 70" strokeWidth="1" />
        </svg>
      </div>

      <div className="z-10 max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-6/12 space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Внимание: Выручка под угрозой
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              Сколько денег утекает из вашего бара{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                прямо сейчас?
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
              85% баров теряют деньги на воровстве персонала. Не 50%. Не «некоторые».
              Восемьдесят пять из ста. Это данные из 60+ заведений, проверенных лично.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onCtaClick}
                className="group relative px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white font-mono text-sm rounded-sm transition-all uppercase tracking-wider font-bold"
              >
                <div className="flex items-center gap-2">
                  Узнать, сколько теряете вы <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a
                href="#how-it-works"
                className="px-6 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-sm rounded-sm transition-all uppercase tracking-wider"
              >
                Как это работает?
              </a>
            </div>
          </div>

          {/* Simulated Data Panel */}
          <div className="w-full md:w-6/12 hidden md:block relative">
            {/* Floating Vector Element */}
            <div className="absolute -top-12 -right-12 z-0 opacity-40 animate-float text-amber-500/20">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M30 80 L35 30 L65 30 L70 80 Z" strokeWidth="1" strokeLinejoin="round" />
                <path d="M42 30 L42 15 L58 15 L58 30" strokeWidth="1" />
                <path d="M40 15 L60 15" strokeWidth="1" />
                <path d="M30 80 Q50 85 70 80" strokeWidth="1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-red-500" />
                <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M20 25 L25 20 M80 25 L75 20 M20 75 L25 80 M80 75 L75 80" strokeWidth="1" />
              </svg>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-sm p-6 font-mono text-xs space-y-5 relative overflow-hidden shadow-2xl z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

              <div className="flex justify-between text-slate-500 border-b border-slate-800 pb-2">
                <span>ОБЪЕКТ: BAR_MAIN_HALL</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  REC [CAM_01]
                </div>
              </div>

              <div className="space-y-4 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-amber-500/5 to-transparent bg-[length:100%_20%] animate-scan pointer-events-none"></div>

                <div className="border-l-2 border-red-500/50 pl-4 py-1 relative group hover:bg-slate-800/50 transition-colors cursor-crosshair">
                  <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_red]"></div>
                  <div className="flex justify-between items-center text-red-400 mb-1">
                    <span className="flex items-center gap-2 font-bold"><AlertCircle className="w-3 h-3" /> НАРУШЕНИЕ #1024</span>
                    <span>22:42:15</span>
                  </div>
                  <div className="text-slate-300 mb-2">
                    {'>'} Бармен не пробивает в кассу<br />
                    {'>'} Деньги от гостя — в карман
                  </div>
                  <div className="inline-block bg-red-500/10 text-red-400 px-2 py-1 rounded-sm text-[10px] border border-red-500/20">
                    УЩЕРБ: 4 500 ₽
                  </div>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4 py-1 relative group hover:bg-slate-800/50 transition-colors cursor-crosshair">
                  <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_orange]"></div>
                  <div className="flex justify-between items-center text-amber-500 mb-1">
                    <span className="flex items-center gap-2 font-bold"><Eye className="w-3 h-3" /> ПОДОЗРИТЕЛЬНАЯ АКТИВНОСТЬ</span>
                    <span>23:15:00</span>
                  </div>
                  <div className="text-slate-300">
                    {'>'} Продажа своих сигарет гостям<br />
                    {'>'} Позиции нет в меню — контроль невозможен
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-sm border border-slate-800 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                <span className="text-slate-500 z-10">ПРОГНОЗ ПОТЕРЬ ЗА СМЕНУ:</span>
                <span className="text-red-500 text-lg font-bold flex items-center gap-2 z-10">
                  <TrendingDown className="w-4 h-4" /> -12 400 ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
