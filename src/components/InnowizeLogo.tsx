import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const InnowizeLogo: React.FC<LogoProps> = ({ className = 'h-9', showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Glowing 'W' Icon with 'i' dot */}
      <svg
        viewBox="0 0 100 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible flex-shrink-0"
      >
        <defs>
          <linearGradient id="iwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563FF" />
          </linearGradient>
          <filter id="iwGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2563FF" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Circular dot above left arm representing 'i' */}
        <circle cx="16" cy="14" r="5.5" fill="url(#iwGrad)" filter="url(#iwGlow)" />

        {/* Fluid rounded 'W' */}
        <path
          d="M16 26 C16 38, 24 50, 33 50 C42 50, 48 38, 52 28 C56 38, 62 50, 71 50 C80 50, 88 38, 88 24"
          stroke="url(#iwGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#iwGlow)"
        />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none select-none">
          <span className="text-white text-xl md:text-2xl font-bold tracking-tight font-poppins">
            innowize
          </span>
          <span className="text-[#3B82F6] text-[9px] md:text-[10px] font-semibold tracking-[0.32em] uppercase font-poppins mt-0.5">
            DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};
