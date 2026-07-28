import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, FileText, X } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

import { PROJECTS } from '@/data/PosData';

const TECH_FILTERS = ['All', ...Array.from(new Set(PROJECTS.flatMap((p) => p.tech)))];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const visible = PROJECTS.filter((p) => filter === 'All' || p.tech.includes(filter));

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={3} label="Projects" title="Proof of work, not promises" subtitle="Each project is a system — not just a screenshot. Filter by tech to see depth across the stack." />

      <Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {TECH_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-all ${
                filter === t
                  ? 'border-blue-500 bg-blue-600/15 text-blue-300'
                  : 'border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <motion.article
              layout
              className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-blue-500/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                {p.live && (
                  <div className="absolute right-3 top-3 flex gap-1.5">
                    <span className="rounded border border-slate-700/60 bg-[#020617]/70 px-2 py-0.5 font-mono text-[10px] text-emerald-400 backdrop-blur">live</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-semibold text-slate-50">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded border border-slate-700/50 bg-slate-800/40 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-blue-600/90 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-500"
                  >
                    <FileText className="h-3.5 w-3.5" /> Case Study
                  </button>

                  {/* إظهار زر GitHub فقط في حال وجود رابط */}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-md border border-slate-700/60 text-slate-400 hover:text-slate-100" aria-label="GitHub repository">
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {/* إظهار زر Live Demo فقط في حال وجود رابط */}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-md border border-slate-700/60 text-slate-400 hover:text-slate-100" aria-label="Live demo">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="card-surface relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-800 bg-[#0B1120]/90 px-5 py-4 backdrop-blur">
              <h3 className="font-heading text-lg font-semibold text-slate-50">{active.title}</h3>
              <button onClick={() => setActive(null)} className="grid h-8 w-8 place-items-center rounded-md text-slate-400 hover:bg-slate-800/60 hover:text-slate-100" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-5 p-5">
              <img src={active.image} alt={active.title} className="aspect-[16/9] w-full rounded-lg object-cover" />
              {[
                { label: 'Problem', value: active.problem },
                { label: 'My Role', value: active.role },
                { label: 'Challenges', value: active.challenges },
                { label: 'Solutions', value: active.solutions },
                { label: 'Architecture', value: active.architecture },
              ].map((b) => (
                <div key={b.label}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-blue-400">{b.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{b.value}</p>
                </div>
              ))}

              {active.note && (
                <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-violet-300">If I had more time…</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{active.note}</p>
                </div>
              )}

              <div className="flex gap-2">
                {active.live && (
                  <a href={active.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {active.repo && (
                  <a href={active.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/60">
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}