import React, { useState } from 'react';
import { sound } from '../services/soundService';
import { WHATSAPP_NUMBER } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFrom?: string;
  defaultTo?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultFrom = "N/A", defaultTo = "N/A" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) return;
    
    sound.playSuccess();
    
    const text = `*NEW DEPLOYMENT REQUEST - VISATECH AI*\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*WhatsApp:* ${formData.phone}\n` +
                 `*Route:* ${defaultFrom} -> ${defaultTo}\n` +
                 `*Note:* ${formData.message || 'No additional notes.'}\n\n` +
                 `_I have read and accepted the VISATECH AI Terms and Conditions._\n` +
                 `_Sent via VISATECH AI Portal_`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={() => { sound.playClick(); onClose(); }}
      />
      
      <div className="bg-slate-900 w-full max-w-lg rounded-[3rem] p-1 shadow-2xl animate-modal overflow-hidden orange-glow-border relative z-10 my-8">
        <div className="bg-slate-950 rounded-[2.85rem] p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          <button 
            onClick={() => { sound.playClick(); onClose(); }}
            className="absolute top-6 right-6 text-slate-500 hover:text-white transition"
          >
            <i className="fas fa-times text-xl"></i>
          </button>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto text-amber-500 mb-4 border border-amber-500/20">
              <i className="fas fa-paper-plane text-3xl"></i>
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              DEPLOYMENT <span className="neon-gold-text">REQUEST</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm px-4 leading-relaxed">
              Submit your technical requirements to the engineering team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="JOHN DOE" 
                  className="w-full p-4 bg-slate-900 border border-white/5 rounded-2xl outline-none focus:border-amber-500/50 transition text-sm font-bold text-white uppercase placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-2">WhatsApp / Phone</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 234..." 
                  className="w-full p-4 bg-slate-900 border border-white/5 rounded-2xl outline-none focus:border-amber-500/50 transition text-sm font-bold text-white uppercase placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-2">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="DEV@COMPANY.COM" 
                className="w-full p-4 bg-slate-900 border border-white/5 rounded-2xl outline-none focus:border-amber-500/50 transition text-sm font-bold text-white uppercase placeholder:text-slate-700"
              />
            </div>

            <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Selected Target Protocol</span>
              <div className="flex items-center gap-3">
                <span className="text-white font-black">{defaultFrom}</span>
                <i className="fas fa-arrow-right text-amber-500 text-xs"></i>
                <span className="text-white font-black">{defaultTo}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-2">Special Requirements</label>
              <textarea 
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="DESCRIBE YOUR SYSTEM NEEDS..." 
                className="w-full p-4 bg-slate-900 border border-white/5 rounded-2xl outline-none focus:border-amber-500/50 transition text-sm font-bold text-white uppercase placeholder:text-slate-700 resize-none"
              ></textarea>
            </div>

            {/* Mandatory Terms Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-2xl border border-white/5 group cursor-pointer" onClick={() => setAcceptedTerms(!acceptedTerms)}>
              <div className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${acceptedTerms ? 'bg-amber-500 border-amber-500' : 'border-slate-700 bg-transparent'}`}>
                {acceptedTerms && <i className="fas fa-check text-[10px] text-slate-950"></i>}
              </div>
              <p className="text-[11px] text-slate-400 font-bold leading-tight select-none">
                I agree to the <span className="text-amber-500 underline underline-offset-2">Terms and Conditions</span> and understand the technical protocol of VISATECH AI.
              </p>
            </div>

            <button 
              type="submit"
              disabled={!acceptedTerms}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-3 ${acceptedTerms ? 'btn-neon-gold text-slate-950 hover:scale-[1.02]' : 'bg-slate-800 text-slate-500 cursor-not-allowed grayscale'}`}
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Connect via WhatsApp
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
            By submitting, you initiate a technical consultation protocol.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;