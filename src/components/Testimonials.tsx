import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

function TestimonialCard({ quote, author, role, company, index }: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-[#101010] rounded-2xl md:rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full"
    >
      <div>
        <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-6" />
        <p
          className="text-base md:text-lg leading-relaxed mb-8"
          style={{ color: '#E1E0CC', lineHeight: 1.6 }}
        >
          {quote}
        </p>
      </div>
      <div>
        <p className="text-primary font-medium text-sm md:text-base mb-1">{author}</p>
        <p className="text-gray-400 text-xs md:text-sm">
          {role}, {company}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Working with Prisma transformed our brand vision into a cinematic masterpiece. Their collaborative approach and studio-grade workflows made the entire process seamless.',
      author: 'Sarah Mitchell',
      role: 'Creative Director',
      company: 'Lumina Studios',
    },
    {
      quote:
        'The Prisma collective brought our documentary to life in ways we never imagined. Their Smart Critiques feature and technical expertise elevated our storytelling to festival-winning quality.',
      author: 'David Chen',
      role: 'Producer',
      company: 'Horizon Films',
    },
    {
      quote:
        "Prisma's ability to capture emotion through color grading and visual effects is unmatched. The Immersion Capsule helped our team stay focused and creative throughout production.",
      author: 'Elena Rodriguez',
      role: 'Marketing Lead',
      company: 'Vertex Media',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-primary text-xs md:text-sm mb-3">What They Say</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9]"
            style={{ color: '#E1E0CC' }}
          >
            Client Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
