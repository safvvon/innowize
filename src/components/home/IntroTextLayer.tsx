import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroTextLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const r5 = useRef<HTMLDivElement>(null);
  const r6 = useRef<HTMLDivElement>(null);
  const r7 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop source of truth: 100% exact original desktop typography and parallax scroll
    mm.add('(min-width: 768px)', () => {
      if (!containerRef.current) return;

      gsap.to(r1.current, {
        x: '-122%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r2.current, {
        x: '42%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r3.current, {
        x: '-45%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r4.current, {
        x: '25%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r5.current, {
        x: '-35%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r6.current, {
        x: '20%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r7.current, {
        x: '20%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Mobile: Alternating kinetic parallax scroll (1st from left, 2nd from right, 3rd from left, etc.)
    mm.add('(max-width: 767px)', () => {
      const triggerEl = document.getElementById('intro-section') || containerRef.current;
      if (!triggerEl) return;

      // r1 ("we") - 1st: Starts Left -> Drifts Right
      gsap.to(r1.current, {
        x: '50%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r2 ("turn") - 2nd: Starts Right -> Drifts Left
      gsap.to(r2.current, {
        x: '-50%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r3 ("ideas") - 3rd: Starts Left -> Drifts Right
      gsap.to(r3.current, {
        x: '45%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r4 ("into") - 4th: Starts Right -> Drifts Left
      gsap.to(r4.current, {
        x: '-45%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r5 ("digital") - 5th: Starts Left -> Drifts Right
      gsap.to(r5.current, {
        x: '35%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r6 ("experiences") - 6th: Starts Right -> Drifts Left
      gsap.to(r6.current, {
        x: '-25%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // r7 (swoosh underline) - Follows experiences -> Drifts Left
      gsap.to(r7.current, {
        x: '-25%',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const textStyle =
    'text-[23vw] min-[390px]:text-[24.5vw] min-[420px]:text-[26vw] sm:text-[19vw] md:text-[16vw] lg:text-[15vw] leading-[0.78] sm:leading-[0.75] lg:leading-[0.75] font-black italic text-white/[0.12] uppercase font-barlow relative select-none';

  const textStyleLong =
    'text-[15.5vw] min-[390px]:text-[16.5vw] min-[420px]:text-[17.5vw] sm:text-[15.5vw] md:text-[16vw] lg:text-[15vw] leading-[0.78] sm:leading-[0.75] lg:leading-[0.75] font-black italic text-white/[0.12] uppercase font-barlow relative select-none whitespace-nowrap';

  return (
    <div
      ref={containerRef}
      className="flex absolute inset-0 z-30 flex-col justify-between sm:justify-start h-[80vh] sm:h-full mt-[8vh] min-[390px]:mt-[9vh] sm:mt-[6vh] md:mt-[8vh] pb-[3vh] sm:pb-0 pointer-events-none overflow-hidden w-full max-w-full px-2 sm:px-4 md:ml-0"
    >
      {/* 1st Word from Left */}
      <div ref={r1} className="w-full flex justify-start pl-[3vw] sm:pl-[4vw] md:pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>we</span>
      </div>
      {/* 2nd Word from Right */}
      <div ref={r2} className="w-full flex justify-start pl-[38vw] min-[390px]:pl-[42vw] md:pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>turn</span>
      </div>
      {/* 3rd Word from Left */}
      <div ref={r3} className="w-full flex justify-start pl-[3vw] md:pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>ideas</span>
      </div>
      {/* 4th Word from Right */}
      <div ref={r4} className="w-full flex justify-start pl-[40vw] min-[390px]:pl-[45vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>into</span>
      </div>
      {/* 5th Word from Left */}
      <div ref={r5} className="w-full flex justify-start pl-[3vw] md:pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>digital</span>
      </div>
      {/* 6th Word from Right */}
      <div ref={r6} className="w-full flex justify-start pl-[14vw] min-[390px]:pl-[18vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyleLong}>experiences</span>
      </div>
      {/* Swoosh Underline aligned under experiences */}
      <div
        ref={r7}
        className="w-full flex justify-start pl-[20vw] min-[390px]:pl-[26vw] md:pl-[20vw] mt-1 sm:mt-3 lg:mt-12 mb-1 md:mb-1 lg:mb-4 will-change-transform opacity-30"
      >
        <svg
          width="45vw"
          height="40"
          viewBox="0 0 300 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 25 Q 150 0 295 25 Q 150 15 5 25 Z" fill="#2563FF" />
        </svg>
      </div>
    </div>
  );
};
