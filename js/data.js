// ===== PENGATURAN DATA GALERI & PRODUK =====
// EDIT FILE INI UNTUK MENGUBAH ISI WEBSITE

// Daftar gambar untuk galeri di halaman utama
const galleryImages = ["assets/pengiriman-besi.jpg", "assets/stok-pipa.jpg", "assets/armada-truk.jpg", "assets/area-gudang.jpg"];

// Daftar semua produk untuk katalog
const produkData = [
  {
    id: 1,
    nama: "Semen Portland Tipe I",
    kategori: "Semen",
    deskripsiSingkat: "Semen serbaguna untuk berbagai konstruksi umum.",
    deskripsiLengkap:
      "Semen Portland Tipe I adalah semen hidrolis yang diproduksi dengan menggiling klinker yang bahan utamanya adalah kalsium silikat dan digips sebagai bahan tambahan. Cocok untuk konstruksi umum seperti gedung, jembatan, dan jalan raya.",
    spesifikasi: { Merek: "Tiga Roda", Berat: "40 kg & 50 kg", Standar: "SNI 2049:2015" },
    gambar: ["assets/produk/semen-1.jpg", "assets/produk/semen-2.jpg", "assets/produk/semen-3.jpg"],
  },
  {
    id: 2,
    nama: "Baja Ringan Kanal C",
    kategori: "Baja Ringan",
    deskripsiSingkat: "Rangka atap baja ringan yang kuat, tahan karat, dan ringan.",
    deskripsiLengkap: "Baja ringan Kanal C terbuat dari material Galvalume (Zinc-Aluminium) berkualitas tinggi. Produk ini memiliki kekuatan tarik yang tinggi, tahan terhadap karat, dan bobotnya yang ringan memudahkan pemasangan.",
    spesifikasi: { Tebal: "0.75 mm", Panjang: "6 meter", Lapisan: "AZ-100" },
    gambar: ["assets/produk/baja-1.jpg", "assets/produk/baja-2.jpg"],
  },
  {
    id: 3,
    nama: "Cat Tembok Interior",
    kategori: "Cat",
    deskripsiSingkat: "Cat tembok interior dengan daya tutup sempurna dan anti-jamur.",
    deskripsiLengkap:
      "Cat tembok interior premium yang memberikan hasil akhir matt yang elegan. Diformulasikan dengan teknologi anti-jamur dan bau yang minim, aman untuk keluarga Anda. Mudah diaplikasikan dan memiliki daya sebar yang luas.",
    spesifikasi: { Merek: "Avitex", Kemasan: "5 kg & 25 kg", "Daya Sebar": "10-12 m²/kg" },
    gambar: ["assets/produk/cat-1.jpg"],
  },
  {
    id: 4,
    nama: "Pipa PVC AW",
    kategori: "Pipa",
    deskripsiSingkat: "Pipa untuk saluran air bersih bertekanan.",
    deskripsiLengkap: "Pipa PVC kelas AW (Awet) dirancang untuk mengalirkan air bersih bertekanan tinggi. Tahan terhadap korosi dan bahan kimia ringan, serta mudah dalam penyambungan.",
    spesifikasi: { Diameter: '1/2", 3/4", 1"', Panjang: "4 meter", "Tekanan Maks.": "10 kg/cm²" },
    gambar: ["assets/produk/pipa-1.jpg", "assets/produk/pipa-2.jpg", "assets/produk/pipa-3.jpg", "assets/produk/pipa-4.jpg"],
  },
  {
    id: 5,
    nama: "Bata Ringan AAC",
    kategori: "Bata",
    deskripsiSingkat: "Bata ringan presisi tinggi, isolator panas dan suara.",
    deskripsiLengkap: "Bata ringan Autoclaved Aerated Concrete (AAC) adalah material dinding yang ringan namun kuat. Memiliki sifat insulasi termal dan suara yang sangat baik, membantu menjaga suhu ruangan tetap sejuk dan tenang.",
    spesifikasi: { Ukuran: "60x20x10 cm", "Kuat Tekan": "> 4.0 N/mm²", "Isi per m³": "83 buah" },
    gambar: ["assets/produk/bata-ringan-1.jpg"],
  },
  {
    id: 6,
    nama: "Genteng Metal Pasir",
    kategori: "Atap",
    deskripsiSingkat: "Atap metal ringan dengan lapisan batuan.",
    deskripsiLengkap: "Genteng metal pasir menawarkan kekuatan metal dengan estetika genteng konvensional. Lapisan pasirnya berfungsi meredam suara hujan dan melindungi dari panas matahari. Ringan, anti bocor, dan bebas perawatan.",
    spesifikasi: { Tebal: "0.30 mm", "Ukuran Efektif": "80 x 80 cm", Warna: "Merah, Hitam, Coklat" },
    gambar: ["assets/produk/genteng-1.jpg", "assets/produk/genteng-2.jpg"],
  },
];
