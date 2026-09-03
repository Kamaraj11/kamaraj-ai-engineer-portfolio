import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL, NAV_LINKS } from '@/data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <button onClick={scrollToTop} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface font-mono text-sm font-bold text-accent">
                KB
              </span>
              <span className="font-mono text-sm font-semibold text-white">Kamaraj B</span>
            </button>
            <p className="font-mono text-xs text-gray-600">AI Engineer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-accent" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-accent" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="text-gray-500 transition-colors hover:text-accent" aria-label="Email">
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface/50 text-gray-400 transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-surface-border pt-6 text-center">
          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Kamaraj B — AI Engineer. Built with React, Vite &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
