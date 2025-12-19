export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce website dengan React, Node.js, dan MongoDB. Fitur keranjang belanja, payment gateway, dan admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo-ecommerce.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan drag & drop, real-time updates, dan kolaborasi tim menggunakan Socket.io.",
    technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/task-app",
    demo: "https://demo-taskapp.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca dengan data real-time dari OpenWeather API. Menampilkan prakiraan 7 hari dan grafik interaktif.",
    technologies: ["React", "Chart.js", "API Integration", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://demo-weather.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Website portfolio modern dengan animasi smooth, dark mode, dan responsive design untuk menampilkan projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://demo-portfolio.com",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "Platform blog dengan CMS, markdown editor, dan SEO optimization. Fitur komentar dan kategori artikel.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/blog",
    demo: "https://demo-blog.com",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Dashboard analytics untuk social media dengan data visualization dan automated reporting.",
    technologies: ["React", "D3.js", "Node.js", "MySQL"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/yourusername/social-dashboard",
    demo: "https://demo-social.com",
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
