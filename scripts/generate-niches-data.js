import fs from 'node:fs';
import path from 'node:path';

const niches = [
  {
    id: "niche-dealer-otomotif",
    slug: "dealer-otomotif",
    industryName: "Dealer Mobil & Showroom Kendaraan",
    category: "Otomotif & Transportasi",
    targetMarket: "Dealer Resmi Mobil Baru, Showroom Mobil Bekas Berkualitas, Rental Komersial",
    headline: "Website Dealer Otomotif Modern: Ubah Traffic Iklan Menjadi Booking Test Drive & SPK Riil",
    fieldNote: {
      tag: "TEMUAN LAPANGAN SALES",
      content: "Banyak sales dealer membagikan brosur PDF 30MB lewat WhatsApp. Calon pembeli yang membuka lewat koneksi 4G di jalan sering gagal download dan langsung beralih ke dealer lain. Web katalog interaktif memotong friksi ini hingga 0 detik."
    },
    conversionFlow: [
      { step: "01", label: "Iklan Ads & SEO", detail: "Target pencarian tipe mobil per domisili kota" },
      { step: "02", label: "Filter & Simulasi", detail: "Pilih transmisi, DP & hitung angsuran instan" },
      { step: "03", label: "Kualifikasi Data", detail: "Pilih unit, warna & preferensi leasing bank" },
      { step: "04", label: "WhatsApp Handoff", detail: "Lead masuk ke sales cabang terdekat beserta simulasi" }
    ],
    painPoints: [
      {
        title: "Brosur PDF Lambat & Menghabiskan Kuota Pembeli",
        description: "File PDF pricelist puluhan megabyte sering macet di HP prospek, menyebabkan bounce rate iklan di atas 65% sebelum mereka melihat promo."
      },
      {
        title: "Sales Sulit Melacak Efektivitas Sumber Iklan",
        description: "Pesan WhatsApp yang masuk sering anonim tanpa konteks iklan Meta atau Google Ads mana yang menghasilkan lead tersebut."
      },
      {
        title: "Katalog Unit Berantakan di Layar Smartphone",
        description: "Website showroom lawas tidak responsif, tabel perbandingan spesifikasi mobil terpotong, dan foto interior tidak bisa dizoom dengan jernih."
      }
    ],
    keyFeatures: [
      {
        title: "Filter Cepat Sub-Detik Tipe, Transmisi & Rentang Budget",
        description: "Arsitektur static edge memungkinkan prospek menyaring ratusan unit mobil dalam hitungan milidetik tanpa reload halaman."
      },
      {
        title: "Kalkulator Simulasi Kredit & Estimasi DP Interaktif",
        description: "Calon pembeli bisa mengatur tenor (1-5 tahun) dan DP fleksibel dengan perhitungan bunga leasing transparan langsung di layar."
      },
      {
        title: "Smart WhatsApp Routing Berdasarkan Domisili Cabang",
        description: "Tombol kontak otomatis menghubungkan calon pembeli ke sales supervisor cabang kota terdekat dengan pesan teks pre-filled rapi."
      },
      {
        title: "Integrasi Pelacakan Server-Side Meta CAPI & Google Ads",
        description: "Data konversi booking test drive terlacak akurat 100% tanpa terblokir proteksi privasi browser iOS Safari."
      }
    ],
    techRationale: "Kalkulator simulasi dan filter unit wajib berjalan client-side tanpa roundtrip server agar prospek betah bereksperimen dengan berbagai skenario DP mobil.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 5,9jt",
    schemaType: "AutomotiveBusiness",
    voucherCode: "ONG-NICHE-OTOMOTIF"
  },
  {
    id: "niche-rental-mobil-bus-pariwisata",
    slug: "rental-mobil-bus-pariwisata",
    industryName: "Rental Mobil Mewah & Bus Pariwisata",
    category: "Otomotif & Transportasi",
    targetMarket: "Rental HiAce & Alphard, Sewa Bus Medium/Besar Pariwisata, Wedding Car Premium",
    headline: "Katalog Armada Rental Terpercaya: Amankan Booking Wisata, Drop Bandara & Kontrak Korporat",
    fieldNote: {
      tag: "CATATAN ARUS KAS",
      content: "Penyewa rombongan dan tamu VIP korporat butuh kepastian foto asli kabin armada, legalitas izin pariwisata, dan SOP driver. Brosur statis yang jelas meningkatkan rasio pelunasan DP sewa tanpa tawar-menawar alot."
    },
    conversionFlow: [
      { step: "01", label: "Cari Rute & Armada", detail: "Prospek tentukan tanggal sewa & kota tujuan" },
      { step: "02", label: "Cek Foto Interior", detail: "Inspeksi fasilitas kursi, audio, USB & bagasi" },
      { step: "03", label: "Kalkulasi Paket", detail: "Pilih paket all-in (BBM + Tol + Sopir)" },
      { step: "04", label: "Booking Slot WA", detail: "Verifikasi ketersediaan unit & instruksi transfer DP" }
    ],
    painPoints: [
      {
        title: "Calon Penyewa Ragu Terhadap Kondisi Nyata Unit",
        description: "Banyak rental memakai foto brosur pabrik yang tidak mencerminkan interior asli kendaraan, membuat pelanggan korporat ragu memesan."
      },
      {
        title: "CS Kelelahan Menjawab Pertanyaan Berulang Soal Tarif",
        description: "Pertanyaan 'Drop Juanda/Soetta berapa?' atau 'Sewa HiAce ke Malang sehari berapa?' terus berulang tanpa halaman referensi tarif resmi."
      },
      {
        title: "Jadwal Armada Tumpang Tindih di Musim Liburan",
        description: "Pencatatan manual di buku agenda berisiko double booking unit bus di tanggal merah dan peak season."
      }
    ],
    keyFeatures: [
      {
        title: "Showcase Galeri Interior & Eksterior 360° Realistis",
        description: "Foto asli kabin captain seat, legroom, fasilitas charging port, dan bagasi koper dengan pemuatan instan WebP."
      },
      {
        title: "Tabel Transparan Tarif Sewa Lepas Kunci & Driver",
        description: "Rincian harga dalam/luar kota, durasi sewa 12/24 jam, dan opsi paket all-in bahan bakar serta tol yang jelas."
      },
      {
        title: "Formulir Cek Ketersediaan Armada Terintegrasi WhatsApp",
        description: "Pengunjung langsung mengirimkan draft tanggal sewa, jenis kendaraan, dan titik jemput dalam format siap kunci jadwal."
      },
      {
        title: "Halaman Legalitas Usaha & Asuransi Penumpang Resmi",
        description: "Menampilkan izin Kemenhub, sertifikat uji KIR berkala, dan jaminan proteksi asuransi Jasa Raharja untuk trust korporat."
      }
    ],
    techRationale: "Struktur layout visual kartu armada didesain optimal untuk satu jempol di smartphone, karena 88% pemesanan rental mobil dilakukan saat perjalanan via HP.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 3,5jt",
    schemaType: "AutomotiveBusiness",
    voucherCode: "ONG-NICHE-RENTAL"
  },
  {
    id: "niche-bengkel-mobil-body-repair",
    slug: "bengkel-mobil-body-repair",
    industryName: "Bengkel Mobil, Body Repair & Modifikasi",
    category: "Otomotif & Transportasi",
    targetMarket: "Bengkel Cat Oven, Ketok Magic / PDR, Spesialis Spooring Balancing, Audio & Variasi",
    headline: "Website Bengkel Otomotif Profesional: Tampilkan Hasil Kerja Sebelum-Sesudah & Estimasi Biaya",
    fieldNote: {
      tag: "STUDIO NOTE",
      content: "Pemilik mobil mewah sangat selektif memilih bengkel body repair. Menampilkan video close-up ruang cat oven dan perbandingan foto before-after panel lecet menghapus keraguan soal kualitas warna belang."
    },
    conversionFlow: [
      { step: "01", label: "Keluhan Kendaraan", detail: "Prospek cari solusi lecet, baret, atau kaki-kaki" },
      { step: "02", label: "Lihat Bukti Kerja", detail: "Cek slider perbandingan Before & After cat oven" },
      { step: "03", label: "Kirim Foto Kerusakan", detail: "Upload foto baret panel via WhatsApp estimasi" },
      { step: "04", label: "Jadwal Masuk Bengkel", detail: "Penerimaan estimasi biaya dan booking slot antrean" }
    ],
    painPoints: [
      {
        title: "Konsumen Takut Cat Belang dan Hasil Pengerjaan Kasar",
        description: "Kurangnya bukti dokumentasi proses oven dan garansi pengerjaan membuat pemilik mobil enggan datang ke bengkel non-resmi."
      },
      {
        title: "Ketidakpastian Estimasi Biaya Perbaikan Baret & Penyok",
        description: "Pelanggan enggan datang ke lokasi hanya untuk menanyakan kisaran ongkos perbaikan per panel."
      },
      {
        title: "Antrean Menumpuk Tanpa Sistem Reservasi Awal",
        description: "Bengkel sering over-capacity di akhir pekan dan sepi di hari kerja karena tidak memiliki jadwal reservasi servis terstruktur."
      }
    ],
    keyFeatures: [
      {
        title: "Slider Interaktif Sebelum & Sesudah Pengerjaan (Before-After)",
        description: "Komponen geser visual resolusi tinggi yang memperlihatkan restorasi cat mobil dari kondisi baret parah hingga mulus mengkilap."
      },
      {
        title: "Kanal Estimasi Cepat via Foto Kerusakan WhatsApp",
        description: "Tombol interaktif memandu pelanggan memotret bagian baret dan mengirimkannya langsung ke mekanik kepala untuk estimasi biaya."
      },
      {
        title: "Tabel Spesifikasi Fasilitas Ruang Oven & Merek Cat",
        description: "Penjelasan transparan mengenai bahan cat standar eropa (Spies Hecker/Sikkens) dan fasilitas spray booth bebas debu."
      },
      {
        title: "Peta Lokasi Google Maps & Panduan Rute Bengkel",
        description: "Integrasi peta navigasi akurat memudahkan mobil derek atau pelanggan menemukan jalan masuk bengkel tanpa tersesat."
      }
    ],
    techRationale: "Slider komparasi Before-After direkayasa dengan CSS hardware-accelerated agar geseran foto terasa natural tanpa lag pada layar sentuh ponsel.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 3,5jt",
    schemaType: "AutoRepair",
    voucherCode: "ONG-NICHE-BENGKEL"
  },
  {
    id: "niche-alat-berat-mesin",
    slug: "alat-berat-mesin",
    industryName: "Distributor Alat Berat & Mesin Industri",
    category: "Industri, Manufaktur & Mesin",
    targetMarket: "Distributor Mesin Pabrik, Supplier Excavator/Wheel Loader, Rental Alat Konstruksi B2B",
    headline: "Katalog Digital Alat Berat B2B: Presentasi Data Sheet Lengkap Siap Menembus Tender Proyek",
    fieldNote: {
      tag: "OBSERVASI PENGADAAN B2B",
      content: "Manajer pengadaan tender (procurement officer) tidak butuh gimik animasi berlebihan. Mereka mencari lembar spesifikasi daya mesin (kW/HP), kapasitas angkut tonase, ketersediaan spare-part, dan sertifikasi uji kelayakan."
    },
    conversionFlow: [
      { step: "01", label: "Spesifikasi Mesin", detail: "Pencarian kapasitas tonase & tipe operasi industri" },
      { step: "02", label: "Unduh Data Sheet", detail: "Download brosur teknis PDF resmi dalam 1-klik" },
      { step: "03", label: "Permintaan RFQ", detail: "Isi form kuotasi harga proyek & kebutuhan suku cadang" },
      { step: "04", label: "Kordinasi Tim B2B", detail: "Penerimaan draft penawaran resmi dari direktur teknis" }
    ],
    painPoints: [
      {
        title: "Data Sheet Teknis Tercecer dan Sulit Diakses Tim Proyek",
        description: "Pengambil keputusan tender sering beralih ke vendor lain jika spesifikasi dimensi dan torsi mesin tidak tersedia secara instan di web."
      },
      {
        title: "Website Ritel Biasa Tidak Cocok untuk Transaksi B2B Miliaran",
        description: "Sistem e-commerce biasa membingungkan untuk pembelian mesin industri yang membutuhkan sistem Request for Quotation (RFQ)."
      },
      {
        title: "Inquiry Tender Proyek Sering Terlambat Ditindaklanjuti",
        description: "Form inquiry email kantor sering masuk ke folder spam sehingga peluang proyek bernilai ratusan juta terbuang percuma."
      }
    ],
    keyFeatures: [
      {
        title: "Katalog Mesin dengan Tabel Matriks Spesifikasi Mendalam",
        description: "Tabel teknis komprehensif mencakup kapasitas mesin, konsumsi bahan bakar, daya angkut, dan dimensi operasional."
      },
      {
        title: "Fitur 1-Klik Download Data Sheet PDF Resmi Tanpa Form Rumit",
        description: "Memberikan kemudahan bagi engineer proyek untuk menyimpan dan mencetak spesifikasi mesin guna lampiran tender."
      },
      {
        title: "Formulir Request for Quotation (RFQ) Terhubung ke Manajemen",
        description: "Pengajuan penawaran harga resmi otomatis diteruskan ke WhatsApp Direksi dan email sales B2B secara simultan."
      },
      {
        title: "Daftar Sertifikasi ISO, Uji Kelayakan & Garansi Suku Cadang",
        description: "Membangun kredibilitas keaslian unit dengan menampilkan sertifikat distributor resmi dan jaminan ketersediaan spare parts."
      }
    ],
    techRationale: "Rendering halaman statis (SSG) memastikan tabel spesifikasi teknis ribuan baris termuat dalam 0.2 detik bahkan saat dibuka di area tambang/proyek terpencil.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 8,9jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-ALATBERAT"
  },
  {
    id: "niche-pabrik-manufaktur-b2b",
    slug: "pabrik-manufaktur-b2b",
    industryName: "Pabrikasi & Manufaktur Industri B2B",
    category: "Industri, Manufaktur & Mesin",
    targetMarket: "Pabrik Plastik Injeksi, Logam & Spareparts, Konveksi Garmen Industri, Pemrosesan Kimia",
    headline: "Profil Digital Pabrik Skala Industri: Tampilkan Kapasitas Produksi & Amankan Kontrak Supply B2B",
    fieldNote: {
      tag: "CATATAN VENDOR SUPPLY",
      content: "Perusahaan multinasional dan BUMN mewajibkan audit legalitas pabrik, luas area produksi, kapasitas mesin per bulan, dan standar keselamatan K3 sebelum mengundang vendor ke putaran tender tertutup."
    },
    conversionFlow: [
      { step: "01", label: "Audit Kredibilitas", detail: "Cek legalitas PT, NIB, kapasitas mesin & sertifikasi" },
      { step: "02", label: "Review Portofolio", detail: "Lihat contoh komponen hasil produksi massal" },
      { step: "03", label: "Ajukan Sampul MoU", detail: "Isi form Minimum Order Quantity (MOQ) & spek custom" },
      { step: "04", label: "Kunjungan Pabrik", detail: "Jadwalkan factory visit bersama tim procurement" }
    ],
    painPoints: [
      {
        title: "Tampilan Website Terlihat Kuno Sejak Era 2010",
        description: "Pabrik dengan aset mesin miliaran sering kali kehilangan tender hanya karena website resminya tampak usang dan tidak dirawat."
      },
      {
        title: "Calon Klien Tidak Tahu Batas Minimum Order (MOQ)",
        description: "Sales pabrik menghabiskan waktu menolak pesanan eceran karena tidak ada kejelasan batas kapasitas pesanan industri di website."
      },
      {
        title: "Dokumentasi Mesin dan Pabrik Tidak Menunjukkan Skala Sebenarnya",
        description: "Foto seadanya dari kamera ponsel gagal menggambarkan kemegahan fasilitas clean room atau lini perakitan otomatis pabrik."
      }
    ],
    keyFeatures: [
      {
        title: "Virtual Showcase Fasilitas Mesin & Lini Produksi Otomatis",
        description: "Presentasi profesional area pabrik, mesin CNC, lini injeksi, dan gudang logistik dengan fotografi arsitektural tajam."
      },
      {
        title: "Spesifikasi Jelas Minimum Order Quantity (MOQ) & Custom Tolling",
        description: "Panduan kapasitas output bulanan dan alur pembuatan prototipe sampel sebelum pesanan produksi massal."
      },
      {
        title: "Download Legalitas Perusahaan & Sertifikasi Manajemen Mutu",
        description: "Paket satu berkas berisi NIB, NPWP Perusahaan, Sertifikasi ISO 9001/14001, dan sertifikat AMDAL kelayakan lingkungan."
      },
      {
        title: "Formulir Penjadwalan Factory Visit & Audit Pabrik B2B",
        description: "Memudahkan auditor korporat dan purchasing manager memesan tanggal kunjungan verifikasi fasilitas pabrik."
      }
    ],
    techRationale: "Website pabrik B2B diprioritaskan pada struktur informasi hierarkis monografik agar file company profile dapat dicetak langsung ke PDF secara rapi.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 6,9jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-PABRIK"
  },
  {
    id: "niche-percetakan-packaging-kemasan",
    slug: "percetakan-packaging-kemasan",
    industryName: "Percetakan Kemasan, Dus Box & Offset",
    category: "Industri, Manufaktur & Mesin",
    targetMarket: "Pabrik Dus Kemasan Makanan, Cetak Box Skincare Hardbox, Offset Printing Korporat, Standing Pouch",
    headline: "Katalog Cetak Kemasan & Box Custom: Bantu Brand Owner Memilih Bahan, Pisau Pond & MOQ",
    fieldNote: {
      tag: "REALITA INDUSTRI CETAK",
      content: "Brand owner pemula sering bingung membedakan kertas duplex, ivory, corrugated, dan finishing hot print foil emas. Katalog interaktif dengan visual sampel fisik memangkas bolak-balik tanya jawab hingga 70%."
    },
    conversionFlow: [
      { step: "01", label: "Pilih Tipe Kemasan", detail: "Dus kosmetik, box makanan, corrugated box, atau pouch" },
      { step: "02", label: "Tentukan Bahan", detail: "Pilih gramatur kertas (Ivory 300g, Duplex, Kraft)" },
      { step: "03", label: "Hitung Estimasi", detail: "Simulasi harga berdasarkan kuantiti 500, 1000, 5000 pcs" },
      { step: "04", label: "Kirim Pola Dieline", detail: "Handoff ke tim pra-cetak untuk proofing warna digital" }
    ],
    painPoints: [
      {
        title: "Pelanggan Buta Teknis Mengenai Jenis Bahan dan Ketebalan",
        description: "Banyak pesanan retur atau komplain karena klien membayangkan hasil akhir yang berbeda dengan jenis kertas yang dipilih."
      },
      {
        title: "CS Kelelahan Menghitung Estimasi Harga Pisau Pond dan Finishing",
        description: "Rumus kalkulasi cetak offset yang rumit membuat prospek menunggu penawaran terlalu lama hingga akhirnya memesan di tempat lain."
      },
      {
        title: "File Desain Konsumen Tidak Siap Cetak (Bukan Format CMYK)",
        description: "Ketiadaan panduan dieline dan petunjuk bleed warna memperlambat proses pra-cetak hingga berhari-hari."
      }
    ],
    keyFeatures: [
      {
        title: "Panduan Interaktif Jenis Kertas, Finishing Laminasi & Foil",
        description: "Visualisasi perbedaan laminasi doff, glossy, spot UV, emboss, dan hot print emas untuk mengedukasi brand owner."
      },
      {
        title: "Pusat Unduhan Pola Pisau Pond (Dieline Template) Siap Pakai",
        description: "Menyediakan template file Adobe Illustrator & PDF gratis untuk ukuran box standar agar desain pelanggan langsung pas."
      },
      {
        title: "Kalkulator Estimasi Cepat Berdasarkan Jumlah Cetak (Qty Tier)",
        description: "Memberi gambaran jelas efisiensi harga per pcs saat memesan kuantiti lebih besar (misal 1.000 vs 5.000 pcs)."
      },
      {
        title: "Form Request Cetak Sampel Mockup Fisik Terintegrasi WhatsApp",
        description: "Fasilitas pemesanan contoh dummy kotak sebelum approval cetak massal ribuan lembar."
      }
    ],
    techRationale: "Visual galeri sampel tekstur kertas menggunakan kompresi AVIF ultra-ringan agar serat kertas terlihat realistis tanpa memperlambat loading browser.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 4,9jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-KEMASAN"
  },
  {
    id: "niche-developer-properti",
    slug: "developer-properti",
    industryName: "Pengembang Properti & Real Estate",
    category: "Properti, Konstruksi & Arsitektur",
    targetMarket: "Developer Perumahan Komersial, Cluster Hunian Mewah, Villa Resort, Apartemen Modern",
    headline: "Landing Page Properti Berkonversi Tinggi: Maksimalkan Leads Survey Lokasi & Booking Fee",
    fieldNote: {
      tag: "INSIGHT MARKETING GALLERY",
      content: "Calon pembeli rumah tidak membeli dinding bata; mereka membeli gaya hidup, rasa aman keluarga, dan aksesibilitas ke gerbang tol atau sekolah. Foto denah 2D yang buram adalah pembunuh konversi nomor satu."
    },
    conversionFlow: [
      { step: "01", label: "Iklan Target Lokasi", detail: "Traffic mencari rumah di radius kota strategis" },
      { step: "02", label: "Pilih Tipe Hunian", detail: "Cek denah, luas tanah/bangunan & virtual tour" },
      { step: "03", label: "Simulasi Angsuran", detail: "Hitung skema KPR bank rekanan sesuai gaji bulanan" },
      { step: "04", label: "Booking Survey", detail: "Kunci jam kunjungan marketing gallery via WhatsApp" }
    ],
    painPoints: [
      {
        title: "Foto Render 3D Berat Bikin Pengunjung Mental Sebelum Membaca",
        description: "Aset render arsitektur resolusi tinggi yang tidak dioptimasi membuat website loading lebih dari 8 detik di smartphone calon pembeli."
      },
      {
        title: "Leads Masuk Banyak Tetapi Tidak Lolos Kualifikasi Bank",
        description: "Marketing gallery kebanjiran chat yang ternyata tidak sanggup membayar uang muka atau tidak memenuhi syarat BI Checking."
      },
      {
        title: "Informasi Denah dan Fasilitas Kawasan Membingungkan",
        description: "Calon pembeli bingung membayangkan tata letak kamar tidur dan jarak tempuh ke fasilitas umum jika peta kawasan tidak interaktif."
      }
    ],
    keyFeatures: [
      {
        title: "Galeri Render 3D & Tur Virtual Responsif Berkecepatan Tinggi",
        description: "Optimasi gambar bertingkat yang menampilkan kemewahan fasad rumah dan pencahayaan alami tanpa jeda buffering."
      },
      {
        title: "Kalkulator Simulasi KPR Interaktif Bank Terkemuka",
        description: "Hitung simulasi angsuran bulanan berdasarkan uang muka (DP) dan masa kredit 10-25 tahun secara transparan."
      },
      {
        title: "Peta Kawasan Interaktif & Jarak Tempuh ke Fasilitas Vital",
        description: "Visualisasi titik gerbang tol, stasiun KRL, rumah sakit terdekat, dan pusat perbelanjaan dengan estimasi waktu tempuh riil."
      },
      {
        title: "Formulir Booking Jadwal Kunjungan Survey Lokasi Terpadu",
        description: "Memudahkan calon pembeli mengunci jadwal survey akhir pekan bersama sales in-house proyek."
      }
    ],
    techRationale: "Foto aset properti dimuat dengan teknik dynamic responsive picture srcset, menyesuaikan piksel layar perangkat agar hemat kuota dan super tajam.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 5,9jt",
    schemaType: "RealEstateAgent",
    voucherCode: "ONG-NICHE-PROPERTI"
  },
  {
    id: "niche-kontraktor-arsitek",
    slug: "kontraktor-arsitek",
    industryName: "Kontraktor Bangunan & Desain Interior",
    category: "Properti, Konstruksi & Arsitektur",
    targetMarket: "Jasa Bangun Rumah Mewah, Kontraktor Gedung Komersial, Studio Arsitektur & Interior",
    headline: "Showcase Portofolio Konstruksi & Interior: Yakinkan Klien Bernilai Ratusan Juta Hingga Miliaran",
    fieldNote: {
      tag: "SURVEI KREDIBILITAS",
      content: "Klien proyek konstruksi memiliki ketakutan terbesar: kontraktor kabur di tengah jalan atau anggaran membengkak 200%. Menampilkan rekam jejak progres fisik dan transparansi RAB meredakan kecemasan ini."
    },
    conversionFlow: [
      { step: "01", label: "Eksplorasi Gaya", detail: "Prospek melihat gaya interior modern kontemporer" },
      { step: "02", label: "Inspeksi Progres", detail: "Lihat dokumentasi tahapan struktur hingga finishing" },
      { step: "03", label: "Estimasi Budget", detail: "Kalkulasi kisaran biaya bangun per meter persegi" },
      { step: "04", label: "Konsultasi Layout", detail: "Diskusi blueprint awal denah rumah via WhatsApp" }
    ],
    painPoints: [
      {
        title: "Portofolio Berserakan di Medsos Tanpa Penjelasan Anggaran",
        description: "Feed Instagram tidak bisa menyajikan detail spesifikasi material, luas bangunan, dan rentang biaya proyek secara rapi dan terstruktur."
      },
      {
        title: "Calon Klien Ragu dengan Legalitas Izin Usaha dan Sertifikasi",
        description: "Banyak pemilik rumah trauma dengan pemborong nakal dan membutuhkan bukti badan hukum PT serta sertifikat keahlian kerja (SKA)."
      },
      {
        title: "Sulit Mengedukasi Klien Soal Standar Biaya Material",
        description: "Klien sering membandingkan harga dengan tukang harian murah tanpa memahami risiko keretakan struktur dan kebocoran atap."
      }
    ],
    keyFeatures: [
      {
        title: "Galeri Portofolio Proyek Terkurasi Lengkap dengan Rincian Spek",
        description: "Dokumentasi foto profesional dengan informasi luas tanah, lokasi kota, durasi pengerjaan, dan material yang digunakan."
      },
      {
        title: "Kalkulator Estimasi Biaya Bangun / Renovasi per Meter Persegi",
        description: "Alat bantu interaktif untuk memberi gambaran kisaran budget (Paket Standard, Premium, hingga Luxury) secara realistis."
      },
      {
        title: "Halaman Legalitas Usaha, SKA Kontraktor & Daftar Suplier Resmi",
        description: "Menampilkan izin usaha konstruksi, nomor registrasi asosiasi, dan garansi pemeliharaan struktur purna jual."
      },
      {
        title: "Unduhan Company Profile PDF Resmi 1-Klik",
        description: "Memudahkan komite pengadaan gedung kantor atau pemilik rumah membagikan profil kontraktor ke keluarga/rekan bisnis."
      }
    ],
    techRationale: "Modul galeri proyek menggunakan lazy loading cerdas dengan layout masonry yang terkunci aspek rasionya untuk mencegah Cumulative Layout Shift (CLS = 0).",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 4,9jt",
    schemaType: "GeneralContractor",
    voucherCode: "ONG-NICHE-KONSTRUKSI"
  },
  {
    id: "niche-klinik-kesehatan",
    slug: "klinik-kesehatan",
    industryName: "Klinik Medis, Dokter & Rumah Sakit",
    category: "Kesehatan, Medis & Farmasi",
    targetMarket: "Klinik Pratama/Utama, Dokter Spesialis, Klinik Gigi Estetika, Laboratorium Diagnostik",
    headline: "Portal Layanan Medis & Jadwal Dokter: Permudah Pasien Menemukan Jadwal & Janji Temu Cepat",
    fieldNote: {
      tag: "PERSPEKTIF PASIEN",
      content: "Saat pasien sakit atau anak demam di malam hari, mereka butuh informasi jadwal dokter spesialis dan ketersediaan IGD dalam hitungan detik. Struktur web yang berbelit-belit membuat pasien segera beralih ke RS lain."
    },
    conversionFlow: [
      { step: "01", label: "Cari Poli / Keluhan", detail: "Pasien mencari dokter spesialis anak, gigi, atau bedah" },
      { step: "02", label: "Cek Jam Praktik", detail: "Lihat tabel jadwal dokter spesifik per hari kerja" },
      { step: "03", label: "Cek Asuransi Rekanan", detail: "Verifikasi kartu BPJS, Prudential, Allianz, dll." },
      { step: "04", label: "Reservasi Antrean", detail: "Kunci nomor pendaftaran langsung ke admin poli WA" }
    ],
    painPoints: [
      {
        title: "Pasien Frustrasi Mencari Jam Praktik Dokter yang Akurat",
        description: "Jadwal dokter yang tidak terbarui di website membuat pasien kecewa saat tiba di klinik namun dokternya sedang cuti."
      },
      {
        title: "Saluran Telepon Pendaftaran Sering Nada Sibuk",
        description: "Pasien malas mengantre telepon manual hanya untuk menanyakan ketersediaan kamar rawat atau slot antrean poli."
      },
      {
        title: "Informasi Rekanan Asuransi & BPJS Tidak Transparan",
        description: "Banyak pasien mengurungkan niat berobat karena tidak tahu apakah polis asuransi swasta mereka bisa cashless di klinik tersebut."
      }
    ],
    keyFeatures: [
      {
        title: "Tabel Jadwal Dokter Realtime dengan Filter Hari & Spesialisasi",
        description: "Pencarian mudah berdasarkan nama dokter, poli spesialis, dan hari praktik dengan indikator status kehadiran dokter."
      },
      {
        title: "Reservasi Janji Temu 1-Klik Langsung ke WhatsApp Pendaftaran",
        description: "Formulir ringkas menghasilkan pesan teks format resmi: nama pasien, no NIK/asuransi, dokter tujuan, dan jam kedatangan."
      },
      {
        title: "Daftar Lengkap Asuransi Rekanan Cashless & Alur Klaim",
        description: "Direktori logo asuransi swasta dan panduan jelas alur administrasi rawat jalan serta rawat inap."
      },
      {
        title: "Optimasi SEO Medis Lokal (Schema.org MedicalBusiness)",
        description: "Meningkatkan peringkat klinik pada pencarian 'klinik dokter spesialis terdekat' di Google Maps dan Search."
      }
    ],
    techRationale: "Data jadwal dokter disimpan dalam struktur data statis berkecepatan tinggi, memastikan halaman tetap dapat diakses saat terjadi lonjakan traffic darurat.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 4,9jt",
    schemaType: "MedicalBusiness",
    voucherCode: "ONG-NICHE-MEDIS"
  },
  {
    id: "niche-distributor-alkes-farmasi",
    slug: "distributor-alkes-farmasi",
    industryName: "Distributor Alat Kesehatan & Farmasi",
    category: "Kesehatan, Medis & Farmasi",
    targetMarket: "Distributor Resmi Alkes RS, Suplier Bahan Baku Farmasi, Apotek Ritel Berjaringan, Produsen Herbal",
    headline: "Katalog Distribusi Alkes & Farmasi B2B: Kepatuhan Izin Edar Kemenkes & Kemudahan Order Faskes",
    fieldNote: {
      tag: "AUDIT REGULASI MEDIS",
      content: "Direktur rumah sakit dan apoteker penanggung jawab (APJ) wajib memastikan distributor memiliki Izin Penyalur Alat Kesehatan (IPAK/IDAK) dan sertifikat CDAKB yang sah sebelum menerbitkan Purchase Order."
    },
    conversionFlow: [
      { step: "01", label: "Cari Kategori Alkes", detail: "Alat diagnostik, consumable bedah, atau reagen lab" },
      { step: "02", label: "Verifikasi Izin AKL/AKD", detail: "Inspeksi nomor izin edar resmi Kemenkes RI" },
      { step: "03", label: "Kirim Surat Pesanan", detail: "Unggah draft SP resmi dengan cap apoteker/RS" },
      { step: "04", label: "Faktur & Pengiriman", detail: "Koordinasi kontrak supply berkala bersama tim logistik" }
    ],
    painPoints: [
      {
        title: "Verifikasi Izin Edar Kemenkes Sulit Ditemukan oleh Tim Faskes",
        description: "Rumah sakit menolak bertransaksi dengan suplier yang tidak mencantumkan nomor registrasi AKL/AKD secara terbuka."
      },
      {
        title: "Order Grosir Manual Rentan Salah Input Kode Produk",
        description: "Pemesanan jarum suntik, benang operasi, atau reagen melalui chat manual sering salah ukuran karena kemiripan kode part."
      },
      {
        title: "Ketiadaan Akses Unduh Brosur Teknis untuk Tim Pengadaan",
        description: "Engineer elektromedik rumah sakit kesulitan mengecek daya listrik dan kalibrasi alat tanpa dokumen data sheet resmi."
      }
    ],
    keyFeatures: [
      {
        title: "Showcase Nomor Registrasi Izin Edar Kemenkes (AKL/AKD) Resmi",
        description: "Setiap item produk dilengkapi nomor izin edar yang dapat diverifikasi langsung ke basis data pemerintah."
      },
      {
        title: "Katalog Terstruktur Berdasarkan Kategori Standar Faskes",
        description: "Pengelompokan jelas: Elektromedik, Non-Elektromedik Steril/Non-Steril, Reagen Diagnostik, dan Consumable Habis Pakai."
      },
      {
        title: "Portal Pengajuan Surat Pesanan (SP) & Formulir RFQ Grosir",
        description: "Alur khusus pengadaan faskes untuk mengunggah dokumen Purchase Order resmi dan NPWP instansi."
      },
      {
        title: "Sertifikasi CDAKB & Standar Penyimpanan Gudang Dingin",
        description: "Menampilkan dokumentasi suhu gudang terkontrol dan SOP distribusi aman untuk menjamin mutu produk farmasi."
      }
    ],
    techRationale: "Arsitektur katalog B2B dilengkapi fitur pencarian instan berdasarkan kode SKU dan izin edar tanpa membutuhkan database eksternal yang lambat.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 6,9jt",
    schemaType: "Pharmacy",
    voucherCode: "ONG-NICHE-ALKES"
  },
  {
    id: "niche-kantor-hukum-advokat",
    slug: "kantor-hukum-advokat",
    industryName: "Kantor Hukum, Advokat & Notaris",
    category: "Jasa Profesional, Hukum & Konsultan",
    targetMarket: "Law Firm Korporasi, Advokat Litigasi & Arbitrase, Pengacara Pajak & Kepailitan, Kantor Notaris PPAT",
    headline: "Website Law Firm Berwibawa: Bangun Kepercayaan Klien Korporat & Lindungi Reputasi Firma",
    fieldNote: {
      tag: "KODE ETIK PROFESI",
      content: "Advokat terikat kode etik larangan mengiklankan diri secara bombastis. Website kantor hukum harus mengedepankan wibawa intelektual, ketajaman opini hukum, dan rekam jejak partner tanpa kesan murahan."
    },
    conversionFlow: [
      { step: "01", label: "Tinjau Reputasi", detail: "Klien korporat membaca profil senior partners & credentials" },
      { step: "02", label: "Pilih Bidang Hukum", detail: "Hukum bisnis, M&A, ketenagakerjaan, atau sengketa tanah" },
      { step: "03", label: "Ajukan Legal Brief", detail: "Isi ringkasan perkara dengan jaminan kerahasiaan" },
      { step: "04", label: "Jadwal Retainer", detail: "Pertemuan konsultasi awal dan penandatanganan NDA" }
    ],
    painPoints: [
      {
        title: "Desain Web Amatir Menurunkan Persepsi Reputasi Firma",
        description: "Tampilan website yang acak-acakan membuat klien korporat ragu membayar tarif retainer profesional firma hukum Anda."
      },
      {
        title: "Klien Korporat Butuh Kepastian Rekam Jejak Partner Hukum",
        description: "Dewan direksi perusahaan mencari latar belakang pendidikan partner, keanggotaan PERADI, dan pengalaman menangani perkara besar."
      },
      {
        title: "Kekhawatiran Terhadap Kerahasiaan Informasi Masalah Hukum",
        description: "Klien enggan menceritakan duduk perkara jika formulir konsultasi tidak memiliki jaminan kerahasiaan hubungan advokat-klien."
      }
    ],
    keyFeatures: [
      {
        title: "Tipografi Editorial Monografik Berwibawa Khas Law Firm Global",
        description: "Sentuhan desain serif klasik dengan kontras warna tenang yang memancarkan integritas, ketenangan, dan kecerdasan hukum."
      },
      {
        title: "Profil Mendalam Partner Hukum, Publikasi Opini & Kasus Terpilih",
        description: "Showcase keahlian spesifik para partner lengkap dengan artikel ulasan regulasi perundang-undangan terbaru."
      },
      {
        title: "Formulir Legal Inquiry Terenkripsi dengan Pernyataan Privasi",
        description: "Jaminan proteksi data sensitif dengan protokol Attorney-Client Privilege sebelum sesi konsultasi tatap muka dimulai."
      },
      {
        title: "Dukungan Navigasi Dwibahasa (Bahasa Indonesia & English)",
        description: "Struktur bilingual rapi untuk menyambut klien ekspatriat, kedutaan asing, dan investor multinasional."
      }
    ],
    techRationale: "Fokus pada rasio kontras teks WCAG AAA dan performa loading sub-detik memberikan pengalaman membaca artikel hukum yang nyaman bagi para eksekutif.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 4,9jt",
    schemaType: "LegalService",
    voucherCode: "ONG-NICHE-HUKUM"
  },
  {
    id: "niche-konsultan-pajak-akuntan",
    slug: "konsultan-pajak-akuntan",
    industryName: "Kantor Akuntan Publik & Konsultan Pajak",
    category: "Jasa Profesional, Hukum & Konsultan",
    targetMarket: "Konsultan Pajak Terdaftar (BKP), Kantor Akuntan Publik (KAP), Jasa Pembukuan & Payroll UMKM",
    headline: "Website Kantor Pajak & Akuntansi: Yakinkan Pemilik Usaha Menyerahkan Kepatuhan Finansial",
    fieldNote: {
      tag: "RISIKO KLIEN BISNIS",
      content: "Ketakutan terbesar pengusaha adalah SP2DK dari kantor pajak dan denda pembukuan yang keliru. Menampilkan nomor izin praktik resmi Kemenkeu dan sertifikasi Brevet AB/C seketika menciptakan rasa aman."
    },
    conversionFlow: [
      { step: "01", label: "Masalah Perpajakan", detail: "Pengusaha cari solusi SPT Tahunan, PPh, PPN, atau audit" },
      { step: "02", label: "Cek Izin Praktik", detail: "Lihat nomor izin BKP Kemenkeu dan sertifikasi akuntan" },
      { step: "03", label: "Pilih Skema Layanan", detail: "Retainer bulanan, pendampingan SP2DK, atau audit tahunan" },
      { step: "04", label: "Audit Awal Berkas", detail: "Jadwal konsultasi via Zoom / tatap muka via WhatsApp" }
    ],
    painPoints: [
      {
        title: "Klien Ragu Menggunakan Jasa Pajak Tanpa Bukti Izin Resmi",
        description: "Banyaknya oknum tidak bersertifikat membuat pemilik PT/CV ekstra waspada sebelum membuka laporan keuangan mereka."
      },
      {
        title: "Ketidakjelasan Lingkup Kerja Layanan Bulanan (Scope of Work)",
        description: "Klien sering menuntut pekerjaan di luar kesepakatan karena batasan layanan pembukuan dan pelaporan tidak dijabarkan jelas di awal."
      },
      {
        title: "Musim SPT Tahunan Menimbulkan Ledakan Chat Manual yang Chaos",
        description: "Penerimaan dokumen pajak yang berserakan di chat pribadi staf berisiko menghilangkan bukti potong dan faktur penting."
      }
    ],
    keyFeatures: [
      {
        title: "Pajangan Izin Praktik Kemenkeu, Sertifikat BKP & Anggota IKPI",
        description: "Tampilan nomor izin legalitas terverifikasi yang langsung menegaskan wewenang kantor sebagai konsultan pajak resmi."
      },
      {
        title: "Tabel Matriks Lingkup Layanan Retainer Pajak & Akuntansi",
        description: "Pembagian paket transparan: Pembukuan Bulanan, Review Kepatuhan Pajak, Pelaporan SPT Masa/Tahunan, hingga Pendampingan Pemeriksaan."
      },
      {
        title: "Kalkulator Sederhana Estimasi Omset & Beban Layanan Pembukuan",
        description: "Memberikan panduan kisaran biaya jasa yang rasional berdasarkan volume transaksi dan omset tahunan bisnis klien."
      },
      {
        title: "Panduan Dokumen Wajib Pajak Siap Unduh (Checklist SPT)",
        description: "Fitur download dokumen checklist berkas yang dibutuhkan klien sebelum memulai proses rekonsiliasi laporan."
      }
    ],
    techRationale: "Tata letak dirancang bersih dan ringkas, menonjolkan kredibilitas angka dan lisensi tanpa elemen dekoratif yang mengalihkan fokus pengusaha.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 3,5jt",
    schemaType: "AccountingService",
    voucherCode: "ONG-NICHE-PAJAK"
  },
  {
    id: "niche-konsultan-it-cctv-keamanan",
    slug: "konsultan-it-cctv-keamanan",
    industryName: "Integrator Sistem IT & CCTV Keamanan",
    category: "Jasa Profesional, Hukum & Konsultan",
    targetMarket: "Instalasi CCTV Gedung & Pabrik, Access Door RFID, Setup Server Kantor, Jaringan Fiber Optic B2B",
    headline: "Website Kontraktor IT & Smart Security: Presentasikan Solusi Keamanan Gedung Standar Industri",
    fieldNote: {
      tag: "TITIK KRITIS B2B",
      content: "Pengelola gedung dan kepala gudang butuh jaminan layanan purna jual (SLA) dan garansi hardware resmi. Brosur yang memaparkan paket spesifikasi kamera (MP, IP rating, NVR storage) mempercepat persetujuan anggaran."
    },
    conversionFlow: [
      { step: "01", label: "Kebutuhan Gedung", detail: "Prospek tentukan jumlah titik kamera, access door, atau LAN" },
      { step: "02", label: "Pilih Paket Solusi", detail: "Lihat paket 8/16/32 titik lengkap dengan NVR & instalasi" },
      { step: "03", label: "Permintaan Survey", detail: "Isi denah lokasi atau ajukan survey gratis titik instalasi" },
      { step: "04", label: "Penawaran SOW", detail: "Penerimaan RAB instalasi resmi via WhatsApp tim teknis" }
    ],
    painPoints: [
      {
        title: "Konsumen Bingung Memilih Antara Kamera Analog vs IP Camera",
        description: "Ketiadaan penjelasan teknis mengenai resolusi gambar malam hari (ColorVu/DarkFighter) membuat klien salah memilih paket murah yang buram."
      },
      {
        title: "Kekhawatiran Pelanggan Terhadap Layanan Garansi yang Hilang",
        description: "Banyak installer perorangan yang tidak bisa dihubungi saat sistem CCTV kantor mengalami error atau rekaman harddisk korup."
      },
      {
        title: "Sulit Mengukur Kebutuhan Titik Instalasi Tanpa Panduan",
        description: "Klien sering mengira 4 kamera cukup untuk gudang 1.000 meter persegi tanpa memahami konsep blind spot."
      }
    ],
    keyFeatures: [
      {
        title: "Paket Instalasi Transparan Berdasarkan Jumlah Titik Kamera",
        description: "Rincian spesifikasi kamera (2MP/4MP/4K), kapasitas harddisk penyimpan (1-4TB), kabel coaxial/UTP, dan biaya ongkos pasang."
      },
      {
        title: "Showcase Merek Resmi Terkemuka (Hikvision, Dahua, Uniview)",
        description: "Menampilkan sertifikat keaslian produk dan garansi ganti baru resmi distributor hingga 2 tahun."
      },
      {
        title: "Panduan Perbandingan Fitur AI (Face Recognition & Intrusion)",
        description: "Edukasi visual kemampuan kamera mendeteksi penyusup, membaca plat nomor mobil, dan notifikasi alarm di HP pengelola."
      },
      {
        title: "Formulir Permintaan Survey Lokasi & Desain Denah Keamanan",
        description: "Memudahkan pengurus pabrik atau perumahan meminta jadwal kunjungan teknisi untuk pemetaan titik kabel."
      }
    ],
    techRationale: "Visual skema topologi jaringan dan bagan perbandingan resolusi kamera dioptimalkan dengan format SVG vektor yang tajam di layar Retina manapun.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 3,5jt",
    schemaType: "ProfessionalService",
    voucherCode: "ONG-NICHE-SECURITY"
  },
  {
    id: "niche-brand-fashion-d2c",
    slug: "brand-fashion-d2c",
    industryName: "Brand Fashion, Hijab & Apparel D2C",
    category: "Retail, Fashion & Kosmetik (D2C)",
    targetMarket: "Brand Pakaian Lokal, Butik Hijab & Gamis Premium, Produsen Sepatu & Tas Kulit D2C",
    headline: "Flagship Storefront Fashion Modern: Transaksi Lancar Tanpa Crash Saat Flash Sale Iklan",
    fieldNote: {
      tag: "REALITA IKLAN TIKTOK/META",
      content: "Saat video konten FYP atau iklan Meta meledak, ribuan pengunjung masuk dalam 10 menit. Website lambat atau checkout macet mengakibatkan kerugian biaya iklan jutaan rupiah dan pembeli kabur ke marketplace kompetitor."
    },
    conversionFlow: [
      { step: "01", label: "Traffic Iklan Viral", detail: "Audiens klik tautan produk dari video TikTok / Reels" },
      { step: "02", label: "Pilih Size & Warna", detail: "Cek size chart interaktif & ketersediaan stok varian" },
      { step: "03", label: "Checkout 1 Halaman", detail: "Pilih kurir JNE/SiCepat otomatis & bayar via QRIS instan" },
      { step: "04", label: "Notifikasi WA Resi", detail: "Pembeli menerima konfirmasi pesanan & tracking otomatis" }
    ],
    painPoints: [
      {
        title: "Website Down atau Lambat Saat Ribuan Follower Masuk Serentak",
        description: "Hosting murah berbasis shared server langsung tumbang ketika kampanye iklan berbayar menghasilkan lonjakan traffic mendadak."
      },
      {
        title: "Tingginya Angka Pembatalan Keranjang Belanja (Cart Abandonment)",
        description: "Formulir checkout yang panjang dan mengharuskan registrasi akun rumit membuat calon pembeli membatalkan pembelian busana."
      },
      {
        title: "Ketidaktepatan Sinyal Pelacakan ROAS Iklan di Perangkat iOS",
        description: "Pixel browser biasa kehilangan hingga 40% data pembelian karena proteksi privasi Apple, membuat algoritma iklan gagal optimasi."
      }
    ],
    keyFeatures: [
      {
        title: "Storefront Super Cepat Kebal Lonjakan Flash Sale",
        description: "Infrastruktur cloud terdistribusi global yang mampu melayani ribuan pesanan bersamaan dengan kecepatan stabil sub-detik."
      },
      {
        title: "Checkout Ringkas 1-Halaman dengan Pembayaran QRIS & VA Otomatis",
        description: "Proses transaksi kilat tanpa perlu mendaftar akun, mendukung pembayaran QRIS seluruh bank & e-wallet nasional."
      },
      {
        title: "Kalkulator Cek Ongkir Otomatis Hingga Tingkat Kecamatan",
        description: "Integrasi tarif ekspedisi nasional terkemuka (J&T, SiCepat, JNE) yang otomatis menghitung ongkos kirim presisi."
      },
      {
        title: "Pelacakan Server-Side Meta CAPI & TikTok Conversion API",
        description: "Mengirimkan sinyal pembelian langsung dari server ke algoritma iklan untuk menjaga akurasi Return on Ad Spend (ROAS)."
      }
    ],
    techRationale: "Memakai arsitektur decoupled storefront memastikan katalog pakaian dan foto resolusi tinggi ter-render instan tanpa membebani database utama saat flash sale.",
    recommendedPillar: "Toko Online Mandiri & E-Commerce",
    startingPrice: "Rp 6,9jt",
    schemaType: "Store",
    voucherCode: "ONG-NICHE-FASHION"
  },
  {
    id: "niche-brand-skincare-kosmetik",
    slug: "brand-skincare-kosmetik",
    industryName: "Brand Skincare & Kosmetik Kecantikan",
    category: "Retail, Fashion & Kosmetik (D2C)",
    targetMarket: "Brand Skincare Lokal D2C, Klinik Estetika & Kosmetik, Serum Wajah & Produk Perawatan Kulit",
    headline: "Toko Online Skincare Terpercaya: Tampilkan Bukti Nyata, Izin BPOM & Sistem Bundling Hemat",
    fieldNote: {
      tag: "FAKTOR KEPERCAYAAN",
      content: "Konsumen kecantikan sangat takut produk merkuri atau abal-abal. Menempatkan nomor registrasi BPOM yang bisa diklik dan ulasan foto pemakaian asli sebelum-sesudah menaikkan rasio transaksi hingga 3 kali lipat."
    },
    conversionFlow: [
      { step: "01", label: "Edukasi Masalah Kulit", detail: "Solusi jerawat, flek hitam, atau skin barrier rusak" },
      { step: "02", label: "Pilih Paket Bundling", detail: "Tawaran hemat paket serum + toner + sunscreen" },
      { step: "03", label: "Cek Ulasan & BPOM", detail: "Lihat testimoni foto asli & sertifikasi halal MUI" },
      { step: "04", label: "Checkout QRIS Cepat", detail: "Pembayaran instan dan pengiriman ekspedisi terproteksi" }
    ],
    painPoints: [
      {
        title: "Konsumen Ragu Membeli Skincare Tanpa Bukti Izin BPOM Jelas",
        description: "Ketakutan akan produk ilegal membuat pembeli membatalkan pesanan jika nomor notifikasi BPOM tidak dipajang secara transparan."
      },
      {
        title: "Potongan Komisi Marketplace yang Terus Naik Memangkas Laba",
        description: "Biaya administrasi marketplace yang menyentuh 10-15% menggerus margin keuntungan brand owner dan jaringan distributor."
      },
      {
        title: "Rendahnya Nilai Rata-Rata Keranjang Belanja (Average Order Value)",
        description: "Konsumen hanya membeli 1 botol serum murah tanpa ada dorongan atau insentif otomatis untuk membeli 1 paket perawatan lengkap."
      }
    ],
    keyFeatures: [
      {
        title: "Badge Verifikasi Resmi Izin BPOM & Halal di Tiap Halaman Produk",
        description: "Menampilkan nomor notifikasi BPOM resmi yang memberikan ketenangan dan legalitas mutlak bagi konsumen."
      },
      {
        title: "Modul Paket Bundling Hemat & In-Cart Upselling Otomatis",
        description: "Fitur rekomendasi cerdas yang mengajak pembeli menambah produk pendamping dengan diskon khusus sebelum checkout."
      },
      {
        title: "Galeri Testimoni Ulasan Pengguna Nyata dengan Foto Sebelum-Sesudah",
        description: "Sistem ulasan autentik yang memperlihatkan perubahan nyata tekstur kulit pengguna setelah pemakaian rutin."
      },
      {
        title: "Portal Pendaftaran Reseller & Keagenan Terintegrasi",
        description: "Memudahkan brand merekrut mitra distributor baru di berbagai kota untuk memperluas jangkauan distribusi offline."
      }
    ],
    techRationale: "Sistem keranjang belanja dioptimalkan untuk transaksi satu klik di mobile, meminimalkan friction agar calon pembeli tidak sempat ragu atau berubah pikiran.",
    recommendedPillar: "Toko Online Mandiri & E-Commerce",
    startingPrice: "Rp 6,9jt",
    schemaType: "HealthAndBeautyBusiness",
    voucherCode: "ONG-NICHE-SKINCARE"
  },
  {
    id: "niche-restoran-cafe-fnb",
    slug: "restoran-cafe-fnb",
    industryName: "Restoran Fine Dining, Cafe & F&B",
    category: "Kuliner & F&B",
    targetMarket: "Restoran Keluarga, Coffee Shop Estetik, Bakery & Pastry, Waralaba Kuliner Modern",
    headline: "Brosur Menu Kuliner Interaktif: Tingkatkan Kunjungan Dine-In, Reservasi Meja & Order Katering",
    fieldNote: {
      tag: "PENGALAMAN TAMU",
      content: "Menu PDF di bio Instagram yang harus di-download dan buram saat dizoom membuat tamu malas datang. Buku menu digital yang estetik dan cepat dibuka langsung memicu selera makan dan memudahkan pemesanan VIP table."
    },
    conversionFlow: [
      { step: "01", label: "Temukan Tempat", detail: "Pencarian cafe hits atau restoran keluarga di Google" },
      { step: "02", label: "Buka Buku Menu", detail: "Eksplorasi foto makanan lezat, deskripsi rasa & harga" },
      { step: "03", label: "Pilih Meja / Paket", detail: "Pilih area smoking/non-smoking atau paket katering" },
      { step: "04", label: "Kunci Reservasi WA", detail: "Konfirmasi jam kedatangan langsung ke waiter PIC" }
    ],
    painPoints: [
      {
        title: "Buku Menu PDF Buram dan Menyusahkan Pelanggan di HP",
        description: "Tamu restoran kesulitan membaca daftar menu makanan dan harga saat membuka file gambar buram di layar ponsel."
      },
      {
        title: "Alur Reservasi Meja Acara Keluarga & Kantor yang Berbelit-belit",
        description: "Pelanggan rombongan batal memesan karena admin terlambat membalas chat DM Instagram mengenai ketersediaan meja VIP."
      },
      {
        title: "Beban Potongan Komisi Aplikasi Ojek Online Hingga 20%",
        description: "Restoran kehilangan banyak margin keuntungan karena tidak memiliki saluran pemesanan katering mandiri langsung ke dapur."
      }
    ],
    keyFeatures: [
      {
        title: "Buku Menu Digital Responsif dengan Foto Hidangan Menggugah Selera",
        description: "Visual presentasi kuliner berkualitas tinggi dilengkapi informasi bahan utama, tanda halal, dan opsi kepedasan."
      },
      {
        title: "Formulir Reservasi Meja & Paket Katering Langsung ke WhatsApp",
        description: "Pemesanan meja untuk ulang tahun, arisan, atau meeting kantor dengan format data tanggal dan jumlah orang yang rapi."
      },
      {
        title: "Peta Lokasi Google Maps, Petunjuk Arah & Informasi Parkir",
        description: "Integrasi rute navigasi akurat memudahkan pengemudi menemukan area parkir dan pintu masuk restoran."
      },
      {
        title: "Optimasi Penelusuran Lokal Google (Schema.org Restaurant)",
        description: "Meningkatkan eksposur restoran saat calon pelanggan mencari kata kunci 'tempat makan terdekat' atau 'cafe nyaman terdekat'."
      }
    ],
    techRationale: "Aset foto makanan disajikan dengan format WebP adaptif super ringan agar menu tetap terbuka instan meski sinyal internet di dalam ruangan restoran kurang kuat.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 2,9jt",
    schemaType: "Restaurant",
    voucherCode: "ONG-NICHE-KULINER"
  },
  {
    id: "niche-event-organizer-wedding-planner",
    slug: "event-organizer-wedding-planner",
    industryName: "Wedding Planner & Event Organizer (EO)",
    category: "Kuliner & F&B",
    targetMarket: "Penyelenggara Pernikahan Mewah, Event Organizer Konser & Pameran, Corporate Gathering MICE",
    headline: "Showcase Portofolio Event Spektakuler: Yakinkan Calon Pengantin & Panitia Acara Korporat",
    fieldNote: {
      tag: "SENTIMEN KLIEN EVENT",
      content: "Pernikahan adalah momen sekali seumur hidup, dan event korporat mempertaruhkan reputasi direksi. Memperlihatkan ketelitian rundown acara, kurasi vendor rekanan, dan video highlight suasana adalah kunci memenangkan klien."
    },
    conversionFlow: [
      { step: "01", label: "Inspirasi Tema", detail: "Klien melihat portfolio konsep dekorasi & tema acara" },
      { step: "02", label: "Pilih Skala Acara", detail: "Pernikahan intim (200 pax) atau pesta ballroom (1000 pax)" },
      { step: "03", label: "Cek Daftar Vendor", detail: "Review rekanan katering, fotografer, tata rias, & venue" },
      { step: "04", label: "Booking Konsultasi", detail: "Sesi temu konsep awal & estimasi budget via WhatsApp" }
    ],
    painPoints: [
      {
        title: "Calon Pengantin Kebingungan Mengestimasi Rincian Anggaran",
        description: "Banyak pasangan ragu menghubungi wedding organizer karena takut biaya paket jauh melampaui kemampuan dana mereka."
      },
      {
        title: "Dokumentasi Acara Tidak Menunjukkan Kerapian Manajemen Waktu",
        description: "Hanya menampilkan foto dekorasi tanpa memperlihatkan kepiawaian tim dalam mengeksekusi rundown acara yang tertib dan tanpa kendala."
      },
      {
        title: "Klien Korporat Membutuhkan Bukti Legalitas Usaha untuk Pengadaan",
        description: "Panitia gathering perusahaan menolak bekerjasama dengan EO yang tidak memiliki badan hukum PT dan rekening bank resmi perusahaan."
      }
    ],
    keyFeatures: [
      {
        title: "Galeri Showcase Event Mewah Lengkap dengan Video Teaser Highlight",
        description: "Menampilkan kemegahan tata panggung, pencahayaan panggung, dan kebahagiaan para tamu dalam format sinematik cepat."
      },
      {
        title: "Katalog Pilihan Paket Pernikahan & Event Korporat Transparan",
        description: "Rincian menyeluruh apa saja yang termasuk dalam paket (MC, sound system, perizinan aparat, keamanan, hingga penginapan pengantin)."
      },
      {
        title: "Daftar Rekanan Vendor Unggulan (Venue Hotel, Katering, MUA)",
        description: "Membuktikan jaringan luas EO dengan hotel berbintang dan vendor papan atas yang memberi nilai tambah bagi klien."
      },
      {
        title: "Formulir Konsultasi Moodboard & Jadwal Diskusi Konsep Acara",
        description: "Mengumpulkan data tanggal resepsi, estimasi jumlah undangan, dan preferensi gaya dekorasi sebelum sesi temu tatap muka."
      }
    ],
    techRationale: "Aset video teaser diintegrasikan dengan streaming terkompresi tanpa membebani memori browser ponsel, memastikan transisi visual berjalan mulus.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 3,5jt",
    schemaType: "EntertainmentBusiness",
    voucherCode: "ONG-NICHE-EVENT"
  },
  {
    id: "niche-ekspedisi-logistik-cargo",
    slug: "ekspedisi-logistik-cargo",
    industryName: "Ekspedisi, Cargo & Freight Forwarding",
    category: "Logistik & Ekspor",
    targetMarket: "Jasa Ekspedisi Darat/Laut/Udara, Forwarder Ekspor Impor, Jasa Sewa Truk FTL/LTL, Pindahan Rumah",
    headline: "Website Ekspedisi Resmi: Bangun Kepercayaan Pengirim Muatan Kargo Bernilai Ratusan Juta",
    fieldNote: {
      tag: "FAKTOR RISIKO LOGISTIK",
      content: "Pemilik pabrik tidak akan mempercayakan muatan mesin atau komoditas senilai ratusan juta kepada ekspedisi abal-abal. Menampilkan nomor izin Kemenhub, rincian armada truk, dan fitur cek estimasi tarif memenangkan kepercayaan seketika."
    },
    conversionFlow: [
      { step: "01", label: "Tentukan Rute Muatan", detail: "Pilih kota asal muat dan kota tujuan bongkar" },
      { step: "02", label: "Cek Estimasi Tarif", detail: "Hitung perkiraan ongkir per kilogram atau sewa charter truk" },
      { step: "03", label: "Cek Asuransi Barang", detail: "Pahami proteksi asuransi kehilangan & kerusakan muatan" },
      { step: "04", label: "Penerbitan Surat Jalan", detail: "Order penjemputan armada kargo via WhatsApp tim operasional" }
    ],
    painPoints: [
      {
        title: "Pengirim Kargo Ragu Menyerahkan Muatan Berharga ke Ekspedisi Baru",
        description: "Kekhawatiran muatan dicuri atau armada mogok di jalan membuat pengusaha pabrik hanya memilih ekspedisi yang memiliki reputasi digital terpercaya."
      },
      {
        title: "Customer Service Kewalahan Menjawab Pertanyaan Estimasi Tarif",
        description: "Tim admin membuang waktu ratusan jam per bulan untuk menjawab pertanyaan tarif per kilo yang sebenarnya bisa dicek mandiri oleh klien."
      },
      {
        title: "Ketiadaan Halaman Informasi Spesifikasi Armada Truk yang Jelas",
        description: "Klien bingung menentukan apakah muatan mereka membutuhkan truk CDD, Fuso, Tronton Wingbox, atau kontainer 20/40 feet."
      }
    ],
    keyFeatures: [
      {
        title: "Kalkulator Cek Estimasi Tarif Kargo Berdasarkan Rute Antar Kota",
        description: "Pengunjung dapat memilih kota asal dan tujuan untuk melihat estimasi tarif per kg, kubikasi volume, atau carter satu truk penuh."
      },
      {
        title: "Katalog Spesifikasi Armada Truk Lengkap dengan Dimensi & Tonase",
        description: "Penjelasan kapasitas muat (CDE, CDD Long, Fuso, Tronton Wingbox) agar pengirim muatan tepat memilih jenis armada."
      },
      {
        title: "Halaman Izin Resmi Kemenhub, Asuransi Pengangkutan & SOP Keamanan",
        description: "Menampilkan legalitas badan usaha, sertifikat kelayakan uji jalan armada, dan jaminan klaim asuransi perlindungan barang."
      },
      {
        title: "Formulir Booking Penjemputan Muatan (Pick-up Request) Cepat",
        description: "Memudahkan staf pabrik menjadwalkan penjemputan barang ke gudang mereka dengan data alamat muat yang akurat."
      }
    ],
    techRationale: "Tabel tarif rute antar-pulau dimuat dengan pencarian lokal berkecepatan instan tanpa perlu menunggu query database yang berat.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 5,9jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-LOGISTIK"
  },
  {
    id: "niche-ekspor-komoditas-hasil-bumi",
    slug: "ekspor-komoditas-hasil-bumi",
    industryName: "Eksportir Komoditas & Hasil Bumi",
    category: "Logistik & Ekspor",
    targetMarket: "Eksportir Briket Arang Kelapa, Biji Kopi Arabika/Robusta, Rempah-Rempah (Vanili/Cengkeh), Kelapa Sawit",
    headline: "Etalase Ekspor Hasil Bumi Berstandar Global: Yakinkan Buyer Internasional & Amankan Kontrak Kontainer",
    fieldNote: {
      tag: "STANDARDISASI BUYER GLOBAL",
      content: "Buyer luar negeri dari Timur Tengah, Eropa, atau AS memverifikasi Certificate of Analysis (COA), kapasitas supply bulanan (FCL/LCL), dan Incoterms (FOB/CIF) sebelum menerbitkan Letter of Credit (L/C)."
    },
    conversionFlow: [
      { step: "01", label: "Buyer Internasional Masuk", detail: "Mencari supplier terpercaya komoditas asli Indonesia" },
      { step: "02", label: "Cek Spesifikasi Lab", detail: "Inspeksi kadar air, kadar abu (ash content), & ukuran mesh" },
      { step: "03", label: "Verifikasi Sertifikasi", detail: "Cek dokumen karantina, fumigasi, & sertifikat origin" },
      { step: "04", label: "Ajukan Inquiry FOB/CIF", detail: "Kirim formal RFQ via email korporat / WhatsApp direct" }
    ],
    painPoints: [
      {
        title: "Buyer Internasional Ragu dengan Kredibilitas Eksportir Indonesia",
        description: "Banyak buyer tertipu penipuan online; website yang tidak profesional langsung dicoret dari daftar calon mitra dagang mereka."
      },
      {
        title: "Spesifikasi Laboratorium Kualitas Komoditas Tidak Transparan",
        description: "Buyer membutuhkan data presisi seperti kadar kalori arang, kadar air vanili, atau grade biji kopi untuk perhitungan industri mereka."
      },
      {
        title: "Ketidakpahaman Regulasi Ekspor dan Terminologi Pengiriman Global",
        description: "Website tidak menjelaskan opsi pelabuhan muat (Tanjung Perak / Tanjung Priok) dan skema pembayaran aman internasional."
      }
    ],
    keyFeatures: [
      {
        title: "Tabel Spesifikasi Teknis Komoditas Standar Laboratorium Internasional",
        description: "Menyajikan parameter kualitas mutu produk lengkap dengan sertifikat uji independen (misal Sucofindo / SGS)."
      },
      {
        title: "Ketentuan Transparan Kapasitas Pasokan & Muatan Kontainer (FCL/LCL)",
        description: "Informasi kapasitas produksi tonase bulanan dan jumlah karton yang muat dalam kontainer 20ft dan 40ft High Cube."
      },
      {
        title: "Halaman Dokumen Ekspor Resmi, Fumigasi & Legalitas Asal Barang",
        description: "Membuktikan kepatuhan terhadap regulasi ekspor dengan menampilkan kelengkapan Certificate of Origin (COO) dan sertifikat phytosanitary."
      },
      {
        title: "Formulir Formal Request for Quotation (RFQ) Standar Ekspor",
        description: "Panduan pengisian bagi buyer internasional mencakup target pelabuhan tujuan, estimasi kuantiti, dan skema pembayaran L/C atau T/T."
      }
    ],
    techRationale: "Website ekspor dioptimalkan dengan Content Delivery Network (CDN) global multi-benua agar dimuat dalam tempo 0.3 detik oleh buyer di belahan dunia manapun.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 5,9jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-EKSPOR"
  },
  {
    id: "niche-sekolah-universitas-bimbel",
    slug: "sekolah-universitas-bimbel",
    industryName: "Sekolah Unggulan, Kampus & Bimbel",
    category: "Pendidikan & Travel",
    targetMarket: "Sekolah Islam Terpadu / Kristen Swasta, Kampus Akademi / Universitas, Bimbel Kedinasan & UTBK",
    headline: "Portal Pendidikan & Pendaftaran Siswa Baru (PPDB): Sukseskan Target Kuota Murid Tahunan",
    fieldNote: {
      tag: "KEPUTUSAN ORANG TUA",
      content: "Orang tua memilih sekolah bukan hanya karena gedung megah, tetapi karena kurikulum pembentukan karakter, prestasi alumni yang lolos PTN/kedinasan, dan kejelasan rincian uang pangkal tanpa pungutan terselubung."
    },
    conversionFlow: [
      { step: "01", label: "Cari Sekolah Unggulan", detail: "Orang tua mencari institusi pendidikan berkualitas terbaik" },
      { step: "02", label: "Eksplorasi Kurikulum", detail: "Pelajari metode belajar, fasilitas asrama, & prestasi siswa" },
      { step: "03", label: "Simulasi Uang Pangkal", detail: "Pahami rincian biaya SPP dan skema cicilan pendidikan" },
      { step: "04", label: "Daftar PPDB Online", detail: "Pengisian formulir pendaftaran awal & booking tes observasi" }
    ],
    painPoints: [
      {
        title: "Alur Pendaftaran Murid Baru Masih Manual dan Membingungkan",
        description: "Berkas formulir kertas yang rawan tercecer membuat orang tua enggan mendaftarkan anak jika prosesnya merepotkan."
      },
      {
        title: "Orang Tua Khawatir dengan Biaya Pendidikan yang Tidak Transparan",
        description: "Ketiadaan rincian uang pangkal, biaya seragam, dan SPP bulanan membuat orang tua mengurungkan niat mengambil formulir tes."
      },
      {
        title: "Website Sekolah Sering Down Saat Pengumuman Kelulusan Seleksi",
        description: "Server sekolah yang tidak sanggup menahan serbuan ribuan wali murid serentak merusak citra profesional lembaga pendidikan."
      }
    ],
    keyFeatures: [
      {
        title: "Portal Formulir Pendaftaran PPDB Online dengan Unggah Berkas",
        description: "Memudahkan orang tua mengisi data calon murid, mengunggah kartu keluarga, dan memilih tanggal tes observasi secara mandiri."
      },
      {
        title: "Tabel Rincian Kurikulum, Ekstrakurikuler & Fasilitas Laboratorium",
        description: "Presentasi lengkap metode pengajaran unggulan, program tahfidz/bilingual, serta sarana olahraga dan perpustakaan modern."
      },
      {
        title: "Halaman Rekam Jejak Prestasi & Kampus Tujuan Sebaran Alumni",
        description: "Menampilkan persentase kelulusan siswa yang berhasil menembus perguruan tinggi negeri favorit dan ikatan dinas."
      },
      {
        title: "Infrastruktur Static Edge Anti-Down untuk Pengumuman Seleksi",
        description: "Menjamin halaman pengumuman hasil ujian seleksi tetap terbuka super cepat tanpa pernah mengalami error server tumbang."
      }
    ],
    techRationale: "Penggunaan teknologi static pre-rendering membuat website institusi kebal dari serangan lonjakan traffic saat hari pembukaan pendaftaran murid baru.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 4,9jt",
    schemaType: "EducationalOrganization",
    voucherCode: "ONG-NICHE-PENDIDIKAN"
  },
  {
    id: "niche-tour-travel-umroh",
    slug: "tour-travel-umroh",
    industryName: "Biro Perjalanan Umroh & Haji Khusus",
    category: "Pendidikan & Travel",
    targetMarket: "Travel Umroh Berizin PPIU Kemenag, Penyelenggara Haji Khusus / Furoda, Paket Wisata Halal Mancanegara",
    headline: "Website Travel Umroh Resmi: Tampilkan Izin PPIU Kemenag & Amankan Pendaftaran Jamaah",
    fieldNote: {
      tag: "TRAUMA BIRO BODONG",
      content: "Masyarakat sangat berhati-hati memilih biro umroh setelah maraknya kasus penipuan jamaah. Menampilkan nomor izin resmi Kemenag di tempat strategis, rincian hotel bintang 4/5 di Makkah, dan tanggal terbang pasti adalah kunci penentu."
    },
    conversionFlow: [
      { step: "01", label: "Pilih Jadwal Terbang", detail: "Jamaah mencari bulan keberangkatan (Ramadhan/Syawal)" },
      { step: "02", label: "Bandingkan Paket", detail: "Cek paket Reguler, VIP, atau Plus Turki/Dubai" },
      { step: "03", label: "Inspeksi Hotel & Maskapai", detail: "Lihat jarak hotel ke pelataran Masjidil Haram & Saudia/Garuda" },
      { step: "04", label: "Kunci Kursi Seat WA", detail: "Pendaftaran awal dan instruksi transfer DP ke rekening bank PT" }
    ],
    painPoints: [
      {
        title: "Keraguan Calon Jamaah Terhadap Legalitas Resmi Biro Umroh",
        description: "Calon jamaah takut dana tabungan mereka dibawa lari jika biro travel tidak mencantumkan legalitas izin PPIU yang valid."
      },
      {
        title: "Jadwal dan Harga Paket Sering Berubah Tanpa Update Informasi",
        description: "Brosur kertas yang dicetak cepat usang ketika ada kenaikan harga tiket maskapai atau fluktuasi tarif hotel di Saudi."
      },
      {
        title: "Keluarga Jamaah di Daerah Kesulitan Memantau Informasi Keberangkatan",
        description: "Keluarga di kampung halaman kesulitan mengakses panduan manasik, barang bawaan, dan kepulangan jamaah secara mandiri."
      }
    ],
    keyFeatures: [
      {
        title: "Pajangan Izin Resmi PPIU Kemenag & Sertifikat Akreditasi A",
        description: "Pernyataan legalitas resmi yang menautkan jamaah ke basis data verifikasi Kemenag untuk keamanan mutlak."
      },
      {
        title: "Tabel Jadwal Keberangkatan, Sisa Kuota Kursi & Hotel Makkah/Madinah",
        description: "Informasi transparan mengenai nama maskapai penerbangan direct, bintang hotel, dan jarak tempuh jalan kaki ke masjid."
      },
      {
        title: "Rincian Fasilitas Paket yang Sudah Termasuk & Belum Termasuk",
        description: "Penjelasan jujur mengenai visa, handling bandara, seragam perlengkapan, asuransi perjalanan, dan paspor."
      },
      {
        title: "Formulir Booking Seat Pendaftaran Terhubung ke CS WhatsApp",
        description: "Memudahkan calon jamaah mengunci paket keberangkatan bagi seluruh anggota keluarga dalam satu pesan WhatsApp terformat."
      }
    ],
    techRationale: "Pembaruan jadwal paket dan sisa kuota kursi jamaah dapat diatur cepat melalui file konfigurasi ringan tanpa perlu coding ulang yang rumit.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 5,9jt",
    schemaType: "TravelAgency",
    voucherCode: "ONG-NICHE-TRAVEL"
  },
  {
    id: "niche-cleaning-service-pest-control",
    slug: "cleaning-service-pest-control",
    industryName: "Cleaning Service Komersial & Pest Control",
    category: "Jasa Komersial & Layanan Fasilitas",
    targetMarket: "Jasa Kebersihan Gedung Kantor, Pembersih Kaca Gedung Bertingkat (Rope Access), Pest & Termite Control",
    headline: "Website Facility Services Profesional: Tembus Kontrak Kebersihan Gedung & Pengendalian Hama B2B",
    fieldNote: {
      tag: "STANDARD K3 GEDUNG",
      content: "Building management gedung perkantoran dan mall mewajibkan sertifikat K3 Ketinggian (TKPK) dan kepatuhan lembar data keselamatan bahan kimia (MSDS) sebelum mengizinkan tim kebersihan bekerja di area mereka."
    },
    conversionFlow: [
      { step: "01", label: "Keluhan Fasilitas", detail: "Kaca gedung kusam, rayap pondasi, atau kebersihan harian" },
      { step: "02", label: "Cek SOP & Alat", detail: "Pelajari metode chemical ramah lingkungan & sertifikasi K3" },
      { step: "03", label: "Ajukan Survey Gratis", detail: "Isi data luas lantai gedung atau area terindikasi hama" },
      { step: "04", label: "Kirim Penawaran RAB", detail: "Koordinasi kontrak bulanan bersama manajer operasional" }
    ],
    painPoints: [
      {
        title: "Pengelola Gedung Khawatir Masalah Keselamatan Kerja Tenaga Lapangan",
        description: "Building management menolak vendor pembersih kaca yang tidak memiliki asuransi tenaga kerja dan sertifikat safety tali (rope access)."
      },
      {
        title: "Ketidakjelasan Standar Bahan Kimia (Chemical) yang Digunakan",
        description: "Klien perkantoran takut chemical yang dipakai merusak marmer lantai atau berbau tajam membahayakan karyawan kantor."
      },
      {
        title: "Sistem Kontrak Berlangganan yang Tidak Memiliki Garansi Hasil",
        description: "Klien pest control kecewa jika rayap atau hama kembali muncul dalam beberapa minggu tanpa jaminan treatment ulang gratis."
      }
    ],
    keyFeatures: [
      {
        title: "Showcase Sertifikasi K3 Ketinggian & Asuransi Ketenagakerjaan",
        description: "Menampilkan dokumen resmi standar keselamatan kerja dan perlindungan asuransi bagi seluruh personel lapangan."
      },
      {
        title: "Katalog Layanan Komersial Terpadu (General Cleaning, Kaca, Hama)",
        description: "Penjelasan komprehensif alur kerja pembersihan harian, kristalisasi lantai marmer, hingga injeksi anti rayap pondasi."
      },
      {
        title: "Informasi Bahan Kimia Ramah Lingkungan Bersertifikat MSDS",
        description: "Meyakinkan pengelola gedung bahwa cairan chemical yang digunakan aman bagi kesehatan penghuni dan tidak merusak interior."
      },
      {
        title: "Formulir Permintaan Survey Lokasi & Uji Sampel Hama Gratis",
        description: "Memudahkan building manager menjadwalkan inspeksi awal untuk memetakan tingkat keparahan hama atau kotoran gedung."
      }
    ],
    techRationale: "Tata letak kartu layanan dirancang dengan hierarki visual tegas yang memudahkan komite pengadaan korporat membaca poin proposal dalam 1 menit.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 3,5jt",
    schemaType: "HomeAndConstructionBusiness",
    voucherCode: "ONG-NICHE-CLEANING"
  },
  {
    id: "niche-agribisnis-peternakan-modern",
    slug: "agribisnis-peternakan-modern",
    industryName: "Agribisnis, Bibit Tanaman & Peternakan",
    category: "Agribisnis & Peternakan",
    targetMarket: "Penangkar Bibit Sawit/Durian Unggul, Peternakan Sapi & Kambing Qurban, Suplier Telur & Daging Segar",
    headline: "Katalog Agribisnis & Peternakan Terverifikasi: Pasok Kebutuhan Bibit Bersertifikat & Hewan Ternak Sehat",
    fieldNote: {
      tag: "KEASLIAN BIBIT & TERNAK",
      content: "Petani dan investor perkebunan sangat takut membeli bibit palsu yang baru ketahuan tidak berbuah setelah 4 tahun dirawat. Sertifikasi resmi balai benih dan jaminan kesehatan hewan ternak adalah pembeda mutlak."
    },
    conversionFlow: [
      { step: "01", label: "Pilih Jenis Bibit/Ternak", detail: "Bibit kelapa sawit unggul, durian musang king, atau sapi potong" },
      { step: "02", label: "Verifikasi Sertifikat", detail: "Cek barcode sertifikasi balai benih pertanian & SKKH hewan" },
      { step: "03", label: "Pilih Kuantiti & Logistik", detail: "Tentukan jumlah pesanan dan armada truk pengiriman bibit" },
      { step: "04", label: "Order & Pantau Panen", detail: "Pemesanan resmi dan panduan pendampingan budidaya via WA" }
    ],
    painPoints: [
      {
        title: "Kekhawatiran Pembeli Terhadap Bibit Tanaman Oplosan/Palsu",
        description: "Pembeli bibit skala hektar menolak bertransaksi jika penangkar tidak bisa membuktikan sertifikasi resmi dari dinas pertanian."
      },
      {
        title: "Pembeli Hewan Qurban / Ternak Ragu Kondisi Kesehatan Fisik",
        description: "Konsumen butuh bukti video dan Surat Keterangan Kesehatan Hewan (SKKH) dari dokter hewan yang sah sebelum mentransfer uang muka."
      },
      {
        title: "Tingginya Angka Kematian Bibit Selama Perjalanan Ekspedisi",
        description: "Pelanggan ragu memesan bibit dari luar pulau karena takut tanaman layu atau mati sebelum tiba di lokasi perkebunan."
      }
    ],
    keyFeatures: [
      {
        title: "Dokumentasi Sertifikasi Resmi Balai Pengawasan Benih Tanaman",
        description: "Menampilkan sertifikat legalitas penangkar benih dan keaslian varietas untuk menjamin produktivitas panen perkebunan."
      },
      {
        title: "Galeri Dokumentasi Hewan Ternak dengan Video Bobot Riil",
        description: "Presentasi transparan penimbangan bobot hewan ternak, kondisi pakan bernutrisi, dan sanitasi kandang modern."
      },
      {
        title: "Panduan SOP Pengiriman Bibit Aman dan Garansi Ganti Baru",
        description: "Penjelasan teknik packing khusus tanaman dan komitmen penggantian bibit jika rusak selama proses pengiriman di jalan."
      },
      {
        title: "Kanal Konsultasi Perawatan Tanaman Terhubung Ahli Agronomi",
        description: "Memberikan layanan purna jual pendampingan pemupukan dan pengendalian hama bagi para petani mitra."
      }
    ],
    techRationale: "Halaman web dirancang ringan dan hemat konsumsi kuota data agar mudah dibuka oleh para pengelola kebun di pelosok daerah dengan jaringan 3G/4G terbatas.",
    recommendedPillar: "Sales & Lead Generation",
    startingPrice: "Rp 3,5jt",
    schemaType: "LocalBusiness",
    voucherCode: "ONG-NICHE-AGRI"
  },
  {
    id: "niche-koperasi-keuangan-mikro",
    slug: "koperasi-keuangan-mikro",
    industryName: "Koperasi Simpan Pinjam & Lembaga Keuangan Mikro",
    category: "Lembaga Keuangan",
    targetMarket: "Koperasi Simpan Pinjam (KSP), Koperasi Karyawan Perusahaan, Bank Perekonomian Rakyat (BPR), BMT Syariah",
    headline: "Portal Koperasi & Keuangan Mikro Terpercaya: Tingkatkan Anggota Baru & Salurkan Pembiayaan Produktif",
    fieldNote: {
      tag: "KEPATUHAN KEMENKOP & OJK",
      content: "Masyarakat enggan menempatkan simpanan jika koperasi terlihat tertutup atau terindikasi pinjol ilegal. Menampilkan legalitas izin Kemenkop, kejelasan bunga/bagi hasil, dan simulasi angsuran transparan membangun reputasi sehat."
    },
    conversionFlow: [
      { step: "01", label: "Pilih Produk Keuangan", detail: "Simpanan berjangka, pinjaman modal usaha, atau tabungan haji" },
      { step: "02", label: "Hitung Simulasi Angsuran", detail: "Cek rincian cicilan bulanan berdasarkan plafon dan tenor" },
      { step: "03", label: "Pahami Syarat Anggota", detail: "Ketentuan KTP, jaminan BPKB/sertifikat, dan simpanan pokok" },
      { step: "04", label: "Ajukan Pengajuan Dana", detail: "Kirim formulir pra-pengajuan ke account officer via WhatsApp" }
    ],
    painPoints: [
      {
        title: "Kekhawatiran Calon Anggota Terhadap Koperasi Bodong",
        description: "Masyarakat trauma dengan kasus gagal bayar koperasi; ketiadaan informasi izin Kemenkop membuat mereka takut menaruh dana."
      },
      {
        title: "Proses Pengajuan Pinjaman yang Dianggap Lambat dan Berbelit",
        description: "Pengusaha mikro butuh dana modal kerja cepat dan enggan mengisi puluhan lembar formulir manual tanpa kepastian plafon."
      },
      {
        title: "Ketidakpahaman Anggota Mengenai Hak SHU Tahunan",
        description: "Koperasi sulit menarik partisipasi anggota baru jika pembagian Sisa Hasil Usaha (SHU) tidak disosialisasikan secara terbuka."
      }
    ],
    keyFeatures: [
      {
        title: "Kalkulator Simulasi Pinjaman Modal & Simpanan Berjangka",
        description: "Perhitungan cicilan per bulan yang transparan tanpa ada biaya provisi tersembunyi yang mengecoh peminjam."
      },
      {
        title: "Pajangan Izin Kemenkop UKM, Nomor Badan Hukum & Rekening PT",
        description: "Membuktikan legalitas sah koperasi sebagai lembaga berizin yang beroperasi sesuai undang-undang perkoperasian."
      },
      {
        title: "Formulir Pendaftaran Anggota & Pra-Pengajuan Pinjaman Online",
        description: "Memangkas birokrasi berkas fisik, data pemohon langsung diterima oleh Account Officer untuk verifikasi awal."
      },
      {
        title: "Laporan Transparansi SHU & Dokumentasi Rapat Anggota Tahunan (RAT)",
        description: "Menampilkan tata kelola keuangan yang sehat dan akuntabel untuk menjaga kepercayaan seluruh anggota koperasi."
      }
    ],
    techRationale: "Formulir simulasi pinjaman bekerja secara aman tanpa menyimpan data sensitif keuangan pengguna di server publik, menjaga privasi calon peminjam.",
    recommendedPillar: "Company Profile Website",
    startingPrice: "Rp 4,9jt",
    schemaType: "FinancialService",
    voucherCode: "ONG-NICHE-KOPERASI"
  }
];

const targetPath = path.resolve('src/data/niches.json');
fs.writeFileSync(targetPath, JSON.stringify(niches, null, 2), 'utf-8');
console.log(`✅ Successfully generated ${niches.length} rich niches to ${targetPath}`);
