import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { AboutModal } from './components/AboutModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { SERVICES_DATA } from './data/marketingData';
import { ServiceItem, ProposalFormState } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationServiceTopic, setConsultationServiceTopic] = useState('Full-Funnel Growth Strategy');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleBookServiceFromModal = (serviceName: string) => {
    setConsultationServiceTopic(serviceName);
    setConsultationOpen(true);
  };

  const handleFormSubmitted = (data: ProposalFormState) => {
    showToast(`Thanks ${data.fullName}! Your customized growth proposal is on its way.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Toast notification banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-top-4 duration-200">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white text-xs ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* 1. Header Navigation (Admin link removed as requested) */}
      <Header 
        onOpenConsultation={() => {
          setConsultationServiceTopic('Full-Funnel Growth Strategy');
          setConsultationOpen(true);
        }}
        onSelectService={handleSelectServiceById}
      />

      {/* 2. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenConsultation={() => {
            setConsultationServiceTopic('General Growth Consultation');
            setConsultationOpen(true);
          }}
          onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
        />

        {/* Services Grid Section (8 Services matching reference) */}
        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={() => {
            setConsultationServiceTopic('Multi-Channel Strategy');
            setConsultationOpen(true);
          }}
        />

        {/* Why Choose Us & Deep Navy Stats Ribbon */}
        <WhyChooseUs 
          onOpenAboutModal={() => setAboutModalOpen(true)}
          onOpenConsultation={() => {
            setConsultationServiceTopic('Agency Partnership');
            setConsultationOpen(true);
          }}
        />

        {/* 6-Step Process Stepper */}
        <ProcessSection 
          onOpenConsultation={() => {
            setConsultationServiceTopic('6-Step Growth Framework');
            setConsultationOpen(true);
          }}
        />

        {/* Interactive ROI & Leads Calculator */}
        <GrowthCalculator 
          onOpenConsultation={() => {
            setConsultationServiceTopic('Custom ROI Forecast Strategy');
            setConsultationOpen(true);
          }}
        />

        {/* Testimonials & FAQs */}
        <TestimonialsFAQ />

        {/* Bottom Ready To Grow & Proposal Section */}
        <ContactSection 
          onFormSubmitted={handleFormSubmitted}
        />
      </main>

      {/* 3. Footer (Admin Sign-Up / Login Link is located here) */}
      <Footer 
        onOpenConsultation={() => {
          setConsultationServiceTopic('Footer Consultation Request');
          setConsultationOpen(true);
        }}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
        onSelectService={handleSelectServiceById}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* 4. Interactive Modals */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookServiceFromModal}
      />

      <ConsultationModal 
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={consultationServiceTopic}
      />

      <AboutModal 
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenConsultation={() => {
          setConsultationServiceTopic('Agency Partnership Inquiry');
          setConsultationOpen(true);
        }}
      />

      <WhatsAppModal 
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
      />

      {/* 5. Dedicated Single-Slot Admin Portal */}
      <AdminPortalModal 
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
}
