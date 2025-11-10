import { motion } from 'framer-motion';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Brief',
    description: 'We start with a detailed discussion about your vision, goals, and requirements to ensure perfect alignment.',
  },
  {
    number: 2,
    title: 'Design & Concept',
    description: 'I create initial concepts and designs for your review, refining based on your feedback.',
  },
  {
    number: 3,
    title: 'Development & Implementation',
    description: 'Building out the full solution with attention to detail, performance, and user experience.',
  },
  {
    number: 4,
    title: 'Refinement & Delivery',
    description: 'Final polish, testing, and delivery with comprehensive documentation and support.',
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
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Content - alternating sides */}
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 relative z-20 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Mobile counter */}
                <div className="md:hidden">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex-shrink-0 mb-4">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
