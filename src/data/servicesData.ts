import { Video, TrendingUp, Calendar, Cpu, Glasses, Radio, LucideIcon } from 'lucide-react';

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    id: 'video-production',
    title: 'Video Production',
    desc: 'Cinematic storytelling from concept to final cut. Commercials, brand films, and high-impact content that commands attention.',
    icon: Video,
    features: ['Commercials & Brand Films', 'Cinematography & Color Grading', 'Documentary Storytelling'],
  },
  {
    number: '02',
    id: 'digital-marketing',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns and strategic distribution that amplify your digital presence, turning impressions into dedicated brand advocates.',
    icon: TrendingUp,
    features: ['Social Media Campaigns', 'Performance Marketing & Ads', 'Growth Strategy & Analytics'],
  },
  {
    number: '03',
    id: 'event-production',
    title: 'Event Production',
    desc: 'End-to-end event production from concept to execution. Corporate summits, stage lighting, broadcast sound, and immersive on-ground experiences.',
    icon: Calendar,
    features: ['Corporate Summits & Galas', 'Stage & Lighting Design', 'Live AV Engineering'],
  },
  {
    number: '04',
    id: 'ai-creative-tech',
    title: 'AI Creative Tech',
    desc: 'Next-generation generative AI visual synthesis, neural motion design, automated post-production, and algorithmic visual experiences.',
    icon: Cpu,
    features: ['Generative Visual Synthesis', 'Automated Post-Production', 'Neural VFX & Motion'],
  },
  {
    number: '05',
    id: 'ar-vr',
    title: 'AR / VR & Spatial',
    desc: 'Immersive 360° spatial content, augmented reality filters, virtual showrooms, and interactive environments built for spatial computing.',
    icon: Glasses,
    features: ['360° Spatial Video', 'Augmented Reality Filters', 'Virtual Showrooms & 3D Worlds'],
  },
  {
    number: '06',
    id: 'live-streaming',
    title: 'Live Streaming',
    desc: 'Professional multi-camera broadcast streaming, live summits, and hybrid virtual productions engineered for zero latency and broadcast fidelity.',
    icon: Radio,
    features: ['Multi-Camera Live Setup', 'Hybrid & Virtual Broadcasts', 'Real-Time Global Interaction'],
  },
];
