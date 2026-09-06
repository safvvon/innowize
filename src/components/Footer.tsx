import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Clock,
  Sparkles,
} from 'lucide-react';
import { InnowizeLogo } from './InnowizeLogo';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      navigate('/contact');
    }
  };

  return (
    <footer className="w-full bg-[#0B0E17] text-white relative overflow-hidden border-t border-white/10">
      {/* Top ambient highlight line in electric blue */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2563FF]/60 to-transparent" />

      {/* Main Expansive Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-16 md:pt-20 pb-12">
        {/* Pre-Footer Action Banner */}
        <div className="w-full mb-16 md:mb-20 rounded-3xl bg-gradient-to-r from-[#0F1628] via-[#141A2B] to-[#0F1628] border border-white/10 p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/30 text-[#60A5FA] text-xs font-poppins font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>Let's Create Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-barlow text-white tracking-tight uppercase leading-tight mb-3">
              Ready to elevate your <br />
              <span className="text-[#2563FF]">Digital Presence?</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-poppins leading-relaxed">
              Whether you need cinematic video production, high-impact branding, or cutting-edge digital experiences, our team is ready to craft your vision.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <button
              onClick={handleStartProject}
              className="px-8 py-4 bg-[#2563FF] hover:bg-[#3B82F6] text-white font-bold rounded-full text-xs sm:text-sm font-poppins uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,255,0.5)] border border-[#60A5FA]/40 cursor-pointer text-center"
            >
              Start a Project
            </button>
            <a
              href="mailto:hello@innowize.digital"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full text-xs sm:text-sm font-poppins uppercase tracking-wider border border-white/15 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#60A5FA]" />
              <span>hello@innowize.digital</span>
            </a>
          </div>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols on lg) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <InnowizeLogo className="h-10 md:h-11" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-poppins max-w-sm">
              We craft future-ready digital experiences that blend creativity, technology, and strategy to help ambitious brands lead in the digital era.
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-3 font-poppins">
                Connect with us
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] hover:shadow-[0_0_15px_rgba(37,99,255,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] hover:shadow-[0_0_15px_rgba(37,99,255,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] hover:shadow-[0_0_15px_rgba(37,99,255,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] hover:shadow-[0_0_15px_rgba(37,99,255,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] hover:shadow-[0_0_15px_rgba(37,99,255,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-4">
            <h3 className="text-sm font-bold font-poppins text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563FF]" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-3 pt-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm font-poppins flex items-center justify-between group max-w-[140px]"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm font-poppins flex items-center justify-between group max-w-[140px]"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm font-poppins flex items-center justify-between group max-w-[140px]"
                >
                  <span>Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm font-poppins flex items-center justify-between group max-w-[140px]"
                >
                  <span>Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm font-poppins flex items-center justify-between group max-w-[140px]"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Showcase (3 cols on lg) */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            <h3 className="text-sm font-bold font-poppins text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563FF]" />
              <span>Expertise</span>
            </h3>
            <ul className="space-y-3 pt-2">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  Video Production
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  Live Streaming
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  AI & Creative Technology
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  AR/VR Content Production
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm font-poppins block">
                  Event Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours (3 cols on lg) */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            <h3 className="text-sm font-bold font-poppins text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563FF]" />
              <span>Studio HQ</span>
            </h3>
            <div className="space-y-3.5 text-sm font-poppins text-slate-400 pt-2">
              <a
                href="mailto:hello@innowize.digital"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#2563FF]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span>hello@innowize.digital</span>
              </a>
              <a
                href="tel:+919061717000"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#2563FF]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span>+91 90617 17000</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span>Innowize Studio, Kochi, Kerala, India 682030</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-poppins gap-4">
          <p>© {currentYear} Innowize Digital. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
