# Portfolio Website - Struktur Folder

## 📁 Struktur Folder Project

```
porto-ditaa/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, icons, fonts
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar dengan smooth scroll
│   │   ├── Footer.jsx       # Footer dengan social links
│   │   └── Threads.jsx      # WebGL background animation (optimized)
│   │
│   ├── sections/            # Page sections (main content)
│   │   ├── Home.jsx         # Hero section dengan animated background
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills & tech stack
│   │   ├── Projects.jsx     # Portfolio projects showcase
│   │   └── Contact.jsx      # Contact form & info
│   │
│   ├── data/                # Data & content
│   │   └── projectsData.js  # Projects data array
│   │
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global CSS + Tailwind directives
│
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── eslint.config.js         # ESLint configuration
```

## 📦 Penjelasan Struktur

### `/src/components/`

Komponen UI yang reusable dan dapat digunakan di berbagai tempat:

- **Navbar.jsx** - Navigation bar dengan react-scroll untuk smooth scrolling
- **Footer.jsx** - Footer dengan quick links dan social media icons
- **Threads.jsx** - WebGL animated background (optimized untuk performa)

### `/src/sections/`

Sections utama dari halaman portfolio (in order):

1. **Home.jsx** - Hero/landing section dengan greeting
2. **About.jsx** - Informasi tentang diri sendiri
3. **Skills.jsx** - Tech stack dan skill bars
4. **Projects.jsx** - Grid showcase dari projects
5. **Contact.jsx** - Contact form dan informasi kontak

### `/src/data/`

File data terpisah untuk content management:

- **projectsData.js** - Array of projects dengan title, description, tech stack, images, links

### Root Files

- **App.jsx** - Main component yang mengatur layout
- **main.jsx** - Entry point React
- **index.css** - Global styles + Tailwind directives
- **App.css** - Component-specific styles

## 🎨 Tech Stack

- **React** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Scroll** - Smooth scrolling navigation
- **OGL** - WebGL library untuk animated backgrounds

## 🚀 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- Semua components menggunakan functional components + hooks
- Styling menggunakan Tailwind CSS classes
- WebGL backgrounds menggunakan library OGL
- Responsive design untuk mobile, tablet, desktop
- Smooth scroll navigation menggunakan react-scroll
