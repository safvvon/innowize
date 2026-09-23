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
    const s = window.innerWidth < 768 ? 0.28 : 1;
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
        x: `${20 * s}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(r7.current, {
        x: `${20 * s}%`,
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

  const textStyle =
    'text-[13.5vw] min-[390px]:text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[15vw] leading-[0.84] min-[390px]:leading-[0.88] md:leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.08] uppercase font-barlow relative select-none';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 flex flex-col justify-start mt-[4vh] sm:mt-[6vh] md:mt-0 lg:mt-[8vh] pt-2 sm:pt-4 md:pt-0 pointer-events-none overflow-hidden w-full max-w-full px-2 sm:px-4 md:px-0"
    >
      <div ref={r1} className="w-full flex justify-start pl-[18vw] sm:pl-[28vw] md:pl-[59vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={textStyle}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-start pl-[4vw] sm:pl-[5vw] md:pl-[5vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={textStyle}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-start pl-[16vw] sm:pl-[24vw] md:pl-[55vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={textStyle}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-start pl-[4vw] sm:pl-[4vw] md:pl-[2vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={textStyle}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-start pl-[12vw] sm:pl-[18vw] md:pl-[35vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={textStyle}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-start pl-[3vw] sm:pl-[3vw] md:pl-[2vw] will-change-transform py-0.5 sm:py-0">
        <span aria-hidden="true" className={`${textStyle} whitespace-nowrap`}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-start pl-[10vw] sm:pl-[14vw] md:pl-[20vw] mt-4 md:mt-3 lg:mt-12 mb-2 md:mb-1 lg:mb-4 will-change-transform opacity-30"
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
