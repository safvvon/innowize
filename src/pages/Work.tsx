import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, X, ArrowLeft, ArrowRight, LayoutGrid, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  category: string;
  client: string;
  year: string;
}

// 16 Exact Projects from Page 3 of Brand Spec PDF
const projectsData: Project[] = [
  {
    id: 1,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    title: 'Elysian',
    category: 'Brand Film',
    client: 'Haute Couture',
    year: '2024',
  },
  {
    id: 2,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    title: 'Chronox',
    category: 'Product Film',
    client: 'Swiss Horology',
    year: '2024',
  },
  {
    id: 3,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    title: 'Aureon Motors',
    category: 'Commercial',
    client: 'Aureon EV',
    year: '2024',
  },
  {
    id: 4,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    title: 'Everest',
    category: 'Documentary',
    client: 'Alpine Summit',
    year: '2024',
  },
  {
    id: 5,
    url: 'https://player.vimeo.com/video/1153483221?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    title: 'Nexora',
    category: 'Brand Identity',
    client: 'Nexora Labs',
    year: '2024',
  },
  {
    id: 6,
    url: 'https://player.vimeo.com/video/1153483174?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    title: 'Horizon',
    category: 'Architecture Film',
    client: 'Modern Spaces',
    year: '2023',
  },
  {
    id: 7,
    url: 'https://player.vimeo.com/video/76979871?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
    title: 'Interio',
    category: 'VR Experience',
    client: 'Spatial Design',
    year: '2023',
  },
  {
    id: 8,
    url: 'https://player.vimeo.com/video/148751763?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    title: 'Nebula',
    category: 'Motion Graphics',
    client: 'VFX World',
    year: '2023',
  },
  {
    id: 9,
    url: 'https://player.vimeo.com/video/115783408?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    title: 'Wanderlust',
    category: 'Travel Film',
    client: 'Nomad Voyages',
    year: '2023',
  },
  {
    id: 10,
    url: 'https://player.vimeo.com/video/125095515?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    title: 'Purevito',
    category: 'Product Film',
    client: 'Botanical Essentials',
    year: '2023',
  },
  {
    id: 11,
    url: 'https://player.vimeo.com/video/169599296?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    title: 'Solstice',
    category: 'Music Video',
    client: 'Lunar Records',
    year: '2023',
  },
  {
    id: 12,
    url: 'https://player.vimeo.com/video/179859217?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    title: 'Avera',
    category: 'Interior Film',
    client: 'Nordic Atelier',
    year: '2022',
  },
  {
    id: 13,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    title: 'Inovo',
    category: 'Product Shoot',
    client: 'Acoustic Labs',
    year: '2022',
  },
  {
    id: 14,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    title: 'Elenora',
    category: 'Furniture Shoot',
    client: 'Scandinavian Living',
    year: '2022',
  },
  {
    id: 15,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    title: 'Veyra',
    category: 'Fashion Film',
    client: 'Milan Studio',
    year: '2022',
  },
  {
    id: 16,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    title: 'Aqua',
    category: 'Nature Film',
    client: 'Oceanic Research',
    year: '2022',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Brand Film', label: 'Brand Films' },
  { id: 'Product Film', label: 'Product Films' },
  { id: 'Commercial', label: 'Commercials' },
  { id: 'Documentary', label: 'Documentaries' },
  { id: 'Motion Graphics', label: 'Motion' },
];

export const Work: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-28 pb-20">
      {/* Top Header Row spanning full screen width */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-4 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.25em] uppercase mb-3">
              <span>•</span>
              <span>PORTFOLIO & SHOWCASE</span>
              <span>•</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-barlow text-white tracking-tight leading-none">
              Selected Works
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-poppins mt-3 max-w-2xl leading-relaxed">
              Explore our curated portfolio of commercial films, brand documentaries, spatial experiences, and visual campaigns crafted for industry leaders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#2563FF] text-white shadow-[0_0_20px_rgba(37,99,255,0.45)] border border-[#2563FF]'
                      : 'bg-[#0F1628] text-white/70 hover:bg-[#141A2B] hover:text-white border border-[#141A2B]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 bg-[#0F1628] p-1.5 rounded-full border border-[#141A2B]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                  viewMode === 'masonry' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
                }`}
                title="Masonry View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Projects Showcase Grid */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-6">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => setActiveVideo(project)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF] transition-all duration-500 shadow-xl hover:shadow-[0_12px_35px_rgba(37,99,255,0.25)] ${
                  viewMode === 'masonry' && idx % 3 === 0 ? 'h-[480px]' : 'h-[400px] xl:h-[440px]'
                }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Client Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-poppins font-medium text-white/80 border border-white/10">
                    {project.client}
                  </span>
                  <span className="text-xs font-poppins font-bold text-white/40 tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Center Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,255,0.8)] group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between bg-gradient-to-t from-[#0B0E17] to-transparent">
                  <div>
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#60A5FA] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Plus Pill Button */}
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white/80 group-hover:text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/15 group-hover:border-[#2563FF] group-hover:scale-110 shadow-lg">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full-Width Capabilities Banner */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 lg:p-12 rounded-3xl bg-[#0F1628] border border-[#141A2B] shadow-2xl text-center">
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-barlow text-white mb-1">
              16+
            </div>
            <div className="text-xs font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Featured Productions
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-barlow text-white mb-1">
              8K & 4K
            </div>
            <div className="text-xs font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Cinema Grade Pipeline
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-barlow text-white mb-1">
              100%
            </div>
            <div className="text-xs font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              In-House Execution
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-barlow text-white mb-1">
              28+
            </div>
            <div className="text-xs font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Global Brand Partners
            </div>
          </div>
        </div>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
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

      {/* Full-Width Bottom CTA Banner */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 mt-8">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-10 md:p-16 lg:p-20 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            READY TO CREATE <br />
            <span className="text-[#2563FF]">YOUR STORY?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-poppins max-w-3xl mx-auto leading-relaxed mb-8">
            Let's collaborate to bring your vision to life with compelling visuals and digital experiences that resonate and convert.
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
