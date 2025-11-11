import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  const handleDismiss = () => {
    onClose();
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
              className="mt-4"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                padding: "18px 18px",
                borderRadius: "20px",
                width: "100%",
                height: "60px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 0 20px rgba(236, 72, 853, 0.2)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                animation: "outlineGlow 3s ease-in-out infinite",
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(236, 72, 853, 0.5)";
                e.currentTarget.style.background = "rgba(236, 72, 853, 0.05)";
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(236, 72, 853, 0.2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              GOT IT
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
                  border: "1px solid rgba(236, 72, 853, 0.4)",
                  pointerEvents: "none",
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
