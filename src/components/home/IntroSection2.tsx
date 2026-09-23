import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData, ServiceItem } from '../../data/servicesData';

export const IntroSection2: React.FC = () => {

  return (
    <section className="relative w-full bg-[#070A12] flex items-center justify-center overflow-hidden z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-20 md:py-28">
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#0B1020]/70 to-[#070A12] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2563FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col gap-8 sm:gap-10 md:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[#60A5FA] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>SERVICES & CAPABILITIES</span>
              <span>•</span>
              <span>INNOWIZE DIGITAL</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold font-barlow text-white tracking-tight uppercase"
            >
              What We Do
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 font-poppins text-xs sm:text-sm md:text-base max-w-lg leading-relaxed"
          >
            End-to-end creative digital solutions and cinema-grade productions engineered to help ambitious brands lead the future.
          </motion.p>
        </div>

        {/* 3-Column Standardized Uniform Service Cards Grid (Matching Model Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 w-full">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="h-full"
              >
                <Link
                  to={`/services#${service.id}`}
                  aria-label={`Explore ${service.title} services`}
                  className="group relative rounded-2xl bg-[#090E1B] border border-[#141C30] hover:border-[#2563FF]/70 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[250px] sm:min-h-[285px] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(37,99,255,0.2)] cursor-pointer block"
                >
                  {/* Top Row: Number on left, Blue squircle icon on right */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 tracking-wider">
                        {service.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#0F182E] border border-[#2563FF]/40 flex items-center justify-center text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-barlow text-white tracking-wide uppercase mb-3 group-hover:text-[#60A5FA] transition-colors leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] font-poppins text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Action: LEARN MORE -> */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06]">
                    <span className="inline-flex items-center gap-2 text-xs font-poppins font-bold tracking-[0.16em] text-[#2563FF] group-hover:text-[#60A5FA] uppercase transition-colors">
                      <span>LEARN MORE</span>
                      <span className="sr-only">about {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
