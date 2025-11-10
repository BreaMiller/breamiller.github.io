import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  category: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 'ggs',
    title: 'Good Games',
    subtitle: 'Gaming platform redesign',
    image: 'https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Interface',
    category: '3D Render'
  },
  {
    id: 'buku-tv',
    title: 'Buku TV',
    subtitle: 'Entertainment streaming service',
    image: 'https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800',
    tag: 'Streaming',
    category: 'Interface'
  },
  {
    id: 'voya',
    title: 'Voya',
    subtitle: 'Astrocartography travel companion',
    image: 'https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Travel',
    category: 'Interface'
  },
  {
    id: 'ad-reels',
    title: 'Ad Reels',
    subtitle: 'AI-powered advertising',
    image: 'https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=800',
    tag: 'Video',
    category: 'Motion'
  },
  {
    id: 'imagine',
    title: 'Imagine...',
    subtitle: 'AI-driven creative exploration',
    image: 'https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Art',
    category: '3D Render'
  }
];

export const FeaturedWorksCarousel = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = carouselItems;

  const centerSlide = (index: number) => {
    if (!scrollerRef.current) return;
    const card = scrollerRef.current.querySelector(`[data-index="${index}"]`) as HTMLElement;
    if (card) {
      const x = card.offsetLeft - (scrollerRef.current.clientWidth - card.clientWidth) / 2;
      scrollerRef.current.scrollTo({ left: x, behavior: 'smooth' });
    }
  };

  const updateActiveCard = () => {
    if (!scrollerRef.current) return;
    let closest = { idx: 0, dist: Infinity };

    cards.forEach((_, idx) => {
      const card = scrollerRef.current!.querySelector(`[data-index="${idx}"]`) as HTMLElement;
      if (card) {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const viewportCenter = window.innerWidth / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < closest.dist) closest = { idx, dist };
      }
    });

    setActiveIndex(closest.idx);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.addEventListener('scroll', updateActiveCard);
    window.addEventListener('resize', updateActiveCard);

    const timer = setTimeout(() => {
      centerSlide(1);
      updateActiveCard();
    }, 100);

    return () => {
      scroller.removeEventListener('scroll', updateActiveCard);
      window.removeEventListener('resize', updateActiveCard);
      clearTimeout(timer);
    };
  }, []);

  const handlePrev = () => {
    centerSlide(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    centerSlide(Math.min(cards.length - 1, activeIndex + 1));
  };

  return (
    <section className="xl:pt-24 pt-32 pb-32 relative" data-section>
      <div className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="reveal mb-16">
          <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
              Featured Work Preview
            </h2>
            <p className="text-base md:text-lg text-white/70 mt-4">
              A curated collection of my best work across various industries and styles.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {cards.map((item, idx) => (
              <article
                key={item.id}
                data-index={idx}
                className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40 transition-all duration-400"
                style={{
                  transform: activeIndex === idx ? 'scale(1)' : 'scale(0.94)',
                  opacity: activeIndex === idx ? 1 : 0.55,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pink-400/20 ring-1 ring-pink-300/30">
                      ✨
                    </span>
                    {item.category} • {item.tag}
                  </div>
                  <div className="mt-2.5 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70">
                        {item.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate(`/projects/${item.id}`)}
                      className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Navigation Buttons */}
                {activeIndex === idx && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </>
                )}
              </article>
            ))}
          </div>

          {/* Left edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          {/* Right edge fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
