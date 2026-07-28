import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-blue-600 text-white">MQ</span>
              Muhammad Qwaider
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">Software Engineering student & Aspiring Full Stack Developer building real-world software.</p>
          </div>


          <div className="flex items-center gap-2">
            {[
              { Icon: Github, href: 'https://github.com/Muhammad-Qwaider1', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-qwaider-026263413?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:muhammad.qwaider1@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-md border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-slate-600">© {new Date().getFullYear()} Muhammad Qwaider. Built with React & Tailwind.</p>
          <a href="#hero" className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 px-3 py-1.5 font-mono text-xs text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}