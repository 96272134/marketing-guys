import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/marketingData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [userMsg, setUserMsg] = useState(`Hi ${AGENCY_INFO.name} team, I'm looking to scale my business leads with digital marketing. Could you share a quick proposal?`);

  if (!isOpen) return null;

  const handleLaunchWhatsApp = () => {
    const encoded = encodeURIComponent(userMsg);
    const url = `https://wa.me/${AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200 text-left">
        
        {/* WhatsApp Top Header */}
        <div className="bg-[#075E54] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm border-2 border-white/40">
                MG
              </div>
              <span className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075E54] absolute bottom-0 right-0"></span>
            </div>
            <div>
              <div className="font-bold text-base leading-tight font-heading">{AGENCY_INFO.name}</div>
              <div className="text-[11px] text-emerald-200 font-medium">Head Strategists • Online</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* WhatsApp Chat Body */}
        <div className="p-5 bg-[#ECE5DD] space-y-4 min-h-[160px]">
          
          {/* Agent incoming bubble */}
          <div className="bg-white text-slate-800 text-xs p-3.5 rounded-2xl rounded-tl-xs shadow-xs max-w-[85%] leading-relaxed">
            <p className="font-semibold text-emerald-800 mb-1">{AGENCY_INFO.name}</p>
            <p>Hello! Welcome to {AGENCY_INFO.name}. How can we help scale your business leads today?</p>
            <span className="text-[9px] text-slate-400 block text-right mt-1">Just now</span>
          </div>

          {/* User message input preview */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold text-slate-700">
              Customize your message before sending:
            </label>
            <textarea
              rows={3}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="w-full bg-white text-slate-900 text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none shadow-xs"
            ></textarea>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-4 bg-white border-t border-slate-200">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
          >
            <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-5 h-5 object-contain" />
            <span>Open in WhatsApp ({AGENCY_INFO.formattedPhone})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
