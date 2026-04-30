import { motion, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  opacity: MotionValue<number>;
}

export default function AnimatedLetter({ char, opacity }: AnimatedLetterProps) {
  return (
    <motion.span style={{ opacity, display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}
