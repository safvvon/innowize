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
    const s = window.innerWidth < 768 ? 0.38 : 1;
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      gsap.to(r1.current, {
        x: `-${122 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r2.current, {
        x: `${42 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r3.current, {
        x: `-${45 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r4.current, {
        x: `${25 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r5.current, {
        x: `-${35 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r6.current, {
        x: `${18 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r7.current, {
        x: `${18 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textStyleBig =
    'text-[19vw] min-[390px]:text-[21vw] sm:text-[18vw] md:text-[16vw] lg:text-[15vw] leading-[0.8] md:leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.08] uppercase font-barlow relative select-none';

  const textStyleLong =
    'text-[14.5vw] min-[390px]:text-[15.5vw] sm:text-[15vw] md:text-[16vw] lg:text-[15vw] leading-[0.85] md:leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.08] uppercase font-barlow relative select-none';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 flex flex-col justify-between sm:justify-start h-screen md:h-auto mt-[1vh] sm:mt-[6vh] md:mt-0 lg:mt-[8vh] pt-3 pb-8 sm:pt-4 sm:pb-0 pointer-events-none overflow-hidden w-full max-w-full px-2 sm:px-4 md:px-0"
    >
      <div ref={r1} className="w-full flex justify-start pl-[32vw] sm:pl-[40vw] md:pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-start pl-[5vw] sm:pl-[5vw] md:pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-start pl-[28vw] sm:pl-[36vw] md:pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-start pl-[5vw] sm:pl-[4vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-start pl-[18vw] sm:pl-[24vw] md:pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyleBig}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-start pl-[2.5vw] sm:pl-[3vw] md:pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={`${textStyleLong} whitespace-nowrap`}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-start pl-[8vw] sm:pl-[14vw] md:pl-[20vw] mt-2 md:mt-3 lg:mt-12 mb-1 md:mb-1 lg:mb-4 will-change-transform opacity-30"
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
