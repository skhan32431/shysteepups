import {
  InstagramLogo,
  TiktokLogo,
  FacebookLogo,
} from '@phosphor-icons/react/dist/ssr';

const socialLinks = [
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: TiktokLogo, label: 'TikTok', href: '#' },
  { icon: FacebookLogo, label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-text py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-semibold text-lg text-white">ShysteePups</span>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon
                  size={20}
                  weight="light"
                  className="text-white/60 hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-sm mt-8 text-center">
          &copy; 2026 ShysteePups. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
