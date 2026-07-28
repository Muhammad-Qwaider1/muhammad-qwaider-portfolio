import { motion } from 'framer-motion';
import { GitBranch, Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const STEPS = [
  { commit: 'a1b2c1', title: 'C++', note: 'First language Programming, object-oriented programming.' },
  { commit: 'a1b2c2', title: 'JAVA', note: 'Platform-independent, object-oriented programming.' },
  { commit: 'a1b2c3', title: 'HTML', note: 'First markup, semantics, structure.' },
  { commit: 'd4e5f6', title: 'CSS', note: 'Layout, Flexbox, Grid, responsive design.' },
  { commit: '788abc', title: 'JavaScript', note: 'DOM, async, real interactivity.' },
  { commit: '789abc', title: 'Tailwind CSS', note: 'Utility-first CSS framework.' },
  { commit: 'def012', title: 'React', note: 'Components, state, hooks, composition.' },
  { commit: '345678', title: 'Git & GitHub', note: 'Version control, collaboration, PRs.' },
  { commit: '9abcdef', title: 'Backend', note: 'Node, Express, REST, auth.' },
  { commit: '112233', title: 'Databases', note: 'PostgreSQL, MongoDB, data modeling.' },
  { commit: '445566', title: 'DevOps', note: 'Docker, CI/CD, deployments.' },
  // { commit: '778899', title: 'Cloud', note: 'AWS, Vercel, scalable hosting.' },
  { commit: 'aabbcc', title: 'Continuous Learning', note: 'Always shipping, always studying.' },
];

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={4} label="Journey" title="The compilation timeline" subtitle="A learning path drawn like a git branch. Each commit is a real skill earned in sequence." />

      <div className="mt-14 relative pl-6 sm:pl-10">
        <div className="absolute left-2 top-0 h-full w-px bg-slate-800 sm:left-4" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{ originY: 0 }}
          className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500/0 sm:left-4"
        />

        <ol className="space-y-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.commit} delay={i * 0.04}>
              <li className="relative">
                <span className="absolute -left-[18px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-blue-500/50 bg-[#020617] sm:-left-[34px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>
                <div className="card-surface rounded-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <GitBranch className="h-4 w-4 text-violet-400" />
                    <span className="font-mono text-xs text-slate-500">commit {s.commit}</span>
                    <span className="font-mono text-[10px] text-emerald-400">merged</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-slate-100">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{s.note}</p>
                  {i === STEPS.length - 1 && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      <Check className="h-3 w-3" /> HEAD
                    </div>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}