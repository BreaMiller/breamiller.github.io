// projects-data.js - Centralized project data
const projectsData = {
  'pneuma-collection': {
    title: 'Pneuma Collection',
    label: 'AI READY-TO-WEAR',
    heroImage: 'https://i.imgur.com/ErEqAbd.png',
    description: 'Innovative AI-driven fashion collection showcasing the future of ready-to-wear clothing.',
    sections: [
      {
        type: 'single',
        title: 'The Vision Behind Pneuma',
        text: 'What if fashion could breathe life into our digital dreams?',
        image: 'https://i.imgur.com/ErEqAbd.png'
      },
      {
        type: 'double',
        items: [
          {
            title: 'AI-Generated Textures',
            text: 'Every fabric pattern was created using advanced AI algorithms.',
            image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Sustainable Materials',
            text: 'Combining technology with eco-friendly production methods.',
            image: 'https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ]
      }
    ],
    overview: 'This project showcases the intersection of AI technology and fashion design, creating unique wearable art pieces.'
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
        text: 'What if we could visualize the essence of love through artificial intelligence?',
        image: 'https://i.imgur.com/uWiCWju.jpeg'
      }
    ],
    overview: 'A series of AI-generated decorative pieces that capture the beauty and intimacy of love.'
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
        text: 'Exploring how light and color interact in AI-generated fashion.',
        image: 'https://i.imgur.com/GxTG4gk.jpeg'
      }
    ],
    overview: 'Luxury couture collection combining traditional craftsmanship with AI-generated patterns.'
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
        text: 'What if finding where to watch your favorite shows was effortless?',
        image: 'https://i.imgur.com/W9YVpm6.gif'
      }
    ],
    overview: 'A comprehensive streaming aggregator that helps users find content across multiple platforms.'
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
        text: 'What if every child could discover the joy of reading through interactive storytelling?',
        image: 'https://i.imgur.com/fGq1EDQ.png'
      }
    ],
    overview: 'Educational app that combines gamification with reading to engage young learners.'
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
        text: 'What if your genetics could guide your daily health decisions?',
        image: 'https://i.imgur.com/GyRDHxC.gif'
      }
    ],
    overview: 'Cutting-edge app that uses genetic data to provide personalized health recommendations.'
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
        text: 'What if every expectant mother had a supportive community at her fingertips?',
        image: 'https://i.imgur.com/2hBPNJ7.png'
      }
    ],
    overview: 'Social network designed to support and connect mothers throughout their pregnancy journey.'
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
        text: 'What if every citizen could easily participate in shaping their community?',
        image: 'https://i.imgur.com/zOAd5qr.png'
      }
    ],
    overview: 'Digital platform that facilitates civic engagement and democratic processes.'
  },

  'biohaxx': {
    title: 'BioHaxx',
    label: 'AI TV SERIES',
    heroImage: 'https://i.imgur.com/k8p4JMP.gif',
    description: 'Futuristic TV series exploring biotechnology and human enhancement.',
    sections: [
      {
        type: 'single',
        title: 'The Future of Human Enhancement',
        text: 'What if we could hack our own biology to become superhuman?',
        image: 'https://i.imgur.com/k8p4JMP.gif'
      }
    ],
    overview: 'Thought-provoking series that examines the ethical implications of biotechnology.'
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
        text: 'What if wellness wasn\'t just a destination, but a beautiful journey?',
        image: 'https://i.imgur.com/EGUHIC7.png'
      }
    ],
    overview: 'A comprehensive guide covering all aspects of physical, mental, and spiritual wellness.'
  }
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}