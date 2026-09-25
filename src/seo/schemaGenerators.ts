import { SITE_CONFIG, SERVICES_META, STATIC_PAGES_META } from './seoConfig';
import { servicesData } from '../data/servicesData';
import { serviceDetailsData } from '../data/serviceDetailsData';
import { blogPosts } from '../data/blogData';

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

export const getFaqSchema = (faqs: { question: string; answer: string }[], pageUrl: string) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateGraphSchema = (pathname: string) => {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const pageUrl = `${SITE_CONFIG.domain}${normalizedPath === '/' ? '' : normalizedPath}`;

  const graph: object[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
  ];

  // 1. Homepage
  if (normalizedPath === '/') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: STATIC_PAGES_META['/'].title,
      description: STATIC_PAGES_META['/'].description,
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

  // 2. Services Hub
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
      name: STATIC_PAGES_META['/services'].title,
      description: STATIC_PAGES_META['/services'].description,
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

  // 3. Individual Service Page (/services/:serviceId)
  if (normalizedPath.startsWith('/services/')) {
    const rawId = normalizedPath.replace('/services/', '');
    const serviceId = rawId === 'ai-creative-tech' ? 'ai-video' : rawId;
    const service = servicesData.find((s) => s.id === serviceId);
    const serviceDetail = serviceDetailsData[serviceId];
    const meta = SERVICES_META[serviceId] || SERVICES_META[rawId];

    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Services', url: `${SITE_CONFIG.domain}/services` },
        { name: service?.title || 'Service', url: pageUrl },
      ],
      pageUrl
    );

    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: meta?.title || (service ? `${service.title} | ${SITE_CONFIG.brandName}` : 'Service'),
      description: meta?.description || service?.desc || '',
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
    });
    graph.push(breadcrumb);

    if (service) {
      graph.push(...getServicesSchema(service.id));
    }

    if (serviceDetail && serviceDetail.faqs.length > 0) {
      graph.push(getFaqSchema(serviceDetail.faqs, pageUrl));
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // 4. Blog Hub (/blog)
  if (normalizedPath === '/blog') {
    const breadcrumb = getBreadcrumbSchema(
      [
        { name: 'Home', url: `${SITE_CONFIG.domain}/` },
        { name: 'Blog', url: pageUrl },
      ],
      pageUrl
    );
    graph.push({
      '@type': 'Blog',
      '@id': `${pageUrl}#blog`,
      url: pageUrl,
      name: STATIC_PAGES_META['/blog'].title,
      description: STATIC_PAGES_META['/blog'].description,
      isPartOf: {
        '@id': `${SITE_CONFIG.domain}/#website`,
      },
      breadcrumb: {
        '@id': breadcrumb['@id'],
      },
      blogPost: blogPosts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: `${SITE_CONFIG.domain}/blog/${post.category}/${post.slug}`,
        datePublished: post.publishDate,
        author: {
          '@type': 'Person',
          name: post.author.name,
        },
      })),
    });
    graph.push(breadcrumb);
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // 5. Individual Blog Article (/blog/:category/:slug)
  if (normalizedPath.startsWith('/blog/')) {
    const parts = normalizedPath.split('/').filter(Boolean);
    const slug = parts[parts.length - 1];
    const post = blogPosts.find((p) => p.slug === slug);

    if (post) {
      const breadcrumb = getBreadcrumbSchema(
        [
          { name: 'Home', url: `${SITE_CONFIG.domain}/` },
          { name: 'Blog', url: `${SITE_CONFIG.domain}/blog` },
          { name: post.categoryLabel, url: `${SITE_CONFIG.domain}/blog#${post.category}` },
          { name: post.title, url: pageUrl },
        ],
        pageUrl
      );

      graph.push({
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        headline: post.title,
        description: post.description,
        url: pageUrl,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        image: `${SITE_CONFIG.domain}${post.heroImage}`,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
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
  }

  // 6. Generic / Other Static Pages (About, Work, Contact)
  const meta = STATIC_PAGES_META[normalizedPath];
  const pageTitle = meta ? meta.title : `${SITE_CONFIG.brandName}`;
  const pageDesc = meta ? meta.description : SITE_CONFIG.organization.description;

  const breadcrumb = getBreadcrumbSchema(
    [
      { name: 'Home', url: `${SITE_CONFIG.domain}/` },
      { name: pageTitle.split('|')[0].trim(), url: pageUrl },
    ],
    pageUrl
  );

  graph.push({
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDesc,
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
};
