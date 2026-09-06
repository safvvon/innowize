import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const eyeRef = useRef<HTMLDivElement>(null);
  const [eyeAngle, setEyeAngle] = useState(0);

  // Eyeball cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angleRad = Math.atan2(deltaY, deltaX);
      const angleDeg = (angleRad * 180) / Math.PI;
      setEyeAngle(angleDeg);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <nav className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-6 md:px-12 py-5 pointer-events-auto">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-50 group">
            <img
              src="/images/logo.png"
              alt="Noozi Productions"
              className="h-9 md:h-10 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Pill */}
          <div className="hidden lg:flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <ul className="flex items-center space-x-10 text-white/90 text-xs font-semibold tracking-[0.15em] font-poppins">
              <li>
                <Link
                  to="/services"
                  className="relative hover:text-[#c9654f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9654f] hover:after:w-full after:transition-all after:duration-300"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="relative hover:text-[#c9654f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9654f] hover:after:w-full after:transition-all after:duration-300"
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative hover:text-[#c9654f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9654f] hover:after:w-full after:transition-all after:duration-300"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative hover:text-[#c9654f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9654f] hover:after:w-full after:transition-all after:duration-300"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Action: Let's Talk & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Interactive Eyeball CTA Button */}
            <button
              onClick={onOpenContact}
              className="relative flex items-center gap-3 bg-gradient-to-r from-beta to-[#1e7250] hover:from-[#1e7250] hover:to-beta shadow-[0_4px_20px_rgba(36,138,97,0.4)] hover:shadow-[0_6px_25px_rgba(36,138,97,0.6)] transition-all duration-300 ease-out rounded-full pl-2 pr-6 py-2 group overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full" />
              <div
                ref={eyeRef}
                className="relative w-7 h-7 rounded-full bg-black/20 flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] backdrop-blur-sm"
              >
                <motion.img
                  src="/images/eyeball.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ rotate: eyeAngle }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              </div>
              <span className="relative text-white font-bold text-xs uppercase tracking-[0.1em] font-paytone mt-[2px] drop-shadow-md">
                Let's Talk
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-white font-poppins text-xl font-medium tracking-widest">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#c9654f] transition-colors"
                >
                  SERVICES
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#c9654f] transition-colors"
                >
                  WORK
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#c9654f] transition-colors"
                >
                  ABOUT
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#c9654f] transition-colors"
                >
                  CONTACT
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="bg-beta text-white px-8 py-4 rounded-full font-paytone tracking-wider uppercase text-sm shadow-[0_0_30px_rgba(36,138,97,0.4)] cursor-pointer"
                >
                  Let's Talk
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
