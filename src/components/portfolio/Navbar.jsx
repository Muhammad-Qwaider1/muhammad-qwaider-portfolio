import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Command, Download } from 'lucide-react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#github' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onCommand }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-blue-600 text-white">MQ</span>
          {/* <span className="hidden sm:inline">MHD QWAIDER</span>
          <span className="text-blue-400">_</span> */}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCommand}
            className="hidden items-center gap-1.5 rounded-md border border-slate-700/70 bg-slate-900/50 px-2.5 py-1.5 font-mono text-xs text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200 sm:flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" /> K
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-md bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)] sm:flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-800 text-slate-300 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-slate-800/60 bg-[#020617]/95 backdrop-blur-xl lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1 px-4 py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800/50"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}