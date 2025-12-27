
import React from 'react';
import { sound } from '../services/soundService';

interface DocumentationProps {
  onBack: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => { sound.playTransition(); onBack(); }} 
          className="flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest mb-16 hover:gap-5 transition-all group"
        >
          <i className="fas fa-chevron-left"></i> Core Platform
        </button>

        <div className="grid lg:grid-cols-4 gap-16">
          <aside className="hidden lg:block space-y-8 sticky top-32 h-fit">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Protocol Navigation</h3>
            <nav className="flex flex-col gap-6">
              {['Platform Overview', 'AI Architecture', 'Integration Guide', 'SLA & Support'].map((link, i) => (
                <a key={i} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-black text-slate-400 hover:text-amber-500 transition uppercase tracking-widest flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                  {link}
                </a>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-3 space-y-32">
            <section id="platform-overview">
              <h1 className="text-6xl font-black text-white mb-8 tracking-tighter">TECHNICAL <span className="neon-gold-text">PROTOCOL</span></h1>
              <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                The VISATECH AI engine is a multi-layered automation framework built on millisecond-latency infrastructure. 
                We deploy a global matrix of 1,500+ secure nodes to facilitate non-human detectable booking flows.
              </p>
            </section>

            <section id="ai-architecture" className="space-y-12">
              <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500"><i className="fas fa-layer-group"></i></div>
                System Layering
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-8 rounded-[2rem] border border-white/5 group hover:border-amber-500/30 transition">
                  <h4 className="font-black text-white mb-4 uppercase tracking-widest">Behavioral Sync v3</h4>
                  <p className="text-slate-400 font-medium">Advanced ML models train on human navigation patterns (scrolling velocity, mouse jitter) to completely eliminate bot signatures.</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2rem] border border-white/5 group hover:border-amber-500/30 transition">
                  <h4 className="font-black text-white mb-4 uppercase tracking-widest">Node Distribution</h4>
                  <p className="text-slate-400 font-medium">Traffic is obfuscated across residential ISP backbones globally, ensuring embassy firewalls see 100% legitimate traffic.</p>
                </div>
              </div>
            </section>

            <section id="integration-guide" className="space-y-12">
              <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500"><i className="fas fa-terminal"></i></div>
                Deployment Cycle
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Route Extraction', text: 'Our AI analyzes the target portal DOM structure and security entropy.' },
                  { step: '02', title: '45% Protocol Deposit', text: 'Initialization of specialized node allocation and custom OCR solver training.' },
                  { step: '03', title: 'Live Demonstration', text: 'Functionality proof on live environment before final code handover.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-4xl font-black text-slate-800 group-hover:text-amber-500/20 transition">{item.step}</div>
                    <div>
                      <h4 className="font-black text-white text-xl uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-slate-400 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="sla-&-support" className="bg-gradient-to-br from-amber-500 to-orange-600 p-12 md:p-16 rounded-[3rem] shadow-2xl text-slate-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-20 text-9xl"><i className="fas fa-shield-alt"></i></div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Global SLA Guarantee</h2>
              <div className="grid md:grid-cols-2 gap-12 font-black uppercase text-sm tracking-widest">
                <div className="space-y-2">
                  <p className="opacity-60">Critical Uptime</p>
                  <p className="text-2xl">99.98% / 365 Days</p>
                </div>
                <div className="space-y-2">
                  <p className="opacity-60">Patch Frequency</p>
                  <p className="text-2xl">&lt; 120 Minutes Response</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
