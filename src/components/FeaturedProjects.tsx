import { motion } from 'framer-motion';
import { useState } from 'react';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const featuredProjects: FeaturedProject[] = [
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
        <div className="relative w-full">
          {/* Left Progressive Blur Overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.3) 70%, transparent 100%)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Right Progressive Blur Overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(10,10,10,1) 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.3) 70%, transparent 100%)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Carousel Content */}
          <div className="relative overflow-hidden py-4">
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {/* Previous Slide Peek */}
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.4, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block flex-shrink-0 w-80 h-[500px] cursor-pointer"
                onClick={prevSlide}
              >
                <div className="relative overflow-hidden rounded-2xl h-full group">
                  <img
                    src={featuredProjects[(currentIndex - 1 + featuredProjects.length) % featuredProjects.length].image}
                    alt="previous"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>

              {/* Current Slide - Main */}
              <motion.a
                key={`main-${currentIndex}`}
                href={`/projects/${featuredProjects[currentIndex].id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl h-96 md:h-[625px] w-full max-w-2xl flex-shrink-0 cursor-pointer"
              >
                <img
                  src={featuredProjects[currentIndex].image}
                  alt={featuredProjects[currentIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white/70 mb-2">{featuredProjects[currentIndex].category}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{featuredProjects[currentIndex].title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{featuredProjects[currentIndex].description}</p>
                </div>
              </motion.a>

              {/* Next Slide Peek */}
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.4, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block flex-shrink-0 w-80 h-[500px] cursor-pointer"
                onClick={nextSlide}
              >
                <div className="relative overflow-hidden rounded-2xl h-full group">
                  <img
                    src={featuredProjects[(currentIndex + 1) % featuredProjects.length].image}
                    alt="next"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10 pointer-events-none">
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
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative h-2 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === index ? 32 : 8,
                backgroundColor: currentIndex === index ? '#ec4899' : 'rgba(255,255,255,0.2)',
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
