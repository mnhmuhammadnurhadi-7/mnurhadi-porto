# LCP Element Render Delay Fix — H1 `.article-title`

## Masalah
LCP element adalah `<h1 class="article-title">`, bukan hero image. **Element render delay = 2,260ms** — sangat tinggi untuk render teks. Penyebab utama: 3 file CSS render-blocking menghalangi H1 dari di-paint lebih awal:

| File | Est. Savings |
|------|-------------|
| `/_astro/BaseLayout.Ba4tbTuC.css` | 240ms |
| `/_astro/_slug_.DF3Ydk6p.css` | 120ms |
| `/fonts.css` | 120ms |

---

## Root Cause Analysis

### Kenapa H1 butuh 2,260ms untuk render?

1. **`fonts.css` blocking** — Ini `<link rel="stylesheet">` biasa (blocking), padahal mengandung `@font-face` untuk Sora yang dipakai H1. Browser harus download & parse dulu sebelum lanjut render.

2. **Sora font (`font-weight: 700`) tidak di-preload** — Hanya `inter-400` dan `inter-600` yang di-preload. Sora sama sekali tidak di-preload di `BaseLayout.astro`.

3. **`.article-title` styles ada di external CSS (`[slug].astro` compiled)** — Browser harus tunggu download + parse CSS sebelum bisa style dan paint H1.

4. **`global.css` via Tailwind juga inject styles untuk `.article-title`** — Ada duplikasi gradient definition antara `global.css` dan `[slug].astro` <style>.

---

## Proposed Changes

### 1. `BaseLayout.astro` — Critical head changes

#### [MODIFY] [BaseLayout.astro](file:///c:/MY%20FILES/KERJA/SEO/BLOG/mnhblog/src/layouts/BaseLayout.astro)

**a) Preload Sora font files** (w600 + w700) — tambahkan SEBELUM preload Inter, karena Sora adalah font LCP element:
```html
<!-- Sora (LCP font - HIGHEST priority) -->
<link rel="preload" href="/fonts/sora-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/sora-600.woff2" as="font" type="font/woff2" crossorigin>
<!-- Inter (body font) -->
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-600.woff2" as="font" type="font/woff2" crossorigin>
```

**b) fonts.css — ubah dari blocking ke non-blocking** (sama seperti animations.css):
```html
<!-- BEFORE (blocking): -->
<link rel="stylesheet" href="/fonts.css">

<!-- AFTER (non-blocking): -->
<link rel="stylesheet" href="/fonts.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/fonts.css"></noscript>
```

**c) Inline critical CSS untuk article pages** — Inject `<style>` khusus ketika `isArticle=true` langsung di `<head>`, SEBELUM semua external CSS. Berisi semua property `.article-title` plus Sora `@font-face` declaration langsung (agar browser tidak perlu tunggu fonts.css):

```html
{isArticle && (
  <style>
    /* Critical @font-face for Sora — eliminates fonts.css blocking for LCP */
    @font-face {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/sora-600.woff2') format('woff2');
      size-adjust: 98%;
      ascent-override: 90%;
      descent-override: 22%;
      line-gap-override: 0%;
    }
    @font-face {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/sora-700.woff2') format('woff2');
      size-adjust: 98%;
      ascent-override: 90%;
      descent-override: 22%;
      line-gap-override: 0%;
    }
    /* Critical CSS for LCP element */
    .article-title {
      font-family: 'Sora', system-ui, sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.15;
      margin: 0 0 1rem 0;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    html:not(.dark) .article-title {
      background: linear-gradient(135deg, #1d4ed8, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    @media (max-width: 768px) {
      .article-title { font-size: 2rem; }
    }
  </style>
)}
```

> **Kenapa inline `@font-face` di `<head>`?**  
> Ketika fonts.css di-load non-blocking, browser tidak tahu definisi Sora saat pertama parse HTML. Dengan inline `@font-face` + preload, browser langsung tahu font apa yang harus di-fetch dan bisa mulai download sebelum render dimulai.

---

### 2. `global.css` — Hapus duplikasi gradient untuk `.article-title`

#### [MODIFY] [global.css](file:///c:/MY%20FILES/KERJA/SEO/BLOG/mnhblog/src/styles/global.css)

Line 149-154 saat ini override `.article-title` dengan gradient yang berbeda (`#3b82f6` → `#10b981`). Ini **konflik** dengan definisi di `[slug].astro` (`#3b82f6` → `#8b5cf6`). Hapus `.article-title` dari rule tersebut untuk menghindari CSSOM recalculation yang tidak perlu.

```css
/* BEFORE: */
.hero-title, .article-title, .section-title, .related-title {
  background: linear-gradient(135deg, #3b82f6, #10b981);
  ...
}

/* AFTER: */
.hero-title, .section-title, .related-title {
  background: linear-gradient(135deg, #3b82f6, #10b981);
  ...
}
```

---

## Open Questions

> [!IMPORTANT]
> **Pertanyaan 1:** Apakah `.article-title` gradient yang "benar" adalah `#3b82f6 → #8b5cf6` (seperti di `[slug].astro`) atau `#3b82f6 → #10b981` (seperti di `global.css`)? Keduanya berbeda saat ini. Saya akan menggunakan versi `[slug].astro` (biru → ungu) karena lebih specific dan sesuai dengan dark/light mode variant.

> [!NOTE]
> **fonts.css non-blocking tradeoff:** Ketika fonts.css di-load non-blocking, ada window singkat di mana fallback font (system-ui) tampil sebelum Sora loaded. Ini **FOUT (Flash of Unstyled Text)**. Dengan `font-display: swap` yang sudah ada + preload Sora, window ini akan sangat singkat (< 100ms). Metric CLS tidak terpengaruh karena Sora memiliki `size-adjust: 98%` yang sudah dikalibrasi.

---

## Verification Plan

### Setelah Deploy:
1. Jalankan PageSpeed Insights pada artikel jantung
2. Cek LCP Breakdown → **Element render delay** target: **< 500ms** (dari 2,260ms)
3. Cek "Render-blocking requests" → `/fonts.css` seharusnya hilang dari daftar
4. Pastikan tidak ada regresi CLS (target < 0.1)
5. Cek visual H1 masih tampil gradient biru-ungu dengan benar

### Build Command:
```bash
npm run build
```

---

## Summary of Changes

| File | Perubahan |
|------|-----------|
| `BaseLayout.astro` | + Preload Sora w600+w700 (tertinggi), fonts.css → non-blocking, + inline critical CSS + @font-face untuk article pages |
| `global.css` | Hapus `.article-title` dari shared gradient rule (avoid override conflict) |

**Total estimated impact:** ~480ms reduction in element render delay (120ms fonts.css blocking + prioritas font preload yang benar)
