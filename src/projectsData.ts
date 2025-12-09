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
  visitUrl?: string;
  visitLabel?: string;
}

export const projectsData: Record<string, ProjectData> = {
  "ggs": {
    id: "ggs",
    title: "Good Games",
    subtitle: "gaming platform redesign",
    tagline: "✐ᝰ incentivized community gaming",
    description: "A modern gaming platform that incentivizes players to create AI-generated games.",
    images: [
      {
        src: "https://i.imgur.com/4pXoc8n.png?auto=compress&cs=tinysrgb&w=1200",
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
    overview: "Good Games is a comprehensive gaming platform redesign focused on improving community engagement and user experience. The project emphasizes seamless AI integration and intuitive interface design.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Unity"],
    role: "Creator, Product Designer, & Frontend Developer",
    year: "2025",
    visitUrl: "https://breamiller.github.io/gg",
    visitLabel: "Visit GGs",
  },
  "geneproof2.0": {
    id: "geneproof2.0",
    title: "GeneProof 2.0",
    subtitle: "health tracking app",
    tagline: "✐ᝰ The future of currency is in good health.",
    description: "Next-generation health tracking platform with advanced analytics and personalized health insights.",
    images: [
      {
        src: "https://i.imgur.com/eEjaDzu.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "GeneProof 2.0 Hero",
        size: "large",
      },

    ],
    overview: "GeneProof 2.0 revolutionizes health tracking with machine learning-powered insights and a user-centric interface. The platform helps users understand their health data and make informed decisions.",
    tools: ["React", "Python", "Machine Learning", "Data Visualization"],
    role: "Creator, Product Designer, & Developer",
    year: "2025",
    url: "https://breamiller.github.io/waitlist-geneproof/",
  },
  "altamed": {
    id: "altamed",
    title: "AltaMed",
    subtitle: "healthcare practitioner directory",
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
    visitUrl: "https://breamiller.github.io/altamed/",
    visitLabel: "Visit AltaMed",
  },
  "civic-social": {
    id: "civic-social",
    title: "CivicSocial",
    subtitle: "network for democracy",
    tagline: "✐ᝰ decentralized legislation",
    description: "A digital platform that empowers citizens to actively participate in shaping their own communities through voting and civic engagement.",
    images: [
      {
        src: "https://i.imgur.com/XVs6KEM.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "CivicSocial Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/27NdlKw.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Community Board",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/TXazNMh.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Voting Interface",
        size: "medium",
      },
    ],
    overview: "CivicSocial asks: What if American citizens could budget a portion of their own tax dollars to actively participate in shaping their communities? This platform facilitates direct democratic engagement by enabling community members to organize around issues, propose solutions, and vote on legislation that affects their neighborhoods. Through real-time communication, collaborative issue discussion, and transparent voting mechanisms, CivicSocial decentralizes civic participation and empowers citizens to become active agents of change in their communities.",
    tools: ["TypeScript", "Firebase", "APIs"],
    role: "Creator & Product Designer",
    year: "2025",
 },
  "geneproof": {
    id: "geneproof",
    title: "GeneProof",
    subtitle: "incentivized wellness app",
    tagline: "✐ᝰ The future of currency is in good health.",
    description: "After learning about the story of Henrietta Lacks and deep diving into the Human Genome Project in the the summer of 2024, I was determined to create an application that allows users to take ownership of their genetic code with the use of blockchain technology.",
    images: [
      {
        src: "https://i.imgur.com/3DnoTQb.gif?auto=compress&cs=tinysrgb&w=1200",
        alt: "GeneProof Demo",
        size: "large",
      },
    ],
    overview: "Use case for wellness application: Individuals can use an app to claim ownership of their DNA, receive recommendations and rewards based on their medical history, and match with distant DNA relatives. When the user uploads their medical records, they receive recommendations to manage future or existing medical conditions. Once a task is complete or a recipe is used, the user will be asked to rate each recommendation to keep track of its overall effectiveness. The deep learning technology will improve recommendations for each individual depending on their DNA, medical history, and environmental factors. Users are compensated for achieving medical milestones and for participating in biomedical research. In this case, the app must be able to authenticate ownership, conceal the identity of each individual, interpret medical records, match medical interpretations to pharmacogenetics and natural wellness recommendations, process payments, match DNA relatives, and communicate with biomedical researchers electronically.",
    tools: ["React", "Python", "Machine Learning", "Data Visualization"],
    role: "Creator, Product Designer, & Developer",
    year: "2024",
    url: "https://breamiller.github.io/app-geneproof/",
  },
  "baraka": {
    id: "baraka",
    title: "Baraka",
    subtitle: "maternity support network",
    tagline: "✐ᝰ the village at your fingertips",
    description: "A mobile-first prenatal and postnatal platform that connects expectant mothers with peers, doulas, and essential resources.",
    images: [
      {
        src: "https://i.imgur.com/uUXqZ3d.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Baraka Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/ap97XMr.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Community Dashboard",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/VIhvDBl.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Doula Matching",
        size: "medium",
      },
    ],
    overview: "Baraka answers a fundamental question: What if every expectant mother had a supportive community at her fingertips? This mobile-first platform bridges the gap between mothers and essential resources by enabling seamless connections with doulas, other expecting mothers, and local birthing facilities. Through intelligent matching algorithms, personalized messaging, local facility discovery, and curated self-care resources, Baraka recreates the traditional village support system for modern mothers. Users benefit from community wisdom, professional guidance, and meaningful peer connections during one of life's most transformative journeys.",
    tools: ["React Native", "Node.js", "Firebase", "Matching Algorithms", "Payment Processing"],
    role: "Creator, Designer, Developer",
    year: "2024",
  },
  "buku-tv": {
    id: "buku-tv",
    title: "Buku TV",
    subtitle: "entertainment streaming service",
    tagline: "✐ᝰ streaming without bounds",
    description: "Premium streaming platform featuring curated entertainment content.",
    images: [
      {
        src: "https://i.imgur.com/pYU042i.png?auto=compress&cs=tinysrgb&w=800",
        alt: "Buku TV Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/QvSSKd7.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Content Library",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/VJHlVX0.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Player Interface",
        size: "medium",
      },
    ],
    overview: "Buku TV delivers premium entertainment through an intuitive streaming interface. The platform uses AI recommendations and supports multiple devices for seamless viewing.",
    tools: ["React", "Video.js", "AWS", "Redis"],
    role: "Creator & Frontend Developer",
    year: "2025",
  },
  "voya": {
    id: "voya",
    title: "Voya",
    subtitle: "astrocartography travel companion",
    tagline: "✐ᝰ every trip aligns with the stars",
    description: "An innovative travel planning app that uses astrocartography to help you discover where in the world you truly belong.",
    images: [
      {
        src: "https://i.imgur.com/b9yXUM0.mp4?auto=compress&cs=tinysrgb&w=1200",
        alt: "Voya Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/fHXqXo5.pngauto=compress&cs=tinysrgb&w=600",
        alt: "Destination Explorer",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/uGBIAag.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Itinerary Planner",
        size: "medium",
      },
    ],
    overview: "Voya is an all-in-one travel companion that combines astrocartography with travel planning. It helps users discover destinations that align with their astrological charts, book flights and accommodations, and plan unforgettable trips. The question at the heart of Voya is: What if you're just living in the wrong place? Personalized recommendations guide each user to locations that resonate with their cosmic energy.",
    tools: ["React Native", "Astrology APIs", "Booking APIs", "GraphQL", "Stripe"],
    role: "Product Designer & Developer",
    year: "2025",
    url: "https://breamiller.github.io/voya",
  },
  "ad-reels": {
    id: "ad-reels",
    title: "Ad Reels",
    subtitle: "affordable AI advertising",
    tagline: "✐ᝰ connect with your audience",
    description: "An AI-powered advertising platform that makes compelling video ads affordable for small businesses with tight budgets.",
    images: [
      {
        src: "https://i.imgur.com/O0Pmvuj.gif?auto=compress&cs=tinysrgb&w=800",
        alt: "Ad Reels Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/lRQUd6S.mp4",
        alt: "Ad Reels Demo Video",
        size: "large",
      },
    ],
    overview: "AI-generated ad reels democratizes video advertising by making it cost-effective and accessible to small businesses. Optimizing compelling ads is now more affordable than ever with AI-generated content that maintains authenticity and resonance. Quality marketing is no longer exclusive to large corporations.",
    tools: ["AI Video Generation"],
    role: "Video Producer & Developer",
    year: "Since 2023",
  },
  "imagine": {
    id: "imagine",
    title: "Imagine...",
    subtitle: "ai-driven creative exploration",
    tagline: "✐ᝰ reimagine near-future technologies",
    description: "A visionary creative project showcasing AI-generated imagery exploring near-future technologies and speculative innovations.",
    images: [
      {
        src: "https://i.imgur.com/jSYhdrw.gif?auto=compress&cs=tinysrgb&w=1200",
        alt: "Imagine Hero",
        size: "large",
      },
    ],
    overview: "Imagine explores transformative 'what if' questions about humanity's future. What if we could convert our kinetic energy into electricity? What if we reimagined how we generate power for our homes, businesses, and recreational activities? This collection of AI-generated imagery pushes the boundaries of digital art and visual storytelling by materializing speculative innovations and near-future technologies. Each image represents a thought experiment—an invitation to imagine differently and envision the technologies that could reshape our world. All images were created using advanced AI tools, demonstrating how artificial intelligence can be a creative partner in imagining alternative futures.",
    tools: ["DALL-E", "Midjourney", "Figma", "After Effects", "AI Art Generation"],
    role: "Creative Director",
    year: "2024",
  },
  "flix": {
    id: "flix",
    title: "LiteFlix",
    subtitle: "Transparent digital camera",
    tagline: "Memories that outlast a lifetime.",
    description: "Transparent digital camera product design exploration.",
    images: [
      {
        src: "https://i.imgur.com/vFVoyRr.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "LiteFlix Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/8LQSRyO.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Browse Interface",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/06swPzo.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Watchlist",
        size: "medium",
      },
    ],
    overview: "LiteFlix was inspired by the 5D optic storage.",
    tools: ["React", "Midjourney"],
    role: "Product Designer & Frontend Developer",
    year: "2025",
    url: "https://breamiller.github.io/liteflix",
    visitUrl: "https://breamiller.github.io/liteflix",
    visitLabel: "Visit LiteFlix",
  },
  "wellness-guide": {
    id: "wellness-guide",
    title: "Wellness Guide",
    subtitle: "healing common ailments",
    tagline: "✐ᝰ with cell salts",
    description: "A comprehensive guide to healing common ailments with cell salts, combining ancient mineral therapy with modern wellness practices.",
    images: [
      {
        src: "https://i.imgur.com/DfndDEI.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Wellness Guide Hero",
        size: "large",
      },
    ],
    overview: "The Wellness Guide is a comprehensive resource for maintaining optimal health through understanding the role of essential cell salts (biochemic tissue salts) in preventing and treating common ailments. This guide serves as a symptoms index, helping users identify which mineral deficiencies may underlie their health challenges. By combining ancient mineral therapy wisdom with modern research, it covers all aspects of physical, mental, and spiritual wellness with practical insights for achieving balance and vitality.",
    tools: ["Adobe Creative Suite", "Health Database", "Reference Library"],
    role: "Author, Researcher, Product Designer",
    year: "2023",
  },
  "xantara": {
    id: "xantara",
    title: "Xantara",
    subtitle: "sci-fi original series",
    tagline: "✐ᝰ the greatest battles are within",
    description: "A visually stunning sci-fi series exploring themes of personal transformation.",
    images: [
      {
        src: "https://i.imgur.com/WbYxDvA.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Xantara Hero",
        size: "large",
      },
    ],
    overview: "Xantara is an original sci-fi series featuring stunning visuals and gut-wrenching plot twists that explore the human journey of personal transformation and spiritual awakening. The narrative delves into the profound truth that the greatest battles are often fought within ourselves—battles between ego and consciousness, fear and love, illusion and truth. Through immersive worldbuilding and compelling character arcs, Xantara invites viewers to question their assumptions about reality and embark on their own transformative journey.",
    tools: ["AI-Generation", "Visual Effects", "Narrative Design", "Post-Production"],
    role: "Creator & Director",
    year: "2022",
  },
  "attraction": {
    id: "attraction",
    title: "The Art of Attraction",
    subtitle: "luxury couture collection",
    tagline: "✐ᝰ beauty in design",
    description: "High-fashion couture collection featuring iridescent, AI-generated designs inspired by nature's most majestic creatures.",
    images: [
      {
        src: "https://i.imgur.com/eXDo86B.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Attraction Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/mCwdxfi.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Garment Detail 1",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/KBqlIKI.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Garment Detail 2",
        size: "medium",
      },
    ],
    overview: "The Art of Attraction is a luxury couture collection that combines traditional craftsmanship with AI-generated patterns. Each garment mimics one of mother nature's most beautiful phenomena, creating pieces that are both timeless and futuristic. This collection demonstrates how technology can enhance rather than replace artisanal design.",
    tools: ["AI Generation", "Adobe Photoshop", "Fashion Design"],
    role: "Creative Director & Designer",
    year: "2024",
  },
  "love-birds": {
    id: "love-birds",
    title: "Love Birds",
    subtitle: "artistic expression of connection",
    tagline: "✐ᝰ the essence of love",
    description: "Decorative art pieces that capture the warmth and intimacy of connection.",
    images: [
      {
        src: "https://i.imgur.com/e7kW4Jt.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Love Birds Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/w5B40Jm.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Love Birds Detail 1",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/Tam7XB4.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Love Birds Detail 2",
        size: "medium",
      },
    ],
    overview: "Love Birds is a collection of decorative art pieces perfect for modern home decor. Each piece captures the artistry of a warm embrace, exuding tender love and care that can be felt and deeply appreciated. These works celebrate human connection and emotional intimacy.",
    tools: ["AI-Generation", "Adobe Photoshop"],
    role: "Artist & Designer",
    year: "2024",
  },
  "pneuma-collection": {
    id: "pneuma-collection",
    title: "Pneuma Collection",
    subtitle: "ready-to-wear collection",
    tagline: "✐ᝰ the breath of the soul",
    description: "An AI-generated all-white collection featuring deep grooves and intricate textures that embody the metaphysical essence of breath and spirit.",
    images: [
      {
        src: "https://i.imgur.com/b2LNbXF.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Pneuma Collection Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/Wxinljr.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Garment Detail 1",
        size: "medium",
      },
      {
        src: "https://i.imgur.com/nQNqPDj.png?auto=compress&cs=tinysrgb&w=600",
        alt: "Garment Detail 2",
        size: "medium",
      },
    ],
    overview: "The Pneuma Collection represents the ancient Greek concept of pneuma—the divine breath, spirit, and animating life force that permeates all existence. This ready-to-wear collection uses AI-generated designs to create unique, ethereal garments that capture the intangible essence of breath and consciousness. Each piece features intricate grooves and textures reminiscent of flowing air patterns, embodying the philosophy that all matter is animated by invisible spiritual energy. Created through a fusion of cutting-edge AI technology and traditional print-on-demand craftsmanship, the collection offers personalized pieces that celebrate the interconnectedness of body, breath, and spirit. Wearing Pneuma is an invitation to tune into a higher frequency—to breathe intentionally and connect with the invisible forces that animate our physical reality.",
    tools: ["AI-Generation", "Adobe Photoshop", "Fashion Design"],
    role: "Creative Director & Designer",
    year: "2024",
  },
  
  "biohaxx": {
    id: "biohaxx",
    title: "BioHaxx",
    subtitle: "sci-fi television series",
    tagline: "✐ᝰ the inner world of microscopic intelligence",
    description: "A thought-provoking sci-fi series exploring the implications of pathogenic consciousness and microscopic intelligence.",
    images: [
      {
        src: "https://i.imgur.com/FnN3fD0.gif?auto=compress&cs=tinysrgb&w=1200",
        alt: "BioHaxx Hero",
        size: "large",
      },
    ],
    overview: "BioHaxx is a thought-provoking sci-fi series that deep-dives into the inner world of microscopic intelligence. The narrative explores fascinating questions: What if pathogens possessed consciousness? What if the microscopic realm operates according to its own logic and agency? By magnifying the bacterial world and its implications for human existence, BioHaxx challenges viewers to reconsider the nature of intelligence, consciousness, and our relationship with the invisible microbial ecosystems that shape our biology and reality.",
    tools: ["Cinematography", "Microscopy Integration", "Visual Effects", "Narrative Design"],
    role: "Creator & Director",
    year: "2024",
  },

  "solaria": {
    id: "solaria",
    title: "Solaria Handbag",
    subtitle: "ai-generated luxury accessory",
    tagline: "✐ᝰ timeless and futuristic",
    description: "A revolutionary premium handbag created through AI design but manufactured using traditional artisanal craftsmanship.",
    images: [
      {
        src: "https://i.imgur.com/WagmOW8.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Solaria Handbag Hero",
        size: "large",
      },
    ],
    overview: "The Solaria handbag redefines the future of luxury by answering a powerful question: What if luxury could be both timeless and futuristic? Generated by advanced AI but manufactured through traditional craftsmanship, Solaria represents a revolutionary hybrid approach to premium goods. The design leverages machine intelligence to create unique, optimized patterns while honoring the human artistry and expertise required for flawless production. Each Solaria piece tells a story of technological innovation meeting human mastery—a wearable manifesto that the future of luxury is not either-or, but both-and.",
    tools: ["AI Design Generation", "Premium Manufacturing", "Luxury Craftsmanship"],
    role: "Creative Director & Designer",
    year: "2024",
  },

  "opia": {
    id: "opia",
    title: "Opia",
    subtitle: "digital art experience",
    tagline: "✐ᝰ silence is golden",
    description: "A contemplative digital art piece exploring the profound power of unspoken communication and silence.",
    images: [
      {
        src: "https://i.imgur.com/RNisHGQ.mp4?auto=compress&cs=tinysrgb&w=600",
        alt: "Opia Experience",
        size: "large",
      },
    ],
    overview: "Opia is a digital art piece that explores one of language's most fascinating untranslatable concepts: the awareness of how little we understand about another's inner experience. The work poses a profound question: What if the most powerful messages were never spoken? Opia communicates beyond words through visual metaphor and emotional resonance, creating a visual representation of unspoken communication. By dwelling in the spaces between words, Opia invites viewers to recognize the profound depths of human connection that exist beyond language—in silence, gesture, presence, and the mysterious opia that connects all conscious beings.",
    tools: ["AI-Generation", "Video Art", "Animation", "Visual Design", "Sound Design"],
    role: "Artist & Creative Technologist",
    year: "2024",
  },

  "ethereal-stroll": {
    id: "ethereal-stroll",
    title: "Ethereal Stroll",
    subtitle: "ambient soundscape composition",
    tagline: "✐ᝰ the breath of meditation",
    description: "An atmospheric ambient music composition designed to facilitate meditation, relaxation, and spiritual contemplation.",
    images: [
      {
        src: "https://i.imgur.com/uwCTYkA.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Ethereal Stroll Hero",
        size: "large",
      },
    ],
    overview: "Ethereal Stroll is an ambient composition that serves as a sonic sanctuary for meditation, relaxation, and spiritual exploration. The work creates a landscape of flowing textures, subtle tonal shifts, and spacious silence—a soundscape that supports deep introspection and presence. By embracing simplicity and negative space, Ethereal Stroll invites listeners into a state of receptivity where the mind can settle, the heart can open, and consciousness can expand. Perfect for yoga, meditation, sleep, or contemplative work, this composition becomes a journey of turning inward.",
    tools: ["Ambient Composition", "Sound Design", "Music Production"],
    role: "Composer & Producer",
    year: "2024",
  },

  "who-we-are": {
    id: "who-we-are",
    title: "Who We Are, Have Been, & Will Always Be",
    subtitle: "Vitruivian Love",
    tagline: "✐ᝰ through abstraction",
    description: "An exploratory AI art collection that explores love, transformation, and the profound changes we undergo when we meet someone who transforms us completely.",
    images: [
      {
        src: "https://i.imgur.com/VwuVUu8.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Vitruvian Love Hero",
        size: "large",
      },
      {
        src: "https://i.imgur.com/KBeMncy.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Vitruvian Love 1",
        size: "large",
      },
      {
        src: "https://i.imgur.com/Zku65i0.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Vitruvian Love 2",
        size: "large",
      },
           {
        src: "https://i.imgur.com/0h7b85G.png?auto=compress&cs=tinysrgb&w=1200",
        alt: "Vitruvian Love 3",
        size: "large",
      },
    ],
    overview: "I grieve the distance that once lived between\ntwo strangers passing on a crowded street,\nthe thousand nights we might have never been,\nthe lives we walked before our paths met again.\n\nWhat sorrow lives in all we could have missed—\nthe mornings waking separate and cold,\nlips that may have never known bliss,\nthe stories that would die without being told.\n\nBut eulogies are not for death alone;\nthey sing of transformation, they sing of letting go—\nI lay to rest the parts I've outgrown\nto make room for the love we've come to know.",
    tools: ["AI-Generation", "Adobe Photoshop", "Digital Art"],
    role: "Creative Director & AI Artist",
    year: "2025",
  },
};

