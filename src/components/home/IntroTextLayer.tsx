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

    return () => mm.revert();
  }, []);

  const textStyle =
    'text-[16vw] lg:text-[15vw] leading-[0.65] lg:leading-[0.75] font-extrabold italic text-white/[0.08] uppercase font-barlow relative';

  return (
    <div
      ref={containerRef}
      className="hidden md:flex absolute inset-0 z-30 flex-col justify-start mt-[8vh] pt-0 pointer-events-none overflow-hidden w-full max-w-full px-4 md:ml-0"
    >
      <div ref={r1} className="w-full flex justify-start pl-[59vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>we</span>
      </div>
      <div ref={r2} className="w-full flex justify-start pl-[5vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>turn</span>
      </div>
      <div ref={r3} className="w-full flex justify-start pl-[55vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>ideas</span>
      </div>
      <div ref={r4} className="w-full flex justify-start pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>into</span>
      </div>
      <div ref={r5} className="w-full flex justify-start pl-[35vw] will-change-transform">
        <span aria-hidden="true" className={textStyle}>digital</span>
      </div>
      <div ref={r6} className="w-full flex justify-start pl-[2vw] will-change-transform">
        <span aria-hidden="true" className={`${textStyle} whitespace-nowrap`}>experiences</span>
      </div>
      <div
        ref={r7}
        className="w-full flex justify-start pl-[20vw] mt-4 md:mt-3 lg:mt-12 mb-2 md:mb-1 lg:mb-4 will-change-transform opacity-30"
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
