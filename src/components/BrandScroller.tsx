"use client";

import { BsYoutube } from "react-icons/bs";
import { FaFlickr } from "react-icons/fa";
import { SiAdobe, SiGooglegemini, SiClaude, SiMake, SiN8N, SiRapid, SiElevenlabs } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";

const icons = [
  { Icon: SiAdobe, name: "Adobe" },
  { Icon: SiClaude, name: "Claude" },
  { Icon: FaFlickr, name: "Flickr" },
  { Icon: SiGooglegemini, name: "Gemini" },
  { Icon: VscGithubInverted, name: "GitHub" },
  { Icon: FiFigma, name: "Figma" },
  { Icon: BsYoutube, name: "YouTube" },
  { Icon: SiMake, name: "Make" },
  { Icon: SiRapid, name: "Rapid" },
  { Icon: SiElevenlabs, name: "ElevenLabs" },
  { Icon: SiN8N, name: "n8n" },
];

export const BrandScroller = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade overlays */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
        }}
      />

      {/* Scrolling content */}
      <motion.div
        className="flex gap-8 md:gap-12"
        animate={{ x: [-500, -2500] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array(2).fill(icons).flat().map((item, idx) => {
          const { Icon, name } = item;
          return (
            <div
              key={`${name}-${idx}`}
              className="flex items-center justify-center gap-2 flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: "#ec4899" }}
                transition={{ duration: 0.2 }}
                className="text-white/60 hover:text-pink-500 transition-colors duration-200"
              >
                <Icon size={32} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade overlays */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.15) 50%, transparent 100%)",
        }}
      />

      {/* Scrolling content - reverse direction */}
      <motion.div
        className="flex gap-8 md:gap-12"
        animate={{ x: [-2500, -500] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array(2).fill(icons).flat().map((item, idx) => {
          const { Icon, name } = item;
          return (
            <div
              key={`${name}-reverse-${idx}`}
              className="flex items-center justify-center gap-2 flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: "#ec4899" }}
                transition={{ duration: 0.2 }}
                className="text-white/60 hover:text-pink-500 transition-colors duration-200"
              >
                <Icon size={32} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const BrandScrollerContent = () => {
  return (
    <div className="w-full relative z-10">
      <BrandScroller />
      <BrandScrollerReverse />
    </div>
  );
};

export default BrandScrollerContent;