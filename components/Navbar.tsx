
import React, { useState } from 'react';
import { sound } from '../services/soundService';
import Logo from './Logo';

interface NavbarProps {
  onContact: () => void;
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContact, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    sound.playClick();
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    sound.playClick();
    onContact();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            <Logo size={44} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-2xl tracking-tighter text-white uppercase flex items-center">
              VISATECH <span className="neon-gold-text ml-1.5">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['features', 'pricing', 'docs'].map(item => (
              <button 
                key={item}
                onClick={() => handleNavClick(item === 'docs' ? 'docs' : item)} 
                className="text-slate-300 hover:text-amber-400 font-semibold transition uppercase text-xs tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
            
            <button 
              onClick={handleContactClick}
              className="btn-neon-gold text-slate-950 px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl flex items-center gap-2 transform active:scale-95 transition"
            >
              Consult Specialist
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-amber-500 focus:outline-none p-2">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-orange-500/20 p-6 space-y-6 animate-in slide-in-from-top duration-300">
          {['features', 'pricing', 'docs'].map(item => (
            <button 
              key={item}
              onClick={() => handleNavClick(item)} 
              className="block w-full text-left text-lg font-bold text-slate-300 hover:text-amber-400 border-b border-slate-900 pb-2 uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
          
          <button 
            onClick={handleContactClick}
            className="w-full btn-neon-gold text-slate-950 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl"
          >
            Consult Specialist
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
