import { InfiniteSlider } from './InfiniteSlider';
import { motion } from 'framer-motion';

const aiTools = [
  { id: 1, name: 'Opus Clip', logo: 'https://asset.brandfetch.io/idMyFW0O1q/ide61u_rax.png' },
  { id: 2, name: 'Runway', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/runway-ai-icon.png' },
  { id: 3, name: 'Eleven Labs', logo: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg' },
  { id: 4, name: 'Descript', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5a397f4bb894c90c086a7587/0x0.png' },
  { id: 5, name: 'Adobe Firefly', logo: 'https://cdn-icons-png.flaticon.com/512/731/731970.png' },
  { id: 6, name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { id: 7, name: 'OpenArt', logo: 'https://techzehn.com/wp-content/uploads/2025/08/OpenArt-Logo.png' },
  { id: 8, name: 'Pixlr', logo: 'https://pixlr.com/blog/wp-content/uploads/2022/03/cropped-cropped-Black-icon.png' },
  { id: 9, name: 'Claude', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png' },
  { id: 10, name: 'Figma', logo: 'https://www.svgrepo.com/show/361494/figma-logo.svg' },
  { id: 11, name: 'Notion', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXGj03FU3Mr3pdHmax0CGOKkXBkJYv2d3iQ&s' },
];

export const AIToolsSection = () => {
  return (
    <motion.section
      className="w-full py-12 sm:py-16 md:py-20 pb-16 sm:pb-24 md:pb-32"
      style={{
        background: "transparent",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        style={{ 
          position: "relative", 
          display: "flex", 
          alignItems: "center", 
          gap: "clamp(12px, 3vw, 20px)",
        }}
        className="flex-col md:flex-row md:items-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* My Favorite AI Tools text - outside blur */}
        <div
          style={{
            minWidth: "fit-content",
            paddingLeft: "clamp(12px, 3vw, 20px)",
            zIndex: 5,
          }}
          className="text-center md:text-left"
        >
          <span
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              fontWeight: "600",
              background: "linear-gradient(135deg, #ec4899 0%, #ec4899 40%, #6366f1 75%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
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

        <div style={{ position: "relative", flex: 1, width: "100%" }}>
          <InfiniteSlider gap={20} duration={30} direction="horizontal" reverse={false}>
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className="flex-shrink-0 flex items-center justify-center px-6 sm:px-8 py-4 sm:py-6 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group"
                style={{
                  minWidth: '160px',
                  background: "transparent",
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
              width: "clamp(80px, 15vw, 180px)",
              height: "100%",
              background: "linear-gradient(to right, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
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
              width: "clamp(60px, 12vw, 120px)",
              height: "100%",
              background: "linear-gradient(to left, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 10,
              animation: "fadeBlur 0.3s ease-in-out",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mt-12 sm:mt-16 md:mt-20 flex justify-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.button
          onClick={() => window.open("https://breamiller.github.io/ai-directory/", "_blank")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "transparent",
            border: ".5px solid #ec4899",
            borderRadius: "20px",
            padding: "18px 18px",
            width: "clamp(180px, 50vw, 220px)",
            height: "clamp(50px, 10vw, 60px)",
            color: "#ec4899",
            fontSize: "clamp(11px, 2vw, 14px)",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            cursor: "pointer",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)";
            el.style.borderColor = "rgba(236, 72, 153, 0.8)";
            el.style.color = "#ffffff";
            el.style.boxShadow = "0 0 30px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.1)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "transparent";
            el.style.borderColor = ".5px solid #ec4899";
            el.style.color = "#ec4899";
            el.style.boxShadow = "0 0 15px rgba(236, 72, 853, 0.15)";
          }}
        >
          {/* Shine effect on hover */}
          <span style={{
            position: "relative",
            zIndex: 10,
          }}>
            Explore Directory
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
