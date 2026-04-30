import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  instagram?: string;
  index: number;
}

function TeamMember({ name, role, imageUrl, linkedin, instagram, index }: TeamMemberProps) {
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
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden mb-4 bg-[#212121]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Social Links */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {linkedin && (
            <a
              href={linkedin}
              className="bg-primary rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              className="bg-primary rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-medium mb-1" style={{ color: '#E1E0CC' }}>
          {name}
        </h3>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const team = [
    {
      name: 'Marcus Chen',
      role: 'Director & Founder',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Sofia Andersson',
      role: 'Lead Cinematographer',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'James Park',
      role: 'Creative Producer',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Amara Williams',
      role: 'Editor & Colorist',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      linkedin: '#',
      instagram: '#',
    },
  ];

  return (
    <section id="team" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-primary text-xs md:text-sm mb-3">The Collective</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] mb-6"
            style={{ color: '#E1E0CC' }}
          >
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A diverse group of visual storytellers, each bringing unique perspectives and expertise
            to every project we create.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
