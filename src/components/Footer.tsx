import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Phone, 
  Mail, 
  Globe, 
  MessageCircle, 
  ArrowUp, 
  Send, 
  Check, 
  Sparkles,
  ExternalLink,
  Shield,
  Lock,
  UserCheck,
  MapPin
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/marketingData';
import { BrandLogo } from './BrandLogo';
import { isSlotClaimed } from '../lib/adminAuth';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation, 
  onOpenWhatsApp,
  onSelectService,
  onOpenAdmin
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showWhatsAppPreview, setShowWhatsAppPreview] = useState(false);
  const [slotLocked, setSlotLocked] = useState(false);

  useEffect(() => {
    setSlotLocked(isSlotClaimed());
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080f24] text-slate-300 pt-16 pb-12 border-t border-blue-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Bio & Social Icons */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div 
              onClick={scrollToTop} 
              className="flex items-center cursor-pointer group select-none transition-transform hover:scale-[1.02] bg-transparent"
            >
              <BrandLogo size="md" inverted={true} showText={true} />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              We are a result-driven digital marketing agency helping ambitious businesses, eCommerce brands, and B2B enterprises scale revenue predictably online.
            </p>

            {/* Social Icons row with real handles */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { 
                  name: 'Facebook', 
                  url: AGENCY_INFO.socials.facebook,
                  id: 'footer-facebook-link',
                  icon: (
                    <img 
                      src="/facebook-logo.svg" 
                      alt="Facebook" 
                      className="w-full h-full object-cover rounded-md" 
                      referrerPolicy="no-referrer"
                    />
                  )
                },
                { 
                  name: 'Instagram (@marketingguysagencynoida)', 
                  url: AGENCY_INFO.socials.instagram,
                  id: 'footer-instagram-link',
                  icon: (
                    <img 
                      src="/instagram-logo.svg" 
                      alt="Instagram" 
                      className="w-full h-full object-cover rounded-md" 
                      referrerPolicy="no-referrer"
                    />
                  )
                },
                { 
                  name: 'LinkedIn (Marketing Guys)', 
                  url: AGENCY_INFO.socials.linkedin,
                  id: 'footer-linkedin-link',
                  icon: (
                    <img 
                      src="/linkedin-logo.svg" 
                      alt="LinkedIn" 
                      className="w-full h-full object-cover rounded-md" 
                      referrerPolicy="no-referrer"
                    />
                  )
                },
                { 
                  name: 'YouTube (@marketingguys90)', 
                  url: AGENCY_INFO.socials.youtube,
                  id: 'footer-youtube-link',
                  icon: (
                    <img 
                      src="/youtube-logo.svg" 
                      alt="YouTube" 
                      className="w-full h-full object-cover rounded-md" 
                      referrerPolicy="no-referrer"
                    />
                  )
                },
              ].map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:ring-2 hover:ring-blue-400 text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer hover:scale-110 active:scale-95 overflow-hidden"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Mini Form */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-200 mb-2">
                Subscribe to Weekly Growth Hacks:
              </div>
              {subscribed ? (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/50">
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2 rounded-lg flex-1 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-slate-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculator')} className="text-slate-400 hover:text-white transition-colors">
                  ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-proposal')} className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              {onOpenAdmin && (
                <li>
                  <button 
                    onClick={onOpenAdmin} 
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{slotLocked ? 'Admin Login' : 'Admin Sign-Up (Claim Slot)'}</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <button 
                    onClick={() => onSelectService(srv.id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us matching reference */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${AGENCY_INFO.formattedPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{AGENCY_INFO.formattedPhone}</span>
              </a>

              <a 
                href={`mailto:${AGENCY_INFO.directEmail}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate text-xs sm:text-sm">{AGENCY_INFO.directEmail}</span>
              </a>

              <a 
                href={AGENCY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group cursor-pointer"
                title={`Follow us on Instagram @${AGENCY_INFO.agencyHandle}`}
              >
                <Globe className="w-4 h-4 text-blue-400 group-hover:text-pink-400 transition-colors shrink-0" />
                <span className="group-hover:underline">@{AGENCY_INFO.agencyHandle}</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">{AGENCY_INFO.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-md"
              >
                Request Custom Strategy Call
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Admin Portal & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Marketing Guys. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {onOpenAdmin && (
              <>
                <button 
                  onClick={onOpenAdmin}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700"
                >
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{slotLocked ? 'Admin Portal Login' : 'Admin Setup & Login'}</span>
                </button>
                <span>•</span>
              </>
            )}
            <button onClick={onOpenConsultation} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenConsultation} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className="hover:text-blue-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Widget in Bottom Right matching reference */}
      <div className="fixed bottom-6 right-6 z-40">
        
        {/* Quick Message Bubble Preview */}
        {showWhatsAppPreview && (
          <div className="absolute bottom-16 right-0 w-72 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200 mb-2 animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                  MG
                </div>
                <div>
                  <div className="text-xs font-bold">{AGENCY_INFO.name}</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Online • Typically replies in 2 mins</div>
                </div>
              </div>
              <button 
                onClick={() => setShowWhatsAppPreview(false)}
                className="text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              &ldquo;Hey there! Looking to scale your leads or audit your current Google/Meta Ads? Chat with me directly on WhatsApp.&rdquo;
            </p>
            <button
              onClick={onOpenWhatsApp}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
            >
              <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Start Chat on WhatsApp</span>
            </button>
          </div>
        )}

        {/* WhatsApp Floating Circle Button with Pulse */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => {
            if (showWhatsAppPreview) {
              onOpenWhatsApp();
            } else {
              setShowWhatsAppPreview(true);
            }
          }}
          onMouseEnter={() => setShowWhatsAppPreview(true)}
          className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>

    </footer>
  );
};
