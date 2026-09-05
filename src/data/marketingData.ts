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
  agencyHandle: "marketingguysagencynoida",
  location: "Noida, Uttar Pradesh, India",
  whatsappNumber: "+919910536796",
  socials: {
    facebook: "https://www.facebook.com/share/19bpT6Ze1x/",
    instagram: "https://www.instagram.com/marketingguysagencynoida?igsi=N2tkOTN5ZDNrdjdq",
    linkedin: "https://www.linkedin.com/in/marketing-guys-3b3b0a431",
    youtube: "https://www.youtube.com/@Marketingguysagencynoida"
  },
  foundedYear: "2020",
  experienceYears: "7+",
  rating: 4.9,
  reviewsCount: 380,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO Optimization",
    shortDesc: "Improve your website ranking, increase organic traffic and grow your business with powerful SEO strategies.",
    fullDesc: "We deploy full-funnel search engine optimization covering technical architecture, semantic keyword clusters, on-page optimization, and high-domain-authority backlink building that keeps you on Page 1 of Google.",
    iconName: "Search",
    iconBg: "bg-sky-50/90",
    iconColor: "text-sky-600",
    accentColor: "#0284c7",
    customIconUrl: "/seo-growth-bars.svg",
    category: "seo",
    deliverables: [
      "Comprehensive 120-point Technical SEO Audit",
      "Competitor Keyword Gap Analysis",
      "High-Intent Semantic Content Strategy",
      "Authoritative White-Hat Link Building",
      "Google Search Console & Core Web Vitals Optimization"
    ],
    metrics: "+280% Average Organic Traffic Growth in 90 Days",
    caseHighlight: "Ranked #1 for 45+ competitive keywords for a national SaaS client."
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC)",
    shortDesc: "Get high-quality leads & sales with targeted Google Ads campaigns that deliver maximum ROI.",
    fullDesc: "Precision Pay-Per-Click advertising campaigns designed to capture users at the exact moment of high buying intent across Google Search, Performance Max, Display, and YouTube.",
    iconName: "Target",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    accentColor: "#2563eb",
    customIconUrl: "/google-ads-logo.svg",
    category: "paid",
    deliverables: [
      "Negative Keyword Sculpting & Intent Matching",
      "High-Converting Responsive Search Ads",
      "Smart Bidding Strategy & ROAS Target Tuning",
      "PMax Multi-Asset Creative Optimization",
      "Real-time Lead & Conversion Tracking Setup"
    ],
    metrics: "4.8x - 7.2x Average Return on Ad Spend (ROAS)",
    caseHighlight: "Generated 1,420 qualified B2B leads at $14.20 CPA in 60 days."
  },
  {
    id: "meta-ads",
    title: "Meta Ads (FB & IG)",
    shortDesc: "Reach the right audience and increase conversions with result-driven Facebook & Instagram Ads.",
    fullDesc: "Hyper-targeted social ad campaigns combining thumb-stopping creative hooks, emotional copy, lookalike audiences, and dynamic retargeting to convert scrollers into loyal customers.",
    iconName: "Infinity",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    accentColor: "#0064e0",
    customIconUrl: "/meta-logo.svg",
    category: "paid",
    deliverables: [
      "Creative Ad Hook Testing & Video Angle Matrix",
      "Custom & Lookalike Audience Modeling",
      "Omni-Channel Retargeting Funnel Design",
      "CBO / ABO Budget Allocation Testing",
      "Meta Conversions API (CAPI) Server Tracking"
    ],
    metrics: "5.4x Average Return on Ad Spend across E-Commerce",
    caseHighlight: "Scaled direct-to-consumer brand from $15k/mo to $140k/mo ad spend profitably."
  },
  {
    id: "wordpress",
    title: "WordPress & Web Dev",
    shortDesc: "We build fast, responsive and SEO-friendly WordPress websites that convert visitors into customers.",
    fullDesc: "Modern, blazing-fast, mobile-first websites and landing pages engineered specifically for high conversion rates, seamless user experience, and lightning-speed Google PageSpeed scores.",
    iconName: "Globe",
    iconBg: "bg-teal-50/80",
    iconColor: "text-teal-700",
    accentColor: "#0d9488",
    customIconUrl: "/web-dev-illustration.svg",
    category: "web",
    deliverables: [
      "Custom Tailored UI/UX & Responsive Layouts",
      "Sub-1-Second Load Times (95+ PageSpeed Scores)",
      "Built-in Conversion Funnels & Heatmap Integration",
      "Full On-Page SEO Architecture & Schema Markup",
      "Easy CMS Backend & Security Hardening"
    ],
    metrics: "+42% Average Lift in Visitor-to-Lead Conversion Rate",
    caseHighlight: "Redesigned enterprise legal portal resulting in 185% increase in form submissions."
  },
  {
    id: "blogs",
    title: "Video Editing",
    shortDesc: "High-retention video editing, Reels, TikToks & YouTube cuts engineered to boost engagement and conversions.",
    fullDesc: "Professional video editing for ambitious brands, creators, and advertisers. From viral short-form hooks (Reels, TikTok, Shorts) to high-production YouTube videos, VSLs, and dynamic ad creatives designed to maximize watch time and conversion rates.",
    iconName: "Video",
    iconBg: "bg-indigo-50/90",
    iconColor: "text-indigo-600",
    accentColor: "#6366f1",
    customIconUrl: "/video-editing-illustration.svg",
    category: "creative",
    deliverables: [
      "Short-Form Viral Reels, TikToks & YouTube Shorts",
      "High-Retention Sound Design, SFX & Motion Graphics",
      "Dynamic Subtitles, Captions & Visual Hook Editing",
      "YouTube Long-Form Videos & Podcast Multi-Cam Cuts",
      "High-Converting Video Ads & VSL (Video Sales Letters)"
    ],
    metrics: "3.8x Average Increase in Video Retention & Engagement",
    caseHighlight: "Edited 120+ viral video assets driving over 4.5M organic and paid views in 90 days."
  },
  {
    id: "content-creator",
    title: "Graphic Designing",
    shortDesc: "High-impact visual identity, brand graphics, social media posts & ad creatives that captivate your audience.",
    fullDesc: "Comprehensive graphic design services for modern brands. From brand identity systems, logos, and marketing collateral to high-converting social media creatives, ad banners, and promotional artwork that elevate your visual presence.",
    iconName: "PenTool",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    accentColor: "#ea580c",
    category: "creative",
    deliverables: [
      "Brand Identity, Logo Design & Style Guides",
      "High-Converting Ad Creatives & Static Banners",
      "Social Media Post Templates & Carousel Designs",
      "Marketing Collateral, Pitch Decks & Brochures",
      "Infographics, Vector Illustrations & Print Media"
    ],
    metrics: "+68% Higher Click-Through Rates (CTR) on Visual Creatives",
    caseHighlight: "Designed 250+ high-converting visual assets boosting brand engagement by 140%."
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDesc: "Build your brand, engage your target audience and grow your business across all major social platforms.",
    fullDesc: "Holistic social media management across LinkedIn, Instagram, X (Twitter), and YouTube that builds an active, engaged community around your products and services.",
    iconName: "Megaphone",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "#e11d48",
    customIconUrl: "/social-media-sphere.svg",
    category: "creative",
    deliverables: [
      "Strategic Content Calendar & Grid Planning",
      "Active Community Management & Direct Engagement",
      "Influencer Outreach & Strategic Collaborations",
      "Cross-Platform Social Listening & Trend Jacking",
      "Monthly Growth Analytics & Audience Insights"
    ],
    metrics: "+340% Follower Growth & 4.2x Organic Engagement Rate",
    caseHighlight: "Scaled tech startup LinkedIn page from 400 to 28,000 engaged B2B followers."
  },
  {
    id: "cro-analytics",
    title: "Analytics & CRO",
    shortDesc: "Maximize revenue per visitor with scientific conversion rate testing and multi-touch attribution.",
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
    title: "Certified Experts",
    description: "Our team of certified professionals deliver top quality results backed by Google Partner & Meta Certified status.",
    iconName: "UserCheck",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    id: "roi-focused",
    title: "ROI Focused",
    description: "We focus on strategies that deliver maximum return on investment. Every dollar spent is strictly tracked to revenue.",
    iconName: "Target",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: "transparent-reporting",
    title: "Transparent Reporting",
    description: "Get clear reports and real-time updates on campaign performance with 24/7 client dashboards and zero hidden metrics.",
    iconName: "FileSpreadsheet",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "We provide 24/7 support and a dedicated account manager with direct Slack and WhatsApp communication channels.",
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
    question: "How quickly can I expect to see results from digital marketing?",
    answer: "For Paid Ads (Google Ads & Meta Ads), you will start seeing traffic and inbound leads within the first 48 to 72 hours of launch. For SEO and Content Marketing, substantial organic ranking increases and compounding traffic growth typically begin showing significant momentum within 60 to 90 days.",
    category: "Timelines"
  },
  {
    question: "Do you require long-term lock-in contracts?",
    answer: "No! We believe in earning your partnership every single month. While we recommend a 3-month initial runway to allow strategies to optimize and scale, all our retainer agreements operate on transparent month-to-month terms with a simple 30-day notice.",
    category: "Agreements"
  },
  {
    question: "How will I track my campaign performance and ROI?",
    answer: "You receive access to a private, 24/7 live Looker Studio reporting dashboard integrated with your Google Ads, Meta Ads, and GA4 accounts. In addition, your dedicated account strategist provides weekly executive video updates and bi-weekly strategic review calls.",
    category: "Reporting"
  },
  {
    question: "What makes MarketingGuys different from other marketing agencies?",
    answer: "Unlike traditional agencies that focus on vanity metrics like 'impressions' or 'clicks', MarketingGuys combines cutting-edge AI workflows with senior performance marketers. We handle everything under one roof—from high-retention video production and graphic design to high-converting paid ads and CRO—delivering qualified leads, measurable ROI, transparent real-time reporting, and zero junior hand-offs.",
    category: "Company"
  },
  {
    question: "What is the minimum recommended monthly ad budget?",
    answer: "We typically work with businesses investing anywhere from ₹25,000/month to ₹100,000+/month in ad spend. We tailor campaign pacing and audience testing matrices to match your growth targets and unit economics.",
    category: "Budget"
  }
];
