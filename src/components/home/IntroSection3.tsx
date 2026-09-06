import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VideoCard: React.FC<{
  videoUrl: string;
  videoId: string;
  index: number;
}> = React.memo(({ videoUrl, videoId, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const isInView = useInView(cardRef, { margin: '400px', once: true });
  const thumbUrl = `https://vumbnail.com/${videoId}.jpg`;

  useEffect(() => {
    const img = new Image();
    img.src = thumbUrl;
    img.onload = () => setThumbLoaded(true);
  }, [thumbUrl]);

  const handleIframeLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 bg-black/20 rounded-md overflow-hidden relative w-[280px] h-[320px] md:w-[420px] md:h-[480.5px] -mt-4 md:mt-0"
      style={{
        filter: 'drop-shadow(20px 30px 15px rgba(0, 0, 0, 0.35))',
        border: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {thumbLoaded && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbUrl})` }}
        />
      )}

      {!thumbLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="w-12 h-12 border-3 border-white/20 border-t-white/60 rounded-full animate-spin" />
        </div>
      )}

      {thumbLoaded && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {isInView && (
        <iframe
          src={videoUrl}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          onLoad={handleIframeLoad}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) translateZ(0)',
            width: '100%',
            height: '177.78%',
            minWidth: '100%',
            minHeight: '100%',
            pointerEvents: 'none',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            willChange: 'opacity',
          }}
          title={`Video Reel ${index + 1}`}
        />
      )}
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

export const IntroSection3: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const p1 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const p2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const p3 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const p4 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const videos = [
    { url: 'https://player.vimeo.com/video/1153483177?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483177' },
    { url: 'https://player.vimeo.com/video/1153483144?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483144' },
    { url: 'https://player.vimeo.com/video/1153483218?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483218' },
    { url: 'https://player.vimeo.com/video/1153483192?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483192' },
    { url: 'https://player.vimeo.com/video/1153483221?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483221' },
    { url: 'https://player.vimeo.com/video/1153483174?background=1&autoplay=1&loop=1&muted=1&controls=0', id: '1153483174' },
  ];

  const bigTextStyle =
    'text-[38vw] md:text-[15vw] leading-[0.75] font-extrabold italic text-alpha uppercase font-barlow relative';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] md:min-h-screen w-full bg-alpha overflow-visible md:overflow-hidden pt-16 md:pt-24 z-10"
    >
      {/* Flipped Background Overlay */}
      <img
        src="/images/introbg.svg"
        alt="Intro Background Flipped"
        className="absolute top-0 right-0 w-[160%] max-w-none z-[1] pointer-events-none scale-x-[-1] scale-y-[-1]"
      />

      {/* Angled Rotating Video Reels Row */}
      <div
        className="h-full w-[120%] md:w-full flex items-start justify-center relative z-50 overflow-visible -mb-56 md:pb-0 -mt-24 md:-mt-12 -ml-[10%] md:ml-0 pt-0 md:pt-16"
        style={{ transform: 'rotate(5deg) translateZ(0)' }}
      >
        <motion.div
          className="flex gap-6 md:gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          {/* Double list for seamless infinite loop */}
          {[...videos, ...videos].map((p, idx) => (
            <VideoCard
              key={idx}
              videoUrl={p.url}
              videoId={p.id}
              index={idx}
            />
          ))}
        </motion.div>
      </div>

      {/* Button: Check out our work */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
        <button
          onClick={() => navigate('/work')}
          className="px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          style={{ backgroundColor: '#a8c5b4', color: '#2d3436' }}
        >
          Check out our work
        </button>
      </div>

      {/* Parallax Background Letters "WORK" and Cloud */}
      <div className="absolute inset-0 z-30 flex flex-col justify-start items-start pointer-events-none overflow-visible w-full px-4 -mt-40 -ml-24 md:pt-12 md:ml-0 md:mt-0">
        {/* Floating Cloud */}
        <motion.div
          className="absolute top-0 left-[10vw] w-[4vw] min-w-[50px] opacity-80"
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -15, 10, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div
          style={{ x: p1, willChange: 'transform' }}
          className="w-full flex justify-start pl-[25vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p2, willChange: 'transform' }}
          className="w-full flex justify-start pl-[60vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p3, willChange: 'transform' }}
          className="w-full flex justify-start pl-[16vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
        <motion.div
          style={{ x: p4, willChange: 'transform' }}
          className="w-full flex justify-start pl-[30vw]"
        >
          <h1 className={bigTextStyle}>WORK</h1>
        </motion.div>
      </div>
    </section>
  );
};
