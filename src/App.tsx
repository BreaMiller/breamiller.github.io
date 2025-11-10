import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroParallax } from './components/HeroParallax';
import { AIToolsSection } from './components/AIToolsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SelectedProjects } from './components/SelectedProjects';
import { WhatIOffer } from './components/WhatIOffer';
import { FromConceptToReality } from './components/FromConceptToReality';
import { ReadyToStart } from './components/ReadyToStart';
import { ContactForm } from './components/ContactForm';
import { heroProducts } from './heroProductsData';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        <FeaturedProjects />
        <AIToolsSection />
        <SelectedProjects />
        <WhatIOffer />
        <FromConceptToReality />
        <ReadyToStart />
      </div>

      {/* Contact Button - Fixed position */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsContactOpen(true)}
        style={{
          position: "fixed",
          bottom: "clamp(20px, 5vw, 40px)",
          right: "clamp(20px, 5vw, 40px)",
          zIndex: 100,
          background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
          border: "none",
          borderRadius: "20px",
          padding: "18px 18px",
          width: "140px",
          height: "60px",
          color: "#ffffff",
          fontSize: "clamp(11px, 2vw, 14px)",
          fontWeight: "700",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "1px",
          boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)",
          transition: "all 0.3s ease",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          maxWidth: "400px",
        }}
      >
        Contact Brea
        {/* Glare effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
            borderRadius: "50px",
            pointerEvents: "none",
          }}
        />
      </motion.button>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
