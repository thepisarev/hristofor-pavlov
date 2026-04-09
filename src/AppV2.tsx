import { useState, useEffect, lazy, Suspense, type FormEvent } from 'react';
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
import { Lock, Menu, X } from 'lucide-react';

export default function AppV2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formBar, setFormBar] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const openModal = () => {
    setFormStatus('idle');
    setFormError('');
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Esc key closes modal/drawer
  useEffect(() => {
    if (!isModalOpen && !isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isModalOpen) closeModal();
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isModalOpen, isMobileMenuOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;

    setFormStatus('sending');
    setFormError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName.trim(),
          phone: formPhone.trim(),
          bar: formBar.trim(),
          source: 'landing_v2',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormStatus('success');
      setFormName('');
      setFormPhone('');
      setFormBar('');
      setTimeout(() => {
        closeModal();
        setFormStatus('idle');
      }, 2500);
    } catch (err) {
      setFormStatus('error');
      setFormError('Не удалось отправить. Попробуйте позже или напишите в Telegram.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      {/* Sticky Nav with anchor links */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 text-lg font-display font-bold tracking-tight text-white">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          KING_CONTROL
        </div>

        {/* Nav links - desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#problem" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Проблема</a>
          <a href="#cases" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Кейсы</a>
          <a href="#how-it-works" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Процесс</a>
          <a href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Стоимость</a>
          <a href="#expert" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Эксперт</a>
        </div>

        {/* Desktop CTA button */}
        <button
          onClick={openModal}
          className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-mono transition-all duration-300 rounded-sm uppercase tracking-wider"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Записаться на консультацию
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
          <div className="flex flex-col px-6 py-6 gap-1">
            <a
              href="#problem"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 text-base font-medium py-3 border-b border-slate-800/50"
            >
              Проблема
            </a>
            <a
              href="#cases"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 text-base font-medium py-3 border-b border-slate-800/50"
            >
              Кейсы
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 text-base font-medium py-3 border-b border-slate-800/50"
            >
              Процесс
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 text-base font-medium py-3 border-b border-slate-800/50"
            >
              Стоимость
            </a>
            <a
              href="#expert"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 text-base font-medium py-3 border-b border-slate-800/50"
            >
              Эксперт
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="mt-4 w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 rounded-md uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              Записаться на консультацию
            </button>
          </div>
        </div>
      )}

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
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 border border-slate-700 rounded-xl max-w-3xl w-full relative shadow-2xl shadow-amber-900/10 flex overflow-hidden"
          >
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

              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/20 border-2 border-green-500 mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Заявка принята</h4>
                  <p className="text-slate-400 text-sm">
                    Христофор свяжется с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono text-xs tracking-wider">Ваше имя *</label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                      disabled={formStatus === 'sending'}
                      className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md disabled:opacity-50"
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono text-xs tracking-wider">Телефон для связи *</label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                      disabled={formStatus === 'sending'}
                      className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md disabled:opacity-50"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-500 font-mono text-xs tracking-wider">Ваш бар и оборот (опционально)</label>
                    <input
                      type="text"
                      value={formBar}
                      onChange={(e) => setFormBar(e.target.value)}
                      disabled={formStatus === 'sending'}
                      className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-amber-500 outline-none transition-colors rounded-md disabled:opacity-50"
                      placeholder="Коктейльный бар, 7 млн ₽/мес"
                    />
                  </div>
                  {formError && (
                    <div className="text-red-400 text-xs text-center">{formError}</div>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-amber-600 text-white font-bold p-3.5 hover:bg-amber-500 transition-colors uppercase rounded-md mt-4 tracking-widest font-mono flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Отправка...' : <>Записаться на консультацию <span>→</span></>}
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs mt-2">
                    <Lock className="w-3.5 h-3.5" />
                    Конфиденциальность гарантирована.
                  </div>
                </form>
              )}
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
