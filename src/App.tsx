import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SEOHead } from './seo/SEOHead';

// Lazy-loaded routes for optimal initial chunk size & fast initial rendering
const About = React.lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = React.lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Work = React.lazy(() => import('./pages/Work').then((m) => ({ default: m.Work })));
const Contact = React.lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = React.lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));
const ContactModal = React.lazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));

gsap.registerPlugin(ScrollTrigger);

// Scroll to top helper on route navigation with hash anchor support
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject || '');
    setIsContactOpen(true);
  };

  // Synchronize Lenis Smooth Scrolling with GSAP ScrollTrigger for 60fps jitter-free scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
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
    <div className="relative min-h-screen bg-alpha text-tango selection:bg-beta selection:text-white flex flex-col justify-between">
      <SEOHead />
      <ScrollToTop />
      <Header onOpenContact={() => handleOpenContact()} />

      <main className="flex-grow">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About onOpenContact={() => handleOpenContact()} />} />
            <Route path="/services" element={<Services onOpenContact={(subject) => handleOpenContact(subject)} />} />
            <Route path="/services/:serviceId" element={<Services onOpenContact={(subject) => handleOpenContact(subject)} />} />
            <Route path="/work" element={<Work onOpenContact={() => handleOpenContact()} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onOpenContact={() => handleOpenContact()} />
      <Suspense fallback={null}>
        {isContactOpen && (
          <ContactModal
            isOpen={isContactOpen}
            initialSubject={contactSubject}
            onClose={() => setIsContactOpen(false)}
          />
        )}
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
