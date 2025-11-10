import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    { id: 'ggs', category: 'interface', title: 'Good Games', subtitle: 'GAME DEV PLATFORM', img: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=1200' },
    { id: 'geneproof2', category: 'interface', title: 'GeneProof 2.0', subtitle: 'HEALTH TRACKING APP', img: 'https://i.imgur.com/UOf7fcX.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'altamed', category: 'design', title: 'AltaMed', subtitle: 'HEALTHCARE DIRECTORY', img: 'https://i.imgur.com/PLb6nM4.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'civic-social', category: 'interface', title: 'Civic Social', subtitle: 'NETWORK FOR DEMOCRACY', img: 'https://i.imgur.com/zOAd5qr.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'baraka', category: 'design', title: 'Baraka', subtitle: 'MATERNITY SOCIAL NETWORK', img: 'https://i.imgur.com/2hBPNJ7.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'geneproof', category: 'interface', title: 'GeneProof', subtitle: 'HEALTH TRACKING APP', img: 'https://i.imgur.com/o91Hbp9.gif?auto=compress&cs=tinysrgb&w=400' },
    { id: 'buku-tv', category: 'motion', title: 'Buku TV™️', subtitle: 'WHERE TO WATCH', img: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800' },
    { id: 'voya', category: 'interface', title: 'Voya', subtitle: 'TRAVEL COMPANION', img: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=1200' },
    { id: 'ad-reels', category: 'motion', title: 'Ad Reels', subtitle: 'AI ADS', img: 'https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=800' },
    { id: 'who-we-are', category: 'art', title: 'Who We Are, Have Been, & Will Always Be', subtitle: 'ABSTRACT AI ART', img: 'https://i.imgur.com/VwuVUu8.png?auto=compress&cs=tinysrgb&w=600' },
    { id: 'imagine', category: 'art', title: 'Imagine...', subtitle: 'PASSION PROJECT', img: 'https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'attraction', category: 'art', title: 'The Art of Attraction', subtitle: 'AI COUTURE', img: 'https://i.imgur.com/eXDo86B.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'wellness-guide', category: 'design', title: 'Wellness Guide', subtitle: 'LIFESTYLE BOOK', img: 'https://i.imgur.com/EGUHIC7.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'flix', category: 'interface', title: 'LiteFlix', subtitle: 'PRODUCT DESIGN', img: 'https://i.imgur.com/U51sKZH.png?auto=compress&cs=tinysrgb&w=600' },
    { id: 'xantara', category: 'design', title: 'Xantara', subtitle: 'AUTHORED WORK', img: 'https://i.imgur.com/WbYxDvA.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'love-birds', category: 'art', title: 'Love Birds', subtitle: 'AI DECOR', img: 'https://i.imgur.com/e7kW4Jt.jpeg?w=600' },
    { id: 'pneuma-collection', category: 'art', title: 'Pneuma Collection', subtitle: 'AI READY-TO-WEAR', img: 'https://i.imgur.com/CEqlRoO.png?auto=compress&cs=tinysrgb&w=400' },
    { id: 'biohaxx', category: 'motion', title: 'BioHaxx', subtitle: 'AI TV SERIES', img: 'https://i.imgur.com/k8p4JMP.gif?auto=compress&cs=tinysrgb&w=1200' },
    { id: 'opia', category: 'art', title: 'Opia', subtitle: 'AI DIGITAL ART', img: 'https://i.imgur.com/IDkwGzA.png?auto=compress&cs=tinysrgb&w=600' },
    { id: 'solaria', category: 'design', title: 'Solaria Handbag', subtitle: 'AI FASHION', img: 'https://i.imgur.com/zLtU5VE.png?auto=compress&cs=tinysrgb&w=600' },
  ];

  const categories = ['all', 'interface', 'design', 'motion', 'art'];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-20 md:py-32" style={{ 
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      backgroundAttachment: "fixed",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Works
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my portfolio across different disciplines
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                filter === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'border border-gray-600 text-gray-300 hover:border-pink-500 hover:text-pink-500'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/projects/${item.id}`}
              className="group relative overflow-hidden rounded-xl bg-gray-900 h-64 md:h-80 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay - Dark */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-pink-400 text-sm font-semibold mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-pink-500/50 transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
