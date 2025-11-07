import { Link } from 'react-router-dom';

export const ProjectsSection = () => {
  const projects = [
    { id: 'ggs', label: 'GAME DEV PLATFORM', title: 'Good Games', img: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=1200', size: 'medium' },
    { id: 'geneproof2', label: 'HEALTH TRACKING APP', title: 'GeneProof 2.0', img: 'https://i.imgur.com/UOf7fcX.png?auto=compress&cs=tinysrgb&w=400', size: 'small', popOff: true },
    { id: 'altamed', label: 'HEALTHCARE DIRECTORY', title: 'AltaMed', img: 'https://i.imgur.com/PLb6nM4.png?auto=compress&cs=tinysrgb&w=400', size: 'small' },
    { id: 'civic-social', label: 'NETWORK FOR DEMOCRACY', title: 'Civic Social', img: 'https://i.imgur.com/zOAd5qr.png?auto=compress&cs=tinysrgb&w=400', size: 'small' },
    { id: 'baraka', label: 'MATERNITY SOCIAL NETWORK', title: 'Baraka', img: 'https://i.imgur.com/2hBPNJ7.png?auto=compress&cs=tinysrgb&w=400', size: 'small' },
    { id: 'geneproof', label: 'HEALTH TRACKING APP', title: 'GeneProof', img: 'https://i.imgur.com/o91Hbp9.gif?auto=compress&cs=tinysrgb&w=400', size: 'small', popOff: true },
    { id: 'buku-tv', label: 'WHERE TO WATCH', title: 'Buku TV™️', img: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800', size: 'medium' },
    { id: 'voya', label: 'TRAVEL COMPANION', title: 'Voya', img: 'https://i.imgur.com/0pYWUlj.gif?auto=compress&cs=tinysrgb&w=1200', size: 'medium' },
    { id: 'ad-reels', label: 'AI ADS', title: 'Ad Reels', img: 'https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=800', size: 'large', isVideo: true },
    { id: 'coming-soon', label: 'ABSTRACT AI ART', title: 'Coming Soon', img: '', size: 'small', isPlaceholder: true },
    { id: 'imagine', label: 'PASSION PROJECT', title: 'Imagine...', img: 'https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=600', size: 'small' },
    { id: 'attraction', label: 'AI COUTURE', title: 'The Art of Attraction', img: 'https://i.imgur.com/eXDo86B.jpeg?auto=compress&cs=tinysrgb&w=400', size: 'small' },
    { id: 'wellness-guide', label: 'LIFESTYLE BOOK', title: 'Wellness Guide', img: 'https://i.imgur.com/EGUHIC7.png?auto=compress&cs=tinysrgb&w=400', size: 'small', popOff: true },
    { id: 'flix', label: 'Product Design', title: 'LiteFlix', img: 'https://i.imgur.com/U51sKZH.png?auto=compress&cs=tinysrgb&w=600', size: 'small', popOff: true },
    { id: 'xantara', label: 'AUTHORED WORK', title: 'Xantara', img: 'https://i.imgur.com/WbYxDvA.png?auto=compress&cs=tinysrgb&w=400', size: 'small' },
    { id: 'love-birds', label: 'AI DECOR', title: 'Love Birds', img: 'https://i.imgur.com/e7kW4Jt.jpeg?w=600', size: 'small' },
    { id: 'pneuma-collection', label: 'AI READY-TO-WEAR', title: 'Pneuma Collection', img: 'https://i.imgur.com/CEqlRoO.png?auto=compress&cs=tinysrgb&w=400', size: 'small', popOff: true },
    { id: 'biohaxx', label: 'AI TV SERIES', title: 'BioHaxx', img: 'https://i.imgur.com/k8p4JMP.gif?auto=compress&cs=tinysrgb&w=1200', size: 'medium' },
    { id: 'opia', label: 'AI DIGITAL ART', title: 'Opia', img: 'https://i.imgur.com/IDkwGzA.png?auto=compress&cs=tinysrgb&w=600', size: 'medium', popOff: true },
    { id: 'solaria', label: 'AI FASHION', title: 'Solaria Handbag', img: 'https://i.imgur.com/zLtU5VE.png?auto=compress&cs=tinysrgb&w=600', size: 'medium', popOff: true },
    { id: 'ethereal-stroll', label: 'MEDITATION MUSIC', title: 'Ethereal Stroll', img: 'https://i.imgur.com/uwCTYkA.jpeg?auto=compress&cs=tinysrgb&w=1200', size: 'large', isVideo: true },
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2';
      case 'medium':
        return 'col-span-1';
      case 'small':
      default:
        return 'col-span-1';
    }
  };

  const getHeightClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-56 sm:h-72 md:h-96';
      case 'medium':
        return 'h-48 sm:h-64 md:h-80';
      case 'small':
      default:
        return 'h-44 sm:h-56 md:h-64';
    }
  };

  return (
    <section className="work section-spacing py-20" style={{ 
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      backgroundAttachment: "fixed",
    }}>
      <div className="container max-w-7xl mx-auto px-3 md:px-4">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project) => {
            const cardStyle = {
              overflow: project.popOff ? 'visible' : 'hidden',
              borderRadius: "20px",
              perspective: "1200px",
            };

            return (
              <div
                key={project.id}
                className={`${getGridClass(project.size)} group cursor-pointer`}
                style={cardStyle}
              >
                <Link to={`/projects/${project.id}`} className="block w-full h-full">
                  <div 
                    className={`${getHeightClass(project.size)} relative transition-all duration-300`}
                    style={{ 
                      borderRadius: "20px", 
                      overflow: project.popOff ? 'visible' : 'hidden',
                      transformStyle: project.popOff ? 'preserve-3d' : 'flat',
                    }}
                  >
                    <div 
                      className="absolute inset-0 flex flex-col justify-between p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }}
                    >
                      <div>
                        <div 
                          className="text-xs font-semibold tracking-tight mb-1"
                          style={{
                            background: "linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {project.label}
                        </div>
                        <h3 className="text-base md:text-2xl font-bold text-white mt-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    {project.isPlaceholder ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" style={{ borderRadius: "20px" }} />
                    ) : (
                      <>
                        {project.isVideo ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <div className="text-white text-4xl">▶</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <img
                              src={project.img}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ 
                                borderRadius: project.popOff ? "0px" : "20px",
                                width: project.popOff ? "120%" : "100%",
                                height: project.popOff ? "120%" : "100%",
                                left: project.popOff ? "-10%" : "0",
                                top: project.popOff ? "-10%" : "0",
                              }}
                            />
                            {/* Dark backdrop blur on hover */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm"
                              style={{
                                background: "rgba(0, 0, 0, 0.3)",
                                borderRadius: "20px",
                              }}
                            />
                            {/* Glare effect on hover */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, transparent 50%)",
                                borderRadius: "20px",
                              }}
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
