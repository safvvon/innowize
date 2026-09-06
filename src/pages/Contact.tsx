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
      {/* Top Header Section matching Page 4 of PDF */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            <span>•</span>
            <span>GET IN TOUCH</span>
            <span>•</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-barlow leading-tight">
            Let's Talk
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-poppins max-w-4xl mx-auto">
            We'd love to hear your vision. Let's work together to create digital experiences that inspire and drive results. Drop us a message, and we'll get back to you soon!
          </p>
        </motion.div>
      </section>

      {/* Main Content: Wide Two-Column Container */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          {/* Left: Message Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 bg-[#0F1628] border border-[#141A2B] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl backdrop-blur-sm w-full"
          >
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-barlow">
                Send us a Message
              </h2>
              <p className="text-white/60 text-sm md:text-base font-poppins">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#60A5FA] text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563FF] flex-shrink-0" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>Failed to send message. Please try again or contact us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Responsive Row for Name & Email (Side-by-Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-poppins text-white/70 uppercase tracking-wider">
                      Your Name
                    </label>
                    <span className="text-[11px] text-white/40 font-poppins">
                      {formData.name.length}/50
                    </span>
                  </div>
                  <input
                    type="text"
                    maxLength={50}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-poppins text-white/70 uppercase tracking-wider">
                      Email Address
                    </label>
                    <span className="text-[11px] text-white/40 font-poppins">
                      {formData.email.length}/254
                    </span>
                  </div>
                  <input
                    type="email"
                    maxLength={254}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-poppins text-white/70 uppercase tracking-wider">
                    Subject
                  </label>
                  <span className="text-[11px] text-white/40 font-poppins">
                    {formData.subject.length}/100
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={100}
                  placeholder="Instagram Reels, Video Production, Brand Experience..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-poppins text-white/70 uppercase tracking-wider mb-2">
                  Tell us about your project...
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project goals, vision, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-all resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-xl bg-[#2563FF] hover:bg-[#3B82F6] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,255,0.4)] cursor-pointer disabled:opacity-50 border border-[#60A5FA]/30"
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

          {/* Right: Info & Contact Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Information Card */}
            <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-barlow">
                Contact Information
              </h3>
              <div className="space-y-6 font-poppins">
                <a href="mailto:hello@innowize.digital" className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center group-hover:bg-[#2563FF]/20 transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#2563FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-white group-hover:text-[#60A5FA] transition-colors text-sm md:text-base font-medium">
                      hello@innowize.digital
                    </p>
                  </div>
                </a>

                <a href="tel:+919061717000" className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center group-hover:bg-[#2563FF]/20 transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#2563FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-white group-hover:text-[#60A5FA] transition-colors text-sm md:text-base font-medium">
                      +91 90617 17000
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2563FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white text-sm md:text-base font-medium">
                      Kochi, Kerala, India 682030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect Actions Card */}
            <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 md:p-10 shadow-xl font-poppins">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-barlow">
                Quick Connect
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919061717000?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#2563FF] hover:bg-[#3B82F6] text-white font-bold rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,255,0.4)] border border-[#60A5FA]/30"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+919061717000"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-transparent border border-[#2563FF] text-[#60A5FA] hover:bg-[#2563FF] hover:text-white rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#0F1628] border border-[#141A2B] rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-barlow">
                Business Hours
              </h3>
              <div className="space-y-3 text-sm font-poppins">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
