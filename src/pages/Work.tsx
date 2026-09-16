import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Plus,
  X,
  LayoutGrid,
  Grid,
  Sparkles,
  Eye,
  Film,
  Maximize2,
  Camera,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Images,
  Layers,
  Share2,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  videoProjects,
  photoCollections,
  videoCategories,
  VideoProject,
  PhotoCollection,
  PhotoItem
} from '../data/portfolioData';

// Image loader with fallback
const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}> = ({ src, alt, className = '', fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
  }, [src]);

  return (
    <div className="relative w-full h-full bg-[#0F1628] overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1628] via-[#141A2B] to-[#1E293B] animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (fallbackSrc && imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export const Work: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [mediaType, setMediaType] = useState<'all' | 'video' | 'photo'>('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'bento' | 'masonry'>('bento');
  
  // Active Video Modal
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  
  // Active Photo Gallery Modal
  const [activeGallery, setActiveGallery] = useState<PhotoCollection | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const navigate = useNavigate();

  // Filtered videos based on category
  const filteredVideos =
    selectedCategory === 'all'
      ? videoProjects
      : videoProjects.filter((v) => v.categorySlug === selectedCategory);

  // Keyboard navigation for photo gallery and video modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
        setActiveGallery(null);
      }
      if (activeGallery) {
        if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) => (prev + 1) % activeGallery.photos.length);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length);
        }
      }
    },
    [activeGallery]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openGallery = (collection: PhotoCollection, startIndex = 0) => {
    setActiveGallery(collection);
    setActivePhotoIndex(startIndex);
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-28 pb-20">
      {/* Top Header Row with Archive Counts & Format Switcher */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#2563FF]" />
                <span>Client Archives & Showcase</span>
              </span>
              <span className="px-3 py-0.5 rounded-full bg-[#2563FF]/15 border border-[#2563FF]/30 text-[#60A5FA] text-xs font-poppins font-medium">
                {mediaType === 'video'
                  ? `${filteredVideos.length} Videos`
                  : mediaType === 'photo'
                  ? `${photoCollections.length} Event Albums`
                  : `${filteredVideos.length + photoCollections.length} Works`}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-barlow text-white tracking-tight">
              Selected Works
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Primary Format Filter: All / Videography / Photography */}
            <div className="flex items-center p-1 rounded-full bg-[#0F1628] border border-[#141A2B]">
              <button
                onClick={() => setMediaType('all')}
                className={`px-4 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  mediaType === 'all'
                    ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setMediaType('video')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  mediaType === 'video'
                    ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Videography ({videoProjects.length})</span>
              </button>
              <button
                onClick={() => setMediaType('photo')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  mediaType === 'photo'
                    ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Photography ({photoCollections.length})</span>
              </button>
            </div>

            {/* View Mode Toggle: Bento Mosaic vs Editorial Masonry */}
            {mediaType !== 'photo' && (
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
            )}
          </div>
        </div>

        {/* Video Category Filter Pills (Shown when All or Videography is selected) */}
        {mediaType !== 'photo' && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-poppins font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2563FF] text-white shadow-[0_0_15px_rgba(37,99,255,0.4)] border border-[#2563FF]'
                    : 'bg-[#0F1628] text-white/70 hover:bg-[#141A2B] hover:text-white border border-[#141A2B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-8 py-6">
        {/* 1. VIDEOGRAPHY SECTION */}
        {mediaType !== 'photo' && (
          <div className="mb-20">
            {mediaType === 'all' && (
              <div className="flex items-center justify-between mb-8 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA]">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-barlow text-white tracking-wide uppercase">
                      Cinematic Videography
                    </h2>
                    <p className="text-xs md:text-sm font-poppins text-white/60">
                      Brand films, tech summits, robotic teasers, documentaries & panel discussions
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMediaType('video')}
                  className="text-xs font-poppins font-semibold text-[#60A5FA] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View All {videoProjects.length} Videos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {viewMode === 'bento' ? (
              /* Bento Mosaic View */
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full auto-rows-[minmax(340px,auto)]"
              >
                <AnimatePresence>
                  {filteredVideos.map((project, idx) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, delay: (idx % 8) * 0.04 }}
                      onClick={() => setActiveVideo(project)}
                      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0F1628] border transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                        project.gridSpan
                      } ${project.minHeight} ${
                        project.isFullLengthBanner
                          ? 'border-[#2563FF]/40 hover:border-[#2563FF] shadow-[0_0_35px_rgba(37,99,255,0.2)]'
                          : project.isTallLength
                          ? 'border-[#60A5FA]/30 hover:border-[#2563FF]/70'
                          : 'border-[#141A2B] hover:border-[#2563FF]/60'
                      }`}
                    >
                      {/* Video Thumbnail */}
                      <div className="absolute inset-0 w-full h-full">
                        <ImageWithFallback
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                        />
                      </div>

                      {/* Dark Vignette / Gradient Overlay */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          project.isFullLengthBanner
                            ? 'bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/50 to-black/30 opacity-90 group-hover:opacity-95'
                            : 'bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/40 to-black/20 opacity-85 group-hover:opacity-95'
                        }`}
                      />

                      {/* Top Badges */}
                      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase">
                            {project.category}
                          </span>
                          {project.isFullLengthBanner && (
                            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2563FF]/25 backdrop-blur-md border border-[#2563FF]/50 text-xs font-poppins font-semibold text-white">
                              <Maximize2 className="w-3 h-3 text-[#60A5FA]" />
                              <span>Full-Length Feature</span>
                            </span>
                          )}
                          {project.isTallLength && (
                            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-poppins font-medium text-white/80">
                              <span>Vertical Cinema (9:16)</span>
                            </span>
                          )}
                        </div>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2563FF]/30 backdrop-blur-md border border-[#2563FF]/60 text-xs font-poppins font-semibold text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]">
                            <Sparkles className="w-3 h-3 text-[#60A5FA]" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>

                      {/* Center Play Button with Electric Glow on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                        <div
                          className={`rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_35px_rgba(37,99,255,0.9)] border border-white/30 ${
                            project.isFullLengthBanner ? 'w-20 h-20' : 'w-16 h-16'
                          }`}
                        >
                          <Play className={`${project.isFullLengthBanner ? 'w-8 h-8' : 'w-6 h-6'} fill-current ml-0.5`} />
                        </div>
                      </div>

                      {/* Bottom Meta Content */}
                      <div className={`relative z-10 ${project.isFullLengthBanner ? 'p-6 sm:p-10 md:p-12' : 'p-6 md:p-8'}`}>
                        <p className="text-xs text-white/60 font-poppins uppercase tracking-widest mb-1.5">
                          {project.client} • {project.year}
                        </p>
                        <h3
                          className={`font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight mb-2.5 ${
                            project.isFullLengthBanner
                              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
                              : 'text-2xl md:text-3xl lg:text-4xl'
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p
                          className={`text-white/75 font-poppins leading-relaxed ${
                            project.isFullLengthBanner
                              ? 'text-sm sm:text-base md:text-lg max-w-3xl line-clamp-3'
                              : 'text-xs sm:text-sm max-w-xl line-clamp-2'
                          }`}
                        >
                          {project.tagline}
                        </p>

                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                          <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider flex items-center gap-1.5 group-hover:text-white transition-colors">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Watch Production</span>
                          </span>
                          <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-300 border border-white/10 group-hover:border-[#2563FF]">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Fluid Masonry View */
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6 lg:space-y-8 w-full">
                {filteredVideos.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: (idx % 8) * 0.04 }}
                    onClick={() => setActiveVideo(project)}
                    className={`break-inside-avoid group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${project.masonryHeight}`}
                  >
                    <div className="absolute inset-0 w-full h-full">
                      <ImageWithFallback
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                      />
                    </div>

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
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. PHOTOGRAPHY & EVENT COVERAGE SECTION */}
        {(mediaType === 'all' || mediaType === 'photo') && (
          <div className="mt-12 mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 px-2 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-barlow text-white tracking-wide uppercase">
                    Event Photography & Corporate Shoots
                  </h2>
                  <p className="text-xs md:text-sm font-poppins text-white/60">
                    High-profile corporate summits, client tours, international festivals, and executive portraits
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-xs font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase self-start sm:self-auto">
                8 Dedicated Collections
              </span>
            </div>

            {/* Photo Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {photoCollections.map((collection, idx) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                  onClick={() => openGallery(collection, 0)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/70 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[440px]"
                >
                  {/* Cover Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <ImageWithFallback
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/40 to-black/30 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase flex items-center gap-1.5">
                      <Camera className="w-3 h-3 text-[#2563FF]" />
                      <span>Photography</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563FF]/30 backdrop-blur-md border border-[#2563FF]/60 text-xs font-poppins font-semibold text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]">
                      <Images className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span>{collection.photoCount} Photos</span>
                    </span>
                  </div>

                  {/* Center Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,255,0.9)] border border-white/30">
                      <Images className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Meta */}
                  <div className="relative z-10 p-6 md:p-8">
                    <p className="text-xs text-white/60 font-poppins uppercase tracking-widest mb-1.5">
                      {collection.client} • {collection.year}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight mb-2.5">
                      {collection.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-poppins leading-relaxed line-clamp-2 mb-4">
                      {collection.tagline}
                    </p>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider flex items-center gap-1.5 group-hover:text-white transition-colors">
                        <Images className="w-3.5 h-3.5" />
                        <span>Explore Gallery ({collection.photoCount})</span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-300">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Video Playback Modal Overlay (Plays Real Google Drive Videos) */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-6xl bg-[#0B0E17] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#0F1628] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden pr-4">
                  <div className="w-8 h-8 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Film className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm sm:text-base font-bold font-barlow text-white truncate">
                      {activeVideo.title}
                    </h4>
                    <p className="text-[11px] font-poppins text-white/60 truncate">
                      {activeVideo.client} • {activeVideo.category} • {activeVideo.year}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://drive.google.com/file/d/${activeVideo.driveId}/view?usp=sharing`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#2563FF] text-white text-xs font-poppins font-medium transition-colors border border-white/10"
                    title="Open in Google Drive in original full resolution"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Drive</span>
                  </a>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  title={activeVideo.title}
                />
              </div>

              {/* Modal Bottom Information */}
              <div className="p-6 bg-[#0F1628] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-[#2563FF]/20 text-[#60A5FA] text-xs font-poppins font-semibold uppercase tracking-wider mb-2 inline-block">
                    {activeVideo.category}
                  </span>
                  <p className="text-xs sm:text-sm font-poppins text-white/70 max-w-3xl leading-relaxed">
                    {activeVideo.tagline}
                  </p>
                </div>

                <a
                  href={`https://drive.google.com/file/d/${activeVideo.driveId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden self-start flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2563FF] text-white text-xs font-poppins font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Resolution</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Photography Lightbox Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGallery(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-7xl h-[94vh] bg-[#0B0E17] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            >
              {/* Gallery Top Navigation Bar */}
              <div className="px-6 py-4 bg-[#0F1628] border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3 truncate pr-4">
                  <div className="w-8 h-8 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm sm:text-base font-bold font-barlow text-white truncate">
                      {activeGallery.title}
                    </h4>
                    <p className="text-[11px] font-poppins text-white/60 truncate">
                      {activeGallery.client} • {activePhotoIndex + 1} of {activeGallery.photos.length} photos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeGallery.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white text-xs font-poppins font-medium transition-colors shadow-[0_0_15px_rgba(37,99,255,0.4)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Drive Album</span>
                  </a>

                  <button
                    onClick={() => setActiveGallery(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Photo View with Left/Right Arrows */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden select-none">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setActivePhotoIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length)
                  }
                  className="absolute left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#2563FF] text-white border border-white/10 transition-colors cursor-pointer shadow-lg"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main High-Res Image Display */}
                <div className="relative max-w-full max-h-full flex items-center justify-center">
                  <img
                    key={activeGallery.photos[activePhotoIndex].id}
                    src={activeGallery.photos[activePhotoIndex].fullUrl}
                    alt={activeGallery.photos[activePhotoIndex].title}
                    className="max-h-[64vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setActivePhotoIndex((prev) => (prev + 1) % activeGallery.photos.length)}
                  className="absolute right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#2563FF] text-white border border-white/10 transition-colors cursor-pointer shadow-lg"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Strip at Bottom */}
              <div className="p-4 bg-[#0F1628] border-t border-white/10 shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-poppins text-white/50 uppercase tracking-wider">
                    Thumbnails — Click to view
                  </span>
                  <span className="text-xs font-poppins font-medium text-[#60A5FA]">
                    {activePhotoIndex + 1} / {activeGallery.photos.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#2563FF]/40">
                  {activeGallery.photos.map((photo, i) => (
                    <button
                      key={photo.id}
                      onClick={() => setActivePhotoIndex(i)}
                      className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activePhotoIndex === i
                          ? 'border-[#2563FF] scale-105 shadow-[0_0_10px_rgba(37,99,255,0.6)]'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={photo.thumbUrl} alt={photo.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 mt-16 mb-16">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-10 md:p-16 lg:p-20 text-center shadow-2xl w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            READY TO CREATE <br />
            <span className="text-[#2563FF]">YOUR STORY?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-poppins max-w-4xl mx-auto leading-relaxed mb-8">
            Let's collaborate to bring your vision to life with compelling cinematic video productions, high-impact event photography, and world-class digital storytelling.
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

export default Work;
