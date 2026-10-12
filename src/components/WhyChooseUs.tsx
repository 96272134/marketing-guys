import React from 'react';
import { 
  UserCheck, 
  Target, 
  FileSpreadsheet, 
  Headphones, 
  Users, 
  ClipboardCheck, 
  TrendingUp, 
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US, STATS_RIBBON } from '../data/marketingData';

interface WhyChooseUsProps {
  onOpenAboutModal: () => void;
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  onOpenAboutModal,
  onOpenConsultation: _onOpenConsultation
}) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-blue-600" />;
      case 'Target': return <Target className="w-8 h-8 text-purple-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-8 h-8 text-emerald-600" />;
      case 'Headphones': return <Headphones className="w-8 h-8 text-amber-600" />;
      default: return <ShieldCheck className="w-8 h-8 text-blue-600" />;
    }
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-8 h-8 text-blue-400" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-8 h-8 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-blue-400" />;
      case 'Award': return <Award className="w-8 h-8 text-blue-400" />;
      default: return <Award className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Layout matching the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Heading, Description & Button */}
          <div className="lg:col-span-5 space-y-6 text-center md:text-left px-2 sm:px-4 md:px-0">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600">
              TRUSTED PERFORMANCE GROWTH PARTNER
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              Why Partner With Our Performance Marketing Agency
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              We combine quantitative analytics, high-converting creative ad hooks, and full-funnel search marketing to engineer predictable, profitable customer acquisition. Every rupee invested is measured against pipeline velocity and revenue.
            </p>

            <div className="space-y-3 pt-2 text-left max-w-md mx-auto md:mx-0">
              <div className="flex items-start sm:items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                <span>Zero vanity metrics — 100% focused on B2B lead generation & ROAS</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                <span>No long-term locked contracts — month-to-month flexibility</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                <span>Direct Slack/WhatsApp access to Senior Google & Meta Certified Strategists</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <button 
                id="why-choose-know-more-btn"
                onClick={onOpenAboutModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>Know More About Our Agency</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  {getPillarIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Full-Width Stats Ribbon with Deep Navy Bar */}
        <div className="w-full max-w-6xl mx-auto bg-[#0d1b3e] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {STATS_RIBBON.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] sm:border-transparent sm:bg-transparent"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-900/50 border border-blue-700/50 flex items-center justify-center shrink-0 mb-3 shadow-inner">
                  {getStatIcon(stat.icon)}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-blue-200 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
