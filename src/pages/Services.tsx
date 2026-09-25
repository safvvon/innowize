import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Cpu,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { servicesData, ServiceItem } from '../data/servicesData';
import { serviceDetailsData, ServiceDetail } from '../data/serviceDetailsData';

export const Services: React.FC<{ onOpenContact?: (subject?: string) => void }> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const { serviceId } = useParams<{ serviceId?: string }>();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Normalize serviceId alias (e.g., ai-creative-tech -> ai-video)
  const normalizedServiceId = serviceId === 'ai-creative-tech' ? 'ai-video' : serviceId;
  const currentService: ServiceItem | undefined = normalizedServiceId
    ? servicesData.find((s) => s.id === normalizedServiceId)
    : undefined;
  const currentDetail: ServiceDetail | undefined = normalizedServiceId
    ? serviceDetailsData[normalizedServiceId]
    : undefined;

  const handleSelectService = (service: ServiceItem) => {
    navigate(`/services/${service.id}`);
  };

  const handleOpenInquiry = (serviceName?: string) => {
    if (onOpenContact) {
      onOpenContact(serviceName ? `Inquiry: ${serviceName}` : 'Service Inquiry');
    } else {
      navigate('/contact', { state: { subject: serviceName } });
    }
  };

  const categories = ['All', 'Design & Web', 'Media & Production', 'Emerging Tech'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  // DEDICATED INDIVIDUAL SERVICE PAGE VIEW (/services/:serviceId)
  if (currentService && currentDetail) {
    const Icon = currentService.icon;

    return (
      <div className="min-h-screen bg-[#070A12] text-white overflow-hidden pt-24 sm:pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-4">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-poppins text-white/50">
            <li>
              <Link to="/" className="hover:text-[#60A5FA] transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link to="/services" className="hover:text-[#60A5FA] transition-colors">Services</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[#60A5FA] font-medium" aria-current="page">
              {currentService.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-2 sm:pt-4 pb-12 sm:pb-16">
          <div className="border-b border-white/10 pb-10 sm:pb-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-poppins text-white/60 hover:text-white mb-6 group transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#2563FF]" />
              <span>Back to All Capabilities</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#60A5FA] text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
                  <span>{currentService.category}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-barlow text-white uppercase tracking-tight mb-4 sm:mb-6">
                  {currentDetail.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#93C5FD] font-poppins font-medium leading-snug mb-4">
                  {currentDetail.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/75 font-poppins leading-relaxed max-w-2xl">
                  {currentDetail.heroDescription}
                </p>
              </div>

              {/* Action Card */}
              <div className="w-full lg:w-80 shrink-0 bg-[#0F1628] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#60A5FA] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-bold font-barlow text-white uppercase mb-2">
                    Start Your Project
                  </h2>
                  <p className="text-xs font-poppins text-white/65 leading-relaxed mb-6">
                    Partner with Innowize Digital to engineer world-class {currentService.title.toLowerCase()} tailored to your vision.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenInquiry(currentService.title)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563FF] text-white font-poppins font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,255,0.45)] hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Solved vs Outcomes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          <div className="mb-8">
            <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-widest uppercase mb-2 block">
              Business Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-white uppercase tracking-tight">
              Challenges We Eliminate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {currentDetail.problemsSolved.map((prob, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#090E1B] border border-red-500/20 p-5 sm:p-6 flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                  ✕
                </div>
                <p className="text-xs sm:text-sm font-poppins text-white/80 leading-relaxed">
                  {prob}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process & Workflow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 bg-[#090E1B]/50 rounded-3xl my-6 border border-white/5">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-widest uppercase mb-2 block">
              Strategic Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-white uppercase tracking-tight mb-3">
              How We Work
            </h2>
            <p className="text-xs sm:text-sm font-poppins text-white/60">
              A proven four-phase workflow ensuring absolute creative excellence and on-time delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentDetail.processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl bg-[#0F1628] border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#60A5FA] bg-[#2563FF]/20 px-2.5 py-1 rounded-lg inline-block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold font-barlow text-white uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-poppins text-white/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Technologies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Deliverables */}
            <div className="lg:col-span-7 bg-[#0F1628] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-[#2563FF]" />
                <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white uppercase">
                  What You Receive
                </h2>
              </div>
              <ul className="space-y-3.5">
                {currentDetail.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-poppins text-white/80">
                    <CheckCircle className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies & Tools */}
            <div className="lg:col-span-5 bg-[#0F1628] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-5 h-5 text-[#2563FF]" />
                  <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white uppercase">
                    Technologies & Tools
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {currentDetail.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-poppins font-medium text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider mb-3">
                  Tailored For
                </h3>
                <ul className="space-y-1.5 text-xs font-poppins text-white/60">
                  {currentDetail.targetAudience.map((aud, i) => (
                    <li key={i}>• {aud}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          <div className="mb-8">
            <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-widest uppercase mb-2 block">
              Value Proposition
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-white uppercase tracking-tight">
              Why Innowize Digital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentDetail.benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#090E1B] border border-[#141C30] hover:border-[#2563FF]/50 p-6 sm:p-8 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#60A5FA] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-barlow text-white uppercase mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm font-poppins text-white/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive FAQ Section with Schema.org Compatibility */}
        {currentDetail.faqs.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-poppins font-semibold uppercase tracking-widest mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#2563FF]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-white uppercase tracking-tight">
                {currentService.title} Questions &amp; Answers
              </h2>
            </div>

            <div className="space-y-4">
              {currentDetail.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#0F1628] border border-white/10 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold font-barlow text-white uppercase tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#2563FF] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-white/5"
                        >
                          <div className="px-6 pb-6 pt-2 text-xs sm:text-sm font-poppins text-white/70 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Contextual Portfolio Case Study Teaser */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 my-10 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-[#0F1628] to-[#141C30] border border-white/15 p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider mb-1 block">
                Proof of Craft
              </span>
              <h3 className="text-xl sm:text-3xl font-bold font-barlow text-white uppercase">
                Explore Our {currentService.title} Portfolio
              </h3>
              <p className="text-xs sm:text-sm font-poppins text-white/60 max-w-md mt-1">
                View completed case studies, commercial reels, and digital experiences created by our studio.
              </p>
            </div>
            <Link
              to="/work"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-[#2563FF] text-white text-xs font-poppins font-semibold tracking-wide uppercase transition-all duration-300 shrink-0 border border-white/15 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Other Related Services Interlinking */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 border-t border-white/10 mt-14">
          <h3 className="text-lg font-bold font-barlow text-white uppercase tracking-wider mb-6">
            Explore Other Core Capabilities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {servicesData
              .filter((s) => s.id !== currentService.id)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="rounded-xl bg-[#090E1B] border border-white/10 hover:border-[#2563FF] p-3 sm:p-4 text-center group transition-colors flex flex-col items-center justify-center min-h-[90px]"
                >
                  <span className="text-xs font-bold font-barlow text-white group-hover:text-[#60A5FA] uppercase transition-colors line-clamp-2">
                    {s.title}
                  </span>
                  <span className="text-[10px] text-white/40 mt-1 font-poppins">Explore &rarr;</span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    );
  }

  // ALL SERVICES HUB VIEW (/services)
  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden pt-28 pb-20">
      {/* Top Header Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="border-b border-white/10 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.25em] uppercase mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>CAPABILITIES & EXPERTISE</span>
              <span>•</span>
              <span>INNOWIZE DIGITAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-barlow text-white tracking-tight uppercase">
              Our Services
            </h1>
          </div>
          <p className="text-white/70 text-xs sm:text-sm md:text-base font-poppins max-w-xl leading-relaxed">
            End-to-end creative digital solutions, cinema-grade video production, and next-generation brand experiences tailored for visionary companies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mt-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#2563FF] text-white shadow-[0_0_20px_rgba(37,99,255,0.45)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3-Column Standardized Uniform Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
          {filteredServices.map((service: ServiceItem, idx: number) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-[#090E1B] border border-[#141C30] hover:border-[#2563FF]/70 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(37,99,255,0.2)]"
              >
                {/* Top Row: Number on left, Blue squircle icon on right */}
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#0F182E] border border-[#2563FF]/40 flex items-center justify-center text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white tracking-wide uppercase mb-3 group-hover:text-[#60A5FA] transition-colors leading-tight">
                    <Link to={`/services/${service.id}`} className="hover:underline">
                      {service.title}
                    </Link>
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

                {/* Bottom Action: EXPLORE SERVICE DETAILS -> */}
                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-poppins font-bold tracking-[0.16em] text-[#2563FF] group-hover:text-[#60A5FA] uppercase transition-colors"
                  >
                    <span>EXPLORE DETAILS</span>
                    <span className="sr-only">about {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                  <button
                    onClick={() => handleOpenInquiry(service.title)}
                    className="text-[11px] font-poppins font-semibold text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
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
            <span className="text-[#2563FF]">DIGITAL REALITY</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-poppins text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to scale your digital presence, revamp your website, or produce your next commercial? Let’s engineer something unforgettable together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenInquiry()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2563FF] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-poppins font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_8px_25px_rgba(37,99,255,0.45)] cursor-pointer"
            >
              Start a Conversation
            </button>
            <Link
              to="/work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-poppins font-semibold tracking-wider uppercase transition-all duration-300"
            >
              Browse Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
