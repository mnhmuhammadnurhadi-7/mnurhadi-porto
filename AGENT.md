# AGENT.md

## 1. Project Overview

- **Project name:** `mnurhadi_portofolio`
- **Purpose:** Portfolio website for Muhammad Nur Hadi, showcasing projects, skills, certifications, and contact details, with a modern dark theme and interactive multi-page design.
- **Main features:**
  - Multi-page navigation with React Router (Home, Projects, About, Contact)
  - Animated interactive bubble background
  - Hero landing section with oversized bold typography
  - Sticky navigation bar with active state indicator
  - Project cards with large images, hover effects, and modal details (with animations)
  - Skills section with grouped capabilities
  - Certifications gallery with modal viewer
  - Contact section with direct links
  - Responsive layout built with Tailwind CSS
  - Scroll-triggered animations using Framer Motion
- **Target users:** Hiring managers, recruiters, clients, and collaborators who want to review portfolio work and contact the owner.
- **Technologies used:**
  - Frontend: React 19 + TypeScript
  - Build tool: Vite
  - Routing: React Router DOM
  - Styling: Tailwind CSS
  - Animations: Framer Motion
  - Icons: Lucide React
  - Linting: ESLint
  - Assets: local image imports under `src/assets`

## 2. Current Progress

### ✅ Completed

- Portfolio frontend completely redesigned to modern dark theme with high contrast typography.
- Navigation and hero section updated in `src/components/Navbar.tsx` and `src/components/Hero.tsx`.
- Project listing and card components updated in `src/App.tsx` and `src/components/ProjectCard.tsx`.
- Project modal updated in `src/components/ProjectModal.tsx` with animations.
- Skills and certifications sections updated in `src/components/Skills.tsx` and `src/components/Certifications.tsx`.
- Contact section updated in `src/components/Contact.tsx`.
- Footer component updated in `src/components/Footer.tsx`.
- Unused legacy files removed (`src/main.ts`, `src/style.css`, `src/App.css`, `src/index.css`, `src/counter.ts`).
- Framer Motion and Lucide React dependencies installed.
- Type declarations for image assets added in `src/vite-env.d.ts`.
- Project builds successfully with `npm run build`.
- All existing project and certification data preserved in `src/data/projects.ts`.

### 🚧 In Progress

- No active in-progress feature at the moment.

### ⏳ Pending

- Add an actual contact form with serverless integration (Formspree/Web3Forms)
- Improve or validate mobile responsiveness across all sections
- Add tests and lint enforcement for TypeScript/React
- Add deployment configuration / CI pipeline if production deployment is required
- Document environment variables if any external service is added

## 3. Current State

- **Working features:**
  - React portfolio site renders successfully with new dark theme design
  - Modal opening/closing behaviour works for project cards with animations
  - Navigation anchors link to page sections
  - Certification images open in a full-screen viewer when clicked
  - All animations are working (scroll-triggered, hover effects, etc.)
- **Features not present / not implemented:**
  - No contact form backend integration
  - No API routes present in the repository
  - No database schema or migrations present
- **Known limitations:**
  - The app is currently a static frontend
  - There is no explicit testing setup
  - Deployment and CI/CD are not configured in the repository
- **Technical debt:**
  - No runtime guard or fallback for image URLs imported via assets if build paths change
  - No dedicated route handling or page-level code splitting (not required for this portfolio)

## 4. Project Structure

- `index.html` — HTML entry point for the Vite application.
- `package.json` — npm scripts, dependencies, and devDependencies.
- `vite.config.ts` — Vite build configuration.
- `tailwind.config.ts` — Tailwind CSS configuration.
- `postcss.config.js` — PostCSS configuration.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configuration and references.
- `src/main.tsx` — React application bootstrap.
- `src/App.tsx` — Main application component with routing.
- `src/index.css` — Global CSS with Tailwind directives.
- `src/vite-env.d.ts` — TypeScript type declarations for image assets.
- `src/components/` — React components for UI elements.
  - `Navbar.tsx`
  - `Hero.tsx`
  - `ProjectCard.tsx`
  - `ProjectModal.tsx`
  - `Skills.tsx`
  - `Certifications.tsx`
  - `Contact.tsx`
  - `Footer.tsx`
  - `Layout.tsx` — Layout wrapper with navigation and footer.
  - `AnimatedBackground.tsx` — Animated bubble background component.
- `src/pages/` — Page-specific components.
  - `Home.tsx`
  - `Projects.tsx`
  - `About.tsx`
  - `Contact.tsx`
- `src/data/projects.ts` — Data source for project cards and certifications.
- `src/types/index.ts` — TypeScript interfaces for data shapes.
- `src/assets/` — Static images used by the portfolio.
  - `hero.png`
  - `typescript.svg`
  - `vite.svg`
  - `react.svg`
  - `DStudio/` — `main_home_page.png`, `layanan_page.png`, `cms_page.png`
  - `BemVokasi/` — `lofi.png`, `early_live.png`, `design_high_vid.png`, `alur_sistem.png`
  - `MWProgram/` — `automation.png`, `kegiatan.jpg`, `surat_keterangan_penerimaan_hibah.png`
  - `Siemens/` — `qualified.png`, `system_flow.png`, `the_proposal.png`
  - `MDAQ/` — `pengumuman_finalis.jpg`, `alursistem.png`, `alurbelajar.png`
  - `Thailand/` — `google_ranking.png`, `artikel.png`, `kegiatan.jpg`
  - `Provoks/` — `Pengurusan_google_form.png`, `pengurusan_administratif_lpj.png`, `pengurusan_spreadsheet.png`
  - `sertifikasi/jpg/` — `google_ads.jpg`, `penggunaan_genAi.jpg`, `prompt_sofware_engginer.jpg`, `optimalisasi_ms_365.jpg`, `ms_word_kerja.jpg`, `data_excel.jpg`, `belajar_visualisasi.jpg`, `belajar_data.jpg`, `struktur_data_.jpg`

## 5. Architecture

- **Frontend:** Single-page React application.
- **Backend:** None present in this repository.
- **Database:** None present.
- **Authentication:** None present.
- **API Flow:** None present.
- **Third party service:** No external runtime dependencies in code; only external links in the contact section.
- **Deployment:** Not configured in the repository. The app is currently intended for local build and preview.

## 6. Decisions Log

- `React 19` was chosen for the frontend framework.
- `TypeScript` is used for type safety across components and data.
- `Vite` is used as the build tool for fast development and modern bundling.
- `Tailwind CSS` is the styling system, enabled via `@tailwindcss/vite`.
- The portfolio is designed as a static, client-side app rather than a full-stack application.
- Project and certification assets are imported directly into the React bundle for build-time inclusion.
- `Framer Motion` added for animations.
- `Lucide React` added for icons.
- Dark theme (zinc palette) chosen for modern, high-contrast design.

## 7. Known Issues

- No explicit test scripts or test files are present.
  - **Impact:** No automated validation of UI or data correctness.
  - **Planned resolution:** Add Vitest / React Testing Library later.
- No backend or API integration for contact form.
  - **Impact:** Contact links are static only.
  - **Planned resolution:** Add serverless form endpoint if interactive contact is required.

## 8. TODO List

1. [x] Confirm and remove unused starter files: `src/main.ts`, `src/style.css`, `src/App.css`, `src/index.css`, `src/counter.ts`.
2. [ ] Add contact form or backend integration for user submissions.
3. [ ] Add testing setup and at least basic React component tests.
4. [ ] Validate responsive behavior on mobile and tablet screens.
5. [ ] Add deployment configuration (Vercel, Netlify, or custom host) and update README.
6. [ ] Add documentation for any new environment variables if backend or third-party integrations are added.
7. [x] Update `AGENT.md` to reflect changes.

## 9. Setup Instructions

1. Open the repository root in a terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview the production build locally:
   ```bash
   npm run preview
   ```

## 10. Environment Variables

- Saat ini tidak ada environment variable yang digunakan oleh kode dalam repositori ini.
- Jika backend atau layanan eksternal ditambahkan, dokumentasikan variabel berikut di bagian ini:
  ```env
  API_BASE_URL=
  CONTACT_ENDPOINT=
  VITE_PUBLIC_SOMETHING=
  ```

## 11. API Documentation

- **Status:** Tidak ada API dalam repositori ini.
- **Notes:** Semua konten dikirim secara statis melalui React + local asset imports.

## 12. Database

- **Status:** Tidak ada database atau migration di repositori ini.
- **Notes:** Jika aplikasi dikembangkan menjadi full-stack, tambahkan skema tabel, relasi, dan migrasi di sini.

## 13. Dependencies

- `react` — UI library.
- `react-dom` — React DOM rendering.
- `react-router-dom` — Client-side routing.
- `framer-motion` — Animation library.
- `lucide-react` — Icon library.
- `vite` — Build tool and dev server.
- `typescript` — Static typing.
- `@vitejs/plugin-react` — React support for Vite.
- `tailwindcss` — Utility-first CSS framework.
- `autoprefixer` — CSS vendor prefixes.
- `postcss` — CSS processing.
- `eslint` — Code linting.
- `@eslint/js` — ESLint core plugin setup.
- `eslint-plugin-react-hooks` — Enforce React hook rules.
- `eslint-plugin-react-refresh` — Supports React refresh linting.
- `@types/node`, `@types/react`, `@types/react-dom` — TypeScript declarations.
- `typescript-eslint` — ESLint support for TypeScript.

## 14. Testing Status

- **Test coverage:** Tidak ada testing otomatis tersedia saat ini.
- **Features tested:** Manual UI review only.
- **Features not tested:** React components, modal behavior, responsive layout, data bindings.
- **How to run tests:** Belum tersedia. Tambahkan framework testing terlebih dahulu.

## 15. Deployment

- **Current deployment:** Tidak ada server atau hosting yang dikonfigurasi dalam repositori.
- **Possible deployment path:** Static site deployment to Vercel, Netlify, or any static hosting platform.
- **Build process:** `npm run build` using Vite. Output directory is managed by Vite default.
- **CI/CD:** Tidak ada pipeline konfigurasi dalam repositori.

## 16. Important Notes

- Jangan ubah arsitektur halaman menjadi backend full-stack tanpa alasan kuat; saat ini repo adalah static React portfolio.
- `src/App.tsx` adalah entry point frontend yang merender semua komponen halaman.
- `src/data/projects.ts` adalah sumber kebenaran untuk semua konten proyek dan sertifikasi.
- Jika menambahkan API atau data dinamis, pastikan struktur `Project` di `src/types/index.ts` diperbarui dengan benar.
- Pastikan setiap perubahan besar didokumentasikan kembali di `AGENT.md`.
- Portfolio is now fully redesigned with a modern dark theme using zinc palette.

## 17. Next Agent Instructions

- Lanjutkan dengan TODO yang belum selesai jika ada permintaan.
- Pertahankan style Tailwind dan struktur komponen yang ada.
- Perbarui `AGENT.md` setelah menyelesaikan pekerjaan atau jika status proyek berubah.
- Jika menambahkan backend/API, tambahkan keputusan dan variabel lingkungan yang relevan.
- Jika menemukan bug baru, tambahkan ke bagian `Known Issues`.
