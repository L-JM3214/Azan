// src/components/ProjectsCarousel.jsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: true,
    draggable: true,
    containScroll: 'trimSnaps',
  });

  // Optional auto-play (disabled by default for kids to explore)
  const autoplay = false;
  const interval = 5000;

  React.useEffect(() => {
    if (!autoplay || !emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), interval);
    return () => clearInterval(timer);
  }, [emblaApi, autoplay, interval]);

  const projects = [
    {
      number: "01",
      title: "Interactive Games",
      description: "Build your own epic games with blocks, characters, and surprises! Make puzzles, adventures, and more — your imagination rules! 🎮✨",
      image: "https://www.weareteachers.com/wp-content/uploads/Coding-Games-for-Kids.png",
      alt: "Kids building fun block-based games",
    },
    {
      number: "02",
      title: "Cool Websites",
      description: "Design your personal website full of colors, pictures, and stories! Show it to friends and family — become a web superstar! 🌐🏆",
      image: "https://thumbs.dreamstime.com/b/happy-children-sitting-laptops-learning-programming-school-lesson-smiling-teacher-standing-near-them-coding-ki-88204894.jpg",
      alt: "Happy kids designing websites on laptops",
    },
    {
      number: "03",
      title: "Fun Apps & Tools",
      description: "Create silly apps, calculators, drawing tools, or robot controllers! Make things that help or just make everyone laugh! 📱🤖",
      image: "https://thumbs.dreamstime.com/b/cheerful-cartoon-illustration-featuring-happy-boy-surrounded-technology-like-robot-computer-tablet-phone-headphones-camera-422088585.jpg",
      alt: "Kid with robot and tech tools creating apps",
    },
    {
      number: "04",
      title: "Robot Adventures",
      description: "Program cute robots to dance, draw, or explore! Team up with friends for the biggest robot party ever! 🤖🚀",
      image: "https://thumbs.dreamstime.com/b/colorful-illustration-children-coding-class-learning-computer-skills-programming-scene-depicts-kids-working-421872464.jpg",
      alt: "Group of kids coding with robots",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-prayer-violet-100 to-white relative overflow-hidden">
      {/* Subtle background doodles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-20 text-7xl animate-bounce-slow">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600">
            Awesome Projects You'll Create! 🚀
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Slide through the fun things you'll build — each one is a magical adventure!
          </p>
        </div>

        {/* Carousel */}
        <div className="embla mx-auto max-w-6xl" ref={emblaRef}>
          <div className="embla__viewport">
            <div className="embla__container">
              {projects.map((project, index) => (
                <div key={index} className="embla__slide px-4 md:px-6">
                  <div className="card-fun h-full flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 transform hover:scale-105 hover:shadow-gold-glow transition-all duration-300">
                    {/* Project Image */}
                    <div className="w-full md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-64 md:h-80 object-cover rounded-2xl border-4 border-magic-gold shadow-gold-glow"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <div className="relative mb-6 inline-block">
                        <span className="text-5xl md:text-7xl font-fun-title font-black text-magic-gold opacity-30 absolute -top-4 -left-8">
                          {project.number}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-fun-title font-bold text-prayer-violet-600 relative z-10">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="embla__button embla__button--prev absolute left-4 top-1/2 -translate-y-1/2 bg-prayer-violet-400 text-white rounded-full p-4 hover:bg-prayer-violet-500 transition-colors shadow-magic"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="embla__button embla__button--next absolute right-4 top-1/2 -translate-y-1/2 bg-prayer-violet-400 text-white rounded-full p-4 hover:bg-prayer-violet-500 transition-colors shadow-magic"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!emblaApi?.canScrollNext()}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;