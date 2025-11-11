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
            {["Send Email", "Schedule Call"].map((btn) => (
              <motion.button
                key={btn}
                onClick={onContactClick}
                whileHover={{ 
                  y: -2, 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center"
              >
                <span>{btn}</span>
                <span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)" }}></span>
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
