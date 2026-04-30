import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import WordsPullUp from './animations/WordsPullUp';

export default function Hero() {
  const navItems = [' Story', 'Portfolio', 'Team', 'Services', 'Contact'];
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover md:object-[center_65%]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4"
        />

        {/* Loading Overlay - Shows until video is loaded */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-black z-30 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-primary text-sm">Loading...</p>
            </div>
          </div>
        )}

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.7]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm transition-colors"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            {/* Left Column - Heading */}
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            {/* Right Column - Description & CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-4 md:gap-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound
                not by place, status or labels but by passion and hunger to unlock potential through
                our unique perspectives.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-primary rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 hover:gap-3 transition-all w-fit text-black font-medium text-sm sm:text-base"
              >
                Join the collective
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#DEDBC8' }} />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
