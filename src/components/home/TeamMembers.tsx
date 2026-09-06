import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Sree Hari',
    role: 'Lead Videographer',
    specialty: 'Cinematic Narrative',
    image: '/images/team/01.jpeg',
    bio: 'Crafting visual symphonies through light and shadow. Sree transforms raw moments into cinematic legacy.',
  },
  {
    name: 'Aadish',
    role: 'Chief Executive',
    specialty: 'Vision & Strategy',
    image: '/images/team/02.jpeg',
    bio: "The architect of Noozi's future. Aadish bridges the gap between disruptive innovation and timeless design.",
  },
  {
    name: 'Mayoora',
    role: 'HR Director',
    specialty: 'Talent Development',
    image: '/images/team/03.jpeg',
    bio: 'Cultivating creative culture and nurturing talent. Mayoora ensures our team thrives in an inspiring environment.',
  },
  {
    name: 'Anu',
    role: 'Senior Editor',
    specialty: 'Post-Production',
    image: '/images/team/04.jpeg',
    bio: 'Transforming raw footage into polished masterpieces. Anu brings stories to life with stunning precision.',
  },
  {
    name: 'Muhammed Anees',
    role: 'Design Director',
    specialty: 'Brand Identity',
    image: '/images/team/05.jpeg',
    bio: 'Crafting compelling visual identities. Anees creates memorable experiences that drive engagement.',
  },
];

export const TeamMembers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextMember = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevMember = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const member = team[currentIndex];

  const variants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <section className="relative w-full min-h-screen bg-alpha overflow-hidden flex items-center justify-center py-20 md:py-32">
      {/* Animated Dot Matrix Background */}
      <div className="absolute inset-0 opacity-10 will-change-transform pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #248a61 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'translateZ(0)',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-beta/10 border border-beta/30 text-zigma text-xs font-poppins font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-beta" />
            <span>The Minds Behind Noozi</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-barlow text-tango leading-tight">
            Meet the Visionaries
          </h2>
        </div>

        {/* Member Showcase Card */}
        <div className="relative w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Photo */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/15 relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <span className="text-xs font-poppins font-semibold uppercase tracking-[0.25em] text-zigma mb-2">
                  {member.specialty}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold font-barlow text-tango mb-1">
                  {member.name}
                </h3>
                <h4 className="text-sm md:text-base font-poppins text-beta font-medium mb-6">
                  {member.role}
                </h4>
                <p className="text-tango/75 text-sm md:text-base font-poppins leading-relaxed mb-8">
                  "{member.bio}"
                </p>

                {/* Controls & Pagination */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {team.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > currentIndex ? 1 : -1);
                          setCurrentIndex(i);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? 'w-8 bg-beta'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevMember}
                      className="w-11 h-11 rounded-full bg-white/5 hover:bg-beta border border-white/10 flex items-center justify-center text-tango hover:text-white transition-all duration-300 cursor-pointer"
                      aria-label="Previous member"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextMember}
                      className="w-11 h-11 rounded-full bg-white/5 hover:bg-beta border border-white/10 flex items-center justify-center text-tango hover:text-white transition-all duration-300 cursor-pointer"
                      aria-label="Next member"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
