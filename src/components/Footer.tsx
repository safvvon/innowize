import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { InnowizeLogo } from './InnowizeLogo';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0E17] text-white relative overflow-hidden border-t border-white/10">
      {/* Top ambient highlight line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2563FF]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <InnowizeLogo className="h-10" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-poppins">
              Creative digital studio specializing in innovative digital solutions, visual storytelling, and cutting-edge design experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-paytone text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-paytone text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li className="text-white/70 text-sm font-poppins">Instagram Reels</li>
              <li className="text-white/70 text-sm font-poppins">Brand Videos</li>
              <li className="text-white/70 text-sm font-poppins">Social Media Content</li>
              <li className="text-white/70 text-sm font-poppins">Product Videos</li>
              <li className="text-white/70 text-sm font-poppins">Event Coverage</li>
              <li className="text-white/70 text-sm font-poppins">Motion Design</li>
            </ul>
          </div>

          {/* Col 4: Location & Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-paytone text-white uppercase tracking-wider">
              Studio
            </h3>
            <div className="space-y-3 text-sm font-poppins text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-1" />
                <span>Kochi / Calicut, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <span>hello@innowize.digital</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <span>+91 94958 85632</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 font-poppins gap-4">
          <p>© {currentYear} Innowize Digital. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
