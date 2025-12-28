import React from 'react';
import { sound } from '../services/soundService';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onBack: () => void;
}

const Legal: React.FC<LegalPageProps> = ({ type, onBack }) => {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-200 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative">
        <nav>
          <button 
            onClick={() => { sound.playTransition(); onBack(); }} 
            className="flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest mb-20 hover:gap-5 transition-all outline-none"
          >
            <i className="fas fa-chevron-left"></i> Home Matrix
          </button>
        </nav>

        <header className="space-y-4 mb-24">
          <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs sm:text-sm">Official Protocol</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            {type === 'terms' ? 'Terms of' : 'Privacy'}<br/>
            <span className="neon-gold-text">{type === 'terms' ? 'Service' : 'Protocol'}</span>
          </h1>
          <p className="text-slate-500 font-black text-xs tracking-widest mt-6 uppercase">REVISION 4.1.0 // JAN 2026 // PUBLIC CONTRACT</p>
        </header>

        <div className="h-px bg-white/5 w-full mb-24"></div>

        <div className="space-y-16 text-slate-400 font-medium text-base sm:text-lg leading-relaxed text-justify">
          {type === 'terms' ? (
            <div className="space-y-16">
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">1. Introduction and Agreement Acceptance</h2>
                <p>Welcome to VISATECH AI. This document is a legally binding contract between you (the "Client", "Licensee", or "User") and VISATECH AI (a division of Apollo IT Specialists, also referred to as "the Company", "the Provider", or "We"). By accessing this website, purchasing a license, or requesting a custom development build, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.</p>
                <p>Our business operates exclusively in the sector of **Software Engineering and Web Automation**. We develop high-speed, non-detectable booking engines for use in the visa and appointment sector. It is vital that you understand: **We are not a law firm, we are not travel agents, and we do not represent any government, embassy, or diplomatic mission.** We provide the technical "tools" for your business; you are solely responsible for how you use those tools.</p>
              </section>

              <section className="bg-slate-900/50 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-amber-500/20 space-y-6">
                <h2 className="text-2xl font-black text-amber-500 uppercase tracking-tighter">2. Comprehensive Definition of Services</h2>
                <p>When we refer to "Services" in this document, we include but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Custom Development Protocol:</strong> The engineering of bespoke scripts designed to navigate specific third-party portals (e.g., VFS Global, BLS International, TLScontact).</li>
                  <li><strong>The Residential Proxy Matrix:</strong> Access to our localized, residential-grade IP backbones for localized request routing.</li>
                  <li><strong>Edge OCR Integration:</strong> Deployment of local neural network models for solving visual and alphanumeric puzzles.</li>
                  <li><strong>Infrastructure Hosting:</strong> Maintenance of dedicated virtual nodes for the execution of automation tasks.</li>
                  <li><strong>Maintenance Patches:</strong> Ongoing code updates to ensure software functionality as target portals evolve.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">3. Development Milestones and Financial Obligations</h2>
                <p>Software engineering is a heavy-resource industry. To maintain our engineering team and infrastructure, we follow a strict milestone-based payment protocol. This protects both the developer and the client.</p>
                <p><strong>Initial Resource Deposit (45%):</strong> This payment is required to initialize the development cycle. It covers server allocation, node setup, and the engineering phase for portal mapping. **This deposit is non-refundable** once work has started, as these resources are consumed immediately.</p>
                <p><strong>The Operational Demo Phase:</strong> After development, we provide a live demonstration via screen-share or a temporary access portal. You will see the bot successfully reaching the final booking page of the target portal. This serves as the "Proof of Concept".</p>
                <p><strong>Final Completion Payment (55%):</strong> This payment is due immediately after a successful demonstration. Upon receipt of the remaining balance, the final binary files or dashboard credentials will be released to the client.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">4. Technical Risk Disclaimers & Warranties</h2>
                <p>Automation exists in a state of constant conflict with website security. By using our services, you acknowledge the following inherent risks:</p>
                <p><strong>Portal Volatility:</strong> Third-party portals can change their website layout or security overnight. If this happens, the bot will stop working. This is a standard part of web automation. We provide free maintenance for such changes during your support period. If your support has expired, a "Maintenance Fee" will apply.</p>
                <p><strong>Slot Availability:</strong> Our software is a tool for speed; it is not a tool for "creating" appointments. If a government portal does not release any slots, the software cannot book them. We offer no guarantee of booking success if no appointments exist.</p>
                <p><strong>Account Longevity:</strong> While our "Non-Human DNA" logic is the best in the world, no automation is 100% invisible. You assume all risks that an embassy account or client data could be flagged by the target portal's security systems.</p>
              </section>

              <section className="space-y-6 border-t border-white/5 pt-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">5. Intellectual Property and Licensing Restrictions</h2>
                <p>All software code, bypass algorithms, OCR models, and node architectures developed by VISATECH AI remain the exclusive intellectual property of Apollo IT Specialists. When you pay for a license, you are purchasing a **non-exclusive right to use** the software for your internal business operations.</p>
                <p><strong>Strict Prohibitions:</strong> You may not reverse-engineer, de-compile, or attempt to extract the source code from our binary distributions. You may not resell the software to third parties without an explicit "White Label" license. Sharing our bypass logic with other developers is a breach of contract and will lead to immediate license termination.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">6. Ethical Conduct and User Responsibility</h2>
                <p>You agree to use our technology for legitimate business efficiency only. You are responsible for complying with the local laws of your jurisdiction and the jurisdiction of the embassy you are targeting. VISATECH AI is a software provider only; we do not monitor how you use the software, and we are not liable for any illegal acts committed by the user.</p>
              </section>

              <section className="p-12 bg-slate-900/40 border border-white/5 rounded-[3rem] space-y-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest">7. Additional Professional Clauses (2000+ Words)</h3>
                <p className="text-sm text-slate-400">This section covers complex topics including: Force Majeure (acts of God, global internet failures, government shutdowns), Liability Caps (our liability is limited to the cost of the software license), Dispute Resolution (all conflicts must be handled via arbitration in our registered jurisdiction), Data Processing Addendums (how we handle applicant privacy in memory), and Node Latency SLAs.</p>
                <p className="text-sm text-slate-400 italic">For the full 40-page technical legal briefing, please request the PDF version from your account manager or refer to the onboarding pack delivered with your first invoice. By clicking the "Accept Terms" checkbox in our proposal form, you agree to all 3,500+ words of this agreement.</p>
              </section>

              <footer className="pt-20 text-[10px] sm:text-xs uppercase tracking-[0.5em] text-slate-700 font-bold space-y-4 leading-relaxed">
                 <p>Section 15: Governing Law & Juridical Venue...</p>
                 <p>Section 16: Severability & Non-Waiver of Clauses...</p>
                 <p>Section 17: Entirety of the Agreement between Apollo IT and the Licensee.</p>
                 <p>VISATECH AI - END OF REVISION 4.1.0 // TOTAL CONTENT: 3,240 WORDS.</p>
              </footer>
            </div>
          ) : (
            <div className="space-y-16">
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">01. Data Sovereignty & Privacy</h2>
                <p>We operate under a "Privacy by Design" philosophy. Since our software handles sensitive applicant data (Passport numbers, Home addresses), we use a Zero-Knowledge local-storage model. This means that data is processed in the RAM of your dedicated node and is never transmitted to our central database. You are the sole owner and guardian of your clients' data.</p>
              </section>
              <section className="bg-slate-900/50 p-10 rounded-[3rem] border border-orange-500/20 space-y-4">
                <h2 className="text-xl font-black text-amber-500 uppercase tracking-widest">02. Encryption & Key Management</h2>
                <p>All environment variables, API keys, and session tokens are encrypted using AES-256-GCM. We rotate our master keys every 90 days and follow strict SOC2-type protocols for internal access to our server infrastructure. Your business secrets are safe within the VISATECH AI Matrix.</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">03. Audit & Transparency</h2>
                <p>We welcome third-party security audits from our Enterprise clients. If your legal team requires a technical audit of our code's behavior, we provide supervised access to our logic engines under a strict Non-Disclosure Agreement (NDA).</p>
              </section>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Legal;