import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: 'Product Visualization',
    description: 'Photorealistic renders that showcase products in the best light',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H2.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and functional digital experiences',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128A2.25 2.25 0 002.25 18h15.75a2.25 2.25 0 002.25-2.25M15 12a3 3 0 11-6 0 3 3 0 016 0zm6-3.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Brand Development',
    description: 'Complete brand identity and visual systems',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.78.78 2.051.78 2.831 0l6.374-6.374c.78-.78.78-2.049 0-2.829L13.48 3.659A2.25 2.25 0 0011.889 3H9.568z" />
      </svg>
    ),
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive engagement and growth',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and applications',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Creative Consulting',
    description: 'Strategic guidance for your creative projects',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.892m-6 3.75c0 1.657.895 3.09 2.25 3.897m8.25-12a4.5 4.5 0 010 9H3.75A4.5 4.5 0 013 12c0-2.344 2.235-4.5 5-4.5h8.25z" />
      </svg>
    ),
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const WhatIOffer = () => {
  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "transparent",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-white/70">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 + (index * 0.05) }}
              viewport={{ once: false, amount: 0.5 }}
              className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))`,
              }}
            >
              <div className="text-white mb-4 w-8 h-8">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
