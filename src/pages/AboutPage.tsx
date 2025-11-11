import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const slides = [...scroller.querySelectorAll('.about-content-item')] as HTMLElement[];
    const images = [...document.querySelectorAll('.about-image')] as HTMLElement[];
    const dots = [...document.querySelectorAll('.scroll-dot')] as HTMLElement[];

    let current = 0;

    // Set initial states
    images.forEach((img, i) => {
      img.classList.toggle('active', i === 0);
    });
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === 0);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === 0);
    });

    // IntersectionObserver for syncing
    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const idx = slides.indexOf(visible.target as HTMLElement);
      if (idx === -1 || idx === current) return;

      // Fade out old content
      slides[current].classList.remove('active');
      slides[idx].classList.add('active');

      // Update dots
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });

      // Transition images
      const outImg = images[current];
      const inImg = images[idx];

      outImg.classList.remove('active');
      outImg.style.transform = 'translateY(-24px)';
      outImg.style.opacity = '0';

      inImg.style.transform = 'translateY(24px)';
      inImg.style.opacity = '0';

      requestAnimationFrame(() => {
        inImg.classList.add('active');
        inImg.style.transform = 'translateY(0)';
        inImg.style.opacity = '1';
      });

      current = idx;
      setCurrentSlide(idx);
    }, {
      root: scroller,
      threshold: [0.4, 0.7],
    });

    slides.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "#ffffff",
        position: "relative",
      }}
    >
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

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          position: "fixed",
          top: "clamp(20px, 5vw, 40px)",
          left: "clamp(20px, 5vw, 40px)",
          zIndex: "1000",
        }}
      >
        <motion.button
          onClick={() => navigate("/")}
          style={{
            position: "relative",
            width: "clamp(40px, 10vw, 50px)",
            height: "clamp(40px, 10vw, 50px)",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "clamp(14px, 4vw, 18px)",
            color: "#ffffff",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
          onMouseEnter={(e: any) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.5)";
          }}
          onMouseLeave={(e: any) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
          whileHover={{
            scale: 1.1,
            y: -2,
          }}
        >
          ←
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "clamp(24px, 5vw, 48px)",
        }}
        className="py-0"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* LEFT: Stacked Images */}
            <div
              className="lg:col-span-5 relative overflow-hidden rounded-3xl"
              style={{ height: "600px" }}
            >
              <div className="about-image-container absolute inset-0">
                <img
                  src="https://i.imgur.com/zpEC4yH.png"
                  alt="Portfolio - Brea Miller"
                  className="about-image active aspect-square w-full h-full object-cover absolute inset-0"
                  loading="eager"
                  decoding="async"
                  style={{
                    borderRadius: "24px",
                  }}
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"
                  alt="Portfolio - Image 2"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg"
                  alt="Portfolio - Image 3"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp"
                  alt="Portfolio - Image 4"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a08e8be313?w=800&h=800&fit=crop"
                  alt="Photography - Image 5"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* RIGHT: Scrollable Content */}
            <div className="lg:col-span-7">
              <div className="flex gap-4">
                <div
                  ref={scrollerRef}
                  id="aboutScroll"
                  className="h-[600px] overflow-y-auto overflow-x-hidden snap-y snap-mandatory pr-3 flex-1 scroll-smooth"
                  style={{
                    scrollBehavior: 'smooth',
                  }}
                >
                  {/* Slide 1: Profile */}
                  <article className="about-content-item active snap-start min-h-[600px] flex items-center">
                    <div>
                      <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          border: "1px solid rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        <span className="text-xs text-pink-400">About Me</span>
                      </motion.div>
                      <h2 className="mt-5 text-3xl md:text-4xl text-white drop-shadow-xl font-semibold tracking-tight">
                        Hi! I'm Brea.
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-6">
                        A <strong>phinomath</strong> with a deep love for long distance travel, live music, and vegan food flavored to perfection.
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {["Autonomous", "Empathetic", "Communicative", "Meticulous", "Optimistic", "Reliable", "Self-Aware"].map(
                          (skill) => (
                            <motion.span 
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="text-xs text-pink-400 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
                              style={{
                                background: "rgba(236, 72, 153, 0.1)",
                                border: "1px solid rgba(236, 72, 153, 0.3)",
                              }}
                            >
                              {skill}
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>
                  </article>

                  {/* Slide 2: Product Design */}
                  <article className="about-content-item snap-start min-h-[600px] flex items-center">
                    <div>
                      <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          border: "1px solid rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        <span className="text-xs text-pink-400">Design Expertise</span>
                      </motion.div>
                      <h2 className="mt-5 text-3xl md:text-4xl text-white drop-shadow-xl font-semibold tracking-tight">
                        Bringing products to life
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-6">
                        Beautiful, user-centered design that elevates brands and drives engagement. Meticulous attention to detail, typography, color, and composition.
                      </p>
                      <p className="text-base md:text-lg text-white/70 mt-4">
                        Creative vision + technical mastery so your products look their best across all channels.
                      </p>
                    </div>
                  </article>

                  {/* Slide 3: Development */}
                  <article className="about-content-item snap-start min-h-[600px] flex items-center">
                    <div>
                      <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          border: "1px solid rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        <span className="text-xs text-pink-400">Development</span>
                      </motion.div>
                      <h2 className="mt-5 text-3xl md:text-4xl text-white drop-shadow-xl font-semibold tracking-tight">
                        Code that performs
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-6">
                        From React to TypeScript, modern web technologies for fast, responsive applications. Clean code, scalable architecture, production-ready assets.
                      </p>
                      <p className="text-base md:text-lg text-white/70 mt-4">
                        Vite, Tailwind, Framer Motion—building performant digital experiences.
                      </p>
                    </div>
                  </article>

                  {/* Slide 4: Photography */}
                  <article className="about-content-item snap-start min-h-[600px] flex items-center">
                    <div>
                      <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          border: "1px solid rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        <span className="text-xs text-pink-400">Photography</span>
                      </motion.div>
                      <h2 className="mt-5 text-3xl md:text-4xl text-white drop-shadow-xl font-semibold tracking-tight">
                        Through my lens
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-6">
                        Photography is my way of exploring the world. From candid moments to carefully composed landscapes, I capture experiences that tell stories and evoke emotion.
                      </p>
                      <p className="text-base md:text-lg text-white/70 mt-4">
                        Every frame is a dialogue between light, composition, and the beauty of the present moment.
                      </p>
                    </div>
                  </article>

                  {/* Slide 5: Let's Connect */}
                  <article className="about-content-item snap-start min-h-[600px] flex items-center">
                    <div>
                      <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          border: "1px solid rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        <span className="text-xs text-pink-400">Let's Connect</span>
                      </motion.div>
                      <h2 className="mt-5 text-3xl md:text-4xl text-white drop-shadow-xl font-semibold tracking-tight">
                        Ready to collaborate?
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-6">
                        Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you.
                      </p>
                      <p className="text-base md:text-lg text-white/70 mt-4">
                        Let's create something extraordinary together.
                      </p>
                      <motion.button
                        onClick={() => setIsContactOpen(true)}
                        className="mt-8"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#ffffff",
                          padding: "18px 18px",
                          borderRadius: "20px",
                          width: "140px",
                          height: "60px",
                          fontSize: "14px",
                          fontWeight: "700",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          whiteSpace: "nowrap",
                          animation: "outlineGlow 3s ease-in-out infinite",
                          maxWidth: "400px",
                          marginLeft: "20px",
                        }}
                        onMouseEnter={(e: any) => {
                          e.currentTarget.style.boxShadow = "0 0 40px rgba(236, 72, 153, 0.5)";
                          e.currentTarget.style.background = "rgba(236, 72, 153, 0.05)";
                        }}
                        onMouseLeave={(e: any) => {
                          e.currentTarget.style.boxShadow = "0 0 20px rgba(236, 72, 853, 0.2)";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        GET IN TOUCH
                        {/* Glare effect on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                            borderRadius: "20px",
                            pointerEvents: "none",
                          }}
                        />
                        {/* Border highlight on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "20px",
                            border: "1px solid rgba(236, 72, 153, 0.4)",
                            pointerEvents: "none",
                          }}
                        />
                      </motion.button>
                    </div>
                  </article>
                </div>

                {/* Scroll Dots Indicator */}
                <div className="flex flex-col gap-4 items-center justify-center h-[600px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (scrollerRef.current) {
                          const slides = scrollerRef.current.querySelectorAll('.about-content-item');
                          const targetSlide = slides[i] as HTMLElement;
                          targetSlide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      style={{
                        width: currentSlide === i ? "12px" : "8px",
                        height: currentSlide === i ? "12px" : "8px",
                        borderRadius: "50%",
                        background: currentSlide === i ? "#ec4899" : "rgba(236, 72, 153, 0.3)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Stats + CTA + Buttons (stays under the scroller) */}
              <div className="flex flex-col gap-6 mt-8">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
                    style={{
                      backgroundImage: "linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-violet-400">
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">5+ Years</h3>
                    </div>
                    <p className="text-sm text-white/60">
                      Professional experience in design and development
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
                    style={{
                      backgroundImage: "linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-cyan-400">
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                          <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                          <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                          <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">50+ Projects</h3>
                    </div>
                    <p className="text-sm text-white/60">
                      Happy clients and completed work
                    </p>
                  </motion.div>
                </div>

                {/* Skills and Military Service Buttons */}
                <div style={{ display: "flex", gap: "12px" }}>
                  {["Skills", "Military Service"].map((btn) => (
                    <motion.button
                      key={btn}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: btn === "Skills" ? "rgba(236, 72, 153, 0.1)" : "transparent",
                        border: btn === "Skills" ? "none" : ".5px solid #ec4899",
                        padding: "18px 18px",
                        borderRadius: "20px",
                        width: btn === "Skills" ? "140px" : "200px",
                        height: "60px",
                        fontSize: "14px",
                        fontWeight: "700",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        maxWidth: "400px",
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {btn}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                          borderRadius: "20px",
                          pointerEvents: "none",
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Styles for animations */}
      <style>{`
        .about-image {
          opacity: 0;
          transform: translateY(24px);
          transition: transform 600ms cubic-bezier(.2, .8, .2, 1), opacity 600ms ease;
          will-change: transform, opacity;
          border-radius: 24px;
        }

        .about-image.active {
          opacity: 1;
          transform: translateY(0);
          z-index: 1;
        }

        .about-content-item {
          opacity: 0.35;
          transform: translateY(8px);
          transition: opacity 280ms ease, transform 280ms ease;
        }

        .about-content-item.active {
          opacity: 1;
          transform: translateY(0);
        }

        .border-gradient {
          position: relative;
          border: 0.5px solid transparent;
          background-image: 
            linear-gradient(#0a0a0a, #0a0a0a),
            linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(99, 102, 241, 0.5));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1));
          pointer-events: none;
          border-radius: inherit;
        }

        /* Styled scrollbar */
        #aboutScroll::-webkit-scrollbar {
          width: 8px;
        }

        #aboutScroll::-webkit-scrollbar-track {
          background: rgba(15, 15, 15, 0.5);
          border-radius: 10px;
        }

        #aboutScroll::-webkit-scrollbar-thumb {
          background: rgba(236, 72, 153, 0.4);
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        #aboutScroll::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.6);
        }

        /* Firefox scrollbar */
        #aboutScroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(236, 72, 153, 0.4) rgba(15, 15, 15, 0.5);
        }
      `}</style>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};
