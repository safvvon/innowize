import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="relative h-[90vh] md:h-[80vh] lg:h-[175vh] w-full bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
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
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        <polygon
          points="0,100 100,22 100,100"
          fill="url(#introDirectBlueGrad)"
        />
      </svg>

      <div className="relative z-10" />
    </section>
  );
};
