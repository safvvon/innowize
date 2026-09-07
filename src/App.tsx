import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';

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

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/services" element={<Services onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/work" element={<Work onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
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
