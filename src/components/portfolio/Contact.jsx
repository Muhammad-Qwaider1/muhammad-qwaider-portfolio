import { useState } from 'react';
import { Mail, Linkedin, Github, Download, Copy, Check, Send } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const EMAIL = 'muhammad.qwaider1@gmail.com';

const CHANNELS = [
  { Icon: Mail, label: EMAIL, href: `mailto:${EMAIL}`, copy: EMAIL },
  { Icon: Linkedin, label: 'linkedin.com/in/muhammad-qwaider', href: 'https://www.linkedin.com/in/muhammad-qwaider-026263413?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { Icon: Github, label: 'github.com/Muhammad-Qwaider1', href: 'https://github.com/Muhammad-Qwaider1' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={9} label="Contact" title="Let's build something" subtitle="Internships, junior roles, freelance — I read every message. Reach out and I'll respond within 24 hours." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-3">
            {CHANNELS.map(({ Icon, label, href, copy: c }) => (
              <div key={label} className="card-surface flex items-center gap-3 rounded-xl p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700/60 bg-slate-900/50 text-blue-400">
                  <Icon className="h-4 w-4" />
                </div>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex-1 truncate font-mono text-sm text-slate-200 hover:text-blue-300">
                  {label}
                </a>
                {c && (
                  <button onClick={() => copy(c)} className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-800/60 hover:text-slate-200" aria-label="Copy to clipboard">
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </div>
            ))}

            <a href={EMAIL} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/40 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800/60">
              <Download className="h-4 w-4" /> Download Resume
            </a>

            <div className="card-surface mt-auto rounded-xl p-5">
              <p className="font-heading text-lg font-semibold text-slate-100">Open to collaboration</p>
              <p className="mt-1.5 text-sm text-slate-400">Whether it's a full stack build, a React feature, or a code review — let's talk.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={submit} className="card-surface rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400" htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-blue-500" placeholder="Muhammad Qwaider" />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400" htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-blue-500" placeholder="muhammad.qwaider1@gmail.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400" htmlFor="message">Message</label>
              <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-blue-500" placeholder="Tell me about the role or project…" />
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_28px_-4px_rgba(59,130,246,0.65)] sm:w-auto">
              {sent ? <><Check className="h-4 w-4" /> Message ready — let's connect!</> : <><Send className="h-4 w-4" /> Send Message</>}
            </button>
            <p className="mt-3 font-mono text-[11px] text-slate-500">// Or email me directly at {EMAIL}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}