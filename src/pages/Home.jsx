import { useEffect, useState } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Journey from '@/components/portfolio/Journey';
import Experience from '@/components/portfolio/Experience';
import GitHubSection from '@/components/portfolio/GitHubSection';
import Services from '@/components/portfolio/Services';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import CommandPalette from '@/components/portfolio/CommandPalette';
import BlueprintGrid from '@/components/portfolio/BlueprintGrid';
import MagneticCursor from '@/components/portfolio/MagneticCursor';

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200">
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        Skip to Projects
      </a>
      <BlueprintGrid />
      <MagneticCursor />
      <Navbar onCommand={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <GitHubSection />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}