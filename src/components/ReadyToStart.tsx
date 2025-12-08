import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ReadyToStartProps {
  onContactClick?: () => void;
}

export const ReadyToStart = ({ onContactClick }: ReadyToStartProps) => {
  const navigate = useNavigate();
  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "transparent",
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            {["Send Email", "Schedule Call"].map((btn) => (
              <motion.button
                key={btn}
                onClick={() => {
                  if (btn === "Schedule Call") {
                    window.open("https://calendly.com/brea_miller/30-min-demo", "_blank");
                  } else {
                    onContactClick?.();
                  }
                }}
                whileHover={{ 
                  y: -2, 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(236, 72, 853, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: btn === "Send Email" ? "transparent" : "transparent",
                  border: btn === "Send Email" ? "none" : ".5px solid #ec4899",
                  padding: "18px 18px",
                  borderRadius: "20px",
                  width: "140px",
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
                  boxShadow: "0 0 20px rgba(236, 72, 853, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  animation: btn === "Send Email" ? "outlineGlow 3s ease-in-out infinite" : "none",
                }}
              >
                {btn}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-4 justify-center pt-8 border-t border-white/10"
          >
            <motion.a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
              className="text-sm text-white/60 transition-colors"
              whileHover={{ color: "#ec4899" }}
            >
              About Me
            </motion.a>
            <motion.a
              href="https://www.flickr.com/photos/as-seen-by-brea/with/4800552773"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors"
              whileHover={{ color: "#ec4899" }}
            >
              Flickr
            </motion.a>
            <motion.a
              href="https://github.com/astral-aesthetic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors"
              whileHover={{ color: "#ec4899" }}
            >
              Github
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
