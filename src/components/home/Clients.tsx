import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Video, Sparkles, Monitor, Megaphone, Clapperboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Animated CountUp number
const Counter: React.FC<{
  end: number;
  suffix: string;
  label: string;
  delay: number;
}> = ({ end, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let rafId: number | null = null;
    const duration = 1500;

    const timer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: delay / 1000, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-barlow text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm font-poppins font-medium text-white/60 tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onExplore: () => void;
}> = ({ icon, title, description, index, onExplore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onClick={onExplore}
      className="group relative p-8 rounded-2xl bg-[#0F1628]/80 hover:bg-[#141A2B] border border-white/10 hover:border-[#2563FF]/50 transition-all duration-300 backdrop-blur-sm cursor-pointer flex flex-col justify-between shadow-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-poppins font-bold text-white/30 tracking-widest">
          0{index + 1}
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#2563FF]/10 group-hover:bg-[#2563FF]/20 flex items-center justify-center text-[#2563FF] group-hover:text-[#60A5FA] transition-colors duration-300 border border-[#2563FF]/20">
          {icon}
        </div>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-bold font-barlow text-white mb-3 group-hover:text-[#60A5FA] transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm font-poppins text-white/70 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider text-[#60A5FA] group-hover:text-[#2563FF] transition-colors">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

export const Clients: React.FC = () => {
  const navigate = useNavigate();

  const clientLogos = [
    { src: '/images/clients/client.png', alt: 'Client 1' },
    { src: '/images/clients/client2.png', alt: 'Client 2' },
    { src: '/images/clients/client3.png', alt: 'Client 3' },
    { src: '/images/clients/client4.png', alt: 'Client 4' },
    { src: '/images/clients/client5.png', alt: 'Client 5' },
    { src: '/images/clients/client55.png', alt: 'Client 55' },
    { src: '/images/clients/client6.png', alt: 'Client 6' },
    { src: '/images/clients/client7.png', alt: 'Client 7' },
    { src: '/images/clients/client77.png', alt: 'Client 77' },
    { src: '/images/clients/client8.png', alt: 'Client 8' },
    { src: '/images/clients/client9.png', alt: 'Client 9' },
    { src: '/images/clients/client10.png', alt: 'Client 10' },
    { src: '/images/clients/client11.png', alt: 'Client 11' },
    { src: '/images/clients/client13.png', alt: 'Client 13' },
  ];

  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Production',
      description:
        'Cinematic storytelling from concept to final cut. Commercials, brand films, and content that captures attention.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Brand Identity',
      description:
        'Strategic brand development that defines who you are. Logos, visual systems, and brand guidelines.',
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Digital Experience',
      description:
        'Immersive websites and digital platforms that push boundaries. UI/UX design, web development, and interactive media.',
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Creative Campaigns',
      description:
        'Bold campaigns that break through the noise. Social media, digital marketing, and launch strategies.',
    },
    {
      icon: <Clapperboard className="w-6 h-6" />,
      title: 'Motion Design',
      description:
        'Dynamic motion graphics and 2D/3D animations that bring ideas to life with energy and precision.',
    },
  ];

  const stats = [
    { end: 200, suffix: '+', label: 'Projects Delivered', delay: 0 },
    { end: 10, suffix: '+', label: 'Years Experience', delay: 150 },
    { end: 45, suffix: '+', label: 'Happy Clients', delay: 300 },
  ];

  return (
    <section className="relative w-full bg-[#0B0E17] flex flex-col items-center p-0 m-0 overflow-visible pt-16">
      {/* Subtle Divider Glow */}
      <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#2563FF]/30 to-transparent" />

      {/* Infinite Client Logos Marquee */}
      <div className="relative z-30 w-full pt-16 pb-12 overflow-hidden">
        <motion.div
          className="flex items-center gap-6 will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center hover:scale-105 transition-all duration-300 flex-shrink-0 bg-white hover:bg-slate-50 border border-white/20 hover:border-[#2563FF]/50 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,255,0.3)] cursor-pointer"
              style={{ width: '160px', height: '100px' }}
            >
              <img
                src={c.src}
                alt={c.alt}
                width="130"
                height="70"
                loading="lazy"
                decoding="async"
                className="max-w-[130px] max-h-[70px] w-auto h-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Counter Row */}
      <div className="relative z-30 max-w-6xl w-full px-6 py-16 my-8 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((st, i) => (
            <Counter
              key={i}
              end={st.end}
              suffix={st.suffix}
              label={st.label}
              delay={st.delay}
            />
          ))}
        </div>
      </div>

      {/* Services Section Header & Cards Grid */}
      <div className="relative z-30 max-w-7xl w-full px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#60A5FA] text-xs md:text-sm font-poppins font-semibold tracking-[0.3em] uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-barlow text-white leading-tight mb-4">
            Crafting Impactful Visual Experiences
          </h2>
          <p className="text-sm md:text-base font-poppins text-white/70">
            From social media hooks to full brand identities, we deliver end-to-end creative solutions tailored for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, idx) => (
            <ServiceCard
              key={idx}
              index={idx}
              icon={srv.icon}
              title={srv.title}
              description={srv.description}
              onExplore={() => navigate('/services')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
