import { ServiceItem, ProcessStep, StatItem, CaseStudy, Testimonial, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: "Marketing Guys",
  tagline: "Digital Marketing Simplified.",
  subTagline: "Strategy. Growth. Results.",
  phone: "+91 99105 36796",
  formattedPhone: "+91 99105 36796",
  leadStrategist: "Sukhminder Singh & Vijay Chauhan",
  founders: ["Sukhminder Singh", "Vijay Chauhan"],
  email: "marketingguys99@gmail.com",
  directEmail: "marketingguys99@gmail.com",
  agencyHandle: "marketingguysagency",
  location: "No. C-03, Haibatpur, Sector 4, Ghaziabad, Uttar Pradesh 201309",
  address: "No. C-03, Haibatpur, Sector 4, Ghaziabad, Uttar Pradesh 201309",
  whatsappNumber: "+919910536796",
  socials: {
    facebook: "https://www.facebook.com/share/19bpT6Ze1x/",
    instagram: "https://www.instagram.com/marketingguys.agency/",
    linkedin: "https://www.linkedin.com/in/marketing-guys-3b3b0a431",
    youtube: "https://www.youtube.com/@Marketingguysagency"
  },
  foundedYear: "2020",
  experienceYears: "7+",
  rating: 4.9,
  reviewsCount: 380,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO Optimization & Search Marketing",
    shortDesc: "Dominate Google Page 1, outrank competitors, and scale organic organic traffic with technical SEO, semantic keyword clusters, and authoritative link building.",
    fullDesc: "We deploy full-funnel search engine optimization covering technical Core Web Vitals architecture, semantic keyword clusters, on-page optimization, and high-domain-authority backlink building that keeps you on Page 1 of Google for high-intent search queries.",
    iconName: "Search",
    iconBg: "bg-sky-50/90",
    iconColor: "text-sky-600",
    accentColor: "#0284c7",
    customIconUrl: "/seo-growth-bars.svg",
    category: "seo",
    deliverables: [
      "Comprehensive 120-point Technical SEO & Schema Audit",
      "Search Engine Optimization & Google Business Profile 3-Pack Growth",
      "Competitor Keyword Gap & High-Intent Semantic Clusters",
      "Authoritative White-Hat Link Building & Digital PR",
      "Google Search Console & Core Web Vitals Speed Optimization"
    ],
    metrics: "+280% Average Organic Traffic Growth in 90 Days",
    caseHighlight: "Ranked #1 for 45+ competitive keywords for a national SaaS & local healthcare client."
  },
  {
    id: "google-ads",
    title: "Google Ads Management (PPC)",
    shortDesc: "Capture high-intent buyers with data-driven Google Ads management, Search, PMax, and YouTube campaigns that maximize ROAS.",
    fullDesc: "Precision Pay-Per-Click advertising campaigns designed to capture buyers at peak purchase intent across Google Search, Performance Max (PMax), Display, and YouTube. Engineered to lower customer acquisition cost (CAC) and scale qualified lead volume.",
    iconName: "Target",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    accentColor: "#2563eb",
    customIconUrl: "/google-ads-logo.svg",
    category: "paid",
    deliverables: [
      "Negative Keyword Sculpting & Search Intent Matching",
      "High-Converting Responsive Search Ads & Extensions",
      "Smart Bidding Target ROAS & Target CPA Tuning",
      "Performance Max (PMax) Multi-Asset Creative Feed Optimization",
      "Server-Side Enhanced Conversions & Offline Lead Tracking Setup"
    ],
    metrics: "4.8x - 7.2x Average Return on Ad Spend (ROAS)",
    caseHighlight: "Generated 1,420 qualified B2B leads at $14.20 CPA in 60 days."
  },
  {
    id: "meta-ads",
    title: "Meta Ads ROAS (FB & IG)",
    shortDesc: "Scale e-commerce sales and generate qualified leads with thumb-stopping Facebook & Instagram ad funnels built for high ROAS.",
    fullDesc: "Hyper-targeted social ad campaigns combining thumb-stopping creative hooks, emotional angle testing, lookalike audiences, and full-funnel retargeting to transform casual scrollers into high-LTV customers and qualified B2B leads.",
    iconName: "Infinity",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    accentColor: "#0064e0",
    customIconUrl: "/meta-logo.svg",
    category: "paid",
    deliverables: [
      "Creative Ad Hook Testing & Dynamic Video Angle Matrix",
      "Custom, Lookalike & First-Party Audience Modeling",
      "Full-Funnel Omni-Channel Retargeting Architecture",
      "CBO / ABO Scale Budget Allocation & Bid Cap Testing",
      "Meta Conversions API (CAPI) Server-Side Tracking"
    ],
    metrics: "5.4x Average Return on Ad Spend across E-Commerce",
    caseHighlight: "Scaled direct-to-consumer brand from $15k/mo to $140k/mo ad spend profitably."
  },
  {
    id: "wordpress",
    title: "WordPress & Web Development",
    shortDesc: "High-speed, conversion-focused WordPress websites and landing pages engineered for lightning load times and lead capture.",
    fullDesc: "Modern, blazing-fast, mobile-first websites and landing pages engineered specifically for high conversion rates, seamless user experience, and lightning-speed Google PageSpeed scores that turn cold clicks into paying clients.",
    iconName: "Globe",
    iconBg: "bg-teal-50/80",
    iconColor: "text-teal-700",
    accentColor: "#0d9488",
    customIconUrl: "/web-dev-illustration.svg",
    category: "web",
    deliverables: [
      "Custom Tailored UI/UX & High-Converting Responsive Layouts",
      "Sub-1-Second Load Times (95+ Google PageSpeed Scores)",
      "Built-in Conversion Funnels, Heatmap Tracking & CRM Integration",
      "Full On-Page Semantic SEO Architecture & Schema.org Markup",
      "Enterprise CMS Backend, Speed Optimization & Security Hardening"
    ],
    metrics: "+42% Average Lift in Visitor-to-Lead Conversion Rate",
    caseHighlight: "Redesigned enterprise B2B portal resulting in 185% increase in inbound form submissions."
  },
  {
    id: "blogs",
    title: "High-Retention Video Editing",
    shortDesc: "Viral short-form Reels, TikToks, YouTube Shorts, and high-converting video ads engineered to maximize retention and clicks.",
    fullDesc: "Professional video editing for ambitious brands, creators, and advertisers. From viral short-form hooks (Reels, TikTok, Shorts) to high-production YouTube videos, VSLs, and dynamic ad creatives designed to maximize watch time and conversion rates.",
    iconName: "Video",
    iconBg: "bg-indigo-50/90",
    iconColor: "text-indigo-600",
    accentColor: "#6366f1",
    customIconUrl: "/video-editing-illustration.svg",
    category: "creative",
    deliverables: [
      "Short-Form Viral Reels, TikToks & YouTube Shorts Editing",
      "High-Retention Sound Design, SFX & Motion Graphic Hooks",
      "Dynamic Subtitles, Captions & Fast-Paced Visual Storytelling",
      "YouTube Long-Form Videos & Podcast Multi-Cam Cuts",
      "High-Converting Video Ads & VSL (Video Sales Letters)"
    ],
    metrics: "3.8x Average Increase in Video Retention & Engagement",
    caseHighlight: "Edited 120+ viral video assets driving over 4.5M organic and paid views in 90 days."
  },
  {
    id: "content-creator",
    title: "Graphic Designing & Creatives",
    shortDesc: "High-impact visual identity, social media creatives, ad banners, and marketing collateral designed to maximize CTR.",
    fullDesc: "Comprehensive graphic design services for modern brands. From brand identity systems, logos, and marketing collateral to high-converting social media creatives, performance ad banners, and promotional artwork that elevate your visual presence.",
    iconName: "PenTool",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    accentColor: "#ea580c",
    category: "creative",
    deliverables: [
      "Brand Identity Systems, Logo Design & Style Guidelines",
      "High-Converting Performance Ad Creatives & Static Banners",
      "Social Media Post Templates & Carousel Designs",
      "Marketing Collateral, Pitch Decks & Sales Brochures",
      "Infographics, Vector Illustrations & Print Media"
    ],
    metrics: "+68% Higher Click-Through Rates (CTR) on Visual Creatives",
    caseHighlight: "Designed 250+ high-converting visual assets boosting brand engagement by 140%."
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDesc: "Engage your target audience, build authentic community, and drive organic inbound demand across major social networks.",
    fullDesc: "Holistic social media management across LinkedIn, Instagram, X (Twitter), and YouTube that builds an active, engaged community around your products and services, generating consistent inbound brand authority.",
    iconName: "Megaphone",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "#e11d48",
    customIconUrl: "/social-media-sphere.svg",
    category: "creative",
    deliverables: [
      "Strategic Content Calendar & Grid Architecture",
      "Active Community Management & Direct Engagement",
      "Influencer Outreach & Strategic Industry Collaborations",
      "Cross-Platform Social Listening & Trend Jacking",
      "Monthly Growth Analytics & Audience Insights"
    ],
    metrics: "+340% Follower Growth & 4.2x Organic Engagement Rate",
    caseHighlight: "Scaled tech startup LinkedIn page from 400 to 28,000 engaged B2B followers."
  },
  {
    id: "cro-analytics",
    title: "Analytics & CRO",
    shortDesc: "Maximize revenue per visitor with scientific conversion rate optimization (CRO) and multi-touch GA4 attribution.",
    fullDesc: "We analyze user behavior, heatmaps, drop-off funnels, and checkout flows to remove friction points, systematically testing variations that double your revenue without spending extra on ads.",
    iconName: "BarChart3",
    iconBg: "bg-blue-50/90",
    iconColor: "text-blue-600",
    accentColor: "#0284c7",
    customIconUrl: "/analytics-cro-illustration.svg",
    category: "analytics",
    deliverables: [
      "Heatmap & Session Recording Behavioral Analysis",
      "Landing Page A/B & Multivariate Testing",
      "Checkout & Lead Form Optimization",
      "GA4 Enhanced E-commerce Tracking Setup",
      "Looker Studio Live Executive Dashboard"
    ],
    metrics: "+38.4% Average Conversion Rate Increase",
    caseHighlight: "Unlocked $64,000/mo in additional revenue purely through checkout flow optimization."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "certified-experts",
    title: "Certified Google & Meta Ad Experts",
    description: "Our team of Google Premier and Meta Certified growth specialists build data-driven campaigns backed by over 7 years of performance marketing experience scaling leading brands.",
    iconName: "UserCheck",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    id: "roi-focused",
    title: "ROAS & Pipeline-Focused Execution",
    description: "We eliminate vanity metrics like clicks and impressions. Every rupee spent is tied directly to qualified B2B lead generation, e-commerce ROAS, and bottom-line revenue.",
    iconName: "Target",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: "transparent-reporting",
    title: "Transparent Live Reporting Dashboards",
    description: "Get 24/7 access to live Looker Studio dashboards tracking blended CAC, keyword rankings, conversion rate lifts, and ad attribution with zero hidden markups.",
    iconName: "FileSpreadsheet",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Senior Growth Strategists",
    description: "Work directly with dedicated senior campaign strategists via private Slack and WhatsApp channels for fast turnaround times, bi-weekly reviews, and proactive scaling.",
    iconName: "Headphones",
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export const STATS_RIBBON: StatItem[] = [
  {
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Happy Clients",
    icon: "Users"
  },
  {
    value: "750+",
    numericValue: 750,
    suffix: "+",
    label: "Projects Completed",
    icon: "ClipboardCheck"
  },
  {
    value: "5M+",
    numericValue: 5,
    suffix: "M+",
    label: "Leads Generated",
    icon: "TrendingUp"
  },
  {
    value: "7+",
    numericValue: 7,
    suffix: "+",
    label: "Years Experience",
    icon: "Award"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding your goals",
    description: "We understand your business, target audience, competitive landscape, and revenue goals through a deep marketing audit.",
    timeline: "Days 1 - 3",
    deliverables: ["Full Brand & Competitor Audit", "Target Persona Identification", "Baseline Metrics Mapping"],
    icon: "Search"
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Custom digital roadmap",
    description: "We create a customized digital strategy tailored to your industry, selecting high-yield channels and conversion funnels.",
    timeline: "Days 4 - 7",
    deliverables: ["Channel Mix Strategy", "Budget Allocation Matrix", "Keyword & Creative Master Plan"],
    icon: "FileText"
  },
  {
    number: "03",
    title: "Planning",
    subtitle: "Campaigns & content",
    description: "Plan campaigns, high-converting ad copy, landing page designs, and editorial content schedules that hook your audience.",
    timeline: "Days 8 - 12",
    deliverables: ["Ad Creative Assets", "Copywriting & Landing Pages", "Tracking Tag Verification"],
    icon: "Edit3"
  },
  {
    number: "04",
    title: "Execution",
    subtitle: "Precision launch",
    description: "We execute campaigns with precision across Google, Meta, SEO channels, and targeted email nurture sequences.",
    timeline: "Days 13 - 18",
    deliverables: ["Live Campaign Deployments", "A/B Split Test Activation", "Server-Side Tracking Validation"],
    icon: "Rocket"
  },
  {
    number: "05",
    title: "Optimization",
    subtitle: "Continuous scaling",
    description: "We optimize for better performance daily, pruning underperforming keywords/ads and scaling winning campaigns aggressively.",
    timeline: "Ongoing Daily",
    deliverables: ["Bid & Budget Adjustments", "Ad Creative Refreshes", "Landing Page CRO Testing"],
    icon: "Settings2"
  },
  {
    number: "06",
    title: "Reporting",
    subtitle: "Actionable insights",
    description: "We provide regular reports and performance insights with transparent ROI breakdowns and bi-weekly strategic roadmap reviews.",
    timeline: "Weekly & Monthly",
    deliverables: ["Live 24/7 Looker Studio Dashboard", "Weekly Performance Summary", "Strategic Executive Review"],
    icon: "BarChart3"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ecommerce-fashion",
    client: "LuxeWear Apparel",
    industry: "D2C E-Commerce",
    service: "Meta Ads & CRO",
    heroMetric: "5.8x ROAS",
    metricLabel: "Scaled to $280K/mo",
    summary: "Overhauled top-of-funnel creative testing and restructured retargeting audiences to achieve profitable scale during Q4.",
    roas: "5.8x",
    leadGrowth: "+410%",
    trafficGrowth: "+320%"
  },
  {
    id: "b2b-saas",
    client: "CloudMetrics AI",
    industry: "B2B SaaS / Enterprise",
    service: "Google Ads & Technical SEO",
    heroMetric: "+340%",
    metricLabel: "Qualified Demo Requests",
    summary: "Built high-intent keyword capture funnels and fixed critical indexation bottlenecks, driving 3.4x more enterprise demo bookings.",
    roas: "4.2x",
    leadGrowth: "+340%",
    trafficGrowth: "+195%"
  },
  {
    id: "healthcare-clinic",
    client: "Apex Dental Centers",
    industry: "Healthcare & Local Services",
    service: "Local SEO & Google Search",
    heroMetric: "1,240+",
    metricLabel: "Monthly Patient Inquiries",
    summary: "Ranked #1 in Google Maps Local 3-Pack across 8 suburban branches, dropping cost per patient lead by 52%.",
    roas: "6.1x",
    leadGrowth: "+265%",
    trafficGrowth: "+480%"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rahul Kumar",
    role: "Chief Marketing Officer",
    company: "Questalious Private Limited",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Working with MarketingGuys made a real difference for our business. They took the time to understand what we needed instead of giving us a one-size-fits-all strategy. Within a few weeks, we started seeing better-quality leads and a noticeable improvement in our results. The team is honest, responsive, and genuinely cares about the work.",
    result: "4.9x ROAS Achieved"
  },
  {
    id: "test-2",
    name: "Samiksha",
    role: "",
    company: "",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    content: "From the very beginning, the MarketingGuys team felt like an extension of our own team. They listened to our ideas, explained everything clearly, and always kept us updated. Our online sales have grown steadily since we started working together, and I really appreciate how supportive and approachable everyone has been.",
    result: "+620% Revenue Scale"
  },
  {
    id: "test-3",
    name: "Vinay",
    role: "Head of Growth",
    company: "",
    avatar: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    content: "What I liked most about MarketingGuys was that they looked beyond just running ads. They understood our customers, our website, and the complete journey from first click to conversion. Their suggestions were practical and easy to implement, and we’ve seen a genuine improvement in our leads and conversions. It feels like they’re truly invested in our growth.",
    result: "1,800+ Enterprise Leads"
  },
  {
    id: "test-4",
    name: "My Travel Plan",
    role: "Founder & CEO",
    company: "",
    avatar: "/mytravel.jpeg",
    rating: 5,
    content: "I have been working with Marketing Guys for the last 2 years, and it has been a great experience. The team is creative, supportive and always understands what we need. They have been consistent with their work and have helped us with our marketing in many ways. Really happy to have them as our marketing partner.",
    result: "+340% Organic Traffic"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How quickly can I expect to see results from digital marketing campaigns?",
    answer: "For Paid Ads (Google Ads & Meta Ads), you will start seeing targeted traffic and inbound leads within the first 48 to 72 hours of campaign launch. For SEO and Organic Content Marketing, substantial keyword ranking increases on Google and compounding organic traffic growth typically gain strong momentum within 60 to 90 days.",
    category: "Timelines"
  },
  {
    question: "Do you require long-term lock-in contracts?",
    answer: "No! We believe in earning your partnership every single month. While we recommend a 3-month initial runway to allow algorithms to optimize and scale, all our retainer agreements operate on transparent month-to-month terms with a simple 30-day notice.",
    category: "Agreements"
  },
  {
    question: "How will I track my campaign performance, ROAS, and ROI?",
    answer: "You receive access to a private, 24/7 live Looker Studio reporting dashboard integrated with your Google Ads, Meta Ads, and GA4 accounts. In addition, your dedicated account strategist provides weekly executive video updates and bi-weekly strategic review calls.",
    category: "Reporting"
  },
  {
    question: "What makes Marketing Guys different from other digital marketing agencies?",
    answer: "Unlike traditional agencies that focus on vanity metrics like impressions or clicks, Marketing Guys combines quantitative performance marketing with in-house creative production. We handle everything under one roof—from high-retention video editing and graphic design to high-converting Google & Meta Ads, technical SEO, and CRO—delivering qualified leads and measurable ROAS with zero junior hand-offs.",
    category: "Company"
  },
  {
    question: "What is the minimum recommended monthly ad budget?",
    answer: "We typically work with businesses investing anywhere from ₹25,000/month to ₹1,00,000+/month in paid ad spend. We tailor campaign pacing, audience testing matrices, and negative keyword sculpting to match your exact growth targets and unit economics.",
    category: "Budget"
  }
];
