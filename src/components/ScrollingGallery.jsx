// src/components/ScrollingGallery.jsx
import React from 'react';
import './ScrollingGallery.css';

const ScrollingGallery = () => {
  // Cute cartoon images of kids coding & creating magic
  const row1Images = [
    {
      src: "https://thumbs.dreamstime.com/b/colorful-illustration-children-coding-class-learning-computer-skills-programming-scene-depicts-kids-working-421872464.jpg",
      alt: "Happy kids coding together in colorful class",
    },
    {
      src: "https://thumbs.dreamstime.com/b/happy-children-sitting-laptops-learning-programming-school-lesson-smiling-teacher-standing-near-them-coding-ki-88204894.jpg",
      alt: "Kids designing websites on laptops",
    },
    {
      src: "https://thumbs.dreamstime.com/b/cheerful-cartoon-illustration-featuring-happy-boy-surrounded-technology-like-robot-computer-tablet-phone-headphones-camera-422088585.jpg",
      alt: "Boy with robot friend coding apps",
    },
    {
      src: "https://thumbs.dreamstime.com/b/cartoon-teamwork-kids-coding-online-learning-collaboration-cute-illustration-working-together-laptop-communicating-423902477.jpg",
      alt: "Kids collaborating on fun coding project",
    },
    {
      src: "https://thumbs.dreamstime.com/b/colorful-illustration-children-coding-class-learning-computer-skills-programming-scene-depicts-kids-working-421872464.jpg",
      alt: "Loop - Happy kids coding",
    },
  ];

  const row2Images = [
    {
      src: "https://thumbs.dreamstime.com/b/smiling-children-learn-coding-friendly-blueberry-character-as-teacher-using-laptops-colorful-classroom-filled-creativity-400796248.jpg",
      alt: "Kids learning with friendly robot teacher",
    },
    {
      src: "https://thumbs.dreamstime.com/b/children-classroom-setting-engaged-coding-activity-tablets-designing-robot-using-digital-software-evident-396794497.jpg",
      alt: "Diverse kids designing robots",
    },
    {
      src: "https://thumbs.dreamstime.com/b/boy-robots-cartoon-illustration-child-coding-holding-repairing-shows-young-laptop-blue-toy-robot-wrench-414119026.jpg",
      alt: "Kid repairing and coding with cute robot",
    },
    {
      src: "https://thumbs.dreamstime.com/b/children-engaged-fun-coding-activity-robots-indoors-three-kids-joyfully-explore-lessons-colorful-tablets-394957308.jpg",
      alt: "Kids exploring coding with robots",
    },
    {
      src: "https://thumbs.dreamstime.com/b/smiling-children-learn-coding-friendly-blueberry-character-as-teacher-using-laptops-colorful-classroom-filled-creativity-400796248.jpg",
      alt: "Loop - Friendly coding class",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-prayer-violet-50 relative overflow-hidden">
      {/* Subtle floating doodles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 text-8xl animate-pulse">{"</>"}</div>
        <div className="absolute bottom-40 right-32 text-7xl animate-bounce-slow">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Fun Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600">
            Endless Coding Adventures! 🚀✨
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Watch our little coders create magic — hover to pause and zoom!
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="grid-container">
          {/* Row 1 – scrolls LEFT */}
          <div className="grid-row row-1">
            {row1Images.map((img, i) => (
              <div key={`row1-${i}`} className="grid-item">
                <div className="relative overflow-hidden rounded-3xl border-4 border-magic-gold shadow-gold-glow">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery-img w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Sparkle on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
                    <span className="text-6xl md:text-9xl drop-shadow-lg">✨</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 – scrolls RIGHT */}
          <div className="grid-row row-2">
            {row2Images.map((img, i) => (
              <div key={`row2-${i}`} className="grid-item">
                <div className="relative overflow-hidden rounded-3xl border-4 border-magic-gold shadow-gold-glow">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery-img w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Sparkle on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
                    <span className="text-6xl md:text-9xl drop-shadow-lg">✨</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingGallery;