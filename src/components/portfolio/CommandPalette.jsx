import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CornerDownLeft, Home, User, Code2, FolderGit2, GitBranch, Briefcase, Github, Wrench, Mail, ArrowUp } from 'lucide-react';

const COMMANDS = [
  { label: 'Home', href: '#hero', Icon: Home, group: 'Navigate' },
  { label: 'About', href: '#about', Icon: User, group: 'Navigate' },
  { label: 'Skills', href: '#skills', Icon: Code2, group: 'Navigate' },
  { label: 'Projects', href: '#projects', Icon: FolderGit2, group: 'Navigate' },
  { label: 'Journey', href: '#journey', Icon: GitBranch, group: 'Navigate' },
  { label: 'Experience', href: '#experience', Icon: Briefcase, group: 'Navigate' },
  { label: 'GitHub', href: '#github', Icon: Github, group: 'Navigate' },
  { label: 'Services', href: '#services', Icon: Wrench, group: 'Navigate' },
  { label: 'Contact', href: '#contact', Icon: Mail, group: 'Navigate' },
  { label: 'Back to top', href: '#hero', Icon: ArrowUp, group: 'Actions' },
  { label: 'Email me', href: 'mailto:muhammad.qwaider1@gmail.com', Icon: Mail, group: 'Actions' },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    if (!query.trim()) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = results[active];
        if (cmd) {
          if (cmd.href.startsWith('#')) {
            document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = cmd.href;
          }
          onClose();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-[15vh]"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: -8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="card-surface relative z-10 w-full max-w-xl overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-600"
              />
              <kbd className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">ESC</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-500">No results.</p>
              )}
              {results.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    if (cmd.href.startsWith('#')) {
                      document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = cmd.href;
                    }
                    onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    i === active ? 'bg-blue-600/15 text-blue-200' : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <cmd.Icon className="h-4 w-4 text-slate-500" />
                  <span className="flex-1">{cmd.label}</span>
                  <span className="font-mono text-[10px] text-slate-600">{cmd.group}</span>
                  {i === active && <CornerDownLeft className="h-3.5 w-3.5 text-slate-600" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}