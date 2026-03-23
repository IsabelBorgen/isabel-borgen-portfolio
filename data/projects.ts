export interface ProjectStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectResult {
  label: string;
  description: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  cardSummary: string;
  oneSentenceOutcome: string;
  tools: string[];
  accentColor: string;
  overview: string;
  approach: ProjectStep[];
  results: ProjectResult[];
  liveUrl?: string;
  tiktokUrl?: string;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "digify-active",
    category: "Digital Marketing · Web",
    accentColor: "#4A7C59",
    title: "Digify Active — Agency Website & Lead Generation",
    cardSummary: "Built a conversion-focused website for a niche digital marketing agency targeting gyms and fitness studios.",
    oneSentenceOutcome: "A complete brand-to-lead ecosystem designed for the fitness industry.",
    tools: ["HubSpot", "SEO", "UX/UI", "Google Ads", "Meta Ads"],
    liveUrl: "https://digifyactive.com/",
    tiktokUrl: "https://www.tiktok.com/@digify.active/video/7577903294517890326",
    coverImage: "/projects/digify-active.jpg",
    overview: "Built a full conversion-focused website for Digify Active, a niche digital marketing agency targeting gyms and fitness studios. The project covered strategy, brand identity, UX/UI design, and performance marketing setup from the ground up.",
    approach: [
      {
        number: "01",
        title: "Niche Positioning",
        description: "Defined Digify Active's positioning within the competitive fitness-marketing space, identifying a gap for an agency that speaks the language of gym owners."
      },
      {
        number: "02",
        title: "Brand Identity",
        description: "Created the visual identity including logo direction, color system, and tone of voice aligned with the fitness industry."
      },
      {
        number: "03",
        title: "User Journey Design",
        description: "Mapped a lead-focused user journey — from landing to inquiry — with clear service pages, strong CTAs, and trust elements (social proof, certifications)."
      },
      {
        number: "04",
        title: "UX/UI",
        description: "Designed and built the site in HubSpot with SEO-optimized structure, fast load times, and mobile-first layout."
      },
      {
        number: "05",
        title: "Paid Ads Setup",
        description: "Configured Google Ads and Meta Ads campaigns with display creatives to drive targeted traffic to the site."
      }
    ],
    results: [
      {
        label: "Live Launch",
        description: "Delivered a fully functional, live website with integrated lead capture."
      },
      {
        label: "Foundational Growth",
        description: "Established scalable foundation for inbound marketing and client acquisition."
      },
      {
        label: "Creative Assets",
        description: "Created display ad assets for Google Ads campaigns."
      }
    ]
  },
  {
    slug: "oblicuo-hifi",
    category: "Social Media Strategy",
    accentColor: "#C4956A",
    title: "Oblicuo Hi-Fi Bar — 3-Month Social Media Strategy",
    cardSummary: "Developed a persona-driven social media strategy to grow brand awareness and weeknight footfall for a local Barcelona hi-fi bar.",
    oneSentenceOutcome: "Turning a local hi-fi bar into a 'hidden gem' through atmosphere-driven storytelling.",
    tools: ["Instagram", "TikTok", "Facebook Business", "Answer-the-Public", "SMART Goals Framework", "Canva"],
    coverImage: "/projects/oblicuo-hifi.jpg",
    overview: "Developed a comprehensive 3-month social media strategy for Oblicuo, a local hi-fi bar in Barcelona, with the goal of increasing brand awareness and driving weeknight footfall through organic and earned media.",
    approach: [
      {
        number: "01",
        title: "Persona-Centric Strategy",
        description: "Built an empathy map and defined the 'Weekend Explorer' persona to align all content with specific user motivations and pain points."
      },
      {
        number: "02",
        title: "Competitive Positioning",
        description: "Analyzed competitor gaps to position Oblicuo as a 'hidden gem' — balancing atmospheric storytelling with clear event communication."
      },
      {
        number: "03",
        title: "Search & Trend Listening",
        description: "Used Answer-the-Public to surface high-intent local keywords including 'chill bar Gràcia' and 'non-touristic bar Barcelona'."
      },
      {
        number: "04",
        title: "Multi-Channel Execution",
        description: "Designed a platform-specific plan: Instagram for vibe, TikTok for discovery, and Facebook for events."
      },
      {
        number: "05",
        title: "Content Production",
        description: "Created 5 original, high-fidelity content pieces including POV Reels and a TikTok discovery guide."
      },
      {
        number: "06",
        title: "Micro-Influencer Strategy",
        description: "Structured an outreach plan to build authentic local trust through nano and micro influencers in BCN."
      }
    ],
    results: [
      {
        label: "Full Calendar",
        description: "Delivered a full 3-month content calendar ready for execution."
      },
      {
        label: "Content Assets",
        description: "5 original high-fidelity content pieces produced."
      },
      {
        label: "Reach Growth",
        description: "Strategy designed to grow monthly unique reach from 5,000 to 10,000."
      }
    ]
  },
  {
    slug: "consumer-innovativeness-thesis",
    category: "Academic Research · Grade: A",
    accentColor: "#2C3E6B",
    title: "Consumer Innovativeness & Trust in eWOM — Bachelor Thesis",
    cardSummary: "Quantitative research on how consumer innovativeness affects trust in online reviews and influencer marketing. Grade: A.",
    oneSentenceOutcome: "An award-winning deep dive into the psychology of digital trust.",
    tools: ["SPSS", "Quantitative Research", "Regression Analysis", "Survey Design", "Social Proof Theory"],
    coverImage: "/projects/consumer-innovativeness-thesis.jpg",
    overview: "Bachelor thesis investigating how a consumer's inherent degree of innovativeness shapes their level of trust in Electronic Word-of-Mouth (eWOM) — specifically product reviews and influencer marketing. Achieved grade: A (Top Academic Honor).",
    approach: [
      {
        number: "01",
        title: "Theoretical Framework",
        description: "Integrated Social Proof Theory, Social Cognitive Theory, and Rogers' Diffusion of Innovation to construct research models."
      },
      {
        number: "02",
        title: "Hypothesis Design",
        description: "Developed and tested 5 distinct hypotheses on the correlation between consumer type and perceived digital credibility."
      },
      {
        number: "03",
        title: "Research Design",
        description: "Executed a quantitative, cross-sectional study using primary data collection via structured questionnaire."
      },
      {
        number: "04",
        title: "Data Collection",
        description: "Designed questionnaire based on validated measurement scales; gathered 237 unique responses."
      },
      {
        number: "05",
        title: "Statistical Analysis",
        description: "Ran descriptive statistics, correlation analysis, regression analysis, and validity & reliability testing in SPSS."
      }
    ],
    results: [
      {
        label: "Grade: A",
        description: "Received top academic honor for research excellence."
      },
      {
        label: "Scientific Proof",
        description: "3 of 5 hypotheses empirically supported regarding innovativeness and trust."
      },
      {
        label: "Strategic Insights",
        description: "Identified critical correlations between review structure and perceived trust."
      }
    ]
  },
  {
    slug: "zoria-smids",
    category: "Strategic Consulting · AI",
    accentColor: "#8B3A3A",
    title: "ZORIA SMIDs — AI Healthcare Market Entry Strategy",
    cardSummary: "Consulting engagement for a pre-market AI startup: designed a market entry strategy for synthetic medical image datasets.",
    oneSentenceOutcome: "Pivoting a generative AI startup into a high-value healthcare data provider.",
    tools: ["Strategic Market Analysis", "AI Generative Tech Frameworks", "Competitive Gap Analysis", "SaaS Business Model Design", "Phased Partnership Roadmap"],
    coverImage: "/projects/zoria-smids.jpg",
    overview: "Consulting engagement for Zoria Tech, a pre-market startup, to identify a viable market entry strategy for their AI-driven visual content production software. Recommended pivoting toward healthcare with a new product: ZORIA SMIDs (Synthetic Medical Image Datasets).",
    approach: [
      {
        number: "01",
        title: "Strategic Market Analysis",
        description: "Evaluated potential gaps across multiple industries to identify high-value applications for Zoria's technology."
      },
      {
        number: "02",
        title: "Sector-Specific Positioning",
        description: "Identified a structural gap in healthcare: the shortage of high-quality medical image datasets for AI research."
      },
      {
        number: "03",
        title: "Solution Design",
        description: "Proposed 'ZORIA SMIDs' — a platform using generative AI to produce representative synthetic medical datasets."
      },
      {
        number: "04",
        title: "Phased Business Model",
        description: "Designed a two-stage roadmap: Partnership model (data exchange) followed by a transition to a core SaaS model."
      },
      {
        number: "05",
        title: "Regulatory Alignment",
        description: "Built the strategy around emerging AI transparency and documentation requirements."
      }
    ],
    results: [
      {
        label: "Strategic Pivot",
        description: "Delivered a comprehensive report with differentiated positioning for Zoria Tech."
      },
      {
        label: "Risk-Reduced Roadmap",
        description: "Created a go-to-market plan that builds institutional trust before monetization."
      },
      {
        label: "Scalable Model",
        description: "Identified a clear path to a high-margin SaaS business."
      }
    ]
  }
];
