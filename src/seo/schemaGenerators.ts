import { SITE_CONFIG, SERVICES_META } from './seoConfig';
import { servicesData } from '../data/servicesData';

export const getOrganizationSchema = () => SITE_CONFIG.organization;

export const getWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.domain}/#website`,
  url: SITE_CONFIG.domain,
  name: SITE_CONFIG.brandName,
  alternateName: SITE_CONFIG.alternateBrandName,
  description: SITE_CONFIG.organization.description,
  publisher: {
    '@id': `${SITE_CONFIG.domain}/#organization`,
  },
  inLanguage: 'en',
});

export const getBreadcrumbSchema = (
  items: { name: string; url: string }[],
  pageUrl: string
) => ({
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getShowreelVideoSchema = () => ({
  '@type': 'VideoObject',
  '@id': `${SITE_CONFIG.domain}/#showreel`,
  name: 'Innowize Digital Official Showreel',
  description:
    'Showcase of cinematic visual storytelling, digital experiences, motion design, and high-impact productions by Innowize Digital.',
  thumbnailUrl: [
    `${SITE_CONFIG.domain}/images/hero_3d_cinematographer.jpg`,
    `${SITE_CONFIG.domain}/images/iw-logo.png`,
  ],
  uploadDate: '2025-01-01T00:00:00+08:00',
  contentUrl: `${SITE_CONFIG.domain}/showreel.mp4`,
  embedUrl: `${SITE_CONFIG.domain}/showreel.mp4`,
  publisher: {
    '@id': `${SITE_CONFIG.domain}/#organization`,
  },
});

export const getServicesSchema = (serviceId?: string) => {
  const targetServices = serviceId
    ? servicesData.filter((s) => s.id === serviceId)
    : servicesData;

  return targetServices.map((service) => {
    const meta = SERVICES_META[service.id];
    return {
      '@type': 'Service',
      '@id': `${SITE_CONFIG.domain}/services/${service.id}#service`,
      name: service.title,
      description: meta?.description || service.desc,
      serviceType: service.title,
      provider: {
        '@id': `${SITE_CONFIG.domain}/#organization`,
      },
      url: `${SITE_CONFIG.domain}/services/${service.id}`,
      areaServed: {
        '@type': 'Country',
        name: 'Singapore',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} Offerings`,
        itemListElement: service.features.map((feat) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feat,
          },
        })),
      },
    };
  });
};

export const generateGraphSchema = (pathname: string) => {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const pageUrl = `${SITE_CONFIG.domain}${normalizedPath === '/' ? '' : normalizedPath}`;

  const graph: object[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
  ];

  // Homepage: Include WebSite, WebPage, Showreel VideoObject
  if (normalizedPath === '/') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Innowize Digital | Creative Studio & Next-Gen Digital Experiences',
      description:
        'Innowize Digital is a Singapore-based creative digital studio crafting cinematic video productions, high-impact brand experiences, and cutting-edge visual storytelling.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      about: {
        '@id': `${SITE_CONFIG.domain}/#organization`,
      },
    });
    graph.push(getShowreelVideoSchema());
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // Services Hub: Include WebPage, Breadcrumbs, all Service schemas
  if (normalizedPath === '/services') {
    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Services', url: pageUrl },
      ],
      pageUrl
    );
    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Creative & Digital Production Services | Innowize Digital',
      description:
        'Explore end-to-end creative digital solutions from Innowize Digital: Video Production, Digital Marketing, Event Production, AI Creative Tech, AR/VR, and Live Streaming.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);
    graph.push(...getServicesSchema());
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // Individual Service Page (/services/:serviceId)
  if (normalizedPath.startsWith('/services/')) {
    const sId = normalizedPath.replace('/services/', '');
    const serviceMeta = SERVICES_META[sId];
    const serviceData = servicesData.find((s) => s.id === sId);
    const serviceTitle = serviceData ? serviceData.title : 'Service';

    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Services', url: `${SITE_CONFIG.domain}/services` },
        { name: serviceTitle, url: pageUrl },
      ],
      pageUrl
    );

    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: serviceMeta?.title || `${serviceTitle} Services | Innowize Digital`,
      description: serviceMeta?.description || 'Service details from Innowize Digital.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);
    graph.push(...getServicesSchema(sId));
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // About Page
  if (normalizedPath === '/about') {
    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'About Us', url: pageUrl },
      ],
      pageUrl
    );
    graph.push({
      '@type': 'AboutPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'About Innowize Digital | Creative Studio, Mission & Vision',
      description:
        'Discover Innowize Digital — an innovative creative studio fusing cinema-grade visual storytelling with next-gen technology to move audiences and build bold brands.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // Work / Portfolio Page
  if (normalizedPath === '/work') {
    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Our Work', url: pageUrl },
      ],
      pageUrl
    );
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Featured Portfolio & Case Studies | Innowize Digital',
      description:
        'Browse Innowize Digital’s portfolio of cinematic commercials, short-form reels, brand films, and professional photography collections.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // Contact Page
  if (normalizedPath === '/contact') {
    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Contact', url: pageUrl },
      ],
      pageUrl
    );
    graph.push({
      '@type': 'ContactPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Contact Innowize Digital | Start Your Project in Singapore',
      description:
        'Get in touch with Innowize Digital in Singapore for cinematic video production, digital marketing, AI creative tech, and spatial experiences.',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // Fallback WebPage
  graph.push({
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Innowize Digital',
    isPartOf: {
      '@id': `${SITE_CONFIG.domain}/#website`,
    },
  });

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
