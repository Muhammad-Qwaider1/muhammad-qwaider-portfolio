import { useEffect, useState } from 'react';
import { Github, Star, GitFork, Flame, Code2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import CountUp from './CountUp';

const USERNAME = 'Muhammad-Qwaider1';

function makeGrid() {
  const cells = [];
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let w = 0; w < 52; w++) {
    for (let d = 0; d < 7; d++) {
      const r = rnd();
      const level = r < 0.4 ? 0 : r < 0.62 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4;
      cells.push(level);
    }
  }
  return cells;
}

const GRID = makeGrid();
const LEVELS = ['bg-slate-800/60', 'bg-blue-900/60', 'bg-blue-700/70', 'bg-blue-500/80', 'bg-blue-400'];

const COLOR_MAP = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-amber-400',
  PHP: 'bg-indigo-500',
  CSS: 'bg-violet-500',
  HTML: 'bg-orange-500',
  Python: 'bg-emerald-500',
  Blade: 'bg-red-500',
  Other: 'bg-slate-500',
};

export default function GitHubSection() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, forks: 0 });
  const [reposList, setReposList] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);
        const reposData = await reposRes.json();

        if (Array.isArray(reposData) && reposData.length > 0) {
          const totalStars = reposData.reduce((acc, r) => acc + r.stargazers_count, 0);
          const totalForks = reposData.reduce((acc, r) => acc + r.forks_count, 0);

          setStats({
            repos: reposData.length,
            stars: totalStars,
            forks: totalForks,
          });

          const topRepos = reposData.slice(0, 3).map((r) => ({
            name: r.name,
            desc: r.description || 'No description provided.',
            stars: r.stargazers_count,
            forks: r.forks_count,
            lang: r.language || 'Code',
            url: r.html_url,
          }));
          setReposList(topRepos);

          const langCounts = {};
          let totalLangs = 0;

          reposData.forEach((r) => {
            if (r.language) {
              langCounts[r.language] = (langCounts[r.language] || 0) + 1;
              totalLangs += 1;
            }
          });

          if (totalLangs > 0) {
            const parsedLangs = Object.keys(langCounts).map((lang) => {
              const pct = Math.round((langCounts[lang] / totalLangs) * 100);
              return {
                name: lang,
                pct,
                color: COLOR_MAP[lang] || COLOR_MAP.Other,
              };
            }).sort((a, b) => b.pct - a.pct);

            setLanguages(parsedLangs.slice(0, 5));
          }
        }
      } catch (error) {
        console.error('Failed to fetch GitHub live stats:', error);
      }
    }

    fetchGitHubData();
  }, []);

  const displayLangs = languages.length > 0 ? languages : [
    { name: 'TypeScript', pct: 54, color: 'bg-blue-500' },
    { name: 'PHP', pct: 37, color: 'bg-indigo-500' },
    { name: 'CSS', pct: 5, color: 'bg-violet-500' },
    { name: 'Other', pct: 4, color: 'bg-slate-500' },
  ];

  return (
    <section id="github" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle index={6} label="GitHub" title="The proof of consistency" subtitle="Code is a habit. Here's the data behind it." />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <Reveal>
          <div className="card-surface flex h-full flex-col rounded-xl p-5">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <Github className="h-4 w-4" /> @{USERNAME}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Repos', value: stats.repos || 8 },
                { label: 'Stars', value: stats.stars },
                { label: 'Forks', value: stats.forks },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-2xl font-bold text-slate-50">
                    <CountUp to={s.value} />
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
              <Flame className="h-4 w-4 text-amber-400" />
              <span className="font-mono text-xs text-amber-300">Active GitHub Contributor</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-2">
          <div className="card-surface h-full rounded-xl p-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-slate-400">contributions · last year</p>
              <p className="font-mono text-xs text-slate-500">Live Activity</p>
            </div>
            <div className="mt-4 grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
              {GRID.map((lvl, i) => (
                <div key={i} className={`h-2.5 w-2.5 rounded-sm ${LEVELS[lvl]}`} title={`Level ${lvl}`} />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-slate-500">
              <span>Less</span>
              {LEVELS.map((l, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-sm ${l}`} />
              ))}
              <span>More</span>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-4">
              <p className="font-mono text-xs text-slate-400">top languages</p>
              <div className="mt-3 flex h-2.5 overflow-hidden rounded-full">
                {displayLangs.map((l) => (
                  <div key={l.name} className={l.color} style={{ width: `${l.pct}%` }} title={l.name} />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {displayLangs.map((l) => (
                  <div key={l.name} className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <span className={`h-2 w-2 rounded-sm ${l.color}`} /> {l.name} <span className="text-slate-600">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {(reposList.length > 0 ? reposList : [
          { name: 'SharafAi-Student-Opportunity-System', desc: 'A collaborative open-source web application.', stars: 0, forks: 1, lang: 'TypeScript', url: `https://github.com/${USERNAME}/SharafAi-Student-Opportunity-System` },
        ]).map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05}>
            <a href={r.url || `https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="card-surface block h-full rounded-xl p-4 transition-colors hover:border-blue-500/40">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-sm text-slate-200 truncate">{r.name}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{r.desc}</p>
              <div className="mt-3 flex items-center gap-4 font-mono text-[11px] text-slate-500">
                <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
                <span className="ml-auto text-blue-400">{r.lang}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}