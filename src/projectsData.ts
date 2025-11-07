export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  images: Array<{
    src: string;
    alt: string;
    size: 'large' | 'medium' | 'small';
  }>;
  overview: string;
  tools?: string[];
  role?: string;
  year?: string;
  url?: string;
}

export const projectsData: Record<string, ProjectData> = {
  "ggs": {
    id: "ggs",
    title: "Good Games",
    subtitle: "gaming platform redesign",
    tagline: "✐ᝰ incentivized community gaming",
    description: "A modern gaming platform that brings players together with seamless multiplayer experiences.",
    images: [
      {
        src: "https://i.imgur.com/6dIknE2.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Good Games Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/acLigpC.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Good Games Feature 1",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/rcRN4cn.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Good Games Feature 2",
        size: "medium",
      },
    ],
    overview: "Good Games is a comprehensive gaming platform redesign focused on improving community engagement and user experience. The project emphasizes seamless multiplayer integration and intuitive interface design.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    role: "Creator, Product Designer, & Frontend Developer",
    year: "2025",
  },
  "geneproof2.0": {
    id: "geneproof2.0",
    title: "GeneProof 2.0",
    subtitle: "genetic testing platform upgrade",
    tagline: "✐ᝰ precision health through innovation",
    description: "Next-generation genetic testing platform with advanced analytics and personalized health insights.",
    images: [
      {
        src: "https://i.imgur.com/UOf7fcX.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "GeneProof 2.0 Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Analytics Dashboard",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Health Insights",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Report Generation",
        size: "medium",
      },
    ],
    overview: "GeneProof 2.0 revolutionizes genetic testing with machine learning-powered insights and a user-centric interface. The platform helps users understand their genetic information and make informed health decisions.",
    tools: ["React", "Python", "Machine Learning", "Data Visualization"],
    role: "Creator, Product Designer, & Developer",
    year: "2024",
    url: "https://geneproof.com",
  },
  "altamed": {
    id: "altamed",
    title: "AltaMed",
    subtitle: "healthcare accessibility platform",
    tagline: "✐ᝰ healthcare for everyone",
    description: "Accessible healthcare platform connecting patients with quality medical practitioners.",
    images: [
      {
        src: "https://i.imgur.com/PLb6nM4.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "AltaMed Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/dUXp6Sr.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Patient Portal",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/bPvyeBH.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Appointment Booking",
        size: "medium",
      },
    ],
    overview: "AltaMed is a comprehensive healthcare accessibility platform designed to bridge gaps in medical services. Features include appointment booking, telemedicine consultations, and medical record management.",
    tools: ["React", "Node.js", "MongoDB", "WebRTC"],
    role: "Creator, Curator, & Fontend Developer",
    year: "2025",
  },
  "civic-social": {
    id: "civic-social",
    title: "Civic Social",
    subtitle: "community engagement platform",
    tagline: "✐ᝰ empowering civic participation",
    description: "Platform designed to increase civic engagement and community involvement.",
    images: [
      {
        src: "https://i.imgur.com/XVs6KEM.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Civic Social Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Community Board",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Event Calendar",
        size: "medium",
      },
    ],
    overview: "Civic Social empowers communities to take action on issues that matter to them. The platform facilitates discussions, event coordination, and collaborative problem-solving.",
    tools: ["React", "Firebase", "Social APIs", "Real-time Database"],
    role: "Product Designer",
    year: "2025",
  },
  "baraka": {
    id: "baraka",
    title: "Baraka",
    subtitle: "maternity social network",
    tagline: "✐ᝰ the village at your fingertips",
    description: "Innovative maternity social network connecting mothers for support and resources.",
    images: [
      {
        src: "https://i.imgur.com/uUXqZ3d.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Baraka Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/ap97XMr.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Wallet Dashboard",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/VIhvDBl.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Transaction History",
        size: "medium",
      },
    ],
    overview: "Baraka is a mobile-first prenatal and postnatal platform that bridges the gap between mothers and essential resources. It offers community support, expert advice, and access to local services.",
    tools: ["React", "Node.js", "Stripe API"],
    role: "Creator, Designer, Developer",
    year: "2024",
  },
  "buku-tv": {
    id: "buku-tv",
    title: "Buku TV",
    subtitle: "entertainment streaming service",
    tagline: "✐ᝰ entertainment reimagined",
    description: "Premium streaming platform featuring curated entertainment content.",
    images: [
      {
        src: "https://i.imgur.com/IBQRMJZ.gif?auto=compress&cs=tinysrgb&w=800",
        alt: "Buku TV Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Content Library",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Player Interface",
        size: "medium",
      },
    ],
    overview: "Buku TV delivers premium entertainment through an intuitive streaming interface. The platform uses AI recommendations and supports multiple devices for seamless viewing.",
    tools: ["React", "Video.js", "AWS", "Redis"],
    role: "Frontend Lead",
    year: "2023",
  },
  "voya": {
    id: "voya",
    title: "Voya",
    subtitle: "travel planning assistant",
    tagline: "✐ᝰ adventure starts here",
    description: "Comprehensive travel planning and booking platform.",
    images: [
      {
        src: "https://i.imgur.com/0pYWUlj.gif?auto=compress&cs=tinysrgb&w=1200",
        alt: "Voya Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Destination Explorer",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Itinerary Planner",
        size: "medium",
      },
    ],
    overview: "Voya is an all-in-one travel companion that helps users discover destinations, book flights and accommodations, and plan unforgettable trips with personalized recommendations.",
    tools: ["React Native", "GraphQL", "Google Maps API", "Stripe"],
    role: "Product Designer & Developer",
    year: "2023",
    url: "https://voya.travel",
  },
  "ad-reels": {
    id: "ad-reels",
    title: "Ad Reels",
    subtitle: "social media advertising platform",
    tagline: "✐ᝰ connect with your audience",
    description: "Modern advertising platform for creating and managing social media campaigns.",
    images: [
      {
        src: "https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=800",
        alt: "Ad Reels Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Campaign Builder",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Analytics Dashboard",
        size: "medium",
      },
    ],
    overview: "Ad Reels enables businesses to create, publish, and manage advertising campaigns across multiple platforms. Advanced analytics provide insights into campaign performance.",
    tools: ["Vue.js", "Python", "PostgreSQL", "Social APIs"],
    role: "Lead Designer",
    year: "2022",
  },
  "imagine": {
    id: "imagine",
    title: "Imagine...",
    subtitle: "ai-driven creative showcase",
    tagline: "✐ᝰ could be, passion projects that reform the way we interact with the digital world",
    description: "Creative project showcasing AI-driven visual storytelling and innovative design.",
    images: [
      {
        src: "https://i.imgur.com/hskv718.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Imagine Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "AI Creation 1",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "AI Creation 2",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "AI Creation 3",
        size: "medium",
      },
    ],
    overview: "Imagine explores the intersection of artificial intelligence and creative expression. All images were created using advanced AI technology to push the boundaries of digital art and visual storytelling.",
    tools: ["DALL-E", "Midjourney", "Figma", "After Effects"],
    role: "Creative Director",
    year: "2023",
    url: "https://imagine.breamiller.com",
  },
  "flix": {
    id: "flix",
    title: "LiteFlix",
    subtitle: "lightweight streaming platform",
    tagline: "✐ᝰ entertainment without boundaries",
    description: "Lightweight streaming service optimized for all devices and connections.",
    images: [
      {
        src: "https://i.imgur.com/U51sKZH.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "LiteFlix Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Browse Interface",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Watchlist",
        size: "medium",
      },
    ],
    overview: "LiteFlix delivers streaming content with a focus on performance and accessibility. The platform works seamlessly on low-bandwidth connections and supports offline viewing.",
    tools: ["React", "Service Workers", "FFmpeg", "CDN"],
    role: "Full Stack Developer",
    year: "2022",
    url: "https://liteflix.app",
  },
  "wellness-guide": {
    id: "wellness-guide",
    title: "Wellness Guide",
    subtitle: "personalized health & wellness app",
    tagline: "✐ᝰ your health, your way",
    description: "Comprehensive wellness platform for holistic health management.",
    images: [
      {
        src: "https://i.imgur.com/EGUHIC7.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Wellness Guide Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Daily Tracking",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Progress Analytics",
        size: "medium",
      },
    ],
    overview: "Wellness Guide helps users track fitness, nutrition, meditation, and sleep. The app provides personalized recommendations based on user data and health goals.",
    tools: ["React Native", "Firebase", "Health APIs", "ML"],
    role: "Product Designer",
    year: "2023",
    url: "https://wellnessguide.app",
  },
  "xantara": {
    id: "xantara",
    title: "Xantara",
    subtitle: "luxury lifestyle platform",
    tagline: "✐ᝰ elevated experiences",
    description: "Premium platform for curated luxury lifestyle experiences.",
    images: [
      {
        src: "https://i.imgur.com/WbYxDvA.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Xantara Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Experience Library",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Booking Interface",
        size: "medium",
      },
    ],
    overview: "Xantara curates exclusive luxury experiences for discerning customers. The platform connects users with high-end hotels, restaurants, and experiences around the world.",
    tools: ["React", "Luxury APIs", "Payment Systems", "CMS"],
    role: "Lead Designer",
    year: "2022",
  },
  "attraction": {
    id: "attraction",
    title: "The Art of Attraction",
    subtitle: "interactive design experience",
    tagline: "✐ᝰ beauty in interaction",
    description: "Interactive design project exploring attraction and visual storytelling.",
    images: [
      {
        src: "https://i.imgur.com/eXDo86B.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Attraction Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Interactive Element 1",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Interactive Element 2",
        size: "medium",
      },
    ],
    overview: "The Art of Attraction is an experimental web experience that explores how design principles influence user behavior and perception. Interactive elements guide users through a visual journey.",
    tools: ["Three.js", "Canvas API", "Framer Motion", "WebGL"],
    role: "Creative Technologist",
    year: "2023",
  },
  "love-birds": {
    id: "love-birds",
    title: "Love Birds",
    subtitle: "dating & connection platform",
    tagline: "✐ᝰ finding connections",
    description: "Modern dating platform focusing on meaningful connections.",
    images: [
      {
        src: "https://i.imgur.com/e7kW4Jt.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Love Birds Hero",
        size: "large",
      },
      {
        src: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Profile Discovery",
        size: "medium",
      },
      {
        src: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Chat Interface",
        size: "medium",
      },
    ],
    overview: "Love Birds reimagines online dating through enhanced matching algorithms and meaningful conversation starters. The platform prioritizes quality connections over quantity.",
    tools: ["React Native", "Node.js", "WebSocket", "ML Matching"],
    role: "Product Designer",
    year: "2022",
  },
  "pneuma-collection": {
    id: "pneuma-collection",
    title: "Pneuma Collection",
    subtitle: "ready-to-wear collection",
    tagline: "✐ᝰ tune into a higher frequency",
    description: "An Ai-generated all white collection featuring deep grooves.",
    images: [
      {
        src: "https://i.imgur.com/b2LNbXF.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Pneuma Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/Wxinljr.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Breathing Exercises",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/nQNqPDj.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Meditation Sessions",
        size: "medium",
      },
    ],
    overview: "Pneuma print on demand collection was created using AI tools to generate unique designs that embody tranquility and mindfulness. Each piece reflects the essence of breath and calm through its intricate patterns and textures.",
    tools: ["Midjourney", "Adobe Photoshop"],
    role: "Lead Designer & Developer",
    year: "2024",
  },
};
