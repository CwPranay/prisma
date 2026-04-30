import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 500); // Small delay before transitioning
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.3]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="text-6xl md:text-8xl font-medium tracking-[-0.05em]"
            style={{ color: '#E1E0CC' }}
          >
            Prisma
            <span
              className="text-2xl md:text-3xl align-super ml-1"
              style={{ fontSize: '0.4em', verticalAlign: 'super' }}
            >
              *
            </span>
          </h1>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-64 md:w-80"
        >
          {/* Progress Bar Container */}
          <div className="relative h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-500">Loading experience</span>
            <span className="text-xs text-primary font-medium">{progress}%</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs md:text-sm text-gray-500 tracking-wider uppercase"
        >
          Visual Storytelling Collective
        </motion.p>
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #DEDBC8 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </motion.div>
  );
}
