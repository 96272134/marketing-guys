export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  category: 'paid' | 'seo' | 'creative' | 'analytics' | 'web';
  deliverables: string[];
  metrics: string;
  caseHighlight: string;
  customIconUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  deliverables: string[];
  icon: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  heroMetric: string;
  metricLabel: string;
  summary: string;
  roas: string;
  leadGrowth: string;
  trafficGrowth: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProposalFormState {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  website: string;
  service: string;
  monthlyBudget: string;
  message: string;
}
