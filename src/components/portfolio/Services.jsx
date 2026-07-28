import { Layout, Layers, Server, Database, Smartphone, Gauge, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const SERVICES = [
  { Icon: Layout, title: 'Modern Websites', desc: 'Fast, accessible marketing sites engineered for performance and SEO.' },
  { Icon: Layers, title: 'React Applications', desc: 'Component-driven SPAs with clean state, routing, and type safety.' },
  { Icon: Server, title: 'Full Stack Apps', desc: 'End-to-end products: UI, API, auth, and data layer wired together.' },
  { Icon: Database, title: 'REST APIs', desc: 'Documented, validated, secure APIs designed for real consumers.' },
  { Icon: Smartphone, title: 'Responsive UI', desc: 'Pixel-perfect on mobile, tablet, and desktop — no exceptions.' },
  { Icon: Gauge, title: 'Performance Optimization', desc: 'Lighthouse-first audits, lazy loading, and bundle tuning.' },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={7} label="Services" title="What I can build for you" subtitle="From a single landing page to a full stack product — engineered to ship and scale." />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="card-surface group relative h-full overflow-hidden rounded-xl p-5 transition-colors hover:border-blue-500/40">
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700/60 bg-slate-900/50 text-blue-400">
                  <s.Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}