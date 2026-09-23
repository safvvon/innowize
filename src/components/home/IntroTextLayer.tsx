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
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      if (isMobile) {
        // Mobile 3-Phase Scroll: Words first come from sides, arrive and arrange in the centre, then exit to sides as you scroll down
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        tl.fromTo(
          r1.current,
          { x: '75vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r1.current,
          { x: '-75vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r2.current,
          { x: '-75vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r2.current,
          { x: '75vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r3.current,
          { x: '75vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r3.current,
          { x: '-75vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r4.current,
          { x: '-75vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r4.current,
          { x: '75vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r5.current,
          { x: '75vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r5.current,
          { x: '-75vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r6.current,
          { x: '-70vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r6.current,
          { x: '70vw', ease: 'none', duration: 1 },
          1
        );

        tl.fromTo(
          r7.current,
          { x: '50vw' },
          { x: '0vw', ease: 'none', duration: 1 },
          0
        ).to(
          r7.current,
          { x: '-50vw', ease: 'none', duration: 1 },
          1
        );
      } else {
        // Desktop: Exact original source of truth
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textStyleBig =
    'text-[17vw] min-[390px]:text-[18.5vw] sm:text-[18vw] md:text-[16vw] lg:text-[15vw] leading-[0.82] md:leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.09] uppercase font-barlow relative select-none';

  const textStyleLong =
    'text-[12.8vw] min-[390px]:text-[13.8vw] sm:text-[15vw] md:text-[16vw] lg:text-[15vw] leading-[0.85] md:leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.09] uppercase font-barlow relative select-none';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 flex flex-col justify-between sm:justify-start h-screen md:h-auto pt-24 pb-12 sm:pt-4 sm:pb-0 pointer-events-none overflow-hidden w-full max-w-full px-2 sm:px-4 md:px-0"
    >
      <div ref={r1} className="w-full flex justify-center md:justify-start md:pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-center md:justify-start md:pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-center md:justify-start md:pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-center md:justify-start md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-center md:justify-start md:pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-center md:justify-start md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={`${textStyleLong} whitespace-nowrap`}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-center md:justify-start md:pl-[20vw] mt-2 md:mt-3 lg:mt-12 mb-1 md:mb-1 lg:mb-4 will-change-transform opacity-30"
      >
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
  );
};
