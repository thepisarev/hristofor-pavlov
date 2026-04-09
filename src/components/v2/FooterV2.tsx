import { Send, Phone } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const FooterV2: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <footer className="bg-slate-900 py-16 px-4 border-t border-slate-800">
      <div ref={ref} className="max-w-5xl mx-auto flex flex-col items-center gap-7">
        <div className={`flex items-center gap-2 text-lg font-display font-bold tracking-wider text-white transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          KING_CONTROL
        </div>

        <p className={`text-slate-400 text-[15px] text-center max-w-[600px] leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Христофор Павлов — архитектор операционной прозрачности и контроля прибыли в барах и ресторанах.
        </p>

        <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-mono text-sm transition-all duration-700 delay-200 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://t.me/hristoforpavlov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
          >
            <Send className="w-4 h-4 text-amber-500" />
            @hristoforpavlov
          </a>
          <a
            href="tel:+79219879823"
            className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            +7 921 987-98-23
          </a>
        </div>

        <p className={`text-slate-500 text-[13px] transition-all duration-700 delay-300 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`}>
          Напишите «Хочу консультацию» — и мы договоримся о времени.
        </p>

        {/* Slogan */}
        <div className={`w-full border-t border-slate-800 pt-8 mt-4 flex flex-col items-center gap-6 transition-all duration-700 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-amber-400 text-[22px] font-semibold italic text-center leading-relaxed">
            «Управление — это не про доверие.<br />Это про систему.»
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 w-full font-mono text-[10px] text-slate-600 text-center sm:text-left">
            <span className="tracking-wider">СИСТЕМА: KING_CONTROL v2.0</span>
            <span>© 2026 KING_CONTROL. Все права защищены.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
