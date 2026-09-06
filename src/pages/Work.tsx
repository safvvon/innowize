import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Grid, LayoutGrid, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  category: 'branding' | 'commercial' | 'motion' | 'film';
  client: string;
  year: string;
  height: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    url: 'https://player.vimeo.com/video/1153483177?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483177_640.jpg',
    title: 'Brand Story',
    category: 'branding',
    client: 'Tech Startup',
    year: '2024',
    height: 'h-[400px]',
  },
  {
    id: 2,
    url: 'https://player.vimeo.com/video/1153483144?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483144_640.jpg',
    title: 'Product Launch',
    category: 'commercial',
    client: 'Fashion Brand',
    year: '2024',
    height: 'h-[500px]',
  },
  {
    id: 3,
    url: 'https://player.vimeo.com/video/1153483218?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483218_640.jpg',
    title: 'Motion Graphics',
    category: 'motion',
    client: 'Digital Agency',
    year: '2024',
    height: 'h-[350px]',
  },
  {
    id: 4,
    url: 'https://player.vimeo.com/video/1153483192?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483192_640.jpg',
    title: 'Documentary',
    category: 'film',
    client: 'Non-Profit Org',
    year: '2023',
    height: 'h-[450px]',
  },
  {
    id: 5,
    url: 'https://player.vimeo.com/video/1153483221?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483221_640.jpg',
    title: 'Social Campaign',
    category: 'commercial',
    client: 'Beverage Co',
    year: '2023',
    height: 'h-[380px]',
  },
  {
    id: 6,
    url: 'https://player.vimeo.com/video/1153483174?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/1153483174_640.jpg',
    title: 'Brand Identity',
    category: 'branding',
    client: 'Retail Chain',
    year: '2023',
    height: 'h-[420px]',
  },
  {
    id: 7,
    url: 'https://player.vimeo.com/video/76979871?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/76979871_640.jpg',
    title: 'Creative Reel',
    category: 'motion',
    client: 'Studio Project',
    year: '2023',
    height: 'h-[480px]',
  },
  {
    id: 8,
    url: 'https://player.vimeo.com/video/148751763?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/148751763_640.jpg',
    title: 'Event Coverage',
    category: 'film',
    client: 'Music Festival',
    year: '2022',
    height: 'h-[360px]',
  },
  {
    id: 9,
    url: 'https://player.vimeo.com/video/115783408?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/115783408_640.jpg',
    title: 'Product Demo',
    category: 'commercial',
    client: 'Tech Company',
    year: '2022',
    height: 'h-[440px]',
  },
  {
    id: 10,
    url: 'https://player.vimeo.com/video/125095515?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/125095515_640.jpg',
    title: 'Animation Showcase',
    category: 'motion',
    client: 'Animation Studio',
    year: '2022',
    height: 'h-[390px]',
  },
  {
    id: 11,
    url: 'https://player.vimeo.com/video/169599296?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/169599296_640.jpg',
    title: 'Brand Film',
    category: 'branding',
    client: 'Luxury Brand',
    year: '2022',
    height: 'h-[520px]',
  },
  {
    id: 12,
    url: 'https://player.vimeo.com/video/179859217?autoplay=1',
    thumbnail: 'https://i.vimeocdn.com/video/179859217_640.jpg',
    title: 'Short Film',
    category: 'film',
    client: 'Independent',
    year: '2021',
    height: 'h-[370px]',
  },
];

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'motion', label: 'Motion' },
  { id: 'film', label: 'Film' },
];

export const Work: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const navigate = useNavigate();

  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;
      gsap.to(text1.current, {
        x: '15%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(text2.current, {
        x: '-20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img src="/images/herobg.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden">
          <div
            ref={text1}
            className="text-[25vw] font-black italic text-white/[0.04] uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            PORTFOLIO
          </div>
          <div
            ref={text2}
            className="text-[25vw] font-black italic text-white/[0.04] uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            SHOWCASE
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            className="inline-block text-[#60A5FA] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Selected Works
          </motion.span>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black italic text-white uppercase font-barlow leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Stories That <br />
            <span className="text-[#2563FF]">Inspire Action</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-base md:text-xl font-poppins max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A curated collection of our finest work. From brand films to motion graphics, each project tells a unique story.
          </motion.p>
        </div>
      </section>

      {/* Filter and View Toggle Controls */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-poppins font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)] border border-[#2563FF]'
                  : 'bg-[#0F1628] text-white/70 hover:bg-[#141A2B] hover:text-white border border-[#141A2B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-[#0F1628] p-1 rounded-full border border-[#141A2B]">
          <button
            onClick={() => setViewMode('masonry')}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              viewMode === 'masonry' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
            }`}
            title="Masonry View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              viewMode === 'grid' ? 'bg-[#2563FF] text-white' : 'text-white/50 hover:text-white'
            }`}
            title="Grid View"
          >
            <Grid className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Projects Display */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'masonry'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveVideo(project)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0F1628] shadow-xl border border-[#141A2B] hover:border-[#2563FF]/50 transition-all duration-300 ${
                  viewMode === 'masonry' ? project.height : 'h-[420px]'
                }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#2563FF]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,255,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-left">
                  <div className="flex items-center justify-between text-xs font-poppins text-[#60A5FA] font-semibold tracking-wider uppercase mb-1">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-barlow text-white mb-1 group-hover:text-[#60A5FA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-poppins text-white/70">Client: {project.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
      <section className="relative py-24 md:py-32 px-6 bg-alpha/[0.04] border-t border-alpha/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black italic text-alpha uppercase font-barlow leading-tight mb-6">
            READY TO CREATE <br />
            <span className="text-beta">YOUR STORY?</span>
          </h2>
          <p className="text-alpha/70 text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed mb-10">
            Let's collaborate to bring your vision to life with compelling visuals that resonate.
          </p>
          <button
            onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
            className="px-10 py-4 rounded-full bg-beta hover:bg-[#1e7250] text-white font-semibold text-sm uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};
