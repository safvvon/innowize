export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
}

export const SITE_CONFIG = {
  domain: 'https://innowize.vercel.app',
  brandName: 'Innowize Digital',
  alternateBrandName: 'Innowize',
  defaultOgImage: 'https://innowize.vercel.app/images/iw-logo.png',
  locale: 'en_US',
  organization: {
    '@type': 'Organization',
    '@id': 'https://innowize.vercel.app/#organization',
    name: 'Innowize Digital',
    alternateName: 'Innowize',
    url: 'https://innowize.vercel.app',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://innowize.vercel.app/#logo',
      url: 'https://innowize.vercel.app/images/iw-logo.png',
      caption: 'Innowize Digital Logo',
    },
    description:
      'Innowize Digital is a premier creative digital studio specializing in cinematic video production, digital marketing, AI creative tech, AR/VR, and live streaming experiences.',
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
  },
};

export const STATIC_PAGES_META: Record<string, PageMetadata> = {
  '/': {
    title: 'Innowize Digital | Creative Studio & Next-Gen Digital Experiences',
    description:
      'Innowize Digital is a Singapore-based creative digital studio crafting cinematic video productions, high-impact brand experiences, and cutting-edge visual storytelling.',
    canonical: 'https://innowize.vercel.app/',
    ogType: 'website',
  },
  '/about': {
    title: 'About Innowize Digital | Creative Studio, Mission & Vision',
    description:
      'Discover Innowize Digital — an innovative creative studio fusing cinema-grade visual storytelling with next-gen technology to move audiences and build bold brands.',
    canonical: 'https://innowize.vercel.app/about',
    ogType: 'website',
  },
  '/services': {
    title: 'Creative & Digital Production Services | Innowize Digital',
    description:
      'Explore end-to-end creative digital solutions from Innowize Digital: Video Production, Digital Marketing, Event Production, AI Creative Tech, AR/VR, and Live Streaming.',
    canonical: 'https://innowize.vercel.app/services',
    ogType: 'website',
  },
  '/work': {
    title: 'Featured Portfolio & Case Studies | Innowize Digital',
    description:
      'Browse Innowize Digital’s portfolio of cinematic commercials, short-form reels, brand films, and professional photography collections.',
    canonical: 'https://innowize.vercel.app/work',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Innowize Digital | Start Your Project in Singapore',
    description:
      'Get in touch with Innowize Digital in Singapore for cinematic video production, digital marketing, AI creative tech, and spatial experiences.',
    canonical: 'https://innowize.vercel.app/contact',
    ogType: 'website',
  },
};

export const SERVICES_META: Record<string, PageMetadata> = {
  'video-production': {
    title: 'Video Production Services | Innowize Digital',
    description:
      'Cinematic storytelling from concept to final cut. Commercials, brand films, and high-impact video content that commands attention by Innowize Digital Singapore.',
    canonical: 'https://innowize.vercel.app/services/video-production',
    ogType: 'website',
  },
  'digital-marketing': {
    title: 'Digital Marketing & Growth Campaigns | Innowize Digital',
    description:
      'Data-driven campaigns, performance marketing, and strategic digital distribution amplifying your brand presence and accelerating growth.',
    canonical: 'https://innowize.vercel.app/services/digital-marketing',
    ogType: 'website',
  },
  'event-production': {
    title: 'Event Production & Live AV Engineering | Innowize Digital',
    description:
      'End-to-end event production: corporate summits, stage lighting design, broadcast sound engineering, and immersive experiential activations.',
    canonical: 'https://innowize.vercel.app/services/event-production',
    ogType: 'website',
  },
  'ai-creative-tech': {
    title: 'AI Creative Tech & Generative Motion | Innowize Digital',
    description:
      'Generative visual synthesis, neural VFX motion design, and algorithmic video engineering for forward-thinking creative brands.',
    canonical: 'https://innowize.vercel.app/services/ai-creative-tech',
    ogType: 'website',
  },
  'ar-vr': {
    title: 'AR / VR & Spatial Computing Experiences | Innowize Digital',
    description:
      'Immersive 360° spatial video, augmented reality filters, and interactive 3D virtual showrooms built for the spatial computing era.',
    canonical: 'https://innowize.vercel.app/services/ar-vr',
    ogType: 'website',
  },
  'live-streaming': {
    title: 'Live Streaming & Broadcast Production | Innowize Digital',
    description:
      'Professional multi-camera broadcast streaming, hybrid virtual productions, and low-latency interactive live summits.',
    canonical: 'https://innowize.vercel.app/services/live-streaming',
    ogType: 'website',
  },
};

export const NOT_FOUND_META: PageMetadata = {
  title: 'Page Not Found (404) | Innowize Digital',
  description:
    'The page you requested could not be found. Explore Innowize Digital’s creative services, work, or contact our team.',
  canonical: 'https://innowize.vercel.app/404',
  noindex: true,
};
