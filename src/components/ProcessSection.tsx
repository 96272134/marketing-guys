import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Edit3, 
  Rocket, 
  Settings2, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/marketingData';
import { ProcessStep } from '../types';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Search': return <Search className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Edit3': return <Edit3 className={className} />;
      case 'Rocket': return <Rocket className={className} />;
      case 'Settings2': return <Settings2 className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      default: return <Search className={className} />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-20 bg-white relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-0">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            METHODOLOGY & FRAMEWORK
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4 max-w-4xl mx-auto leading-tight">
            Our Proven 6-Step Performance Marketing & Lead Generation Framework
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            A battle-tested framework engineered to eliminate guesswork and scale predictable revenue for e-commerce brands and B2B companies month over month.
          </p>
        </div>

        {/* 6-Step Connected Dotted Line Stepper matching the reference */}
        <div className="relative mb-12">
          
          {/* Connecting Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-blue-200 z-0"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div 
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-200 p-3 rounded-2xl ${
                    isSelected ? 'bg-blue-50/80 ring-2 ring-blue-600/30' : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Circular Icon Container */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected 
                      ? 'bg-blue-600 text-white scale-110 shadow-blue-500/30' 
                      : 'bg-blue-600 text-white group-hover:bg-blue-700'
                  }`}>
                    {getStepIcon(step.icon, "w-6 h-6")}
                  </div>

                  {/* Step Number */}
                  <div className="text-xs font-extrabold text-slate-400 mt-3 font-mono">
                    {step.number}
                  </div>

                  {/* Step Title - Semantic H3 */}
                  <h3 className={`text-base font-bold font-heading mt-1 transition-colors ${
                    isSelected ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Brief summary from reference */}
                  <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Detailed Stage Inspector Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shadow-md">
                {activeStep.number}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Stage {activeStep.number}: {activeStep.title} — {activeStep.subtitle}
                </h4>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline: {activeStep.timeline}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shrink-0"
            >
              <span>Apply This Framework</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
            <div className="md:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Phase Objective
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="md:col-span-6 space-y-3 bg-white p-4 rounded-2xl border border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {activeStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stepper navigation bar */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 text-xs font-semibold text-slate-500">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
              className="px-4 py-2 rounded-lg hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              ← Previous Step
            </button>
            <div className="text-slate-400">
              Step {activeStepIndex + 1} of 6
            </div>
            <button
              disabled={activeStepIndex === PROCESS_STEPS.length - 1}
              onClick={() => setActiveStepIndex(Math.min(PROCESS_STEPS.length - 1, activeStepIndex + 1))}
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-blue-600 hover:bg-blue-50 disabled:opacity-40 transition-colors cursor-pointer"
            >
              Next Step →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
