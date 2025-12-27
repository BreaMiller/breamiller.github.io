import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SiLinkedin, SiFlickr, SiGithub } from 'react-icons/si';

interface FooterProps {
  onWorkClick?: () => void;
  onContactClick?: () => void;
  onPrivacyClick?: () => void;
}

export const Footer = ({ onWorkClick, onContactClick, onPrivacyClick }: FooterProps) => {
  const navigate = useNavigate();
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: SiLinkedin },
    { name: 'Flickr', url: 'https://www.flickr.com/photos/as-seen-by-brea/with/4800552773', icon: SiFlickr },
    { name: 'GitHub', url: 'https://github.com/astral-aesthetic', icon: SiGithub },
  ];

  const footerLinks = [
    { label: 'Work', href: '#work', onClick: onWorkClick },
    { label: 'About', href: '/about', onClick: () => navigate('/about') },
    { label: 'Contact', href: '#contact', onClick: onContactClick },
    { label: 'Privacy', href: '#privacy', onClick: onPrivacyClick },
  ];

  return (
    <motion.footer
      className="w-full border-t border-white/10"
      style={{
        background: "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(15, 15, 15, 0.9) 100%)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/');
                  }
                }}
                aria-label="Return to top of homepage"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "default",
                }}
              >
                <span style={{
                  background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Brea Miller
                </span>
              </button>
            </h3>
          </motion.div>

          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="md:text-left"
          >
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="text-white/60 hover:text-pink-400 transition-colors duration-300 text-sm block"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social section */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-left"
          >
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Brea Miller's ${social.name} profile`}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-pink-500/50 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
                      borderColor: "rgba(236, 72, 853, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-white/50 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Brea Miller. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Made with ❤️ <span style={{ 
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: "300",
              letterSpacing: "-0.5px",
            }}>XOXO</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
