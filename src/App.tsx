import { useState } from 'react';
import { Hero } from './components/Hero';
import { LossTable } from './components/LossTable';
import { Schemes } from './components/Schemes';
import { Myths } from './components/Myths';
import { Expert } from './components/Expert';
import { Result } from './components/Result';
import { Cases } from './components/Cases';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ShieldAlert } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 text-lg font-display font-bold tracking-tight text-white">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          KING<span className="text-slate-500">_CONTROL</span>
        </div>
        <button
          onClick={openModal}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-mono transition-all duration-300 rounded-sm uppercase tracking-wider"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Консультация
        </button>
      </nav>

      <main className="pt-16">
        <Hero onCtaClick={openModal} />
        <LossTable />
        <Schemes />
        <Myths />
        <Expert />
        <Result />
        <Cases />
        <Steps />
        <Pricing />
        <CTA onCtaClick={openModal} />
      </main>

      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg">
          <div className="bg-slate-900 border border-slate-700 p-8 max-w-md w-full relative shadow-2xl shadow-amber-900/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors font-mono text-xs"
            >
              [ЗАКРЫТЬ]
            </button>
            <div className="flex items-center gap-3 mb-6 text-amber-500">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xl font-display font-bold uppercase">Запись на консультацию</h3>
            </div>

            <form
              className="space-y-4 font-mono text-sm"
              onSubmit={(e) => {
                e.preventDefault();
                closeModal();
                window.open('https://t.me/username', '_blank');
              }}
            >
              <div className="space-y-1">
                <label className="text-slate-500 uppercase text-xs">Ваше имя</label>
                <input
                  type="text"
                  className="w-full bg-slate-950 border border-slate-800 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-sm"
                  placeholder="Иван Петров"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-500 uppercase text-xs">Телефон для связи</label>
                <input
                  type="tel"
                  className="w-full bg-slate-950 border border-slate-800 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-sm"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-bold p-3 hover:bg-amber-500 transition-colors uppercase rounded-sm mt-4 tracking-widest"
              >
                Записаться
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
