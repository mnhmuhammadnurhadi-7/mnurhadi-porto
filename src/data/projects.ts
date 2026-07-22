import type { Project } from '../types';

// D Studio
import dstudio1 from '../assets/DStudio/main_home_page.png';
import dstudio2 from '../assets/DStudio/layanan_page.png';
import dstudio3 from '../assets/DStudio/cms_page.png';

// BEM Vokasi
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
import mdaq4 from '../assets/MDAQ/UIUX.png';

// Thailand
import thailand1 from '../assets/Thailand/google_ranking.png';
import thailand2 from '../assets/Thailand/artikel.png';
import thailand3 from '../assets/Thailand/kegiatan.jpg';

// Provoks
import provoks2 from '../assets/Provoks/pengurusan_administratif_lpj.png';
import provoks3 from '../assets/Provoks/pengurusan_spreadsheet.png';

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
    process: 'Began with requirement gathering from stakeholders, created system architecture and user flow diagrams, designed wireframes and high-fidelity prototypes, coordinated Frontend, Backend, and QC team members.',
    result: 'Delivered a complete design system, system flow documentation, and Figma prototype. Website reached early live stage.',
    tools: ['Figma', 'System Flow Design', 'Wireframing', 'Prototyping', 'Project Coordination'],
    images: [bem4, bem2, bem3],
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
    solution: 'Led a 5-person team to develop two active ventures: D Studio and an OSPEK support service, implementing AI automation for WhatsApp operations.',
    process: 'Designed business workflows and operational systems, created go-to-market strategy, managed budget and financial reporting to faculty. Additionally implemented a local AI automation system using Ollama + n8n + OpenWA to handle WhatsApp broadcast messaging and automated customer replies for the OSPEK service.',
    result: 'Successfully received faculty funding grant. Both ventures are operational. AI automation system reduced manual WhatsApp response workload significantly.',
    tools: ['Business Design', 'Operations Management', 'n8n', 'Ollama', 'OpenWA', 'WhatsApp Automation', 'Team Leadership'],
    images: [mw1, mw2, mw3],
    proof: [
      { type: 'award', label: '🏆 Faculty Grant' },
      { type: 'doc', label: '📄 Funding Letter' },
      { type: 'screenshot', label: '📸 Automation' },
    ],
  },
  {
    id: 'siemens',
    title: 'Siemens Innovation Competition',
    org: 'Competition · National Level · Finalist · Nov 2025',
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
    images: [siemens3, siemens2, siemens1],
    proof: [
      { type: 'award', label: '🏆 Qualified (Top 10)' },
      { type: 'doc', label: '📄 Proposal' },
    ],
  },
  {
    id: 'mdaq',
    title: 'MDAQ — Qur\'anic App Design Competition',
    org: 'Competition · University Level· Finalist · Apr 2026',
    label: 'Competition',
    tagline: 'Finalist, Faculty of Vocational Studies delegate — Qur\'anic app design competition',
    date: 'Apr 2026',
    coverEmoji: '💡',
    coverColor: 'from-purple-900 to-purple-600',
    problem: 'Design a digital application concept centered on Qur\'anic learning, requiring system design and UX thinking under competition time constraints as part of Universitas Brawijaya\'s internal MTQ (Qur\'an competition) event.',
    solution: 'Led team to design a complete digital solution including system flow diagrams and UI/UX components, selected as Faculty of Vocational Studies delegate and advancing to the final round.',
    process: 'Directed overall team strategy, designed system flow architecture and learning flow diagrams, developed UI/UX components, and coordinated team deliverables to meet submission deadlines.',
    result: 'Advanced to the Finalist stage as faculty delegate, demonstrating strong system thinking and leadership under competition conditions.',
    tools: ['System Flow Design', 'Figma', 'UI/UX Design', 'Team Leadership', 'Problem Solving'],
    images: [mdaq3, mdaq2, mdaq4, mdaq1],
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
    images: [thailand3, thailand2, thailand1],
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
    process: 'Created standardized Google Forms for various data collection needs, managed and organized datasets in Google Sheets ensuring accuracy, drafted formal letters and LPJ reports using Google Docs.',
    result: 'Established a reliable administrative system that improved data accessibility and documentation accuracy for the organization.',
    tools: ['Google Forms', 'Google Sheets', 'Google Docs', 'Data Management', 'Administrative Systems'],
    images: [provoks2, provoks3],
    proof: [{ type: 'screenshot', label: '📸 Documentation' }],
  },
];

import cert1 from '../assets/sertifikasi/jpg/google_ads.jpg';
import cert2 from '../assets/sertifikasi/jpg/penggunaan_genAi.jpg';
import cert3 from '../assets/sertifikasi/jpg/prompt_sofware_engginer.jpg';
import cert4 from '../assets/sertifikasi/jpg/optimalisasi_ms_365.jpg';
import cert5 from '../assets/sertifikasi/jpg/ms_word_kerja.jpg';
import cert6 from '../assets/sertifikasi/jpg/data_excel.jpg';
import cert7 from '../assets/sertifikasi/jpg/belajar_visualisasi.jpg';
import cert8 from '../assets/sertifikasi/jpg/belajar_data.jpg';
import cert9 from '../assets/sertifikasi/jpg/struktur_data_.jpg';

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
