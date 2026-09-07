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
      className="relative min-h-screen w-full bg-[#F8FAFC] flex items-center justify-center overflow-visible z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20 pb-24 md:pb-32"
    >
      {/* Subtle top/bottom gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/70 to-[#F8FAFC] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col gap-4 md:gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          <div className="flex items-start">
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 font-barlow"
            >
              We craft future-ready{' '}
              <span className="text-[#2563FF]">digital experiences</span>{' '}
              that blend creativity, technology, and strategy.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 md:gap-5 text-xs md:text-sm lg:text-base font-poppins">
            <p ref={textRef} className="text-slate-600 leading-relaxed">
              At Innowize Digital, we{' '}
              <span className="font-semibold text-slate-900">
                turn ideas into experiences
              </span>
              . We engineer{' '}
              <span className="font-semibold text-slate-900">
                cinematic video production, live streaming, digital marketing
              </span>
              , and next-generation{' '}
              <span className="font-semibold text-slate-900">
                AI & creative technology
              </span>{' '}
              to help ambitious brands stay ahead in the digital age. As a forward-thinking creative partner, we collaborate with visionary clients to build digital presences that inspire, engage, and drive extraordinary growth. Our focus is simple:{' '}
              <span className="font-semibold text-[#2563FF]">
                craft experiences that captivate, connect, and convert
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
