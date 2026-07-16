# AGENT.md

## 1. Project Overview

- **Project name:** `mnurhadi_portofolio`
- **Purpose:** Portfolio website for Muhammad Nur Hadi, showcasing projects, skills, certifications, and contact details.
- **Main features:**
  - Hero landing section
  - Sticky navigation bar
  - Project cards with modal details
  - Skills section
  - Certifications gallery
  - Contact section with direct links
  - Responsive static portfolio layout built with Tailwind CSS
- **Target users:** Hiring managers, recruiters, clients, and collaborators who want to review portfolio work and contact the owner.
- **Technologies used:**
  - Frontend: React 19 + TypeScript
  - Build tool: Vite
  - Styling: Tailwind CSS
  - Linting: ESLint
  - Assets: local image imports under `src/assets`

---

## 2. Current Progress

### ✅ Completed

- Portfolio frontend implemented using React and TypeScript.
- Navigation and hero section created in `src/components/Navbar.tsx` and `src/components/Hero.tsx`.
- Project listing page implemented in `src/App.tsx` with modal details in `src/components/ProjectModal.tsx`.
- Projects data and certifications data defined in `src/data/projects.ts`.
- Skills and certifications sections built in `src/components/Skills.tsx` and `src/components/Certifications.tsx`.
- Contact section implemented in `src/components/Contact.tsx`.
- Footer component exists and is included in layout.
- Tailwind CSS configured in `tailwind.config.ts`.
- Vite configuration is set up in `vite.config.ts`.
- Project is runnable locally with `npm install` and `npm run dev`.
- Static asset structure is present under `src/assets` with images for all projects and certifications.

### 🚧 In Progress

- No active in-progress feature clearly visible in the repository.
- Work that appears to be partially migrated or leftover from an older starter: `src/main.ts` and `src/style.css` appear to be default Vite starter files and are not used by the current React application.

### ⏳ Pending

- Add an actual contact form or backend integration for contact submissions.
- Remove or refactor legacy starter files (`src/main.ts`, `src/style.css`) if they are not needed.
- Add tests and lint enforcement for TypeScript/React.
- Improve or validate mobile responsiveness across all sections.
- Add deployment configuration / CI pipeline if production deployment is required.
- Document environment variables if any external service is added.

---

## 3. Current State

- **Working features:**
  - React portfolio site renders successfully.
  - Modal opening/closing behaviour works for project cards.
  - Navigation anchors link to page sections.
  - Certification images open in a full-screen viewer when clicked.
- **Features not present / not implemented:**
  - No contact form backend integration.
  - No API routes present in the repository.
  - No database schema or migrations present.
- **Known limitations:**
  - The app is currently a static frontend.
  - Legacy starter files remain in the repo, which may cause confusion.
  - There is no explicit testing setup.
  - Deployment and CI/CD are not configured in the repository.
- **Technical debt:**
  - Unused default files from the Vite starter (`src/main.ts`, `src/style.css`).
  - No runtime guard or fallback for image URLs imported via assets if build paths change.
  - No dedicated route handling or page-level code splitting, although not required for this portfolio.

---

## 4. Project Structure

- `index.html` — HTML entry point for the Vite application.
- `package.json` — npm scripts, dependencies, and devDependencies.
- `vite.config.ts` — Vite build configuration.
- `tailwind.config.ts` — Tailwind CSS configuration.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configuration and references.
- `src/main.tsx` — React application bootstrap.
- `src/App.tsx` — Main application component rendering page sections.
- `src/components/` — React components for page sections and UI elements.
- `src/data/projects.ts` — Data source for project cards and certifications.
- `src/types/index.ts` — TypeScript interfaces for data shapes.
- `src/assets/` — Static images used by the portfolio.
- `src/main.ts` and `src/style.css` — Legacy Vite starter files that appear unused by the current app.

---

## 5. Architecture

- **Frontend:** Single-page React application.
- **Backend:** None present in this repository.
- **Database:** None present.
- **Authentication:** None present.
- **API Flow:** None present.
- **Third party service:** No external runtime dependencies in code; only external links in the contact section.
- **Deployment:** Not configured in the repository. The app is currently intended for local build and preview.

---

## 6. Decisions Log

- `React 19` was chosen for the frontend framework.
- `TypeScript` is used for type safety across components and data.
- `Vite` is used as the build tool for fast development and modern bundling.
- `Tailwind CSS` is the styling system, enabled via `@tailwindcss/vite`.
- The portfolio is designed as a static, client-side app rather than a full-stack application.
- Project and certification assets are imported directly into the React bundle for build-time inclusion.

---

## 7. Known Issues

- `src/main.ts` and `src/style.css` are likely legacy starter files and are not referenced by `index.html` or `src/main.tsx`.
  - **Impact:** Creates repository noise and possible confusion for future maintainers.
  - **Planned resolution:** Remove or archive these files if not needed.
- No explicit test scripts or test files are present.
  - **Impact:** No automated validation of UI or data correctness.
  - **Planned resolution:** Add Jest / React Testing Library or Vite test runner later.
- No backend or API integration.
  - **Impact:** Contact links are static and no form submission capability exists.
  - **Planned resolution:** Add backend or serverless form endpoint if interactive contact is required.

---

## 8. TODO List

1. [ ] Confirm and remove unused starter files: `src/main.ts` and `src/style.css`.
2. [ ] Add contact form or backend integration for user submissions.
3. [ ] Add testing setup and at least basic React component tests.
4. [ ] Validate responsive behavior on mobile and tablet screens.
5. [ ] Add deployment configuration (Vercel, Netlify, or custom host) and update README.
6. [ ] Add documentation for any new environment variables if backend or third-party integrations are added.
7. [ ] Review and update `package.json` dependencies to remove any unused packages after cleanup.
8. [ ] Update `AGENT.md` after each significant change.

---

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

---

## 10. Environment Variables

- Saat ini tidak ada environment variable yang digunakan oleh kode dalam repositori ini.
- Jika backend atau layanan eksternal ditambahkan, dokumentasikan variabel berikut di bagian ini:
  ```env
  API_BASE_URL=
  CONTACT_ENDPOINT=
  VITE_PUBLIC_SOMETHING=
  ```

---

## 11. API Documentation

- **Status:** Tidak ada API dalam repositori ini.
- **Notes:** Semua konten dikirim secara statis melalui React + local asset imports.

---

## 12. Database

- **Status:** Tidak ada database atau migration di repositori ini.
- **Notes:** Jika aplikasi dikembangkan menjadi full-stack, tambahkan skema tabel, relasi, dan migrasi di sini.

---

## 13. Dependencies

- `react` — UI library.
- `react-dom` — React DOM rendering.
- `vite` — Build tool and dev server.
- `typescript` — Static typing.
- `@vitejs/plugin-react` — React support for Vite.
- `tailwindcss` — Utility-first CSS framework.
- `@tailwindcss/vite` — Tailwind plugin for Vite.
- `eslint` — Code linting.
- `@eslint/js` — ESLint core plugin setup.
- `eslint-plugin-react-hooks` — Enforce React hook rules.
- `eslint-plugin-react-refresh` — Supports React refresh linting.
- `@types/node`, `@types/react`, `@types/react-dom` — TypeScript declarations.
- `typescript-eslint` — ESLint support for TypeScript.

---

## 14. Testing Status

- **Test coverage:** Tidak ada testing otomatis tersedia saat ini.
- **Features tested:** Manual UI review only.
- **Features not tested:** React components, modal behavior, responsive layout, data bindings.
- **How to run tests:** Belum tersedia. Tambahkan framework testing terlebih dahulu.

---

## 15. Deployment

- **Current deployment:** Tidak ada server atau hosting yang dikonfigurasi dalam repositori.
- **Possible deployment path:** Static site deployment to Vercel, Netlify, or any static hosting platform.
- **Build process:** `npm run build` using Vite. Output directory is managed by Vite default.
- **CI/CD:** Tidak ada pipeline konfigurasi dalam repositori.

---

## 16. Important Notes

- Jangan ubah arsitektur halaman menjadi backend full-stack tanpa alasan kuat; saat ini repo adalah static React portfolio.
- `src/main.ts` dan `src/style.css` tampak tidak lagi dipakai oleh aplikasi React. Verifikasi sebelum menghapus.
- `src/App.tsx` adalah entry point frontend yang merender semua komponen halaman.
- `src/data/projects.ts` adalah sumber kebenaran untuk semua konten proyek dan sertifikasi.
- Jika menambahkan API atau data dinamis, pastikan struktur `Project` di `src/types/index.ts` diperbarui dengan benar.
- Pastikan setiap perubahan besar didokumentasikan kembali di `AGENT.md`.

---

## 17. Next Agent Instructions

- Mulai dari TODO prioritas pertama: verifikasi dan bersihkan file starter yang tidak terpakai.
- Jangan ubah arsitektur frontend statis tanpa alasan kuat.
- Pertahankan style Tailwind dan struktur komponen yang ada.
- Perbarui `AGENT.md` setelah menyelesaikan pekerjaan atau jika status proyek berubah.
- Jika menambahkan backend/API, tambahkan keputusan dan variabel lingkungan yang relevan.
- Jika menemukan bug baru, tambahkan ke bagian `Known Issues`.
- Pastikan status `Completed`, `In Progress`, dan `Pending` selalu diperbarui untuk mencerminkan kondisi terbaru.
