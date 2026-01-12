// src/components/FeaturesCarousel.jsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturesCarousel.css';

const FeaturesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: true,
    draggable: true,
    containScroll: 'trimSnaps',
  });

  // Optional autoplay (disabled by default – kids can swipe freely)
  const autoplay = false;
  const interval = 5000;

  React.useEffect(() => {
    if (!autoplay || !emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), interval);
    return () => clearInterval(timer);
  }, [emblaApi, autoplay]);

  // Kid-friendly feature cards
  const features = [
    {
      title: "Playful Learning",
      text: "Coding feels like your favorite game! Build, play, and laugh while learning real skills. 🎮✨",
    },
    {
      title: "Creative Tools",
      text: "Make anything you dream of — games, robots, stories, apps — with super easy magic tools! 🪄",
    },
    {
      title: "Expert Guidance",
      text: "Friendly teachers and CodeBot are here to help you every step — you're never alone! 🤖💕",
    },
    {
      title: "Awesome Community",
      text: "Team up with other young coders, share your creations, and become best coding buddies! 👫🏆",
    },
    {
      title: "Real Projects",
      text: "Create things that matter — apps for friends, games for family, and projects that WOW everyone! 🌍",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-prayer-violet-50 to-white relative overflow-hidden">
      {/* Subtle background sparkles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl animate-pulse">✨</div>
        <div className="absolute bottom-20 right-20 text-7xl animate-bounce-slow">🚀</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600">
            Super Cool Features! 🌟🧑‍💻
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Discover why kids LOVE coding with us — it's all fun, magic, and zero boring stuff!
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="embla mx-auto max-w-6xl" ref={emblaRef}>
          <div className="embla__viewport rounded-3xl overflow-hidden shadow-magic">
            <div className="embla__container">
              {features.map((feature, index) => (
                <div key={index} className="embla__slide px-4 md:px-6">
                  <div className="card-fun h-full p-8 md:p-12 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-magic-lg transition-all duration-300">
                    <h3 className="text-3xl md:text-4xl font-fun-title font-bold text-prayer-violet-600 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows – big, fun, violet/gold */}
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

export default FeaturesCarousel;