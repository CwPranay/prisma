import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import WordsPullUpMultiStyle from './animations/WordsPullUpMultiStyle';
import AnimatedLetter from './animations/AnimatedLetter';

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const bodyText =
    'Founded in 2019, Prisma has collaborated with renowned production houses like Parallax in Berlin and Noir Studio in Paris. Our collective has created award-winning work that has earned international acclaim at major festivals including Cannes, Sundance, and Berlin Film Festival.';

  const characters = bodyText.split('');

  return (
    <section id="story" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Label */}
          <div className="text-primary text-[10px] sm:text-xs mb-8 md:mb-12">Our Story</div>

          {/* Main Heading */}
          <WordsPullUpMultiStyle
            segments={[
              { text: 'We are Prisma,', className: 'font-normal' },
              { text: 'a collective of visual storytellers.', className: 'italic font-serif' },
              {
                text: 'We specialize in cinematic narratives, color grading, and immersive visual experiences.',
                className: 'font-normal',
              },
            ]}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-12"
            style={{ color: '#E1E0CC' }}
          />

          {/* Body Text with Scroll Animation */}
          <div
            ref={targetRef}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: '#DEDBC8', lineHeight: 1.6 }}
          >
            {characters.map((char, index) => {
              const totalChars = characters.length;
              const charProgress = index / totalChars;
              const opacity = useTransform(
                scrollYProgress,
                [charProgress - 0.1, charProgress + 0.05],
                [0.2, 1]
              );

              return <AnimatedLetter key={index} char={char} opacity={opacity} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
