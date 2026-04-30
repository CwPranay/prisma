import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Team from './Team';
import CTA from './CTA';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

export default function PrismaLanding() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoPreloaded, setVideoPreloaded] = useState(false);

  useEffect(() => {
    // Preload the hero video
    const video = document.createElement('video');
    video.src =
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4';
    video.preload = 'auto';

    video.addEventListener('loadeddata', () => {
      setVideoPreloaded(true);
    });

    // Fallback: Remove loading after 5 seconds even if video doesn't load
    const timeout = setTimeout(() => {
      setVideoPreloaded(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      video.remove();
    };
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && videoPreloaded && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div className={`bg-black ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Hero />
        <About />
        <Features />
        <Portfolio />
        <Testimonials />
        <Team />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
