
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reveal animations
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileBar />
      <AIAssistant />
    </div>
  );
};

export default App;
