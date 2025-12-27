import { motion } from 'framer-motion';
import { HeroParallax } from './components/HeroParallax';
import { AIToolsSection } from './components/AIToolsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SelectedProjects } from './components/SelectedProjects';
import { WhatIOffer } from './components/WhatIOffer';
import { FromConceptToReality } from './components/FromConceptToReality';
import { ReadyToStart } from './components/ReadyToStart';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ContactForm } from './components/ContactForm';
import { heroProducts } from './heroProductsData';
import { useRef, useState, useEffect } from 'react';

function App() {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => {
      setIsContactOpen(true);
    };

    window.addEventListener('openContactForm', handleOpenContact);
    return () => window.removeEventListener('openContactForm', handleOpenContact);
  }, []);

  const handleWorkClick = () => {
    featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handlePrivacyClick = () => {
    setIsPrivacyOpen(true);
  };
  return (
    <div className="w-full relative" style={{
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      backgroundAttachment: "fixed",
      color: "#ffffff",
    }}>
      {/* Pink light glow background effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.08) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroParallax products={heroProducts} />
        <AIToolsSection />
        <div ref={featuredProjectsRef}>
          <FeaturedProjects />
        </div>
        <WhatIOffer />
        <SelectedProjects />
        <FromConceptToReality />
        <ReadyToStart onContactClick={handleContactClick} />
        <Footer onWorkClick={handleWorkClick} onContactClick={handleContactClick} onPrivacyClick={handlePrivacyClick} />
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
