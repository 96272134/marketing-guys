import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/marketingData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenConsultation: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="w-full flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
          
          {/* Logo with transparent 3D emblem */}
          <div 
            id="brand-logo"
            onClick={() => scrollToSection('hero')} 
            className="flex items-center cursor-pointer group select-none transition-transform hover:scale-[1.02] bg-transparent shrink-0 flex-shrink-0"
          >
            <BrandLogo size="md" showText={true} className="shrink-0 flex-shrink-0" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 whitespace-nowrap shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors relative py-1 whitespace-nowrap shrink-0"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative group shrink-0">
              <button 
                onClick={() => scrollToSection('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2 whitespace-nowrap shrink-0"
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Menu */}
              <div 
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
              >
                <div className="text-[11px] font-bold text-slate-400 uppercase px-3 py-1.5 tracking-wider">
                  Growth Solutions
                </div>
                {SERVICES_DATA.slice(0, 6).map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv.id);
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between transition-colors group/item"
                  >
                    <span>{srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-600 shrink-0" />
                  </button>
                ))}
                <div className="pt-2 mt-1 border-t border-slate-100">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="w-full text-center py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50/70 rounded-lg transition-colors whitespace-nowrap"
                  >
                    View All 8 Services →
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              ROI Calculator
            </button>
            <button 
              onClick={() => scrollToSection('contact-proposal')}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Header Badges: Direct Phone & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-5 shrink-0 flex-shrink-0 whitespace-nowrap">
            <a 
              href="tel:+919910536796"
              id="header-phone-link"
              className="flex items-center group shrink-0 whitespace-nowrap text-slate-800 hover:text-blue-600 transition-colors py-1 px-1.5 gap-2.5 cursor-pointer"
            >
              {/* Phone Icon */}
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <Phone className="w-4 h-4" />
              </div>

              {/* Number and Contact Us Label */}
              <div className="flex flex-col items-start text-left leading-none">
                <span className="text-xs font-bold text-slate-900 leading-tight whitespace-nowrap group-hover:text-blue-600 transition-colors">
                  +91 99105 36796
                </span>
                <span className="text-[10px] font-medium text-slate-500 leading-tight whitespace-nowrap group-hover:text-slate-700 transition-colors mt-0.5">
                  Contact Us
                </span>
              </div>
            </a>

            <button 
              id="header-cta-btn"
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 lg:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 shrink-0 flex-shrink-0 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-blue-600 bg-blue-50"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Our Services (8)
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ROI Growth Calculator
            </button>
            <button 
              onClick={() => scrollToSection('contact-proposal')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact & Proposal
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a 
              href="tel:+919910536796"
              className="flex items-center gap-3 px-3 py-2 bg-slate-50 hover:bg-blue-50 transition-colors rounded-xl cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+91 99105 36796</div>
                <div className="text-[11px] text-slate-500">Direct Line • Contact Us</div>
              </div>
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};