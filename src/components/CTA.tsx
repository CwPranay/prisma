import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#101010] rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #DEDBC8 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary text-xs md:text-sm mb-6"
            >
              Ready to Create?
            </motion.p>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6 md:mb-8"
              style={{ color: '#E1E0CC' }}
            >
              Let's bring your
              <br />
              vision to life
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-10"
            >
              Whether you have a clear concept or just a spark of an idea, our collective is here to help you
              craft cinematic stories using our studio-grade workflows and creative tools.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="group bg-primary rounded-full px-6 py-3 flex items-center gap-2 hover:gap-3 transition-all text-black font-medium text-base">
                Start a project
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-5 h-5" style={{ color: '#DEDBC8' }} />
                </div>
              </button>
              <button className="text-primary hover:text-primary/80 transition-colors text-base font-medium">
                Schedule a call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
