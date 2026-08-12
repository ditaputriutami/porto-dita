export const projects = [
  {
    id: 1,
    title: "Sistem Informasi Akuntansi Kas Kembang Lestari Transport",
    description:
      "Sistem Informasi Akuntansi Kas adalah aplikasi berbasis web yang dirancang untuk mencatat, mengelola, dan memantau transaksi penerimaan serta pengeluaran kas pada Kembang Lestari Transport. Sistem ini membantu pembukuan keuangan perusahaan transportasi menjadi lebih terstruktur, transparan, serta menghasilkan laporan akuntansi secara otomatis dan akurat.",
    technologies: [
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
      "Sistem Informasi Akuntansi",
    ],
    image: "/image/Kb_Transport.jpeg",
    
  },
  {
    id: 2,
    title: "Accounting System Implementation (MYOB) – PT. BATA",
    description:
      "Simulasi implementasi sistem akuntansi pada perusahaan dagang menggunakan MYOB. Project ini mencakup pencatatan transaksi, pengelolaan persediaan, serta penyusunan laporan keuangan secara sistematis berdasarkan studi kasus PT. BATA.",
    technologies: [
      "MYOB Accounting",
      "Accounting Information System (AIS)",
      "Inventory Management (FIFO Method)",
    ],
    image: "/image/MYOB_Pt_Bata.jpg",
    github:
      "https://medium.com/@taditaputriutami/implementasi-sistem-akuntansi-menggunakan-myob-pada-perusahaan-dagang-studi-kasus-pt-bata-7cae6cfab120",
    linkLabel: "Medium",
    demo: "",
  },
  {
    id: 4,
    title: "SIVIRA – Sistem Informasi Verifikasi Realisasi Anggaran",
    description:
      "SIVIRA adalah aplikasi berbasis web untuk membantu proses verifikasi realisasi anggaran pada Bagian Perencanaan dan Keuangan Sekretariat Daerah Kabupaten Bantul, sehingga proses pengecekan data menjadi lebih cepat, terstruktur, dan akurat.",
    technologies: [
      "PHP",
      "Bootstrap",
      "MySQL",
      "Accounting Information System",
    ],
    image: "/image/SIVIRA.png",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://demo-weather.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Website portfolio modern dengan animasi smooth, dark mode, dan responsive design untuk menampilkan projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/image/Porto.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://demo-portfolio.com",
  },
  {
    id: 6,
    title: "Bike Sales Analysis – Data Analyst Project",
    description:
      "Analisis data penjualan sepeda menggunakan Python untuk mengidentifikasi tren penjualan, performa toko, dan kategori produk berdasarkan data historis.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Pivot Table"],
    image: "/image/BikeStore.png",
    github: "https://github.com/ditaputriutami/Pizza-Sales-Data-Analysis.git",
  },
  {
    id: 7,
    title: "Pizza Sales Performance Insights",
    description:
      "Analisis data penjualan pizza menggunakan Python untuk mengidentifikasi tren penjualan, produk terlaris, serta pola pembelian pelanggan guna mendukung pengambilan keputusan bisnis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    image: "/image/PizzaSales.png",
    github: "https://github.com/ditaputriutami/Pizza-Sales-Data-Analysis.git",
  },
];

// Import Certificate PDFs
import sertifikatMajuBareng from "../asset/certificates/Sertifikat Maju Bareng AI.pdf";
import sertifikatPython from "../asset/certificates/Memulai Python.pdf";
import sertifikatDataAnalytics from "../asset/certificates/Intro Data Analytics.pdf";
import sertifikatDataFeb from "../asset/certificates/E-Sertifikat SC Data Februari 2025.pdf";
import sertifikatPivotTable from "../asset/certificates/E-Certif SC Pivot Table in Microsoft Excel MySkill.pdf";
import sertifikatSQL from "../asset/certificates/Belajar Dasar SQL-Dicoding.pdf";
import sertifikatDataScience from "../asset/certificates/Belajar Dasar Data Science-Dicoding.pdf";

export const certificates = [
  {
    id: 1,
    title: "Maju Bareng AI",
    issuer: "Program Pelatihan AI",
    year: "2024",
    description:
      "Sertifikat program pelatihan Artificial Intelligence yang mencakup konsep dasar hingga implementasi AI.",
    file: sertifikatMajuBareng,
    skills: ["AI", "Machine Learning", "Deep Learning"],
  },
  {
    id: 2,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Platform Pembelajaran",
    year: "2024",
    description:
      "Sertifikat penguasaan dasar pemrograman Python, mencakup syntax, struktur data, dan OOP.",
    file: sertifikatPython,
    skills: ["Python", "Programming", "OOP"],
  },
  {
    id: 3,
    title: "Introduction to Data Analytics",
    issuer: "Platform Pembelajaran",
    year: "2024",
    description:
      "Sertifikat pengantar data analytics, mencakup analisis data, visualisasi, dan interpretasi data.",
    file: sertifikatDataAnalytics,
    skills: ["Data Analytics", "Visualization", "Analysis"],
  },
  {
    id: 4,
    title: "Data Analytics Bootcamp",
    issuer: "MySkill",
    year: "2025",
    description:
      "Sertifikat bootcamp data analytics bulan Februari 2025, mencakup analisis data komprehensif.",
    file: sertifikatDataFeb,
    skills: ["Data Analytics", "Excel", "Statistics"],
  },
  {
    id: 5,
    title: "Pivot Table in Microsoft Excel",
    issuer: "MySkill",
    year: "2024",
    description:
      "Sertifikat penguasaan Pivot Table di Microsoft Excel untuk analisis data yang efisien.",
    file: sertifikatPivotTable,
    skills: ["Excel", "Pivot Table", "Data Analysis"],
  },
  {
    id: 6,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    year: "2024",
    description:
      "Sertifikat pembelajaran SQL dasar dari Dicoding, mencakup query, database design, dan manipulasi data.",
    file: sertifikatSQL,
    skills: ["SQL", "Database", "Query"],
  },
  {
    id: 7,
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding",
    year: "2024",
    description:
      "Sertifikat pembelajaran dasar data science dari Dicoding, mencakup Python, statistics, dan ML basics.",
    file: sertifikatDataScience,
    skills: ["Data Science", "Python", "Statistics"],
  },
];
