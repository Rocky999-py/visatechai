
import React from 'react';
import { sound } from '../services/soundService';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onBack: () => void;
}

const Legal: React.FC<LegalPageProps> = ({ type, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button 
          onClick={() => { sound.playTransition(); onBack(); }} 
          className="flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest mb-20 hover:gap-5 transition-all"
        >
          <i className="fas fa-chevron-left"></i> Dashboard
        </button>

        <div className="space-y-16">
          <div className="space-y-4">
            <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Official Document</span>
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              {type === 'terms' ? 'Terms of' : 'Privacy'}<br/>
              <span className="neon-gold-text">{type === 'terms' ? 'Service' : 'Protocol'}</span>
            </h1>
            <p className="text-slate-500 font-black text-xs tracking-widest mt-6">REVISION 2.4.0 // OCT 2023</p>
          </div>

          <div className="h-px bg-white/5 w-full"></div>

          <div className="space-y-12 text-slate-400 font-medium text-lg leading-relaxed">
            {type === 'terms' ? (
              <>
                <section className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-widest">01. Service Scope</h2>
                  <p>VISATECH AI, under the corporate umbrella of Apollo IT, specializes in advanced browser automation engineering. Our engagement is strictly for software development and does not include legal visa representation.</p>
                </section>
                <section className="bg-slate-900 p-10 rounded-[2.5rem] border border-orange-500/20 space-y-4">
                  <h2 className="text-xl font-black text-amber-500 uppercase tracking-widest">02. Financial Obligations</h2>
                  <p className="text-slate-300">Phase 1: 45% non-refundable milestone deposit required for architectural initialization. <br/><br/>Phase 2: 55% final settlement triggered upon verified system demonstration but prior to binary delivery.</p>
                </section>
                <section className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-widest">03. Support Tiers</h2>
                  <p>Support windows are fixed per tier. Extension of maintenance beyond the agreement period requires a recurring subscription to our node maintenance matrix.</p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-widest">01. Data Sovereignty</h2>
                  <p>We adopt a zero-knowledge architecture. Client-side applicant data is never transmitted to VISATECH AI central nodes. All processing occurs within your dedicated deployment instances.</p>
                </section>
                <section className="bg-slate-900 p-10 rounded-[2.5rem] border border-orange-500/20 space-y-4">
                  <h2 className="text-xl font-black text-amber-500 uppercase tracking-widest">02. Authentication Encryption</h2>
                  <p className="text-slate-300">Google Auth sessions are utilized solely for account verification. We do not store or track external user behavior outside the development platform scope.</p>
                </section>
                <section className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-widest">03. Audit Transparency</h2>
                  <p>Clients are granted full logs of their automation engine behavior. Security audits by third-party ethical hackers are welcomed upon signature of standard NDA protocols.</p>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
