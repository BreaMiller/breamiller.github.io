import { motion } from 'framer-motion';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'ggs',
    title: 'Good Games',
    description: 'Gaming platform redesign with incentivized community features',
    image: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=1200',
    category: '3D Render',
  },
  {
    id: 'buku-tv',
    title: 'Buku TV',
    description: 'Entertainment streaming service with premium experience',
    image: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800',
    category: 'Interface',
  },
  {
    id: 'voya',
    title: 'Voya',
    description: 'Astrocartography travel companion for cosmic journeys',
    image: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=1200',
    category: 'Travel',
  },
];

export const FeaturedProjects = () => {
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
            Featured Work
          </h2>
          <p className="text-lg text-white/70">
            A selection of my recent work and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-white/70 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
