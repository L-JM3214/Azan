// src/components/HeroHeader.jsx
import React from 'react';
import './HeroHeader.css';

const HeroHeader = () => {
  return (
    <section className="hero-header relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Magical coding background with floating blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-prayer-violet-50 via-white to-baby-pink-50 z-0">
        <div className="absolute -left-20 top-10 w-96 h-96 bg-prayer-violet-200 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -right-32 bottom-20 w-80 h-80 bg-magic-gold rounded-full blur-3xl opacity-30 animate-pulse-slow delay-1000"></div>
        
        {/* Fun floating code doodles */}
        <div className="absolute top-20 left-32 text-6xl opacity-30 animate-bounce-slow">{"{ }"}</div>
        <div className="absolute bottom-40 right-40 text-5xl opacity-30 animate-spin-slow">💻</div>
        <div className="absolute top-1/2 left-1/4 text-7xl opacity-20 animate-pulse">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="card-fun py-12 md:py-16 px-6 md:px-12">
            {/* Big Fun Title */}
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-fun-title font-bold text-prayer-violet-600 leading-tight mb-8">
              Little Coders Club! 💻🚀
            </h1>

            {/* Friendly Subtitle */}
            <p className="hero-text text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Learn to code like a superhero with fun games, robots, and magical projects! Perfect for kids K-12 🧑‍💻🏆
            </p>

            {/* Shiny Action Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-6 md:gap-8 mb-16">
              <a
                href="#lessons"
                className="btn-fun bg-magic-gold hover:bg-magic-gold-dark text-gray-900 hover:text-white text-xl md:text-2xl px-12 py-6"
              >
                Start Coding Adventure! 🎮
              </a>
              <a
                href="#projects"
                className="btn-fun bg-prayer-violet-400 hover:bg-prayer-violet-500 text-white text-xl md:text-2xl px-12 py-6"
              >
                Explore Fun Projects! 🧩
              </a>
            </div>

            {/* Main Coding Kids Illustration */}
            <div className="image-wrapper mt-8 md:mt-12">
              <div className="relative inline-block">
                <img
                  src="https://thumbs.dreamstime.com/b/colorful-illustration-children-coding-class-learning-computer-skills-programming-scene-depicts-kids-working-421872464.jpg"
                  alt="Happy diverse kids learning to code with laptops and robots"
                  className="hero-image w-full max-w-3xl mx-auto rounded-3xl border-8 border-magic-gold shadow-gold-glow transform hover:scale-105 transition-transform duration-500"
                />
                {/* Extra fun sparkles */}
                <div className="absolute -top-6 -right-6 text-6xl animate-spin-slow">✨</div>
                <div className="absolute -bottom-8 -left-8 text-5xl animate-bounce-slow">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;