import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  Infinity as InfinityIcon, 
  Globe, 
  BookOpen, 
  PenTool, 
  Megaphone, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Video
} from 'lucide-react';
import { SERVICES_DATA } from '../data/marketingData';
import { ServiceItem } from '../types';
import { AiTechStackSection } from './AiTechStackSection';
import { VideoSamplesSection } from './VideoSamplesSection';
import { GraphicsSocialDesignsSection } from './GraphicsSocialDesignsSection';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenConsultation 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'paid', label: 'Paid Ads (PPC)' },
    { id: 'seo', label: 'SEO & Content' },
    { id: 'web', label: 'Web & WordPress' },
    { id: 'creative', label: 'Creative & Social' },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Search': return <Search className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Infinity': return <InfinityIcon className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Video': return <Video className={className} />;
      case 'PenTool': return <PenTool className={className} />;
      case 'Megaphone': return <Megaphone className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
           Complete Digital Marketing, Powered by AI & Built for Growth
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance growth channels combined to build predictable, scalable lead acquisition engines for your business.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-column / 2-column responsive Grid matching the reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              onClick={() => onSelectService(service)}
            >
              {/* Top ambient hover accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: service.accentColor }}
              ></div>

              <div>
                {/* Colorful circular icon container matching the reference style */}
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs overflow-hidden p-1.5`}>
                  {service.customIconUrl ? (
                    <img 
                      src={service.customIconUrl} 
                      alt={service.title}
                      className="w-full h-full object-contain drop-shadow-sm" 
                    />
                  ) : (
                    getServiceIcon(service.iconName, "w-7 h-7")
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2.5 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Link: "Learn More ->" */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                  Audit Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tech Stack Marquee Section (Directly below Services Cards & above Video Samples) */}
        <AiTechStackSection />

        {/* Video Samples Section */}
        <VideoSamplesSection />

        {/* Graphics & Social Designs Section (Directly below Video Samples) */}
        <GraphicsSocialDesignsSection />

        {/* Bottom Banner Call to Action */}
        <div className="mt-8 sm:mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-heading">
              Need a custom multi-channel strategy?
            </h4>
            <p className="text-blue-200 text-sm max-w-xl">
              We engineer custom marketing stacks combining Google Ads, SEO, and Meta Retargeting for maximum pipeline velocity.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Book 30-Min Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
