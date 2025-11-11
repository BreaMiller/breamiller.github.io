import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const slides = [...scroller.querySelectorAll('.about-content-item')] as HTMLElement[];
    const images = [...document.querySelectorAll('.about-image')] as HTMLElement[];

    let current = 0;

    // Set initial states
    images.forEach((img, i) => {
      img.classList.toggle('active', i === 0);
    });
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === 0);
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
          paddingTop: "clamp(24px, 5vw, 96px)",
          paddingBottom: "clamp(24px, 5vw, 48px)",
          marginTop: "clamp(24px, 5vw, 96px)",
        }}
        className="py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* LEFT: Stacked Images */}
            <div
              className="lg:col-span-5 relative overflow-hidden rounded-2xl"
              style={{ height: "600px" }}
            >
              <div className="about-image-container absolute inset-0">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c4619c1-2023-4aaf-bcf7-6e3d8c1e2500_1600w.png"
                  alt="Portfolio - Image 1"
                  className="about-image active aspect-square w-full h-full object-cover absolute inset-0"
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"
                  alt="Portfolio - Image 2"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg"
                  alt="Portfolio - Image 3"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                />
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp"
                  alt="Portfolio - Image 4"
                  className="about-image aspect-square w-full h-full object-cover absolute inset-0"
                />
              </div>
            </div>

            {/* RIGHT: Scrollable Content */}
            <div className="lg:col-span-7">
              <div
                ref={scrollerRef}
                id="aboutScroll"
                className="h-[600px] overflow-y-auto snap-y snap-mandatory pr-1"
              >
                {/* Slide 1: About Me */}
                <article className="about-content-item active snap-start min-h-[600px] flex items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                      <span className="text-xs text-white/70">About Me</span>
                    </div>
                    <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                      Creating visual stories through design
                    </h2>
                    <p className="text-base md:text-lg text-white/70 mt-6">
                      I'm Brea, a designer and developer with a passion for creating beautiful, functional experiences. With years of experience in digital design and web development, I bring technical expertise and creative vision to every project.
                    </p>
                    <p className="text-base md:text-lg text-white/70 mt-4">
                      From concept to execution, I deliver work that drives results and exceeds expectations.
                    </p>
                  </div>
                </article>

                {/* Slide 2: Product Design */}
                <article className="about-content-item snap-start min-h-[600px] flex items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                      <span className="text-xs text-white/70">Design Expertise</span>
                    </div>
                    <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
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
                    <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                      <span className="text-xs text-white/70">Development</span>
                    </div>
                    <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
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

                {/* Slide 4: Let's Connect */}
                <article className="about-content-item snap-start min-h-[600px] flex items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                      <span className="text-xs text-white/70">Let's Connect</span>
                    </div>
                    <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                      Ready to collaborate?
                    </h2>
                    <p className="text-base md:text-lg text-white/70 mt-6">
                      Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you.
                    </p>
                    <p className="text-base md:text-lg text-white/70 mt-4">
                      Let's create something extraordinary together.
                    </p>
                  </div>
                </article>
              </div>

              {/* Stats + CTA (stays under the scroller) */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-indigo-500/20 flex items-center justify-center border-gradient before:rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">5+ Years</h3>
                  </div>
                  <p className="text-sm text-white/60">
                    Professional experience in design and development
                  </p>
                </div>

                <div className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-indigo-500/20 flex items-center justify-center border-gradient before:rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-indigo-400">
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
                </div>
              </div>

              <div className="mt-8">
                <motion.button
                  className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get in touch</span>
                  <span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)" }}></span>
                </motion.button>
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
      `}</style>
    </div>
  );
};
