
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Legal from './components/Legal';
import Documentation from './components/Documentation';
import ContactModal from './components/ContactModal';
import Logo from './components/Logo';
import { PlanType } from './types';
import { PRICING_PLANS, WHATSAPP_NUMBER } from './constants';
import { sound } from './services/soundService';

type AppState = 'home' | 'docs' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [page, setPage] = useState<AppState>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState({ from: '', to: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const setPageWithSound = (p: AppState) => {
    sound.playTransition();
    setPage(p);
  };

  const scrollToSection = (id: string) => {
    if (page !== 'home') {
      setPageWithSound('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenContact = (from?: string, to?: string) => {
    if (from && to) {
      setActiveRoute({ from, to });
    }
    setIsContactModalOpen(true);
  };

  const openWhatsAppDirect = () => {
    sound.playClick();
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  if (page === 'docs') return <Documentation onBack={() => setPageWithSound('home')} />;
  if (page === 'terms' || page === 'privacy') return <Legal type={page} onBack={() => setPageWithSound('home')} />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-orange-500/40">
      <Navbar 
        onContact={() => setIsContactModalOpen(true)} 
        onScrollTo={scrollToSection} 
      />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        defaultFrom={activeRoute.from}
        defaultTo={activeRoute.to}
      />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative pt-24 pb-44 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="flex justify-center mb-8">
              <Logo size={80} className="animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
              FUTURE OF <br/>
              <span className="neon-gold-text">BOOKING AI</span>
              <span className="block mt-6 text-2xl md:text-4xl font-bold text-slate-500 tracking-normal lowercase">
                appointment booking software
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
              Enterprise-grade automation for all global visa portals. 
              Powered by <span className="text-white font-bold">30+ Global Teams</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="btn-neon-gold text-slate-950 w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition"
              >
                Launch Dev Console
              </button>
              <button 
                onClick={() => setPageWithSound('docs')}
                className="bg-slate-900 text-white border border-slate-700 w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:border-amber-500 transition shadow-xl"
              >
                System Docs
              </button>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 -mt-32 relative z-10">
          <Dashboard onOpenContact={handleOpenContact} />
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs">Core Technology</span>
                <h2 className="text-5xl font-black text-white mt-4 leading-tight uppercase">Elite <span className="neon-gold-text">Engineering</span> Matrix</h2>
              </div>
              <p className="text-slate-400 max-w-sm text-lg font-medium">Built by hackers and AI researchers to solve the world's toughest booking hurdles.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Ethical Hacker Audited', 
                  desc: 'Our code is hardened by elite security specialists to ensure stealth and bypass persistence.',
                  icon: 'user-secret'
                },
                { 
                  title: 'Deep Learning ML', 
                  desc: 'Proprietary models simulate human erraticism to defeat biometric portal defense systems.',
                  icon: 'brain'
                },
                { 
                  title: 'Millisecond Execution', 
                  desc: 'Node-level optimization ensures your requests land before the embassy portal even refreshes.',
                  icon: 'stopwatch'
                }
              ].map((f, i) => (
                <div key={i} className="bg-slate-900/50 p-10 rounded-[2.5rem] orange-glow-border transition-all duration-500 group">
                  <div className="w-16 h-16 bg-slate-950 border border-orange-500/20 rounded-2xl mb-8 flex items-center justify-center text-3xl text-white group-hover:text-amber-500 transition-colors">
                    <i className={`fas fa-${f.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs">Pricing Architecture</span>
              <h2 className="text-5xl font-black text-white mt-4 uppercase">Scalable <span className="neon-gold-text">Dev Contracts</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {PRICING_PLANS.map((plan, i) => (
                <div key={i} className={`p-1 bg-gradient-to-br ${plan.type === PlanType.EXPRESS ? 'from-amber-500 to-orange-600' : 'from-white/10 to-transparent'} rounded-[3rem] transition transform hover:scale-[1.02]`}>
                  <div className="bg-slate-950 h-full p-8 rounded-[2.85rem] flex flex-col">
                    <div className="mb-10">
                      <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">{plan.type}</h3>
                      <div className="flex items-baseline gap-2">
                        {plan.type === PlanType.CUSTOM ? (
                          <span className="text-3xl font-black text-amber-500 uppercase tracking-tighter">Custom Quote</span>
                        ) : (
                          <>
                            <span className="text-5xl font-black text-white">${plan.minPrice}</span>
                            <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">+</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-sm font-medium text-slate-300">
                          <i className="fas fa-check text-amber-500 mt-1"></i> <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => handleOpenContact()}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition ${plan.type === PlanType.EXPRESS || plan.type === PlanType.CUSTOM ? 'btn-neon-gold text-slate-950' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`}
                    >
                      {plan.type === PlanType.CUSTOM ? 'Request Custom Build' : 'Initialize Quote'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent -z-10"></div>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-6xl font-black text-white mb-10 leading-tight tracking-tighter uppercase">Ready to <span className="neon-gold-text">Scale</span> Your Agency?</h2>
            <button 
              onClick={() => handleOpenContact()}
              className="btn-neon-gold text-slate-950 px-16 py-6 rounded-3xl font-black text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(245,158,11,0.2)] hover:scale-105 transition"
            >
              Contact Specialist Team
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Logo size={32} />
                <span className="font-black text-2xl tracking-tighter text-white uppercase">VISATECH AI</span>
              </div>
              <p className="text-slate-500 font-medium max-w-sm">The leading edge of visa appointment development. We build systems optimized for zero-latency execution.</p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-6">Legal Protocol</h5>
              <button onClick={() => setPageWithSound('privacy')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left">Privacy Policy</button>
              <button onClick={() => setPageWithSound('terms')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left">Terms of Service</button>
              <button onClick={() => setPageWithSound('docs')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left">Technical Docs</button>
            </div>

            <div className="space-y-4">
              <h5 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-6">Digital Reach</h5>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-amber-500 text-2xl transition"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-slate-400 hover:text-amber-500 text-2xl transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-slate-400 hover:text-amber-500 text-2xl transition"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-slate-600 font-black text-[10px] uppercase tracking-[0.3em]">
            2026 visatech ai ,all rights reserved,powered by apolloit
          </div>
        </div>
      </footer>

      {/* Floating Action */}
      <div className="fixed bottom-8 right-8 z-[100] group flex flex-col items-end gap-4">
        <button 
          onClick={openWhatsAppDirect}
          className="w-20 h-20 bg-green-500 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl hover:scale-110 active:scale-90 transition transform relative overflow-hidden"
        >
          <i className="fab fa-whatsapp relative z-10"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
