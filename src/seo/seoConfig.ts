export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
}

export const SITE_CONFIG = {
  domain: 'https://www.innowizedigital.com',
  brandName: 'Innowize Digital',
  alternateBrandName: 'Innowize',
  defaultOgImage: 'https://www.innowizedigital.com/images/iw-logo.png',
  locale: 'en_US',
  organization: {
    '@type': 'Organization',
    '@id': 'https://www.innowizedigital.com/#organization',
    name: 'Innowize Digital',
    alternateName: 'Innowize',
    url: 'https://www.innowizedigital.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://www.innowizedigital.com/#logo',
      url: 'https://www.innowizedigital.com/images/iw-logo.png',
      caption: 'Innowize Digital Logo',
    },
    description:
      'Innowize Digital is a premier creative digital studio specializing in web design, UI/UX, website development, cinematic video production, AI creative tech, digital marketing, and spatial experiences.',
    email: 'abinsiby@innowizedigital.com',
    telephone: '+65 8080 8824',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressCountry: 'SG',
    },
    sameAs: [
      'https://www.instagram.com/innowizedigital',
      'https://www.linkedin.com/company/innowizedidital/',
      'https://www.youtube.com/channel/UCV37EAmAcRPr0pTo4CHKUVA',
    ],
    knowsAbout: [
      'Web Design',
      'UI/UX Design',
      'Website Development',
      'Branding & Visual Identity',
      'AI Video Production',
      'Cinematic Video Production',
      'Digital Marketing',
      'Event Production',
      'AR/VR Spatial Computing',
      'Live Streaming',
    ],
  },
};

export const STATIC_PAGES_META: Record<string, PageMetadata> = {
  '/': {
    title: 'Innowize Digital | Creative Digital Agency for Web, UI/UX & Digital Experiences',
    description:
      'Innowize Digital is a Singapore-based creative digital agency crafting modern web design, UI/UX, cinematic video production, AI creative tech, and high-impact digital experiences.',
    canonical: 'https://www.innowizedigital.com/',
    ogType: 'website',
  },
  '/about': {
    title: 'About Innowize Digital | Creative Studio, Mission, Leadership & Team',
    description:
      'Discover Innowize Digital — an innovative creative digital studio fusing modern web architecture, cinema-grade visual storytelling, and emerging technology in Singapore.',
    canonical: 'https://www.innowizedigital.com/about',
    ogType: 'website',
  },
  '/services': {
    title: 'Digital & Creative Agency Services | Innowize Digital',
    description:
      'Explore Innowize Digital’s comprehensive capabilities: Web Design, UI/UX, Web Development, Branding, AI Video Production, Digital Marketing, Events, and Spatial Media.',
    canonical: 'https://www.innowizedigital.com/services',
    ogType: 'website',
  },
  '/work': {
    title: 'Featured Portfolio & Case Studies | Innowize Digital',
    description:
      'Browse Innowize Digital’s portfolio of cinematic commercials, short-form reels, digital brand experiences, and professional photography collections.',
    canonical: 'https://www.innowizedigital.com/work',
    ogType: 'website',
  },
  '/blog': {
    title: 'Insights & Thought Leadership on Web, AI & Design | Innowize Digital',
    description:
      'Read in-depth guides, technical breakdowns, and design perspectives on web design, UI/UX architecture, generative AI video, and high-performance digital marketing.',
    canonical: 'https://www.innowizedigital.com/blog',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Innowize Digital | Start Your Digital Project in Singapore',
    description:
      'Get in touch with Innowize Digital to discuss web design, UI/UX, website development, video production, AI video tech, or digital marketing in Singapore and worldwide.',
    canonical: 'https://www.innowizedigital.com/contact',
    ogType: 'website',
  },
};

export const SERVICES_META: Record<string, PageMetadata> = {
  'web-design': {
    title: 'Web Design Services | Modern, Responsive & High-Converting | Innowize Digital',
    description:
      'Bespoke, conversion-driven web design services by Innowize Digital. Responsive layouts, intentional typography, interactive micro-animations, and custom design systems.',
    canonical: 'https://www.innowizedigital.com/services/web-design',
    ogType: 'website',
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services | Digital Product Interfaces & Experience | Innowize Digital',
    description:
      'Human-centered UI/UX design for web apps, SaaS platforms, and mobile apps. In-depth user research, wireframing, clickable Figma prototypes, and atomic design systems.',
    canonical: 'https://www.innowizedigital.com/services/ui-ux-design',
    ogType: 'website',
  },
  'web-development': {
    title: 'Website Development Services | High-Performance & Core Web Vitals | Innowize Digital',
    description:
      'Engineering lightning-fast, search-optimized web applications with React, TypeScript, Next.js, and Vite. Strict accessibility, sub-second LCP, and technical SEO excellence.',
    canonical: 'https://www.innowizedigital.com/services/web-development',
    ogType: 'website',
  },
  'branding': {
    title: 'Branding & Visual Identity Design Services | Innowize Digital',
    description:
      'Strategic brand identity design, logo architecture, typography systems, and comprehensive brand guidelines that position your company as an undisputed market leader.',
    canonical: 'https://www.innowizedigital.com/services/branding',
    ogType: 'website',
  },
  'ai-video': {
    title: 'AI Video & Creative Tech Services | Generative Motion & VFX | Innowize Digital',
    description:
      'Pioneering generative AI video production, neural motion design, synthetic media, and algorithmic VFX engineered for forward-thinking brand narratives.',
    canonical: 'https://www.innowizedigital.com/services/ai-video',
    ogType: 'website',
  },
  'ai-creative-tech': {
    title: 'AI Video & Creative Tech Services | Generative Motion & VFX | Innowize Digital',
    description:
      'Pioneering generative AI video production, neural motion design, synthetic media, and algorithmic VFX engineered for forward-thinking brand narratives.',
    canonical: 'https://www.innowizedigital.com/services/ai-video',
    ogType: 'website',
  },
  'video-production': {
    title: 'Video Production Services | Cinema Commercials & Brand Films | Innowize Digital',
    description:
      'Cinema-grade video production from concept to final cut. Master color grading, high-impact commercials, brand documentaries, and 9:16 vertical reels in Singapore.',
    canonical: 'https://www.innowizedigital.com/services/video-production',
    ogType: 'website',
  },
  'digital-marketing': {
    title: 'Digital Marketing & Growth Campaigns | Performance & Social | Innowize Digital',
    description:
      'Data-driven multi-channel advertising, performance marketing campaigns, and strategic content distribution that turn impressions into high-value customer acquisitions.',
    canonical: 'https://www.innowizedigital.com/services/digital-marketing',
    ogType: 'website',
  },
  'event-production': {
    title: 'Event Production & AV Engineering Services | Corporate Summits | Innowize Digital',
    description:
      'Turnkey physical and hybrid event production: corporate summits, intelligent stage lighting, broadcast acoustic engineering, and 4K multi-camera video capture.',
    canonical: 'https://www.innowizedigital.com/services/event-production',
    ogType: 'website',
  },
  'ar-vr': {
    title: 'AR / VR & Spatial Computing Services | 3D Web & Virtual Worlds | Innowize Digital',
    description:
      'Immersive 360° spatial video, interactive 3D web showrooms, and custom augmented reality filters built for the spatial computing and WebXR era.',
    canonical: 'https://www.innowizedigital.com/services/ar-vr',
    ogType: 'website',
  },
  'live-streaming': {
    title: 'Live Streaming & Broadcast Production Services | Multi-Camera | Innowize Digital',
    description:
      'Television-grade multi-camera live streaming, virtual summits, and hybrid broadcast production with bonded cellular uplinks and zero latency.',
    canonical: 'https://www.innowizedigital.com/services/live-streaming',
    ogType: 'website',
  },
};

export const NOT_FOUND_META: PageMetadata = {
  title: 'Page Not Found (404) | Innowize Digital',
  description:
    'The page you requested could not be found. Explore Innowize Digital’s creative services, work, or contact our team.',
  canonical: 'https://www.innowizedigital.com/404',
  noindex: true,
};
