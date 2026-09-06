import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  Radio,
  TrendingUp,
  Cpu,
  Glasses,
  Calendar,
  ArrowRight,
  Sparkles,
  Phone,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'video',
    icon: <Video className="w-8 h-8 text-[#2563FF]" />,
    title: 'Video Production',
    subtitle: 'Cinematic Storytelling',
    description:
      'Cinematic films, brand videos and commercials that captivate your audience from the first frame to the final call to action.',
    features: ['Commercials & Brand Films', 'Documentary Storytelling', 'Cinematography & Color Grading'],
  },
  {
    id: 'streaming',
    icon: <Radio className="w-8 h-8 text-[#2563FF]" />,
    title: 'Live Streaming',
    subtitle: 'Real-Time Broadcasts',
    description:
      'Professional multi-camera productions, live events, and virtual & hybrid experiences engineered for zero latency and broadcast fidelity.',
    features: ['Multi-Camera Live Setup', 'Virtual & Hybrid Events', 'Real-Time Audience Interaction'],
  },
  {
    id: 'marketing',
    icon: <TrendingUp className="w-8 h-8 text-[#2563FF]" />,
    title: 'Digital Marketing',
    subtitle: 'Performance & Growth',
    description:
      'Data-driven marketing & campaigns that amplify your digital presence, turning impressions into dedicated brand advocates.',
    features: ['Social Media Campaigns', 'Growth Strategy & Analytics', 'Content Distribution'],
  },
  {
    id: 'ai-tech',
    icon: <Cpu className="w-8 h-8 text-[#2563FF]" />,
    title: 'AI & Creative Technology',
    subtitle: 'Next-Gen Visuals',
    description:
      'AI-powered content automation and immersive visual experiences pushing the frontier of modern commercial media.',
    features: ['Generative Visual Art', 'Automated Post-Production', 'Interactive Experiences'],
  },
  {
    id: 'ar-vr',
    icon: <Glasses className="w-8 h-8 text-[#2563FF]" />,
    title: 'AR/VR Content Production',
    subtitle: 'Immersive Spatial 3D',
    description:
      'Immersive 360° content, VR/AR experiences, training simulations & interactive storytelling built for spatial computing.',
    features: ['360° Spatial Video', 'Augmented Reality Filters', 'Virtual Showrooms'],
  },
  {
    id: 'events',
    icon: <Calendar className="w-8 h-8 text-[#2563FF]" />,
    title: 'Event Production',
    subtitle: 'On-Ground & Virtual',
    description:
      'End-to-end event production from concept to execution online & on-ground with custom stage design and broadcast lighting.',
    features: ['Stage & Lighting Design', 'Live AV Engineering', 'Post-Event Content Packages'],
  },
];

const episodes = [
  {
    tag: 'EPISODE 01',
    title: 'VISION BEYOND LIMITS',
    description: 'Pushing the boundaries of visual fidelity with cutting-edge cinema equipment.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'EPISODE 02',
    title: 'TECHNOLOGY THAT CONNECTS',
    description: 'Bridging human emotion and digital engineering to build meaningful brands.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'EPISODE 03',
    title: 'CREATING WORLDS OF TOMORROW',
    description: 'Immersive environments and spatial experiences for next-generation platforms.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
  },
];

export const Services: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white overflow-hidden pt-28 pb-20">
      {/* Top Header Row */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-4 pb-12">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase mb-2 block">
              Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-barlow text-white tracking-tight">
              Our Services
            </h1>
          </div>
          <p className="text-white/70 text-sm md:text-base font-poppins max-w-xl leading-relaxed">
            End-to-end creative digital solutions and media production crafted to help modern brands engage, connect, and thrive.
          </p>
        </div>
      </section>

      {/* Full-Width 3-Column Services Grid */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/50 rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#2563FF]/10 group-hover:bg-[#2563FF]/20 flex items-center justify-center border border-[#2563FF]/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-poppins font-bold text-white/30 tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-barlow group-hover:text-[#60A5FA] transition-colors">
                  {service.title}
                </h2>
                <p className="text-xs md:text-sm text-[#60A5FA] font-semibold uppercase tracking-wider mb-4 font-poppins">
                  {service.subtitle}
                </p>
                <p className="text-sm md:text-base text-white/70 mb-6 leading-relaxed font-poppins">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 font-poppins border-t border-white/5 pt-5">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs md:text-sm text-white/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
                className="flex items-center gap-2 text-xs md:text-sm font-poppins font-semibold uppercase tracking-wider text-[#60A5FA] group-hover:text-[#2563FF] transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Episodes Section from Page 2 of Brand Spec PDF */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        <div className="mb-8">
          <span className="text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.3em] uppercase mb-2 block">
            Featured Productions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-barlow text-white">
            Original Series & Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {episodes.map((ep, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0F1628] border border-[#141A2B] hover:border-[#2563FF]/50 transition-all duration-500 shadow-xl"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1628] via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-[11px] font-poppins font-bold tracking-widest text-[#2563FF] uppercase mb-2 block">
                  {ep.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-barlow text-white mb-2 group-hover:text-[#60A5FA] transition-colors">
                  {ep.title}
                </h3>
                <p className="text-xs md:text-sm text-white/65 font-poppins leading-relaxed mb-4">
                  {ep.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider text-white group-hover:text-[#60A5FA] transition-colors">
                  <span>Watch Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wide Bottom CTA Box Banner */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 mt-8 mb-16">
        <div className="rounded-3xl bg-[#0F1628] border border-[#141A2B] p-10 md:p-16 lg:p-20 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#60A5FA] text-xs font-poppins font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Transform Your Brand</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase font-barlow leading-tight mb-4">
            WE TURN IDEAS INTO <br />
            <span className="text-[#2563FF]">EXPERIENCES</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-poppins max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to craft content that commands attention? Let's discuss your next breakthrough project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onOpenContact ? onOpenContact : () => navigate('/contact')}
              className="px-10 py-4 bg-[#2563FF] hover:bg-[#3B82F6] text-white font-bold rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,255,0.5)] border border-[#60A5FA]/30 cursor-pointer"
            >
              Start a Project
            </button>
            <a
              href="tel:+919061717000"
              className="px-10 py-4 bg-transparent border border-[#2563FF] text-[#60A5FA] hover:bg-[#2563FF] hover:text-white rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
