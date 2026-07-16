# Dokumentasi Proyek Portfolio

Dokumen ini menjelaskan struktur proyek, isi file utama, serta daftar asset gambar yang terdapat di dalam folder src/assets.

## 1. Gambaran Umum Proyek
Proyek ini adalah website portfolio sederhana yang dibuat dengan Vite + TypeScript. Struktur proyek fokus pada file utama HTML, entry script TypeScript, stylesheet, dan folder asset gambar.

## 2. Struktur Folder Utama

### Root Project
- index.html
  - File HTML utama yang menjadi entry page website.
  - Berisi elemen div dengan id app dan script utama dari src/main.ts.

- package.json
  - Menjelaskan nama proyek, versi, dan script yang digunakan.
  - Script penting:
    - npm run dev → menjalankan server development Vite.
    - npm run build → melakukan build proyek.
    - npm run preview → melihat hasil build secara lokal.

- tsconfig.json
  - Konfigurasi TypeScript untuk proyek.
  - Mengatur target JavaScript modern, modul ES, dan dukungan DOM.

- README.md
  - File panduan singkat proyek.

- public/
  - Folder untuk file statis yang bisa diakses langsung.
  - Berisi favicon.svg dan icons.svg.

## 3. Isi Folder src

### src/main.ts
File utama aplikasi yang akan dijalankan oleh Vite.

Fungsinya:
- Mengimpor stylesheet src/style.css.
- Mengimpor logo TypeScript, logo Vite, dan gambar hero.
- Mengimpor fungsi setupCounter dari src/counter.ts.
- Membuat isi HTML awal ke dalam elemen #app.

### src/counter.ts
File ini berisi fungsi sederhana untuk membuat tombol counter.

Fungsinya:
- Menyediakan logika tombol yang menambah angka setiap kali diklik.
- Digunakan sebagai contoh interaksi sederhana di awal proyek.

### src/style.css
File stylesheet utama proyek.

Fungsinya:
- Menentukan warna, layout, font, dan tampilan elemen halaman.
- Mengatur tata letak hero section, tombol counter, dan area konten utama.

## 4. Folder Assets
Folder src/assets berisi semua gambar dan ikon pendukung proyek.

### 4.1 Asset Utama
- hero.png
  - Gambar hero utama proyek.

- typescript.svg
  - Ikon logo TypeScript.

- vite.svg
  - Ikon logo Vite.

### 4.2 Folder BemVokasi
Folder ini berisi dokumentasi visual dari kegiatan atau projek terkait organisasi Bem Vokasi.

Daftar gambar:
- lofi.png
- early_live.png
- design_high_vid.png
- alur_sistem.png

### 4.3 Folder DStudio
Folder ini berisi aset visual untuk project atau tampilan website DStudio.

Daftar gambar:
- main_home_page.png
- layanan_page.png
- cms_page.png

### 4.4 Folder MDAQ
Folder ini berisi gambar yang berkaitan dengan kegiatan atau alur sistem MDAQ.

Daftar gambar:
- pengumuman_finalis.jpg
- alursistem.png
- alurbelajar.png

### 4.5 Folder MWProgram
Folder ini berisi dokumentasi visual dari program MWProgram.

Daftar gambar:
- automation.png
- kegiatan.jpg
- surat_keterangan_penerimaan_hibah.png

### 4.6 Folder Provoks
Folder ini berisi gambar yang berkaitan dengan pengurusan administratif dan dokumentasi kerja.

Daftar gambar:
- Pengurusan_google_form.png
- pengurusan_administratif_lpj.png
- pengurusan_spreadsheet.png

### 4.7 Folder Siemens
Folder ini berisi aset visual terkait proyek kerja atau proposal Siemens.

Daftar gambar:
- system_flow.png
- qualified.png
- the_proposal.png

### 4.8 Folder Thailand
Folder ini berisi gambar dokumentasi kegiatan atau konten terkait Thailand.

Daftar gambar:
- kegiatan.jpg
- google_ranking.png
- artikel.png

### 4.9 Folder sertifikasi/jpg
Folder ini berisi gambar dokumentasi sertifikasi dan pembelajaran.

Daftar gambar:
- struktur_data_.jpg
- prompt_sofware_engginer.jpg
- penggunaan_genAi.jpg
- optimalisasi_ms_365.jpg
- ms_word_kerja.jpg
- google_ads.jpg
- data_excel.jpg
- belajar_visualisasi .jpg
- belajar_data .jpg

## 5. Catatan Tambahan
- Proyek ini masih dalam bentuk template Vite yang kemudian diperkaya dengan asset portfolio.
- File src/main.ts dan src/style.css saat ini masih berisi contoh default dari Vite, sehingga dapat dikembangkan lebih lanjut menjadi tampilan portfolio yang lebih rapi dan sesuai kebutuhan.

## 6. Cara Menjalankan Proyek
1. Buka folder proyek.
2. Jalankan perintah: npm install
3. Jalankan perintah: npm run dev
4. Buka browser ke alamat lokal yang ditampilkan oleh Vite.

## 7. Ringkasan Singkat
- HTML utama: index.html
- Entry script: src/main.ts
- Interaksi sederhana: src/counter.ts
- Styling: src/style.css
- Semua gambar portfolio: src/assets
