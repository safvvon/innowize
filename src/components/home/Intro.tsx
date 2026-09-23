import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const m1 = useRef<HTMLDivElement>(null);
  const m2 = useRef<HTMLDivElement>(null);
  const m3 = useRef<HTMLDivElement>(null);
  const m4 = useRef<HTMLDivElement>(null);
  const m5 = useRef<HTMLDivElement>(null);
  const m6 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile Kinetic Scroll: Pinned in-place so user clearly experiences:
    // 1. Words fly in from extreme sides (±140vw)
    // 2. Words arrange and lock in the exact centre with clean, uniform spacing
    // 3. Words exit to opposite extreme sides (∓140vw)
    mm.add('(max-width: 767px)', () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1 (0 -> 0.38): Extreme sides into centre (0vw)
      // Phase 2 (0.38 -> 0.62): Hold steady in centre with proper spacing
      // Phase 3 (0.62 -> 1.0): Exit to opposite extreme sides

      // m1 ("we"): Extreme Right (140vw) -> Centre (0vw) -> Extreme Left (-140vw)
      tl.fromTo(m1.current, { x: '140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m1.current, { x: '-140vw', ease: 'power1.in', duration: 0.38 }, 0.62);

      // m2 ("turn"): Extreme Left (-140vw) -> Centre (0vw) -> Extreme Right (140vw)
      tl.fromTo(m2.current, { x: '-140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m2.current, { x: '140vw', ease: 'power1.in', duration: 0.38 }, 0.62);

      // m3 ("ideas"): Extreme Right (140vw) -> Centre (0vw) -> Extreme Left (-140vw)
      tl.fromTo(m3.current, { x: '140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m3.current, { x: '-140vw', ease: 'power1.in', duration: 0.38 }, 0.62);

      // m4 ("into"): Extreme Left (-140vw) -> Centre (0vw) -> Extreme Right (140vw)
      tl.fromTo(m4.current, { x: '-140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m4.current, { x: '140vw', ease: 'power1.in', duration: 0.38 }, 0.62);

      // m5 ("digital"): Extreme Right (140vw) -> Centre (0vw) -> Extreme Left (-140vw)
      tl.fromTo(m5.current, { x: '140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m5.current, { x: '-140vw', ease: 'power1.in', duration: 0.38 }, 0.62);

      // m6 ("experiences"): Extreme Left (-140vw) -> Centre (0vw) -> Extreme Right (140vw)
      tl.fromTo(m6.current, { x: '-140vw' }, { x: '0vw', ease: 'power1.out', duration: 0.38 }, 0)
        .to(m6.current, { x: '140vw', ease: 'power1.in', duration: 0.38 }, 0.62);
    });

    return () => mm.revert();
  }, []);

  const textStyleBig =
    'text-[17vw] min-[390px]:text-[18.5vw] sm:text-[18vw] leading-none font-extrabold italic text-white/[0.12] uppercase font-barlow relative select-none';

  const textStyleLong =
    'text-[12.8vw] min-[390px]:text-[13.8vw] sm:text-[15vw] leading-none font-extrabold italic text-white/[0.12] uppercase font-barlow relative select-none';

  return (
    <section
      id="intro-section"
      ref={sectionRef}
      className="relative min-h-screen md:h-[80vh] lg:h-[175vh] w-full bg-alpha flex items-center justify-center overflow-hidden"
    >
      {/* Precision Responsive Vector Shape - Top end touches right side, bottom end touches left side */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="introDirectBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563FF" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>
        </defs>
        {/* Desktop slope (100% identical to source of truth) */}
        <polygon
          className="hidden sm:block"
          points="0,100 100,22 100,100"
          fill="url(#introDirectBlueGrad)"
        />
        {/* Mobile slope */}
        <polygon
          className="block sm:hidden"
          points="0,100 100,60 100,100"
          fill="url(#introDirectBlueGrad)"
        />
      </svg>

      {/* Mobile Kinetic Typography Layer - Pinned with Intro section on mobile */}
      <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-evenly items-center pt-24 pb-14 pointer-events-none overflow-hidden w-full h-full px-2">
        <div ref={m1} className="w-full flex justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={textStyleBig}>we</span>
        </div>
        <div ref={m2} className="w-full flex justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={textStyleBig}>turn</span>
        </div>
        <div ref={m3} className="w-full flex justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={textStyleBig}>ideas</span>
        </div>
        <div ref={m4} className="w-full flex justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={textStyleBig}>into</span>
        </div>
        <div ref={m5} className="w-full flex justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={textStyleBig}>digital</span>
        </div>
        <div ref={m6} className="w-full flex flex-col items-center justify-center will-change-transform py-0.5">
          <span aria-hidden="true" className={`${textStyleLong} whitespace-nowrap`}>experiences</span>
          <div className="mt-2.5 opacity-30">
            <svg
              width="35vw"
              height="40"
              viewBox="0 0 300 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 25 Q 150 0 295 25 Q 150 15 5 25 Z" fill="#2563FF" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10" />
    </section>
  );
};
