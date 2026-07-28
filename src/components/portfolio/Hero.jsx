import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles , Check } from 'lucide-react';
import CountUp from './CountUp';
import Reveal from './Reveal';

const HERO_IMG = 'https://media.base44.com/images/public/6a651358da45b9524a15e538/9a0ab44f0_generated_42181a37.png';

const STATS = [
  { label: 'Years of Coding', value: 3, suffix: '+' },
  { label: 'Featured Projects', value: 5, suffix: '+' },
  { label: 'Tech Stack Tools', value: 10, suffix: '+' },
  { label: 'GitHub Repos', value: 8, suffix: '+' },
];

const STACK = ['React JS', 'Nest JS', 'TypeScript', 'SQL', 'Docker' , 'Git' , 'GitHub' , 'Linux'];

export default function Hero() {
  const [recruiter, setRecruiter] = useState(false);
  const [typed, setTyped] = useState('');
  const [copied, setCopied] = useState(false);

  const MY_EMAIL = 'muhammad.qwaider1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const lines = ['const engineer = {', '  name: "Muhammad Qwaider",', '  focus: "Aspiring Full Stack Web",', '  status: "building"', '}'];
    const full = lines.join('\n');
    if (recruiter) return;
    let i = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTyped(full);
      return;
    }
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [recruiter]);

  return (
    <section id="hero" className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to internships & freelance
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 font-mono text-sm text-blue-400">// Hello, I'm</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-2 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
              Muhammad Qwaider
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="mt-3 text-gradient-blue font-heading text-2xl font-semibold sm:text-3xl">
              Aspiring Full Stack Developer
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg ${recruiter ? 'hidden' : ''}`}>
              Software Engineering student crafting real-world software with clean architecture,
              modern React, and an engineer-first mindset. I turn ambiguous problems into
              scalable, maintainable products.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_28px_-4px_rgba(59,130,246,0.65)]"
              >
                View My Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800/60"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <div className="flex items-center gap-1">
                <a
                  href="https://github.com/Muhammad-Qwaider1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-md border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-qwaider-026263413?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-md border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email"
                  title="Copy email address"
                  className="relative grid h-10 w-10 place-items-center rounded-md border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Mail className="h-4 w-4" />}
                  
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-emerald-500 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-950 shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800/40 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#0B1120]/80 px-4 py-4">
                  <dd className="font-heading text-2xl font-bold text-slate-50 sm:text-3xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="card-surface relative overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">engineer.config.ts</span>
              <div className="ml-auto flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <button
                  onClick={() => setRecruiter((r) => !r)}
                  className="flex items-center gap-2 font-mono text-[11px] text-slate-400"
                  aria-label="Toggle recruiter mode"
                >
                  <span>Recruiter</span>
                  <span className={`relative h-4 w-7 rounded-full transition-colors ${recruiter ? 'bg-blue-600' : 'bg-slate-700'}`}>
                    <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${recruiter ? 'left-3.5' : 'left-0.5'}`} />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3]">
              <img src={HERO_IMG} alt="Abstract 3D neural network visualization" className="h-full w-full object-cover opacity-90" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              {!recruiter && (
                <pre className="absolute bottom-3 left-3 right-3 overflow-hidden rounded-lg border border-slate-800/70 bg-[#020617]/85 p-3 font-mono text-[11px] leading-relaxed text-slate-300 backdrop-blur">
                  <code>{typed}<span className="animate-pulse text-blue-400">▋</span></code>
                </pre>
              )}
            </div>

            <div className="border-t border-slate-800 bg-slate-900/40 px-4 py-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {STACK.map((t) => (
                  <span key={t} className="rounded border border-slate-700/60 bg-slate-800/40 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            aria-hidden
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 -top-3 hidden rounded-lg border border-blue-500/30 bg-[#0B1120]/90 px-3 py-2 font-mono text-[11px] text-blue-300 backdrop-blur sm:block"
          >
            build: passing ✓
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}