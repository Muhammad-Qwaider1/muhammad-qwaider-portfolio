import project1Img from '@/assets/projects/POS.png';
import project2Img from '@/assets/projects/SOS-SharafAi.png';

export const PROJECTS = [
  {
    id: 'cloudpos',
    title: 'CloudPOS — Modern Point of Sale System',
    summary: 'A full-featured Cloud & Offline Point of Sale (POS) application built for fast retail and daily operations.',
    image: project1Img,
    problem: 'Retail businesses face service interruptions during internet outages and require fast, reliable multi-language checkout systems with thermal printing support.',
    role: 'Full Stack Developer',
    challenges: 'Ensuring seamless offline data sync, managing complex shift/inventory states, and delivering multi-language RTL/LTR support alongside receipt printing.',
    solutions: 'Implemented PWA offline-first capabilities, built local caching mechanisms for automatic sync upon reconnection, and integrated custom thermal/A4 receipt rendering.',
    tech: ['React', 'Vite', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS', 'PWA'],
    architecture: 'React PWA Client → NestJS REST API → PostgreSQL (via Prisma ORM). Features audit logging, localized RTL/LTR themes, and background network sync.',
    live: '',
    repo: 'https://github.com/Muhammad-Qwaider1/cloudpos-react-pos',
    note: 'I would add multi-store inventory sync and advanced AI-driven sales forecasting analytics.',
  },
  //
  {
    id: 'sos-student-opportunity',
    title: 'Student Opportunity System (SOS)',
    summary: 'Rule-based academic path recommendation platform for students.',
    image: project2Img,
    problem: 'Students face ambiguity when choosing suitable academic pathways based on their personal interests and skills.',
    role: 'UI/UX Designer & Lead Front-End Developer',
    challenges: 'Designing an intuitive multi-step assessment UI while state-managing user inputs and seamlessly integrating with the Laravel API.',
    solutions: 'Built responsive UI components using React, TypeScript, and Tailwind CSS, backed by a rule-based engine to provide instant guidance.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'MySQL', 'REST API'],
    architecture: 'React (TS) SPA ← REST API → Laravel Backend Engine. Modular component architecture with clean UI/UX separation.',
    live: '',
    repo: 'https://github.com/Muhammad-Qwaider1/SharafAi-Student-Opportunity-System',
    note: 'Future iterations will integrate dynamic AI model embeddings to replace the rule-based engine for personalized predictions.',
  },
  //


];