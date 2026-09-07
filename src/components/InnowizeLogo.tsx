import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export const InnowizeLogo: React.FC<LogoProps> = ({
  className = 'h-9',
  showText = true,
  theme = 'dark',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official 3D Innowize 'iw' Logo Mark */}
      <img
        src="/images/iw-mark.png"
        alt="Innowize Logo"
        width="36"
        height="36"
        decoding="async"
        className="h-full w-auto object-contain flex-shrink-0 drop-shadow-[0_0_12px_rgba(37,99,255,0.65)] hover:drop-shadow-[0_0_20px_rgba(37,99,255,0.9)] transition-all duration-300"
      />

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-xl md:text-2xl font-bold tracking-tight font-poppins transition-colors duration-300 ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}
          >
            innowize
          </span>
          <span
            className={`text-[9px] md:text-[10px] font-semibold tracking-[0.32em] uppercase font-poppins mt-0.5 transition-colors duration-300 ${
              theme === 'light' ? 'text-[#2563FF]' : 'text-[#3B82F6]'
            }`}
          >
            DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};
