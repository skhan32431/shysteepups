'use client';

import { motion } from 'motion/react';

const valueProps = [
  {
    number: '01',
    title: 'Raised with Love',
    description:
      'Every puppy in our care grows up in a warm home environment, not a kennel. They\'re socialized from day one with children, other pets, and plenty of belly rubs.',
  },
  {
    number: '02',
    title: 'Health Guaranteed',
    description:
      'All our puppies come with a comprehensive health certificate, up-to-date vaccinations, and a health guarantee. Your peace of mind is our priority.',
  },
  {
    number: '03',
    title: 'Part of the Family',
    description:
      'When you take home a ShysteePups puppy, you join our community. We\'re always here for advice, support, and the occasional puppy playdate.',
  },
];

const revealTransition = {
  duration: 0.8,
  ease: [0.23, 1, 0.32, 1] as const,
};

export default function WhySection() {
  return (
    <section id="about" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side — sticky heading */}
          <motion.div
            className="md:w-[40%] md:sticky md:top-32 md:self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-text">
              Why ShysteePups
            </h2>
            <p className="text-text-secondary leading-relaxed mt-6 max-w-[50ch]">
              We&apos;re not just breeders — we&apos;re a family that raises
              every puppy with the same love and care we&apos;d give our own.
            </p>
          </motion.div>

          {/* Right side — value props */}
          <div className="md:w-[60%] space-y-12 md:space-y-24">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.number}
                className={index > 0 ? 'border-t border-whisper pt-8' : ''}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{
                  ...revealTransition,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <span className="font-mono text-accent text-sm tracking-widest">
                  {prop.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-text tracking-tight mt-3">
                  {prop.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-[50ch] mt-4">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
