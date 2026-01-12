// src/components/SplitHeader.jsx
import React from 'react';
import './SplitHeader.css';

const SplitHeader = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[90vh] flex items-stretch bg-gradient-to-r from-prayer-violet-50 to-white">
      <div className="container-fluid mx-auto flex flex-col lg:flex-row h-full">
        {/* Image Side - Left (or right if reversed) */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="image-wrapper h-full">
            <img
              src="https://cdn.prod.website-files.com/63e217cbe07cdb6ee7df2ce5/65c18f2c434231eb273bef6c_seo0210%20(1).png"
              alt="Happy diverse kids coding together in a colorful class"
              className="split-image w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Fun overlay sparkle */}
            <div className="absolute top-4 right-4 text-6xl opacity-70 animate-spin-slow">✨</div>
          </div>
        </div>

        {/* Text Side - Right (card with content) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="card-fun max-w-xl w-full text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium text-magic-gold mb-6 uppercase tracking-wider">
              For Young Super Coders! 🧑‍💻
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fun-title font-bold text-prayer-violet-600 leading-tight mb-8">
              Become Future Tech Wizards! 🌟
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
              Give your kids the superpower to create games, apps, robots, and stories.  
              Coding is more fun than any video game — and way more magical! 🚀🤖
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#start"
                className="btn-fun bg-magic-gold hover:bg-magic-gold-dark text-gray-900 hover:text-white px-10 py-5 text-xl font-medium"
              >
                Start the Adventure Now!
              </a>
              <a
                href="#learn"
                className="btn-fun bg-prayer-violet-400 hover:bg-prayer-violet-500 text-white px-10 py-5 text-xl font-medium"
              >
                See How It Works ✨
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHeader;