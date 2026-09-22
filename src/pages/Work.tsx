import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  X,
  Sparkles,
  Eye,
  Film,
  Camera,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Images,
  Layers,
  ArrowRight,
  Maximize2,
  LayoutGrid,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  videoProjects,
  VideoProject,
} from '../data/portfolioData';
import {
  photoCollections,
  PhotoCollection,
} from '../data/photoData';

const prefetchVideo = (driveId?: string) => {
  if (!driveId) return;
  const href = `https://drive.google.com/file/d/${driveId}/preview`;
  if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'document';
    link.href = href;
    document.head.appendChild(link);
  }
};

// Image loader with high-definition fallback cascade and cache-safe rendering
const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}> = ({ src, alt, className = '', fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [retryStep, setRetryStep] = useState(0);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
    setRetryStep(0);
  }, [src]);

  // Synchronously detect if the image was already cached/completed by the browser
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [imgSrc]);

  return (
    <div className="relative w-full h-full bg-[#0F1628] overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1628] via-[#141A2B] to-[#1E293B] animate-pulse pointer-events-none" />
      )}
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (retryStep === 0 && fallbackSrc && imgSrc !== fallbackSrc) {
            setRetryStep(1);
            setImgSrc(fallbackSrc);
          } else if (retryStep <= 1 && imgSrc.includes('lh3.googleusercontent.com/d/')) {
            const driveId = imgSrc.split('lh3.googleusercontent.com/d/')[1]?.split('=')[0];
            if (driveId) {
              setRetryStep(2);
              setImgSrc(`https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`);
            }
          } else if (retryStep <= 2) {
            const idMatch = imgSrc.match(/id=([^&]+)/) || imgSrc.match(/\/d\/([^=]+)/);
            if (idMatch && idMatch[1]) {
              setRetryStep(3);
              setImgSrc(`https://lh3.googleusercontent.com/d/${idMatch[1]}=w3840`);
            }
          }
        }}
        style={{ imageRendering: '-webkit-optimize-contrast' }}
        className={`${className} transition-opacity duration-300`}
      />
    </div>
  );
};

interface CardBentoLayout {
  spanClass: string;
  heightClass: string;
  badgeType: 'banner' | 'wide' | 'portrait' | 'square' | 'duo';
}

// Deterministic gapless 12-column layout for video projects with diverse standard shapes
const getVideoBentoLayout = (index: number, total: number): CardBentoLayout => {
  // If only 1 item in view
  if (total === 1) {
    return {
      spanClass: 'col-span-1 md:col-span-12',
      heightClass: 'h-[360px] sm:h-[420px] lg:h-[480px]',
      badgeType: 'banner',
    };
  }

  // If 2 items (e.g. 2-item categories like Panel Discussions or Testimonials)
  if (total === 2) {
    return {
      spanClass: 'col-span-1 md:col-span-6',
      heightClass: 'h-[340px] sm:h-[380px] lg:h-[420px]',
      badgeType: 'duo',
    };
  }

  // If 3 items (e.g. 3-item categories)
  if (total === 3) {
    return {
      spanClass: 'col-span-1 md:col-span-4',
      heightClass: 'h-[320px] sm:h-[360px] lg:h-[390px]',
      badgeType: 'square',
    };
  }

  // If 4 items (e.g. Events: 7+5 and 5+7)
  if (total === 4) {
    if (index === 0) return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    if (index === 1) return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    if (index === 2) return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
  }

  // If 5 items (e.g. Brand Story: 7+5 and 4+4+4)
  if (total === 5) {
    if (index === 0) return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    if (index === 1) return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[320px] sm:h-[350px] lg:h-[380px]', badgeType: 'square' };
  }

  // Full 16-item grid: Standard Curated Editorial Bento Rhythm (Every row = exactly 12 columns)
  const patternIndex = index % 16;
  switch (patternIndex) {
    case 0:
      return { spanClass: 'col-span-1 md:col-span-12', heightClass: 'h-[360px] sm:h-[420px] lg:h-[490px]', badgeType: 'banner' };
    case 1:
      return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 2:
      return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 3:
      return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 4:
      return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 5:
    case 6:
    case 7:
      return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[310px] sm:h-[340px] lg:h-[370px]', badgeType: 'square' };
    case 8:
      return { spanClass: 'col-span-1 md:col-span-8', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 9:
      return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 10:
      return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 11:
      return { spanClass: 'col-span-1 md:col-span-8', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 12:
    case 13:
    case 14:
      return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[310px] sm:h-[340px] lg:h-[370px]', badgeType: 'square' };
    case 15:
    default:
      return { spanClass: 'col-span-1 md:col-span-12', heightClass: 'h-[360px] sm:h-[420px] lg:h-[470px]', badgeType: 'banner' };
  }
};

// Deterministic gapless 12-column layout for 8 photo collections
const getPhotoBentoLayout = (index: number): CardBentoLayout => {
  switch (index) {
    case 0:
      return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 1:
      return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 2:
      return { spanClass: 'col-span-1 md:col-span-5', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'portrait' };
    case 3:
      return { spanClass: 'col-span-1 md:col-span-7', heightClass: 'h-[350px] sm:h-[390px] lg:h-[430px]', badgeType: 'wide' };
    case 4:
    case 5:
    case 6:
      return { spanClass: 'col-span-1 md:col-span-4', heightClass: 'h-[310px] sm:h-[340px] lg:h-[370px]', badgeType: 'square' };
    case 7:
    default:
      return { spanClass: 'col-span-1 md:col-span-12', heightClass: 'h-[360px] sm:h-[420px] lg:h-[470px]', badgeType: 'banner' };
  }
};

export const Work: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);

  // Automatically stop video playback when user leaves the website, minimizes, or switches tabs
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsTabActive(false);
      } else {
        setIsTabActive(true);
      }
    };

    const handlePageHide = () => {
      setIsTabActive(false);
      setActiveVideo(null);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);
    };
  }, []);

  useEffect(() => {
    if (activeVideo) {
      setVideoLoading(true);
      const timer = setTimeout(() => setVideoLoading(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [activeVideo]);
  
  // Active Photo Gallery Modal
  const [activeGallery, setActiveGallery] = useState<PhotoCollection | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [photoLoading, setPhotoLoading] = useState(true);
  const [galleryViewMode, setGalleryViewMode] = useState<'collage' | 'single'>('collage');

  useEffect(() => {
    setPhotoLoading(true);
  }, [activePhotoIndex, activeGallery]);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle URL deep linking (e.g. /work?video=vid-1 or /work#vid-1) from Home page
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const videoParam = searchParams.get('video') || (location.hash ? location.hash.replace('#', '') : '');

    if (videoParam) {
      const match = videoProjects.find((v) => v.id === videoParam || v.driveId === videoParam);
      if (match) {
        setActiveTab('all');
        setActiveVideo(match);
        const timer = setTimeout(() => {
          const el = document.getElementById(match.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 250);
        return () => clearTimeout(timer);
      }
    }
  }, [location.search, location.hash]);

  // Distinct categories dynamically from data
  const categories = useMemo(() => {
    const cats = [
      { id: 'all', label: 'All Works' },
      { id: 'ai-videos', label: 'AI Videos' },
      { id: 'events', label: 'Events & Summits' },
      { id: 'brand-story', label: 'Brand Films' },
      { id: 'product-service', label: 'Commercial' },
      { id: 'panel-discussions', label: 'Panels' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'photography', label: 'Photography' },
    ];
    return cats;
  }, []);

  const categoryCounts = useMemo(() => {
    return {
      all: videoProjects.length + photoCollections.length,
      'ai-videos': videoProjects.filter((v) => v.categorySlug === 'ai-videos').length,
      events: videoProjects.filter((v) => v.categorySlug === 'events').length,
      'brand-story': videoProjects.filter((v) => v.categorySlug === 'brand-story').length,
      'product-service': videoProjects.filter((v) => v.categorySlug === 'product-service').length,
      'panel-discussions': videoProjects.filter((v) => v.categorySlug === 'panel-discussions').length,
      testimonials: videoProjects.filter((v) => v.categorySlug === 'testimonials').length,
      photography: photoCollections.length,
    };
  }, []);

  // Filtered lists
  const isPhotoOnly = activeTab === 'photography';
  const showPhotos = activeTab === 'all' || activeTab === 'photography';
  const showVideos = activeTab !== 'photography';

  const filteredVideos = useMemo(() => {
    if (activeTab === 'all') return videoProjects;
    return videoProjects.filter((v) => v.categorySlug === activeTab);
  }, [activeTab]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeGallery && galleryViewMode === 'single') {
          setGalleryViewMode('collage');
        } else {
          setActiveVideo(null);
          setActiveGallery(null);
        }
      }
      if (activeGallery && galleryViewMode === 'single') {
        if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) => (prev + 1) % activeGallery.photos.length);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length);
        }
      }
    },
    [activeGallery, galleryViewMode]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openGallery = (collection: PhotoCollection, startIndex = 0) => {
    setActiveGallery(collection);
    setActivePhotoIndex(startIndex);
    setGalleryViewMode('collage');
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-28 pb-20">
      {/* Top Header Section with Clean Standard Architecture */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-barlow text-white tracking-tight uppercase leading-none">
            Selected Works
          </h1>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0D121F] border border-white/10 text-xs font-poppins text-white/70">
              Showing <span className="text-[#60A5FA] font-semibold">{isPhotoOnly ? photoCollections.length : activeTab === 'all' ? (videoProjects.length + photoCollections.length) : filteredVideos.length}</span> Items
            </span>
          </div>
        </div>

        {/* Standard Segmented Filter Bar with Smooth Sliding Pill */}
        <div className="mt-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0D121F] border border-white/10 backdrop-blur-xl shadow-xl gap-1">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              const count = categoryCounts[cat.id as keyof typeof categoryCounts] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-poppins font-medium transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#2563FF] to-[#3B82F6] rounded-xl shadow-[0_0_20px_rgba(37,99,255,0.45)] border border-[#60A5FA]/30 -z-10"
                    />
                  )}
                  {cat.id === 'photography' ? (
                    <Camera className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#60A5FA]'}`} />
                  ) : (
                    <Film className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#60A5FA]'}`} />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-semibold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-white/5 text-white/40'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Works Grid Area - Dynamic Editorial Bento Grid with Different Shapes */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        {/* 1. VIDEOGRAPHY SECTION */}
        {showVideos && (
          <div>
            {/* Standard 12-Column Gapless Bento Grid with Different Shapes */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 w-full">
              <AnimatePresence mode="popLayout">
                {filteredVideos.map((project, idx) => {
                  const layout = getVideoBentoLayout(idx, filteredVideos.length);
                  const isFull = layout.badgeType === 'banner';

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      id={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                      onClick={() => setActiveVideo(project)}
                      onMouseEnter={() => prefetchVideo(project.driveId)}
                      onTouchStart={() => prefetchVideo(project.driveId)}
                      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#0A0D16] border transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-1.5 scroll-mt-28 ${
                        layout.spanClass
                      } ${layout.heightClass} ${
                        isFull
                          ? 'border-[#2563FF]/50 hover:border-[#2563FF] shadow-[0_0_40px_rgba(37,99,255,0.25)]'
                          : layout.badgeType === 'portrait'
                          ? 'border-[#60A5FA]/30 hover:border-[#2563FF] shadow-[0_0_30px_rgba(96,165,250,0.15)]'
                          : 'border-[#141C30] hover:border-[#2563FF]/80 hover:shadow-[0_20px_45px_rgba(37,99,255,0.25)]'
                      }`}
                    >
                      {/* Full-Bleed Genuine Video Thumbnail */}
                      <div className="absolute inset-0 w-full h-full">
                        <ImageWithFallback
                          src={project.thumbnail}
                          alt={project.title}
                          fallbackSrc={project.driveId ? `https://drive.google.com/thumbnail?id=${project.driveId}&sz=w1200` : undefined}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.04] saturate-[1.07] brightness-[1.02]"
                        />
                      </div>

                      {/* Dynamic Subtle Vignette for Bottom Text Legibility */}
                      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/20 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Center Glowing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div
                          className={`rounded-full bg-[#2563FF]/90 group-hover:bg-[#2563FF] backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(37,99,255,0.85)] border border-white/35 group-hover:scale-110 transition-transform duration-300 text-white ${
                            isFull ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11 sm:w-13 sm:h-13'
                          }`}
                        >
                          <Play className={`${isFull ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-5 h-5'} fill-white translate-x-0.5`} />
                        </div>
                      </div>

                      {/* Bottom Title Only — Pure & Minimal */}
                      <div className="relative z-10 p-4 sm:p-5 mt-auto">
                        <h3
                          className={`font-bold font-barlow text-white group-hover:text-[#60A5FA] transition-colors leading-tight truncate ${
                            isFull
                              ? 'text-lg sm:text-2xl md:text-3xl'
                              : layout.badgeType === 'wide'
                              ? 'text-base sm:text-lg md:text-xl'
                              : 'text-sm sm:text-base md:text-lg'
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* 2. PHOTOGRAPHY SECTION (When 'All' or 'Photography' is selected) */}
        {showPhotos && (
          <div className={`${showVideos ? 'mt-16 pt-12 border-t border-white/10' : 'mt-4'}`}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA]">
                  <Camera className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white uppercase tracking-tight">
                  Photography
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#0F1628] border border-white/10 text-xs font-poppins text-white/80">
                <span className="text-[#60A5FA] font-bold">{photoCollections.length}</span> Albums
              </span>
            </div>

            {/* Standard 12-Column Gapless Photography Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 w-full">
              {photoCollections.map((collection, idx) => {
                const layout = getPhotoBentoLayout(idx);
                const isFull = layout.badgeType === 'banner';

                return (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                    onClick={() => openGallery(collection, 0)}
                    className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#0A0D16] border border-[#141C30] hover:border-[#2563FF] shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(37,99,255,0.3)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between ${
                      layout.spanClass
                    } ${layout.heightClass}`}
                  >
                    {/* Full-Bleed Genuine Cover Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <ImageWithFallback
                        src={collection.coverImage}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.04] saturate-[1.07] brightness-[1.02]"
                      />
                    </div>

                    {/* Subtle Bottom Vignette */}
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/20 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Center Action Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#2563FF]/90 group-hover:bg-[#2563FF] backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(37,99,255,0.85)] border border-white/35 group-hover:scale-110 transition-transform duration-300 text-white">
                        <Images className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom Title Only — Pure & Minimal */}
                    <div className="relative z-10 p-4 sm:p-5 mt-auto">
                      <h3
                        className={`font-bold font-barlow text-white leading-tight group-hover:text-[#60A5FA] transition-colors truncate ${
                          isFull ? 'text-lg sm:text-2xl md:text-3xl' : 'text-sm sm:text-base md:text-lg'
                        }`}
                      >
                        {collection.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Video Playback Modal Overlay (True Full Screen Cinema Mode) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999999] w-screen h-screen bg-black flex flex-col overflow-hidden select-none"
          >
            {/* Top Floating Glass Navigation Bar */}
            <div className="relative z-30 w-full px-4 sm:px-8 py-3 sm:py-3.5 bg-[#0B0E17]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between gap-4 shrink-0 shadow-2xl">
              <div className="flex items-center gap-3 overflow-hidden pr-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                  <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2563FF]/20 text-[#60A5FA] text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-wider">
                      {activeVideo.category}
                    </span>
                    <span className="text-[11px] text-white/50 font-poppins">• {activeVideo.year}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold font-barlow text-white truncate leading-tight mt-0.5">
                    {activeVideo.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-poppins font-semibold text-emerald-400 uppercase tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>1080p60 Stream Active</span>
                </span>

                <a
                  href={`https://drive.google.com/file/d/${activeVideo.driveId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563FF] via-[#3B82F6] to-[#60A5FA] hover:brightness-110 text-white text-xs font-poppins font-semibold transition-all shadow-[0_0_20px_rgba(37,99,255,0.5)] border border-white/25"
                  title="Open in Google Drive in original uncompressed 4K master resolution"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Watch Original 4K Master</span>
                </a>

                <button
                  onClick={() => {
                    if (!document.fullscreenElement) {
                      document.documentElement.requestFullscreen().catch(() => {});
                    } else if (document.exitFullscreen) {
                      document.exitFullscreen().catch(() => {});
                    }
                  }}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#2563FF] text-white transition-colors cursor-pointer border border-white/10"
                  title="Toggle Browser Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={() => {
                    if (document.fullscreenElement && document.exitFullscreen) {
                      document.exitFullscreen().catch(() => {});
                    }
                    setActiveVideo(null);
                  }}
                  className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white text-xs sm:text-sm font-poppins font-semibold transition-all shadow-[0_0_20px_rgba(37,99,255,0.5)] cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Video Player Container - Expands with Crisp Aspect-Aware Cinema Frame */}
            <div className="relative flex-1 w-full h-full bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
              <div
                className={`relative w-full h-full flex items-center justify-center ${
                  activeVideo.isTallLength
                    ? 'max-w-[480px] max-h-[85vh] aspect-[9/16]'
                    : 'max-w-7xl max-h-[85vh] aspect-video'
                } rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.95)] border border-white/15 bg-black`}
              >
                {/* Instant High-Res Poster Backdrop While Video Connects */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 flex items-center justify-center ${
                    videoLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={activeVideo.thumbnail.replace('=w3840', '=w1200')}
                    alt={activeVideo.title}
                    className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 opacity-40"
                  />
                  <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 bg-black/60 p-6 text-center z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#2563FF]/30 border-t-[#3B82F6] animate-spin" />
                      <div className="absolute inset-0 rounded-full bg-[#2563FF]/20 blur-xl animate-pulse" />
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5 absolute" />
                    </div>
                    <div>
                      <p className="text-white font-barlow text-base sm:text-xl font-bold tracking-wide uppercase">
                        Loading Cinema Stream...
                      </p>
                      <p className="text-white/60 font-poppins text-xs mt-1">
                        Connecting to 1080p high-fidelity master
                      </p>
                    </div>
                  </div>
                </div>

                {isTabActive && (
                  <iframe
                    src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    className={`w-full h-full border-0 relative z-10 transition-opacity duration-500 ${
                      videoLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    title={activeVideo.title}
                    onLoad={() => setVideoLoading(false)}
                  />
                )}
              </div>
            </div>

            {/* Subtle Bottom Bar with High-Res Quality Indicator */}
            <div className="px-6 py-2.5 bg-[#0B0E17]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0 text-xs font-poppins text-white/70">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-white font-medium">{activeVideo.client}</span>
                <span className="text-white/40 hidden sm:inline">—</span>
                <span className="truncate hidden sm:inline">{activeVideo.tagline}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-[11px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">⚡ Fidelity</span>
                <span>Click ⚙️ in player to lock <strong>1080p HD</strong>, or click <strong>Watch Original 4K Master</strong> for raw bitrate.</span>
                <span className="hidden md:inline text-white/40">• Press ESC to exit</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photography Lightbox Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-6 md:p-8">
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
              <div className="px-5 sm:px-8 py-3.5 sm:py-4 bg-[#0B0E17]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between gap-4 shrink-0 shadow-xl">
                <div className="flex items-center gap-3 truncate pr-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold font-barlow text-white truncate leading-tight">
                      {activeGallery.title}
                    </h4>
                    <p className="text-[11px] font-poppins text-white/60 truncate">
                      {activeGallery.client} • {activeGallery.photos.length} Photos in Album
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  {/* View Mode Toggle Pill */}
                  <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-poppins">
                    <button
                      onClick={() => setGalleryViewMode('collage')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        galleryViewMode === 'collage'
                          ? 'bg-[#2563FF] text-white shadow-[0_0_12px_rgba(37,99,255,0.4)]'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Collage</span>
                    </button>
                    <button
                      onClick={() => setGalleryViewMode('single')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        galleryViewMode === 'single'
                          ? 'bg-[#2563FF] text-white shadow-[0_0_12px_rgba(37,99,255,0.4)]'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Focus</span>
                    </button>
                  </div>

                  <a
                    href={activeGallery.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2563FF]/20 hover:bg-[#2563FF] text-[#93C5FD] hover:text-white text-xs font-poppins font-medium transition-all border border-[#2563FF]/30"
                    title="Open Original Album in Google Drive"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Drive Album</span>
                  </a>

                  <button
                    onClick={() => setActiveGallery(null)}
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#2563FF] text-white transition-colors cursor-pointer border border-white/10"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Gallery Content Area: Collage View (Default) vs Single Focus View */}
              {galleryViewMode === 'collage' ? (
                /* 1. MASONRY COLLAGE VIEW (Default) */
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-black/60 scrollbar-thin scrollbar-thumb-[#2563FF]/40">
                  <div className="max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3.5 sm:gap-4 space-y-3.5 sm:space-y-4">
                    {activeGallery.photos.map((photo, i) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.4) }}
                        onClick={() => {
                          setActivePhotoIndex(i);
                          setGalleryViewMode('single');
                        }}
                        className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-[#0A0D16] border border-white/10 hover:border-[#2563FF] shadow-lg hover:shadow-[0_12px_35px_rgba(37,99,255,0.35)] transition-all duration-300 hover:-translate-y-1"
                      >
                        <img
                          src={photo.thumbUrl.replace('=w2400', '=w800')}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                          className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 contrast-[1.04] saturate-[1.07]"
                        />
                        {/* Ambient Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 sm:p-3.5 pointer-events-none">
                          <span className="text-[11px] font-poppins text-white/90 font-medium truncate">
                            Photo {i + 1}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#2563FF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(37,99,255,0.85)]">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                /* 2. SINGLE FOCUS ZOOM VIEW (With Left/Right & Back to Collage) */
                <div className="relative flex-1 bg-black flex flex-col items-center justify-center p-4 overflow-hidden select-none">
                  {/* Floating "Back to Collage" pill */}
                  <button
                    onClick={() => setGalleryViewMode('collage')}
                    className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 hover:bg-[#2563FF] text-white border border-white/20 text-xs font-poppins font-medium transition-all cursor-pointer shadow-xl backdrop-blur-md"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Back to Collage Grid</span>
                  </button>

                  <button
                    onClick={() =>
                      setActivePhotoIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length)
                    }
                    className="absolute left-4 z-20 p-3.5 sm:p-4 rounded-full bg-black/65 hover:bg-[#2563FF] text-white border border-white/15 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110"
                    title="Previous Photo (Left Arrow)"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="relative max-w-full max-h-full flex items-center justify-center">
                    {/* Instant Low-Res Preview / Blur-up while full image loads */}
                    {photoLoading && (
                      <img
                        src={activeGallery.photos[activePhotoIndex].thumbUrl.replace('=w2400', '=w800')}
                        alt={activeGallery.photos[activePhotoIndex].title}
                        className="max-h-[78vh] max-w-full object-contain rounded-2xl filter blur-sm scale-95 opacity-70"
                      />
                    )}

                    {/* Sleek Spinner */}
                    {photoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full border-2 border-[#2563FF]/30 border-t-[#3B82F6] animate-spin" />
                      </div>
                    )}

                    <img
                      key={activeGallery.photos[activePhotoIndex].id}
                      src={activeGallery.photos[activePhotoIndex].fullUrl.replace('=s0', '=w2048')}
                      alt={activeGallery.photos[activePhotoIndex].title}
                      onLoad={() => setPhotoLoading(false)}
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                      className={`max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-300 contrast-[1.03] saturate-[1.05] ${
                        photoLoading ? 'opacity-0 absolute' : 'opacity-100'
                      }`}
                    />
                  </div>

                  <button
                    onClick={() => setActivePhotoIndex((prev) => (prev + 1) % activeGallery.photos.length)}
                    className="absolute right-4 z-20 p-3.5 sm:p-4 rounded-full bg-black/65 hover:bg-[#2563FF] text-white border border-white/15 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110"
                    title="Next Photo (Right Arrow)"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Bottom Photo Counter */}
                  <div className="absolute bottom-4 inset-x-0 flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-poppins text-white/90 shadow-xl font-medium">
                      {activePhotoIndex + 1} / {activeGallery.photos.length}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 mt-20 mb-12">
        <div className="rounded-3xl bg-gradient-to-b from-[#0F1628] to-[#0B0E17] border border-[#141A2B] p-10 md:p-16 text-center shadow-2xl w-full">
          <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>START A COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            READY TO CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#60A5FA]">
              YOUR STORY?
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-base font-poppins max-w-2xl mx-auto leading-relaxed mb-8">
            Let's collaborate to bring your vision to life with compelling cinematic video productions, high-impact event photography, and world-class digital storytelling.
          </p>
          <button
            onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
            className="px-10 py-4 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white font-semibold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,255,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer border border-[#60A5FA]/30"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Work;
