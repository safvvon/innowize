import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, X, LayoutGrid, Grid, Sparkles, Eye, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  category: string;
  client: string;
  year: string;
  tagline: string;
  // Proportions
  gridSpan: string;        // Bento grid column span (e.g. 'col-span-1 md:col-span-2' vs 'col-span-1')
  minHeight: string;       // Dynamic height in bento grid
  aspectClass: string;     // Aspect ratio class
  masonryHeight: string;   // Height in masonry view
  featured?: boolean;
}

// 32 Curated Works with Editorial Dynamic Proportions
const projectsData: Project[] = [
  {
    id: 1,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    title: 'Elysian',
    category: 'Brand Film',
    client: 'Haute Couture',
    year: '2024',
    tagline: 'High-fashion visual symphony blending haute couture with cinematic grace.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[440px] lg:min-h-[500px]',
    aspectClass: 'aspect-[16/10]',
    masonryHeight: 'h-[520px]',
    featured: true,
  },
  {
    id: 2,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    title: 'Chronox',
    category: 'Product Film',
    client: 'Swiss Horology',
    year: '2024',
    tagline: 'Precision mechanical movement captured at high-speed macro optics.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[440px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[460px]',
  },
  {
    id: 3,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    title: 'Aureon Motors',
    category: 'Commercial',
    client: 'Aureon EV',
    year: '2024',
    tagline: 'The dawn of electric hypercars through dynamic night track cinematography.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[380px] lg:min-h-[420px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[380px]',
    featured: true,
  },
  {
    id: 4,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    title: 'Everest',
    category: 'Documentary',
    client: 'Alpine Summit',
    year: '2024',
    tagline: 'Expedition filmmaking pushed beyond the death zone in 8K.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[340px]',
  },
  {
    id: 5,
    url: 'https://player.vimeo.com/video/1153483221?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    title: 'Nexora',
    category: 'Brand Identity',
    client: 'Nexora Labs',
    year: '2024',
    tagline: 'Futuristic AI visual systems crafted for tomorrow’s bio-tech pioneers.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[480px]',
  },
  {
    id: 6,
    url: 'https://player.vimeo.com/video/1153483174?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'Horizon',
    category: 'Architecture Film',
    client: 'Modern Spaces',
    year: '2023',
    tagline: 'Minimalist brutalist architecture illuminated through sunlight studies.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[380px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[390px]',
  },
  {
    id: 7,
    url: 'https://player.vimeo.com/video/76979871?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    title: 'Interio',
    category: 'VR Experience',
    client: 'Spatial Design',
    year: '2023',
    tagline: 'Interactive virtual environment tailored for spatial computing headsets.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[420px] lg:min-h-[480px]',
    aspectClass: 'aspect-[16/10]',
    masonryHeight: 'h-[490px]',
    featured: true,
  },
  {
    id: 8,
    url: 'https://player.vimeo.com/video/148751763?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    title: 'Nebula',
    category: 'Motion Graphics',
    client: 'VFX World',
    year: '2023',
    tagline: 'Procedural particle dynamics exploring celestial rebirth.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-square',
    masonryHeight: 'h-[360px]',
  },
  {
    id: 9,
    url: 'https://player.vimeo.com/video/115783408?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    title: 'Wanderlust',
    category: 'Travel Film',
    client: 'Nomad Voyages',
    year: '2023',
    tagline: 'Raw, visceral human journeys across remote archipelagos.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[500px]',
  },
  {
    id: 10,
    url: 'https://player.vimeo.com/video/125095515?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1200&q=80',
    title: 'Purevito',
    category: 'Product Film',
    client: 'Botanical Essentials',
    year: '2023',
    tagline: 'Organic skincare commercial capturing pure liquid purity.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[380px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[370px]',
  },
  {
    id: 11,
    url: 'https://player.vimeo.com/video/169599296?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    title: 'Solstice',
    category: 'Music Video',
    client: 'Lunar Records',
    year: '2023',
    tagline: 'Hypnotic lighting installations synchronized with ambient electronica.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[350px]',
  },
  {
    id: 12,
    url: 'https://player.vimeo.com/video/179859217?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    title: 'Avera',
    category: 'Interior Film',
    client: 'Nordic Atelier',
    year: '2022',
    tagline: 'Warm Scandinavian interior textures documented on 35mm film.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[400px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[410px]',
  },
  {
    id: 13,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    title: 'Inovo',
    category: 'Product Shoot',
    client: 'Acoustic Labs',
    year: '2022',
    tagline: 'High-end studio headphone showcase with holographic sound waves.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[470px]',
  },
  {
    id: 14,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    title: 'Elenora',
    category: 'Furniture Shoot',
    client: 'Scandinavian Living',
    year: '2022',
    tagline: 'Tactile craftsmanship brought to life in ambient architectural light.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[340px]',
  },
  {
    id: 15,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    title: 'Veyra',
    category: 'Fashion Film',
    client: 'Milan Studio',
    year: '2022',
    tagline: 'Avante-garde silk movement in choreographed slow-motion.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[480px] lg:min-h-[520px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[510px]',
  },
  {
    id: 16,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    title: 'Aqua',
    category: 'Nature Film',
    client: 'Oceanic Research',
    year: '2022',
    tagline: 'Deep reef coral ecosystems filmed in ultra-macro bio-luminescence.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[400px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[430px]',
    featured: true,
  },
  {
    id: 17,
    url: 'https://player.vimeo.com/video/1153483174?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    title: 'Hyperion',
    category: 'Motion Graphics',
    client: 'Orbital Aerospace',
    year: '2024',
    tagline: 'Deep space exploration vehicle reveal utilizing photoreal CGI VFX.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[440px] lg:min-h-[500px]',
    aspectClass: 'aspect-[16/10]',
    masonryHeight: 'h-[520px]',
    featured: true,
  },
  {
    id: 18,
    url: 'https://player.vimeo.com/video/1153483221?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    title: 'Kurogane',
    category: 'Fashion Film',
    client: 'Tokyo Streetwear',
    year: '2024',
    tagline: 'Cyber-noir apparel filmed on the rain-soaked neon streets of Shibuya.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[470px]',
  },
  {
    id: 19,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    title: 'Apex Velocity',
    category: 'Commercial',
    client: 'Formula GT Racing',
    year: '2024',
    tagline: 'High-octane track battle captured with custom gyrostabilized pursuit drones.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[380px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[390px]',
  },
  {
    id: 20,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    title: 'Atelier Noir',
    category: 'Product Film',
    client: 'Geneva High Jewelry',
    year: '2024',
    tagline: 'Light diffraction across flawless diamonds filmed on specialized probe lenses.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[490px]',
  },
  {
    id: 21,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    title: 'Mirage',
    category: 'Architecture Film',
    client: 'Atacama Desert Retreat',
    year: '2023',
    tagline: 'Subterranean luxury villa interacting with the harshest desert elements.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[350px]',
  },
  {
    id: 22,
    url: 'https://player.vimeo.com/video/76979871?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    title: 'CyberPulse',
    category: 'Motion Graphics',
    client: 'Neural Matrix',
    year: '2023',
    tagline: 'Real-time generative visuals and holographic interface concept reel.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[400px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[420px]',
  },
  {
    id: 23,
    url: 'https://player.vimeo.com/video/169599296?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    title: 'Symphonia',
    category: 'Music Video',
    client: 'Berlin Philharmonic',
    year: '2023',
    tagline: 'A multi-sensory journey blending classical acoustics with responsive light art.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[360px]',
  },
  {
    id: 24,
    url: 'https://player.vimeo.com/video/148751763?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    title: 'Savage Peaks',
    category: 'Documentary',
    client: 'Redline Action Media',
    year: '2023',
    tagline: 'First descents of unchartered Alaskan peaks in sub-zero whiteout conditions.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[480px] lg:min-h-[520px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[510px]',
  },
  {
    id: 25,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    title: "L'Artisan",
    category: 'Brand Film',
    client: 'Maison Troisgros',
    year: '2023',
    tagline: 'The art of three-star Michelin gastronomy chronicled from soil to plate.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[420px] lg:min-h-[480px]',
    aspectClass: 'aspect-[16/10]',
    masonryHeight: 'h-[480px]',
    featured: true,
  },
  {
    id: 26,
    url: 'https://player.vimeo.com/video/125095515?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    title: 'Kroma Displays',
    category: 'Product Film',
    client: 'Quantum OLED',
    year: '2023',
    tagline: 'Pure black levels and billions of spectral colors in commercial spectacle.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-square',
    masonryHeight: 'h-[360px]',
  },
  {
    id: 27,
    url: 'https://player.vimeo.com/video/115783408?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    title: 'Zephyr',
    category: 'Commercial',
    client: 'Monaco Marine Superyachts',
    year: '2023',
    tagline: 'Elegance in open water: an 80m custom yacht navigating the Mediterranean.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[380px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[400px]',
  },
  {
    id: 28,
    url: 'https://player.vimeo.com/video/1153483221?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    title: 'Vortex Robotics',
    category: 'Product Film',
    client: 'Apex Cybernetics',
    year: '2023',
    tagline: 'Autonomous bipedal engineering demonstration in controlled industrial environments.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[480px]',
  },
  {
    id: 29,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    title: 'Echoes of Kyoto',
    category: 'Documentary',
    client: 'Heritage Preservation Trust',
    year: '2022',
    tagline: 'Generations of master sword-smiths preserving centuries-old metallurgy rituals.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[360px]',
    aspectClass: 'aspect-[4/3]',
    masonryHeight: 'h-[350px]',
  },
  {
    id: 30,
    url: 'https://player.vimeo.com/video/179859217?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    title: 'Lumina Core',
    category: 'Brand Identity',
    client: 'Helios Quantum Computing',
    year: '2022',
    tagline: 'Quantum coherence visualized through laser caustics and kinetic sculpture.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[390px]',
    aspectClass: 'aspect-[16/9]',
    masonryHeight: 'h-[410px]',
  },
  {
    id: 31,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    title: 'Velvet & Stone',
    category: 'Architecture Film',
    client: 'Milano Salone Del Mobile',
    year: '2022',
    tagline: 'Sculptural stone monoliths and raw plaster textures in cinematic dialogue.',
    gridSpan: 'col-span-1',
    minHeight: 'min-h-[460px] lg:min-h-[500px]',
    aspectClass: 'aspect-[3/4]',
    masonryHeight: 'h-[460px]',
  },
  {
    id: 32,
    url: 'https://player.vimeo.com/video/76979871?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    title: 'Supernova Live',
    category: 'Motion Graphics',
    client: 'Tomorrowland Festival',
    year: '2022',
    tagline: 'Massive stadium LED holographic takeover synchronized to 140 BPM pyro cues.',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    minHeight: 'min-h-[440px] lg:min-h-[500px]',
    aspectClass: 'aspect-[16/10]',
    masonryHeight: 'h-[530px]',
    featured: true,
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Brand Film', label: 'Brand Films' },
  { id: 'Commercial', label: 'Commercials' },
  { id: 'Product Film', label: 'Product Films' },
  { id: 'Documentary', label: 'Documentaries' },
  { id: 'Architecture Film', label: 'Architecture' },
  { id: 'Motion Graphics', label: 'Motion & 3D' },
  { id: 'Fashion Film', label: 'Fashion' },
  { id: 'VR Experience', label: 'Spatial / VR' },
];

export const Work: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'bento' | 'masonry'>('bento');
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-28 pb-20">
      {/* Top Header Row with Extensive Works Count */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#2563FF]" />
                <span>Complete Archives</span>
              </span>
              <span className="px-3 py-0.5 rounded-full bg-[#2563FF]/15 border border-[#2563FF]/30 text-[#60A5FA] text-xs font-poppins font-medium">
                {filteredProjects.length} Projects Available
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-barlow text-white tracking-tight">
              Our Works
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-poppins font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)] border border-[#2563FF]'
                      : 'bg-[#0F1628] text-white/70 hover:bg-[#141A2B] hover:text-white border border-[#141A2B]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: Bento Mosaic vs Editorial Masonry */}
            <div className="flex items-center gap-1.5 bg-[#0F1628] p-1.5 rounded-full border border-[#141A2B]">
              <button
                onClick={() => setViewMode('bento')}
                className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                  viewMode === 'bento' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
                }`}
                title="Bento Editorial Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                  viewMode === 'masonry' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
                }`}
                title="Fluid Masonry Proportions"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Proportions Showcase Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        {viewMode === 'bento' ? (
          /* BENTO MOSAIC VIEW: All 32 projects in varied 2-col landscape, 1-col tall portrait, and standard cards */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full auto-rows-[minmax(340px,auto)]"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: (idx % 8) * 0.04 }}
                  onClick={() => setActiveVideo(project)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${project.gridSpan} ${project.minHeight}`}
                >
                  {/* Thumbnail Image with cinematic zoom on hover */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/40 to-black/20 opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2563FF]/20 backdrop-blur-md border border-[#2563FF]/40 text-xs font-poppins font-semibold text-white">
                        <Sparkles className="w-3 h-3 text-[#2563FF]" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Button with Electric Glow on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,255,0.8)] border border-white/20">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Meta Content with Dynamic Proportion Info */}
                  <div className="relative z-10 p-6 md:p-8">
                    <p className="text-xs text-white/50 font-poppins uppercase tracking-widest mb-1">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline blurb */}
                    <p className="text-xs sm:text-sm text-white/70 font-poppins leading-relaxed line-clamp-2 max-w-xl">
                      {project.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider flex items-center gap-1.5 group-hover:text-white transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Watch Production</span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-300 border border-white/10 group-hover:border-[#2563FF]">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* MASONRY VIEW: True CSS Multi-Column flow with varied heights */
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6 lg:space-y-8 w-full">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % 8) * 0.04 }}
                onClick={() => setActiveVideo(project)}
                className={`break-inside-avoid group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${project.masonryHeight}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/40 to-black/20 opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="relative z-10 p-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2563FF]/20 backdrop-blur-md border border-[#2563FF]/40 text-xs font-poppins font-semibold text-white">
                      <Sparkles className="w-3 h-3 text-[#2563FF]" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,255,0.8)] border border-white/20">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 p-6">
                  <p className="text-xs text-white/50 font-poppins uppercase tracking-widest mb-1">
                    {project.client} • {project.year}
                  </p>
                  <h3 className="text-2xl font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 font-poppins leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider">
                      Watch Video
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-300">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Video Playback Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={activeVideo.url}
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                title={activeVideo.title}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 mb-16">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-10 md:p-16 lg:p-20 text-center shadow-2xl w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            READY TO CREATE <br />
            <span className="text-[#2563FF]">YOUR STORY?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-poppins max-w-4xl mx-auto leading-relaxed mb-8">
            Let's collaborate to bring your vision to life with compelling visuals and digital experiences that resonate.
          </p>
          <button
            onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
            className="px-10 py-4 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white font-semibold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,255,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer border border-[#60A5FA]/30"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};
