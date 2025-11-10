import { InfiniteSlider } from './InfiniteSlider';
import { useState } from 'react';
import { motion } from 'framer-motion';

const aiTools = [
  { id: 1, name: 'Opus Clip', logo: 'https://asset.brandfetch.io/idMyFW0O1q/ide61u_rax.png' },
  { id: 2, name: 'Runway', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/runway-ai-icon.png' },
  { id: 3, name: 'Google Gemini', logo: 'https://www.gstatic.com/images/branding/product/1x/gemini_512dp.png' },
  { id: 4, name: 'Eleven Labs', logo: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg' },
  { id: 5, name: 'Descript', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5a397f4bb894c90c086a7587/0x0.png' },
  { id: 6, name: 'Adobe Firefly', logo: 'https://cdn-icons-png.flaticon.com/512/731/731970.png' },
  { id: 7, name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { id: 8, name: 'OpenArt', logo: 'https://techzehn.com/wp-content/uploads/2025/08/OpenArt-Logo.png' },
  { id: 9, name: 'Pixlr', logo: 'https://pixlr.com/blog/wp-content/uploads/2022/03/cropped-cropped-Black-icon.png' },
  { id: 10, name: 'Midjourney', logo: 'https://1000logos.net/wp-content/uploads/2025/07/Midjourney-Logo.png' },
  { id: 11, name: 'Claude', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png' },
];

export const AIToolsSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.section
      className="w-full py-16 sm:py-20 md:py-32 pb-32 sm:pb-48 md:pb-72"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        style={{ position: "relative", display: "flex", alignItems: "center", gap: "20px" }}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* My Favorite AI Tools text - outside blur */}
        <div
          style={{
            minWidth: "fit-content",
            paddingLeft: "20px",
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontSize: "clamp(12px, 2vw, 16px)",
              fontWeight: "600",
              background: "linear-gradient(135deg, #ffffff 0%, #ec4899 50%, #6366f1 75%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "nowrap",
              opacity: 0.9,
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "block",
              lineHeight: "1.3",
            }}
          >
            My Favorite
            <br />
            AI Tools
          </span>
        </div>

        <div style={{ position: "relative", flex: 1 }}>
          <InfiniteSlider gap={20} duration={30} direction="horizontal" reverse={false}>
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className="flex-shrink-0 flex items-center justify-center px-6 sm:px-8 py-4 sm:py-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group"
                style={{
                  minWidth: '160px',
                  background: "linear-gradient(135deg, rgba(15, 15, 15, 0.8) 0%, rgba(30, 30, 30, 0.6) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <img 
                    src={tool.logo}
                    alt={tool.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 group-hover:scale-110 transition-transform duration-300 object-contain"
                    style={{
                      filter: 'brightness(0) invert(1)',
                    }}
                  />
                  <span className="text-white font-semibold text-center whitespace-nowrap text-xs sm:text-sm">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </InfiniteSlider>

          {/* Progressive blur overlays on sides - smoother fade */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "180px",
              height: "100%",
              background: "linear-gradient(to right, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0.95) 20%, rgba(10, 10, 10, 0.7) 50%, transparent 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              pointerEvents: "none",
              zIndex: 10,
              animation: "fadeBlur 0.3s ease-in-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "120px",
              height: "100%",
              background: "linear-gradient(to left, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0.95) 20%, rgba(10, 10, 10, 0.7) 50%, transparent 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              pointerEvents: "none",
              zIndex: 10,
              animation: "fadeBlur 0.3s ease-in-out",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="container max-w-7xl mx-auto px-3 sm:px-4 mt-16 sm:mt-20 flex justify-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <button
          disabled
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            background: isHovering 
              ? "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)"
              : "transparent",
            border: isHovering 
              ? "1px solid rgba(236, 72, 153, 0.8)"
              : ".5px solid #ec4899",
            borderRadius: "20px",
            padding: "38px 38px",
            width: "220px",
            height: "60px",
            color: isHovering ? "#ffffff" : "#ec4899",
            fontSize: "clamp(11px, 2vw, 14px)",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            cursor: "not-allowed",
            opacity: isHovering ? 1 : 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            maxWidth: "2200px",
            transition: "all 0.3s ease",
            boxShadow: isHovering 
              ? "0 0 30px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.1)"
              : "0 0 15px rgba(236, 72, 153, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shine effect on hover */}
          {isHovering && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                borderRadius: "20px",
                pointerEvents: "none",
              }}
            />
          )}
          Directory Coming Soon
        </button>
      </motion.div>
    </motion.section>
  );
};
