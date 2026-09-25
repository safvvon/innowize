import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { InnowizeLogo } from './InnowizeLogo';
import { servicesData } from '../data/servicesData';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0E17] text-white relative overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-5 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <InnowizeLogo className="h-8 sm:h-10" />
            </Link>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-poppins max-w-sm">
              Creative digital studio specializing in innovative digital solutions, visual storytelling, and cutting-edge design experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/innowizedigital?stkn=bDRiZnAzOTY2dmVn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 group cursor-pointer"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/innowizedidital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 group cursor-pointer"
                aria-label="LinkedIn"
                title="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCV37EAmAcRPr0pTo4CHKUVA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-[#2563FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 group cursor-pointer"
                aria-label="YouTube"
                title="Subscribe to our YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold font-paytone text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>Journal &amp; Insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities & Services */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold font-paytone text-white uppercase tracking-wider">
              Capabilities
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-white/70 hover:text-[#60A5FA] transition-colors duration-300 text-xs sm:text-sm font-poppins flex items-center gap-1 group py-1"
                  >
                    <span className="truncate">{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Info */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold font-paytone text-white uppercase tracking-wider">
              Studio
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-poppins text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  3 Coleman Street, #03-24, Wyndham Singapore, Peninsula Shopping Complex, Singapore 179804
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <a href="mailto:abinsiby@innowizedigital.com" className="hover:text-white transition-colors truncate">
                  abinsiby@innowizedigital.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+6580808824" className="hover:text-white transition-colors">
                    +65 8080 8824
                  </a>
                  <a href="tel:+6591809822" className="hover:text-white transition-colors">
                    +65 9180 9822
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 font-poppins gap-4 text-center sm:text-left">
          <p>© {currentYear} Innowize Digital. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors min-h-[36px] flex items-center">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors min-h-[36px] flex items-center">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
