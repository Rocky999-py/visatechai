
import React, { useState } from 'react';
import { User } from '../types';
import { sound } from '../services/soundService';

interface NavbarProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogin, onLogout, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    sound.playClick();
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition">
              <i className="fas fa-robot text-white text-xl"></i>
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              VISATECH <span className="neon-gold-text">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['features', 'pricing', 'team'].map(item => (
              <button 
                key={item}
                onClick={() => handleNavClick(item)} 
                className="text-slate-300 hover:text-amber-400 font-semibold transition uppercase text-xs tracking-widest"
              >
                {item}
              </button>
            ))}
            
            {user ? (
              <div className="flex items-center gap-4 bg-slate-900/50 p-1.5 pr-4 rounded-full border border-orange-500/20">
                <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border-2 border-amber-500 shadow-sm" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white leading-none">{user.name}</span>
                  <button onClick={() => { sound.playClick(); onLogout(); }} className="text-[10px] text-orange-400 hover:text-orange-300 text-left font-bold uppercase tracking-tighter">Sign Out</button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => { sound.playSuccess(); onLogin(); }}
                className="btn-neon-gold text-slate-950 px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl flex items-center gap-2"
              >
                <i className="fab fa-google"></i> Sign In
              </button>
            )}
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
          {['features', 'pricing', 'team'].map(item => (
            <button 
              key={item}
              onClick={() => handleNavClick(item)} 
              className="block w-full text-left text-lg font-bold text-slate-300 hover:text-amber-400 border-b border-slate-900 pb-2"
            >
              {item.toUpperCase()}
            </button>
          ))}
          
          {user ? (
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-orange-500/10">
                <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full border-2 border-amber-500" />
                <div>
                  <p className="font-black text-white">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              </div>
              <button onClick={() => { sound.playClick(); onLogout(); }} className="w-full py-4 text-orange-500 font-bold border border-orange-500/20 rounded-xl uppercase tracking-widest">Sign Out</button>
            </div>
          ) : (
            <button 
              onClick={() => { sound.playSuccess(); onLogin(); setIsMenuOpen(false); }}
              className="w-full btn-neon-gold text-slate-950 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl"
            >
              <i className="fab fa-google text-xl"></i> Sign In with Google
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
