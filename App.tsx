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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      }, 300);
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-44 hero-mesh overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                <Logo size={100} className="relative z-10 drop-shadow-2xl" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[1] uppercase">
              REVOLUTIONIZING <br/>
              <span className="neon-gold-text">VISA AUTOMATION</span>
            </h1>
            
            <div className="flex flex-col items-center gap-4 mb-14">
              <span className="bg-slate-900/50 border border-amber-500/30 text-amber-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em]">
                Enterprise-Grade Development
              </span>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                We develop high-performance software for automated visa appointment booking. 
                Custom solutions for global agencies by <span className="text-white font-bold">Apollo IT Experts</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="btn-neon-gold text-slate-950 w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_20px_40px_rgba(245,158,11,0.25)] hover:scale-105 active:scale-95 transition"
              >
                Configure Build
              </button>
              <button 
                onClick={() => setPageWithSound('docs')}
                className="bg-slate-900/50 backdrop-blur-md text-white border border-slate-700 w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:border-amber-500 transition shadow-xl"
              >
                View Protocol
              </button>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 -mt-24 relative z-20">
          <Dashboard onOpenContact={handleOpenContact} />
        </section>

        {/* Technical Stats */}
        <section className="py-20 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Specialists', val: '30+', icon: 'users-gear' },
              { label: 'Uptime', val: '99.9%', icon: 'bolt' },
              { label: 'Latency', val: '< 10ms', icon: 'microchip' },
              { label: 'Countries', val: '190+', icon: 'globe' },
            ].map((s, i) => (
              <div key={i} className="text-center group p-6 rounded-3xl hover:bg-white/5 transition duration-500">
                <i className={`fas fa-${s.icon} text-amber-500/50 group-hover:text-amber-500 mb-4 text-xl transition-colors`}></i>
                <div className="text-4xl font-black text-white mb-1">{s.val}</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-40 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/[0.02] blur-[150px] -z-10"></div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Engine Capabilities</span>
                <h2 className="text-5xl md:text-7xl font-black text-white mt-4 leading-tight uppercase tracking-tighter">Elite <br/><span className="neon-gold-text">Engineering</span></h2>
              </div>
              <p className="text-slate-400 max-w-sm text-lg font-medium border-l-2 border-slate-800 pl-8 py-2">
                Our software development team utilizes advanced ML algorithms to solve the most complex booking challenges on the web.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { 
                  title: 'Bot Protection Bypass', 
                  desc: 'We develop custom fingerprinting techniques to bypass Cloudflare, Akamai, and specialized embassy firewalls.',
                  icon: 'shield-halved'
                },
                { 
                  title: 'AI Behavioral Logic', 
                  desc: 'Neural networks simulate human-like interactions, including randomized mouse movement and typing patterns.',
                  icon: 'brain-circuit'
                },
                { 
                  title: 'Real-time Matrix', 
                  desc: 'Distributed node networks across 190+ countries ensure low-latency requests from any location.',
                  icon: 'network-wired'
                }
              ].map((f, i) => (
                <div key={i} className="bg-slate-900/30 p-12 rounded-[3rem] orange-glow-border transition-all duration-700 group hover:-translate-y-4">
                  <div className="w-20 h-20 bg-slate-950 border border-orange-500/10 rounded-3xl mb-10 flex items-center justify-center text-4xl text-white group-hover:text-amber-400 transition-colors shadow-inner">
                    <i className={`fas fa-${f.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-amber-400 transition-colors">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-32">
              <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Development Tiers</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">Software <span className="neon-gold-text">Licenses</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRICING_PLANS.map((plan, i) => (
                <div key={i} className={`group p-px bg-gradient-to-br ${plan.type === PlanType.EXPRESS ? 'from-amber-500 to-orange-600' : 'from-white/10 to-transparent'} rounded-[3.5rem] transition transform hover:scale-[1.03]`}>
                  <div className="bg-slate-950 h-full p-10 rounded-[3.4rem] flex flex-col relative overflow-hidden">
                    {plan.type === PlanType.EXPRESS && (
                      <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 px-6 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-12">
                      <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-4">{plan.type}</h3>
                      <div className="flex items-baseline gap-2">
                        {plan.type === PlanType.CUSTOM ? (
                          <span className="text-3xl font-black text-white uppercase tracking-tighter">Enterprise</span>
                        ) : (
                          <>
                            <span className="text-5xl font-black text-white">${plan.minPrice}</span>
                            <span className="text-slate-600 font-bold text-sm tracking-widest">/dev</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-5 mb-14 flex-grow">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
                          <i className="fas fa-circle-check text-amber-500/60 mt-0.5"></i> <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => handleOpenContact()}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition text-xs ${plan.type === PlanType.EXPRESS || plan.type === PlanType.CUSTOM ? 'btn-neon-gold text-slate-950' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                    >
                      {plan.type === PlanType.CUSTOM ? 'Contact Architect' : 'Initialize Order'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-60 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/[0.03] rounded-full blur-[180px] -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 leading-tight tracking-tighter uppercase">READY FOR <br/><span className="neon-gold-text">AUTOMATION?</span></h2>
            <button 
              onClick={() => handleOpenContact()}
              className="btn-neon-gold text-slate-950 px-20 py-7 rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-[0_30px_60px_rgba(245,158,11,0.3)] hover:scale-110 active:scale-95 transition-all duration-300"
            >
              Consult Development Team
            </button>
            <p className="mt-12 text-slate-500 font-black uppercase tracking-[0.4em] text-[10px]">Worldwide Specialist Deployment</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <Logo size={48} />
                <span className="font-black text-3xl tracking-tighter text-white uppercase">VISATECH <span className="text-amber-500">AI</span></span>
              </div>
              <p className="text-slate-500 font-medium max-w-sm text-lg leading-relaxed">
                The world's leading specialists in visa sector appointment booking software automation development. Powered by <span className="text-slate-300 font-bold">Apollo IT Matrix</span>.
              </p>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-black text-white uppercase text-[10px] tracking-[0.4em] mb-8">Security & Protocol</h5>
              <button onClick={() => setPageWithSound('privacy')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left text-sm uppercase tracking-widest">Data Privacy</button>
              <button onClick={() => setPageWithSound('terms')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left text-sm uppercase tracking-widest">Service Terms</button>
              <button onClick={() => setPageWithSound('docs')} className="block text-slate-500 hover:text-amber-500 font-bold transition text-left text-sm uppercase tracking-widest">Core Documentation</button>
            </div>

            <div className="space-y-6">
              <h5 className="font-black text-white uppercase text-[10px] tracking-[0.4em] mb-8">Global Outreach</h5>
              <div className="flex gap-6">
                {[
                  { icon: 'linkedin-in', link: '#' },
                  { icon: 'x-twitter', link: '#' },
                  { icon: 'telegram', link: '#' },
                  { icon: 'github', link: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.link} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-white/10 transition-all text-xl">
                    <i className={`fab fa-${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-600 font-black text-[10px] uppercase tracking-[0.5em]">
              © 2026 VISATECH AI • ENGINEERED BY APOLLO IT
            </div>
            <div className="flex items-center gap-10 opacity-30">
              <i className="fab fa-cc-visa text-3xl"></i>
              <i className="fab fa-cc-mastercard text-3xl"></i>
              <i className="fab fa-cc-stripe text-3xl"></i>
              <i className="fab fa-bitcoin text-3xl"></i>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <div className="fixed bottom-10 right-10 z-[100] group">
        <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full scale-150 animate-pulse group-hover:scale-[2] transition-transform"></div>
        <button 
          onClick={openWhatsAppDirect}
          className="w-24 h-24 bg-green-500 text-white rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-110 active:scale-90 transition-all duration-300 relative overflow-hidden"
        >
          <i className="fab fa-whatsapp relative z-10"></i>
        </button>
      </div>
    </div>
  );
};

export default App;