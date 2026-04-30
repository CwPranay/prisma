import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './animations/WordsPullUpMultiStyle';

interface FeatureCardProps {
  type: 'video' | 'text';
  videoUrl?: string;
  title?: string;
  number?: string;
  icon?: string;
  items?: string[];
  index: number;
}

function FeatureCard({ type, videoUrl, title, number, icon, items, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (type === 'video') {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative rounded-2xl md:rounded-3xl overflow-hidden h-64 lg:h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm md:text-base" style={{ color: '#E1E0CC' }}>
            Your creative canvas.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between h-64 lg:h-full"
    >
      <div>
        {/* Icon */}
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-6"
          />
        )}

        {/* Title with Number */}
        <div className="flex items-baseline gap-2 mb-6">
          <h3 className="text-base md:text-lg font-medium" style={{ color: '#E1E0CC' }}>
            {title}
          </h3>
          <span className="text-xs text-gray-500">{number}</span>
        </div>

        {/* Checklist Items */}
        <ul className="space-y-3">
          {items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm text-gray-400">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More Link */}
      <div className="mt-6">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:gap-2 transition-all"
        >
          Learn more
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" style={{ transform: 'rotate(-45deg)' }} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="services" className="min-h-screen bg-black bg-noise py-16 md:py-24 lg:py-32 px-4 md:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Studio-grade workflows for visionary creators.', className: '' },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
            style={{ color: '#DEDBC8' }}
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <FeatureCard
            type="video"
            videoUrl="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            index={0}
          />
          <FeatureCard
            type="text"
            title="Project Storyboard."
            number="01"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              'Visual timeline builder',
              'Scene breakdowns',
              'Shot list generator',
              'Collaborative annotations',
            ]}
            index={1}
          />
          <FeatureCard
            type="text"
            title="Smart Critiques."
            number="02"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              'AI-powered analysis',
              'Creative notes system',
              'Tool integrations',
            ]}
            index={2}
          />
          <FeatureCard
            type="text"
            title="Immersion Capsule."
            number="03"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              'Notification silencing',
              'Ambient soundscapes',
              'Schedule syncing',
            ]}
            index={3}
          />
        </div>
      </div>
    </section>
  );
}
