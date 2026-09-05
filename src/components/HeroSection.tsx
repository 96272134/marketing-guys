import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Target, 
  FileCheck2, 
  TrendingUp, 
  Headphones, 
  Search, 
  BarChart3, 
  Sparkles, 
  CheckCircle2,
  Layers,
  Award,
  Zap
} from 'lucide-react';
import { AGENCY_INFO } from '../data/marketingData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenConsultation, 
  onOpenWhatsApp 
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'revenue' | 'traffic'>('leads');
  const [chartBars, setChartBars] = useState([35, 48, 62, 55, 78, 88, 96]);

  // Dynamic bar animation when switching tabs
  useEffect(() => {
    if (activeTab === 'leads') {
      setChartBars([38, 52, 60, 72, 85, 94, 98]);
    } else if (activeTab === 'revenue') {
      setChartBars([25, 40, 58, 68, 75, 90, 100]);
    } else {
      setChartBars([45, 55, 65, 70, 82, 88, 95]);
    }
  }, [activeTab]);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      
      {/* Background subtle grid and dot accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-12 right-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow badge matching reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>RESULT DRIVEN DIGITAL MARKETING AGENCY</span>
            </div>

            {/* Main Headline with Highlighted text */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
              We Grow Your Business <br className="hidden sm:block" />
              With <span className="text-blue-600">Digital Marketing</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
               We help businesses increase visibility, generate quality leads and maximize ROI with AI-powered, result-driven digital marketing strategies.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                id="hero-get-consultation-btn"
                onClick={onOpenConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 flex items-center gap-3 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold text-base px-6 py-3.5 rounded-xl border border-slate-300 hover:border-emerald-400 shadow-sm transition-all duration-200 flex items-center gap-3 cursor-pointer group hover:-translate-y-0.5"
              >
                <img 
                  src="/whatsapp-logo.svg" 
                  alt="WhatsApp" 
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" 
                />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* 4 Trust Feature Checkpoints directly below CTAs */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                <Target className="w-4 h-4 text-blue-600 shrink-0" />
                <span>ROI Focused</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Result Oriented</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                <Headphones className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Dedicated Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Laptop Showcase with Floating Badges */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            
            {/* Dotted pattern decoration background */}
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-dot-pattern opacity-60 pointer-events-none"></div>

            {/* Floating Orbital 3D/Glass Badges */}
            
            {/* Badge 1: SEO Circle badge (Top Left) */}
            <div className="absolute -top-4 left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-sm">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div className="pr-2">
                <div className="text-xs font-bold text-slate-900">SEO Ranking</div>
                <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <span>#1 on Google</span>
                  <span className="text-[9px] bg-emerald-100 px-1 rounded font-bold">+280%</span>
                </div>
              </div>
            </div>

            {/* Badge 2: Google Ads (Top Center-Right) */}
            <div className="absolute -top-8 right-12 sm:right-24 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <div className="flex gap-0.5 items-center">
                  <span className="w-2 h-4 bg-amber-500 rounded-xs"></span>
                  <span className="w-2 h-3 bg-blue-600 rounded-xs"></span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-xs"></span>
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">Google Ads</div>
                <div className="text-[10px] text-slate-500 font-medium">5.8x Avg ROAS</div>
              </div>
            </div>

            {/* Badge 3: Meta Ads (Right side) */}
            <div className="absolute top-1/4 -right-2 sm:-right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-2.5 animate-float">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                <span className="text-base font-extrabold tracking-tighter">∞</ span>
              </div>
              <div className="text-left pr-1">
                <div className="text-xs font-bold text-slate-900">Meta Ads</div>
                <div className="text-[11px] font-semibold text-blue-600">High-Converting</div>
              </div>
            </div>

            {/* Badge 4: Megaphone / Qualified Leads (Bottom Right) */}
            <div className="absolute -bottom-6 right-2 sm:right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Zap className="w-6 h-6 fill-amber-300 text-amber-300" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Leads Inflow</div>
                <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <span>+1,420 Qualified</span>
                  <span className="text-[9px] text-slate-400">/mo</span>
                </div>
              </div>
            </div>

            {/* Badge 5: Analytics Mini Badge (Bottom Left) */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-800">ROI Growth</div>
                <div className="text-[10px] text-emerald-600 font-bold">▲ 340% Lift</div>
              </div>
            </div>

            {/* The Main Realistic Laptop Device Frame */}
            <div className="w-full max-w-[540px] relative z-10 pt-4 pb-2">
              
              {/* Laptop Screen Top Bezel */}
              <div className="bg-slate-900 rounded-t-2xl p-2.5 shadow-2xl border-4 border-slate-800 border-b-0">
                {/* Camera dot */}
                <div className="flex justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700 ring-1 ring-slate-600"></div>
                </div>

                {/* Screen Content: Live Interactive Marketing Analytics Dashboard */}
                <div className="bg-slate-900 rounded-lg p-4 sm:p-5 text-white border border-slate-800 space-y-4">
                  
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-bold tracking-widest text-slate-300 ml-2 uppercase font-heading">
                        DIGITAL MARKETING
                      </span>
                    </div>

                    {/* Interactive Tab Selectors */}
                    <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg text-[10px] font-medium">
                      <button 
                        onClick={() => setActiveTab('leads')}
                        className={`px-2 py-1 rounded transition-all ${
                          activeTab === 'leads' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Leads
                      </button>
                      <button 
                        onClick={() => setActiveTab('revenue')}
                        className={`px-2 py-1 rounded transition-all ${
                          activeTab === 'revenue' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Revenue
                      </button>
                      <button 
                        onClick={() => setActiveTab('traffic')}
                        className={`px-2 py-1 rounded transition-all ${
                          activeTab === 'traffic' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Traffic
                      </button>
                    </div>
                  </div>

                  {/* Summary Metric Counters */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-800/80 rounded-lg p-2 text-left">
                      <div className="text-[10px] text-slate-400">Total Inbound</div>
                      <div className="text-sm sm:text-base font-extrabold text-blue-400 font-heading">
                        {activeTab === 'leads' ? '12,480' : activeTab === 'revenue' ? '$348.5K' : '94,200'}
                      </div>
                    </div>
                    <div className="bg-slate-800/80 rounded-lg p-2 text-left">
                      <div className="text-[10px] text-slate-400">Avg. Conversion</div>
                      <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-heading">
                        {activeTab === 'leads' ? '4.8%' : activeTab === 'revenue' ? '5.6x' : '+18.4%'}
                      </div>
                    </div>
                    <div className="bg-slate-800/80 rounded-lg p-2 text-left">
                      <div className="text-[10px] text-slate-400">Target ROI</div>
                      <div className="text-sm sm:text-base font-extrabold text-amber-400 font-heading">
                        +320%
                      </div>
                    </div>
                  </div>

                  {/* Visual Growth Chart: Bar Chart with Trend Curve */}
                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="font-semibold text-slate-300">Campaign Growth Trend</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +88.4% this quarter
                      </span>
                    </div>

                    {/* Dynamic Graphic Bar Columns */}
                    <div className="h-28 flex items-end justify-between gap-2 pt-2 px-1">
                      {chartBars.map((height, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
                          <div className="text-[9px] font-bold text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}%
                          </div>
                          <div 
                            style={{ height: `${height}%` }}
                            className="w-full bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-t-md group-hover:from-blue-600 group-hover:to-cyan-300 transition-all duration-500 shadow-sm"
                          ></div>
                          <span className="text-[9px] text-slate-500 font-mono">
                            {['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'][idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Laptop Bottom Base & Keyboard Hinge */}
              <div className="h-4 bg-slate-300 rounded-b-xl border-t-2 border-slate-400 relative shadow-xl mx-auto w-[106%] -ml-[3%]">
                <div className="w-20 h-1.5 bg-slate-400 rounded-b-md mx-auto"></div>
              </div>
              <div className="h-1.5 bg-slate-400/80 rounded-b-2xl mx-auto w-[110%] -ml-[5%] shadow-2xl"></div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
