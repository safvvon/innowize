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

    // Mobile: Alternating kinetic parallax scroll (1st from left, 2nd from right, etc.)
    mm.add('(max-width: 767px)', () => {
      const triggerEl = document.getElementById('intro-section') || containerRef.current;
      if (!triggerEl) return;

      // 1. WE: comes from the left side, moves right
      gsap.fromTo(
        r1.current,
        { x: '-35vw' },
        {
          x: '25vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 2. TURN: comes from the right side, moves left
      gsap.fromTo(
        r2.current,
        { x: '35vw' },
        {
          x: '-25vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 3. IDEAS: comes from the left side, moves right
      gsap.fromTo(
        r3.current,
        { x: '-35vw' },
        {
          x: '25vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 4. INTO: comes from the right side, moves left
      gsap.fromTo(
        r4.current,
        { x: '35vw' },
        {
          x: '-25vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 5. DIGITAL: comes from the left side, moves right
      gsap.fromTo(
        r5.current,
        { x: '-28vw' },
        {
          x: '20vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 6. EXPERIENCES: comes from the right side, moves left
      gsap.fromTo(
        r6.current,
        { x: '25vw' },
        {
          x: '-20vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );

      // 7. SWOOSH: moves with experiences
      gsap.fromTo(
        r7.current,
        { x: '25vw' },
        {
          x: '-20vw',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
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
      <div ref={r1} className="w-full flex justify-start pl-[4vw] sm:pl-[6vw] md:pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-start pl-[40vw] sm:pl-[44vw] md:pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-start pl-[4vw] sm:pl-[6vw] md:pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-start pl-[44vw] sm:pl-[48vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-start pl-[4vw] sm:pl-[6vw] md:pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-start pl-[14vw] sm:pl-[18vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyleLong}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-start pl-[20vw] sm:pl-[26vw] md:pl-[20vw] mt-1 sm:mt-3 lg:mt-12 mb-1 md:mb-1 lg:mb-4 will-change-transform opacity-30"
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
