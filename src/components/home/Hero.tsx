import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { InteractiveBackground } from '../InteractiveBackground';

// Floating glow orb in electric blue hues
const GlowOrb: React.FC<{
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  duration: number;
  delay: number;
  blur: number;
}> = ({ size, color, initialX, initialY, duration, delay, blur }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: initialX,
      top: initialY,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: `blur(${blur}px)`,
    }}
    animate={{
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 15, -10, 0],
      scale: [1, 1.15, 0.9, 1.05, 1],
      opacity: [0.4, 0.75, 0.5, 0.7, 0.4],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Floating luminous particle
const Particle: React.FC<{
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}> = ({ x, y, size, delay, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: 'rgba(96, 165, 250, 0.7)',
      boxShadow: '0 0 10px rgba(37, 99, 255, 0.8)',
    }}
    animate={{
      y: [0, -60, -120],
      opacity: [0, 0.9, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

// Architectural Grid line
const GridLine: React.FC<{
  direction: 'horizontal' | 'vertical';
  position: string;
  delay: number;
}> = ({ direction, position, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      ...(direction === 'horizontal'
        ? { left: 0, right: 0, top: position, height: '1px' }
        : { top: 0, bottom: 0, left: position, width: '1px' }),
      background:
        direction === 'horizontal'
          ? 'linear-gradient(90deg, transparent, rgba(37, 99, 255, 0.15), rgba(96, 165, 250, 0.25), rgba(37, 99, 255, 0.15), transparent)'
          : 'linear-gradient(180deg, transparent, rgba(37, 99, 255, 0.15), rgba(96, 165, 250, 0.25), rgba(37, 99, 255, 0.15), transparent)',
    }}
    initial={{
      opacity: 0,
      scaleX: direction === 'horizontal' ? 0 : 1,
      scaleY: direction === 'vertical' ? 0 : 1,
    }}
    animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
    transition={{ duration: 1.8, delay, ease: 'easeOut' }}
  />
);

// Ultra-Premium 3D Kinetic Character with Magnetic Hover & Wave Physics
const AnimatedChar: React.FC<{ char: string; index: number }> = ({ char, index }) => {
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Staggered harmonic wave cycle
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 900);
    }, 4800);

    // Initial delay stagger for first natural breath
    const timeout = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 900);
    }, 2200 + index * 90);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <motion.span
      className="inline-block cursor-pointer select-none premium-title-shimmer relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        opacity: 0,
        y: 100,
        rotateX: 65,
        scale: 0.85,
        filter: 'blur(16px)',
      }}
      animate={{
        opacity: 1,
        y: isHovered ? -20 : animating ? -12 : 0,
        rotateX: isHovered ? -12 : 0,
        rotateZ: isHovered
          ? (index % 2 === 0 ? -4 : 4)
          : animating
          ? (index % 2 === 0 ? -2.5 : 2.5)
          : 0,
        scale: isHovered ? 1.12 : animating ? 1.05 : 1,
        filter: isHovered
          ? 'drop-shadow(0 15px 30px rgba(37, 99, 255, 0.45)) blur(0px)'
          : animating
          ? 'drop-shadow(0 8px 20px rgba(37, 99, 255, 0.25)) blur(0px)'
          : 'drop-shadow(0 2px 8px rgba(37, 99, 255, 0.08)) blur(0px)',
      }}
      transition={
        isHovered
          ? { type: 'spring', stiffness: 450, damping: 15 }
          : {
              delay: animating ? index * 0.08 : 0.3 + index * 0.06,
              duration: animating ? 0.7 : 1.0,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      style={{
        display: 'inline-block',
        transformStyle: 'preserve-3d',
      }}
    >
      {char}
    </motion.span>
  );
};

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInViewRef = useRef(true);
  const rafIdRef = useRef<number | null>(null);
  const navigate = useNavigate();

  // Mouse move perspective physics
  const mouseX = useSpring(0, { damping: 25, stiffness: 120 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 120 });

  // Only track mouse when Hero is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isInViewRef.current || rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const { innerWidth, innerHeight } = window;
        const u = (e.clientX - innerWidth / 2) / (innerWidth / 2);
        const h = (e.clientY - innerHeight / 2) / (innerHeight / 2);
        mouseX.set(u);
        mouseY.set(h);
      });
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [handleMouseMove]);

  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4]);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  // Noise Canvas generator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;
    const imgData = ctx.createImageData(256, 256);
    const d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      const val = Math.random() * 255;
      d[i] = val;
      d[i + 1] = val;
      d[i + 2] = val;
      d[i + 3] = 16;
    }
    ctx.putImageData(imgData, 0, 0);
  }, []);

  const headlineChars = 'INNOWIZE'.split('');
  const subWords = ['WE', 'TURN', 'IDEAS', 'INTO', 'EXPERIENCES'];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen md:h-[84vh] w-full bg-gradient-to-b from-[#EDF4FF] via-[#F8FAFC] to-[#F8FAFC] flex items-center justify-center overflow-hidden"
    >
      {/* 3D Interactive Vector Background */}
      <motion.div
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          perspective: '1000px',
          rotateX,
          rotateY,
          scale: 1.08,
          opacity: 0.04,
        }}
      >
        <img
          src="/images/herobg.svg"
          alt="Hero Background"
          width="1920"
          height="1080"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Interactive Vector Flow Field Background (Refined Micro-Vectors) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-35">
        <InteractiveBackground
          strokeColor="#2563FF"
          strokeWidth={1}
          backgroundColor="transparent"
          count={65}
          movement={18}
          hover={true}
          force={3}
          resolution={3}
        />
      </div>

      {/* Noise Texture Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-15"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <GridLine direction="horizontal" position="25%" delay={1.2} />
        <GridLine direction="horizontal" position="50%" delay={1.5} />
        <GridLine direction="horizontal" position="75%" delay={1.8} />
        <GridLine direction="vertical" position="20%" delay={1.4} />
        <GridLine direction="vertical" position="50%" delay={1.6} />
        <GridLine direction="vertical" position="80%" delay={1.9} />
      </div>

      {/* Floating Ambient Glow Orbs in Soft Blue (Scaled Down) */}
      <div className="absolute inset-0 z-[4] pointer-events-none hidden md:block">
        <GlowOrb
          size={180}
          color="rgba(37, 99, 255, 0.07)"
          initialX="-5%"
          initialY="10%"
          duration={12}
          delay={0}
          blur={45}
        />
        <GlowOrb
          size={140}
          color="rgba(96, 165, 250, 0.08)"
          initialX="70%"
          initialY="60%"
          duration={15}
          delay={2}
          blur={40}
        />
        <GlowOrb
          size={160}
          color="rgba(37, 99, 255, 0.05)"
          initialX="40%"
          initialY="-10%"
          duration={18}
          delay={1}
          blur={50}
        />
        <GlowOrb
          size={120}
          color="rgba(59, 130, 246, 0.06)"
          initialX="85%"
          initialY="20%"
          duration={14}
          delay={3}
          blur={40}
        />
      </div>

      {/* Rising Floating Micro-Particles (Subtle & Small) */}
      <div className="absolute inset-0 z-[5] pointer-events-none hidden md:block">
        {Array.from({ length: 15 }).map((_, r) => (
          <Particle
            key={r}
            x={`${8 + ((r * 6.2) % 85)}%`}
            y={`${70 + ((r * 3.7) % 25)}%`}
            size={1.5 + (r % 2)}
            delay={r * 0.8}
            duration={4 + (r % 3) * 1.5}
          />
        ))}
      </div>

      {/* Central Radial Bloom (Compact) */}
      <motion.div
        className="absolute z-[4] pointer-events-none hidden md:block"
        style={{
          width: '45vw',
          height: '45vh',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse, rgba(37, 99, 255, 0.06) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Top studio badge */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="h-px bg-gradient-to-r from-transparent via-[#2563FF]/60 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          />
          <span className="text-[#2563FF] text-[10px] md:text-xs font-poppins font-semibold tracking-[0.35em] uppercase">
            Creative Digital Studio
          </span>
          <motion.span
            className="h-px bg-gradient-to-r from-transparent via-[#2563FF]/60 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Master Heading: INNOWIZE */}
        <div className="relative overflow-visible mb-2 py-2" style={{ perspective: '1000px' }}>
          {/* Luminous Specular Aura Behind INNOWIZE */}
          <motion.div
            className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-[85%] h-[90%] bg-gradient-to-r from-transparent via-[#2563FF]/15 to-transparent blur-3xl rounded-full transform scale-y-75" />
          </motion.div>

          <h1 className="flex items-center justify-center text-[15vw] md:text-[11.5vw] lg:text-[9.8vw] leading-[0.85] font-barlow font-black tracking-[-0.01em] relative z-10 select-none">
            {headlineChars.map((char, index) => (
              <AnimatedChar key={index} char={char} index={index} />
            ))}
          </h1>
        </div>

        {/* Subtitle Words Reveal */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 mb-8 overflow-hidden">
          {subWords.map((word, r) => (
            <motion.span
              key={r}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1 + r * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-base md:text-xl lg:text-2xl font-poppins tracking-[0.2em] uppercase ${
                word === 'EXPERIENCES' ? 'text-[#2563FF] font-bold' : 'text-slate-600 font-normal'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Glowing Divider Line with Electric Blue Pulse Dot */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#2563FF]/30" />
          <motion.span
            className="w-2 h-2 rounded-full bg-[#2563FF]"
            animate={{
              boxShadow: [
                '0 0 8px rgba(37, 99, 255, 0.4)',
                '0 0 20px rgba(37, 99, 255, 0.7)',
                '0 0 8px rgba(37, 99, 255, 0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#2563FF]/30" />
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          className="text-slate-600 text-xs md:text-sm font-poppins font-normal max-w-md leading-relaxed tracking-wide mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Crafting future-ready digital experiences, cinematic media & innovative technology that captivate audiences.
        </motion.p>

        {/* CTA Button in Electric Blue */}
        <motion.button
          onClick={() => navigate('/work')}
          className="group relative px-8 py-3.5 rounded-full bg-[#2563FF] hover:bg-[#1D4ED8] text-white text-xs md:text-sm font-poppins font-semibold tracking-[0.15em] uppercase overflow-hidden shadow-[0_4px_20px_rgba(37,99,255,0.35)] hover:shadow-[0_6px_25px_rgba(37,99,255,0.5)] transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Our Work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[8] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #F8FAFC 0%, transparent 100%)',
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
        }}
      >
        <motion.span
          className="text-slate-500 text-[9px] font-poppins tracking-[0.3em] uppercase"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="text-[#2563FF]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 stroke-[1.5]" />
        </motion.div>
      </motion.div>

      {/* Frame Corners in Electric Blue */}
      <motion.div
        className="absolute top-8 left-8 z-[6] pointer-events-none hidden sm:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-16 h-16 border-l border-t border-[#2563FF]/40 rounded-tl-md" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-8 z-[6] pointer-events-none hidden sm:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
      >
        <div className="w-16 h-16 border-r border-b border-[#2563FF]/40 rounded-br-md" />
      </motion.div>

      {/* Vertical Side Texts */}
      <motion.span
        className="absolute left-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-slate-400 text-[9px] font-poppins tracking-[0.4em] uppercase">
          Est. 2020 — Innowize Digital
        </span>
      </motion.span>

      <motion.span
        className="absolute right-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-slate-400 text-[9px] font-poppins tracking-[0.4em] uppercase">
          Digital • Branding • Experiences
        </span>
      </motion.span>
    </section>
  );
};
