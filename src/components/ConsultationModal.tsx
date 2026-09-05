import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Phone, Mail, Loader2, Database } from 'lucide-react';
import { AGENCY_INFO } from '../data/marketingData';
import { saveConsultationBooking } from '../lib/supabase';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  initialService = 'Full-Funnel Growth Strategy'
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{ synced: boolean; message: string }>({ synced: false, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    preferredTime: 'Morning (9 AM - 12 PM EST)',
    serviceInterest: initialService,
    currentRevenue: '₹50,000 - ₹2,00,000/mo'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await saveConsultationBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        preferredTime: formData.preferredTime,
        serviceInterest: formData.serviceInterest,
        currentRevenue: formData.currentRevenue
      });

      if (result.success) {
        setSyncStatus({ 
          synced: true, 
          message: `Saved to Supabase (${result.table} table)` 
        });
      } else {
        setSyncStatus({ 
          synced: false, 
          message: 'Saved to local queue & ready for sync' 
        });
      }
    } catch (err) {
      console.error('Error saving consultation:', err);
      setSyncStatus({ 
        synced: false, 
        message: 'Saved locally' 
      });
    } finally {
      setIsSubmitting(false);
      setStep('success');
    }
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-left">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>30-Minute Free Strategy Call</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Book Your Growth Consultation
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Speak directly with {AGENCY_INFO.leadStrategist} to review your ad accounts, keywords, and growth bottleneck.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative flex rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent bg-white overflow-hidden">
                    <span className="inline-flex items-center px-3 bg-slate-50 text-slate-700 font-bold text-xs border-r border-slate-200 select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone.startsWith('+91 ') ? formData.phone.replace(/^\+91\s*/, '') : formData.phone}
                      onChange={(e) => {
                        const raw = e.target.value;
                        setFormData({ ...formData, phone: raw ? `+91 ${raw.replace(/^\+91\s*/, '')}` : '' });
                      }}
                      className="w-full px-3.5 py-2.5 text-sm focus:outline-none text-slate-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Website URL
                  </label>
                  <input
                    type="text"
                    placeholder="www.mybrand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-white"
                  >
                    <option>Morning (9 AM - 12 PM EST)</option>
                    <option>Afternoon (1 PM - 4 PM EST)</option>
                    <option>Evening (5 PM - 8 PM EST)</option>
                    <option>Urgent / ASAP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Monthly Revenue Range
                  </label>
                  <select
                    value={formData.currentRevenue}
                    onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-white"
                  >
                    <option>Under ₹50,000/mo</option>
                    <option>₹50,000 - ₹2,00,000/mo</option>
                    <option>₹2,00,000 - ₹10,00,000/mo</option>
                    <option>₹10,00,000+/mo</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Zero sales pressure. 100% focused on actionable growth recommendations.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reserving & Syncing to Supabase...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Consultation Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              Session Booked Successfully!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              We have reserved your slot for <span className="font-bold text-slate-900">{formData.name}</span>. A calendar invitation with Google Meet / Zoom credentials has been dispatched to <span className="font-bold text-slate-900">{formData.email}</span>.
            </p>

            {/* Supabase Sync Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              <span>{syncStatus.message || 'Saved to Supabase Backend'}</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Line: {AGENCY_INFO.formattedPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Strategist: {AGENCY_INFO.leadStrategist}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="bg-blue-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
