import { Send, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-16 px-4 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-display font-bold tracking-tight text-white">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              KING<span className="text-slate-500">_CONTROL</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Христофор Павлов — видеоаудит баров и ресторанов.
              Находим потери, даём доказательства, помогаем закрыть дыры.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-bold uppercase text-sm">Контакты</h4>
            <div className="space-y-3 font-mono text-sm">
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram: @______
              </a>
              <a
                href="tel:+7__________"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 ___ ___ __ __
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              Напишите «Хочу разбор» — и мы договоримся о времени.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-slate-600">
          <div>
            <span className="text-slate-500">СИСТЕМА: </span> KING_CONTROL v1.0
          </div>
          <div className="text-center md:text-right">
            <p className="text-amber-500/60 italic">
              P.S. Каждый день без контроля — это деньги, которые уходят не вам.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
