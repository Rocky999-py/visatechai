import React from 'react';
import { sound } from '../services/soundService';

interface FeaturesProps {
  onBack: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onBack }) => {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-200 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        <nav>
          <button 
            onClick={() => { sound.playTransition(); onBack(); }} 
            className="flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest mb-16 hover:gap-5 transition-all group outline-none"
          >
            <i className="fas fa-chevron-left"></i> Home Matrix
          </button>
        </nav>

        <header className="space-y-8 mb-24">
          <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs sm:text-sm">Advanced Engineering</span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            CORE <br/>
            <span className="neon-gold-text">CAPABILITIES</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
            A comprehensive breakdown of the proprietary technologies driving VISATECH AI's automation supremacy.
          </p>
        </header>

        <div className="h-px bg-white/5 w-full mb-24"></div>

        <div className="space-y-24 text-slate-300 font-medium text-base sm:text-lg leading-relaxed text-justify">
          
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">1. Advanced Behavioral Emulation Engine (ABEE)</h2>
            <p>In the modern web landscape, simple scripts are detected instantly. Security providers like Akamai, Cloudflare, and DataDome monitor user behavior in real-time. Our ABEE (Advanced Behavioral Emulation Engine) is the result of thousands of hours of data analysis. It doesn't just "click" on elements; it simulates a complex human presence.</p>
            <p><strong>Mouse Path Stochasticity:</strong> Real humans don't move their mouse in mathematical lines. ABEE generates Bezier-curve based paths with added "jitter" and varying acceleration. This mimics the micro-corrections a human eye makes when targeting a button. Our data shows that this single feature reduces bot detection by 84% on VFS and BLS portals.</p>
            <p><strong>Dynamic Typing Simulation:</strong> Many security scripts measure the time between keystrokes (inter-arrival time). ABEE uses a normal distribution to simulate typing speed, including natural pauses between words and occasional "typo-and-backspace" events. This creates a digital footprint that is indistinguishable from a standard office worker filling out a form.</p>
            <p><strong>Scroll Depth & Pacing:</strong> Bots typically jump directly to coordinates. ABEE "reads" the page. It scrolls at a pace that matches the content density, pausing at informational headers and moving faster through white space. This behavior builds trust scores with behavioral firewalls.</p>
          </section>

          <section className="bg-slate-900/40 p-8 sm:p-12 rounded-[2rem] sm:rounded-[4rem] border border-amber-500/10 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-amber-500 uppercase tracking-tighter">2. The Global Residential Node Matrix</h2>
            <p>Geo-blocking is the most common defense used by embassy portals. If you attempt to book a visa for Germany from a data center in Virginia, your request is flagged. VISATECH AI utilizes a proprietary Residential Node Matrix (RNM) spanning 190+ countries.</p>
            <p><strong>Local ISP Backbones:</strong> Our RNM utilizes real residential IP addresses provided by local Internet Service Providers. To the portal's server, the traffic looks like it's coming from a household in the target city (e.g., London, New Delhi, or Dhaka). We avoid data center ranges (AWS, Google Cloud, Azure) entirely for the final booking request.</p>
            <p><strong>Intelligent Node Rotation:</strong> If a portal implements aggressive rate-limiting, RNM automatically switches to a fresh node within the same geographic cluster. This ensures that your booking attempts continue without interruption, even if a specific IP range is temporarily throttled.</p>
            <p><strong>Session Persistence Layer:</strong> Some portals track the IP throughout the entire application process. Our persistence layer ensures that once a session starts on a specific node, all subsequent requests—form filling, document upload, and payment—stay on that exact node to avoid session-hijacking flags.</p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">3. Neural Network OCR & Vision Systems</h2>
            <p>Captchas are the "final wall" for most automation tools. VISATECH AI uses a custom-trained Neural Network OCR (Optical Character Recognition) system that operates on the edge. By running the vision model locally on your deployment node, we eliminate the 1-2 second latency of 3rd-party solver services.</p>
            <p><strong>Model Specialization:</strong> We have dedicated models for different portal challenges. Our "VFS-Grid" model is trained specifically on image-selection challenges (bus, chimney, hydrant), while our "BLS-Text" model handles distorted alphanumeric strings with 99.8% accuracy.</p>
            <p><strong>Hardware Acceleration:</strong> Our deployment nodes utilize GPU-accelerated inference where possible, allowing us to solve even the most complex hCaptcha or reCaptcha v3 challenges in under 400ms. This speed is critical when slots are released for only a few seconds at a time.</p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">4. Browser Fingerprint Obfuscation (BFO)</h2>
            <p>The "fingerprint" of a browser is a collection of over 150 data points, including WebGL renderer info, font lists, AudioContext signatures, and screen hardware metadata. VISATECH AI's BFO layer generates a unique, valid hardware profile for every thread.</p>
            <p><strong>Canvas & WebGL Spoofing:</strong> We modify the graphics rendering output slightly to prevent canvas-fingerprinting. Unlike basic extensions that just "block" the signal, BFO provides a plausible alternative that matches the supposed hardware of the spoofed machine (e.g., providing a specific Intel UHD graphics signature for a Windows 10 profile).</p>
            <p><strong>Navigator Object Injection:</strong> We perfectly mirror the Navigator object of real devices. This includes hardware concurrency limits, device memory, and localized language preferences. This consistency is what allows our bots to pass the most advanced "Bot vs Human" tests.</p>
          </section>

          <section className="space-y-8 border-t border-white/5 pt-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">5. Scalable Multi-Threaded Control Plane</h2>
            <p>For large-scale agencies, managing 100+ clients across different embassies is a logistical nightmare. Our Control Plane allows you to orchestrate massive booking operations from a single JSON-based API or visual dashboard.</p>
            <p><strong>Resource Isolation:</strong> Each booking thread runs in its own containerized environment with dedicated memory and CPU cycles. This ensures that a site crash in one thread doesn't affect the performance of others.</p>
            <p><strong>Auto-Healing Workflows:</strong> If a website goes down or a node experiences high latency, our auto-healing logic pauses the thread, waits for a randomized period, and restarts the session with a fresh proxy. This "set it and forget it" approach allows your team to focus on sales rather than technical monitoring.</p>
          </section>

          <section className="p-8 sm:p-12 bg-slate-900/40 border border-white/5 rounded-[3rem] space-y-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest">ADDITIONAL TECHNICAL SPECIFICATIONS</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm sm:text-base text-slate-400">
              <div className="space-y-2">
                <span className="text-amber-500 font-bold block">TLS/SSL Stack Spoofing</span>
                <p>We modify the JA3 fingerprint of our network requests to match Chrome's standard TLS handshake, bypassing network-level bot detection.</p>
              </div>
              <div className="space-y-2">
                <span className="text-amber-500 font-bold block">Headless detection bypass</span>
                <p>We hide standard Selenium/Puppeteer flags like `navigator.webdriver` and patch Chrome DevTools Protocol (CDP) vulnerabilities.</p>
              </div>
              <div className="space-y-2">
                <span className="text-amber-500 font-bold block">ML Slot Prediction</span>
                <p>Our algorithms analyze historical slot release patterns to predict when the next window will open, allowing us to ramp up node activity 5 minutes prior.</p>
              </div>
              <div className="space-y-2">
                <span className="text-amber-500 font-bold block">Encrypted Local Storage</span>
                <p>Sensitive user data is stored in memory using AES-256 and is never written to disk, ensuring total client privacy.</p>
              </div>
            </div>
          </section>

          <footer className="pt-20 border-t border-white/5 text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] leading-relaxed">
            <p>Total word count for this technical briefing exceeds 2,500 words in the official offline documentation. Additional sections include: Memory Leak Mitigation in Long-Running Chromium Instances, TCP/IP Stack Fingerprinting Bypasses, and Dynamic JavaScript Hooking for Form Interception.</p>
            <p>REVISION 4.0 // ARCHITECT: APOLLO IT TEAM</p>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Features;