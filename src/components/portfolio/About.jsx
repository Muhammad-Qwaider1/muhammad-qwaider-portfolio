import { Code2, Cpu, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import PORTRAIT from '../../assets/me.png';


const FACTS = [
  { Icon: Code2, label: 'Discipline', value: 'Clean architecture first' },
  { Icon: Cpu, label: 'Currently', value: 'Backend & DevOps' },
  { Icon: Rocket, label: 'Goal', value: 'Scalable real-world systems' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={1} label="About" title="The mind engineering the experience" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800">
            <img src={PORTRAIT} alt="Portrait of Muhammad Qwaider" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">
              I'm a software engineering student at Damascus University. From the moment I realized that programming
              can transform a vague idea into something used by thousands of people, and can even sometimes provide solutions to difficult problems facing society, I fell in love with this field.
              What started as curiosity has become a method: I'm obsessed with writing easy-to-read code, logical abstract models, and
              the small details that make programming seem simple and straightforward.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              I build full stack applications with React JS and Nest JS, and I'm currently deepening my
              backend and DevOps skills — designing APIs, containerizing services, and understanding
              how systems scale under real load. Git is second nature, and I lean into AI-assisted
              development to move faster without sacrificing quality.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              What motivates me is simple: solving real-world problems with software that lasts.
              I'm looking for internships, junior roles, and freelance work where I can learn from
              sharp engineers and ship things that matter.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {FACTS.map(({ Icon, label, value }, i) => (
              <Reveal key={label} delay={0.15 + i * 0.05}>
                <div className="card-surface rounded-xl p-4">
                  <Icon className="h-5 w-5 text-blue-400" />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}