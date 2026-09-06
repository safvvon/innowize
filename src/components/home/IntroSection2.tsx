import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroSection2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
          y: 100,
          opacity: 0,
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
          y: 80,
          opacity: 0,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0B0E17] flex items-center justify-center overflow-visible z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20 pb-24 md:pb-32"
    >
      {/* Subtle top/bottom gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E17] via-[#0F1628] to-[#0B0E17] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col gap-4 md:gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          <div className="flex items-start">
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white font-barlow"
            >
              For Innowize Digital,{' '}
              <span className="text-[#60A5FA]">creativity meets storytelling</span>{' '}
              to help brands grow in the digital world.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 md:gap-5 text-xs md:text-sm lg:text-base font-poppins">
            <p ref={textRef} className="text-white/80 leading-relaxed">
              Based in Kochi, Kerala, we specialize in crafting{' '}
              <span className="font-semibold text-white">
                high-impact Instagram Reel advertisements
              </span>{' '}
              and short-form video content that captures attention and drives engagement. We work with{' '}
              <span className="font-semibold text-white">
                growing brands, local businesses, and ambitious entrepreneurs
              </span>{' '}
              who want to stand out in today's fast-moving digital landscape. As a creative video production partner, we collaborate with our clients to transform ideas into{' '}
              <span className="font-semibold text-white">
                scroll-stopping visuals, compelling stories, and results-driven content
              </span>{' '}
              designed for Instagram and other social platforms. Our focus is simple:{' '}
              <span className="font-semibold text-[#60A5FA]">
                create content that connects, engages, and converts
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
