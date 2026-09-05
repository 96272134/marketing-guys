import React from 'react';
import { Sparkles } from 'lucide-react';

interface AiToolItem {
  name: string;
  logo: string;
}

// All AI Tools list (including Adobe & Photoshop)
const ALL_AI_TOOLS: AiToolItem[] = [
  { name: "ChatGPT", logo: "/chatgpt.png" },
  { name: "Midjourney", logo: "/midjourney.png" },
  { name: "Runway", logo: "/runway.png" },
  { name: "ElevenLabs", logo: "/elevenlabs.png" },
  { name: "Google Gemini", logo: "/gemini.png" },
  { name: "Claude AI", logo: "/claude.png" },
  { name: "Canva", logo: "/canva.png" },
  { name: "Semrush", logo: "/semrush.png" },
  { name: "Notion AI", logo: "/notion.png" },
  { name: "CapCut", logo: "/capcut.png" },
  { name: "Adobe", logo: "/adobe.png" },
  { name: "Photoshop", logo: "/photoshop.png" }
];

export const AiTechStackSection: React.FC = () => {
  const toolsLooped = [...ALL_AI_TOOLS, ...ALL_AI_TOOLS];

  return (
    <section id="ai-tech-stack" className="py-10 sm:py-12 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden w-full">
      <style>{`
        @keyframes scrollAiLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .ai-marquee-single {
          display: flex;
          width: max-content;
          animation: scrollAiLeft 28s linear infinite;
          will-change: transform;
        }
        .ai-marquee-single:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>POWERED BY NEXT-GEN AI</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
          Tools & AI Workflows Powering Our Services
        </h3>
        <div className="w-14 h-1 bg-blue-600 mx-auto rounded-full mt-3 mb-3"></div>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We integrate enterprise-grade AI tools into our daily workflows to produce high-retention creatives, faster turnarounds, and measurable ROI.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />

        <div className="ai-marquee-single flex gap-6 sm:gap-8 items-center py-2">
          {toolsLooped.map((tool, idx) => (
            <div
              key={`tool-${tool.name}-${idx}`}
              className="shrink-0 flex items-center justify-center p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 select-none cursor-pointer"
              title={tool.name}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};