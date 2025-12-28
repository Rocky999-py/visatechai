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
  const [sysTime, setSysTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setSysTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const setPageWithSound = (p: AppState) => {
    sound.playTransition();
    setPage(p);
  };

  const scrollToSection = (id: string) => {
    if (page !== 'home') {
      setPageWithSound('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (page === 'docs') return <Documentation onBack={() => setPageWithSound('home')} />;
  if (page === 'terms' || page === 'privacy') return <Legal type={page} onBack={() => setPageWithSound('home')} />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Top System Ticker */}
      <div className="bg-amber-500 text-slate-950 py-2 px-4 flex justify-between items-center font-mono text-[10px] font-black uppercase tracking-widest z-[60] fixed top-0 w-full">
        <div className="flex gap-6 overflow-hidden">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></div> MATRIX_V4_ONLINE</span>
          <span className="hidden sm:inline">GLOBAL_LATENCY: 4MS</span>
          <span className="hidden md:inline">DEPLOYED_NODES: 1,482</span>
          <span className="hidden lg:inline">SUCCESS_RATE: 99.8%</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{sysTime}</span>
          <span className="bg-slate-950 text-amber-500 px-2 rounded">SECURE</span>
        </div>
      </div>

      <Navbar onContact={() => setIsContactModalOpen(true)} onScrollTo={scrollToSection} />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        defaultFrom={activeRoute.from}
        defaultTo={activeRoute.to}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative pt-44 pb-32 hero-mesh overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="mb-12 inline-flex items-center gap-3 bg-slate-900/80 border border-amber-500/20 px-6 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Apollo IT Engineering Matrix</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.85] uppercase">
              ELITE <span className="neon-gold-text">BOT</span><br/>
              DEVELOPMENT
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              High-frequency automation software for visa agencies. 
              Built with non-human detectable behavioral patterns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('dashboard')} className="btn-neon-gold text-slate-950 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl">
                Configure Build
              </button>
              <button onClick={() => setPageWithSound('docs')} className="bg-slate-900/50 backdrop-blur-md text-white border border-slate-700 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest">
                System Specs
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
          <Dashboard onOpenContact={(f, t) => { setActiveRoute({from: f, to: t}); setIsContactModalOpen(true); }} />
        </section>

        {/* Global Infrastructure */}
        <section className="py-40 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Infrastructure</span>
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-tight">Global Node <br/><span className="neon-gold-text">Matrix</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our development team maintains a proprietary network of residential backbones across 190+ countries. 
                  Every software build we deliver includes dynamic endpoint rotation as standard.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                    <div className="text-3xl font-black text-white mb-2">1,500+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Active Proxy Nodes</div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                    <div className="text-3xl font-black text-white mb-2">&lt; 150ms</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Avg Response Time</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full"></div>
                <div className="bg-slate-900 aspect-square rounded-[4rem] border border-amber-500/20 p-8 relative overflow-hidden flex items-center justify-center">
                   <i className="fas fa-globe-americas text-[15rem] text-amber-500/20 absolute -right-10 -bottom-10"></i>
                   <div className="grid grid-cols-3 gap-6 relative z-10">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className="w-12 h-12 bg-slate-800 rounded-xl border border-white/5 flex items-center justify-center text-amber-500 animate-pulse" style={{animationDelay: `${i*100}ms`}}>
                         <i className="fas fa-server"></i>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-40 bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Protocol <span className="neon-gold-text">FAQ</span></h2>
            </div>
            <div className="space-y-6">
              {[
                { q: "How do you bypass Akamai/Cloudflare?", a: "We develop custom TLS fingerprinting libraries that mimic real browser handshakes at the socket level, bypassing behavioral challenges." },
                { q: "Is the software legal for agency use?", a: "Our software is developed as a technical tool for workflow optimization. Clients are responsible for ensuring compliance with their local embassy terms." },
                { q: "What is your typical development cycle?", a: "Standard builds take 7-14 days. Custom enterprise architectures requiring ML behavioral training can take up to 30 days." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/30 border border-white/5 p-8 rounded-[2rem] hover:border-amber-500/30 transition duration-500 group">
                  <h4 className="text-white font-black uppercase tracking-tight mb-4 flex justify-between items-center">
                    {item.q}
                    <i className="fas fa-plus text-amber-500 text-xs group-hover:rotate-45 transition"></i>
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="py-40 bg-slate-950">
           <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-32">
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Licensing</span>
                <h2 className="text-5xl font-black text-white mt-4 uppercase tracking-tighter">Development <span className="neon-gold-text">Tiers</span></h2>
             </div>
             <div className="grid lg:grid-cols-4 gap-8">
               {PRICING_PLANS.map((plan, i) => (
                 <div key={i} className="bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 hover:border-amber-500/40 transition-all flex flex-col group">
                   <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">{plan.type}</h3>
                   <div className="text-4xl font-black text-white mb-4">
                     {plan.type === 'CUSTOM' ? 'POA' : `$${plan.minPrice}`}
                   </div>
                   <p className="text-slate-500 text-sm mb-10 h-12 overflow-hidden">{plan.description}</p>
                   <ul className="space-y-4 mb-12 flex-grow">
                     {plan.features.slice(0, 4).map((f, j) => (
                       <li key={j} className="text-xs font-bold text-slate-400 flex items-center gap-3">
                         <i className="fas fa-check text-amber-500/50"></i> {f}
                       </li>
                     ))}
                   </ul>
                   <button onClick={() => setIsContactModalOpen(true)} className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs bg-white/5 text-white hover:bg-amber-500 hover:text-slate-950 transition duration-500">
                     Initialize
                   </button>
                 </div>
               ))}
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Logo size={60} className="mx-auto mb-10 opacity-50" />
          <p className="text-slate-600 font-black text-[10px] uppercase tracking-[0.5em] mb-10">
            © 2026 VISATECH AI • Apollo IT Development Matrix
          </p>
          <div className="flex justify-center gap-10">
            <button onClick={() => setPageWithSound('privacy')} className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest">Privacy Protocol</button>
            <button onClick={() => setPageWithSound('terms')} className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest">Terms of Service</button>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-10 right-10 z-[100]">
        <button 
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank')}
          className="w-20 h-20 bg-green-500 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl hover:scale-110 active:scale-90 transition-all"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  );
};

export default App;