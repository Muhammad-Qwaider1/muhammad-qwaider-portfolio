import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const ENTRIES = [
  {
    Icon: Rocket,
    tag: 'Now',
    title: 'Available for Frontend & Software Engineering Roles',
    org: 'Open for Opportunities',
    period: '2026 — Present',
    desc: 'Actively seeking Software Engineering internships, Frontend / Full Stack roles, and impactful client projects.',
  },
  {
    Icon: Briefcase,
    tag: 'Collaboration',
    title: 'UI/UX & Lead Frontend Developer',
    org: 'SharafAI Initiative (SOS Project)',
    period: '2026',
    desc: 'Led the UI/UX design and built responsive React & TypeScript interfaces for a student academic guidance system, integrating REST APIs with a Laravel backend.',
  },
  {
    Icon: Briefcase,
    tag: 'Freelance / Projects',
    title: 'Frontend Web Developer',
    org: 'Independent / Self-Employed',
    period: '2025 — Present',
    desc: 'Developing modern, high-performance web applications using React JS, Vite, and Tailwind CSS with a strong focus on clean code and user experience.',
  },
  {
    Icon: Award,
    tag: 'Self-Study',
    title: 'Graphic Design & UI Foundations',
    org: 'Self-Directed Learning',
    period: '2025 — 2026',
    desc: 'Expanded skill set into visual design, typography, and wireframing to bridge the gap between design concepts and frontend implementation.',
  },
  {
    Icon: GraduationCap,
    tag: 'Education',
    title: 'BSc in Software Engineering',
    org: 'Faculty of Information Technology Engineering',
    period: '2023 — 2027 (Expected)',
    desc: 'Studying core software engineering principles, object-oriented design, algorithms, databases, and system architecture.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={5} label="Experience" title="Milestones, in order" subtitle="Education, certifications, internships, and freelance work — the path so far." />

      <div className="mt-14 relative pl-8">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-800" />
        <div className="space-y-8">
          {ENTRIES.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-[26px] top-1 grid h-6 w-6 place-items-center rounded-full border border-slate-700 bg-[#0F172A]">
                  <e.Icon className="h-3 w-3 text-blue-400" />
                </span>
                <div className="card-surface rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-slate-700/60 bg-slate-800/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">{e.tag}</span>
                    <span className="font-mono text-xs text-slate-500">{e.period}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-base font-semibold text-slate-100">{e.title}</h3>
                  <p className="text-sm text-blue-400">{e.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}