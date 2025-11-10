import { motion } from 'framer-motion';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Brief',
    description: 'We start with a detailed discussion about your vision, goals, and requirements to ensure perfect alignment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Design & Concept',
    description: 'I create initial concepts and designs for your review, refining based on your feedback.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Development & Implementation',
    description: 'Building out the full solution with attention to detail, performance, and user experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Refinement & Delivery',
    description: 'Final polish, testing, and delivery with comprehensive documentation and support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const FromConceptToReality = () => {
  return (
    <motion.section
      className="py-20 md:py-32 relative z-10"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            From Concept to Reality
          </h2>
          <p className="text-lg text-white/70">
            A proven process that delivers exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500/50 to-pink-500/0" />

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + (index * 0.05) }}
                viewport={{ once: false, amount: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Content - alternating sides */}
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(15, 15, 15, 0.8), rgba(25, 25, 35, 0.8))`,
                    }}
                    whileHover={{ 
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)"
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-pink-400 w-6 h-6 flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div 
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 relative z-20 flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                    
                    {/* Glow ring on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                      whileHover={{ 
                        boxShadow: "0 0 0px rgba(236, 72, 153, 0.5), inset 0 0 10px rgba(236, 72, 153, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Mobile counter */}
                <div className="md:hidden">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex-shrink-0 mb-4">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
