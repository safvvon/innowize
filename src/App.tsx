import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

// Lazy-loaded routes for optimal initial chunk size & fast initial rendering
const About = React.lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = React.lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Work = React.lazy(() => import('./pages/Work').then((m) => ({ default: m.Work })));
const Contact = React.lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const ContactModal = React.lazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));

gsap.registerPlugin(ScrollTrigger);

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Synchronize Lenis Smooth Scrolling with GSAP ScrollTrigger for 60fps jitter-free scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        isHome
          ? 'bg-[#F8FAFC] text-slate-900 selection:bg-[#2563FF] selection:text-white'
          : 'bg-alpha text-tango selection:bg-beta selection:text-white'
      }`}
    >
      <ScrollToTop />
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/services" element={<Services onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/work" element={<Work onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <Suspense fallback={null}>
        {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />}
      </Suspense>
    </div>
  );
};

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
