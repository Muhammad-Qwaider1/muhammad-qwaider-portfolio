import Reveal from './Reveal';

export default function SectionTitle({ index, label, title, subtitle, align = 'left' }) {
  return (
    <Reveal>
      <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
          <span className="text-slate-600">{String(index).padStart(2, '0')}</span>
          <span className="h-px w-8 bg-blue-400/50" />
          <span>{label}</span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className={`max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}