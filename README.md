## Setup Project

### Prerequisites

- [Node.js](https://nodejs.org/) (disarankan versi 12 atau lebih tinggi)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Pasang seluruh dependencies dengan perintah berikut.
   ```shell
   npm install
   ```

## Scripts

- Build for Production:
  ```shell
  npm run build
  ```
  Script ini menjalankan webpack dalam mode production menggunakan konfigurasi `webpack.prod.js` dan menghasilkan sejumlah file build ke direktori `dist`.

- Start Development Server:
  ```shell
  npm run start-dev
  ```
  Script ini menjalankan server pengembangan webpack dengan fitur live reload dan mode development sesuai konfigurasi di`webpack.dev.js`.

- Serve:
  ```shell
  npm run serve
  ```
  Script ini menggunakan [`http-server`](https://www.npmjs.com/package/http-server) untuk menyajikan konten dari direktori `dist`.

## Struktur Project

```text
growsmart/
├── dist/                   # File hasil build untuk produksi
├── src/                    # Folder utama berisi source code proyek
│   ├── public/             # File publik seperti gambar
│   │   └── images/         # Gambar dan aset lainnya
│   ├── scripts/            # File JavaScript utama
│   │   ├── components/     # Komponen UI yang bisa digunakan ulang
│   │   ├── data/           # Data statis atau dummy
│   │   ├── pages/          # Halaman-halaman aplikasi
│   │   ├── routes/         # Pengaturan rute halaman
│   │   ├── utils/          # Fungsi bantu (utility)
│   │   ├── index.js        # Entry point utama aplikasi
│   │   └── config.js       # File konfigurasi aplikasi
│   ├── styles/             # File CSS
│   │   └── styles.css      # File CSS utama
│   └── index.html          # File HTML utama aplikasi
├── package.json            # Informasi dan dependensi proyek
├── package-lock.json       # Versi terkunci dari semua dependensi
├── README.md               # Dokumentasi proyek
├── STUDENT.txt             # Informasi mahasiswa/pengembang
├── webpack.common.js       # Konfigurasi umum Webpack
├── webpack.dev.js          # Konfigurasi Webpack untuk development
└── webpack.prod.js         # Konfigurasi Webpack untuk production
```

## Hasil Tampilan 
<img src="https://github.com/user-attachments/assets/7c78d4b0-7caa-4c40-8cb3-59dbe8608fa1" alt="Screenshot" width="600"/>
