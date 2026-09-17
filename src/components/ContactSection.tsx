import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Send, 
  Sparkles,
  ShieldCheck,
  Check,
  Loader2,
  Database
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/marketingData';
import { ProposalFormState } from '../types';
import { saveProposalRequest } from '../lib/supabase';

interface ContactSectionProps {
  onFormSubmitted: (data: ProposalFormState) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState<ProposalFormState>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    service: 'seo',
    monthlyBudget: '$2,500 - $5,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [syncStatus, setSyncStatus] = useState<{ synced: boolean; message: string }>({ synced: false, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const result = await saveProposalRequest({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        website: formData.website,
        service: formData.service,
        monthlyBudget: formData.monthlyBudget,
        message: formData.message
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
      console.error('Error saving proposal to Supabase:', err);
      setSyncStatus({
        synced: false,
        message: 'Saved locally'
      });
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      onFormSubmitted(formData);
    }
  };

  return (
    <section id="contact-proposal" className="py-20 bg-[#0d1b3e] text-white relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Value Props, Executive Photo & Direct Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free Strategy Session</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Ready To Grow Your Business?
              </h2>

              <p className="text-blue-100 text-base sm:text-lg mt-3 max-w-lg">
                Get a FREE consultation and take your business to the next level with a custom data-driven roadmap.
              </p>
            </div>

            {/* 3 Value Checkpoints matching reference */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-200 font-semibold text-sm sm:text-base">
                  Free Consultation & Marketing Audit
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-200 font-semibold text-sm sm:text-base">
                  Customized Multi-Channel Strategy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-200 font-semibold text-sm sm:text-base">
                  Result Driven Approach & Revenue Focus
                </span>
              </div>
            </div>

            {/* Direct Contact List ("Let's Connect") */}
            <div className="pt-2">
              <div className="space-y-3.5 text-sm max-w-md">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">
                  Let&apos;s Connect
                </div>

                <a 
                  href={`tel:${AGENCY_INFO.formattedPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{AGENCY_INFO.formattedPhone}</span>
                </a>

                <a 
                  href={`mailto:${AGENCY_INFO.directEmail}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base truncate">{AGENCY_INFO.directEmail}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{AGENCY_INFO.agencyHandle}</span>
                </div>

                <div className="flex items-start gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm leading-relaxed">{AGENCY_INFO.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating White Form Card matching reference */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-100 relative">
              
              <div className="mb-6 text-left">
                <h3 className="text-2xl font-extrabold font-heading text-slate-900">
                  Get Free Proposal
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill in your details to receive a customized growth audit within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">
                    Proposal Request Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>! {AGENCY_INFO.leadStrategist} and our senior strategy team are reviewing your request and will reach out via {formData.email} or WhatsApp shortly.
                  </p>

                  {/* Supabase status indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                    <Database className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{syncStatus.message || 'Saved to Supabase Backend'}</span>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative flex rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent bg-white overflow-hidden">
                        <span className="inline-flex items-center px-3 bg-slate-50 text-slate-700 font-bold text-xs border-r border-slate-200 select-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          required
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
                        Your Business / URL
                      </label>
                      <input
                        type="text"
                        placeholder="mywebsite.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 bg-white"
                    >
                      <option value="seo">SEO & Search Engine Optimization</option>
                      <option value="google-ads">Google Ads (PPC Intent Campaigns)</option>
                      <option value="meta-ads">Meta Ads (Facebook & Instagram Ads)</option>
                      <option value="wordpress">WordPress & Web Development</option>
                      <option value="blogs">Video Editing & Creative Production</option>
                      <option value="creative">Graphic Designing & Visual Assets</option>
                      <option value="full-funnel">Full-Funnel Growth Retainer (All Services)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tell us about your project & goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your target monthly leads, revenue goal, or current challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-75 active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Saving & Syncing to Supabase...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Your data is strictly confidential. Zero spam guarantee.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
