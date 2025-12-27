
import React, { useState } from 'react';
import { COUNTRIES, WHATSAPP_NUMBER } from '../constants';
import { generateVisaStrategy } from '../services/geminiService';
import { sound } from '../services/soundService';

const Dashboard: React.FC = () => {
  const [fromCountry, setFromCountry] = useState(COUNTRIES[7].name);
  const [toCountry, setToCountry] = useState(COUNTRIES[0].name);
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);

  const handleGenerate = async () => {
    sound.playTransition();
    setLoading(true);
    const result = await generateVisaStrategy(fromCountry, toCountry);
    setStrategy(result);
    setLoading(false);
    sound.playSuccess();
  };

  const handleWhatsApp = () => {
    sound.playClick();
    const text = encodeURIComponent(`Hello VISATECH AI Team, I am interested in building a visa appointment automation system from ${fromCountry} to ${toCountry}. Please provide a proposal.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="dashboard" className="bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden orange-glow-border relative group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="grid md:grid-cols-2">
        <div className="p-8 lg:p-14 space-y-10">
          <div>
            <h2 className="text-4xl font-black text-white mb-3">Engine <span className="neon-gold-text">Config</span></h2>
            <p className="text-slate-400 font-medium">Define your automated target route for AI deployment.</p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black text-amber-500 uppercase tracking-widest">Origin</label>
                <select 
                  value={fromCountry}
                  onChange={(e) => { sound.playClick(); setFromCountry(e.target.value); }}
                  className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-amber-500 outline-none transition text-white font-bold"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.name} className="bg-slate-950">{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-amber-500 uppercase tracking-widest">Destination</label>
                <select 
                  value={toCountry}
                  onChange={(e) => { sound.playClick(); setToCountry(e.target.value); }}
                  className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-amber-500 outline-none transition text-white font-bold"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.name} className="bg-slate-950">{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-slate-950 uppercase tracking-widest shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-4 ${loading ? 'bg-slate-800 text-slate-500' : 'btn-neon-gold hover:-translate-y-1'}`}
            >
              {loading ? (
                <>
                  <i className="fas fa-circle-notch fa-spin text-xl"></i> Optimizing Route...
                </>
              ) : (
                <>
                  <i className="fas fa-microchip text-xl"></i> Initialize AI Build
                </>
              )}
            </button>

            <button 
              onClick={handleWhatsApp}
              className="w-full bg-slate-950 text-white border border-green-500/30 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition flex items-center justify-center gap-3 group"
            >
              <i className="fab fa-whatsapp text-2xl text-green-500 group-hover:scale-125 transition"></i> 
              <span className="text-green-500">Live Consultant</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-950/80 p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden border-l border-white/5">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
          {strategy ? (
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <div className="flex items-center gap-3 text-amber-500 mb-6">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <i className="fas fa-project-diagram text-xl"></i>
                </div>
                <span className="uppercase tracking-[0.3em] font-black text-xs">Technical Output</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">Automation Protocol: <span className="text-amber-500">{toCountry}</span></h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed italic border-l-4 border-amber-500 pl-6 py-4 bg-slate-900/50 rounded-r-2xl text-lg">
                  "{strategy}"
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 shadow-inner">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Compute Latency</p>
                  <p className="text-2xl font-black text-amber-500">0.012<span className="text-xs ml-1 text-slate-400">sec</span></p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 shadow-inner">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">AI Stability</p>
                  <p className="text-2xl font-black text-amber-500">99.98<span className="text-xs ml-1 text-slate-400">%</span></p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-8 py-10">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-950 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition duration-500">
                <i className="fas fa-radar text-4xl text-amber-500 animate-pulse"></i>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white">Awaiting Configuration</h3>
                <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed uppercase tracking-wider">Configure your route origin and destination to generate a machine learning strategy.</p>
              </div>
              <div className="flex justify-center gap-3 opacity-20">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
