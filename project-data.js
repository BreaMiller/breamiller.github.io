// projects-data.js - Centralized project data
const projectsData = {
  'pneuma-collection': {
    title: 'Pneuma Collection',
    label: 'AI READY-TO-WEAR',
    heroImage: '',
    description: 'Innovative AI-driven fashion collection showcasing the future of ready-to-wear clothing.',
    sections: [
      {
        type: 'single',
        title: 'The Vision Behind Pneuma',
        text: 'What if fashion could breathe life into our digital dreams? The Pneuma Collection represents a revolutionary approach to ready-to-wear fashion, where every piece is crafted through the lens of artificial intelligence.',
        image: 'https://i.imgur.com/ErEqAbd.png'
      },
      {
        type: 'double',
        items: [
          {
            title: 'AI-Generated Textures',
            text: 'Every fabric pattern was created using advanced AI algorithms, resulting in unique textures never seen before.',
            image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Sustainable Materials',
            text: 'Combining technology with eco-friendly production methods to create fashion that cares for our planet.',
            image: 'https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ]
      }
    ],
    overview: 'This project showcases the intersection of AI technology and fashion design, creating unique wearable art pieces that push the boundaries of traditional clothing design.'
  },
  
  'love-birds': {
    title: 'Love Birds',
    label: 'AI DECOR',
    heroImage: 'https://i.imgur.com/uWiCWju.jpeg',
    description: 'Romantic AI-generated art pieces perfect for modern home decoration.',
    sections: [
      {
        type: 'single',
        title: 'Capturing Love Through AI',
        text: 'What if we could visualize the essence of love through artificial intelligence? Love Birds explores the intersection of emotion and technology.',
        image: 'https://i.imgur.com/uWiCWju.jpeg'
      }
    ],
    overview: 'A series of AI-generated decorative pieces that capture the beauty and intimacy of love through algorithmic artistry.'
  },

  'iridescence': {
    title: 'Iridescence',
    label: 'AI COUTURE',
    heroImage: 'https://i.imgur.com/GxTG4gk.jpeg',
    description: 'High-fashion couture pieces featuring iridescent AI-generated designs.',
    sections: [
      {
        type: 'single',
        title: 'The Science of Beauty',
        text: 'Exploring how light and color interact in AI-generated fashion, creating garments that shift and change like living art.',
        image: 'https://i.imgur.com/GxTG4gk.jpeg'
      }
    ],
    overview: 'Luxury couture collection combining traditional craftsmanship with AI-generated patterns that mimic the natural phenomenon of iridescence.'
  },

  'buku-tv': {
    title: 'Buku TV™️',
    label: 'WHERE TO WATCH',
    heroImage: 'https://i.imgur.com/W9YVpm6.gif',
    description: 'Revolutionary streaming platform for discovering where to watch your favorite content.',
    sections: [
      {
        type: 'single',
        title: 'Simplifying Entertainment Discovery',
        text: 'What if finding where to watch your favorite shows was effortless? Buku TV aggregates content from all major streaming platforms.',
        image: 'https://i.imgur.com/W9YVpm6.gif'
      }
    ],
    overview: 'A comprehensive streaming aggregator that helps users find content across multiple platforms with intelligent recommendations.'
  },

  'knack': {
    title: 'Knack™️',
    label: 'KIDS READING APP',
    heroImage: 'https://i.imgur.com/fGq1EDQ.png',
    description: 'Interactive reading app designed to make learning fun for children.',
    sections: [
      {
        type: 'single',
        title: 'Making Reading Magical',
        text: 'What if every child could discover the joy of reading through interactive storytelling? Knack transforms reading into an adventure.',
        image: 'https://i.imgur.com/fGq1EDQ.png'
      }
    ],
    overview: 'Educational app that combines gamification with reading to engage young learners and foster a lifelong love of books.'
  },

  'geneproof': {
    title: 'GeneProof',
    label: 'HEALTH TRACKING APP',
    heroImage: 'https://i.imgur.com/GyRDHxC.gif',
    description: 'Advanced genetic health tracking application for personalized wellness.',
    sections: [
      {
        type: 'single',
        title: 'Personalized Health Insights',
        text: 'What if your genetics could guide your daily health decisions? GeneProof provides personalized recommendations based on your DNA.',
        image: 'https://i.imgur.com/GyRDHxC.gif'
      }
    ],
    overview: 'Cutting-edge app that uses genetic data to provide personalized health recommendations and track wellness metrics.'
  },

  'baraka': {
    title: 'Baraka',
    label: 'MATERNITY SOCIAL NETWORK',
    heroImage: 'https://i.imgur.com/2hBPNJ7.png',
    description: 'Social platform connecting expectant mothers and families.',
    sections: [
      {
        type: 'single',
        title: 'Building Community for Mothers',
        text: 'What if every expectant mother had a supportive community at her fingertips? Baraka connects mothers through shared experiences.',
        image: 'https://i.imgur.com/2hBPNJ7.png'
      }
    ],
    overview: 'Social network designed to support and connect mothers throughout their pregnancy journey with expert advice and peer support.'
  },

  'civic-social': {
    title: 'Civic Social',
    label: 'NETWORK FOR DEMOCRACY',
    heroImage: 'https://i.imgur.com/zOAd5qr.png',
    description: 'Platform for civic engagement and democratic participation.',
    sections: [
      {
        type: 'single',
        title: 'Strengthening Democracy',
        text: 'What if every citizen could easily participate in shaping their community? Civic Social makes democratic engagement accessible.',
        image: 'https://i.imgur.com/zOAd5qr.png'
      }
    ],
    overview: 'Digital platform that facilitates civic engagement and democratic processes through community organizing and voting tools.'
  },

  'biohaxx-tv-series': {
    title: 'BioHaxx',
    label: 'AI TV SERIES',
    heroImage: 'https://i.imgur.com/k8p4JMP.gif',
    description: 'Futuristic TV series exploring biotechnology and human enhancement.',
    sections: [
      {
        type: 'single',
        title: 'The Future of Human Enhancement',
        text: 'What if we could hack our own biology to become superhuman? BioHaxx explores the ethical implications of biotechnology.',
        image: 'https://i.imgur.com/k8p4JMP.gif'
      }
    ],
    overview: 'Thought-provoking series that examines the ethical implications of biotechnology and human enhancement in a near-future setting.'
  },

  'wellness-guide': {
    title: 'Wellness Guide',
    label: 'LIFESTYLE BOOK',
    heroImage: 'https://i.imgur.com/EGUHIC7.png',
    description: 'Comprehensive guide to holistic wellness and healthy living.',
    sections: [
      {
        type: 'single',
        title: 'Your Journey to Wellness',
        text: 'What if wellness wasn\'t just a destination, but a beautiful journey? This guide provides practical steps for holistic health.',
        image: 'https://i.imgur.com/EGUHIC7.png'
      }
    ],
    overview: 'A comprehensive guide covering all aspects of physical, mental, and spiritual wellness with actionable advice and insights.'
  },

  'gifts-from-the-sacred-warrior': {
    title: 'Gifts from the Sacred Warrior',
    label: 'GRAPHIC NOVEL',
    heroImage: 'https://i.imgur.com/LSCxFn5.png',
    description: 'Epic graphic novel exploring themes of courage, sacrifice, and spiritual growth.',
    sections: [
      {
        type: 'single',
        title: 'A Hero\'s Journey',
        text: 'What if the greatest battles were fought within ourselves? This graphic novel explores the inner warrior in all of us.',
        image: 'https://i.imgur.com/LSCxFn5.png'
      }
    ],
    overview: 'An epic graphic novel that combines stunning visuals with profound storytelling about personal transformation and spiritual awakening.'
  },

  'bask-handbag': {
    title: 'Bask Handbag',
    label: 'AI FASHION',
    heroImage: 'https://i.imgur.com/WagmOW8.jpeg',
    description: 'Luxury handbag collection featuring AI-generated designs and patterns.',
    sections: [
      {
        type: 'single',
        title: 'Luxury Meets Innovation',
        text: 'What if luxury accessories could be both timeless and futuristic? The Bask collection redefines premium handbags.',
        image: 'https://i.imgur.com/WagmOW8.jpeg'
      }
    ],
    overview: 'Premium handbag collection that combines traditional craftsmanship with AI-generated patterns for unique luxury accessories.'
  },

  'unspoken': {
    title: 'Unspoken',
    label: 'AI DIGITAL ART',
    heroImage: 'https://i.imgur.com/2iZU8IW.png',
    description: 'Abstract digital art series exploring themes of communication and silence.',
    sections: [
      {
        type: 'single',
        title: 'The Language of Silence',
        text: 'What if the most powerful messages were never spoken? Unspoken explores communication beyond words.',
        image: 'https://i.imgur.com/2iZU8IW.png'
      }
    ],
    overview: 'A digital art series that uses AI to explore the spaces between words, creating visual representations of unspoken emotions.'
  },

  'ethereal-stroll': {
    title: 'Ethereal Stroll',
    label: 'MEDITATION MUSIC',
    heroImage: 'https://i.imgur.com/uwCTYkA.jpeg',
    description: 'Ambient music collection designed for meditation and relaxation.',
    sections: [
      {
        type: 'single',
        title: 'Music for the Soul',
        text: 'What if music could transport you to another realm? Ethereal Stroll creates soundscapes for inner peace.',
        image: 'https://i.imgur.com/uwCTYkA.jpeg'
      }
    ],
    overview: 'A collection of ambient compositions designed to facilitate meditation, relaxation, and spiritual contemplation.'
  },

  'rhea': {
    title: 'Rhea',
    label: 'ENERGY DASHBOARD',
    heroImage: 'https://i.imgur.com/6EA3YOJ.gif',
    description: 'Smart energy management dashboard for sustainable living.',
    sections: [
      {
        type: 'single',
        title: 'Sustainable Energy Management',
        text: 'What if managing your energy consumption was as easy as checking your phone? Rhea makes sustainability simple.',
        image: 'https://i.imgur.com/6EA3YOJ.gif'
      }
    ],
    overview: 'Intelligent dashboard that helps users monitor and optimize their energy consumption for a more sustainable lifestyle.'
  },

  'ad-reels': {
    title: 'Ad Reels',
    label: 'AI ADS',
    heroImage: 'https://i.imgur.com/cFfsXOv.gif',
    description: 'AI-generated advertising content that captures attention and drives engagement.',
    sections: [
      {
        type: 'single',
        title: 'The Future of Advertising',
        text: 'What if ads could be as entertaining as the content we love? Ad Reels uses AI to create compelling advertising content.',
        image: 'https://i.imgur.com/cFfsXOv.gif'
      }
    ],
    overview: 'Revolutionary approach to advertising using AI to create engaging, personalized content that resonates with audiences.'
  },

  'coming-soon': {
    title: 'Coming Soon',
    label: 'ABSTRACT AI ART',
    heroImage: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Abstract AI art collection exploring the boundaries of digital creativity.',
    sections: [
      {
        type: 'single',
        title: 'Abstract Expressions',
        text: 'What if AI could express emotions through abstract art? This upcoming collection explores the intersection of technology and emotion.',
        image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    overview: 'An upcoming collection of abstract AI-generated artworks that push the boundaries of digital creativity and emotional expression.'
  },

  'imagine': {
    title: 'Imagine...',
    label: 'PASSION PROJECT',
    heroImage: 'https://i.imgur.com/hskv718.jpeg',
    description: 'Creative exploration of alternative realities and "what if" scenarios.',
    sections: [
      {
        type: 'single',
        title: 'What If the World Was Different?',
        text: 'What if technology companies operated in the physical world? Imagine explores alternative realities through creative storytelling.',
        image: 'https://i.imgur.com/hskv718.jpeg'
      }
    ],
    overview: 'A creative project that reimagines how digital companies might operate in the physical world, exploring alternative business models.'
  }
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}