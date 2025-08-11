import React from 'react';

// Mock icons matching your design aesthetic
const BsSpotify = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const BsYoutube = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const BsAmazon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.826.615-2.028 0-4.017-.302-5.967-.906-1.95-.604-3.708-1.423-5.273-2.458-.244-.16-.354-.314-.354-.465 0-.15.046-.284.138-.413l.795-1.187z"/>
    <path d="M18.078 16.12c-.507.24-1.04.45-1.606.63-.566.18-1.156.33-1.77.45-.614.12-1.235.21-1.863.27-.628.06-1.25.09-1.863.09-.684 0-1.358-.06-2.022-.18-.664-.12-1.31-.3-1.938-.54-.628-.24-1.225-.54-1.79-.9-.565-.36-1.078-.78-1.538-1.26.27-.27.585-.51.945-.72.36-.21.75-.39 1.17-.54.42-.15.855-.27 1.305-.36.45-.09.9-.135 1.35-.135.81 0 1.605.12 2.385.36.78.24 1.515.585 2.205 1.035.69.45 1.32 1.005 1.89 1.665.57.66 1.065 1.41 1.485 2.25z"/>
  </svg>
);

const BsGoogle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const BrandScroller = () => {
  return (
    <div className="w-full overflow-hidden brand-scroller-container py-6 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array(15).fill(0).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsSpotify size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Spotify</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsYoutube size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>YouTube</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsAmazon size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Amazon</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsGoogle size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Google</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const BrandScrollerReverse = () => {
  return (
    <div className="w-full overflow-hidden brand-scroller-container py-6 relative">
      <div className="flex whitespace-nowrap animate-marquee-reverse">
        {Array(15).fill(0).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsGoogle size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Google</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsAmazon size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Amazon</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsYoutube size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>YouTube</span>
            </div>
            <div className="flex items-center mx-12 flex-shrink-0">
              <BsSpotify size={20} style={{ color: '#888' }} />
              <span className="ml-4 text-sm font-semibold" style={{ color: '#888' }}>Spotify</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const BrandScrollerDemo = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-8 relative"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        color: '#ffffff'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.08) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)',
          zIndex: -1
        }}
      />
      
      <div className="text-center mb-12 relative z-10">
        <p 
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ 
            color: '#888',
            letterSpacing: '2px'
          }}
        >
          Tools Used in Portfolio
        </p>
      </div>
      
      <div className="w-full max-w-6xl space-y-1 relative z-10">
        <BrandScroller />
        <BrandScrollerReverse />
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }

        .brand-scroller-container {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
};

export default BrandScrollerDemo;