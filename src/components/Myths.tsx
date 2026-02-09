const myths = [
  {
    title: '«Я сам смотрю камеры»',
    desc: 'У вас насмотренность — 1-5 заведений. У меня — больше 100. Я знаю, куда смотреть. Мои аудиторы определяют объём налитого по секундам. Тип алкоголя — по силуэту бутылки.',
  },
  {
    title: '«У меня хорошая команда»',
    desc: 'Возможно. Но в 85% «хороших команд» мы находим потери. В 30% случаев — серьёзные.',
  },
  {
    title: '«Это мелочи, не стоит заморачиваться»',
    desc: 'Кофе для персонала «бесплатно»? 12 человек × 3 чашки × 60₽ × 30 дней × 60 точек = сотни тысяч рублей потерь в месяц. Только на кофе. Только по себестоимости.',
  },
];

export const Myths: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 uppercase">
          Почему вы этого не видите
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {myths.map((myth, idx) => (
            <div key={idx} className="p-6 bg-slate-900/50 border-l-2 border-red-500/50 hover:bg-slate-900 transition-colors">
              <h3 className="text-red-400 font-mono text-sm mb-3 font-bold uppercase tracking-wider">{myth.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {myth.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
