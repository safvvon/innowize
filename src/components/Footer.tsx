import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-alpha text-white relative overflow-hidden border-t border-white/10">
      {/* Top ambient highlight line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-beta/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="Noozi Productions"
                className="h-10 object-contain mb-2"
              />
            </Link>
            <p className="text-tango/70 text-sm leading-relaxed font-poppins">
              Creative production company specializing in innovative digital solutions, visual storytelling, and cutting-edge design experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-tango" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-tango" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-tango" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-tango" />
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
                  className="text-tango/70 hover:text-beta transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-tango/70 hover:text-beta transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-tango/70 hover:text-beta transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-tango/70 hover:text-beta transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
                >
                  <span>Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-tango/70 hover:text-beta transition-colors duration-300 text-sm font-poppins flex items-center gap-1 group"
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
              <li className="text-tango/70 text-sm font-poppins">Instagram Reels</li>
              <li className="text-tango/70 text-sm font-poppins">Brand Videos</li>
              <li className="text-tango/70 text-sm font-poppins">Social Media Content</li>
              <li className="text-tango/70 text-sm font-poppins">Product Videos</li>
              <li className="text-tango/70 text-sm font-poppins">Event Coverage</li>
              <li className="text-tango/70 text-sm font-poppins">Motion Design</li>
            </ul>
          </div>

          {/* Col 4: Location & Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-paytone text-white uppercase tracking-wider">
              Studio
            </h3>
            <div className="space-y-3 text-sm font-poppins text-tango/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-beta flex-shrink-0 mt-1" />
                <span>Calicut / Kozhikode, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-beta flex-shrink-0" />
                <span>hello@noozi.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-beta flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-tango/50 font-poppins gap-4">
          <p>© {currentYear} Noozi Productions. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-tango transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tango transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
