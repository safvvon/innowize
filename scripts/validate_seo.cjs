const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let errorCount = 0;
let passCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    errorCount++;
  }
}

console.log('\n--- 1. AUDITING ROBOTS.TXT ---');
const robotsPath = path.join(rootDir, 'public', 'robots.txt');
assert(fs.existsSync(robotsPath), 'robots.txt exists in public/');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  assert(robots.includes('User-agent: *'), 'robots.txt allows all crawlers');
  assert(robots.includes('Allow: /'), 'robots.txt allows root public access');
  assert(robots.includes('Sitemap: https://innowize.vercel.app/sitemap.xml'), 'robots.txt points to canonical sitemap.xml');
  assert(!robots.includes('Disallow: /'), 'robots.txt does NOT accidentally block site');
}

console.log('\n--- 2. AUDITING SITEMAP.XML ---');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in public/');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemap.startsWith('<?xml'), 'sitemap.xml has valid XML declaration');
  assert(sitemap.includes('<urlset'), 'sitemap.xml has <urlset>');

  const expectedUrls = [
    'https://innowize.vercel.app/',
    'https://innowize.vercel.app/work',
    'https://innowize.vercel.app/services',
    'https://innowize.vercel.app/services/video-production',
    'https://innowize.vercel.app/services/digital-marketing',
    'https://innowize.vercel.app/services/event-production',
    'https://innowize.vercel.app/services/ai-creative-tech',
    'https://innowize.vercel.app/services/ar-vr',
    'https://innowize.vercel.app/services/live-streaming',
    'https://innowize.vercel.app/about',
    'https://innowize.vercel.app/contact',
  ];

  expectedUrls.forEach((url) => {
    assert(sitemap.includes(`<loc>${url}</loc>`), `sitemap.xml contains ${url}`);
  });
}

console.log('\n--- 3. AUDITING PWA & VERCEL CONFIGURATION ---');
const manifestPath = path.join(rootDir, 'public', 'site.webmanifest');
assert(fs.existsSync(manifestPath), 'site.webmanifest exists in public/');
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert(manifest.name === 'Innowize Digital', 'manifest name is Innowize Digital');
  assert(manifest.theme_color === '#0B0E17', 'manifest theme_color is #0B0E17');
}

const vercelPath = path.join(rootDir, 'vercel.json');
assert(fs.existsSync(vercelPath), 'vercel.json exists in root');
if (fs.existsSync(vercelPath)) {
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  assert(Array.isArray(vercel.rewrites), 'vercel.json has SPA rewrites');
  assert(Array.isArray(vercel.headers), 'vercel.json has security and caching headers');
}

console.log('\n--- 4. AUDITING STATIC INDEX.HTML HEAD TAGS ---');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('<title>Innowize Digital | Creative Studio & Next-Gen Digital Experiences</title>'), 'index.html has optimized title');
assert(indexHtml.includes('name="description"'), 'index.html has meta description');
assert(indexHtml.includes('rel="canonical" href="https://innowize.vercel.app/"'), 'index.html has canonical tag');
assert(indexHtml.includes('name="robots" content="index, follow'), 'index.html has robots directive');
assert(indexHtml.includes('property="og:title"'), 'index.html has og:title');
assert(indexHtml.includes('property="og:description"'), 'index.html has og:description');
assert(indexHtml.includes('property="og:image"'), 'index.html has og:image');
assert(indexHtml.includes('name="twitter:card"'), 'index.html has twitter:card');
assert(indexHtml.includes('type="application/ld+json"'), 'index.html has JSON-LD structured data');

console.log('\n--- 5. AUDITING REACT SEO SOURCE FILES ---');
assert(fs.existsSync(path.join(rootDir, 'src', 'seo', 'seoConfig.ts')), 'src/seo/seoConfig.ts exists');
assert(fs.existsSync(path.join(rootDir, 'src', 'seo', 'schemaGenerators.ts')), 'src/seo/schemaGenerators.ts exists');
assert(fs.existsSync(path.join(rootDir, 'src', 'seo', 'SEOHead.tsx')), 'src/seo/SEOHead.tsx exists');
assert(fs.existsSync(path.join(rootDir, 'src', 'pages', 'NotFound.tsx')), 'src/pages/NotFound.tsx exists');

const appContent = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf8');
assert(appContent.includes('<SEOHead />'), 'App.tsx renders <SEOHead />');
assert(appContent.includes('path="*" element={<NotFound />}'), 'App.tsx includes catch-all 404 route');

console.log('\n======================================');
console.log(`SEO AUDIT RESULT: ${passCount} Passed, ${errorCount} Failed`);
console.log('======================================\n');

if (errorCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
