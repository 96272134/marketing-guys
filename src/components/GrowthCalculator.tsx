import React, { useState } from 'react';
import { Sparkles, Users, Target, ArrowRight, IndianRupee } from 'lucide-react';

interface GrowthCalculatorProps {
  onOpenConsultation: () => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onOpenConsultation }) => {
  const [budget, setBudget] = useState<number>(100000);
  const [industry, setIndustry] = useState<string>('ecommerce');

  // Multipliers based on industry (INR benchmarks)
  const getIndustryMultiplier = () => {
    switch (industry) {
      case 'ecommerce': return { cpl: 450, roas: 5.2, conversionRate: '3.8%' };
      case 'saas': return { cpl: 1200, roas: 4.4, conversionRate: '4.2%' };
      case 'local': return { cpl: 550, roas: 6.1, conversionRate: '6.5%' };
      case 'b2b': return { cpl: 1500, roas: 4.8, conversionRate: '3.4%' };
      default: return { cpl: 600, roas: 5.0, conversionRate: '4.0%' };
    }
  };

  const currentStats = getIndustryMultiplier();
  const estimatedLeads = Math.round(budget / currentStats.cpl);
  const estimatedRevenue = Math.round(budget * currentStats.roas);

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Growth Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Calculate Your Projected Marketing ROI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how much revenue and inbound lead pipeline our tailored digital marketing frameworks can unlock for your brand.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Industry Selector */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                1. Select Your Business Model
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'ecommerce', label: 'E-Commerce / D2C' },
                  { id: 'saas', label: 'B2B SaaS / Tech' },
                  { id: 'local', label: 'Healthcare & Local' },
                  { id: 'b2b', label: 'B2B Professional Services' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustry(item.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer border ${
                      industry === item.id 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-800">
                  2. Monthly Marketing Budget
                </label>
                <span className="text-lg font-extrabold text-blue-600 font-heading">
                  ₹{budget.toLocaleString('en-IN')}
                </span>
              </div>
              <input 
                type="range"
                min="25000"
                max="1000000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>₹25,000/mo</span>
                <span>₹1,00,000/mo</span>
                <span>₹10,00,000+/mo</span>
              </div>
            </div>

            {/* Strategy Recommendation Note */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-blue-600" />
                Recommended Channel Split:
              </div>
              <p>
                45% Google Ads Intent Search • 35% Meta Retargeting & Creatives • 20% Technical SEO & Content.
              </p>
            </div>

          </div>

          {/* Right: Projected Output Box (Deep Blue Gradient) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-blue-900/50">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Projected 90-Day Outcomes
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                {currentStats.roas}x Target ROAS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-xs text-slate-400 flex items-center gap-1 mb-1">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  Est. Inbound Leads
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  ~{estimatedLeads.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-semibold">
                  Avg CPA: ₹{currentStats.cpl}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-xs text-slate-400 flex items-center gap-1 mb-1">
                  <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
                  Est. Pipeline Value
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-semibold">
                  Conv. Rate: {currentStats.conversionRate}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              *Projections are modeled on 380+ verified historical campaigns across comparable industry benchmarks. Actual results depend on sales velocity and target margins.
            </p>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer active:scale-98"
            >
              <span>Claim Your Custom Forecast Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
