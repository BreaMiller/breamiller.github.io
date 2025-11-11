import { motion } from 'framer-motion';

interface ReadyToStartProps {
  onContactClick: () => void;
}

export const ReadyToStart = ({ onContactClick }: ReadyToStartProps) => {
  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="border border-white/10 rounded-3xl p-8 md:p-12 text-center hover:border-white/20 transition-all duration-300"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))"
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Whether you have a detailed brief or just an idea, I'd love to hear from you. Let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button
              onClick={onContactClick}
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
                el.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.15)";
              }}
              style={{
                background: "transparent",
                border: ".5px solid #ec4899",
                borderRadius: "20px",
                padding: "38px 38px",
                width: "220px",
                height: "60px",
                color: "#ec4899",
                fontSize: "clamp(11px, 2vw, 14px)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                maxWidth: "220px",
                transition: "all 0.3s ease",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{
                position: "relative",
                zIndex: 10,
              }}>
                Send Email
              </span>
            </button>

            <button
              onClick={onContactClick}
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
                el.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.15)";
              }}
              style={{
                background: "transparent",
                border: ".5px solid #ec4899",
                borderRadius: "20px",
                padding: "38px 38px",
                width: "220px",
                height: "60px",
                color: "#ec4899",
                fontSize: "clamp(11px, 2vw, 14px)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                maxWidth: "220px",
                transition: "all 0.3s ease",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{
                position: "relative",
                zIndex: 10,
              }}>
                Schedule Call
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-4 justify-center pt-8 border-t border-white/10"
          >
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Dribbble
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
