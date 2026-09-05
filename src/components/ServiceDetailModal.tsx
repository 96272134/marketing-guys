import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  onClose,
  onBookService 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center text-2xl font-bold shadow-xs p-2 overflow-hidden`}>
            {service.customIconUrl ? (
              <img 
                src={service.customIconUrl} 
                alt={service.title}
                className="w-full h-full object-contain drop-shadow-sm" 
              />
            ) : (
              <Zap className="w-8 h-8" />
            )}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
              Growth Solution
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Full Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Verified Metrics Badge */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Target Benchmark Outcome
            </div>
            <div className="text-sm font-bold text-emerald-950">
              {service.metrics}
            </div>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            What You Receive in this Service:
          </h4>
          <div className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Highlight */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6 text-xs text-slate-600">
          <span className="font-bold text-slate-900">Proven Case Example: </span>
          {service.caseHighlight}
        </div>

        {/* Action Buttons */}
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
              onBookService(service.title);
            }}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Strategy for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
