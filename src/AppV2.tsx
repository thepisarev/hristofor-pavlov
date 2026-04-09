import { useState, lazy, Suspense } from 'react';
import HeroV2 from './components/v2/HeroV2';
import MythsV2 from './components/v2/MythsV2';
import LossTableV2 from './components/v2/LossTableV2';
import SchemesV2 from './components/v2/SchemesV2';
import ExpertV2 from './components/v2/ExpertV2';
import ResultV2 from './components/v2/ResultV2';
import CasesV2 from './components/v2/CasesV2';
const Geography = lazy(() => import('./components/Geography').then(m => ({ default: m.Geography })));
import StepsV2 from './components/v2/StepsV2';
import PricingV2 from './components/v2/PricingV2';
import { CTAV2 } from './components/v2/CTAV2';
import { FooterV2 } from './components/v2/FooterV2';
import { Lock } from 'lucide-react';

export default function AppV2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      {/* Sticky Nav with anchor links */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 text-lg font-display font-bold tracking-tight text-white">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          KING_CONTROL
        </div>

        {/* Nav links - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#problem" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Проблема</a>
          <a href="#cases" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Кейсы</a>
          <a href="#how-it-works" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Процесс</a>
          <a href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Стоимость</a>
          <a href="#expert" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Эксперт</a>
        </div>

        <button
          onClick={openModal}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-mono transition-all duration-300 rounded-sm uppercase tracking-wider"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Записаться на консультацию
        </button>
      </nav>

      <main className="pt-16">
        <HeroV2 onCtaClick={openModal} />
        <div id="problem">
          <MythsV2 />
        </div>
        <LossTableV2 />
        <SchemesV2 />
        <div id="expert">
          <ExpertV2 />
        </div>
        <ResultV2 />
        <div id="cases">
          <CasesV2 onCtaClick={openModal} />
        </div>
        <Suspense fallback={<div className="py-24 bg-[#162032]" />}>
          <Geography />
        </Suspense>
        <div id="how-it-works">
          <StepsV2 />
        </div>
        <div id="pricing">
          <PricingV2 onCtaClick={openModal} />
        </div>
        <CTAV2 onCtaClick={openModal} />
      </main>

      <FooterV2 />

      {/* Modal V2 — 2 columns: form + photo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg">
          <div className="bg-slate-800 border border-slate-700 rounded-xl max-w-3xl w-full relative shadow-2xl shadow-amber-900/10 flex overflow-hidden">
            {/* Left: form */}
            <div className="flex-1 p-8 md:p-10">
              <div className="flex justify-start mb-6">
                <div className="w-16 h-[3px] bg-amber-500 rounded-full"></div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors font-mono text-xs z-10"
              >
                [ЗАКРЫТЬ]
              </button>

              <h3 className="text-xl font-display font-bold text-white mb-2 leading-snug">
                Записаться на бесплатную стратегическую консультацию
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Христофор Павлов свяжется с вами для 30-минутного созвона.
              </p>

              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  closeModal();
                  window.open('https://t.me/hristoforpavlov', '_blank');
                }}
              >
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-xs tracking-wider">Ваше имя *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md"
                    placeholder="Иван Петров"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-xs tracking-wider">Телефон для связи *</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-mono text-xs tracking-wider">Ваш бар и оборот (опционально)</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md"
                    placeholder="Коктейльный бар, 7 млн ₽/мес"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white font-bold p-3.5 hover:bg-amber-500 transition-colors uppercase rounded-md mt-4 tracking-widest font-mono flex items-center justify-center gap-2"
                >
                  Записаться на консультацию <span>→</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs mt-2">
                  <Lock className="w-3.5 h-3.5" />
                  Конфиденциальность гарантирована.
                </div>
              </form>
            </div>

            {/* Right: photo — hidden on mobile */}
            <div className="hidden md:block w-[280px] shrink-0 relative">
              <picture>
                <source srcSet="/expert.webp" type="image/webp" />
                <img
                  src="/expert.jpg"
                  alt="Христофор Павлов"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Христофор Павлов</p>
                <p className="text-slate-300 text-xs">Эксперт по операционной прозрачности</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
