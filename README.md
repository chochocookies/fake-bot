# 🤖 Fake-Bot: Chatbot Web Simulator

Aplikasi berbasis web statis yang mensimulasikan antarmuka percakapan robot pintar (*chatbot*). Proyek ini dirancang menggunakan front-end murni untuk mempelajari logika manipulasi DOM, penanganan input pengguna, dan pembuatan alur respons chat otomatis.

🔗 **Live Website**: [chat-bot-fake.vercel.app](https://vercel.app)

---

## 📌 Daftar Isi
1. [Fitur Utama](#-fitur-utama)
2. [Teknologi & Komposisi Kode](#-teknologi--komposisi-kode)
3. [Arsitektur Folder Proyek](#-arsitektur-folder-proyek)
4. [Mekanisme Kerja Logika Chat](#-mekanisme-kerja-logika-chat)
5. [Instalasi & Pengoperasian Lokal](#-instalasi--pengoperasian-lokal)

---

## 🚀 Fitur Utama

* **💬 Real-Time Chat Simulation**: Antarmuka responsif di mana pengguna dapat mengetikkan pesan dan menerima balasan instan dari bot simulator.
* **⚡ Instant Visual Auto-Scroll**: Kolom percakapan otomatis bergeser ke bawah secara dinamis setiap kali ada pesan baru masuk agar teks tetap fokus terpantau.
* **🎨 Modern Chat UI**: Desain tata letak yang minimalis menyerupai aplikasi pesan instan populer menggunakan komponen visual yang bersih.
* **📱 Adaptive Layout**: Tampilan yang sangat rapi dan proporsional saat diakses melalui smartphone maupun perangkat desktop.

---

## 🛠️ Teknologi & Komposisi Kode

Proyek ini dibangun menggunakan teknologi *native front-end* tanpa framework pihak ketiga yang berat demi menjaga efisiensi pemuatan halaman:

* **JavaScript** (64.4%) - Menangani logika utama penangkapan *event* kirim, kalkulasi waktu, pencetakan pesan ke layar, dan skrip balasan bot otomatis.
* **CSS3** (24.3%) - Mengatur gaya visual balon percakapan (*chat bubbles*), animasi transisi teks, warna tema, dan responsivitas grid layout.
* **HTML5** (11.3%) - Menyusun struktur elemen penampung percakapan, kolom input teks, dan tombol aksi kirim pesan.

---

## 📂 Arsitektur Folder Proyek

Berikut adalah pemetaan berkas utama di dalam repositori untuk mempermudah navigasi pengembangan komponen:

```text
fake-bot/
│
├── css/                   # Berkas stylesheet untuk estetika visual & layout chat
├── js/                    # Logika manipulasi DOM dan mesin respons chatbot
├── index.html             # Berkas HTML utama (Entry Point & kerangka aplikasi)
└── README.md              # Dokumentasi teknis proyek
```

---

## 🧠 Mekanisme Kerja Logika Chat

Karena porsi kode didominasi oleh **JavaScript (64.4%)**, sistem replika bot ini bekerja dengan metode penanganan peristiwa (*event handling*):

1. **Input Catching**: Skrip mendengarkan peristiwa ketukan tombol `Enter` atau klik pada tombol kirim untuk mengambil teks dari elemen input.
2. **DOM Injection**: Teks pengguna divalidasi, dibungkus ke dalam elemen baris baru, lalu disuntikkan (*append*) ke dalam kontainer utama obrolan.
3. **Automated Response Engine**: Setelah jeda waktu singkat (*delay simulation*), fungsi JavaScript memicu balasan otomatis terprogram untuk mensimulasikan proses berpikir bot yang nyata.

---

## 💻 Instalasi & Pengoperasian Lokal

Jika Anda ingin melakukan pengembangan atau menguji kode ini di komputer lokal Anda:

1. **Clone Repositori**
   ```bash
   git clone https://github.com
   ```
2. **Masuk ke Direktori Kerja**
   ```bash
   cd fake-bot
   ```
3. **Buka di Browser**
   * Cukup klik dua kali pada berkas `index.html`, atau gunakan ekstensi **Live Server** di Visual Studio Code untuk melihat hasil pembaruan kode Anda secara instan.

---
Dikembangkan dengan penuh logika 💻 oleh [chochocookies](https://github.com/chochocookies).
