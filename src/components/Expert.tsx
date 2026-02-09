import { Fingerprint } from 'lucide-react';

const stats = [
  { value: '12', suffix: 'лет', label: 'В видеоаудите баров' },
  { value: '60', suffix: '+', label: 'Заведений в сети' },
  { value: '16 000', suffix: '+', label: 'Проведённых аудитов' },
  { value: '6 000', suffix: '+', label: 'Выявленных хищений' },
];

export const Expert: React.FC = () => {
  return (
    <section id="expert" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Binary Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 font-mono text-[10px] break-all pointer-events-none select-none overflow-hidden text-amber-500">
        010101010100101010111010101010101010100101010111010101010101010100101010111010101010101010100101010111010101
        010101010100101010111010101010101010100101010111010101010101010100101010111010101010101010100101010111010101
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden relative">
              {/* Photo placeholder */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-slate-500">ХП</span>
                  </div>
                  <span className="text-xs font-mono uppercase">Фото</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-scan-line bg-[length:100%_200%] animate-scan opacity-50"></div>
              <div className="absolute bottom-4 left-4 bg-slate-950/80 px-2 py-1 text-[10px] text-amber-500 font-mono border border-amber-500/30">
                ID: PAVLOV_H
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div className="flex items-center gap-3 text-amber-500 mb-2">
              <Fingerprint className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">Кто я такой</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
              Христофор Павлов
            </h2>

            <p className="text-slate-400 text-base leading-relaxed border-l-2 border-slate-700 pl-6">
              Работал с крупнейшей барной сетью России. Понимаю психологию сотрудников, психологию хищений,
              знаю все махинации изнутри. Я не продаю камеры. Не ставлю нейронки за 3 миллиона.
              Я подключаюсь к вашим камерам удалённо и показываю, где конкретно вы теряете деньги.
              С таймкодами, скриншотами и видео.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800 pt-8 mt-4">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-display text-white">
                    {stat.value}<span className="text-amber-500">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-500 uppercase font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
