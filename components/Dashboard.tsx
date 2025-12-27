import React, { useState } from 'react';
import { COUNTRIES } from '../constants';
import { generateVisaStrategy } from '../services/geminiService';
import { sound } from '../services/soundService';

interface DashboardProps {
  onOpenContact: (from: string, to: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onOpenContact }) => {
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

  const handleBuildRequest = () => {
    sound.playClick();
    onOpenContact(fromCountry, toCountry);
  };

  return (
    <div id="dashboard" className="bg-slate-900/90 backdrop-blur-3xl rounded-[3rem] shadow-2xl overflow-hidden orange-glow-border relative group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>
      <div className="grid lg:grid-cols-5 min-h-[600px]">
        
        {/* Input Panel */}
        <div className="lg:col-span-2 p-10 lg:p-14 space-y-12 border-r border-white/5">
          <div className="relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-amber-500 rounded-full"></div>
            <h2 className="text-4xl font-black text-white leading-none">ENGINE<br/><span className="neon-gold-text">CONFIG</span></h2>
            <p className="text-slate-500 mt-4 font-semibold text-sm uppercase tracking-widest">Protocol Initialization</p>
          </div>

          <div className="space-y-10">
            <div className="grid gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] ml-1">Route Source</label>
                <div className="relative group">
                  <select 
                    value={fromCountry}
                    onChange={(e) => { sound.playClick(); setFromCountry(e.target.value); }}
                    className="w-full p-5 bg-slate-950 border border-slate-800 rounded-2xl focus:border-amber-500 outline-none transition text-white font-bold appearance-none cursor-pointer"
                  >
                    {COUNTRIES.map(c => (
                      <option key={c.code} value={c.name} className="bg-slate-950">{c.flag} {c.name}</option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none group-hover:text-amber-500 transition"></i>
                </div>
              </div>

              <div className="flex justify-center -my-4 relative">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-amber-500/30 text-amber-500 shadow-xl z-10">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] ml-1">Route Target</label>
                <div className="relative group">
                  <select 
                    value={toCountry}
                    onChange={(e) => { sound.playClick(); setToCountry(e.target.value); }}
                    className="w-full p-5 bg-slate-950 border border-slate-800 rounded-2xl focus:border-amber-500 outline-none transition text-white font-bold appearance-none cursor-pointer"
                  >
                    {COUNTRIES.map(c => (
                      <option key={c.code} value={c.name} className="bg-slate-950">{c.flag} {c.name}</option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none group-hover:text-amber-500 transition"></i>
                </div>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-6 rounded-2xl font-black text-slate-950 uppercase tracking-widest shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-4 text-center leading-tight px-6 ${loading ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'btn-neon-gold'}`}
            >
              {loading ? (
                <>
                  <i className="fas fa-circle-notch fa-spin text-xl"></i> CALIBRATING...
                </>
              ) : (
                <>
                  <i className="fas fa-microchip text-xl"></i> ANALYZE PROTOCOL
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-3 bg-slate-950/50 p-10 lg:p-14 relative flex flex-col justify-center overflow-hidden">
          <div className="scanner-line"></div>
          
          {strategy ? (
            <div className="animate-in fade-in slide-in-from-right duration-1000 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                  <span className="font-mono text-[10px] text-green-500 uppercase tracking-[0.5em]">System: Live_Analysis</span>
                </div>
                <span className="font-mono text-[10px] text-slate-600">ID: VT-2026-XQ</span>
              </div>
              
              <div className="flex-grow space-y-8">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  DEPLOYMENT <span className="text-amber-500">STRATEGY</span>
                </h3>
                
                <div className="font-mono bg-slate-900/80 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/20"></div>
                  <p className="text-slate-300 leading-relaxed text-lg italic relative z-10">
                    {strategy}
                  </p>
                  <div className="mt-8 flex gap-4">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-lg border border-amber-500/20 uppercase tracking-widest">Bot Bypass: Active</span>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-lg border border-amber-500/20 uppercase tracking-widest">Proxy Matrix: Distributed</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <button 
                  onClick={handleBuildRequest}
                  className="w-full py-5 bg-amber-500/5 border border-amber-500/30 text-amber-500 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-amber-500 hover:text-slate-950 transition duration-500 flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  Initialize Custom Build via WhatsApp
                </button>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Compute', val: '0.008s' },
                    { label: 'Reliability', val: '100%' },
                    { label: 'Latency', val: 'Low' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-slate-900/40 rounded-2xl border border-white/5">
                      <p className="text-[9px] text-slate-600 uppercase font-bold tracking-[0.2em] mb-1">{stat.label}</p>
                      <p className="text-sm font-black text-amber-500/80 font-mono">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-10 py-20 relative">
              <div className="w-32 h-32 bg-slate-900 rounded-[2.5rem] border border-orange-500/10 flex items-center justify-center mx-auto relative group-hover:rotate-12 transition duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-amber-500/5 blur-2xl rounded-full scale-150"></div>
                <i className="fas fa-radar text-5xl text-amber-500 animate-pulse"></i>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">System Idle</h3>
                <p className="text-slate-500 max-w-xs mx-auto text-xs font-bold uppercase tracking-[0.3em] leading-relaxed">
                  Provide Origin & Destination parameters to activate AI Route Engineering
                </p>
              </div>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-800 animate-bounce" style={{ animationDelay: `${i * 150}ms` }}></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;