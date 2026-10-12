import React, { useState } from 'react';
import { Palette, X, ZoomIn } from 'lucide-react';

export interface GraphicDesignItem {
  id: string;
  title: string;
  badge: string;
  category: 'food' | 'ecommerce' | 'tech' | 'beauty' | 'luxury' | 'fashion' | 'auto';
  imageUrl: string;
}

export const GRAPHIC_DESIGNS: GraphicDesignItem[] = [
  {
    id: "design-burger",
    title: "Gourmet Flame-Grilled Burger",
    badge: "Restaurant & Delivery",
    category: "food",
    imageUrl: "/images/4b7a7598-d0e8-4ef9-bd28-5db4343cce9e.png"
  },
  {
    id: "design-car",
    title: "Premium Showroom Dealership",
    badge: "Automotive Showroom",
    category: "auto",
    imageUrl: "/images/1%20(1).png"
  },
  {
    id: "design-astrology",
    title: "Vedic Astrology Guidance",
    badge: "Consultation & Services",
    category: "tech",
    imageUrl: "/images/1%20(2).png"
  },
  {
    id: "design-cinematography",
    title: "Cinematography & Video Production",
    badge: "Creative Production",
    category: "tech",
    imageUrl: "/images/1%20(3).png"
  },
  {
    id: "design-jewelry",
    title: "Radiance Jewels Luxury Collection",
    badge: "Luxury & Jewelry",
    category: "luxury",
    imageUrl: "/images/1%20(4).png"
  },
  {
    id: "design-dining",
    title: "Authentic Fine Dining & Moments",
    badge: "Restaurant & Dine-In",
    category: "food",
    imageUrl: "/images/1%20(5).png"
  },
  {
    id: "design-fashion",
    title: "Festive Ethnic Coutures",
    badge: "Fashion & Apparel",
    category: "fashion",
    imageUrl: "/images/1%20(6).png"
  },
  {
    id: "design-kids",
    title: "Little Styles Kids Wear",
    badge: "Kids & Fashion",
    category: "fashion",
    imageUrl: "/images/1%20(7).png"
  },
  {
    id: "design-beauty",
    title: "Radiant Glow BB Cream",
    badge: "Beauty & Wellness",
    category: "beauty",
    imageUrl: "/images/1%20(8).png"
  },
  {
    id: "design-creative-extra",
    title: "Special Campaign Banner",
    badge: "Brand Identity",
    category: "ecommerce",
    imageUrl: "/images/9120eb5c-a796-48a6-8126-b7aca4b05790.png"
  }
];

export const GraphicsSocialDesignsSection: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<GraphicDesignItem | null>(null);
  const loopedDesigns = [...GRAPHIC_DESIGNS, ...GRAPHIC_DESIGNS];

  const renderCard = (item: GraphicDesignItem, keyPrefix: string, index: number) => (
    <div
      key={`${keyPrefix}-${item.id}-${index}`}
      onClick={() => setSelectedDesign(item)}
      className="w-[220px] sm:w-[250px] md:w-[270px] lg:w-[calc((min(100vw-4rem,1216px)-3*1.5rem)/4)] lg:max-w-[286px] shrink-0 aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card cursor-pointer relative select-none"
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover block transition-transform duration-500 group-hover/card:scale-105"
      />
      {/* Subtle overlay on hover with quick zoom icon */}
      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover/card:scale-100 transition-transform duration-300">
          <ZoomIn className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="graphics-designs" className="py-14 sm:py-16 bg-slate-50/60 relative border-t border-slate-100 overflow-hidden w-full">
      {/* Seamless Continuous Marquee Animation */}
      <style>{`
        @keyframes scrollGraphicsLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .graphics-marquee-track {
          display: flex;
          width: max-content;
          animation: scrollGraphicsLeft 36s linear infinite;
          will-change: transform;
        }
        .graphics-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>Creative & Social Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
           High-Converting Social Media Creatives & Brand Graphic Design
          </h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-converting social media creatives, promotional ad banners, and visual brand aesthetics engineered to maximize click-through rate (CTR) and turn viewers into loyal buyers.
          </p>
        </div>

        {/* Marquee Slider Container */}
        <div className="relative group w-full overflow-hidden select-none py-2">
          {/* Subtle edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="graphics-marquee-track flex gap-6">
            {loopedDesigns.map((item, idx) => renderCard(item, 'track', idx))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedDesign(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square w-full bg-slate-900 flex items-center justify-center">
              <img 
                src={selectedDesign.imageUrl} 
                alt={selectedDesign.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between bg-white border-t border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{selectedDesign.title}</h3>
                <p className="text-xs text-slate-500">{selectedDesign.badge}</p>
              </div>
              <button
                onClick={() => setSelectedDesign(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};