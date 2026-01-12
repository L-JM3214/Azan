// src/components/ImageGalleryCarousel.jsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageGalleryCarousel.css';

const ImageGalleryCarousel = () => {
  // Autoplay instance ref (allows manual play/stop)
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,                  // 3.5 seconds per slide - feels natural
      stopOnInteraction: false,     // Continue after swipe/drag
      stopOnMouseEnter: false,      // We control hover manually
      stopOnFocusIn: false,
      playOnInit: false,            // Don't start on mount - wait for hover
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: true,
      draggable: true,
      containScroll: 'trimSnaps',
    },
    [autoplay.current]
  );

  // Hover handlers - start on enter, stop on leave
  const handleMouseEnter = () => {
    if (autoplay.current) autoplay.current.play();
  };

  const handleMouseLeave = () => {
    if (autoplay.current) autoplay.current.stop();
  };

  // Gallery images (your updated ones)
  const galleryImages = [
    {
      src: "https://cdn.prod.website-files.com/61f7efd44d01cc87c88dc6f3/6933c7084ac0307f98ab1127_6fab03a2-44b0-469e-bb46-d577a59a2895.jpeg",
      alt: "Happy kids coding together in colorful class",
    },
    {
      src: "https://d2hl08zg7q4l7p.cloudfront.net/wp-content/uploads/2024/10/24143141/robot-dancer-build.jpg",
      alt: "Kids exploring coding with robots and tablets",
    },
    {
      src: "https://www.timeforkids.com/wp-content/uploads/2018/11/codingcover.jpg?w=1024",
      alt: "Smiling kids learning coding with friendly character teacher",
    },
    {
      src: "https://kidztech.edubeta.net.ng/wp-content/uploads/2025/11/Gemini_Generated_Image_oi0vnwoi0vnwoi0v.png",
      alt: "Boy coding and repairing cute robot friend",
    },
    {
      src: "https://malhub.org/wp-content/uploads/2025/06/kids-virtual-768x768.jpg",
      alt: "Playful kids in magical coding playground",
    },
    {
      src: "https://black4tech.com/wp-content/uploads/2019/11/Kids-Coding-1.jpg",
      alt: "Designing Robot Kid",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-prayer-violet-50 to-white relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle background sparkles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 text-7xl animate-pulse">✨</div>
        <div className="absolute bottom-20 right-10 text-8xl animate-bounce-slow">🚀</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600">
            Look at All the Magical Things Kids Are Building! 🌟🧑‍💻
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Hover over the gallery to watch it auto-scroll — or swipe yourself!
          </p>
        </div>

        {/* Carousel */}
        <div className="embla mx-auto max-w-7xl" ref={emblaRef}>
          <div className="embla__viewport rounded-3xl overflow-hidden shadow-magic">
            <div className="embla__container">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`embla__slide slide-${(index % 6) + 1} px-4`}
                >
                  <div className="item-wrapper relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/9]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover border-4 border-magic-gold shadow-gold-glow transform hover:scale-105 transition-transform duration-500"
                    />
                    {/* Sparkle overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 transition-opacity duration-300 bg-black/10">
                      <span className="text-6xl md:text-9xl drop-shadow-lg">✨</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="embla__button embla__button--prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-magic-gold text-gray-900 rounded-full p-5 md:p-6 hover:bg-magic-gold-dark hover:text-white transition-all shadow-magic z-10"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="embla__button embla__button--next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-magic-gold text-gray-900 rounded-full p-5 md:p-6 hover:bg-magic-gold-dark hover:text-white transition-all shadow-magic z-10"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryCarousel;