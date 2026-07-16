# Instruction.md: Transformasi Portofolio ke Gaya "Squareme"

## 1. Tujuan (Objective)
Mengubah `mnurhadi_portofolio` (saat ini: React 19 + TypeScript + Vite + Tailwind CSS) menjadi portofolio berdampak tinggi dengan gaya agensi kreatif yang terinspirasi oleh [squareme.si](https://squareme.si/en/). Fokusnya adalah meningkatkan desain visual, menambahkan animasi yang halus, dan memperbaiki pengalaman pengguna (UX) sambil tetap mempertahankan arsitektur frontend statis yang cepat dan teroptimasi.

## 2. Analisis Desain Target (Inspirasi Squareme.si)
Berdasarkan referensi, desain baru harus mengadopsi:
- **Dark Mode / Kontras Tinggi**: Latar belakang hitam pekat (misal: `bg-zinc-950` atau `#0a0a0a`) dengan tipografi putih bersih untuk kesan premium dan keterbacaan maksimal [[25]].
- **Tipografi yang Berani (Bold)**: Heading yang sangat besar dan berdampak (misal: `text-5xl` hingga `text-7xl`, `font-black`) untuk langsung menarik perhatian [[20]].
- **Showcase Proyek Berbasis Media**: Thumbnail proyek berukuran besar dengan animasi hover yang halus (misal: sedikit membesar, perubahan opasitas, atau efek "play" video).
- **Navigasi Minimalis**: Header sticky yang bersih dengan smooth scroll anchor dan Call-to-Action (CTA) "Let's Talk" yang menonjol.
- **Mikro-interaksi & Animasi Scroll**: Elemen muncul (fade/slide in) saat di-scroll (menggunakan Framer Motion atau GSAP). Detail kecil seperti pergeseran layout halus atau efek hover menambah kepribadian situs [[16]].

## 3. Analisis Kesenjangan (Gap Analysis)
| Fitur | Status Saat Ini (`AGENT.md`) | Status Target (Gaya Squareme) |
|---|---|---|
| **Tema** | Default / Terang (asumsi) | Dark mode, kontras tinggi, estetika premium |
| **Tipografi** | Default Tailwind | Bold, oversized, integrasi font kustom (misal: Inter, Space Grotesk, atau Clash Display) |
| **Animasi** | Dasar (buka/tutup modal) | Scroll-triggered reveals, efek hover halus, transisi antar bagian |
| **Kartu Proyek** | Gambar statis dengan modal | Kartu media besar dengan efek hover (`scale`/`opacity`) dan CTA yang jelas |
| **Kesehatan Kode** | Ada file legacy (`main.ts`, `style.css`) | Bersih, teroptimasi, tanpa file tidak terpakai |
| **Deployment** | Belum dikonfigurasi | Siap deploy ke Vercel/Netlify dengan CI/CD dasar |

## 4. Rencana Implementasi Langkah demi Langkah

### Fase 1: Pembersihan & Fondasi (Prioritas 1)
1. **Hapus File Legacy**: Hapus `src/main.ts` dan `src/style.css` karena merupakan artefak starter Vite yang tidak terpakai.
2. **Tambah Dependensi**: 
   - Instal library animasi: `npm install framer-motion`
   - Instal library ikon (jika belum ada): `npm install lucide-react`
3. **Konfigurasi Tailwind**: 
   - Perbarui `tailwind.config.ts` untuk mengaktifkan palet warna gelap (misal: `zinc` atau `neutral`) dan tambahkan konfigurasi font kustom (misal: `font-display`) untuk heading.

### Fase 2: Overhaul UI/UX (Komponen Inti)
1. **Hero Section (`src/components/Hero.tsx`)**:
   - Desain ulang dengan tipografi besar dan berani (misal: "Creative Developer specialized in building crazy good web experiences").
   - Tambahkan latar belakang animasi subtil (misal: gradient mesh atau noise texture) untuk memberikan kedalaman tanpa mengganggu konten.
2. **Bagian Proyek (`src/components/ProjectCard.tsx` & `App.tsx`)**:
   - Perbesar ukuran kartu dan dominasi gambar/media.
   - Tambahkan efek hover: `hover:scale-[1.02] transition-transform duration-300 ease-out`.
   - Pastikan CTA "View Project" sangat terlihat.
3. **Bagian Skills/About (`src/components/Skills.tsx`)**:
   - Ubah narasi menjadi "Capabilities" atau "What I Do" dengan pernyataan yang tegas dan ringkas.
   - Gunakan layout grid dengan aksen border subtil (misal: `border-zinc-800`) untuk memisahkan kategori skill.
4. **Bagian Kontak (`src/components/Contact.tsx`)**:
   - Buat berani dan langsung: "Got a project? Let's talk."
   - Tambahkan tautan email/LinkedIn yang besar dan dapat diklik dengan animasi garis bawah saat di-hover.

### Fase 3: Animasi & Interaktivitas
1. **Scroll Reveals**: Bungkus bagian utama dengan `<motion.div>` dari `framer-motion` menggunakan properti `initial={{ opacity: 0, y: 20 }}` dan `whileInView={{ opacity: 1, y: 0 }}` dengan `viewport={{ once: true }}`.
2. **Transisi Navbar**: Pastikan navbar sticky memiliki efek backdrop blur (`backdrop-blur-md bg-black/80`) saat di-scroll.
3. **Peningkatan Modal**: Perbarui `ProjectModal.tsx` agar memiliki animasi masuk/keluar yang halus dan latar belakang gelap yang imersif.

### Fase 4: Fungsionalitas, Pengujian & Polish
1. **Responsivitas Mobile**: Audit semua tipografi besar dan layout grid baru pada layar mobile (pastikan `text-5xl` mengecil menjadi `text-3xl` di layar kecil).
2. **Formulir Kontak**: Integrasikan handler formulir serverless (misal: Formspree, Web3Forms, atau Resend) untuk menggantikan tautan `mailto:` statis.
3. **Pengujian**: Tambahkan `@testing-library/react` dan `vitest`. Tulis setidaknya satu pengujian dasar untuk perenderan `ProjectCard`.

### Fase 5: Deployment & Dokumentasi
1. **Deployment**: Konfigurasi deployment ke Vercel atau Netlify. Tambahkan file `vercel.json` atau `_redirects` jika diperlukan.
2. **Perbarui AGENT.md**: Dokumentasikan semua perubahan, dependensi baru, dan status TODO yang diperbarui.

## 5. Daftar TODO yang Diperbarui
- [x] Analisis desain target (squareme.si) dan buat instruction.md.
- [ ] Konfirmasi dan hapus file starter yang tidak terpakai: `src/main.ts` dan `src/style.css`.
- [ ] Instal `framer-motion` dan `lucide-react`.
- [ ] Perbarui `tailwind.config.ts` untuk tema gelap dan tipografi tebal.
- [ ] Desain ulang `Hero.tsx` dengan tipografi oversized dan efek latar belakang subtil.
- [ ] Tingkatkan `ProjectCard.tsx` dengan animasi hover dan tampilan media yang lebih besar.
- [ ] Tambahkan animasi yang dipicu scroll ke semua bagian utama menggunakan Framer Motion.
- [ ] Integrasikan formulir kontak serverless (misal: Formspree) di `Contact.tsx`.
- [ ] Validasi dan perbaiki perilaku responsif pada layar mobile dan tablet.
- [ ] Tambahkan setup Vitest + React Testing Library dasar dan 1-2 tes komponen.
- [ ] Konfigurasi deployment (Vercel/Netlify) dan perbarui README.
- [ ] Perbarui `AGENT.md` untuk mencerminkan arsitektur baru dan tugas yang selesai.

## 6. Aturan untuk Agent (AI/Developer)
1. **Pertahankan Arsitektur**: Jangan ubah ini menjadi aplikasi full-stack dengan backend kustom kecuali diminta secara eksplisit. Gunakan endpoint formulir serverless untuk pengiriman kontak.
2. **Perubahan Inkremental**: Jalankan rencana ini fase demi fase. Perbarui `AGENT.md` setelah menyelesaikan setiap fase.
3. **Keamanan Tipe (Type Safety)**: Pastikan semua komponen dan prop baru diketik secara ketat menggunakan `src/types/index.ts`.
4. **Penanganan Aset**: Terus gunakan aset lokal dari `src/assets/`, tetapi pertimbangkan optimasi (WebP/AVIF) untuk performa.
5. **Tidak Ada Halusinasi**: Jika detail animasi atau desain tertentu tidak jelas, gunakan pola Tailwind + Framer Motion yang standar dan bersih.