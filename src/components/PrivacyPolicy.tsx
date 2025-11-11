import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the privacy notice
    const dismissed = localStorage.getItem('privacy-dismissed');
    if (!dismissed) {
      // Show after 3 seconds on initial visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('privacy-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={handleDismiss}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Privacy & Data</h2>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              This website respects your privacy. I do not collect, store, or process any personal information from visitors. No cookies, tracking pixels, or analytics are used to monitor your activity.
            </p>

            <p className="text-white/60 text-xs leading-relaxed mb-6">
              If you choose to contact me through the contact form, your message will be sent directly to me and not stored on this server.
            </p>

            <motion.button
              onClick={handleDismiss}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Got It
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
