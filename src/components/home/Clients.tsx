import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

export const Clients: React.FC = () => {
  const clientLogos = [
    { src: '/images/clients/client.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client2.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client3.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client4.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client5.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client55.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client6.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client7.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client77.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client8.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client9.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client10.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client11.png', alt: 'Client Partner Brand Logo' },
    { src: '/images/clients/client13.png', alt: 'Client Partner Brand Logo' },
  ];

  const stats = [
    { end: 200, suffix: '+', label: 'Projects Delivered', delay: 0 },
    { end: 10, suffix: '+', label: 'Years Experience', delay: 150 },
    { end: 45, suffix: '+', label: 'Happy Clients', delay: 300 },
  ];

  return (
    <section className="relative w-full bg-[#0B0E17] flex flex-col items-center p-0 m-0 overflow-visible pt-16 pb-20">
      <h2 className="sr-only">Trusted by Leading Brands and Proven Track Record</h2>
      {/* Subtle Divider Glow */}
      <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#2563FF]/30 to-transparent" />

      {/* Infinite Client Logos Marquee */}
      <div className="relative z-30 w-full pt-10 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
        <motion.div
          className="flex items-center gap-4 sm:gap-6 will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center hover:scale-105 transition-all duration-300 flex-shrink-0 bg-white hover:bg-slate-50 border border-white/20 hover:border-[#2563FF]/50 rounded-xl p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,255,0.3)] cursor-pointer w-[125px] h-[75px] sm:w-[160px] sm:h-[100px]"
            >
              <img
                src={c.src}
                alt={c.alt}
                width="130"
                height="70"
                loading="lazy"
                decoding="async"
                className="max-w-[105px] max-h-[55px] sm:max-w-[130px] sm:max-h-[70px] w-auto h-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Counter Row */}
      <div className="relative z-30 max-w-6xl w-full px-4 sm:px-6 py-10 sm:py-16 my-2 sm:my-4 border-t border-white/10">
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
    </section>
  );
};
