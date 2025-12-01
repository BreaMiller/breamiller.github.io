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
import { AiOutlineEye } from 'react-icons/ai';
import { heroProducts } from './heroProductsData';
import { useRef, useState, useEffect } from 'react';

function App() {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [homePageViews, setHomePageViews] = useState(0);

  useEffect(() => {
    // Increment home page view count on mount
    const storageKey = 'pageViews_home';
    const currentViews = parseInt(localStorage.getItem(storageKey) || '0');
    const newViewCount = currentViews + 1;
    localStorage.setItem(storageKey, newViewCount.toString());
    setHomePageViews(newViewCount);
  }, []);

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

      {/* Page View Counter - Fixed position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          position: "fixed",
          bottom: "clamp(20px, 5vw, 40px)",
          right: "clamp(20px, 5vw, 40px)",
          zIndex: 100,
          background: "rgba(17, 17, 17, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(236, 72, 153, 0.3)",
          borderRadius: "50px",
          padding: "18px 24px",
          fontSize: "clamp(11px, 2vw, 13px)",
          fontWeight: "600",
          color: "#ec4899",
          textTransform: "uppercase",
          letterSpacing: "1px",
          boxShadow: "0 8px 25px rgba(236, 72, 853, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          maxWidth: "200px",
        }}
        whileHover={{ 
          y: -3,
          boxShadow: "0 12px 35px rgba(236, 72, 853, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        <AiOutlineEye size={16} style={{ marginRight: "8px" }} />
        Views: <span style={{ marginLeft: "4px", fontWeight: "700" }}>{homePageViews}</span>
      </motion.div>
    </div>
  );
}

export default App;
