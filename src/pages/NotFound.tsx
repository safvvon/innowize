import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Film, Mail, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070A12] text-white flex items-center justify-center px-4 sm:px-6 md:px-12 pt-28 pb-20 relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/15 border border-[#2563FF]/30 text-[#60A5FA] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
          <span>Error 404 • Lost in the Digital Universe</span>
        </div>

        {/* 404 Hero Number */}
        <h1 className="text-7xl sm:text-9xl font-black font-barlow text-white tracking-tight leading-none mb-4 drop-shadow-2xl">
          4<span className="text-[#2563FF]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold font-barlow text-white uppercase tracking-wide mb-4">
          Page Not Found
        </h2>

        <p className="text-white/70 text-sm sm:text-base font-poppins max-w-md mx-auto leading-relaxed mb-8">
          The link you followed may be broken, or the page may have been removed. Let's get you back to exploring our digital creations.
        </p>

        {/* Main CTA: Return Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2563FF] hover:bg-[#1D4ED8] text-white font-poppins font-semibold text-sm tracking-wide shadow-[0_8px_25px_rgba(37,99,255,0.45)] transition-all duration-300 hover:scale-105 mb-10 border border-white/15"
        >
          <Home className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        {/* Quick Nav Recovery Grid */}
        <div className="w-full pt-8 border-t border-white/10">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4 font-poppins">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-poppins text-xs font-medium">
            <Link
              to="/services"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#2563FF]/40 text-white/80 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Services</span>
            </Link>
            <Link
              to="/work"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#2563FF]/40 text-white/80 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <Film className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Our Work</span>
            </Link>
            <Link
              to="/about"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#2563FF]/40 text-white/80 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>About Us</span>
            </Link>
            <Link
              to="/contact"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#2563FF]/40 text-white/80 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
