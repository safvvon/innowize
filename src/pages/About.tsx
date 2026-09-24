import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Compass, Hexagon, Diamond, CheckCircle } from 'lucide-react';

export const About: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const pillars = [
    {
      icon: <Diamond className="w-8 h-8 text-[#2563FF]" />,
      title: 'EXPERIENCE',
      description:
        'Over a decade of sculpting digital aesthetics, immersive storytelling, and high-conversion brand experiences.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#2563FF]" />,
      title: 'INNOVATION',
      description:
        'Pioneering the intersection of artificial intelligence, short-form motion, and next-gen video engineering.',
    },
    {
      icon: <Hexagon className="w-8 h-8 text-[#2563FF]" />,
      title: 'EXCELLENCE',
      description:
        'Uncompromising attention to typography, spatial pacing, color science, and pristine final delivery.',
    },
  ];

  const tabContent = {
    mission: {
      title: 'Crafting Visual Experiences That Move People',
      description:
        'We believe in the transformative power of creativity. Our mission is to craft visual experiences that don’t just look good—they tell stories, evoke deep emotion, and deliver measurable brand growth in a fast-paced digital universe.',
      points: [
        'Transforming brands through high-impact short-form and cinematic media',
        'Bridging human emotion with cutting-edge production technology',
        'Delivering authentic, memorable narratives that inspire action',
      ],
      image: '/images/about/mission.jpg',
      badge: 'MISSION IN MOTION',
      label: 'Cinema Studio Production',
    },
    vision: {
      title: 'Leading The Next Era of Digital Media',
      description:
        'We envision a world where every brand has a distinct, unmistakable visual voice. By fusing high-end cinema aesthetics with agile digital formats, we empower ambitious companies to lead rather than follow.',
      points: [
        'Pioneering generative AI and virtual production workflows',
        'Creating future-proof digital assets tailored for multi-platform reach',
        'Setting new benchmarks for visual storytelling and viewer engagement',
      ],
      image: '/images/about/vision.jpg',
      badge: 'FUTURE HORIZON',
      label: 'Virtual Production & AI Soundstage',
    },
    values: {
      title: 'Principles That Guide Every Frame',
      description:
        'Our values form the bedrock of our studio culture. From initial whiteboard concepts to final color grading, we are driven by an obsession with quality, authenticity, and collaborative partnership.',
      points: [
        'Relentless pursuit of craft and creative excellence',
        'Transparency, integrity, and genuine client collaboration',
        'Constant curiosity and fearlessness in trying new mediums',
      ],
      image: '/images/about/values.jpg',
      badge: 'CRAFT & INTEGRITY',
      label: 'Master Color & Post-Production Suite',
    },
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-hidden pt-28 pb-20">
      {/* Top Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase mb-2 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-barlow text-white tracking-tight">
              The Digital Frontier
            </h1>
          </div>
          <p className="text-white/70 text-sm md:text-base font-poppins max-w-2xl leading-relaxed">
            We craft future-ready digital experiences that blend creativity, technology, and strategy to help brands thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-5 sm:p-10 lg:p-16 shadow-2xl w-full">
          {/* Tab Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-white/10 overflow-x-auto scrollbar-none">
            {(['mission', 'vision', 'values'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-poppins font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer min-h-[40px] shrink-0 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAboutTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#2563FF] to-[#3B82F6] rounded-full shadow-[0_0_20px_rgba(37,99,255,0.45)] border border-[#60A5FA]/30 -z-10"
                    />
                  )}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center w-full">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-barlow text-white leading-tight">
                {tabContent[activeTab].title}
              </h2>
              <p className="text-white/75 text-sm sm:text-base md:text-lg font-poppins leading-relaxed">
                {tabContent[activeTab].description}
              </p>
              <ul className="space-y-3 pt-2 font-poppins">
                {tabContent[activeTab].points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-white/80">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563FF] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0D16] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    width={600}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                    className="w-full h-full object-cover contrast-[1.04] saturate-[1.06]"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17]/95 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 pointer-events-none">
                  <span className="text-[10px] sm:text-[11px] font-poppins font-bold tracking-widest text-[#60A5FA] uppercase block mb-0.5 sm:mb-1">
                    {tabContent[activeTab].badge}
                  </span>
                  <p className="text-white font-barlow font-bold text-base sm:text-xl">
                    {tabContent[activeTab].label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase mb-2 block">
            Our Foundation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-barlow text-white">
            Three Pillars of Innowize
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#2563FF]/10 flex items-center justify-center mb-5 sm:mb-6 border border-[#2563FF]/20">
                {pillar.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-barlow text-white tracking-wide mb-2 sm:mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 font-poppins leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-10 md:p-16 rounded-3xl bg-[#0F1628] border border-[#141A2B] text-center shadow-xl w-full">
          <div className="pb-6 md:pb-0 border-b md:border-b-0 border-white/10">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-barlow text-white mb-1 sm:mb-2">
              87.2K
            </div>
            <div className="text-xs sm:text-sm font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Projects Completed
            </div>
          </div>
          <div className="py-2 md:py-0 pb-6 md:pb-0 border-b md:border-b-0 md:border-x border-white/10 md:px-6">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-barlow text-white mb-1 sm:mb-2">
              28+
            </div>
            <div className="text-xs sm:text-sm font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Worldwide Reach
            </div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-barlow text-white mb-1 sm:mb-2">
              28,000+
            </div>
            <div className="text-xs sm:text-sm font-poppins font-semibold tracking-wider text-[#60A5FA] uppercase">
              Global Brand Trust
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 mb-12 sm:mb-16">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-6 sm:p-12 lg:p-20 text-center shadow-2xl w-full">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            READY TO CREATE <br />
            <span className="text-[#2563FF]">TOGETHER?</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-base md:text-lg font-poppins max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Let's bring your vision to life. Whether you have an established brand or an ambitious new venture, we are here to craft something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full">
            <button
              onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#2563FF] hover:bg-[#3B82F6] text-white text-xs sm:text-sm font-poppins font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,255,0.5)] border border-[#60A5FA]/40 cursor-pointer min-h-[44px]"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate('/work')}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-white/50 text-white text-xs sm:text-sm font-poppins font-medium tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer bg-[#0F1628]/60 hover:bg-[#0F1628] min-h-[44px]"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
