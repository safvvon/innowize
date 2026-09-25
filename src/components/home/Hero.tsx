import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Hexagon, MapPin, Sparkles, Maximize2, Film, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showShowreelModal, setShowShowreelModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return '/showreel-mobile.mp4';
    }
    return '/showreel.mp4';
  });

  // Keep video source responsive to viewport changes via matchMedia for zero resize event thrashing
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 768px)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const targetSrc = e.matches ? '/showreel-mobile.mp4' : '/showreel.mp4';
      setVideoSrc(prev => (prev !== targetSrc ? targetSrc : prev));
    };
    if (mql.addEventListener) {
      mql.addEventListener('change', handleMediaChange);
    } else {
      mql.addListener(handleMediaChange);
    }
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handleMediaChange);
      } else {
        mql.removeListener(handleMediaChange);
      }
    };
  }, []);

  // Ensure DOM element has muted and inline playback properties set immediately on mount
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      el.setAttribute('playsinline', '');
      el.setAttribute('webkit-playsinline', '');
    }
    (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
  }, []);

  // Automatically pause video when user leaves the website/tab or window loses focus
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    const handlePageHide = () => {
      if (!videoRef.current) return;
      videoRef.current.pause();
      setIsPlaying(false);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  // Pause video when scrolled out of view, resume when back in view
  // Observe heroRef (the section container) to prevent scale transforms on video from breaking intersection
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        } else if (!document.hidden) {
          video.muted = true;
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Autoplay management: ensures showreel autoplays automatically on mobile and desktop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const attemptAutoplay = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay might be deferred by strict mobile power saver / browser policy
          });
      }
    };

    attemptAutoplay();

    const handleReady = () => {
      attemptAutoplay();
    };

    video.addEventListener('canplay', handleReady);
    video.addEventListener('loadeddata', handleReady);
    video.addEventListener('loadedmetadata', handleReady);

    // If mobile browser policy (such as iOS Low Power Mode) blocks zero-interaction autoplay,
    // ensure the very first user interaction anywhere on the screen immediately starts playback
    const removeInteractionListeners = () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };

    const handleFirstInteraction = () => {
      if (video && video.paused) {
        video.muted = true;
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      removeInteractionListeners();
    };

    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('click', handleFirstInteraction, { passive: true });

    return () => {
      video.removeEventListener('canplay', handleReady);
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('loadedmetadata', handleReady);
      removeInteractionListeners();
    };
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    setIsMuted(nextMuted);
  };

  const openShowreelModal = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
    setShowShowreelModal(true);
    const current = video ? video.currentTime : 0;
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = current;
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const toggleFullscreen = () => {
    openShowreelModal();
  };

  const closeShowreelModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    setShowShowreelModal(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleBrowserFullscreen = () => {
    const target = modalContainerRef.current || document.documentElement;
    if (!document.fullscreenElement) {
      target.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Revert controls when user exits native fullscreen
  useEffect(() => {
    const onFullscreenChange = () => {
      const isFs = document.fullscreenElement === videoRef.current;
      if (!isFs && videoRef.current) {
        videoRef.current.controls = false;
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showShowreelModal) {
        closeShowreelModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showShowreelModal]);

  return (
    <section ref={heroRef} className="relative w-full min-h-[96vh] lg:min-h-screen bg-[#070A12] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:pt-32 select-none">
      {/* Full-Screen Innowize Digital Showreel Video Background */}
      <div 
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#070A12] cursor-pointer"
        title={isPlaying ? 'Click to Pause Showreel' : 'Click to Play Showreel'}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? 'Pause Showreel Video' : 'Play Showreel Video'}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            togglePlay();
          }
        }}
      >
        {/* Mobile Ambient Cinematic Backdrop Glow (Zero harsh borders, immersive atmosphere) */}
        <div className="block sm:hidden absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[55vw] bg-[#2563FF]/25 rounded-full blur-[60px] pointer-events-none transform-gpu will-change-transform" />
        <div className="block sm:hidden absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[40vw] bg-[#1D4ED8]/30 rounded-full blur-[40px] pointer-events-none transform-gpu will-change-transform" />

        <video
          ref={setVideoRef}
          src={videoSrc}
          poster="/images/showreel_poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          title="Innowize Digital Official Showreel"
          aria-label="Innowize Digital Showreel Video"
          className="relative z-10 w-full h-full object-contain sm:object-cover object-[center_38%] sm:object-center scale-[4.4] sm:scale-100 origin-[center_38%] sm:origin-center transition-transform duration-300"
        >
          <source src="/showreel-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
          <source src="/showreel.mp4" type="video/mp4" />
        </video>

        {/* Subtle Top Header Vignette Only - Zero Shade Below/At Bottom */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10" />
      </div>

      {/* Floating Interactive Video Audio & Playback Controls (Up in Mobile View) */}
      <div className="absolute top-[88px] sm:top-24 md:top-auto md:bottom-24 right-4 sm:right-6 md:right-10 z-30 flex items-center pointer-events-auto">
        <div className="flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-black/60 hover:bg-black/75 backdrop-blur-xl border border-white/20 shadow-2xl transition-all">
          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            className="group flex items-center gap-2 p-1 sm:px-2.5 sm:py-1 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-all cursor-pointer"
            title={isMuted ? 'Play Audio' : 'Mute Audio'}
            aria-label={isMuted ? 'Play Showreel Audio' : 'Mute Showreel Audio'}
          >
            <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-200">
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/80 group-hover:text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#60A5FA] group-hover:text-white" />
              )}
            </div>
            <span className="hidden md:inline font-poppins font-medium text-xs tracking-wide pr-1">
              {isMuted ? 'Play Audio' : 'Mute Audio'}
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 sm:h-5 bg-white/20 my-auto" />

          {/* Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="p-1 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-all cursor-pointer group"
            title={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            aria-label={isPlaying ? 'Pause Showreel Video' : 'Play Showreel Video'}
          >
            <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-200">
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white/90 group-hover:text-white" />
              ) : (
                <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
              )}
            </div>
          </button>

          {/* Fullscreen Button (hidden on mobile, visible on sm+) */}
          <div className="hidden sm:block w-px h-5 bg-white/20 my-auto" />
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-1 rounded-full items-center justify-center hover:bg-white/10 text-white transition-all cursor-pointer group"
            title="Fullscreen Video"
            aria-label="View Showreel Fullscreen"
          >
            <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#2563FF] text-white flex items-center justify-center transition-all duration-200">
              <Maximize2 className="w-4 h-4 text-white/90 group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-10 lg:px-16 relative z-20 flex-1 flex flex-col justify-end pb-8 sm:pb-12 lg:pb-14 pt-6">
        <div className="max-w-3xl xl:max-w-4xl flex flex-col justify-end z-20">
          {/* Master Headline: NEW DIGITAL UNIVERSE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.6rem] min-[380px]:text-5xl sm:text-6xl md:text-7xl xl:text-[5.4rem] font-barlow font-black tracking-tight leading-[0.92] text-white uppercase mb-6 sm:mb-8 drop-shadow-xl"
          >
            <span className="sr-only">Innowize Digital — Creative Studio &amp; Digital Experiences | </span>
            NEW DIGITAL <br />
            <span className="text-[#2563FF]">UNIVERSE</span>
          </motion.h1>

          {/* Actions Row: Get Started & Watch Showreel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-wrap items-center gap-3.5 sm:gap-6 md:gap-8"
          >
            <button
              onClick={() => navigate('/work')}
              aria-label="Explore Innowize Digital Portfolio and Work"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-[#2563FF] hover:bg-[#1D4ED8] text-white font-poppins font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_25px_rgba(37,99,255,0.45)] transition-all duration-300 hover:scale-105 cursor-pointer border border-white/15"
            >
              Explore Work
            </button>

            <button
              onClick={openShowreelModal}
              className="group px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-poppins font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg flex items-center gap-2.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#2563FF] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Chamfered Dark Bottom-Left Shelf (Elongated & Seamless) */}
      <div className="relative w-full z-30 mt-auto flex justify-start">
        <div
          className="w-fit max-w-[96vw] sm:w-[86%] md:w-[80%] lg:w-[75%] max-w-[1050px] bg-[#0B0E17] text-white py-3 sm:py-4 pl-3.5 min-[360px]:pl-5 sm:pl-12 md:pl-16 pr-9 min-[360px]:pr-11 sm:pr-24 md:pr-28 flex items-center shrink-0 [clip-path:polygon(0_0,calc(100%-32px)_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,calc(100%-95px)_0,100%_100%,0_100%)]"
        >
          <div className="flex items-center gap-2.5 min-[360px]:gap-3.5 min-[410px]:gap-5 sm:gap-9 md:gap-14 text-[9px] min-[360px]:text-[10px] min-[410px]:text-xs sm:text-xs md:text-sm font-poppins font-bold tracking-[0.08em] min-[360px]:tracking-[0.14em] sm:tracking-[0.2em] uppercase text-white select-none whitespace-nowrap">
            <div className="flex items-center gap-1.5 sm:gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default shrink-0">
              <Hexagon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563FF] stroke-[2.2] shrink-0" />
              <span>EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563FF] stroke-[2.2] shrink-0" />
              <span>INNOVATION</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563FF] stroke-[2.2] shrink-0" />
              <span>EXCELLENCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Showreel Cinema Overlay Modal */}
      <AnimatePresence>
        {showShowreelModal && (
          <motion.div
            ref={modalContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999999] w-screen h-screen bg-black flex flex-col overflow-hidden select-none"
          >
            {/* Top Floating Glass Navigation Bar */}
            <div className="relative z-30 w-full px-4 sm:px-8 py-3 sm:py-3.5 bg-[#0B0E17]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between gap-4 shrink-0 shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-5 overflow-hidden">
                {/* Prominent Back Button */}
                <button
                  onClick={closeShowreelModal}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-[#2563FF] border border-white/15 text-white text-xs sm:text-sm font-poppins font-semibold transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg group shrink-0"
                  title="Back to Home (Esc)"
                  id="showreel-back-button"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#60A5FA] group-hover:text-white" />
                  <span>Back</span>
                </button>

                <div className="h-6 w-px bg-white/10 hidden sm:block shrink-0" />

                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2563FF]/20 text-[#60A5FA] text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-wider">
                        Official Showreel
                      </span>
                      <span className="text-[11px] text-white/50 font-poppins hidden sm:inline">• 2025 Edition</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold font-barlow text-white leading-tight mt-0.5 truncate">
                      Innowize Digital Showreel
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-poppins font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Full HD Stream
                </span>

                <button
                  onClick={toggleBrowserFullscreen}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#2563FF] text-white transition-colors cursor-pointer border border-white/10"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={closeShowreelModal}
                  className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-red-500/80 text-white text-xs sm:text-sm font-poppins font-semibold transition-all border border-white/10 hover:border-red-500/80 cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="relative flex-1 w-full h-full bg-black flex items-center justify-center overflow-hidden">
              {/* Floating Back Quick Action for smaller mobile viewports */}
              <button
                onClick={closeShowreelModal}
                className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/95 backdrop-blur-md border border-white/20 text-white text-xs font-poppins font-medium shadow-2xl transition-all hover:scale-105 cursor-pointer sm:hidden"
                title="Back to Home"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Back</span>
              </button>

              <video
                ref={modalVideoRef}
                src="/showreel.mp4"
                poster="/images/showreel_poster.webp"
                autoPlay
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
