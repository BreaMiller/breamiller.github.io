import { motion } from 'framer-motion';

export const ReadyToStart = () => {
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
            <motion.a
              href="mailto:brea@example.com"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glare effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                style={{ width: '200%' }}
              />
              {/* Shadow on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: '0 0 0px rgba(236, 72, 153, 0)' }}
                whileHover={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)' }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: 'none' }}
              />
              <span className="relative z-10">Send Email</span>
              <span className="relative z-10">→</span>
            </motion.a>

            <motion.button
              className="px-6 py-3 bg-white/5 border border-white/20 text-white/80 font-medium rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-full border border-pink-400/50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Schedule Call</span>
              <span className="relative z-10">📅</span>
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
