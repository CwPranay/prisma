import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  style?: React.CSSProperties;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '', style }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Split all segments into words while preserving their className
  const words: { text: string; className?: string }[] = [];
  segments.forEach((segment) => {
    const segmentWords = segment.text.split(' ');
    segmentWords.forEach((word) => {
      words.push({ text: word, className: segment.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`} style={style}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: wordIndex * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={word.className}
          style={{ display: 'inline-flex', marginRight: '0.25em' }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}
