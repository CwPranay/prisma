import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export default function WordsPullUp({ text, className = '', showAsterisk = false, style }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <div ref={ref} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;
        const endsWithA = word.toLowerCase().endsWith('a');
        
        return (
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: wordIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            {word}
            {showAsterisk && isLastWord && endsWithA && (
              <span
                style={{
                  position: 'absolute',
                  top: '0.65em',
                  right: '-0.3em',
                  fontSize: '0.31em',
                }}
              >
                *
              </span>
            )}
            {wordIndex < words.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </div>
  );
}
