import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Hexagon, MapPin, Sparkles, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Automatically pause video when user leaves the website/tab or window loses focus
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
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
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        } else if (!document.hidden) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const clientAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section className="relative w-full min-h-[96vh] lg:min-h-screen bg-[#070A12] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:pt-32 select-none">
      {/* Full-Screen Innowize Digital Showreel Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          src="/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center"
        />

        {/* Subtle Top Header Vignette Only - Zero Shade Below/At Bottom */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Floating Interactive Video Audio & Playback Controls */}
      <div className="absolute top-24 sm:top-28 right-6 md:right-12 z-20 flex items-center gap-2.5 pointer-events-auto">
        <button
          onClick={toggleMute}
          className="px-3.5 py-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-poppins flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-lg"
          title={isMuted ? 'Unmute Showreel Audio' : 'Mute Showreel'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-[#60A5FA]" /> : <Volume2 className="w-4 h-4 text-[#2563FF]" />}
          <span className="hidden sm:inline text-[11px] font-semibold tracking-wider uppercase">
            {isMuted ? 'Sound Off' : 'Sound On'}
          </span>
        </button>

        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 cursor-pointer shadow-lg"
          title={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 cursor-pointer shadow-lg hidden sm:flex"
          title="Fullscreen Video"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-20 flex-1 flex flex-col justify-center py-6 sm:py-8">
        <div className="max-w-3xl xl:max-w-4xl flex flex-col justify-center z-20">
          {/* Top Tag: INNOWIZE DIGITAL SHOWREEL */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/work')}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/20 hover:bg-[#2563FF]/40 border border-[#2563FF]/40 text-[#60A5FA] hover:text-white text-[11px] sm:text-xs font-poppins font-bold tracking-[0.25em] uppercase mb-3 sm:mb-4 w-fit backdrop-blur-sm cursor-pointer transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>INNOWIZE DIGITAL SHOWREEL</span>
          </motion.div>

          {/* Master Headline: NEW DIGITAL UNIVERSE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.4rem] font-barlow font-black tracking-tight leading-[0.92] text-white uppercase mb-6 sm:mb-8 drop-shadow-xl"
          >
            NEW DIGITAL <br />
            <span className="text-[#2563FF]">UNIVERSE</span>
          </motion.h1>

          {/* Actions Row & Metric: Get Started, Watch Showreel & 87.2K Projects */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-wrap items-end gap-5 sm:gap-8 mb-8 sm:mb-12"
          >
            <button
              onClick={() => navigate('/work')}
              className="px-8 py-3.5 rounded-lg bg-[#2563FF] hover:bg-[#1D4ED8] text-white font-poppins font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_25px_rgba(37,99,255,0.45)] transition-all duration-300 hover:scale-105 cursor-pointer border border-white/15"
            >
              Explore Work
            </button>

            <button
              onClick={toggleMute}
              className="group flex items-center gap-3 text-white/90 hover:text-[#60A5FA] font-poppins font-semibold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer"
            >
              <span>{isMuted ? 'Play Audio' : 'Mute Audio'}</span>
              <div className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center group-hover:bg-[#2563FF] group-hover:border-[#2563FF] transition-all duration-300 shadow-sm backdrop-blur-sm">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </div>
            </button>

            {/* Metric: 87.2K Projects */}
            <div className="flex flex-col sm:ml-auto lg:ml-6 pb-0.5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-barlow text-[#60A5FA] leading-none tracking-tight drop-shadow-md">
                87.2K
              </span>
              <span className="text-xs sm:text-sm font-poppins font-medium text-white/80 mt-1">
                Projects
              </span>
            </div>
          </motion.div>

          {/* Bottom Row: Happy Clients & Strategic Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center max-w-xl"
          >
            {/* Happy Clients */}
            <div className="sm:col-span-5 flex flex-col">
              <span className="text-xs font-poppins font-semibold text-white/80 block mb-2">
                Happy Clients
              </span>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {clientAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Client avatar"
                      width="36"
                      height="36"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white/30 shadow-sm flex-shrink-0"
                    />
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg sm:text-xl font-bold font-barlow text-white">28+</span>
                  <span className="text-[10px] font-poppins font-semibold text-white/60 uppercase tracking-wider">
                    Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="sm:col-span-7 flex items-center">
              <p className="text-xs sm:text-sm font-poppins text-white/80 leading-relaxed font-normal">
                Join 28,000+ global brands who trust us to craft immersive digital experiences that drive results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Chamfered Dark Bottom-Left Shelf (Elongated & Seamless) */}
      <div className="relative w-full z-30 mt-auto flex justify-start">
        <div
          className="w-[94%] sm:w-[86%] md:w-[80%] lg:w-[75%] max-w-[1050px] bg-[#0B0E17] text-white py-4 px-6 sm:px-12 md:px-16 flex items-center"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 95px) 0, 100% 100%, 0 100%)',
          }}
        >
          <div className="flex items-center gap-7 sm:gap-11 md:gap-14 text-xs sm:text-sm font-poppins font-bold tracking-[0.2em] uppercase text-white select-none">
            <div className="flex items-center gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default">
              <Hexagon className="w-4 h-4 text-[#2563FF] stroke-[2.2]" />
              <span>EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default">
              <MapPin className="w-4 h-4 text-[#2563FF] stroke-[2.2]" />
              <span>INNOVATION</span>
            </div>
            <div className="flex items-center gap-2.5 text-white hover:text-[#60A5FA] transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-[#2563FF] stroke-[2.2]" />
              <span>EXCELLENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
