import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'liteflix',
    title: 'LiteFlix',
    description: 'A lightweight streaming platform with curated content and personalized recommendations',
    image: 'https://i.imgur.com/vFVoyRr.png',
    category: 'Streaming',
  },
  {
    id: 'ggs',
    title: 'Good Games',
    description: 'Gaming platform redesign with incentivized community features',
    image: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=1200',
    category: '3D Render',
  },
  {
    id: 'geneproof2.0',
    title: 'GeneProof 2.0',
    description: 'Next-generation health tracking with AI-powered insights',
    image: 'https://i.imgur.com/UOf7fcX.png?auto=compress&cs=tinysrgb&w=1200',
    category: 'Health Tech',
  },
  {
    id: 'buku-tv',
    title: 'Buku TV',
    description: 'Entertainment streaming service with premium experience',
    image: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800',
    category: 'Interface',
  },
  {
    id: 'voya',
    title: 'Voya',
    description: 'Astrocartography travel companion for cosmic journeys',
    image: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=1200',
    category: 'Travel',
  },
];

export const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const handleProjectClick = () => {
    const projectId = featuredProjects[currentIndex].id;
    // Special handling for liteflix - navigate to /projects/flix
    if (projectId === 'liteflix') {
      navigate('/projects/flix');
    } else {
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "transparent",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-white/70">
            A selection of my recent work and collaborations
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Carousel Content */}
          <div className="relative overflow-hidden py-4">
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {/* Previous Slide Peek */}
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 0.4, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="hidden lg:block flex-shrink-0 w-80 h-[500px] cursor-pointer"
                onClick={prevSlide}
              >
                <div className="relative overflow-hidden rounded-2xl h-full group">
                  <img
                    src={featuredProjects[(currentIndex - 1 + featuredProjects.length) % featuredProjects.length].image}
                    alt="previous"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>

              {/* Current Slide - Main */}
              <motion.button
                key={`main-${currentIndex}`}
                onClick={handleProjectClick}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="group relative overflow-hidden rounded-2xl h-96 md:h-[625px] w-full md:max-w-2xl max-w-sm flex-shrink-0 cursor-pointer border-none background-none p-0"
                style={{ background: "none" }}
              >
                <img
                  src={featuredProjects[currentIndex].image}
                  alt={featuredProjects[currentIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white/70 mb-2">{featuredProjects[currentIndex].category}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{featuredProjects[currentIndex].title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{featuredProjects[currentIndex].description}</p>
                </div>
              </motion.button>

              {/* Next Slide Peek */}
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0, x: -100, scale: 0.95 }}
                animate={{ opacity: 0.4, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="hidden lg:block flex-shrink-0 w-80 h-[500px] cursor-pointer"
                onClick={nextSlide}
              >
                <div className="relative overflow-hidden rounded-2xl h-full group">
                  <img
                    src={featuredProjects[(currentIndex + 1) % featuredProjects.length].image}
                    alt="next"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30 pointer-events-none">
            <motion.button
              onClick={prevSlide}
              className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hidden md:flex items-center justify-center relative overflow-hidden group"
              aria-label="Previous slide"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Shine sweep effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)", x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: "200%", pointerEvents: "none" }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.15)",
                  background: "rgba(236, 72, 153, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: "1px" }}
                whileHover={{ borderColor: "rgba(236, 72, 153, 0.6)" }}
                transition={{ duration: 0.3 }}
                style={{ 
                  pointerEvents: "none",
                  border: "1px solid"
                }}
              />

              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hidden md:flex items-center justify-center relative overflow-hidden group"
              aria-label="Next slide"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Shine sweep effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)", x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: "200%", pointerEvents: "none" }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.15)",
                  background: "rgba(236, 72, 153, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: "1px" }}
                whileHover={{ borderColor: "rgba(236, 72, 153, 0.6)" }}
                transition={{ duration: 0.3 }}
                style={{ 
                  pointerEvents: "none",
                  border: "1px solid"
                }}
              />

              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div 
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {featuredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative rounded-full transition-all duration-300 overflow-hidden group"
              initial={{ width: 8, height: 8 }}
              animate={{ 
                width: currentIndex === index ? 32 : 8,
                height: 8,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Background bar */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: currentIndex === index ? '#ec4899' : 'rgba(255,255,255,0.2)',
                  transition: 'background-color 0.3s ease'
                }}
              />
              
              {/* Glow effect on active dot */}
              {currentIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0px rgba(236, 72, 153, 0)",
                      "0 0 15px rgba(236, 72, 153, 0.6)",
                      "0 0 0px rgba(236, 72, 153, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.8), inset 0 0 10px rgba(236, 72, 153, 0.2)",
                  background: currentIndex !== index ? "rgba(236, 72, 153, 0.3)" : undefined
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
