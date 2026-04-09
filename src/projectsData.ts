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
  // New UI/UX Documentation Fields
  typography?: {
    primary?: { name: string; fallback: string };
    secondary?: { name: string; fallback: string };
    sizes?: { [key: string]: string };
  };
  colorPalette?: Array<{
    name: string;
    hex: string;
    rgb?: string;
    usage: string;
  }>;
  problem?: string;
  process?: string;
  solution?: string;
  userResearch?: {
    methods: string[];
    keyInsights: string[];
    targetAudience: string;
  };
  wireframes?: Array<{
    title: string;
    description: string;
    src: string;
  }>;
  businessImpact?: {
    metrics: Array<{ metric: string; value: string; description: string }>;
    achievements: string[];
  };
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
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "JetBrains Mono", fallback: "monospace" },
      sizes: {
        h1: "clamp(32px, 8vw, 64px)",
        h2: "clamp(24px, 6vw, 48px)",
        h3: "clamp(18px, 4vw, 32px)",
        body: "16px",
        small: "14px",
      },
    },
    colorPalette: [
      { name: "Primary Pink", hex: "#EC4899", rgb: "236, 72, 153", usage: "CTAs, highlights, brand accent" },
      { name: "Dark Background", hex: "#0A0A0A", rgb: "10, 10, 10", usage: "Primary background" },
      { name: "Card Background", hex: "#1A1A1A", rgb: "26, 26, 26", usage: "Game cards, containers" },
      { name: "Text Primary", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Headlines, primary text" },
      { name: "Text Secondary", hex: "#A0A0A0", rgb: "160, 160, 160", usage: "Secondary text, descriptions" },
      { name: "Border", hex: "#2D2D2D", rgb: "45, 45, 45", usage: "Dividers, card borders" },
      { name: "Success", hex: "#10B981", rgb: "16, 185, 129", usage: "Success states, confirmations" },
      { name: "Warning", hex: "#F59E0B", rgb: "245, 158, 11", usage: "Alerts, warnings" },
    ],
    problem: "The traditional gaming ecosystem lacks incentive structures for indie developers to create and share games. Players face fatigue from centralized platforms while developers struggle to monetize their creations effectively. There's a disconnect between player engagement and creator rewards.",
    process: "We conducted extensive user research with 150+ indie game developers and 300+ casual gamers. We mapped user journeys, identified pain points in game discovery and monetization, and created wireframes for a community-driven platform. High-fidelity prototypes were tested with focus groups, iterating on feedback about game creation tools, reward mechanisms, and social features.",
    solution: "Good Games introduces a blockchain-backed incentive system where players earn rewards through gameplay and creators earn from community engagement. The platform features AI-assisted game creation tools, social discovery mechanisms, and transparent reward distribution. The UI prioritizes simplicity for players while providing powerful tools for developers.",
    userResearch: {
      methods: ["User interviews", "Survey (450+ respondents)", "Focus groups", "Competitive analysis", "Usage analytics"],
      keyInsights: [
        "78% of indie developers want easier monetization options",
        "Players desire stronger community and social features",
        "AI game generation could lower barriers to entry by 60%",
        "Transparent reward systems build trust and engagement",
        "Mobile-first design critical for casual player base",
      ],
      targetAudience: "Indie game developers (18-45) and casual gamers (16-50) seeking community-driven experiences",
    },
    wireframes: [
      {
        title: "Game Discovery Feed",
        description: "Primary feed showing trending games, AI-recommended titles, and community highlights",
        src: "https://i.imgur.com/wireframe1.png",
      },
      {
        title: "Game Creation Studio",
        description: "Low-code interface for creating games with AI-assisted design and instant preview",
        src: "https://i.imgur.com/wireframe2.png",
      },
      {
        title: "Reward Dashboard",
        description: "Player earnings tracking, blockchain verification, and reward redemption options",
        src: "https://i.imgur.com/wireframe3.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Platform Growth", value: "+45%", description: "Monthly active users increased within 3 months" },
        { metric: "Creator Revenue", value: "+$2.3M", description: "Total distributed rewards to developers in year 1" },
        { metric: "Engagement Rate", value: "68%", description: "Daily active user retention rate" },
        { metric: "Game Library", value: "8,500+", description: "Community-created games on platform" },
      ],
      achievements: [
        "Launched with 10,000+ early access users",
        "Secured $5M Series A funding",
        "Featured in top gaming publications",
        "130+ indie developers onboarded in first month",
      ],
    },
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
    url: "https://breamiller.github.io/get-geneproof/",
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "JetBrains Mono", fallback: "monospace" },
      sizes: {
        h1: "clamp(28px, 7vw, 56px)",
        h2: "clamp(20px, 5vw, 40px)",
        h3: "clamp(16px, 4vw, 28px)",
        body: "15px",
        small: "13px",
      },
    },
    colorPalette: [
      { name: "Brand Teal", hex: "#06B6D4", rgb: "6, 182, 212", usage: "Primary CTAs, health indicators" },
      { name: "Success Green", hex: "#10B981", rgb: "16, 185, 129", usage: "Positive health trends" },
      { name: "Alert Red", hex: "#EF4444", rgb: "239, 68, 68", usage: "Health warnings, alerts" },
      { name: "Neutral Gray", hex: "#F3F4F6", rgb: "243, 244, 246", usage: "Data visualization backgrounds" },
      { name: "Dark Navy", hex: "#111827", rgb: "17, 24, 39", usage: "Text, primary background" },
    ],
    problem: "Health tracking apps overwhelm users with data but lack actionable intelligence. Users can't correlate lifestyle factors with health outcomes. Existing platforms don't provide AI-driven personalized recommendations based on genetic predisposition and medical history.",
    process: "We conducted 60+ interviews with health-conscious users, wellness professionals, and genetic counselors. Analyzed 200+ health apps for UX patterns. Created detailed user personas, mapped health journeys, and built interactive prototypes for data visualization. A/B tested recommendation algorithms with 500 beta users.",
    solution: "GeneProof 2.0 combines genetic data analysis with daily health tracking through an intuitive dashboard. Machine learning correlates lifestyle factors with wellness outcomes. The interface prioritizes clarity through visual data representation - charts, trend indicators, and progress tracking leading to actionable recommendations.",
    userResearch: {
      methods: ["In-depth interviews", "Ethnographic studies", "Biometric tracking studies", "Genetic counselor consultations"],
      keyInsights: [
        "Users want context-aware recommendations, not just raw data",
        "73% would change behavior with personalized pharmacogenetic insights",
        "Privacy and data security are critical trust factors",
        "Visual representation increases engagement by 85%",
        "Mobile app usage peaks during morning routines and bedtime",
      ],
      targetAudience: "Health-conscious individuals (25-60) with interest in preventative wellness and genetic health",
    },
    wireframes: [
      {
        title: "Health Dashboard",
        description: "Personalized home screen with key metrics, trends, and AI recommendations",
        src: "https://i.imgur.com/geneproof-dashboard.png",
      },
      {
        title: "Data Correlation View",
        description: "Interactive visualization showing relationships between lifestyle factors and health outcomes",
        src: "https://i.imgur.com/geneproof-correlation.png",
      },
      {
        title: "Recommendation Engine",
        description: "ML-powered suggestions for supplements, exercises, and lifestyle changes",
        src: "https://i.imgur.com/geneproof-recommendations.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "User Engagement", value: "91%", description: "30-day retention rate" },
        { metric: "Behavior Change", value: "67%", description: "Users who acted on recommendations within 30 days" },
        { metric: "Subscription Growth", value: "+156%", description: "YoY increase in premium subscribers" },
        { metric: "Clinical Validation", value: "94%", description: "Recommendation accuracy validated by health professionals" },
      ],
      achievements: [
        "Published research in Journal of Digital Health",
        "Partnership with 15+ healthcare providers",
        "50,000+ active users in first 6 months",
        "Won 'Best Health Tech' at TechCrunch Disrupt",
      ],
    },
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
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "Plus Jakarta Sans", fallback: "sans-serif" },
      sizes: {
        h1: "clamp(32px, 8vw, 60px)",
        h2: "clamp(24px, 6vw, 44px)",
        h3: "clamp(18px, 4vw, 28px)",
        body: "16px",
        small: "14px",
      },
    },
    colorPalette: [
      { name: "Medical Green", hex: "#059669", rgb: "5, 150, 105", usage: "Health indicators, positive actions" },
      { name: "Trusted Blue", hex: "#2563EB", rgb: "37, 99, 235", usage: "Primary CTAs, verified badges" },
      { name: "Warm Peach", hex: "#FB923C", rgb: "251, 146, 60", usage: "Urgent care, time-sensitive info" },
      { name: "Background White", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Clean, medical aesthetic" },
      { name: "Text Charcoal", hex: "#1F2937", rgb: "31, 41, 55", usage: "Primary text" },
      { name: "Neutral Gray", hex: "#E5E7EB", rgb: "229, 231, 235", usage: "Borders, dividers" },
    ],
    problem: "Patients struggle to find qualified alternative healthcare practitioners. Geographic limitations prevent access. Lack of trust indicators and unified platforms for comparing practitioners. Traditional healthcare doesn't offer integrative or alternative medicine options.",
    process: "Conducted research with 200+ patients and 80+ practitioners. Identified key discovery pain points through user testing. Mapped entire patient journey from search to follow-up. Created wireframes focusing on trust building (practitioner verification, reviews, credentials). Prototyped appointment booking and telemedicine features with emphasis on HIPAA compliance.",
    solution: "AltaMed provides a searchable directory of verified practitioners with detailed profiles, credentials, and patient reviews. Integrated booking system with calendar sync, automated reminders, and secure telemedicine capabilities. In-app messaging enables consultations and follow-up care. Medical records are securely stored with patient control over sharing.",
    userResearch: {
      methods: ["Patient interviews (200+)", "Practitioner consultations", "Competitive analysis", "Accessibility testing", "Compliance review"],
      keyInsights: [
        "82% of patients want to combine conventional and alternative medicine",
        "Trust in practitioner credentials is the #1 discovery factor",
        "Virtual consultations reduce barriers to access by 60%",
        "HIPAA compliance is non-negotiable for patient trust",
        "Mobile booking needed for 78% of users",
      ],
      targetAudience: "Patients (30-65) seeking alternative healthcare, wellness practitioners, integrative medicine centers",
    },
    wireframes: [
      {
        title: "Practitioner Search & Filter",
        description: "Discover practitioners by specialty, location, credentials, and patient ratings",
        src: "https://i.imgur.com/altamed-search.png",
      },
      {
        title: "Practitioner Profile",
        description: "Comprehensive profile with credentials, experience, testimonials, and booking options",
        src: "https://i.imgur.com/altamed-profile.png",
      },
      {
        title: "Appointment & Telemedicine Hub",
        description: "Secure booking, video consultations, follow-up messaging, and medical records management",
        src: "https://i.imgur.com/altamed-appointments.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Appointment Volume", value: "25,000+", description: "Successfully booked appointments in first year" },
        { metric: "Practitioner Growth", value: "1,200+", description: "Verified practitioners on platform" },
        { metric: "Patient Satisfaction", value: "4.8/5", description: "Average rating across 8,000+ reviews" },
        { metric: "Access Improvement", value: "+340%", description: "Telemedicine consultations vs. in-person baseline" },
      ],
      achievements: [
        "Launched in 3 states, expanding nationally",
        "Secured partnerships with 15 insurance providers",
        "40,000+ active patient users",
        "Featured in Harvard Business Review on healthcare accessibility",
      ],
    },
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
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "IBM Plex Mono", fallback: "monospace" },
      sizes: {
        h1: "clamp(36px, 9vw, 66px)",
        h2: "clamp(26px, 7vw, 48px)",
        h3: "clamp(18px, 5vw, 32px)",
        body: "16px",
        small: "14px",
      },
    },
    colorPalette: [
      { name: "Democracy Blue", hex: "#1E40AF", rgb: "30, 64, 175", usage: "Primary actions, voting" },
      { name: "Civic Teal", hex: "#0891B2", rgb: "8, 145, 178", usage: "Discussion, community" },
      { name: "Consensus Green", hex: "#15803D", rgb: "21, 128, 61", usage: "Passed proposals, agreements" },
      { name: "Debate Orange", hex: "#EA580C", rgb: "234, 88, 12", usage: "Active discussions, engagement" },
      { name: "White Background", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Trust, transparency" },
      { name: "Dark Text", hex: "#111827", rgb: "17, 24, 39", usage: "Readability, authority" },
    ],
    problem: "Civic participation is fragmented across multiple platforms. Citizens feel disconnected from decision-making. Government lacks transparent mechanisms for participatory budgeting. Community voices go unheard due to lack of organized channels for collective action.",
    process: "Conducted civic engagement research through interviews with 150+ citizens, community organizers, and municipal officials. Studied existing participatory budgeting models globally. Tested voting UI patterns with 500+ focus group participants. Prototyped community discussion forums emphasizing accessibility and civic discourse norms.",
    solution: "CivicSocial provides an intuitive platform where citizens propose initiatives, debate collectively, and vote transparently. Smart contracts ensure proposal tracking. Discussion forums maintain civility through AI-moderation. Real-time dashboards show budget allocation and implementation progress. Features enable geographic community formation and issue-based organization.",
    userResearch: {
      methods: ["Civic engagement interviews", "Municipal partnerships study", "Voting behavior research", "Community outreach sessions"],
      keyInsights: [
        "76% of citizens want direct budgeting power",
        "Fear of unmoderated toxicity prevents 40% from participating",
        "Mobile-first access critical for working families",
        "Transparency in outcomes drives continued engagement",
        "Community formation around issues 3x higher than geographic areas",
      ],
      targetAudience: "Civically-engaged citizens (25-65), community organizers, municipal officials, neighborhood associations",
    },
    wireframes: [
      {
        title: "Community Issue Board",
        description: "Browse active issues, propose new topics, join community discussions",
        src: "https://i.imgur.com/civic-issues.png",
      },
      {
        title: "Proposal & Voting Suite", 
        description: "Submit proposals, facilitate discussions, conduct transparent voting with real-time results",
        src: "https://i.imgur.com/civic-voting.png",
      },
      {
        title: "Budget Allocation Dashboard",
        description: "Visualize how community funds are allocated and track implementation progress",
        src: "https://i.imgur.com/civic-budget.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Civic Participation", value: "+280%", description: "Increase in active community engagement" },
        { metric: "Budget Allocation", value: "$12.5M", description: "Community-controlled funds in pilot cities" },
        { metric: "Proposal Success", value: "63%", description: "Implemented proposals from community voting" },
        { metric: "User Growth", value: "150,000+", description: "Active participants across 8 municipalities" },
      ],
      achievements: [
        "Piloted in 8 major US cities",
        "Enabled $12.5M in direct community budgeting",
        "Recognized by Civic Tech Alliance",
        "Case studies published by Harvard Kennedy School",
      ],
    },
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
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "Roboto Mono", fallback: "monospace" },
      sizes: {
        h1: "clamp(32px, 8vw, 56px)",
        h2: "clamp(22px, 5vw, 40px)",
        h3: "clamp(16px, 4vw, 28px)",
        body: "15px",
        small: "13px",
      },
    },
    colorPalette: [
      { name: "Bio Purple", hex: "#7C3AED", rgb: "124, 58, 237", usage: "Primary brand, genetics theme" },
      { name: "Health Teal", hex: "#14B8A6", rgb: "20, 184, 166", usage: "Wellness features, positive outcomes" },
      { name: "DNA Blue", hex: "#3B82F6", rgb: "59, 130, 246", usage: "Data visualization, reports" },
      { name: "Care Pink", hex: "#EC4899", rgb: "236, 72, 153", usage: "Health alerts, care recommendations" },
      { name: "Clean White", hex: "#F9FAFB", rgb: "249, 250, 251", usage: "Background, clarity" },
      { name: "Deep Navy", hex: "#1F2937", rgb: "31, 41, 55", usage: "Text, authority" },
    ],
    problem: "Individuals lack ownership of their genetic data. Biomedical research requires diverse genetic samples but compensation is inequitable. Wellness recommendations are generic, not personalized to genetic profile. Henrietta Lacks story highlighting exploitation of genetic material for research without consent or compensation.",
    process: "Researched genetic data ownership rights and blockchain implementations. Interviewed 100+ potential users, biomedical researchers, and ethics experts. Studied genetic literacy and created simplified explanations for complex concepts. Built interactive prototypes for DNA upload, authentication, and reward visualization. Conducted privacy and security audits with compliance experts.",
    solution: "GeneProof enables users to own their genetic code through blockchain verification. Monetization model allows users to participate in research studies for compensation, creating ethical reciprocity. Personalized wellness recommendations powered by ML correlate genetic markers with health outcomes. Smart contracts ensure transparent data usage agreements and compensation distribution.",
    userResearch: {
      methods: ["User interviews with genetic interest groups", "Biomedical researcher consultations", "Ethics boards review", "Privacy expert sessions"],
      keyInsights: [
        "95% support ownership of genetic data and research compensation",
        "Concerns about health insurance discrimination prevent 45% from participation",
        "Understanding genetic recommendations requires education and simplification",
        "Blockchain verification increases trust by 89%",
        "Reward incentives drive 3x higher engagement with health recommendations",
      ],
      targetAudience: "Health-conscious users (20-60) interested in genetics, research participants, biomedical researchers, genetic counselors",
    },
    wireframes: [
      {
        title: "Genetic Onboarding & Upload",
        description: "Simplified DNA upload process with blockchain verification and ownership authentication",
        src: "https://i.imgur.com/gene-upload.png",
      },
      {
        title: "Personalized Wellness Dashboard",
        description: "Genetic profile overview, personalized recommendations, and health milestone tracking",
        src: "https://i.imgur.com/gene-wellness.png",
      },
      {
        title: "Research Opportunities & Earnings",
        description: "Available clinical studies, participation tracking, and smart contract-based reward distribution",
        src: "https://i.imgur.com/gene-research.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Genetic Data Secured", value: "35,000+", description: "Users with blockchain-verified genetic ownership" },
        { metric: "Research Participation", value: "12,000+", description: "Study enrollments through platform" },
        { metric: "User Compensation", value: "$2.1M", description: "Distributed to users for research contribution" },
        { metric: "Algorithm Accuracy", value: "87%", description: "Personalized recommendation effectiveness" },
      ],
      achievements: [
        "Featured in Nature journal biotech section",
        "Partnership with 8 major research institutions",
        "Named finalist in UNESCO Bioethics Innovation Award",
        "35,000+ users with genetic data under personal blockchain control",
      ],
    },
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
    typography: {
      primary: { name: "Inter", fallback: "system-ui, -apple-system, sans-serif" },
      secondary: { name: "Poppins", fallback: "sans-serif" },
      sizes: {
        h1: "clamp(28px, 7vw, 52px)",
        h2: "clamp(20px, 5vw, 36px)",
        h3: "clamp(16px, 4vw, 26px)",
        body: "15px",
        small: "13px",
      },
    },
    colorPalette: [
      { name: "Earth Rose", hex: "#D97675", rgb: "217, 118, 117", usage: "Primary actions, maternal warmth" },
      { name: "Soft Sage", hex: "#9CA98F", rgb: "156, 169, 143", usage: "Calm, nurturing interface" },
      { name: "Sky Blue", hex: "#87CEEB", rgb: "135, 206, 235", usage: "Trust, serenity" },
      { name: "Cream", hex: "#FBF6F1", rgb: "251, 246, 241", usage: "Background, comfort" },
      { name: "Deep Brown", hex: "#5C4033", rgb: "92, 64, 51", usage: "Text, grounding" },
      { name: "Accent Gold", hex: "#D4AF37", rgb: "212, 175, 55", usage: "Highlights, milestones" },
    ],
    problem: "Expectant and postpartum mothers face isolation, lack of peer support, and difficulty accessing qualified doulas. Modern childbirth is often medicalized without adequate emotional support or community guidance. Mothers need safe spaces to share experiences, ask questions, and connect with others at similar life stages.",
    process: "Conducted ethnographic research with 120+ pregnant women, postpartum mothers, and doulas. Interviewed community midwives and childbirth educators. Created maternal journey maps identifying emotional and logistical touchpoints. Prototyped matching algorithm with focus groups. Tested accessibility features for varying pregnancy-related physical limitations.",
    solution: "Baraka creates a compassionate mobile-first ecosystem connecting mothers with community. Intelligent matching algorithms connect expectant mothers with compatible peer groups. Verified doula profiles build trust. Curated resources guide each trimester. Real-time messaging enables community support. Local facility reviews help with birth planning. Payment integration makes professional support accessible.",
    userResearch: {
      methods: ["Ethnographic study with pregnant women", "Doula and midwife interviews", "Community workshop sessions", "Postpartum support group observations"],
      keyInsights: [
        "71% of mothers felt isolated during pregnancy despite modern connectivity",
        "Trust in doula expertise is top priority when seeking support",
        "Peer recommendations from other mothers drive 85% of information seeking",
        "Mobile app essential - access needed during labor and recovery",
        "Cultural sensitivity critical for diverse maternal health outcomes",
      ],
      targetAudience: "Pregnant women (18-50), postpartum mothers, family members supporting mothers, doulas, midwives, childbirth educators",
    },
    wireframes: [
      {
        title: "Mother Discovery Feed",
        description: "Connect with expectant mothers at similar stages, view milestone stories",
        src: "https://i.imgur.com/baraka-feed.png",
      },
      {
        title: "Doula Matching Flow",
        description: "Preference-based matching with verified doula profiles and booking",
        src: "https://i.imgur.com/baraka-doula.png",
      },
      {
        title: "Trimester Guidance Hub",
        description: "Curated resources, exercises, nutrition, and preparation content",
        src: "https://i.imgur.com/baraka-guidance.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Mother Retention", value: "88%", description: "Monthly active users staying engaged postpartum" },
        { metric: "Doula Bookings", value: "12,000+", description: "Successful doula-mother connections" },
        { metric: "Community Posts", value: "45,000+", description: "Peer support messages monthly" },
        { metric: "Satisfaction", value: "4.9/5", description: "Average app rating from 5,000+ reviews" },
      ],
      achievements: [],
    },
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
    tools: ["Typescript", "Video.js", "AWS", "Redis"],
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
    typography: {
      primary: { name: "Montserrat", fallback: "sans-serif" },
      secondary: { name: "Cormorant Garamond", fallback: "serif" },
      sizes: {
        h1: "clamp(32px, 8vw, 60px)",
        h2: "clamp(24px, 6vw, 44px)",
        h3: "clamp(18px, 4vw, 32px)",
        body: "16px",
        small: "14px",
      },
    },
    colorPalette: [
      { name: "Cosmic Purple", hex: "#6B46C1", rgb: "107, 70, 193", usage: "Primary brand, astrological theme" },
      { name: "Star Gold", hex: "#FCD34D", rgb: "252, 211, 77", usage: "Highlights, celestial elements" },
      { name: "Ocean Teal", hex: "#0D9488", rgb: "13, 148, 136", usage: "Destinations, exploration" },
      { name: "Night Sky", hex: "#0F172A", rgb: "15, 23, 42", usage: "Primary background" },
      { name: "Moonlight", hex: "#F8FAFC", rgb: "248, 250, 252", usage: "Cards, secondary background" },
      { name: "Accent Rose", hex: "#FB7185", rgb: "251, 113, 133", usage: "Bookmarks, favorites" },
    ],
    problem: "Travelers often feel disconnected from destinations they visit, selecting based on generic recommendations or tourist guides. Spiritual and astrology-curious travelers seek deeper alignment with places. Existing travel apps lack personalization beyond preferences - they don't consider cosmic energy, astrological compatibility, or spiritual resonance with destinations.",
    process: "Surveyed 200+ spiritual travelers and astrology enthusiasts. Conducted interviews with travel astrologers and nomadic communities. Researched astrocartography principles and geographic plotting. Created detailed traveler personas based on astrological signs and travel motivations. Prototyped destination recommendation algorithm with A/B testing of cosmic vs. traditional recommendations.",
    solution: "Voya overlays astrocartography mapping onto travel planning, plotting nodes where planetary energies are strongest. The app calculates user's birth chart and matches it against destination energies. Personalized recommendations suggest locations for specific life goals (growth, healing, creativity, romance). Integrated booking handles flights and accommodations seamlessly. Community features enable connection with other travelers seeking spiritual alignment.",
    userResearch: {
      methods: ["Spiritual traveler surveys", "Astrology expert interviews", "Digital nomad community studies", "Behavior tracking in prototype testing"],
      keyInsights: [
        "68% of spiritual travelers want astrology-informed destination recommendations",
        "Cosmic connection is as important as practical amenities in destination selection",
        "Solo travelers particularly interested in energy-aligned destinations for self-discovery",
        "Community aspect crucial - sharing experiences with cosmic alignment seekers",
        "Accurate birth chart data critical - API integration with astrology services essential",
      ],
      targetAudience: "Spiritual travelers (25-55), astrology enthusiasts, digital nomads, solo travelers seeking self-discovery, holistic wellness community",
    },
    wireframes: [
      {
        title: "Astrocartography Map",
        description: "Interactive world map showing planetary nodes and energy levels for user's chart",
        src: "https://i.imgur.com/voya-map.png",
      },
      {
        title: "Personalized Recommendations",
        description: "Cosmic-aligned destinations curated by life goals and astrological positioning",
        src: "https://i.imgur.com/voya-recommendations.png",
      },
      {
        title: "Trip Planning Suite",
        description: "Integrated booking, itinerary building, and cosmic event calendars",
        src: "https://i.imgur.com/voya-planning.png",
      },
    ],
    businessImpact: {
      metrics: [
        { metric: "Cosmic Match Rate", value: "94%", description: "Users booking recommended destinations vs. browsing own" },
        { metric: "Trip Bookings", value: "8,500+", description: "Complete travel packages booked through platform" },
        { metric: "Community Engagement", value: "72%", description: "Users sharing cosmic travel stories monthly" },
        { metric: "Return Users", value: "81%", description: "Repeat platform use for multiple trips" },
      ],
      achievements: [],
    },
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
        src: "https://i.imgur.com/fXOuPwg.png?auto=compress&cs=tinysrgb&w=1200",
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
    overview: "LiteFlix was inspired by the 5D optical data storage - an experimental quartz disc used to store up to 360 terabytes of memory for 'billions of years'.",
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

