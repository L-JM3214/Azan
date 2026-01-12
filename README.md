# Azan Tech 💻✨

**A magical, fun, and child-friendly coding adventure platform** built for K-12 kids to learn programming through games, robots, websites, and creative projects!

## 🌟 About the Project

Azn Tech is an interactive web app designed to make coding **exciting and accessible** for young learners. With a playful violet-gold-white theme, cute illustrations, smooth animations, and magical components, kids can explore:

- Interactive games and apps
- Robot adventures
- Website building
- Fun coding puzzles

Built with love using modern tools, perfect for classrooms, homeschooling, or self-learning!

## ✨ Key Features

- Full-screen immersive **video hero** with sparkling overlays
- Responsive & child-friendly UI (mobile-first)
- Magical components:
  - Navbar with robot mascot
  - Hero header & split sections
  - Features cards
  - Projects & image carousels
  - Infinite scrolling gallery
  - FAQ accordion
  - Contact section
- Smooth animations & hover effects (zoom, glow, sparkles)
- Custom Tailwind theme (soft violet + warm gold)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite (fast & modern)
- **Styling**: Tailwind CSS v4 (utility-first + custom theme)
- **Icons**: Lucide React
- **Carousel**: Embla Carousel (smooth & performant)
- **Fonts**: Fredoka (titles) + Quicksand (body) — Google Fonts
- **Deployment-ready**: Easy to host on Vercel/Netlify


## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/L-JM3214/Azan.git
   cd Azan

Install dependenciesBashnpm install
# or
yarn install
Start the development serverBashnpm run dev
# or
yarn dev→ Open http://localhost:5173 in your browser

Build for Production
Bashnpm run build
# Preview locally
npm run preview
📂 Project Structure
textazan/
├── public/               # Static assets (favicons, etc.)
├── src/
│   ├── assets/           # Images & videos
│   ├── components/       # All reusable UI pieces
│   │   ├── ContactSection.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HeroHeader.jsx
│   │   ├── ImageGalleryCarousel.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsCarousel.jsx
│   │   ├── ScrollingGallery.jsx
│   │   ├── SplitHeader.jsx
│   │   └── VideoHero.jsx
│   ├── App.jsx           # Main layout
│   ├── index.css         # Global styles + Tailwind config
│   └── main.jsx          # Entry point
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
├── .gitignore
├── package.json
└── README.md