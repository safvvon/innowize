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

    // Mobile: Alternating entry (1st Left, 2nd Right, etc.) meeting in perfect alignment on the slide
    mm.add('(max-width: 767px)', () => {
      const triggerEl = document.getElementById('intro-section') || containerRef.current;
      if (!triggerEl) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 0.6,
        },
      });

      // Entry: 0 -> 0.40 | In Alignment: 0.40 -> 0.60 | Exit: 0.60 -> 1.00
      // 1. WE (Left -> Center -> Right)
      tl.fromTo(r1.current, { x: '-110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r1.current, { x: '110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 2. TURN (Right -> Center -> Left)
      tl.fromTo(r2.current, { x: '110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r2.current, { x: '-110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 3. IDEAS (Left -> Center -> Right)
      tl.fromTo(r3.current, { x: '-110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r3.current, { x: '110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 4. INTO (Right -> Center -> Left)
      tl.fromTo(r4.current, { x: '110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r4.current, { x: '-110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 5. DIGITAL (Left -> Center -> Right)
      tl.fromTo(r5.current, { x: '-110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r5.current, { x: '110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 6. EXPERIENCES (Right -> Center -> Left)
      tl.fromTo(r6.current, { x: '110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r6.current, { x: '-110vw', ease: 'power1.in', duration: 0.4 }, 0.6);

      // 7. SWOOSH (Left -> Center -> Right)
      tl.fromTo(r7.current, { x: '-110vw' }, { x: '0vw', ease: 'power1.out', duration: 0.4 }, 0)
        .to(r7.current, { x: '110vw', ease: 'power1.in', duration: 0.4 }, 0.6);
    });

    return () => mm.revert();
  }, []);

  const textStyle =
    'text-[18vw] min-[390px]:text-[19.5vw] min-[420px]:text-[20.5vw] sm:text-[19vw] md:text-[16vw] lg:text-[15vw] leading-[0.78] sm:leading-[0.75] lg:leading-[0.75] font-black italic text-white/[0.12] uppercase font-barlow relative select-none text-center';

  const textStyleMedium =
    'text-[16vw] min-[390px]:text-[17vw] min-[420px]:text-[18vw] sm:text-[19vw] md:text-[16vw] lg:text-[15vw] leading-[0.78] sm:leading-[0.75] lg:leading-[0.75] font-black italic text-white/[0.12] uppercase font-barlow relative select-none text-center';

  const textStyleLong =
    'text-[11.5vw] min-[390px]:text-[12.5vw] min-[420px]:text-[13.5vw] sm:text-[15.5vw] md:text-[16vw] lg:text-[15vw] leading-[0.78] sm:leading-[0.75] lg:leading-[0.75] font-black italic text-white/[0.12] uppercase font-barlow relative select-none whitespace-nowrap text-center';

  return (
    <div
      ref={containerRef}
      className="flex absolute inset-0 z-30 flex-col justify-between sm:justify-start h-[80vh] sm:h-full mt-[8vh] min-[390px]:mt-[9vh] sm:mt-[6vh] md:mt-[8vh] pb-[3vh] sm:pb-0 pointer-events-none overflow-hidden w-full max-w-full px-2 sm:px-4 md:ml-0"
    >
      <div ref={r1} className="w-full flex justify-center md:justify-start md:pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-center md:justify-start md:pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-center md:justify-start md:pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-center md:justify-start md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-center md:justify-start md:pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyleMedium}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-center md:justify-start md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyleLong}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-center md:justify-start md:pl-[20vw] mt-1 sm:mt-3 lg:mt-12 mb-1 md:mb-1 lg:mb-4 will-change-transform opacity-30"
      >
        <svg
          width="45vw"
          height="40"
          viewBox="0 0 300 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[240px] md:max-w-none"
        >
          <path d="M5 25 Q 150 0 295 25 Q 150 15 5 25 Z" fill="#2563FF" />
        </svg>
      </div>
    </div>
  );
};
