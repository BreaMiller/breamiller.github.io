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

  const displayed = showAll ? filtered : filtered.slice(0, 6);

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
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-white/10 border border-white/30 text-white'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
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

        {/* View Full Portfolio Button */}
        {!showAll && filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Portfolio
              <span>→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
