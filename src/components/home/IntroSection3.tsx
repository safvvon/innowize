import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, Film, X, ExternalLink, ArrowRight, Maximize2, ArrowLeft } from 'lucide-react';
import { videoProjects, VideoProject } from '../../data/portfolioData';

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

const ReelCard: React.FC<{
  project: VideoProject;
  index: number;
  onSelect: (project: VideoProject) => void;
}> = React.memo(({ project, index, onSelect }) => {
  const [imgSrc, setImgSrc] = useState(project.thumbnail);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [retryStep, setRetryStep] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const isPortrait = project.orientation === 'portrait';

  useEffect(() => {
    setImgSrc(project.thumbnail);
    setImgLoaded(false);
    setRetryStep(0);
  }, [project.thumbnail]);

  // Synchronously detect if the image was already cached/completed by the browser
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setImgLoaded(true);
    }
  }, [imgSrc]);

  return (
    <div
      onClick={() => onSelect(project)}
      onMouseEnter={() => prefetchVideo(project.driveId)}
      onTouchStart={() => prefetchVideo(project.driveId)}
      className={`group flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer border border-white/15 hover:border-[#2563FF] shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:shadow-[0_30px_70px_rgba(37,99,255,0.4)] bg-[#0A0D16] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
        isPortrait
          ? 'w-[235px] h-[390px] sm:w-[265px] sm:h-[440px] md:w-[285px] md:h-[480px]'
          : 'w-[330px] h-[390px] sm:w-[380px] sm:h-[440px] md:w-[420px] md:h-[480px]'
      }`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Background Poster / Thumbnail Placeholder */}
      {!imgLoaded && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0E17] via-[#141A2B] to-[#1E293B] animate-pulse pointer-events-none" />
      )}

      {/* Main Crisp Focused Video Thumbnail with Custom Focal Position */}
      <img
        ref={imgRef}
        src={imgSrc}
        alt={project.title}
        width={isPortrait ? '285' : '420'}
        height="480"
        loading={index < 2 ? 'eager' : 'lazy'}
        fetchPriority={index < 2 ? 'high' : 'auto'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setImgLoaded(true)}
        onError={() => {
          if (retryStep === 0 && project.driveId) {
            setRetryStep(1);
            setImgSrc(`https://drive.google.com/thumbnail?id=${project.driveId}&sz=w1200`);
          } else if (retryStep === 1 && project.driveId) {
            setRetryStep(2);
            setImgSrc(`https://lh3.googleusercontent.com/d/${project.driveId}=w3840`);
          }
        }}
        style={{
          imageRendering: '-webkit-optimize-contrast',
          objectPosition: project.objectPosition || 'center center',
        }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out contrast-[1.04] saturate-[1.07] brightness-[1.01]"
      />

      {/* Subtle Top Vignette for Badges */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />

      {/* Subtle Bottom Gradient for Text Legibility */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0B0E17]/95 via-[#0B0E17]/60 to-transparent pointer-events-none" />

      {/* Ambient Electric Blue Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/30 via-transparent to-[#3B82F6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-poppins font-medium text-[#93C5FD] uppercase tracking-wider shadow-sm">
          <Film className="w-2.5 h-2.5 text-[#3B82F6]" />
          <span>{project.category}</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[9px] font-poppins text-white/90 font-semibold tracking-wide">
          {isPortrait ? (
            <span className="text-[#60A5FA]">9:16 REEL</span>
          ) : (
            <span className="text-white/70">CINEMATIC</span>
          )}
        </span>
      </div>

      {/* Center Subtle Glowing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2563FF]/90 hover:bg-[#2563FF] backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(37,99,255,0.8)] border border-white/30 group-hover:scale-110 transition-transform duration-300 text-white">
          <Play className="w-5 h-5 fill-white translate-x-0.5" />
        </div>
      </div>

      {/* Subtle Bottom Gradient for Text Legibility without hiding thumbnail */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

      {/* Bottom Content Info - Small, Standard & Unobtrusive */}
      <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[9px] sm:text-[10px] font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase truncate">
            {index < 9 ? `0${index + 1}` : index + 1} • {project.client}
          </span>
          <div className="flex items-end gap-0.5 h-2.5 shrink-0 opacity-75">
            <span className="w-0.5 h-1.5 bg-[#60A5FA] rounded-full" />
            <span className="w-0.5 h-2.5 bg-[#2563FF] rounded-full" />
            <span className="w-0.5 h-2 bg-white/70 rounded-full" />
          </div>
        </div>

        <h3 className="text-xs sm:text-sm md:text-[15px] font-bold font-barlow text-white leading-snug group-hover:text-[#60A5FA] transition-colors truncate">
          {project.title}
        </h3>
      </div>
    </div>
  );
});

ReelCard.displayName = 'ReelCard';

export const IntroSection3: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    if (activeVideo) {
      setVideoLoading(true);
      const timer = setTimeout(() => {
        setVideoLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [activeVideo]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Directly moves according to user scrolling (Row 1 left, Row 2 right)
  const scrollX1 = useTransform(smoothProgress, [0, 1], ['15%', '-25%']);
  const scrollX2 = useTransform(smoothProgress, [0, 1], ['-25%', '15%']);
  const workItems = ['WORK', 'WORK', 'WORK', 'WORK', 'WORK', 'WORK', 'WORK', 'WORK'];

  const handleSelectProject = (project: VideoProject) => {
    navigate(`/work?video=${project.id}#${project.id}`);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveVideo(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] md:min-h-screen w-full bg-gradient-to-br from-[#1242CE] via-[#1D5BF6] to-[#1242CE] overflow-hidden pt-12 md:pt-16 pb-20 md:pb-28 z-10 select-none"
    >
      {/* Deep Vibrant Geometric Backdrop & Giant Translucent WORK Watermarks Moving Strictly With Scrolling */}
      <div className="absolute inset-0 z-[1] flex flex-col justify-center pointer-events-none select-none overflow-hidden gap-1 sm:gap-2">
        {/* Row 1: Directly moves left as user scrolls down */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            style={{ x: scrollX1 }}
            className="flex w-max will-change-transform"
          >
            {workItems.map((text, i) => (
              <span
                key={`top-${i}`}
                className="text-[24vw] sm:text-[22vw] font-black italic text-[#081B4E]/25 sm:text-[#081B4E]/20 uppercase font-barlow tracking-widest leading-[0.75] px-6 sm:px-12 select-none translate-y-3"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Directly moves right as user scrolls down */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            style={{ x: scrollX2 }}
            className="flex w-max will-change-transform"
          >
            {workItems.map((text, i) => (
              <span
                key={`bot-${i}`}
                className="text-[24vw] sm:text-[22vw] font-black italic text-[#081B4E]/25 sm:text-[#081B4E]/20 uppercase font-barlow tracking-widest leading-[0.75] px-6 sm:px-12 select-none"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Top Section Header - Standard, Small & Clean */}
      <div className="relative z-40 text-center max-w-2xl mx-auto px-6 mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-2.5 bg-black/30 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
          <Sparkles className="w-3 h-3 text-[#60A5FA]" />
          <span>FEATURED WORK</span>
          <span>•</span>
          <span>CLIENT REELS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-barlow text-white uppercase tracking-tight drop-shadow-md">
          Stories That Command Attention
        </h2>
        <p className="text-white/80 text-xs sm:text-sm font-poppins max-w-md mx-auto mt-2 leading-relaxed drop-shadow-sm">
          Commercial video productions, brand films, and visual experiences crafted for ambitious brands.
        </p>
      </div>

      {/* Angled Rotating Video Reels Row with Infinite Seamless Marquee (-4deg tilt matching model) */}
      <div
        className="w-[125%] md:w-[110%] flex items-start justify-center relative z-40 overflow-visible -ml-[12%] md:-ml-[5%] py-6"
        style={{ transform: 'rotate(-4deg) translateZ(0)' }}
      >
        <div className="flex w-max select-none">
          {/* Track 1: Master Video Projects */}
          <div className="flex shrink-0 gap-6 md:gap-8 pr-6 md:pr-8 animate-innowize-marquee">
            {videoProjects.map((project, idx) => (
              <ReelCard
                key={`track1-${project.id}`}
                project={project}
                index={idx}
                onSelect={handleSelectProject}
              />
            ))}
          </div>

          {/* Track 2: Seamless Infinite Duplicate */}
          <div
            className="flex shrink-0 gap-6 md:gap-8 pr-6 md:pr-8 animate-innowize-marquee"
            aria-hidden="true"
          >
            {videoProjects.map((project, idx) => (
              <ReelCard
                key={`track2-${project.id}`}
                project={project}
                index={idx}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Button: Explore Full Portfolio Archive */}
      <div className="relative z-50 flex justify-center mt-12 md:mt-16 pointer-events-auto">
        <button
          onClick={() => navigate('/work')}
          className="group relative px-7 py-3.5 md:px-10 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wider font-poppins transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] cursor-pointer bg-[#0B0E17] hover:bg-[#141A2B] text-white border border-white/20 flex items-center gap-3 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-[#60A5FA] animate-pulse" />
          <span>Explore Full Portfolio Archive</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Active Video Cinema Lightbox Modal (True Full Screen Cinema Mode) */}
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
            <div className="relative z-30 w-full px-4 sm:px-8 py-3 sm:py-3.5 bg-[#0B0E17]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between gap-4 shrink-0 shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 overflow-hidden pr-4">
                {/* Back Button */}
                <button
                  onClick={() => {
                    if (document.fullscreenElement && document.exitFullscreen) {
                      document.exitFullscreen().catch(() => {});
                    }
                    setActiveVideo(null);
                  }}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-[#2563FF] border border-white/15 text-white text-xs sm:text-sm font-poppins font-semibold transition-all hover:scale-105 cursor-pointer shadow-lg group shrink-0"
                  title="Back (Esc)"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#60A5FA] group-hover:text-white" />
                  <span>Back</span>
                </button>

                <div className="h-6 w-px bg-white/10 hidden sm:block shrink-0" />

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
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-poppins font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Full HD 1080p Stream
                </span>

                <a
                  href={`https://drive.google.com/file/d/${activeVideo.driveId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-[#2563FF] text-white text-xs font-poppins font-medium transition-all border border-white/10"
                  title="Open in Google Drive in original 4K / master resolution"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Original 4K Quality</span>
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

            {/* Video Player Container - Expands to 100% of Screen */}
            <div className="relative flex-1 w-full h-full bg-black flex items-center justify-center overflow-hidden">
              {/* Instant High-Res Poster Backdrop & Ambient Glow While Video Buffers */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-500 flex items-center justify-center ${
                  videoLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Blurred ambient background glow */}
                <img
                  src={activeVideo.thumbnail.replace('=w3840', '=w1200')}
                  alt={activeVideo.title}
                  className="absolute inset-0 w-full h-full object-cover filter blur-3xl scale-110 opacity-35"
                />

                {/* Centered Poster Card with Shimmer & Branded Cinema Loader */}
                <div className="relative max-w-4xl max-h-[70vh] aspect-video w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/15 mx-4 bg-[#0A0D16]">
                  <img
                    src={activeVideo.thumbnail.replace('=w3840', '=w1200')}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                  {/* Sleek Cinema Loading Screen */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
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
              </div>

              {/* Stream Iframe */}
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview?autoplay=1&vq=hd1080`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                className={`w-full h-full border-0 relative z-10 transition-opacity duration-500 ${
                  videoLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                title={activeVideo.title}
                onLoad={() => setVideoLoading(false)}
              />
            </div>

            {/* Subtle Bottom Bar with Client info, resolution tip and tagline */}
            <div className="px-6 py-2.5 bg-[#0B0E17]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0 text-xs font-poppins text-white/70">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-white font-medium">{activeVideo.client}</span>
                <span className="text-white/40 hidden sm:inline">—</span>
                <span className="truncate hidden sm:inline">{activeVideo.tagline}</span>
              </div>
              <div className="flex items-center gap-4 shrink-0 text-[11px] text-white/50">
                <span className="hidden md:inline">Tip: Click ⚙️ in player for 1080p, or click <strong>Original 4K Quality</strong></span>
                <button
                  onClick={() => {
                    setActiveVideo(null);
                    navigate('/work');
                  }}
                  className="hover:text-[#60A5FA] text-white/70 transition-colors flex items-center gap-1.5"
                >
                  <span>Explore All Works</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="hidden sm:inline text-white/40">
                  ESC to exit
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
