// src/components/VideoHero.jsx
import React from 'react';
import './VideoHero.css';

const VideoHero = () => {
  return (
    <section className="video-hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source 
          src="https://cdn.pixabay.com/video/2019/09/12/26796-359604154_large.mp4" 
          type="video/mp4" 
        />
        {/* Fallback image if video fails to load */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://blog.acceleratelearning.com/hs-fs/hubfs/Stock%20images/Technology/What%20is%20coding%20for%20kids%3F.jpeg?width=661&height=372&name=What%20is%20coding%20for%20kids%3F.jpeg')" 
          }}
        />
      </video>

      {/* Magical Overlay (soft violet tint + slight gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-prayer-violet-600/40 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-fun-title font-bold text-white mb-6 drop-shadow-2xl">
          Welcome to Little Coders Magic Lab! 🧙‍♂️💻
        </h1>

        <p className="text-xl md:text-3xl text-white/90 font-medium mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Where kids turn ideas into games, robots, websites, and pure awesomeness!  
          Start your coding adventure today ✨🚀
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
          <a
            href="#start"
            className="btn-fun bg-magic-gold hover:bg-magic-gold-dark text-gray-900 hover:text-white px-10 md:px-14 py-6 md:py-8 text-xl md:text-2xl font-medium shadow-gold-glow hover:shadow-gold-glow-lg"
          >
            Start Coding Now! 🎮
          </a>
          <a
            href="#explore"
            className="btn-fun bg-prayer-violet-400 hover:bg-prayer-violet-500 text-white px-10 md:px-14 py-6 md:py-8 text-xl md:text-2xl font-medium shadow-magic hover:shadow-magic-lg"
          >
            Watch the Magic! ✨
          </a>
        </div>
      </div>

      {/* Optional: Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default VideoHero;