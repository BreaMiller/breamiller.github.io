import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SelectedProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  tags: string[];
}

const selectedProjects: SelectedProject[] = [
  {
    id: 'ggs',
    title: 'Good Games',
    subtitle: 'gaming platform redesign',
    image: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=600',
    category: 'product',
    tags: ['React', 'TypeScript', 'Design'],
  },
  {
    id: 'baraka',
    title: 'Baraka',
    subtitle: 'maternity support network',
    image: 'https://i.imgur.com/2hBPNJ7.png?auto=compress&cs=tinysrgb&w=600',
    category: 'environment',
    tags: ['Mobile', 'Community', 'Design'],
  },
  {
    id: 'voya',
    title: 'Voya',
    subtitle: 'astrocartography travel companion',
    image: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=600',
    category: 'character',
    tags: ['Travel', 'Innovation', 'Design'],
  },
  {
    id: 'imagine',
    title: 'Imagine...',
    subtitle: 'ai-driven creative exploration',
    image: 'https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'motion',
    tags: ['AI', 'Art', 'Exploration'],
  },
  {
    id: 'buku-tv',
    title: 'Buku TV',
    subtitle: 'entertainment streaming service',
    image: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800',
    category: 'product',
    tags: ['Streaming', 'Interface', 'Experience'],
  },
  {
    id: 'wellness-guide',
    title: 'Wellness Guide',
    subtitle: 'healing common ailments',
    image: 'https://i.imgur.com/EGUHIC7.png?auto=compress&cs=tinysrgb&w=400',
    category: 'environment',
    tags: ['Health', 'Education', 'Design'],
  },
];

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'product', label: 'Product' },
  { id: 'environment', label: 'Environment' },
  { id: 'character', label: 'Character' },
  { id: 'motion', label: 'Motion' },
];

export const SelectedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = selectedProjects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const displayed = showAll ? filtered : filtered.slice(0, 3);

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
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-white/70">
            A curated collection of my best work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 relative overflow-hidden group ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-pink-500/30 to-pink-600/30 border-pink-400/60 text-white'
                  : 'bg-white/5 border-white/10 text-white/60'
              }`}
              whileHover={activeFilter !== cat.id ? {
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(236,72,153,0.4)',
              } : {}}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect on hover */}
              {activeFilter !== cat.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '200%' }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/projects/${project.id}`} className="group">
                  <div className="relative overflow-hidden rounded-2xl h-64 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-white/70 mb-2 uppercase tracking-wide">{project.category}</p>
                      <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {!showAll && filtered.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/40 text-white font-semibold rounded-full inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine sweep effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)", x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: "200%", pointerEvents: "none" }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 15px rgba(236, 72, 153, 0.15)",
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              />

              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ borderColor: "rgba(236, 72, 153, 0.4)", borderWidth: "1px" }}
                whileHover={{ borderColor: "rgba(236, 72, 153, 0.8)" }}
                transition={{ duration: 0.3 }}
                style={{ 
                  pointerEvents: "none",
                  border: "1px solid"
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Load More Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
