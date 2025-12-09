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
    category: 'web-apps',
    tags: ['React', 'TypeScript', 'Design'],
  },
  {
    id: 'baraka',
    title: 'Baraka',
    subtitle: 'maternity support network',
    image: 'https://i.imgur.com/2hBPNJ7.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Mobile', 'Community', 'Design'],
  },
  {
    id: 'voya',
    title: 'Voya',
    subtitle: 'astrocartography travel companion',
    image: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Travel', 'Innovation', 'Design'],
  },
  {
    id: 'imagine',
    title: 'Imagine...',
    subtitle: 'ai-driven creative exploration',
    image: 'https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'products',
    tags: ['AI', 'Art', 'Exploration'],
  },
  {
    id: 'buku-tv',
    title: 'Buku TV',
    subtitle: 'entertainment streaming service',
    image: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800',
    category: 'web-apps',
    tags: ['Streaming', 'Interface', 'Experience'],
  },
  {
    id: 'wellness-guide',
    title: 'Wellness Guide',
    subtitle: 'healing common ailments',
    image: 'https://i.imgur.com/EGUHIC7.png?auto=compress&cs=tinysrgb&w=400',
    category: 'written-works',
    tags: ['Health', 'Education', 'Design'],
  },
  {
    id: 'geneproof2.0',
    title: 'GeneProof 2.0',
    subtitle: 'health tracking upgrade',
    image: 'https://i.imgur.com/CpIXiZG.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Health Tech', 'React', 'ML'],
  },
  {
    id: 'altamed',
    title: 'AltaMed',
    subtitle: 'healthcare accessibility platform',
    image: 'https://i.imgur.com/PLb6nM4.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Healthcare', 'Platform', 'Design'],
  },
  {
    id: 'civic-social',
    title: 'CivicSocial',
    subtitle: 'network for democracy',
    image: 'https://i.imgur.com/XVs6KEM.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Civic Tech', 'Community', 'Design'],
  },
  {
    id: 'ad-reels',
    title: 'Ad Reels',
    subtitle: 'affordable AI advertising',
    image: 'https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=600',
    category: 'ai-tv-cinema',
    tags: ['AI', 'Video', 'Advertising'],
  },
  {
    id: 'xantara',
    title: 'Xantara',
    subtitle: 'sci-fi original series',
    image: 'https://i.imgur.com/WbYxDvA.png?auto=compress&cs=tinysrgb&w=600',
    category: 'ai-tv-cinema',
    tags: ['Sci-Fi', 'Visual', 'Narrative'],
  },
  {
    id: 'attraction',
    title: 'The Art of Attraction',
    subtitle: 'luxury couture collection',
    image: 'https://i.imgur.com/eXDo86B.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'products',
    tags: ['Fashion', 'AI', 'Design'],
  },
  {
    id: 'love-birds',
    title: 'Love Birds',
    subtitle: 'artistic expression of connection',
    image: 'https://i.imgur.com/e7kW4Jt.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'products',
    tags: ['Art', 'Digital', 'Design'],
  },
  {
    id: 'pneuma-collection',
    title: 'Pneuma Collection',
    subtitle: 'ready-to-wear collection',
    image: 'https://i.imgur.com/b2LNbXF.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'products',
    tags: ['Fashion', 'AI', 'Design'],
  },
  {
    id: 'biohaxx',
    title: 'BioHaxx',
    subtitle: 'sci-fi television series',
    image: 'https://i.imgur.com/FnN3fD0.gif?auto=compress&cs=tinysrgb&w=600',
    category: 'ai-tv-cinema',
    tags: ['Sci-Fi', 'Narrative', 'Visual'],
  },
  {
    id: 'solaria',
    title: 'Solaria Handbag',
    subtitle: 'ai-generated luxury accessory',
    image: 'https://i.imgur.com/WagmOW8.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'hidden',
    tags: ['Luxury', 'AI', 'Design'],
  },
  {
    id: 'opia',
    title: 'Opia',
    subtitle: 'digital art experience',
    image: 'https://i.imgur.com/IDkwGzA.png?auto=compress&cs=tinysrgb&w=600',
    category: 'hidden',
    tags: ['Art', 'Digital', 'Experience'],
  },
  {
    id: 'ethereal-stroll',
    title: 'Ethereal Stroll',
    subtitle: 'ambient soundscape composition',
    image: 'https://i.imgur.com/uwCTYkA.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'digital-art',
    tags: ['Audio', 'Composition', 'Experience'],
  },
  {
    id: 'who-we-are',
    title: 'Who We Are, Have Been, & Will Always Be',
    subtitle: 'Vitruivian Love',
    image: 'https://i.imgur.com/VwuVUu8.png?auto=compress&cs=tinysrgb&w=600',
    category: 'digital-art',
    tags: ['Art', 'AI', 'Abstract'],
  },
  {
    id: 'geneproof',
    title: 'GeneProof',
    subtitle: 'health tracking app',
    image: 'https://i.imgur.com/w8ct2WC.png?auto=compress&cs=tinysrgb&w=600',
    category: 'web-apps',
    tags: ['Health', 'Mobile', 'Design'],
  },
  {
    id: 'flix',
    title: 'LiteFlix',
    subtitle: 'lightweight streaming platform',
    image: 'https://i.imgur.com/vFVoyRr.png?auto=compress&cs=tinysrgb&w=600',
    category: 'products',
    tags: ['Streaming', 'UI/UX', 'Design'],
  },
];

const categories = [
  { id: 'all', label: 'All work' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'ai-tv-cinema', label: 'AI TV/Cinema' },
  { id: 'digital-art', label: 'Digital Art' },
  { id: 'products', label: 'Products' },
  { id: 'written-works', label: 'Written works' },
];

export const SelectedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayCount, setDisplayCount] = useState(6);

  const filtered = selectedProjects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const displayed = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

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
            Recent Projects
          </h2>
          <p className="text-lg text-white/70">
            A curated collection of my favorite work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.05 }}
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
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
                  <div className="relative overflow-hidden rounded-2xl h-48 sm:h-56 md:h-64 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      {...{ fetchpriority: "low" } as any}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-white/70 mb-1 uppercase tracking-wide">{project.category}</p>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-white/70 line-clamp-2">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 2).map((tag) => (
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
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center pt-8"
          >
            <button
              onClick={() => setDisplayCount(displayCount + 6)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)";
                el.style.borderColor = "rgba(236, 72, 153, 0.8)";
                el.style.color = "#ffffff";
                el.style.boxShadow = "0 0 30px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "transparent";
                el.style.borderColor = ".5px solid #ec4899";
                el.style.color = "#ec4899";
                el.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.15)";
              }}
              style={{
                background: "transparent",
                border: ".5px solid #ec4899",
                borderRadius: "20px",
                padding: "18px 18px",
                width: "220px",
                height: "60px",
                color: "#ec4899",
                fontSize: "clamp(11px, 2vw, 14px)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                maxWidth: "220px",
                transition: "all 0.3s ease",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Shine effect on hover */}
              <span style={{
                position: "relative",
                zIndex: 10,
              }}>
                Load More
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
