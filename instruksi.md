# 📋 INSTRUKSI PEMBANGUNAN PORTFOLIO — Muhammad Nur Hadi
> Stack: React + TypeScript (TSX) + Tailwind CSS + Vite
> Deploy: Vercel

---

## 🗂️ STRUKTUR FOLDER YANG HARUS DIBUAT

```
src/
├── assets/
│   ├── BemVokasi/
│   │   ├── lofi.png
│   │   ├── early_live.png
│   │   ├── design_high_vid.png
│   │   └── alur_sistem.png
│   ├── DStudio/
│   │   ├── main_home_page.png
│   │   ├── layanan_page.png
│   │   └── cms_page.png
│   ├── MDAQ/
│   │   ├── pengumuman_finalis.jpg
│   │   ├── alursistem.png
│   │   └── alurbelajar.png
│   ├── MWProgram/
│   │   ├── automation.png
│   │   ├── kegiatan.jpg
│   │   └── surat_keterangan_penerimaan_hibah.png
│   ├── Provoks/
│   │   ├── Pengurusan_google_form.png
│   │   ├── pengurusan_administratif_lpj.png
│   │   └── pengurusan_spreadsheet.png
│   ├── Siemens/
│   │   ├── system_flow.png
│   │   ├── qualified.png
│   │   └── the_proposal.png
│   ├── Thailand/
│   │   ├── kegiatan.jpg
│   │   ├── google_ranking.png
│   │   └── artikel.png
│   └── sertifikasi/
│       ├── struktur_data_.jpg
│       ├── prompt_sofware_engginer.jpg
│       ├── penggunaan_genAi.jpg
│       ├── optimalisasi_ms_365.jpg
│       ├── ms_word_kerja.jpg
│       ├── google_ads.jpg
│       ├── data_excel.jpg
│       ├── belajar_visualisasi.jpg
│       └── belajar_data.jpg
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 DESIGN SYSTEM

### Warna (tambahkan ke tailwind.config.ts)
```ts
colors: {
  navy: {
    DEFAULT: '#1A3557',
    dark: '#0F2137',
    light: '#1E4A7A',
  },
  blue: {
    primary: '#2563EB',
    light: '#EFF6FF',
  }
}
```

### Font (tambahkan ke index.html)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet"/>
```

### Prinsip Design
- Background: `#F0F4F8` (gray muda)
- Card: `#FFFFFF` dengan border `#E2E8F0`
- Heading: Font Sora, warna navy
- Body: Font Inter, warna `#0F172A`
- Muted text: `#64748B`
- Max 2 warna utama: Navy + Blue
- Tidak ada animasi berlebihan

---

## 📁 FILE: src/types/index.ts

```ts
export interface ProofItem {
  type: 'live' | 'screenshot' | 'award' | 'doc' | 'article';
  label: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  org: string;
  label: 'Personal Project' | 'Organization' | 'Competition' | 'International' | 'Faculty-Funded';
  tagline: string;
  date: string;
  coverEmoji: string;
  coverColor: string;
  problem: string;
  solution: string;
  process: string;
  result: string;
  tools: string[];
  images: string[];
  proof: ProofItem[];
}
```

---

## 📁 FILE: src/data/projects.ts

```ts
import { Project } from '../types';

// ── IMPORT SEMUA GAMBAR ──────────────────────────────────────

// D Studio
import dstudio1 from '../assets/DStudio/main_home_page.png';
import dstudio2 from '../assets/DStudio/layanan_page.png';
import dstudio3 from '../assets/DStudio/cms_page.png';

// BEM Vokasi
import bem1 from '../assets/BemVokasi/lofi.png';
import bem2 from '../assets/BemVokasi/design_high_vid.png';
import bem3 from '../assets/BemVokasi/alur_sistem.png';
import bem4 from '../assets/BemVokasi/early_live.png';

// MWProgram (Entrepreneurship)
import mw1 from '../assets/MWProgram/automation.png';
import mw2 from '../assets/MWProgram/kegiatan.jpg';
import mw3 from '../assets/MWProgram/surat_keterangan_penerimaan_hibah.png';

// Siemens
import siemens1 from '../assets/Siemens/qualified.png';
import siemens2 from '../assets/Siemens/system_flow.png';
import siemens3 from '../assets/Siemens/the_proposal.png';

// MDAQ
import mdaq1 from '../assets/MDAQ/pengumuman_finalis.jpg';
import mdaq2 from '../assets/MDAQ/alursistem.png';
import mdaq3 from '../assets/MDAQ/alurbelajar.png';

// Thailand
import thailand1 from '../assets/Thailand/google_ranking.png';
import thailand2 from '../assets/Thailand/artikel.png';
import thailand3 from '../assets/Thailand/kegiatan.jpg';

// Provoks
import provoks1 from '../assets/Provoks/Pengurusan_google_form.png';
import provoks2 from '../assets/Provoks/pengurusan_administratif_lpj.png';
import provoks3 from '../assets/Provoks/pengurusan_spreadsheet.png';

// ── DATA PROYEK ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'dstudio',
    title: 'D Studio – Photo Editing Service',
    org: 'Personal Project · 2026 – Present',
    label: 'Personal Project',
    tagline: 'Full-stack web app for online photo editing with one-time ticket system',
    date: 'March 2026 – Present',
    coverEmoji: '🌐',
    coverColor: 'from-blue-900 to-blue-600',
    problem: 'No simple, accessible photo editing service existed with a frictionless order flow — most platforms required account creation and were too complex for casual users.',
    solution: 'Built a production-ready photo editing service with a one-time ticket system requiring no login, reducing friction for customers and simplifying order management.',
    process: 'Handled the full development lifecycle independently: designed system architecture and database schema (MySQL on Aiven), built the backend API (Laravel on Northflank), developed the frontend UI (React JSX on Vercel), integrated a CMS, and managed the deployment pipeline across all three platforms.',
    result: 'Successfully deployed to production using a 3-platform cloud architecture. Platform is live and fully operational.',
    tools: ['React JSX', 'Laravel', 'MySQL', 'Aiven', 'Northflank', 'Vercel', 'CMS', 'REST API'],
    images: [dstudio1, dstudio2, dstudio3],
    proof: [
      { type: 'live', label: '🔗 Live Site', url: 'https://dstudio-photo.vercel.app' },
      { type: 'screenshot', label: '📸 Screenshots' },
    ],
  },
  {
    id: 'bem',
    title: 'BEM Vokasi – PM & UI/UX',
    org: 'Organization · Universitas Brawijaya · 2026 – Present',
    label: 'Organization',
    tagline: 'Led end-to-end design and project management for official BEM Vokasi website',
    date: 'March 2026 – Present',
    coverEmoji: '🎨',
    coverColor: 'from-navy-dark to-navy-DEFAULT',
    problem: 'BEM Vokasi lacked an official digital platform, making it difficult to communicate with members and manage organizational information effectively.',
    solution: 'Led end-to-end design and project management for the official BEM Vokasi website, from system architecture to final UI/UX prototype, coordinating a 4-person development team.',
    process: 'Began with requirement gathering from stakeholders, created system architecture and user flow diagrams, designed wireframes (lo-fi) and high-fidelity prototypes in Figma, coordinated Frontend, Backend, and QC team members.',
    result: 'Delivered a complete design system, system flow documentation, and Figma prototype. Website reached early live stage.',
    tools: ['Figma', 'System Flow Design', 'Wireframing', 'Prototyping', 'Project Coordination'],
    images: [bem1, bem2, bem3, bem4],
    proof: [
      { type: 'screenshot', label: '📸 Figma Design' },
      { type: 'doc', label: '📄 System Flow' },
    ],
  },
  {
    id: 'entrepreneurship',
    title: 'Faculty-Funded Entrepreneurship Program',
    org: 'Faculty-Funded · Universitas Brawijaya · 2025 – Present',
    label: 'Faculty-Funded',
    tagline: 'Led 2 funded business ventures with AI automation integration',
    date: 'Sept 2025 – Present',
    coverEmoji: '🚀',
    coverColor: 'from-green-900 to-green-600',
    problem: 'Identifying viable business opportunities and building operational ventures from scratch within the constraints of a student environment, with manual WhatsApp communication consuming significant time.',
    solution: 'Led a 5-person team to develop two active ventures: D Studio (photo editing service with live web platform) and an OSPEK support service, implementing AI automation for WhatsApp operations.',
    process: 'Designed business workflows and operational systems, created go-to-market strategy, managed budget and financial reporting to faculty. Additionally implemented a local AI automation system using Ollama + n8n + OpenWA to handle WhatsApp broadcast messaging and automated customer replies for the OSPEK service.',
    result: 'Successfully received faculty funding grant. Both ventures are operational. AI automation system reduced manual WhatsApp response workload significantly.',
    tools: ['Business Design', 'Operations Management', 'n8n', 'Ollama', 'OpenWA', 'WhatsApp Automation', 'Team Leadership'],
    images: [mw1, mw2, mw3],
    proof: [
      { type: 'award', label: '🏆 Faculty Grant', },
      { type: 'doc', label: '📄 Funding Letter' },
      { type: 'screenshot', label: '📸 Automation' },
    ],
  },
  {
    id: 'siemens',
    title: 'Siemens Innovation Competition',
    org: 'Competition · National Level · 2025',
    label: 'Competition',
    tagline: 'Qualified Presenter (Top 10) in national QC innovation challenge',
    date: 'Sept 2025',
    coverEmoji: '⚙️',
    coverColor: 'from-amber-900 to-amber-600',
    problem: 'Inefficiencies in industrial quality control (QC) processes leading to errors and production waste in manufacturing environments.',
    solution: 'Designed and proposed a QC innovation system with full end-to-end system flow, process documentation, and technical presentation to a panel of judges.',
    process: 'Led team strategy and division of responsibilities, designed the complete system flow and process architecture, created the full proposal documentation, and presented the technical and business case at the national level.',
    result: 'Reached Top 10 (Qualified Presenter) stage out of all competing teams nationally, presenting directly to Siemens judges.',
    tools: ['System Flow Design', 'Process Documentation', 'Technical Presentation', 'Team Leadership'],
    images: [siemens1, siemens2, siemens3],
    proof: [
      { type: 'award', label: '🏆 Qualified (Top 10)' },
      { type: 'doc', label: '📄 Proposal' },
    ],
  },
  {
    id: 'mdaq',
    title: 'MDAQ Competition',
    org: 'Competition · National Level · Feb 2026',
    label: 'Competition',
    tagline: 'National Finalist in digital solution design competition',
    date: 'Feb 2026',
    coverEmoji: '💡',
    coverColor: 'from-purple-900 to-purple-600',
    problem: 'Complex digital challenge requiring innovative system design and user experience thinking under competition conditions with strict time constraints.',
    solution: 'Led team to design a complete digital solution including system flow diagrams and UI/UX components, reaching the national finalist stage.',
    process: 'Directed overall team strategy, designed system flow architecture and learning flow diagrams, developed UI/UX components, and coordinated team deliverables to meet submission deadlines.',
    result: 'Reached the national Finalist stage, demonstrating strong system thinking and leadership under competition conditions.',
    tools: ['System Flow Design', 'Figma', 'UI/UX Design', 'Team Leadership', 'Problem Solving'],
    images: [mdaq1, mdaq2, mdaq3],
    proof: [
      { type: 'award', label: '🏆 Finalist' },
      { type: 'doc', label: '📄 System Design' },
    ],
  },
  {
    id: 'thailand',
    title: 'International Study Visit · SDGs Article',
    org: 'International · Thailand · Jan 2026',
    label: 'International',
    tagline: 'Fully funded representative + published SEO article ranking Page 1 Google',
    date: 'Jan 2026',
    coverEmoji: '✈️',
    coverColor: 'from-rose-900 to-rose-600',
    problem: 'Lack of quality, SEO-optimized content in Indonesian covering the intersection of SDGs Goal 4 (Quality Education) and AI — leaving a significant search gap.',
    solution: 'Authored and published a fully SEO-optimized article on Jurnalpost covering SDGs 4: Quality Education in the AI Era, targeting high-value keywords with low competition.',
    process: 'Conducted keyword research to identify ranking opportunities, structured the article for both readability and SEO, published on Jurnalpost, and monitored keyword positions post-publication.',
    result: 'Article ranks on Page 1 of Google Search for multiple keyword combinations including "pendidikan berkualitas era AI" and "SDGs 4 era AI" — demonstrating practical, measurable SEO execution.',
    tools: ['SEO Writing', 'Keyword Research', 'On-Page SEO', 'Content Strategy', 'Google Search'],
    images: [thailand1, thailand2, thailand3],
    proof: [
      { type: 'article', label: '📰 Live Article', url: 'https://jurnalpost.com/read/sdgs-4-pendidikan-yang-berkualitas-di-era-ai/20699/' },
      { type: 'screenshot', label: '📸 Google Page 1' },
    ],
  },
  {
    id: 'provoks',
    title: 'Data Officer & Secretary – PROVOKS',
    org: 'Organization · Universitas Brawijaya · Aug 2025 – Present',
    label: 'Organization',
    tagline: 'Managed administrative systems and data collection for campus organization',
    date: 'Aug 2025 – Present',
    coverEmoji: '🗂️',
    coverColor: 'from-slate-700 to-slate-500',
    problem: 'Campus organization needed a structured, accessible system for administrative documentation, data collection, and formal correspondence management.',
    solution: 'Built and maintained administrative systems using Google Workspace — including Google Forms for data collection, Sheets for record management, and Docs for formal correspondence.',
    process: 'Created standardized Google Forms for various data collection needs, managed and organized datasets in Google Sheets ensuring accuracy, drafted formal letters and LPJ (accountability reports) using Google Docs.',
    result: 'Established a reliable administrative system that improved data accessibility and documentation accuracy for the organization.',
    tools: ['Google Forms', 'Google Sheets', 'Google Docs', 'Data Management', 'Administrative Systems'],
    images: [provoks1, provoks2, provoks3],
    proof: [
      { type: 'screenshot', label: '📸 Documentation' },
    ],
  },
];

// ── CERTIFICATIONS ───────────────────────────────────────────

import cert1 from '../assets/sertifikasi/google_ads.jpg';
import cert2 from '../assets/sertifikasi/penggunaan_genAi.jpg';
import cert3 from '../assets/sertifikasi/prompt_sofware_engginer.jpg';
import cert4 from '../assets/sertifikasi/optimalisasi_ms_365.jpg';
import cert5 from '../assets/sertifikasi/ms_word_kerja.jpg';
import cert6 from '../assets/sertifikasi/data_excel.jpg';
import cert7 from '../assets/sertifikasi/belajar_visualisasi.jpg';
import cert8 from '../assets/sertifikasi/belajar_data.jpg';
import cert9 from '../assets/sertifikasi/struktur_data_.jpg';

export const certifications = [
  { title: 'Google Ads', image: cert1 },
  { title: 'Generative AI Usage', image: cert2 },
  { title: 'Prompt Engineering for Software Engineers', image: cert3 },
  { title: 'Microsoft 365 Optimization', image: cert4 },
  { title: 'Microsoft Word for Work', image: cert5 },
  { title: 'Data Excel', image: cert6 },
  { title: 'Data Visualization', image: cert7 },
  { title: 'Data Learning', image: cert8 },
  { title: 'Data Structures', image: cert9 },
];
```

---

## 📁 FILE: src/App.tsx

```tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { useState } from 'react';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Navbar />
      <Hero />
      <Stats />

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Work & Achievements</p>
        <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-3">
          Projects, Experience & Activities
        </h2>
        <p className="text-[#64748B] text-sm mb-12">
          Click any card to view the full case study with proof and documentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <Skills />
      <Certifications />
      <Contact />
      <Footer />

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
```

---

## 📁 FILE: src/components/Navbar.tsx

```tsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-10 flex items-center justify-between h-14">
      <span className="font-['Sora'] font-bold text-[#1A3557] text-base tracking-tight">
        MNH · Portfolio
      </span>
      <ul className="flex gap-7 list-none">
        {['Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#64748B] text-sm font-medium hover:text-[#1A3557] transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

---

## 📁 FILE: src/components/Hero.tsx

```tsx
export default function Hero() {
  return (
    <section className="min-h-[88vh] flex items-center justify-center px-10 py-20 bg-gradient-to-br from-[#0F2137] via-[#1A3557] to-[#1E4A7A] relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-2xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-7 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Open to Remote Work
        </div>

        {/* Name */}
        <h1 className="font-['Sora'] text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Muhammad<br />
          <span className="text-blue-400">Nur Hadi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#94A3B8] text-base leading-relaxed max-w-lg mx-auto mb-9">
          Digital Project Coordinator with hands-on experience in system design,
          full-stack development, and SEO content — bridging coordination and technical execution.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {['Project Management', 'System Analysis', 'SEO & Content', 'Full-Stack Dev', 'UI/UX Design'].map((tag) => (
            <span key={tag} className="bg-white/10 border border-white/15 text-[#CBD5E1] text-xs font-medium px-4 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5">
            View My Work
          </a>
          <a href="#contact" className="bg-white/10 border border-white/20 text-[#E2E8F0] text-sm font-semibold px-7 py-3 rounded-lg hover:bg-white/15 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

## 📁 FILE: src/components/Stats.tsx

```tsx
const stats = [
  { num: '2×', label: 'National Finalist' },
  { num: '1', label: 'Production Web App' },
  { num: '#1', label: 'Google Ranked Article' },
  { num: '4', label: 'Active Org Roles' },
  { num: '🇹🇭', label: 'International Exposure' },
];

export default function Stats() {
  return (
    <div className="bg-white border-b border-[#E2E8F0] px-10">
      <div className="max-w-4xl mx-auto flex justify-around py-7">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-['Sora'] text-2xl font-extrabold text-[#1A3557] tracking-tight">{s.num}</div>
            <div className="text-xs text-[#64748B] font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 📁 FILE: src/components/ProjectCard.tsx

```tsx
import { Project } from '../types';

const proofClass: Record<string, string> = {
  live: 'bg-green-100 text-green-800',
  screenshot: 'bg-blue-100 text-blue-800',
  award: 'bg-amber-100 text-amber-800',
  doc: 'bg-purple-100 text-purple-800',
  article: 'bg-red-100 text-red-800',
};

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 group"
    >
      {/* Cover */}
      <div className={`h-44 bg-gradient-to-br ${project.coverColor} flex items-center justify-center relative`}>
        <span className="text-5xl">{project.coverEmoji}</span>
        <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {project.label}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-['Sora'] text-base font-bold text-[#0F172A] mb-1 leading-tight">{project.title}</h3>
        <p className="text-xs text-[#64748B] mb-4">{project.org}</p>

        {/* PSR Strip */}
        <div className="flex border border-[#E2E8F0] rounded-lg overflow-hidden mb-4">
          {[
            { label: 'Problem', text: project.problem.slice(0, 50) + '...' },
            { label: 'Solution', text: project.solution.slice(0, 50) + '...' },
            { label: 'Result', text: project.result.slice(0, 50) + '...' },
          ].map((item, i) => (
            <div key={i} className={`flex-1 p-2 text-center ${i < 2 ? 'border-r border-[#E2E8F0]' : ''}`}>
              <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-[10px] text-[#0F172A] font-medium leading-tight">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2 py-0.5 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 border-t border-[#E2E8F0] pt-3 flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {project.proof.map((p) => (
            <span key={p.label} className={`text-[10px] font-semibold px-2 py-1 rounded ${proofClass[p.type]}`}>
              {p.label}
            </span>
          ))}
        </div>
        <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">View →</span>
      </div>
    </div>
  );
}
```

---

## 📁 FILE: src/components/ProjectModal.tsx

```tsx
import { useEffect } from 'react';
import { Project } from '../types';

const proofClass: Record<string, string> = {
  live: 'bg-green-100 text-green-800',
  screenshot: 'bg-blue-100 text-blue-800',
  award: 'bg-amber-100 text-amber-800',
  doc: 'bg-purple-100 text-purple-800',
  article: 'bg-red-100 text-red-800',
};

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start p-7 pb-0">
          <div>
            <h2 className="font-['Sora'] text-xl font-extrabold text-[#1A3557] tracking-tight">{project.title}</h2>
            <p className="text-sm text-[#64748B] mt-1">{project.org}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#CBD5E1] transition-colors ml-4 flex-shrink-0">
            ×
          </button>
        </div>

        <div className="p-7">
          {/* PSR Grid */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Problem', text: project.problem, color: 'border-red-500' },
              { label: 'Solution', text: project.solution, color: 'border-green-500' },
              { label: 'Result', text: project.result, color: 'border-blue-500' },
            ].map((item) => (
              <div key={item.label} className={`bg-[#F0F4F8] rounded-xl p-3.5 border-l-4 ${item.color}`}>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1.5">{item.label}</div>
                <p className="text-xs text-[#0F172A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-5">
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Process</div>
            <p className="text-sm text-[#0F172A] leading-relaxed">{project.process}</p>
          </div>

          {/* Images */}
          {project.images.length > 0 && (
            <div className="mb-5">
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Documentation</div>
              <div className="grid grid-cols-3 gap-2">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="rounded-lg w-full h-24 object-cover border border-[#E2E8F0] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => window.open(img, '_blank')}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          <div className="mb-5">
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Tools Used</div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg">{tool}</span>
              ))}
            </div>
          </div>

          {/* Proof */}
          <div>
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Proof & Documentation</div>
            <div className="flex flex-wrap gap-2">
              {project.proof.map((p) => (
                p.url ? (
                  <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${proofClass[p.type]} hover:opacity-80 transition-opacity`}>
                    {p.label}
                  </a>
                ) : (
                  <span key={p.label} className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${proofClass[p.type]}`}>
                    {p.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 📁 FILE: src/components/Skills.tsx

```tsx
const skillGroups = [
  {
    icon: '🎯',
    title: 'PROJECT & COORDINATION',
    tags: ['Project Management', 'System Flow Design', 'Cross-team Leadership', 'Stakeholder Reporting', 'Task Delegation'],
  },
  {
    icon: '🔍',
    title: 'SYSTEM ANALYSIS',
    tags: ['Workflow Design', 'Process Documentation', 'Architecture Planning', 'Requirements Analysis'],
  },
  {
    icon: '📝',
    title: 'SEO & CONTENT',
    tags: ['SEO Writing', 'Keyword Research', 'Google Page 1 Ranking', 'Article Publishing', 'Content Strategy'],
  },
  {
    icon: '💻',
    title: 'TECHNICAL',
    tags: ['React JSX', 'Laravel', 'MySQL', 'Figma', 'REST API', 'CMS', 'n8n', 'Ollama'],
  },
  {
    icon: '☁️',
    title: 'DEPLOYMENT & TOOLS',
    tags: ['Vercel', 'Northflank', 'Aiven', 'Git', 'Google Workspace', 'Microsoft Office'],
  },
  {
    icon: '🌐',
    title: 'LANGUAGES',
    tags: ['Indonesian (Native)', 'English (Intermediate)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white border-t border-b border-[#E2E8F0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Capabilities</p>
        <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-[#F0F4F8] border border-[#E2E8F0] rounded-2xl p-5">
              <div className="text-2xl mb-3">{group.icon}</div>
              <div className="text-xs font-bold text-[#1A3557] mb-3 tracking-wide">{group.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="bg-white text-[#64748B] text-[11px] font-medium px-2.5 py-1 rounded border border-[#E2E8F0]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 📁 FILE: src/components/Certifications.tsx

```tsx
import { certifications } from '../data/projects';
import { useState } from 'react';

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Credentials</p>
      <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-12">Certifications</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelected(cert.image)}
            className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <img src={cert.image} alt={cert.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <p className="text-xs font-semibold text-[#0F172A] leading-tight">{cert.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <img src={selected} alt="Certificate" className="max-w-2xl w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
```

---

## 📁 FILE: src/components/Contact.tsx

```tsx
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Let's Connect</p>
      <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-3">Available for Remote Work</h2>
      <p className="text-[#64748B] text-sm mb-8 max-w-md">
        Open to part-time remote engagements (25 hours/week) in project coordination, system analysis, SEO content, or digital operations.
      </p>
      <div className="flex gap-3 flex-wrap">
        <a href="mailto:mnhmuhammadnurhadi@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all">
          ✉️ Send Email
        </a>
        <a href="https://wa.me/6285883797751"
          className="bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#F0F4F8] transition-all">
          💬 WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/muhamad-nur-hadi-373087265/"
          className="bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#F0F4F8] transition-all">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/mnhmuhammadnurhadi-7"
          className="bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#F0F4F8] transition-all">
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
```

---

## 📁 FILE: src/components/Footer.tsx

```tsx
export default function Footer() {
  return (
    <footer className="bg-[#0F2137] text-[#94A3B8] text-center py-10 px-6">
      <p className="text-sm">© 2026 Muhammad Nur Hadi · Malang, East Java, Indonesia</p>
      <p className="text-xs mt-2 text-[#64748B]">Built with React + TypeScript + Tailwind CSS · Deployed on Vercel</p>
    </footer>
  );
}
```

---

## 📁 FILE: src/index.css

```css
@import "tailwindcss";

@layer base {
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: 'Sora', sans-serif;
  }
}
```

---

## ⚙️ FILE: tailwind.config.ts

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1A3557',
          dark: '#0F2137',
          light: '#1E4A7A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 🚀 URUTAN IMPLEMENTASI

```
1. Pastikan folder src/assets sudah berisi semua gambar sesuai struktur di atas
2. Buat folder src/types/ → buat file index.ts
3. Buat folder src/data/ → buat file projects.ts
4. Update src/index.css
5. Update tailwind.config.ts
6. Update index.html → tambahkan Google Fonts link
7. Buat semua komponen di src/components/ sesuai urutan:
   - Navbar.tsx
   - Hero.tsx
   - Stats.tsx
   - ProjectCard.tsx
   - ProjectModal.tsx
   - Skills.tsx
   - Certifications.tsx
   - Contact.tsx
   - Footer.tsx
8. Update src/App.tsx
9. Jalankan npm run dev → cek tampilan
10. Deploy ke Vercel → npm run build → push ke GitHub
```

---

## ✅ CHECKLIST SEBELUM DEPLOY

- [ ] Semua gambar terbaca dan tidak ada broken image
- [ ] Modal bisa dibuka dan ditutup (klik luar / tombol × / Escape)
- [ ] Semua link eksternal (Live Site, Artikel, LinkedIn) bisa diklik
- [ ] Tampilan mobile responsive (cek di browser DevTools)
- [ ] Stats bar angka sudah benar
- [ ] Semua tools di Skills section sudah lengkap termasuk n8n + Ollama
- [ ] Contact WhatsApp number sudah benar

---

## ⚠️ CATATAN PENTING

- Nama file gambar **case-sensitive** — pastikan huruf besar/kecil sama persis dengan yang ada di folder
- Gambar `belajar_visualisasi .jpg` dan `belajar_data .jpg` ada spasi sebelum `.jpg` — hapus spasi tersebut dari nama file
- Untuk gambar yang besar, compress dulu menggunakan **Squoosh.app** sebelum dimasukkan ke project
- Jangan lupa update `index.html` dengan Google Fonts link dan meta description

