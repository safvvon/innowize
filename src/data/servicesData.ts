import {
  Layout,
  Palette,
  Code2,
  Video,
  Sparkles,
  TrendingUp,
  Calendar,
  Glasses,
  Radio,
  LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  shortTitle?: string;
  desc: string;
  category: 'Design & Web' | 'Media & Production' | 'Emerging Tech';
  icon: LucideIcon;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    id: 'web-design',
    title: 'Web Design',
    shortTitle: 'Web Design',
    desc: 'Award-winning, responsive website design built for conversion, storytelling, and unforgettable first impressions across desktop and mobile.',
    category: 'Design & Web',
    icon: Layout,
    features: [
      'Responsive & Mobile-First Design',
      'Interactive Design & Micro-Animations',
      'Conversion-Optimized Landing Pages',
      'Design Systems & Style Guides',
    ],
  },
  {
    number: '02',
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX',
    desc: 'Human-centered user experience and interface architecture for web apps, mobile applications, and digital platforms that reduce friction and accelerate adoption.',
    category: 'Design & Web',
    icon: Palette,
    features: [
      'User Research & Wireframing',
      'Figma Prototypes & Design Systems',
      'UX Audits & Usability Testing',
      'Cross-Platform UI Standards',
    ],
  },
  {
    number: '03',
    id: 'web-development',
    title: 'Website Development',
    shortTitle: 'Web Dev',
    desc: 'Lightning-fast, search-optimized web applications and corporate websites engineered with modern frontend frameworks, strict accessibility, and Core Web Vitals excellence.',
    category: 'Design & Web',
    icon: Code2,
    features: [
      'Modern React, Next.js & TypeScript',
      'Technical SEO & Core Web Vitals Optimization',
      'Headless CMS & API Integrations',
      'PWA & Cross-Browser Performance',
    ],
  },
  {
    number: '04',
    id: 'branding',
    title: 'Branding & Identity',
    shortTitle: 'Branding',
    desc: 'Distinctive visual identities, brand systems, typography, and narrative frameworks that set modern businesses apart in crowded global markets.',
    category: 'Design & Web',
    icon: Sparkles,
    features: [
      'Brand Strategy & Positioning',
      'Logo & Visual Identity Systems',
      'Typography & Color Science',
      'Brand Guidelines & Asset Kits',
    ],
  },
  {
    number: '05',
    id: 'ai-video',
    title: 'AI Video & Creative Tech',
    shortTitle: 'AI Video',
    desc: 'Cutting-edge generative AI visual synthesis, neural motion graphics, automated post-production, and synthetic media engineered for futuristic brand narratives.',
    category: 'Emerging Tech',
    icon: Sparkles,
    features: [
      'Generative AI Video Production',
      'Neural VFX & Style Transfer',
      'Automated Video Pipelines',
      'Algorithmic Motion Graphics',
    ],
  },
  {
    number: '06',
    id: 'video-production',
    title: 'Video Production',
    shortTitle: 'Video',
    desc: 'Cinema-grade storytelling from pre-production to master color grading. Commercials, brand films, showreels, and short-form reels that command attention.',
    category: 'Media & Production',
    icon: Video,
    features: [
      'Commercials & Brand Documentaries',
      'Cinema Camera Packages & 4K/6K',
      'Master Color Grading & Sound Design',
      'High-Impact 9:16 Social Reels',
    ],
  },
  {
    number: '07',
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Marketing',
    desc: 'Performance-driven digital marketing campaigns, creative content strategy, and multi-channel distribution that turn impressions into high-value customer relationships.',
    category: 'Design & Web',
    icon: TrendingUp,
    features: [
      'Social Media Campaign Strategy',
      'Performance Ads & Creative Testing',
      'Search & Organic Growth Strategy',
      'Analytics & Conversion Tracking',
    ],
  },
  {
    number: '08',
    id: 'event-production',
    title: 'Event Production',
    shortTitle: 'Events',
    desc: 'End-to-end physical and hybrid event production: corporate summits, stage lighting, broadcast sound engineering, and immersive experiential activations.',
    category: 'Media & Production',
    icon: Calendar,
    features: [
      'Corporate Summits & Keynotes',
      'Stage, Lighting & Screen Design',
      'On-Ground AV Engineering',
      'Live Event Direction & Capture',
    ],
  },
  {
    number: '09',
    id: 'ar-vr',
    title: 'AR / VR & Spatial',
    shortTitle: 'Spatial 3D',
    desc: 'Immersive 360° spatial video, augmented reality interactive filters, virtual showrooms, and 3D web environments built for the next generation of spatial computing.',
    category: 'Emerging Tech',
    icon: Glasses,
    features: [
      '360° Immersive Spatial Video',
      'Web-Based 3D Showrooms & Three.js',
      'Social AR Face & World Filters',
      'Interactive Virtual Experiences',
    ],
  },
  {
    number: '10',
    id: 'live-streaming',
    title: 'Live Streaming',
    shortTitle: 'Streaming',
    desc: 'Ultra-low latency, multi-camera live broadcast production and hybrid virtual summits engineered for worldwide reach and television-grade broadcast fidelity.',
    category: 'Media & Production',
    icon: Radio,
    features: [
      'Multi-Camera Live Switching & Graphics',
      'Hybrid & Virtual Broadcast Summits',
      'Redundant High-Bandwidth Uplinks',
      'Global CDN & Interactive Q&A',
    ],
  },
];
