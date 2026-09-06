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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
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
    <div className="min-h-screen bg-alpha overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, #248a61 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-zigma text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get In Touch
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-tango mb-6 font-barlow leading-tight">
              Let's Talk
            </h1>
            <p className="text-lg md:text-xl text-tango/70 max-w-2xl mx-auto leading-relaxed font-poppins">
              Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help you create compelling video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Form and Info */}
      <section className="relative px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-beta/5 via-transparent to-zigma/5 pointer-events-none rounded-3xl" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-tango mb-2 font-barlow">
                  Send us a Message
                </h2>
                <p className="text-tango/60 text-sm md:text-base font-poppins mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-beta/20 border border-beta/40 text-zigma text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-beta flex-shrink-0" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-poppins text-tango/70 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-tango placeholder-tango/30 focus:outline-none focus:border-beta/60 transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-poppins text-tango/70 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-tango placeholder-tango/30 focus:outline-none focus:border-beta/60 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-poppins text-tango/70 uppercase tracking-wider mb-2">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      placeholder="Instagram Reels, Brand Video..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-tango placeholder-tango/30 focus:outline-none focus:border-beta/60 transition-colors"
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-poppins text-tango/70 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project goals and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-tango placeholder-tango/30 focus:outline-none focus:border-beta/60 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-beta hover:bg-[#1e7250] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-beta/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Information Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-6 font-barlow">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a href="mailto:nooziproductions@gmail.com" className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center group-hover:bg-beta/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-xs text-tango/50 uppercase tracking-wider mb-1 font-poppins">
                        Email
                      </p>
                      <p className="text-tango group-hover:text-beta transition-colors font-poppins text-sm md:text-base">
                        nooziproductions@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:+919495885632" className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center group-hover:bg-beta/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-xs text-tango/50 uppercase tracking-wider mb-1 font-poppins">
                        Phone
                      </p>
                      <p className="text-tango group-hover:text-beta transition-colors font-poppins text-sm md:text-base">
                        +91 94958 85632
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-xs text-tango/50 uppercase tracking-wider mb-1 font-poppins">
                        Location
                      </p>
                      <p className="text-tango font-poppins text-sm md:text-base">
                        Kozhikode, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect Actions */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-6 font-barlow">
                  Quick Connect
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919495885632?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-beta text-alpha font-bold rounded-full text-sm uppercase tracking-wider hover:bg-beta/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href="tel:+919495885632"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-transparent border-2 border-beta text-beta rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-beta hover:text-alpha transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-4 font-barlow">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm font-poppins">
                  <div className="flex justify-between">
                    <span className="text-tango/60">Monday - Friday</span>
                    <span className="text-tango font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tango/60">Saturday</span>
                    <span className="text-tango font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tango/60">Sunday</span>
                    <span className="text-tango/50">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
