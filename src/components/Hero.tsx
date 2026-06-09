'use client';

import { motion } from 'motion/react';
import { ArrowDown } from '@phosphor-icons/react';
import Image from 'next/image';

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.23, 1, 0.32, 1] as const,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left side — text content */}
        <div className="flex-[1_1_55%] text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl tracking-tighter leading-none font-bold text-text max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ ...fadeUpTransition, delay: 0 }}
          >
            Find Your New Best Friend
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-[50ch] mt-6 mx-auto md:mx-0"
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ ...fadeUpTransition, delay: 0.1 }}
          >
            ShysteePups raises happy, healthy puppies in a loving home
            environment. Every pup comes with a health guarantee and a lifetime
            of support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ ...fadeUpTransition, delay: 0.2 }}
          >
            <a
              href="#puppies"
              className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white rounded-full px-8 py-4 mt-8 font-medium active:scale-[0.97] transition-transform duration-[160ms] ease-out"
            >
              Meet Our Puppies
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowDown
                  size={18}
                  weight="bold"
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right side — hero image */}
        <motion.div
          className="flex-[1_1_40%] mt-8 md:mt-0 md:-mr-4 w-full md:w-auto"
          animate={{ transform: 'translateY(-4px)' }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="https://picsum.photos/seed/goldenpuppy/800/900"
            alt="A happy golden puppy"
            width={800}
            height={900}
            priority
            className="rounded-[2rem] w-full h-auto object-cover contrast-[1.03] saturate-[1.05] brightness-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}
