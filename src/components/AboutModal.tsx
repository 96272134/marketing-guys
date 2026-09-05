import React from 'react';
import { X, Award, CheckCircle2, Users, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/marketingData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenConsultation 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>About {AGENCY_INFO.name}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            Engineering High-Yield Digital Acquisition
          </h3>
        </div>

        <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
          <p>
            Founded by <strong className="text-slate-900">{AGENCY_INFO.leadStrategist}</strong>, {AGENCY_INFO.name} was built with a single mission: to replace vanity marketing metrics with ruthless pipeline growth and documented return on ad spend.
          </p>
          <p>
            Over the past {AGENCY_INFO.experienceYears} years, our cross-functional team of Google Premier & Meta Certified practitioners has managed over $18M in media spend, helping 500+ global brands scale profitability.
          </p>
        </div>

        {/* Agency Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-blue-600" />
              Full Funnel Ownership
            </div>
            <p className="text-xs text-slate-600">
              We connect ads, landing pages, tracking, and email nurture into a unified revenue engine.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Transparent Dashboards
            </div>
            <p className="text-xs text-slate-600">
              Direct access to live Looker Studio reporting with real-time attribution data.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Partner With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
