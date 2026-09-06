import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Gem, Users, Flame, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => (
  <motion.div
    className="group relative bg-[#0F1628] hover:bg-[#141A2B] border border-[#141A2B] hover:border-[#2563FF]/50 rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(37, 99, 255, 0.15) 0%, transparent 70%)',
      }}
    />
    <div className="mb-5 w-12 h-12 rounded-xl bg-[#2563FF]/10 group-hover:bg-[#2563FF]/20 flex items-center justify-center transition-colors duration-500 border border-[#2563FF]/20">
      <span className="text-[#60A5FA] group-hover:text-[#2563FF] transition-colors duration-500">
        {icon}
      </span>
    </div>
    <h3 className="text-xl font-barlow font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#60A5FA] transition-colors duration-500">
      {title}
    </h3>
    <p className="text-sm font-poppins text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
      {description}
    </p>
  </motion.div>
);

const Counter: React.FC<{
  end: number;
  suffix: string;
  label: string;
  delay: number;
}> = ({ end, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let current = 0;
      const step = end / 60;
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, end, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: delay / 1000, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-5xl md:text-7xl font-barlow font-black text-white tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-xs md:text-sm font-poppins text-white/50 tracking-[0.2em] uppercase font-medium">
        {label}
      </span>
    </motion.div>
  );
};

export const About: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const word1 = useRef<HTMLDivElement>(null);
  const word2 = useRef<HTMLDivElement>(null);
  const word3 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;
      gsap.to(word1.current, {
        x: '20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(word2.current, {
        x: '-15%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(word3.current, {
        x: '25%',
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

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We constantly explore new techniques, tools, and approaches to stay ahead of the curve.',
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: 'Craftsmanship',
      description: 'Every pixel, every frame, every detail matters. We obsess over quality in everything we create.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Great work happens when talented people come together with a shared vision and mutual respect.',
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project we deliver. Creativity is our calling.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: "Good isn't good enough. We strive for exceptional results that exceed expectations.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Authenticity',
      description: "We create work that's genuine, meaningful, and true to your brand's unique story.",
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0B0E17] text-white overflow-x-hidden pt-20">
      {/* Hero with Parallax Typography */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 opacity-10">
          <img src="/images/herobg.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden">
          <div
            ref={word1}
            className="text-[20vw] font-black italic text-white/[0.03] uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            CREATIVE
          </div>
          <div
            ref={word2}
            className="text-[20vw] font-black italic text-white/[0.03] uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            AGENCY
          </div>
          <div
            ref={word3}
            className="text-[20vw] font-black italic text-white/[0.03] uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            EXPERIENCES
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            className="inline-block text-[#60A5FA] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About The Studio
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic text-white uppercase font-barlow leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Where Bold Ideas <br />
            <span className="text-[#2563FF]">Come to Life</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-base md:text-xl font-poppins max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A creative studio where bold ideas meet exceptional execution. We transform visions into unforgettable visual stories.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#60A5FA] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase font-barlow leading-tight">
                Crafting visual experiences that move people.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-white/70 font-poppins text-base md:text-lg leading-relaxed">
              <p>
                We believe in the power of creativity to transform businesses and inspire audiences. Our mission is to craft visual experiences that don't just look good—they tell stories, evoke emotions, and drive results.
              </p>
              <p className="text-sm md:text-base text-white/60">
                Every project is an opportunity to push boundaries, challenge conventions, and create something truly extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[#0F1628]/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#60A5FA] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase font-barlow leading-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <ValueCard
                key={idx}
                index={idx}
                icon={val.icon}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter end={200} suffix="+" label="Projects Delivered" delay={0} />
          <Counter end={10} suffix="+" label="Years Experience" delay={200} />
          <Counter end={45} suffix="+" label="Happy Clients" delay={400} />
        </div>
        <motion.div
          className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mt-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            READY TO CREATE <br />
            <span className="text-[#2563FF]">TOGETHER?</span>
          </motion.h2>
          <motion.p
            className="text-white/70 text-sm md:text-base font-poppins max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's bring your vision to life. Whether you have a clear idea or just a spark of inspiration, we're here to help you create something extraordinary.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
              className="group relative px-8 py-4 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white text-sm font-poppins font-semibold tracking-[0.1em] uppercase overflow-hidden transition-all duration-300 w-full sm:w-auto cursor-pointer shadow-[0_0_25px_rgba(37,99,255,0.5)] border border-[#60A5FA]/40"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button
              onClick={() => navigate('/work')}
              className="group px-8 py-4 rounded-full border border-white/20 hover:border-white/50 text-white text-sm font-poppins font-medium tracking-[0.1em] uppercase transition-all duration-300 w-full sm:w-auto cursor-pointer bg-[#0F1628]/60 hover:bg-[#0F1628]"
            >
              <span className="flex items-center justify-center gap-2">
                View Our Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
