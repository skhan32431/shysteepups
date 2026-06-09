'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'Puppies', href: '#puppies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const EASE = [0.23, 1, 0.32, 1] as const;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
        <div
          className="flex items-center justify-between w-full max-w-4xl rounded-full
            border border-whisper bg-white/80 backdrop-blur-xl
            px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          {/* Wordmark */}
          <a
            href="#"
            className="text-lg font-semibold text-text min-h-[44px] flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ShysteePups
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-text-secondary hover:text-text transition-colors duration-200
                  min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-accent hover:bg-accent-hover text-white text-sm font-medium
                rounded-full px-6 py-2 min-h-[44px] flex items-center
                transition-[color,background-color,transform] duration-200 active:scale-[0.97]"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center
              text-text"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-[7px] w-6 h-[1.5px] bg-current rounded-full
                  transition-transform duration-300 origin-center
                  ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
              />
              <span
                className={`absolute left-0 top-[15px] w-6 h-[1.5px] bg-current rounded-full
                  transition-transform duration-300 origin-center
                  ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center
              bg-white/80 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, transform: 'translateY(20px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  exit={{ opacity: 0, transform: 'translateY(10px)' }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + i * 0.06,
                    ease: EASE,
                  }}
                  className="text-2xl text-text font-medium min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                exit={{ opacity: 0, transform: 'translateY(10px)' }}
                transition={{
                  duration: 0.4,
                  delay: 0.05 + NAV_LINKS.length * 0.06,
                  ease: EASE,
                }}
                className="bg-accent hover:bg-accent-hover text-white text-lg font-medium
                  rounded-full px-8 py-3 min-h-[44px] flex items-center
                  transition-[color,background-color,transform] duration-200 active:scale-[0.97] mt-4"
              >
                Inquire Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
