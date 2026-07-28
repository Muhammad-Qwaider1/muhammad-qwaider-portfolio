import { motion } from 'framer-motion';
import {
  Layout, Server, Database, Cloud, Terminal, Wrench, BrainCircuit,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const CATEGORIES = [
  {
    Icon: Layout, name: 'Frontend', items: [
      { name: 'React JS', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    Icon: Server, name: 'Backend', items: [
      { name: 'Nest JS', level: 80 },
      { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Auth / JWT', level: 75 },
    ],
  },
  {
    Icon: Database, name: 'Database', items: [
      { name: 'PostgreSQL', level: 60 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    Icon: Cloud, name: 'Cloud & DevOps', items: [
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    Icon: Terminal, name: 'Languages', items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'C++', level: 70 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    Icon: Wrench, name: 'Tools', items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'Postman', level: 80 },
      { name: 'Jira', level: 70 },
    ],
  },
  {
    Icon: BrainCircuit, name: 'AI Tools', items: [
      { name: 'Cursor', level: 90 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'AI Tools for Web Development', level: 88 },
      { name: 'LLM APIs', level: 50 },
      { name: 'Prompt Design', level: 82 },
    ],
  },
];

function Bar({ level, delay }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={2} label="Skills" title="A stack built for production" subtitle="Grouped by discipline, calibrated honestly. I'd rather understate and overdeliver." />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, ci) => (
          <Reveal key={cat.name} delay={ci * 0.05}>
            <div className="card-surface group h-full rounded-xl p-5 transition-colors hover:border-blue-500/40">
              <div className="flex items-center justify-between">
                <cat.Icon className="h-5 w-5 text-blue-400" />
                <span className="font-mono text-[10px] text-slate-600">0{ci + 1}</span>
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold text-slate-100">{cat.name}</h3>
              <ul className="mt-4 space-y-3">
                {cat.items.map((item, i) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-500">{item.level}%</span>
                    </div>
                    <Bar level={item.level} delay={i * 0.08} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}