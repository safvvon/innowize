import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { InnowizeLogo } from './InnowizeLogo';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const eyeRef = useRef<HTMLDivElement>(null);
  const [eyeAngle, setEyeAngle] = useState(0);

  // Dynamic scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Full-width Glassy Navbar (Right to Left Side) */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0E17]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-3 md:py-3.5'
            : 'bg-[#0F1628]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.25)] py-4 md:py-4.5'
        }`}
      >
        {/* Subtle top edge shimmer line in electric blue */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563FF]/60 to-transparent pointer-events-none" />

        <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Logo on Left */}
          <Link to="/" className="flex-shrink-0 relative z-50 group flex items-center">
            <InnowizeLogo className="h-8 md:h-9" />
          </Link>

          {/* Desktop Navigation Links in Center with HOME */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8 xl:space-x-10 text-white/90 text-xs font-semibold tracking-[0.18em] font-poppins">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                        isActive
                          ? 'text-[#60A5FA] after:w-full after:bg-[#2563FF]'
                          : 'hover:text-[#60A5FA] after:w-0 hover:after:w-full after:bg-[#2563FF]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Action: Let's Talk CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Interactive Eyeball CTA Button in Electric Blue */}
            <button
              onClick={onOpenContact}
              className="relative flex items-center gap-3 bg-gradient-to-r from-[#2563FF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563FF] shadow-[0_4px_20px_rgba(37,99,255,0.4)] hover:shadow-[0_6px_25px_rgba(37,99,255,0.6)] transition-all duration-300 ease-out rounded-full pl-2 pr-6 py-2 group overflow-hidden border border-white/10 cursor-pointer"
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

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Glassy Mobile Drawer Sliding From Right to Left Side */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Drawer Panel: Right to Left Side */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-[#0F1628]/95 backdrop-blur-2xl border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl z-50"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <InnowizeLogo className="h-8" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ul className="flex flex-col gap-6 text-white font-poppins text-lg font-medium tracking-wider">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (idx + 1) }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="hover:text-[#3B82F6] transition-colors flex items-center justify-between"
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-white/30">0{idx + 1}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drawer Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-6 border-t border-white/10"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-[#2563FF] hover:bg-[#1D4ED8] text-white py-4 rounded-xl font-paytone tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(37,99,255,0.4)] cursor-pointer"
                >
                  Let's Talk
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
