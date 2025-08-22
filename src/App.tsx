import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingSection from './components/LandingSection';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HealthTipsSection from './components/HealthTipsSection';
import DiagnosisSection from './components/DiagnosisSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');

  const handleLandingTransition = () => {
    setCurrentSection('hero');
  };

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'why-choose-us', 'health-tips', 'diagnosis', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (currentSection !== section && currentSection !== 'landing') {
              setCurrentSection(section);
            }
            break;
          }
        }
      }
    };

    if (currentSection !== 'landing') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentSection === 'landing' ? (
          <LandingSection key="landing" onTransition={handleLandingTransition} />
        ) : (
          <div key="main-content">
            <div id="hero">
              <HeroSection onNavigate={handleNavigation} />
            </div>
            <div id="why-choose-us">
              <WhyChooseUsSection />
            </div>
            <div id="health-tips">
              <HealthTipsSection />
            </div>
            <div id="diagnosis">
              <DiagnosisSection />
            </div>
            <div id="testimonials">
              <TestimonialsSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;