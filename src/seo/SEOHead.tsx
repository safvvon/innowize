import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_CONFIG,
  STATIC_PAGES_META,
  SERVICES_META,
  NOT_FOUND_META,
  PageMetadata,
} from './seoConfig';
import { generateGraphSchema } from './schemaGenerators';

const updateOrCreateMeta = (attributeName: string, attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateOrCreateLink = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export const SEOHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/';

    let meta: PageMetadata;

    if (STATIC_PAGES_META[normalizedPath]) {
      meta = STATIC_PAGES_META[normalizedPath];
    } else if (normalizedPath.startsWith('/services/')) {
      const rawId = normalizedPath.replace('/services/', '');
      const serviceId = rawId === 'ai-video' ? 'ai-creative-tech' : rawId;
      meta = SERVICES_META[serviceId] || SERVICES_META[rawId] || {
        title: `${rawId.replace(/-/g, ' ').toUpperCase()} Services | ${SITE_CONFIG.brandName}`,
        description: `Explore ${rawId.replace(/-/g, ' ')} solutions by ${SITE_CONFIG.brandName}.`,
        canonical: `${SITE_CONFIG.domain}/services/${serviceId}`,
        ogType: 'website',
      };
    } else {
      meta = NOT_FOUND_META;
    }

    // 1. Document Title
    document.title = meta.title;

    // 2. Meta Description
    updateOrCreateMeta('name', 'description', meta.description);

    // 3. Canonical Link
    updateOrCreateLink('canonical', meta.canonical);

    // 4. Robots Directives
    const robotsContent = meta.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    updateOrCreateMeta('name', 'robots', robotsContent);

    // 5. Open Graph Metadata
    const ogImage = meta.ogImage || SITE_CONFIG.defaultOgImage;
    updateOrCreateMeta('property', 'og:title', meta.title);
    updateOrCreateMeta('property', 'og:description', meta.description);
    updateOrCreateMeta('property', 'og:url', meta.canonical);
    updateOrCreateMeta('property', 'og:type', meta.ogType || 'website');
    updateOrCreateMeta('property', 'og:site_name', SITE_CONFIG.brandName);
    updateOrCreateMeta('property', 'og:image', ogImage);
    updateOrCreateMeta('property', 'og:locale', SITE_CONFIG.locale);

    // 6. Twitter Card Metadata
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', meta.title);
    updateOrCreateMeta('name', 'twitter:description', meta.description);
    updateOrCreateMeta('name', 'twitter:image', ogImage);

    // 7. Dynamic JSON-LD Structured Data Graph
    if (!meta.noindex) {
      const schemaData = generateGraphSchema(normalizedPath);
      let scriptTag = document.getElementById('seo-schema-graph') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-schema-graph';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else {
      // Remove JSON-LD on noindex (404) routes
      const scriptTag = document.getElementById('seo-schema-graph');
      if (scriptTag) scriptTag.remove();
    }
  }, [pathname]);

  return null;
};
