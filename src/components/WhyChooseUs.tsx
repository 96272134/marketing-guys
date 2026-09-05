import React, { useState } from 'react';
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
import { WHY_CHOOSE_US, STATS_RIBBON, AGENCY_INFO } from '../data/marketingData';

interface WhyChooseUsProps {
  onOpenAboutModal: () => void;
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  onOpenAboutModal,
  onOpenConsultation 
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
    <section id="why-choose-us" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Layout matching the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Heading, Description & Button */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600">
              WHY CHOOSE US
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              We Deliver Results That Drive Your Business Growth
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We use data, creativity and strategy to grow your brand and maximize your ROI. Every campaign is meticulously planned, monitored, and scaled with a scientific approach.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Zero vanity metrics — 100% focused on pipeline & revenue</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>No long-term locked contracts — month-to-month flexibility</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Direct access to Senior Strategists on dedicated Slack channels</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                id="why-choose-know-more-btn"
                onClick={onOpenAboutModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
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
        <div className="w-full bg-[#0d1b3e] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900/40 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blue-800/40">
            {STATS_RIBBON.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-900/50 border border-blue-700/50 flex items-center justify-center shrink-0">
                  {getStatIcon(stat.icon)}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-blue-200 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
