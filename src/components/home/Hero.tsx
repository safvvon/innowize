import React from 'react';
import { motion } from 'framer-motion';
import { Play, Hexagon, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const clientAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section className="relative w-full min-h-[96vh] lg:min-h-screen bg-[#FFFFFF] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:pt-32 select-none">
      {/* Background Soft Electric-Blue Ambient Backlight Aura */}
      <div
        className="absolute right-0 top-12 sm:top-20 w-[60vw] h-[75vh] max-w-[900px] pointer-events-none rounded-full blur-3xl opacity-60 z-[1]"
        style={{
          background:
            'radial-gradient(circle at 65% 45%, rgba(37, 99, 255, 0.28) 0%, rgba(56, 189, 248, 0.16) 35%, transparent 70%)',
        }}
      />

      {/* Futuristic Geometric Tech Line - Stepping up behind model */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[6] hidden md:block overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 850"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 0,455 L 480,455 L 610,295 L 1440,295"
            stroke="#2563FF"
            strokeWidth="1.75"
            className="opacity-75"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(37, 99, 255, 0.55))',
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.75 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      {/* Prominent Big VR Model Visual on Right (Anchored to touch the bottom, 100% True Transparent PNG) */}
      <div className="absolute right-0 top-0 bottom-0 w-[75%] sm:w-[62%] md:w-[55%] lg:w-[50%] xl:w-[48%] max-w-[950px] pointer-events-none z-[8] flex items-end justify-end">
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex items-end justify-end"
        >
          {/* Cyan/Blue Ambient Glow behind head */}
          <div className="absolute right-4 top-1/4 w-72 h-80 bg-[#2563FF]/25 blur-3xl rounded-full pointer-events-none" />

          {/* 100% Transparent Cutout VR Model - Big, Full-Height, Touching Bottom */}
          <img
            src="/images/vr_hero_model_transparent.png"
            alt="Futuristic Digital Universe VR Model"
            width="896"
            height="1200"
            className="h-full w-auto max-h-[96vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(37,99,255,0.2)]"
          />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-20 flex-1 flex flex-col justify-center py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Headlines, Actions, Metric, Clients (7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center z-20 max-w-2xl xl:max-w-3xl">
            {/* Top Tag: A NEW ERA */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#2563FF] text-xs sm:text-sm font-poppins font-bold tracking-[0.25em] uppercase block mb-3 sm:mb-4"
            >
              A NEW ERA
            </motion.span>

            {/* Master Headline: NEW DIGITAL UNIVERSE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.4rem] font-barlow font-black tracking-tight leading-[0.92] text-slate-950 uppercase mb-8 sm:mb-9"
            >
              NEW DIGITAL <br />
              <span className="text-[#2563FF]">UNIVERSE</span>
            </motion.h1>

            {/* Actions Row & Metric: Get Started, Watch Showreel & 87.2K Projects */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex flex-wrap items-end gap-5 sm:gap-8 mb-10 sm:mb-14"
            >
              <button
                onClick={() => navigate('/work')}
                className="px-8 py-3.5 rounded-lg bg-[#2563FF] hover:bg-[#1D4ED8] text-white font-poppins font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_25px_rgba(37,99,255,0.35)] hover:shadow-[0_12px_32px_rgba(37,99,255,0.55)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Get Started
              </button>

              <button
                onClick={() => {
                  const workTarget = document.getElementById('work') || document.querySelector('.home-page');
                  if (workTarget) {
                    window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
                  }
                }}
                className="group flex items-center gap-3 text-slate-900 hover:text-[#2563FF] font-poppins font-semibold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer"
              >
                <span>Watch Showreel</span>
                <div className="w-9 h-9 rounded-full border border-[#2563FF] text-[#2563FF] flex items-center justify-center group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                </div>
              </button>

              {/* Metric: 87.2K Projects - Aligned directly above the step line */}
              <div className="flex flex-col sm:ml-auto lg:ml-6 pb-0.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-barlow text-[#2563FF] leading-none tracking-tight">
                  87.2K
                </span>
                <span className="text-xs sm:text-sm font-poppins font-medium text-slate-600 mt-1">
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
                <span className="text-xs font-poppins font-semibold text-slate-600 block mb-2">
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
                        className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-lg sm:text-xl font-bold font-barlow text-slate-950">28+</span>
                    <span className="text-[10px] font-poppins font-semibold text-slate-500 uppercase tracking-wider">
                      Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Paragraph */}
              <div className="sm:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm font-poppins text-slate-600 leading-relaxed font-normal">
                  Join 28,000+ global brands who trust us to craft immersive digital experiences that drive results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column Spacer to preserve grid balance on wide screens */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none" />
        </div>
      </div>

      {/* Futuristic Chamfered Dark Bottom Shelf */}
      <div className="relative w-full z-30 mt-auto">
        <div
          className="w-full bg-[#0B0E17] text-white pt-4 pb-4 px-6 md:px-12 flex items-center justify-between border-t border-white/5"
          style={{
            clipPath: 'polygon(0 0, 52% 0, 56% 100%, 100% 100%, 100% 100%, 0 100%)',
          }}
        >
          <div className="flex items-center gap-6 sm:gap-10 md:gap-14 text-xs font-poppins font-semibold tracking-[0.16em] uppercase text-white/90">
            <div className="flex items-center gap-2 text-white/80 hover:text-[#60A5FA] transition-colors cursor-default">
              <Hexagon className="w-4 h-4 text-[#2563FF]" />
              <span>EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 hover:text-[#60A5FA] transition-colors cursor-default">
              <MapPin className="w-4 h-4 text-[#2563FF]" />
              <span>INNOVATION</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 hover:text-[#60A5FA] transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-[#2563FF]" />
              <span>EXCELLENCE</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 pr-8">
            <span className="text-[10px] font-poppins font-semibold text-white/40 tracking-[0.25em] uppercase">
              ABOUT US
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
