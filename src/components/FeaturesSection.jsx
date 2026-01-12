// src/components/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: "Super Easy & Fun!",
      text: "Coding feels like playing your favorite game — no hard stuff, just colorful blocks and instant magic! ✨",
      image: "https://thumbs.dreamstime.com/b/happy-cute-kids-boy-girl-using-laptop-vector-164554405.jpg",
      alt: "Happy kids coding together on laptop",
    },
    {
      title: "Build Awesome Things!",
      text: "Create your own games, robots, stories, and apps that make your friends say WOW! 🚀",
      image: "https://i0.wp.com/makersmuse.in/wp-content/uploads/2025/07/MakeCode-Arcade.jpg",
      alt: "Kid building exciting coding project game",
    },
    {
      title: "Friendly CodeBot Helper",
      text: "Your cute robot friend is always here to guide you, explain things, and cheer you on! 🤖💕",
      image: "https://thumbs.dreamstime.com/b/cute-robot-character-learning-to-code-visual-programming-interface-friendly-sits-screen-displaying-colorful-blocks-413412250.jpg",
      alt: "Friendly robot teaching coding with blocks",
    },
    {
      title: "Learn & Play Together",
      text: "Team up with friends, solve puzzles, and go on coding adventures — learning is the best game ever!",
      image: "https://thumbs.dreamstime.com/b/cartoon-teamwork-kids-coding-online-learning-collaboration-cute-illustration-working-together-laptop-communicating-423902477.jpg",
      alt: "Kids collaborating on fun coding project",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-prayer-violet-50 to-baby-pink-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600 mb-4">
            Why Kids Love Coding With Us! 🌟
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover how fun, easy, and magical learning to code can be!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-fun transform hover:scale-105 hover:shadow-gold-glow transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-48 md:h-56 object-cover rounded-t-3xl"
                />
                {/* Sparkle decoration */}
                <div className="absolute top-2 right-2 text-4xl animate-spin-slow opacity-80">✨</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-fun-title font-bold text-prayer-violet-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;