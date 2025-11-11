import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.2) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Animated circles */}
        <div className="relative w-24 h-24">
          {/* Outer rotating circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid transparent",
              borderTopColor: "#ec4899",
              borderRightColor: "rgba(236, 72, 153, 0.3)",
            }}
          />
          
          {/* Middle rotating circle - reverse direction */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full"
            style={{
              border: "2px solid transparent",
              borderBottomColor: "#6366f1",
              borderLeftColor: "rgba(99, 102, 241, 0.3)",
            }}
          />

          {/* Inner pulsing circle */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-6 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%)",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center"
        >
          <p className="text-white/70 text-sm font-medium tracking-wider">LOADING</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
