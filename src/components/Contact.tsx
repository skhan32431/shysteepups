'use client';

import { motion } from 'motion/react';
import { Phone, Envelope, MapPin } from '@phosphor-icons/react';

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.23, 1, 0.32, 1] as const,
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left side — CTA text */}
          <motion.div
            className="md:w-[45%]"
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={fadeUpTransition}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-text">
              Ready to Meet Your Pup?
            </h2>
            <p className="text-text-secondary leading-relaxed mt-6 max-w-[45ch]">
              Fill out the form and we&apos;ll get back to you within 24 hours.
              We&apos;d love to help you find your perfect companion.
            </p>

            <div className="mt-8 space-y-3">
              <div className="text-text-secondary text-sm flex items-center gap-2">
                <Phone size={18} weight="light" />
                <span>(555) 123-4567</span>
              </div>
              <div className="text-text-secondary text-sm flex items-center gap-2">
                <Envelope size={18} weight="light" />
                <span>hello@shysteepups.com</span>
              </div>
              <div className="text-text-secondary text-sm flex items-center gap-2">
                <MapPin size={18} weight="light" />
                <span>Austin, Texas</span>
              </div>
            </div>
          </motion.div>

          {/* Right side — Inquiry form */}
          <motion.div
            className="md:w-[55%]"
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ ...fadeUpTransition, delay: 0.15 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="p-1.5 rounded-[2rem] bg-black/[0.02] ring-1 ring-black/[0.04]">
              <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 md:p-10">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-whisper bg-background px-4 py-3 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl border border-whisper bg-background px-4 py-3 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Puppy Interest
                    </label>
                    <select className="w-full rounded-xl border border-whisper bg-background px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors">
                      <option>Any breed</option>
                      <option>Golden Retriever</option>
                      <option>French Bulldog</option>
                      <option>Labrador</option>
                      <option>Cavalier King Charles</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your ideal puppy..."
                      rows={4}
                      className="w-full rounded-xl border border-whisper bg-background px-4 py-3 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white rounded-full py-4 font-medium active:scale-[0.97] transition-transform duration-[160ms] hover:bg-accent-hover"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
