import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, CheckCircle } from 'lucide-react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { servicesData, ServiceItem } from '../data/servicesData';

export const Services: React.FC<{ onOpenContact?: (subject?: string) => void }> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const { serviceId } = useParams<{ serviceId?: string }>();
  const location = useLocation();

  const activeId = serviceId || (location.hash ? location.hash.replace('#', '') : '');

  // Smoothly scroll to targeted service anchor on mount or route update
  useEffect(() => {
    if (activeId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(activeId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeId]);

  const handleSelectService = (service: ServiceItem) => {
    if (onOpenContact) {
      onOpenContact(`Inquiry: ${service.title}`);
    } else {
      navigate('/contact', { state: { subject: service.title } });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden pt-28 pb-20">
      {/* Top Header Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="border-b border-white/10 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.25em] uppercase mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>CAPABILITIES & EXPERTISE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-barlow text-white tracking-tight uppercase">
              Our Services
            </h1>
          </div>
          <p className="text-white/70 text-xs sm:text-sm md:text-base font-poppins max-w-xl leading-relaxed">
            End-to-end creative digital solutions, cinema-grade video production, and next-generation brand experiences tailored for visionary companies.
          </p>
        </div>
      </section>

      {/* 3-Column Standardized Uniform Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const Icon = service.icon;
            const isActive = service.id === activeId;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => handleSelectService(service)}
                className={`group relative rounded-2xl bg-[#090E1B] border p-6 sm:p-8 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer scroll-mt-32 ${
                  isActive
                    ? 'border-[#2563FF] ring-2 ring-[#2563FF]/60 shadow-[0_0_40px_rgba(37,99,255,0.35)] -translate-y-1'
                    : 'border-[#141C30] hover:border-[#2563FF]/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(37,99,255,0.2)]'
                }`}
              >
                {/* Top Row: Number on left, Blue squircle icon on right */}
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 tracking-wider">
                        {service.number}
                      </span>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/50 text-[#60A5FA] text-[10px] font-semibold uppercase tracking-wider">
                          <CheckCircle className="w-2.5 h-2.5" />
                          <span>Selected</span>
                        </span>
                      )}
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#0F182E] border border-[#2563FF]/40 flex items-center justify-center text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white tracking-wide uppercase mb-3 group-hover:text-[#60A5FA] transition-colors leading-tight">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] font-poppins text-slate-400 leading-relaxed mb-5 sm:mb-6">
                    {service.desc}
                  </p>

                  {/* Feature bullet tags */}
                  <ul className="space-y-2 border-t border-white/[0.06] pt-4 font-poppins">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="w-1 h-1 rounded-full bg-[#2563FF]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action: LEARN MORE / INQUIRE -> */}
                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] min-h-[44px] flex items-center">
                  <span className="inline-flex items-center gap-2 text-xs font-poppins font-bold tracking-[0.16em] text-[#2563FF] group-hover:text-[#60A5FA] uppercase transition-colors">
                    <span>INQUIRE ABOUT THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Box Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 mb-12 sm:mb-16">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-6 sm:p-12 lg:p-20 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#60A5FA] text-xs font-poppins font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Transform Your Brand</span>
          </div>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            WE TURN IDEAS INTO <br />
            <span className="text-[#2563FF]">EXPERIENCES</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-base font-poppins max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Ready to craft content that commands attention? Let's discuss your next breakthrough project with Innowize.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full">
            <button
              onClick={() => (onOpenContact ? onOpenContact('General Project Inquiry') : navigate('/contact'))}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#2563FF] hover:bg-[#3B82F6] text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,255,0.5)] border border-[#60A5FA]/30 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Start a Project
            </button>
            <a
              href="tel:+6580808824"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent border border-[#2563FF] text-[#60A5FA] hover:bg-[#2563FF] hover:text-white rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
