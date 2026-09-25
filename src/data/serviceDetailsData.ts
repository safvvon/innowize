export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  heroDescription: string;
  problemsSolved: string[];
  processSteps: { step: string; title: string; desc: string }[];
  deliverables: string[];
  technologies: string[];
  benefits: { title: string; desc: string }[];
  targetAudience: string[];
  faqs: ServiceFaq[];
  relatedCaseStudyTag?: string;
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'web-design': {
    id: 'web-design',
    title: 'Web Design Services',
    tagline: 'Modern, High-Conversion Websites Crafted for Bold Brands',
    heroDescription:
      'Innowize Digital creates bespoke, responsive web design experiences that combine striking creative aesthetics with conversion-focused information architecture. Every interface is custom-engineered to elevate your brand authority and turn casual visitors into loyal clients.',
    problemsSolved: [
      'Outdated, generic website templates that damage brand credibility and trust',
      'High bounce rates caused by slow initial rendering and confusing visual hierarchy',
      'Poor mobile responsiveness and lack of touch-optimized user interactions',
      'Low conversion rates on key lead generation and product landing pages',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery & UX Architecture',
        desc: 'We analyze your target audience, commercial goals, and competitive landscape to establish user journeys and content hierarchy.',
      },
      {
        step: '02',
        title: 'Creative Direction & Moodboarding',
        desc: 'Crafting bespoke typography systems, curated color schemes, and art direction aligned with your core brand identity.',
      },
      {
        step: '03',
        title: 'High-Fidelity UI Prototyping',
        desc: 'Interactive Figma design prototypes covering desktop, tablet, and mobile viewports with micro-interactions and transitions.',
      },
      {
        step: '04',
        title: 'Design System & Asset Delivery',
        desc: 'Full component libraries, responsive design specs, and production-ready vector assets prepared for seamless frontend development.',
      },
    ],
    deliverables: [
      'Complete responsive desktop, tablet, and mobile interface designs',
      'Interactive Figma prototypes with fluid transitions and states',
      'Custom design system with design tokens, typography, and color palettes',
      'Conversion-optimized landing page variations and wireframes',
      'Exported SVG icons, vectors, and optimized WebP/AVIF graphics',
    ],
    technologies: ['Figma', 'Adobe Creative Cloud', 'Tailwind CSS', 'Framer Motion', 'Webflow', 'HTML5/CSS3'],
    benefits: [
      {
        title: 'Higher Conversion Rates',
        desc: 'Intentional visual hierarchy and streamlined CTAs guide prospects directly toward inquiries.',
      },
      {
        title: 'Distinct Brand Differentiation',
        desc: '100% custom visual styling sets your business far apart from competitors using cookie-cutter themes.',
      },
      {
        title: 'Flawless Cross-Device Experience',
        desc: 'Pixel-perfect responsiveness across modern smartphones, tablets, laptops, and ultra-wide screens.',
      },
    ],
    targetAudience: [
      'Fast-growing tech and software companies',
      'Modern creative studios and luxury brands',
      'B2B professional services and consulting firms',
      'Direct-to-consumer businesses seeking brand elevation',
    ],
    faqs: [
      {
        question: 'What is included in Innowize Digital’s web design service?',
        answer:
          'Our web design service covers complete end-to-end design: competitive analysis, wireframing, high-fidelity responsive UI design for all devices, design systems, interactive prototypes, and production-ready handoff for developers.',
      },
      {
        question: 'Do you create custom designs or use pre-made templates?',
        answer:
          'Every design created by Innowize Digital is 100% custom-crafted from the ground up. We do not use generic WordPress or Shopify templates, ensuring your digital presence is completely unique.',
      },
      {
        question: 'How long does a typical web design project take?',
        answer:
          'A comprehensive custom website design typically spans 3 to 6 weeks depending on page count, interactive complexity, and revision rounds.',
      },
      {
        question: 'Can you also develop the website after designing it?',
        answer:
          'Yes. Innowize Digital provides full-stack frontend development, ensuring your design is translated into clean, lightning-fast code with perfect fidelity and technical SEO.',
      },
    ],
    relatedCaseStudyTag: 'commercial',
  },
  'ui-ux-design': {
    id: 'ui-ux-design',
    title: 'UI/UX Design Services',
    tagline: 'Intuitive Digital Product Interfaces Engineered for Seamless User Adoption',
    heroDescription:
      'Innowize Digital delivers strategic UI/UX design for web applications, mobile platforms, and enterprise software. We remove user friction, simplify complex workflows, and craft elegant design systems that scale effortlessly.',
    problemsSolved: [
      'Complex, unintuitive workflows that cause user frustration and onboarding drop-offs',
      'Inconsistent visual elements and design fragmentation across expanding product suites',
      'Lack of clear user feedback loops and usability validation prior to code implementation',
      'Suboptimal user retention and low day-30 engagement metrics',
    ],
    processSteps: [
      {
        step: '01',
        title: 'User Research & Journey Mapping',
        desc: 'Auditing user personas, identifying operational bottlenecks, and mapping friction-free paths to task completion.',
      },
      {
        step: '02',
        title: 'Low-Fidelity Wireframing',
        desc: 'Iterative structural wireframes to validate information architecture, page layout, and logic flows rapidly.',
      },
      {
        step: '03',
        title: 'Interactive Prototyping & Usability Testing',
        desc: 'Testing clickable prototypes with real users to uncover edge cases and refine usability prior to production.',
      },
      {
        step: '04',
        title: 'Design Systems & Component Library',
        desc: 'Building atomic design systems with reusable components, states, variables, and developer-ready documentation.',
      },
    ],
    deliverables: [
      'Comprehensive user persona and user journey documentation',
      'Low-fidelity wireframes and high-fidelity product UI screens',
      'Clickable user-tested Figma prototypes',
      'Atomic Design System with component variants and auto-layout specs',
      'Detailed developer handoff specifications and tokenized design variables',
    ],
    technologies: ['Figma', 'FigJam', 'Miro', 'Storybook', 'Zeplin', 'Lottie'],
    benefits: [
      {
        title: 'Accelerated Product Adoption',
        desc: 'Intuitive navigation reduces time-to-value for new users, boosting trial-to-paid conversion.',
      },
      {
        title: 'Reduced Development Costs',
        desc: 'Thoroughly tested UI and design systems minimize costly rework during frontend implementation.',
      },
      {
        title: 'Long-Term Scalability',
        desc: 'Reusable component libraries enable your internal engineering team to ship new features 2x faster.',
      },
    ],
    targetAudience: [
      'SaaS and B2B software companies',
      'Fintech, healthtech, and enterprise platform builders',
      'Mobile application startups seeking product-market fit',
      'Established businesses modernizing legacy internal portals',
    ],
    faqs: [
      {
        question: 'What is the difference between UI and UX design at Innowize Digital?',
        answer:
          'UX (User Experience) focuses on user research, task flows, usability, and logic to ensure the product solves real problems seamlessly. UI (User Interface) focuses on visual aesthetics, typography, color palettes, micro-interactions, and design systems. We integrate both disciplines into one cohesive process.',
      },
      {
        question: 'Do you conduct usability testing?',
        answer:
          'Yes. We test interactive Figma prototypes with representative users to validate task completion rates, identify cognitive load issues, and refine interfaces prior to engineering handoff.',
      },
      {
        question: 'How do you collaborate with our engineering team?',
        answer:
          'We provide tokenized design variables, responsive constraints, auto-layout configurations, and asset exports directly in Figma, facilitating seamless handoff with frontend engineers.',
      },
    ],
    relatedCaseStudyTag: 'corporate',
  },
  'web-development': {
    id: 'web-development',
    title: 'Website Development Services',
    tagline: 'High-Performance, Search-Optimized Web Applications Built with Modern Frameworks',
    heroDescription:
      'Innowize Digital engineers modern, blazing-fast web applications and responsive corporate websites. Built on cutting-edge stacks including React, TypeScript, Next.js, and Vite, our codebases adhere to the highest standards of accessibility, technical SEO, and Core Web Vitals.',
    problemsSolved: [
      'Slow page load speeds that trigger Google ranking penalties and lost customer conversions',
      'Fragile, unmaintainable codebases built on bloated CMS plugins and legacy architectures',
      'Poor technical SEO infrastructure that prevents search engines from indexing content',
      'Security vulnerabilities and lack of modern automated deployment workflows',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Architecture & Tech Stack Planning',
        desc: 'Selecting the optimal rendering strategy (SSR, SSG, or optimized SPA), database architecture, and API integrations.',
      },
      {
        step: '02',
        title: 'Semantic Frontend Engineering',
        desc: 'Writing clean, modular TypeScript and React components with strict accessibility standards (WCAG 2.1 AA).',
      },
      {
        step: '03',
        title: 'Performance & Technical SEO Optimization',
        desc: 'Achieving sub-second LCP, zero CLS, automated sitemaps, structured JSON-LD schemas, and CDN caching.',
      },
      {
        step: '04',
        title: 'Quality Assurance & CI/CD Deployment',
        desc: 'Cross-browser testing, automated linting, Lighthouse audits, and zero-downtime deployment pipelines.',
      },
    ],
    deliverables: [
      'Fully responsive, clean-coded TypeScript and React web application',
      'Strict Core Web Vitals optimization achieving green Lighthouse scores (90+)',
      'Dynamic JSON-LD structured data and Open Graph social sharing tags',
      'Semantic HTML5 structure ensuring comprehensive search engine crawlability',
      'Production-ready CI/CD build configuration and deployment documentation',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Vercel', 'GSAP'],
    benefits: [
      {
        title: 'Peak Search Engine Visibility',
        desc: 'Semantic HTML and structured data give Google unambiguous signals to crawl and rank your pages.',
      },
      {
        title: 'Sub-Second Page Speeds',
        desc: 'Optimized asset delivery and clean code keep bounce rates low and user satisfaction high.',
      },
      {
        title: 'Bulletproof Security & Reliability',
        desc: 'Modern static and edge hosting prevents traditional database injection and server vulnerabilities.',
      },
    ],
    targetAudience: [
      'Enterprises needing reliable, scalable corporate web portals',
      'Brands requiring custom interactive web applications and portals',
      'Agencies seeking a dependable technical engineering partner',
      'High-growth startups preparing for market launch and investor evaluation',
    ],
    faqs: [
      {
        question: 'Which frameworks and technologies do you use for web development?',
        answer:
          'We specialize in modern JavaScript and TypeScript frameworks including React, Next.js, and Vite, paired with Tailwind CSS, Framer Motion, and GSAP for cinematic web experiences.',
      },
      {
        question: 'Will our website score well on Google’s Core Web Vitals?',
        answer:
          'Yes. Performance is an architectural priority at Innowize Digital. We optimize Largest Contentful Paint (LCP < 2.5s), Cumulative Layout Shift (CLS < 0.1), and Interaction to Next Paint (INP < 200ms) on all builds.',
      },
      {
        question: 'Can you integrate a headless Content Management System (CMS)?',
        answer:
          'Absolutely. We integrate headless CMS solutions such as Sanity, Strapi, Contentful, and Prismic so your marketing team can update content without writing code.',
      },
    ],
    relatedCaseStudyTag: 'commercial',
  },
  'branding': {
    id: 'branding',
    title: 'Branding & Identity Design Services',
    tagline: 'Distinctive Visual Identity Systems That Command Authority and Emotion',
    heroDescription:
      'Innowize Digital crafts enduring brand identities that articulate what makes your company irreplaceable. From core positioning and logo architecture to typography systems and comprehensive brand guidelines, we establish an unmistakable visual voice.',
    problemsSolved: [
      'Generic or disjointed visual branding that fails to inspire trust or command premium pricing',
      'Lack of clear brand guidelines, leading to inconsistent marketing collateral across teams',
      'Inability to clearly communicate your unique value proposition to modern audiences',
      'Brand identities that do not translate effectively to digital screens and social media',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Brand Strategy & Positioning',
        desc: 'Unpacking your market opportunity, competitor white-space, and core brand personality attributes.',
      },
      {
        step: '02',
        title: 'Visual Identity Concepts',
        desc: 'Exploring distinct creative directions across logo marks, logotypes, color palettes, and typographic scales.',
      },
      {
        step: '03',
        title: 'System Expansion & Real-World Application',
        desc: 'Testing identity systems across digital web, social media, merchandise, stationery, and packaging.',
      },
      {
        step: '04',
        title: 'Brand Guidelines & Master Kit Delivery',
        desc: 'Comprehensive brand bible detailing color codes (RGB/HEX/CMYK), typography rules, and master vector assets.',
      },
    ],
    deliverables: [
      'Primary, secondary, and sub-mark logo suites in all digital and print vector formats',
      'Curated typography system with commercial license guidance',
      'Harmonious color palettes with strict contrast ratios for accessibility',
      'Comprehensive Brand Style Guide (PDF & digital format)',
      'Digital social media templates and stationery asset pack',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Glyphs', 'InDesign'],
    benefits: [
      {
        title: 'Instant Brand Recognition',
        desc: 'A unified visual language establishes immediate credibility and memorable recall.',
      },
      {
        title: 'Premium Price Justification',
        desc: 'Professional, cohesive branding positions your company at the high end of your industry.',
      },
      {
        title: 'Operational Alignment',
        desc: 'Clear guidelines enable internal and external marketing teams to produce on-brand collateral effortlessly.',
      },
    ],
    targetAudience: [
      'Funded startups establishing their inaugural market presence',
      'Established businesses undergoing strategic repositioning or rebranding',
      'Consumer and lifestyle brands scaling into international markets',
      'B2B services looking to project institutional authority',
    ],
    faqs: [
      {
        question: 'What do the final brand deliverables include?',
        answer:
          'You receive full master vector files (SVG, EPS, AI), high-res PNGs and WebP files with transparent backgrounds, favicon packages, print-ready collateral, and a comprehensive Brand Identity Guidelines document.',
      },
      {
        question: 'How many design concepts do you present?',
        answer:
          'We typically present 2 to 3 distinct, fully developed creative directions, each with real-world mockups, typography systems, and rationales for your team to evaluate.',
      },
      {
        question: 'Do we own 100% of the copyright to the final logo and brand assets?',
        answer:
          'Yes. Upon final project completion and delivery, full commercial rights and intellectual property are transferred directly to your company.',
      },
    ],
    relatedCaseStudyTag: 'corporate',
  },
  'ai-video': {
    id: 'ai-video',
    title: 'AI Video & Creative Tech Services',
    tagline: 'Futuristic Generative AI Motion, Synthetic Media & Algorithmic Visuals',
    heroDescription:
      'Innowize Digital pioneers the intersection of generative artificial intelligence and cinema-grade video production. We harness state-of-the-art neural diffusion models, generative synthesis, and algorithmic VFX to create visuals that were previously impossible or cost-prohibitive.',
    problemsSolved: [
      'Astronomical production budgets required for complex 3D environments and sci-fi visual effects',
      'Extended production timelines for concept visualization and rapid creative iterations',
      'Inability to personalize video content at scale for targeted marketing segments',
      'Difficulty standing out in saturated social feeds using standard stock footage',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Prompt Engineering & Concept Art',
        desc: 'Developing specialized aesthetic prompts and LoRA models tailored to your brand’s visual vocabulary.',
      },
      {
        step: '02',
        title: 'Neural Video Synthesis & Motion Control',
        desc: 'Generating continuous, coherent motion clips utilizing cutting-edge diffusion and motion-adapter models.',
      },
      {
        step: '03',
        title: 'Upscaling & Temporal Stabilization',
        desc: 'Running neural upscalers and frame interpolation to eliminate artifacts and achieve pristine 4K fidelity.',
      },
      {
        step: '04',
        title: 'Cinema Master Finishing',
        desc: 'Integrating live-action footage, cinematic sound design, voice synthesis, and professional color grading.',
      },
    ],
    deliverables: [
      'High-resolution 4K generative AI video content and commercials',
      'Custom-trained visual style models tailored to your brand identity',
      'Social media reel packages optimized for 9:16 vertical engagement',
      'Synthetic visual effects and futuristic environment extensions',
      'Clean broadcast-ready exports with synchronized master audio',
    ],
    technologies: ['ComfyUI', 'Runway Gen-3', 'Midjourney', 'Topaz Video AI', 'DaVinci Resolve', 'After Effects'],
    benefits: [
      {
        title: '10x Creative Speed',
        desc: 'Explore ambitious cinematic concepts in days rather than waiting months for traditional VFX rendering.',
      },
      {
        title: 'Unmatched Visual Novelty',
        desc: 'Surreal, impossible visual transitions that capture attention and drive viral social media engagement.',
      },
      {
        title: 'Cost-Effective Production',
        desc: 'Deliver blockbuster-tier visual spectacles without multi-million dollar studio soundstage costs.',
      },
    ],
    targetAudience: [
      'Innovative tech brands looking to showcase forward-thinking leadership',
      'Entertainment and music creators seeking surreal, boundary-pushing visuals',
      'Advertising agencies requiring rapid concept commercials and visual test-beds',
      'D2C consumer products aiming for viral short-form social video traction',
    ],
    faqs: [
      {
        question: 'What is AI video production?',
        answer:
          'AI video production utilizes advanced deep learning and neural diffusion models to generate, augment, or stylize video frames based on text, reference images, and camera trajectory parameters, overseen by professional cinema directors.',
      },
      {
        question: 'Are AI-generated videos high quality enough for commercial broadcasting?',
        answer:
          'Yes. By combining state-of-the-art generative models with neural upscalers, temporal de-flickering, and professional DaVinci Resolve color grading, our AI video deliverables meet professional 4K broadcast specifications.',
      },
      {
        question: 'Can you combine real actors with AI environments?',
        answer:
          'Yes. We regularly shoot live-action subjects against green screen or practical lighting and blend them with AI-synthesized worlds for seamless hybrid productions.',
      },
    ],
    relatedCaseStudyTag: 'commercial',
  },
  'video-production': {
    id: 'video-production',
    title: 'Video Production Services',
    tagline: 'Cinematic Storytelling From Concept to Final Cut',
    heroDescription:
      'Innowize Digital produces cinema-grade commercials, brand films, and high-impact short-form video content in Singapore and internationally. We craft compelling visual narratives that evoke deep emotion and drive measurable business growth.',
    problemsSolved: [
      'Flat, amateur video content that undermines brand perception in corporate presentations',
      'Disjointed production pipelines with poor communication between writers, crew, and editors',
      'Inability to capture customer attention within the critical first 3 seconds on social platforms',
      'Poor audio engineering, inconsistent lighting, and lack of professional color science',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pre-Production & Scriptwriting',
        desc: 'Concept development, narrative scriptwriting, storyboard creation, location scouting, and talent casting.',
      },
      {
        step: '02',
        title: 'Principal Photography & Filming',
        desc: 'On-set production with cinema camera packages, specialized lighting rigs, and professional sound capture.',
      },
      {
        step: '03',
        title: 'Post-Production & Editorial Cut',
        desc: 'Precision pacing, narrative rhythm, dialogue editing, visual effects, and dynamic motion graphics.',
      },
      {
        step: '04',
        title: 'Color Grading & Sound Mastering',
        desc: 'Industry-standard DaVinci Resolve color timing, custom sound design, foley, and commercial audio mastering.',
      },
    ],
    deliverables: [
      'Master 4K broadcast commercials and brand documentary films',
      'Multi-platform aspect ratios (16:9 widescreen, 9:16 vertical reels, 1:1 square)',
      'High-impact social media short cuts (15s, 30s, 60s)',
      'Subtitled and closed-captioned versions for accessibility',
      'Complete raw footage archive and master audio deliverables',
    ],
    technologies: ['Sony FX Cinema Line', 'DaVinci Resolve Studio', 'Premiere Pro', 'After Effects', 'Aputure Lighting'],
    benefits: [
      {
        title: 'Emotional Brand Connection',
        desc: 'Cinematic narrative storytelling builds deep, lasting trust that static advertising cannot replicate.',
      },
      {
        title: 'Omnichannel Asset Utility',
        desc: 'One master shoot yields high-value assets across your website hero, YouTube, Instagram, and events.',
      },
      {
        title: 'Turnkey Execution',
        desc: 'Our in-house directors, cinematographers, and editors handle every detail without client headaches.',
      },
    ],
    targetAudience: [
      'Corporate leaders launching major brand campaigns or product announcements',
      'D2C brands seeking high-converting advertising video collateral',
      'Hospitality, real estate, and luxury brands showcasing physical spaces',
      'Organizations producing anniversary films, documentaries, and investor videos',
    ],
    faqs: [
      {
        question: 'Where is Innowize Digital based and do you film internationally?',
        answer:
          'Innowize Digital is based in Singapore, with production capability across Southeast Asia, India, and global locations for client projects.',
      },
      {
        question: 'What types of video productions do you specialize in?',
        answer:
          'We specialize in brand films, commercial advertisements, cinematic 9:16 social reels, corporate documentaries, event coverage, and product launch videos.',
      },
      {
        question: 'What is the typical turnaround time for a video production project?',
        answer:
          'Turnaround typically ranges from 2 to 4 weeks from filming date to final color-graded delivery, with expedited delivery available for time-sensitive campaigns.',
      },
    ],
    relatedCaseStudyTag: 'commercial',
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Services',
    tagline: 'Data-Driven Multi-Channel Campaigns That Accelerate Revenue',
    heroDescription:
      'Innowize Digital combines creative visual excellence with precision performance marketing. We architect multi-channel acquisition funnels, social campaigns, and strategic content distribution that turn brand awareness into measurable customer acquisition.',
    problemsSolved: [
      'Wasted advertising spend on generic campaigns that fail to target qualified prospects',
      'Disconnect between creative assets and actual performance marketing objectives',
      'Lack of granular tracking, multi-touch attribution, and clear return on ad spend (ROAS)',
      'Plateaued organic reach on key social channels like Instagram, LinkedIn, and YouTube',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Market Audit & Audience Segmentation',
        desc: 'Auditing existing campaign data, analyzing customer acquisition costs, and identifying high-LTV segments.',
      },
      {
        step: '02',
        title: 'Creative Funnel Architecture',
        desc: 'Developing targeted messaging hooks, creative visual angles, and conversion landing page experiences.',
      },
      {
        step: '03',
        title: 'Campaign Deployment & Bidding Strategy',
        desc: 'Launching paid acquisition across Meta, Google Ads, and LinkedIn with precision audience targeting.',
      },
      {
        step: '04',
        title: 'Continuous Optimization & Scale',
        desc: 'Rapid A/B creative testing, budget reallocation to winning ad sets, and transparent monthly performance reporting.',
      },
    ],
    deliverables: [
      'Comprehensive multi-channel digital marketing growth strategy',
      'Custom ad creative suite (static graphics, animated motion, and video hooks)',
      'Tracking pixel setup (Meta Pixel, Google Tag Manager, GA4 conversion events)',
      'A/B split testing reports and audience segmentation breakdowns',
      'Live dashboard access and monthly strategic review sessions',
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Semrush', 'Figma'],
    benefits: [
      {
        title: 'Predictable Pipeline Growth',
        desc: 'Data-driven campaigns generate consistent, qualified inquiries for your sales team.',
      },
      {
        title: 'Maximized Return on Ad Spend',
        desc: 'Relentless creative testing and audience pruning ensure every dollar spent drives real value.',
      },
      {
        title: 'Holistic Brand Synergy',
        desc: 'High-production visual creatives make your paid advertising look premium rather than like generic spam.',
      },
    ],
    targetAudience: [
      'B2B service providers and consultancies seeking high-ticket client leads',
      'E-commerce and consumer brands scaling monthly recurring revenue',
      'SaaS startups looking to drive qualified signups and demo bookings',
      'Professional clinics and local practices expanding their customer base',
    ],
    faqs: [
      {
        question: 'Which marketing channels does Innowize Digital manage?',
        answer:
          'We manage Meta (Instagram & Facebook) Ads, Google Search & Display Ads, YouTube Video Advertising, and LinkedIn Sponsored Content, paired with organic content strategy.',
      },
      {
        question: 'Do you produce the creative content for the ads as well?',
        answer:
          'Yes. As a full-service creative digital agency, we produce all video, photography, copy, and motion graphics in-house, ensuring optimal synergy between creative and performance metrics.',
      },
      {
        question: 'How do you measure campaign success?',
        answer:
          'We focus on commercial metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Cost Per Lead (CPL), and total qualified revenue pipeline, tracked through verified GA4 conversion events.',
      },
    ],
    relatedCaseStudyTag: 'corporate',
  },
  'event-production': {
    id: 'event-production',
    title: 'Event Production & AV Engineering Services',
    tagline: 'Immersive Stage Design, Broadcast Audio & Flawless On-Ground Execution',
    heroDescription:
      'Innowize Digital delivers end-to-end event production for corporate summits, award galas, and immersive brand activations. We blend architectural stage design, intelligent lighting, crystal-clear acoustic engineering, and live video capture into unforgettable on-ground experiences.',
    problemsSolved: [
      'Audio feedback, mic dropouts, and poor sound distribution in challenging venue acoustics',
      'Uninspired stage designs that fail to reflect the prestige of your corporate summit',
      'Technical stress and coordination chaos among multiple fragmented subcontractors',
      'Lack of professional live multi-camera recording and post-event recap assets',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Venue Survey & Spatial Acoustic Modeling',
        desc: 'Analyzing sightlines, ceiling load capacities, power distribution, and acoustic reflections in the venue.',
      },
      {
        step: '02',
        title: 'Stage & Lighting 3D Visualization',
        desc: 'Designing 3D stage renders, LED screen layouts, and programmed intelligent lighting sequences.',
      },
      {
        step: '03',
        title: 'Equipment Load-In & Technical Rehearsals',
        desc: 'Full AV setup with digital audio consoles, wireless RF management, and presenter technical rehearsals.',
      },
      {
        step: '04',
        title: 'Live Show Calling & Multi-Camera Capture',
        desc: 'Professional show calling, live video cueing, seamless speaker transitions, and 4K archive recording.',
      },
    ],
    deliverables: [
      'Complete turn-key audio, visual, lighting, and staging equipment package',
      'Custom 3D stage renders and floor plans for venue approval',
      'Professional on-site technical crew (sound engineers, lighting ops, stage managers)',
      'Multi-camera 4K recording of all keynotes, presentations, and panel discussions',
      'Cinematic post-event highlight reel delivered within 72 hours of event conclusion',
    ],
    technologies: ['Yamaha Digital Audio', 'Shure Axient Digital', 'Chauvet Professional Lighting', 'Blackmagic ATEM', 'Barco Vision'],
    benefits: [
      {
        title: 'Zero Technical Failure',
        desc: 'Redundant audio and backup video switchers guarantee flawless keynote presentations.',
      },
      {
        title: 'Prestigious Brand Atmosphere',
        desc: 'Concert-grade lighting and modern stage architecture wow attendees and VIP guests.',
      },
      {
        title: 'High-Value Extended Content',
        desc: 'Recap films and keynote video recordings provide months of post-event social media content.',
      },
    ],
    targetAudience: [
      'Corporate enterprises hosting annual general meetings and summits',
      'Government agencies and trade associations running regional symposiums',
      'Luxury brands hosting VIP galas, product launches, and fashion presentations',
      'Conference organizers seeking a reliable technical production partner',
    ],
    faqs: [
      {
        question: 'Can you handle both small intimate gatherings and large auditorium summits?',
        answer:
          'Yes. We engineer bespoke AV setups ranging from executive boardrooms and 50-person VIP dinners to 1,500+ seat convention hall summits.',
      },
      {
        question: 'Do you provide on-site technical directors and operators?',
        answer:
          'Yes. Our team includes experienced sound engineers, lighting designers, camera operators, visual switchers, and dedicated show callers to oversee the event from start to finish.',
      },
      {
        question: 'How quickly can you deliver the event highlight video?',
        answer:
          'We provide teaser recap videos within 24 to 48 hours for immediate social media PR, with the full master documentary cut delivered within one week.',
      },
    ],
    relatedCaseStudyTag: 'corporate',
  },
  'ar-vr': {
    id: 'ar-vr',
    title: 'AR / VR & Spatial Computing Services',
    tagline: 'Interactive 3D Virtual Worlds, Spatial Video & WebXR Experiences',
    heroDescription:
      'Innowize Digital architects spatial computing experiences that transport audiences inside your brand world. From browser-based interactive 3D showrooms and WebXR to immersive 360° VR video and viral augmented reality face filters, we pioneer the future of interaction.',
    problemsSolved: [
      'Flat 2D product photos that cannot convey scale, materiality, and spatial presence',
      'High logistics costs and physical constraints of physical showrooms and pop-up activations',
      'Low audience engagement with conventional online marketing campaigns',
      'Need to showcase complex architecture or heavy industrial machinery remotely',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Spatial Concept & UX Architecture',
        desc: 'Defining spatial interaction models, user navigation paths, and platform targets (WebXR, VisionOS, Meta Quest).',
      },
      {
        step: '02',
        title: '3D Asset Modeling & Material Shading',
        desc: 'Creating lightweight, photorealistic 3D models with physically based rendering (PBR) materials.',
      },
      {
        step: '03',
        title: 'Interactive Logic & WebGL Optimization',
        desc: 'Programming real-time lighting, interactive hotspots, camera transitions, and audio cues.',
      },
      {
        step: '04',
        title: 'Cross-Device Deployment & Analytics',
        desc: 'Testing across mobile browsers, desktop WebGL, and dedicated VR headsets with spatial analytics.',
      },
    ],
    deliverables: [
      'Web-based interactive 3D showroom accessible without app downloads',
      'Custom AR filters for Instagram, TikTok, and web mobile cameras',
      'Immersive 360° 8K spatial video production for VR headsets',
      'Optimized 3D asset library (GLTF/GLB formats with PBR textures)',
      'Spatial user interaction analytics and conversion integration',
    ],
    technologies: ['Three.js', 'Blender', 'Unreal Engine 5', 'Spark AR', 'WebXR', 'Unity'],
    benefits: [
      {
        title: 'Global Accessibility',
        desc: 'Allow international buyers to walk through your physical facilities and products from their living rooms.',
      },
      {
        title: '3x Longer Dwell Time',
        desc: 'Interactive 3D experiences capture significantly longer session durations than static web pages.',
      },
      {
        title: 'Friction-Free Interaction',
        desc: 'Web-based 3D runs smoothly right in the browser on iOS and Android without downloading an app.',
      },
    ],
    targetAudience: [
      'Real estate developers showcasing unbuilt architecture and luxury apartments',
      'High-end retail, furniture, and automotive brands enabling virtual product configuration',
      'Museums and cultural institutions digitizing physical heritage collections',
      'Industrial manufacturers presenting complex machinery at international trade expos',
    ],
    faqs: [
      {
        question: 'Do users need to install an app to view your 3D and AR experiences?',
        answer:
          'No! We specialize in Web-based 3D (WebXR and Three.js), which opens directly in Safari, Chrome, and Edge on any smartphone, tablet, or desktop with no downloads required.',
      },
      {
        question: 'Can you produce 360-degree VR videos of our facilities?',
        answer:
          'Yes. We shoot with dedicated multi-lens 360° cinema camera rigs in 8K resolution, with spatial audio capture for playback on headsets like Apple Vision Pro and Meta Quest.',
      },
    ],
    relatedCaseStudyTag: 'commercial',
  },
  'live-streaming': {
    id: 'live-streaming',
    title: 'Live Streaming & Broadcast Production Services',
    tagline: 'Television-Grade Multi-Camera Live Broadcasts for Global Audiences',
    heroDescription:
      'Innowize Digital produces professional multi-camera live broadcasts, virtual summits, and interactive hybrid events. With redundant enterprise bonded internet uplinks, broadcast graphics, and zero latency, we connect your brand with viewers across the globe.',
    problemsSolved: [
      'Grainy webcam streams with muddy audio that look amateur and lose viewer attention',
      'Internet connection drops and stream buffering that ruin high-stakes keynote moments',
      'Lack of interactive viewer engagement (live polls, lower-thirds, speaker titles, Q&A)',
      'Difficulty broadcasting simultaneously across YouTube, LinkedIn, Facebook, and private portals',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Technical Specification & Platform Setup',
        desc: 'Setting up secure RTMP/SRT distribution streams and custom branded landing page portals.',
      },
      {
        step: '02',
        title: 'Camera Setup & Network Bonding',
        desc: 'Deploying multiple cinema camera angles, wireless tally, intercoms, and bonded cellular uplinks.',
      },
      {
        step: '03',
        title: 'Live Vision Mixing & Broadcast Graphics',
        desc: 'Real-time camera switching, lower-third overlays, sponsor bugs, video roll-ins, and audio leveling.',
      },
      {
        step: '04',
        title: 'Post-Broadcast Delivery & Archiving',
        desc: 'Instant full-resolution recording handoff, chapter breakdown, and social media teaser clips.',
      },
    ],
    deliverables: [
      'Multi-camera live broadcast produced at 1080p60 or 4K resolution',
      'Redundant bonded 5G/LTE uplink hardware ensuring uninterrupted uptime',
      'Custom branded motion graphics package (intro stings, lower thirds, countdown timer)',
      'Simulcast distribution across up to 5 platforms simultaneously',
      'Full uncompressed master recording delivered immediately upon stream conclusion',
    ],
    technologies: ['Blackmagic Design ATEM', 'LiveU Bonded Uplink', 'vMix', 'Restream', 'SRT / RTMP protocols'],
    benefits: [
      {
        title: 'Television-Fidelity Quality',
        desc: 'Cinema cameras and broadcast audio give your company the polish of a professional news network.',
      },
      {
        title: 'Fail-Safe Reliability',
        desc: 'Dual hardware encoders and bonded multi-carrier SIM uplinks eliminate stream outage risks.',
      },
      {
        title: 'Expanded Global Reach',
        desc: 'Simultaneously reach thousands of remote delegates across multiple social channels.',
      },
    ],
    targetAudience: [
      'Public corporations hosting investor earnings calls and shareholder meetings',
      'Conference organizers streaming hybrid keynotes to paid remote ticket holders',
      'Brands unveiling new product lines to global customer audiences',
      'Government agencies and educational institutions broadcasting public announcements',
    ],
    faqs: [
      {
        question: 'What happens if the venue internet connection goes down during the stream?',
        answer:
          'We bring industrial bonded cellular modems (combining multiple independent 5G and 4G networks) alongside the venue connection. If the local internet drops, our system seamlessly routes data through the cellular channels without a single dropped frame.',
      },
      {
        question: 'Can you stream to our company’s private intranet or custom website?',
        answer:
          'Yes. We can provide embeddable player code with password protection, SSO integration, or private RTMP endpoints tailored to your corporate security requirements.',
      },
    ],
    relatedCaseStudyTag: 'corporate',
  },
};
