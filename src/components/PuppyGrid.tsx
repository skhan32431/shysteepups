'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const puppies = [
  { name: "Bella", breed: "Golden Retriever", age: "8 weeks", personality: "Playful and loves cuddles", image: "https://picsum.photos/seed/goldenretriever/800/900", featured: true },
  { name: "Max", breed: "French Bulldog", age: "10 weeks", personality: "Calm and curious explorer", image: "https://picsum.photos/seed/frenchbulldog/600/600" },
  { name: "Luna", breed: "Labrador", age: "9 weeks", personality: "Energetic and always happy", image: "https://picsum.photos/seed/labpuppy/600/600" },
  { name: "Charlie", breed: "Cavalier King Charles", age: "7 weeks", personality: "Gentle and loves everyone", image: "https://picsum.photos/seed/cavalierpup/1200/500" },
];

const GRID_SPANS = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-12',
];

const IMAGE_HEIGHTS = [
  'h-[280px] md:h-full',
  'h-[280px] md:h-[300px]',
  'h-[280px] md:h-[300px]',
  'h-[280px] md:h-[250px]',
];

const EASE = [0.23, 1, 0.32, 1] as const;

function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = document.querySelector('#contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function PuppyGrid() {
  return (
    <section id="puppies" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-text mb-12"
          initial={{ opacity: 0, transform: 'translateY(16px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Meet Our Pups
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4" style={{ gridAutoFlow: 'dense' }}>
          {puppies.map((puppy, index) => (
            <motion.div
              key={puppy.name}
              className={`group ${GRID_SPANS[index]}`}
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Outer shell */}
              <div className="h-full p-1.5 rounded-[2rem] bg-black/[0.02] ring-1 ring-black/[0.04]">
                {/* Inner core */}
                <div className="h-full rounded-[calc(2rem-0.375rem)] bg-surface overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  {/* Image container */}
                  <div className={`relative overflow-hidden ${IMAGE_HEIGHTS[index]}`}>
                    <Image
                      src={puppy.image}
                      alt={`${puppy.name} — ${puppy.breed}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes={index === 0 ? '(max-width: 768px) 100vw, 58vw' : index === 3 ? '100vw' : '(max-width: 768px) 100vw, 42vw'}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-bold text-text">{puppy.name}</h3>
                    <p className="text-text-secondary font-mono text-sm mt-1">
                      {puppy.breed} &middot; {puppy.age}
                    </p>
                    <p className="text-text-secondary text-sm mt-2">{puppy.personality}</p>
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="inline-block mt-4 border border-accent text-accent rounded-full px-5 py-2 text-sm font-medium
                        hover:bg-accent hover:text-white active:scale-[0.97] transition-[color,background-color,transform] duration-200"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
