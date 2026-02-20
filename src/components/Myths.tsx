const blindSpots = [
  {
    title: '«Я сам смотрю камеры»',
    desc: 'Ваша насмотренность — 1–5 заведений. Наша — более 100. Мы знаем, куда смотреть: наши аудиторы определяют объём налитого по секундам и тип алкоголя по силуэту бутылки.',
  },
  {
    title: '«У меня хорошая команда»',
    desc: 'Возможно. Но в 85% даже хороших команд мы находим системные потери. В 30% случаев — серьёзные. Это вопрос не доверия, а прозрачности процессов.',
  },
  {
    title: '«Это мелочи, не стоит заморачиваться»',
    desc: '12 сотрудников × 3 чашки кофе × 60 ₽ × 30 дней = 64 800 ₽ в месяц. Только на кофе. Только по себестоимости. Мелочи складываются в сотни тысяч.',
  },
];

export const Myths: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ Управленческие слепые зоны</h4>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
          Почему потери сложно увидеть самому
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blindSpots.map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-900/50 border-l-2 border-amber-500/50 hover:bg-slate-900 transition-colors">
              <h3 className="text-amber-400 font-mono text-sm mb-3 font-bold uppercase tracking-wider">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
