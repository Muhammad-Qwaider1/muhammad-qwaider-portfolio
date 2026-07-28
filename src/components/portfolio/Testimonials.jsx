import { Quote } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const TESTIMONIALS = [
  {
    quote: "Muhammad shipped a complex feature faster than I expected and the code was genuinely clean. Rare for a student.",
    name: 'Sarah Chen',
    role: 'Engineering Manager · Tech Startup',
  },
  {
    quote: "Reliable, curious, and detail-obsessed. He asks the right questions before writing a single line.",
    name: 'Marcus Lee',
    role: 'Founder · Indie SaaS',
  },
  {
    quote: "Delivered a responsive React app that scored 98 on Lighthouse. Will absolutely work with him again.",
    name: 'Priya Nair',
    role: 'Product Lead · Agency',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={8} label="Testimonials" title="Trusted by people I've built with" subtitle="Real feedback from managers, founders, and collaborators." />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <figure className="card-surface flex h-full flex-col rounded-xl p-6">
              <Quote className="h-6 w-6 text-blue-500/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">"{t.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-slate-800 pt-4">
                <p className="text-sm font-medium text-slate-100">{t.name}</p>
                <p className="font-mono text-[11px] text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}