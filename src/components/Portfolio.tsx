import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  index: number;
}

function ProjectCard({ title, category, year, imageUrl, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden mb-4 bg-[#212121]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-primary rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-5 h-5 text-black" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-medium mb-1" style={{ color: '#E1E0CC' }}>
            {title}
          </h3>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">{year}</span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: 'Midnight Chronicles',
      category: 'Short Film · Cannes 2025',
      year: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    },
    {
      title: 'Urban Echoes',
      category: 'Documentary · Sundance',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    },
    {
      title: 'Neon Dreams',
      category: 'Music Video · Grammy Nominated',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    },
    {
      title: 'Silent Waves',
      category: 'Commercial · Cannes Lions Gold',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    },
    {
      title: 'The Last Frame',
      category: 'Feature Film · Berlin Festival',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
    },
    {
      title: 'Digital Horizons',
      category: 'Brand Film · Webby Award',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <p className="text-primary text-xs md:text-sm mb-3">Selected Works</p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9]"
                style={{ color: '#E1E0CC' }}
              >
                Our Portfolio
              </h2>
            </div>
            <button className="group bg-primary rounded-full px-5 py-2.5 flex items-center gap-2 hover:gap-3 transition-all text-black font-medium text-sm">
              View all work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
