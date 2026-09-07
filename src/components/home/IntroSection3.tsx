import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, Film, Volume2 } from 'lucide-react';

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  poster: string;
  videoUrl?: string; // Empty until user supplies their video
}

// Curated Innowize Cinematic Reel Placeholders
const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Elysian — Haute Couture Symphony',
    category: 'Fashion Film',
    client: 'Maison de Haute Couture',
    duration: '0:30',
    poster: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
    videoUrl: '', // Ready for user video
  },
  {
    id: 'reel-2',
    title: 'Aureon — Pure Electric Performance',
    category: 'Automotive Commercial',
    client: 'Aureon EV Systems',
    duration: '0:45',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85',
    videoUrl: '',
  },
  {
    id: 'reel-3',
    title: 'Chronox — Precision Horology',
    category: 'Product Macro',
    client: 'Swiss Horology Geneva',
    duration: '0:20',
    poster: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85',
    videoUrl: '',
  },
  {
    id: 'reel-4',
    title: 'Horizon — Monolithic Spaces',
    category: 'Architecture Film',
    client: 'Modern Spaces Studio',
    duration: '0:35',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85',
    videoUrl: '',
  },
  {
    id: 'reel-5',
    title: 'Nexora — Synthetic Biology AI',
    category: 'Brand Experience',
    client: 'Nexora Labs Zurich',
    duration: '0:40',
    poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    videoUrl: '',
  },
  {
    id: 'reel-6',
    title: 'Everest — Beyond the Death Zone',
    category: 'Expedition Doc',
    client: 'Alpine Summit Trust',
    duration: '0:50',
    poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85',
    videoUrl: '',
  },
];

const ReelCard: React.FC<{
  reel: ReelItem;
  index: number;
  onSelect: (reel: ReelItem) => void;
}> = React.memo(({ reel, index, onSelect }) => {
  return (
    <motion.div
      onClick={() => onSelect(reel)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex-shrink-0 rounded-xl overflow-hidden relative w-[280px] h-[320px] md:w-[420px] md:h-[480.5px] -mt-4 md:mt-0 cursor-pointer border border-slate-200/80 hover:border-[#2563FF]/70 shadow-[0_20px_45px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(37,99,255,0.2)] bg-slate-950"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Background Poster Image */}
      <img
        src={reel.poster}
        alt={reel.title}
        width="420"
        height="480"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
      />

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 pointer-events-none" />

      {/* Ambient Electric Blue Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/20 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider">
          <Film className="w-3 h-3 text-[#2563FF]" />
          <span>{reel.category}</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-poppins font-medium text-white/80">
          <Volume2 className="w-3 h-3 text-white/60" />
          <span>{reel.duration}</span>
        </span>
      </div>

      {/* Center Glowing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative">
          {/* Animated radar rings */}
          <div className="absolute -inset-3 rounded-full bg-[#2563FF]/30 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
          
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-[#2563FF] to-[#3B82F6] flex items-center justify-center shadow-[0_0_30px_rgba(37,99,255,0.7)] group-hover:shadow-[0_0_45px_rgba(37,99,255,0.95)] group-hover:scale-110 transition-all duration-300 border border-white/30 text-white">
            <Play className="w-7 h-7 md:w-8 md:h-8 fill-white translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Bottom Content Info */}
      <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] md:text-xs font-poppins font-bold tracking-[0.2em] text-[#60A5FA] uppercase">
            0{index + 1} • Innowize Reel
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] animate-pulse" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-barlow text-white leading-tight group-hover:text-[#60A5FA] transition-colors mb-1.5">
          {reel.title}
        </h3>

        <p className="text-[11px] md:text-xs font-poppins text-white/60 line-clamp-1">
          {reel.client}
        </p>

        {/* Dynamic soundwave preview indicator */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-end gap-1 h-3.5">
            <span className="w-0.5 h-2 bg-[#2563FF] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3.5 bg-[#60A5FA] rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
            <span className="w-0.5 h-1.5 bg-[#3B82F6] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3 bg-white/70 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]" />
            <span className="w-0.5 h-2 bg-[#2563FF] rounded-full animate-[pulse_1.1s_ease-in-out_infinite]" />
          </div>
          <span className="text-[10px] font-poppins font-medium text-white/50 tracking-wider uppercase">
            Custom Video Placeholder
          </span>
        </div>
      </div>
    </motion.div>
  );
});

ReelCard.displayName = 'ReelCard';

export const IntroSection3: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const p1 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const p2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const p3 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const p4 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const bigTextStyle =
    'text-[38vw] md:text-[15vw] leading-[0.75] font-extrabold italic text-slate-900/[0.05] uppercase font-barlow relative';

  const handleSelectReel = (reel: ReelItem) => {
    // If user provided a video URL, it can open a player; otherwise navigates to work
    if (reel.videoUrl) {
      window.open(reel.videoUrl, '_blank');
    } else {
      navigate('/work');
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] md:min-h-screen w-full bg-[#F8FAFC] overflow-visible md:overflow-hidden pt-16 md:pt-24 z-10"
    >
      {/* Flipped Background Overlay in Electric Blue */}
      <img
        src="/images/introbg.svg"
        alt="Intro Background Flipped"
        loading="lazy"
        decoding="async"
        className="absolute top-0 right-0 w-[160%] max-w-none z-[1] pointer-events-none scale-x-[-1] scale-y-[-1] opacity-25"
      />

      {/* Angled Rotating Video Reels Row */}
      <div
        className="h-full w-[120%] md:w-full flex items-start justify-center relative z-50 overflow-visible -mb-56 md:pb-0 -mt-24 md:-mt-12 -ml-[10%] md:ml-0 pt-0 md:pt-16"
        style={{ transform: 'rotate(5deg) translateZ(0)' }}
      >
        <motion.div
          className="flex gap-6 md:gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          {/* Double list for seamless infinite loop */}
          {[...reelsData, ...reelsData].map((reel, idx) => (
            <ReelCard
              key={`${reel.id}-${idx}`}
              reel={reel}
              index={idx % reelsData.length}
              onSelect={handleSelectReel}
            />
          ))}
        </motion.div>
      </div>

      {/* Button: Check out our work */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
        <button
          onClick={() => navigate('/work')}
          className="group relative px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold tracking-wider font-poppins transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(37,99,255,0.35)] hover:shadow-[0_8px_30px_rgba(37,99,255,0.6)] cursor-pointer bg-[#2563FF] hover:bg-[#1D4ED8] text-white border border-[#2563FF] flex items-center gap-3"
        >
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
          <span>Check out our work</span>
        </button>
      </div>

      {/* Parallax Background Letters "WORK" and Cloud */}
      <div className="absolute inset-0 z-30 flex flex-col justify-start items-start pointer-events-none overflow-visible w-full px-4 -mt-40 -ml-24 md:pt-12 md:ml-0 md:mt-0">
        {/* Floating Cloud */}
        <motion.div
          className="absolute top-0 left-[10vw] w-[4vw] min-w-[50px] opacity-80"
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -15, 10, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div
          style={{ x: p1, willChange: 'transform' }}
          className="w-full flex justify-start pl-[25vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p2, willChange: 'transform' }}
          className="w-full flex justify-start pl-[60vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p3, willChange: 'transform' }}
          className="w-full flex justify-start pl-[16vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p4, willChange: 'transform' }}
          className="w-full flex justify-start pl-[30vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
      </div>
    </section>
  );
};
