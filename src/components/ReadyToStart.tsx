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
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center hover:border-white/20 transition-all duration-300"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Whether you have a detailed brief or just an idea, I'd love to hear from you. Let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.button
              onClick={onContactClick}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {/* Shine sweep effect left to right */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)", x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: "200%", pointerEvents: "none" }}
              />
              
              {/* Multi-layer shadow glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0), inset 0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.7), 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.1)",
                }}
                transition={{ duration: 0.4 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Expand animation on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                style={{ background: "rgba(236, 72, 153, 0.2)", pointerEvents: "none" }}
              />

              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {/* Animated shine sweep on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)", x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: "200%", pointerEvents: "none" }}
              />

              {/* Full gradient fill on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(99, 102, 241, 0.1))" }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Enhanced border glow */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                initial={{ borderColor: "rgba(255, 255, 255, 0.2)", boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  borderColor: "rgba(236, 72, 153, 0.6)",
                  boxShadow: "0 0 15px rgba(236, 72, 153, 0.4), inset 0 0 15px rgba(236, 72, 153, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none", border: "1px solid" }}
              />

              {/* Pulse expand effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.25, opacity: 0.05 }}
                transition={{ duration: 0.3 }}
                style={{ background: "rgba(236, 72, 153, 0.3)", pointerEvents: "none" }}
              />

              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Schedule Call
              </span>
            </motion.button>
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
