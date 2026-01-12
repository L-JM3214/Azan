// src/components/VideoHero.jsx
import React from 'react';
import './VideoHero.css';

const VideoHero = () => {
  return (
    <section className="video-hero absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      {/* Video – full coverage */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
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
        {/* Fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557683311-973673baf926?w=1600')",
          }}
        />
      </video>

      {/* Overlay – keeps theme consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-prayer-violet-600/50 via-black/40 to-prayer-violet-800/60 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Cloudy White Welcome Text – big & perforated/cloud style */}
        <h1
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            font-fun-title font-extrabold
            mb-6 md:mb-8 lg:mb-10
            bg-gradient-to-br from-white via-gray-50 to-white/95
            bg-clip-text text-transparent
            drop-shadow-[0_8px_40px_rgba(255,255,255,0.9)]
            animate-pulse-slow
            tracking-tight
            leading-tight
            relative
          "
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 15%, rgba(255,255,255,1) 0%, transparent 60%),
              radial-gradient(circle at 80% 75%, rgba(255,255,255,0.95) 0%, transparent 65%),
              linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(245,245,255,0.92) 100%)
            `,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to Little Coders Club 
        </h1>

        {/* Subtitle – reduced again (smaller sizes) */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-medium mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
          Where kids turn wild ideas into games, robots, websites, and pure awesomeness!  
          Start your magical coding adventure today 🌟🚀
        </p>

        {/* Buttons – kept exactly as before */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
          <a
            href="#start"
            className="btn-fun bg-magic-gold hover:bg-magic-gold-dark text-gray-900 hover:text-white px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl lg:text-3xl font-medium shadow-gold-glow hover:shadow-gold-glow-lg transform hover:scale-105 transition-all"
          >
            Start Coding Now! 🎮
          </a>
          <a
            href="#explore"
            className="btn-fun bg-prayer-violet-400 hover:bg-prayer-violet-500 text-white px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl lg:text-3xl font-medium shadow-magic hover:shadow-magic-lg transform hover:scale-105 transition-all"
          >
            Watch the Magic! ✨
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-10 h-10 md:w-12 md:h-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default VideoHero;