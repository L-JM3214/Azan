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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Remove fixed header if you want pure full-screen hero */}
      {/* <header className="bg-prayer-violet-600 text-white p-4 shadow z-50 relative">
        <h1 className="text-2xl font-fun-title font-bold text-center">Little Africa Coding 💻✨</h1>
      </header> */}

      {/* VideoHero takes full viewport – no padding/margin around it */}
      <div className="w-full h-screen overflow-hidden relative">
        <VideoHero />
      </div>

      {/* All other content starts AFTER the full-screen hero */}
      <div className="relative z-10 bg-white">
        <Navbar />

        <div className="pt-20">  {/* Only this div needs navbar offset */}
          <HeroHeader />
          <FeaturesSection />
          <SplitHeader />
          
          <main className="flex-grow">
            <div className="container mx-auto px-6 py-12">
              <p className="text-center text-xl text-gray-600">
                Welcome! Let's learn magical coding step by step...
              </p>
            </div>
          </main>

          <ProjectsCarousel />
          <ImageGalleryCarousel />
          <ScrollingGallery />
          <FAQAccordion />
          <ContactSection />

          <footer className="bg-prayer-violet-600 text-white text-center py-8">
            <p className="text-lg">© {new Date().getFullYear()} Little Africa Coding — Fun & Code! 🚀</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;