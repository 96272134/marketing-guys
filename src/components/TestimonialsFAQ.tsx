import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, MessageSquare, Quote, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/marketingData';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              CLIENT TESTIMONIALS & CASE RESULTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Trusted by 500+ High-Growth E-Commerce & B2B Brands
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <div className="flex text-amber-400 gap-0.5 shrink-0">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200/60 whitespace-nowrap">
                      {test.result}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500/20 bg-white flex items-center justify-center shrink-0 shadow-xs">
                    <img 
                      src={test.avatar} 
                      alt={`${test.name} - Verified Client Review for Marketing Guys Agency`}
                      className={`w-full h-full ${test.avatar.includes('mytravel') || test.avatar.includes('travel') ? 'object-contain p-0.5 bg-white' : 'object-cover'}`}
                      onError={(e) => {
                        if (test.avatar.includes('mytravel')) {
                          (e.target as HTMLImageElement).src = '/mytravel.svg';
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-900 truncate" title={test.name}>
                      {test.name}
                    </div>
                    {(test.role || test.company) && (
                      <div className="text-xs text-slate-500 truncate" title={`${test.role || ''}${test.role && test.company ? ' • ' : ''}${test.company || ''}`}>
                        {test.role}{test.role && test.company ? ' • ' : ''}{test.company}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions About Our Digital Marketing Agency
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shrink-0 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
