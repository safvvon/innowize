const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => resolve('ERROR: ' + err.message));
  });
}

function extractItemsFromHtml(html) {
  const items = [];
  const regex = /\[\[null,"([a-zA-Z0-9_-]{25,})"\],null,null,null,"([^"]+)"[\s\S]*?\[\[\["([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({
      id: match[1],
      type: match[2],
      name: match[3]
    });
  }
  return items;
}

// Log path
const logPath = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\bb616a7b-eb41-4813-addf-5c458169e965\\.system_generated\\tasks\\task-72.log';
const logText = fs.readFileSync(logPath, 'utf8');

const sections = logText.split('Scanning: ');
const collections = {};

sections.slice(1).forEach(sec => {
  const lines = sec.trim().split('\n');
  const header = lines[0];
  const nameMatch = header.match(/^(.*?)\s*\(/);
  const name = nameMatch ? nameMatch[1].trim() : header;
  
  const items = [];
  lines.slice(1).forEach(line => {
    const m = line.match(/-\s*\[(.*?)\]\s*(.*?)\s*\(id:\s*([a-zA-Z0-9_-]+)\)/);
    if (m) {
      items.push({
        type: m[1],
        name: m[2],
        id: m[3]
      });
    }
  });
  collections[name] = items;
});

async function main() {
  // 1. Fetch HP photos
  console.log('Fetching HP photos...');
  const hpHtml = await fetchUrl('https://drive.google.com/drive/folders/1FHWtlyyr-40dRmApcGHZy_9M5nGLWvJK');
  const hpItems = extractItemsFromHtml(hpHtml);
  console.log('HP items:', hpItems.length);

  // 2. Fetch Stanford Club photos
  console.log('Fetching Stanford photos...');
  const stanfordHtml = await fetchUrl('https://photos.app.goo.gl/TQ3Rg77mPrJixLQRA');
  const stanfordUrls = [...stanfordHtml.matchAll(/"(https:\/\/lh3\.googleusercontent\.com\/pw\/[^"]+)"/g)].map(m => m[1]);
  const uniqueStanford = [...new Set(stanfordUrls)];
  console.log('Stanford photos found:', uniqueStanford.length);

  // 3. Define curated video projects
  const videoProjects = [
    {
      id: 'vid-1',
      title: 'INNOWIZE — Next-Gen AI Visuals & Synth',
      category: 'AI Videos',
      categorySlug: 'ai-videos',
      client: 'Innowize AI Labs',
      year: '2024',
      driveId: '1p_uVBDvay8eC5QuxgE7aH3WQV_coFDwr',
      folderId: '1W6c8Gq3o3I9U8vTuwF2GpxOAAxz9jJh7',
      thumbnail: 'https://lh3.googleusercontent.com/d/1p_uVBDvay8eC5QuxgE7aH3WQV_coFDwr=w1200',
      tagline: 'Cutting-edge artificial intelligence video generation, neural motion graphics, and algorithmic storytelling.',
      featured: true,
      isFullLengthBanner: true,
      gridSpan: 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4',
      minHeight: 'min-h-[460px] lg:min-h-[540px]',
      aspectClass: 'aspect-[21/9]',
      masonryHeight: 'h-[500px]'
    },
    {
      id: 'vid-2',
      title: 'AfterLife Music Festival — Official Promo',
      category: 'Events',
      categorySlug: 'events',
      client: 'Afterlife Asia',
      year: '2023',
      driveId: '1bcJgpKoTQrkOfIXG9K7GQ_sKtTGllZ_y',
      folderId: '1L8nzrObb9wak6BpAYiGDDMUrskbr7-8D',
      thumbnail: 'https://lh3.googleusercontent.com/d/1bcJgpKoTQrkOfIXG9K7GQ_sKtTGllZ_y=w1200',
      tagline: 'Mesmerizing melodic techno rhythms, monumentally scaled stage lighting, and transcendent stadium crowds.',
      featured: true,
      isFullLengthBanner: true,
      gridSpan: 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4',
      minHeight: 'min-h-[460px] lg:min-h-[540px]',
      aspectClass: 'aspect-[21/9]',
      masonryHeight: 'h-[520px]'
    },
    {
      id: 'vid-3',
      title: 'Alaxis Medical Aesthetics — Beauty & Radiance',
      category: 'Brand Story',
      categorySlug: 'brand-story',
      client: 'Alaxis Aesthetic Clinic',
      year: '2024',
      driveId: '1TTQEAe3FdxFGb9KtTIIfFWZX43QlFNaL',
      folderId: '1-lbbuQEsutdT25V_-wtnBFvlGKVtDceT',
      thumbnail: 'https://lh3.googleusercontent.com/d/1TTQEAe3FdxFGb9KtTIIfFWZX43QlFNaL=w1200',
      tagline: 'High-fashion 9:16 vertical aesthetic cinematography tailored for luxury wellness and dermatological elegance.',
      isTallLength: true,
      gridSpan: 'col-span-1 xl:row-span-2',
      minHeight: 'min-h-[620px] lg:min-h-[700px]',
      aspectClass: 'aspect-[9/16]',
      masonryHeight: 'h-[680px]'
    },
    {
      id: 'vid-4',
      title: 'Achieve Spine & Orthopaedics — Patient Care',
      category: 'Brand Story',
      categorySlug: 'brand-story',
      client: 'Achieve Spine & Orthopaedics',
      year: '2024',
      driveId: '1Uf00_w-QtVPy7Q8nCnLzNwW4MnU5YdNf',
      folderId: '1-lbbuQEsutdT25V_-wtnBFvlGKVtDceT',
      thumbnail: 'https://lh3.googleusercontent.com/d/1Uf00_w-QtVPy7Q8nCnLzNwW4MnU5YdNf=w1200',
      tagline: 'An intimate surgical brand narrative highlighting world-class orthopedic precision, patient recovery, and surgical expertise.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px] lg:min-h-[420px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[390px]',
      featured: true
    },
    {
      id: 'vid-5',
      title: 'Accelerate 2024 — Heroes of Digital x Google',
      category: 'Events',
      categorySlug: 'events',
      client: 'Heroes of Digital & Google',
      year: '2024',
      driveId: '10eDuJvKA90GTqpQQ9u98BT-oDocS8zD9',
      folderId: '1L8nzrObb9wak6BpAYiGDDMUrskbr7-8D',
      thumbnail: 'https://lh3.googleusercontent.com/d/10eDuJvKA90GTqpQQ9u98BT-oDocS8zD9=w1200',
      tagline: 'Explosive technology summit recap with high-octane stage cinematography, executive keynotes, and thought leadership.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[400px]',
      featured: true
    },
    {
      id: 'vid-6',
      title: 'HiveBotics — Abluo Autonomous Cleaning Robotics',
      category: 'Product & Service',
      categorySlug: 'product-service',
      client: 'HiveBotics Robotics',
      year: '2024',
      driveId: '1l2wnGZ4GhEKXTNQgYw9BmSdqQO88l7UV',
      folderId: '1zdQcNTS0XbCaogeq1aeJpPNiWGE52iea',
      thumbnail: 'https://lh3.googleusercontent.com/d/1l2wnGZ4GhEKXTNQgYw9BmSdqQO88l7UV=w1200',
      tagline: 'Sleek industrial product film unveiling groundbreaking robotics engineering and AI navigation automation.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-[4/3]',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-7',
      title: 'CG Property Group — Founders’ Story',
      category: 'Brand Story',
      categorySlug: 'brand-story',
      client: 'CG Property Group',
      year: '2024',
      driveId: '163RNjt3l0yvUOX4V-S2xYWgRmkMAk-oL',
      folderId: '1-lbbuQEsutdT25V_-wtnBFvlGKVtDceT',
      thumbnail: 'https://lh3.googleusercontent.com/d/163RNjt3l0yvUOX4V-S2xYWgRmkMAk-oL=w1200',
      tagline: 'The journey of real estate pioneers transforming premier urban spaces with architectural vision and legacy commitment.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[440px] lg:min-h-[480px]',
      aspectClass: 'aspect-[3/4]',
      masonryHeight: 'h-[460px]'
    },
    {
      id: 'vid-8',
      title: 'Staking Circle — Session 1: Future of Proof-of-Stake',
      category: 'Panel Discussions',
      categorySlug: 'panel-discussions',
      client: 'Staking Circle International',
      year: '2024',
      driveId: '1xlrAh68tzv6MYBVwV7rto_UgWj5sUU2G',
      folderId: '1EbBKhvHixExHkki6Vhn-os1Uc4BNfyKS',
      thumbnail: 'https://lh3.googleusercontent.com/d/1xlrAh68tzv6MYBVwV7rto_UgWj5sUU2G=w1200',
      tagline: 'In-depth technical panel discussion exploring validator architecture, restaking mechanics, and enterprise risk management.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[390px]'
    },
    {
      id: 'vid-9',
      title: 'Staking Circle — Session 2: Institutional Adoption',
      category: 'Panel Discussions',
      categorySlug: 'panel-discussions',
      client: 'Staking Circle International',
      year: '2024',
      driveId: '1T_fIevdFfJgtM875JDoXFkssQ3Z3cNK7',
      folderId: '1EbBKhvHixExHkki6Vhn-os1Uc4BNfyKS',
      thumbnail: 'https://lh3.googleusercontent.com/d/1T_fIevdFfJgtM875JDoXFkssQ3Z3cNK7=w1200',
      tagline: 'World-class blockchain executives debating protocol scalability, liquidity staking derivatives, and regulatory compliance.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[390px]'
    },
    {
      id: 'vid-10',
      title: 'Stanford Club of Singapore — Alumni Annual Gala',
      category: 'Events',
      categorySlug: 'events',
      client: 'Stanford University Alumni Association',
      year: '2023',
      driveId: '1K7I_avqYCJM5nDRAgtFCugFM1QCu4DtT',
      folderId: '1L8nzrObb9wak6BpAYiGDDMUrskbr7-8D',
      thumbnail: 'https://lh3.googleusercontent.com/d/1K7I_avqYCJM5nDRAgtFCugFM1QCu4DtT=w1200',
      tagline: 'Sophisticated evening celebrating visionary alumni leaders, collegiate traditions, and lifelong Stanford bonds.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-[4/3]',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-11',
      title: 'Gotbit Web3 Global Liquidity Summit',
      category: 'Events',
      categorySlug: 'events',
      client: 'Gotbit Hedge Fund',
      year: '2024',
      driveId: '1vDtDuNigLXmwyKEjwtZeXAA-cHXDxKSJ',
      folderId: '1L8nzrObb9wak6BpAYiGDDMUrskbr7-8D',
      thumbnail: 'https://lh3.googleusercontent.com/d/1vDtDuNigLXmwyKEjwtZeXAA-cHXDxKSJ=w1200',
      tagline: 'Global decentralized finance conference capturing crypto institutional leaders and networking dynamics.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-square',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-12',
      title: 'Diano x Carousell — Marketplace Lifestyle Film',
      category: 'Brand Story',
      categorySlug: 'brand-story',
      client: 'Carousell & Diano',
      year: '2024',
      driveId: '1h5VmTProRFefgdBU1YmxcnxogF2WFj26',
      folderId: '1-lbbuQEsutdT25V_-wtnBFvlGKVtDceT',
      thumbnail: 'https://lh3.googleusercontent.com/d/1h5VmTProRFefgdBU1YmxcnxogF2WFj26=w1200',
      tagline: 'High-energy commerce narrative spotlighting creative entrepreneurship and preloved culture across Southeast Asia.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-square',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-13',
      title: 'SOS Clinic — Healthcare Innovation & Care',
      category: 'Brand Story',
      categorySlug: 'brand-story',
      client: 'SOS International Clinic',
      year: '2024',
      driveId: '1dy8tqXquKgsLdEOEd_c-_fuQj1VwqQi1',
      folderId: '1-lbbuQEsutdT25V_-wtnBFvlGKVtDceT',
      thumbnail: 'https://lh3.googleusercontent.com/d/1dy8tqXquKgsLdEOEd_c-_fuQj1VwqQi1=w1200',
      tagline: 'Comprehensive medical excellence, state-of-the-art facility showcase, and human-centered compassionate care.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[390px]'
    },
    {
      id: 'vid-14',
      title: 'TKMA — Hydrafacial Vortex Rejuvenation',
      category: 'Product & Service',
      categorySlug: 'product-service',
      client: 'TKMA Aesthetic Dermatology',
      year: '2024',
      driveId: '1l53fBHGCJ1pOZg-4xPijLhaOZ4MT3cPg',
      folderId: '1zdQcNTS0XbCaogeq1aeJpPNiWGE52iea',
      thumbnail: 'https://lh3.googleusercontent.com/d/1l53fBHGCJ1pOZg-4xPijLhaOZ4MT3cPg=w1200',
      tagline: 'Crisp macro cinematography highlighting patented vortex dermal infusion and rejuvenating clinical aesthetic results.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-[4/3]',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-15',
      title: 'Monsignor Lau — 60th Sacerdotal Diamond Jubilee',
      category: 'Interviews & Docs',
      categorySlug: 'interviews-docs',
      client: 'Catholic Archdiocese Memorial',
      year: '2024',
      driveId: '1CL2VHj3NtUHgFaqbDJWgqVJ5FH4OLb4T',
      folderId: '1L5zi0atRrsCdr_8LQTJtzBfY3uSKCTTN',
      thumbnail: 'https://lh3.googleusercontent.com/d/1CL2VHj3NtUHgFaqbDJWgqVJ5FH4OLb4T=w1200',
      tagline: 'A timeless retrospective documentary chronicling six decades of devotion, spiritual service, and heartfelt tributes.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[400px]'
    },
    {
      id: 'vid-16',
      title: 'We Can Carry Our Cross Well — Resilience Documentary',
      category: 'Interviews & Docs',
      categorySlug: 'interviews-docs',
      client: 'Faith & Courage Feature Series',
      year: '2023',
      driveId: '1e_UR3Qyl1Rky7xE_dx23lfbVPl7CCiFP',
      folderId: '1L5zi0atRrsCdr_8LQTJtzBfY3uSKCTTN',
      thumbnail: 'https://lh3.googleusercontent.com/d/1e_UR3Qyl1Rky7xE_dx23lfbVPl7CCiFP=w1200',
      tagline: 'An inspirational long-form documentary exploring human resilience, personal triumph over hardship, and inner strength.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[440px] lg:min-h-[480px]',
      aspectClass: 'aspect-[3/4]',
      masonryHeight: 'h-[460px]'
    },
    {
      id: 'vid-17',
      title: 'CG Property — Client Success & Wealth Story',
      category: 'Testimonials',
      categorySlug: 'testimonials',
      client: 'CG Property Group',
      year: '2024',
      driveId: '1-cR8RVQxWaxMf-_JidtrgY3i0acjMfXI',
      folderId: '1WXWALFZR9L-D_p6WeYLmY0PGbPCxKMGS',
      thumbnail: 'https://lh3.googleusercontent.com/d/1-cR8RVQxWaxMf-_JidtrgY3i0acjMfXI=w1200',
      tagline: 'Authentic, cinematic interviews with high-net-worth investors sharing their seamless property portfolio acquisitions.',
      gridSpan: 'col-span-1',
      minHeight: 'min-h-[360px]',
      aspectClass: 'aspect-square',
      masonryHeight: 'h-[360px]'
    },
    {
      id: 'vid-18',
      title: 'Svenson — Trichology Q&A with Kristina',
      category: 'Testimonials',
      categorySlug: 'testimonials',
      client: 'Svenson Hair Center',
      year: '2024',
      driveId: '1LUnj2YoGdC91VyNz-4j1_ASwcqgp73ln',
      folderId: '1WXWALFZR9L-D_p6WeYLmY0PGbPCxKMGS',
      thumbnail: 'https://lh3.googleusercontent.com/d/1LUnj2YoGdC91VyNz-4j1_ASwcqgp73ln=w1200',
      tagline: 'Candid trichology expert consultation and client transformation journey filmed in intimate studio lighting.',
      gridSpan: 'col-span-1 md:col-span-2',
      minHeight: 'min-h-[380px]',
      aspectClass: 'aspect-[16/9]',
      masonryHeight: 'h-[390px]'
    }
  ];

  // 4. Photography Collections
  const photoCollections = [
    {
      id: 'photo-hp',
      title: 'HP Singapore Customer Experience & VIP Tour',
      client: 'HP Singapore',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1Xx_Bcy3H50YIRi55Js1BiYrGgoQbuBPp?usp=sharing',
      coverImage: `https://lh3.googleusercontent.com/d/${hpItems[0].id}=w1200`,
      tagline: 'Comprehensive corporate photography capturing HP VIP international customer delegacy, innovation lab tour, and executive presentations.',
      photoCount: hpItems.length,
      photos: hpItems.map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-accomplish',
      title: 'Accomplish 2024 Leadership Summit',
      client: 'Accomplish Global',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1NSp7CyOx7IPSBwgZUl6kJL6xCW1OVmu4?usp=sharing',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Accomplish Event Coverage'][0].id}=w1200`,
      tagline: 'High-impact conference photojournalism documenting executive keynotes, panel discussions, and milestone achievement awards.',
      photoCount: collections['Accomplish Event Coverage'].length,
      photos: collections['Accomplish Event Coverage'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-afterlife',
      title: 'AfterLife Electronic Festival & Nightlife',
      client: 'AfterLife Asia',
      year: '2023',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1_PZgwKNQesKOhZlwAS4k_PNRRSOl_sii?usp=sharing',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Afterlife Party'][0].id}=w1200`,
      tagline: 'Atmospheric nightlife and music festival visual journalism highlighting breathtaking stage design, laser effects, and partygoers.',
      photoCount: collections['Afterlife Party'].length,
      photos: collections['Afterlife Party'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-staking',
      title: 'Staking Circle Web3 Summit',
      client: 'Staking Circle International',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1Q7X7kO-V2a23uOFNjkiPnSGLlepq8Zi2?usp=sharing',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Staking Circle Event'][0].id}=w1200`,
      tagline: 'Vibrant blockchain summit event photography covering networking lounges, speaker sessions, and institutional crypto roundtables.',
      photoCount: collections['Staking Circle Event'].length,
      photos: collections['Staking Circle Event'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-hod',
      title: 'Heroes of Digital Executive Office & Culture Shoot',
      client: 'Heroes of Digital',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1bKryr69jlC5sfx9-Qxy8cbjO0ywuYmFD?usp=drive_link',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Heroes of Digital corporate photography'][0].id}=w1200`,
      tagline: 'Contemporary corporate workplace photography, team collaboration portraits, and leadership headshots.',
      photoCount: collections['Heroes of Digital corporate photography'].length,
      photos: collections['Heroes of Digital corporate photography'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-stanford',
      title: 'Stanford Club of Singapore Annual Gala Dinner',
      client: 'Stanford Club of Singapore',
      year: '2023',
      driveFolderUrl: 'https://photos.app.goo.gl/TQ3Rg77mPrJixLQRA',
      coverImage: uniqueStanford[0] || 'https://lh3.googleusercontent.com/d/1K7I_avqYCJM5nDRAgtFCugFM1QCu4DtT=w1200',
      tagline: 'Dignified alumni reunion photography capturing dinner festivities, fellowship toast, and memorable group portraits.',
      photoCount: uniqueStanford.length || 30,
      photos: uniqueStanford.map((url, i) => ({
        id: `stanford-${i}`,
        title: `Stanford Gala ${i + 1}`,
        thumbUrl: `${url}=w600`,
        fullUrl: `${url}=w1800`
      }))
    },
    {
      id: 'photo-gotbit',
      title: 'Gotbit Web3 Summit & Private Gala',
      client: 'Gotbit Hedge Fund',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1PrsvkbKfbxWRbqA0xPD_CczK_B-Y_b_C?usp=drive_link',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Gotbit Event photos'][0].id}=w1200`,
      tagline: 'Exclusive crypto conference event coverage spotlighting international delegates, private banquet, and stage presentations.',
      photoCount: collections['Gotbit Event photos'].length,
      photos: collections['Gotbit Event photos'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    },
    {
      id: 'photo-sumsub',
      title: 'Sumsub Global Identity & Security Summit',
      client: 'Sumsub Identity Verification',
      year: '2024',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1RIiUwNIXm6lxr5RZt5WepdFxU5aWC8MS?usp=drive_link',
      coverImage: `https://lh3.googleusercontent.com/d/${collections['Samsub Event photos'][0].id}=w1200`,
      tagline: 'High-profile corporate event documentation featuring keynote speakers, interactive tech demo booths, and VIP networking.',
      photoCount: collections['Samsub Event photos'].length,
      photos: collections['Samsub Event photos'].map(p => ({
        id: p.id,
        title: p.name,
        thumbUrl: `https://lh3.googleusercontent.com/d/${p.id}=w600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${p.id}=w1800`
      }))
    }
  ];

  const code = `// Autogenerated portfolio data containing all client videography categories and photography event coverage
export interface VideoProject {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  client: string;
  year: string;
  driveId: string;
  folderId?: string;
  thumbnail: string;
  tagline: string;
  featured?: boolean;
  isFullLengthBanner?: boolean;
  isTallLength?: boolean;
  gridSpan: string;
  minHeight: string;
  aspectClass: string;
  masonryHeight: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  thumbUrl: string;
  fullUrl: string;
}

export interface PhotoCollection {
  id: string;
  title: string;
  client: string;
  year: string;
  driveFolderUrl: string;
  coverImage: string;
  tagline: string;
  photoCount: number;
  photos: PhotoItem[];
}

export const videoProjects: VideoProject[] = ${JSON.stringify(videoProjects, null, 2)};

export const photoCollections: PhotoCollection[] = ${JSON.stringify(photoCollections, null, 2)};

export const videoCategories = [
  { id: 'all', label: 'All Videos' },
  { id: 'ai-videos', label: 'AI Videos' },
  { id: 'brand-story', label: 'Brand Stories' },
  { id: 'events', label: 'Events & Promos' },
  { id: 'panel-discussions', label: 'Panel Discussions' },
  { id: 'product-service', label: 'Product & Service' },
  { id: 'interviews-docs', label: 'Interviews & Docs' },
  { id: 'testimonials', label: 'Testimonials' },
];
`;

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.ts');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, code, 'utf8');
  console.log('Saved to', outputPath);
}

main();
