import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-hidden pt-28 pb-24">
      {/* Top Header Section spanning full width */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-4 pb-10">
        <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.25em] uppercase mb-3">
              <span>•</span>
              <span>GET IN TOUCH</span>
              <span>•</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-barlow tracking-tight leading-none">
              Let's Talk
            </h1>
            <p className="text-base sm:text-lg text-white/70 mt-3 max-w-2xl font-poppins leading-relaxed">
              We'd love to hear your vision. Let's work together to create digital experiences and cinematic content that inspire, connect, and drive measurable results.
            </p>
          </div>

          {/* Availability Status Badge */}
          <div className="flex items-center gap-3 bg-[#0F1628] border border-[#141A2B] px-5 py-3 rounded-2xl">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="text-xs font-poppins font-semibold text-white">Currently Booking New Projects</p>
              <p className="text-[11px] font-poppins text-white/50">Average response time: under 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Quick Contact Metric & Channel Cards across full width */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <a
            href="mailto:hello@innowize.digital"
            className="group bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF] rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-[0_8px_25px_rgba(37,99,255,0.2)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-poppins font-semibold text-white/50 uppercase tracking-wider block mb-1">
              Direct Email
            </span>
            <span className="text-base font-medium font-poppins text-white group-hover:text-[#60A5FA] transition-colors block">
              hello@innowize.digital
            </span>
          </a>

          <a
            href="tel:+919061717000"
            className="group bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF] rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-[0_8px_25px_rgba(37,99,255,0.2)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all duration-300 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-poppins font-semibold text-white/50 uppercase tracking-wider block mb-1">
              Phone & WhatsApp
            </span>
            <span className="text-base font-medium font-poppins text-white group-hover:text-[#60A5FA] transition-colors block">
              +91 90617 17000
            </span>
          </a>

          <div className="bg-[#0F1628] border border-[#141A2B] rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-[#2563FF] mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-poppins font-semibold text-white/50 uppercase tracking-wider block mb-1">
              Studio Location
            </span>
            <span className="text-base font-medium font-poppins text-white block">
              Kochi, Kerala, India 682030
            </span>
          </div>

          <div className="bg-[#0F1628] border border-[#141A2B] rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-[#2563FF] mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-poppins font-semibold text-white/50 uppercase tracking-wider block mb-1">
              Studio Hours
            </span>
            <span className="text-base font-medium font-poppins text-white block">
              Mon – Sat: 10:00 AM – 6:00 PM IST
            </span>
          </div>
        </div>
      </section>

      {/* Main Content: Full-Width 12-Column Grid */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Message Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          >
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-barlow">
                Send us a Message
              </h2>
              <p className="text-white/60 text-sm md:text-base font-poppins">
                Fill out the brief below and our creative team will get back to you with insights and next steps.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#60A5FA] text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563FF] flex-shrink-0" />
                <span>Message sent successfully! We'll get back to you within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>Failed to send message. Please try again or contact us directly via WhatsApp.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Responsive Row for Name & Email (Side-by-Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-poppins text-white/70 uppercase tracking-wider font-semibold">
                      Your Name *
                    </label>
                    <span className="text-[11px] text-white/40 font-poppins">
                      {formData.name.length}/50
                    </span>
                  </div>
                  <input
                    type="text"
                    maxLength={50}
                    placeholder="e.g. John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-poppins text-white/70 uppercase tracking-wider font-semibold">
                      Email Address *
                    </label>
                    <span className="text-[11px] text-white/40 font-poppins">
                      {formData.email.length}/254
                    </span>
                  </div>
                  <input
                    type="email"
                    maxLength={254}
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-poppins text-white/70 uppercase tracking-wider font-semibold">
                    Subject / Project Type *
                  </label>
                  <span className="text-[11px] text-white/40 font-poppins">
                    {formData.subject.length}/100
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={100}
                  placeholder="e.g. Brand Film, Commercial Production, Social Media Retainer..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-poppins text-white/70 uppercase tracking-wider font-semibold mb-2">
                  Project Details & Goals *
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your brand, target audience, timeline, and what you want to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-xl bg-[#2563FF] hover:bg-[#3B82F6] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,255,0.4)] cursor-pointer disabled:opacity-50 border border-[#60A5FA]/30 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Connect Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Connect Card */}
            <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 md:p-10 shadow-xl font-poppins">
              <span className="text-xs font-poppins font-semibold text-[#60A5FA] tracking-wider uppercase block mb-1">
                Instant Response
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-barlow">
                Need an Immediate Answer?
              </h3>
              <p className="text-white/65 text-sm mb-6 leading-relaxed">
                Connect directly with our producers and creative directors for urgent shoots or immediate quotes.
              </p>
              <div className="space-y-3.5">
                <a
                  href="https://wa.me/919061717000?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#2563FF] hover:bg-[#3B82F6] text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(37,99,255,0.4)] border border-[#60A5FA]/30"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+919061717000"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-transparent border border-[#2563FF] text-[#60A5FA] hover:bg-[#2563FF] hover:text-white rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us: +91 90617 17000</span>
                </a>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-barlow">
                What You Can Expect
              </h3>
              <div className="space-y-4 text-sm font-poppins">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0 text-xs font-bold font-barlow mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Discovery & Alignment</h4>
                    <p className="text-white/60 text-xs mt-0.5">We review your brief, objectives, and brand aesthetics within 24h.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0 text-xs font-bold font-barlow mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Concept & Creative Treatment</h4>
                    <p className="text-white/60 text-xs mt-0.5">We prepare moodboards, storyboards, and clear budget estimates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0 text-xs font-bold font-barlow mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Cinematic Production</h4>
                    <p className="text-white/60 text-xs mt-0.5">Full-scale shoot execution with cinema-grade cameras, lighting, and audio.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0 text-xs font-bold font-barlow mt-0.5">
                    04
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Master Delivery</h4>
                    <p className="text-white/60 text-xs mt-0.5">Multi-format export optimized for 4K cinema, web, and vertical social channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
