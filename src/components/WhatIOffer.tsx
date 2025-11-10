import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    title: 'Product Visualization',
    description: 'Photorealistic renders that showcase products in the best light',
    icon: '📦',
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and functional digital experiences',
    icon: '🎨',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Brand Development',
    description: 'Complete brand identity and visual systems',
    icon: '✨',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Motion Design',
    description: 'Dynamic animations and interactive experiences',
    icon: '🎬',
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and applications',
    icon: '💻',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Creative Consulting',
    description: 'Strategic guidance for your creative projects',
    icon: '🚀',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const WhatIOffer = () => {
  return (
    <section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-white/70">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))`,
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
