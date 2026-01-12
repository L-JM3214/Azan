// src/App.jsx
import './App.css';
import ContactSection from './components/ContactSection';
import HeroHeader from './components/HeroHeader';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import SplitHeader from './components/SplitHeader';
import ProjectsCarousel from './components/ProjectsCarousel';
import FAQAccordion from './components/FAQAccordion';
import ImageGalleryCarousel from './components/ImageGalleryCarousel';
import ScrollingGallery from './components/ScrollingGallery';
import VideoHero from './components/VideoHero';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-prayer-violet-600 text-white p-4 shadow">
        <h1 className="text-2xl font-fun-title font-bold text-center">💻✨</h1>
      </header>

      <Navbar />

      <div className="pt-20">  {/* ← Add padding-top to push content below fixed navbar */}
        {/* Hero at the very top */}
        
        <VideoHero />
        <HeroHeader />
        <FeaturesSection />
        <SplitHeader />

        {/* Main content */}
        <main className="flex-grow">
          <div className="container mx-auto px-6 py-12">
            <p className="text-center text-xl text-gray-600">
              Welcome! Let's learn magical coding step by step...
            </p>
          </div>
        </main>

        {/* Contact at the bottom */}
        <ProjectsCarousel />
        <ImageGalleryCarousel />
        <ScrollingGallery />
        <FAQAccordion />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-prayer-violet-600 text-white text-center py-8">
          <p className="text-lg">© {new Date().getFullYear()} Little Africa Coding — Fun & Code! 🚀</p>
        </footer>
      </div>
    </div>
  );
}

export default App;