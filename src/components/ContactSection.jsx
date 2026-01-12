// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-prayer-violet-100 to-white relative overflow-hidden">
      {/* Subtle background doodles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-10 top-20 text-8xl animate-pulse">{"</>"}</div>
        <div className="absolute right-20 bottom-30 text-7xl animate-bounce-slow">🤖</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600 mb-4">
            Let's Code Together! 💻🤖
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            We love hearing from young coders, parents, and teachers!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left - Cute Robot Mascot */}
          <div className="card-fun transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 rounded-3xl overflow-hidden border-8 border-magic-gold shadow-gold-glow">
                <img
                  src="https://thumbs.dreamstime.com/z/adorable-friendly-robot-mascot-icon-tech-kids-vector-design-generative-ai-perfect-startups-children-s-educational-apps-423075908.jpg"
                  alt="Friendly robot mascot for kids coding"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-fun-title text-prayer-violet-600 mb-6">
                Say Hello to CodeBot! 🚀
              </h3>

              <a
                href="#chat"
                className="btn-fun inline-block mb-6"
              >
                Chat with Us Now! 💬
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="card-fun">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-fun-title text-magic-gold mb-2">Our HQ</h4>
                <p className="text-lg text-gray-700">123 Code Street, Tech Town 🏰</p>
              </div>

              <div>
                <h4 className="text-2xl font-fun-title text-magic-gold mb-2">Email Us</h4>
                <p className="text-lg text-gray-700">hello@littlecoders.club ✨</p>
              </div>

              <div>
                <h4 className="text-2xl font-fun-title text-magic-gold mb-2">Call Us</h4>
                <p className="text-lg text-gray-700">+1 (800) CODE-FUN</p>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t-2 border-prayer-violet-200">
                <p className="text-center text-xl font-medium text-gray-600 mb-4">Follow our coding adventures!</p>
                <div className="flex justify-center gap-6 flex-wrap">
                  {['instagram', 'youtube', 'facebook'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-16 h-16 rounded-full bg-prayer-violet-100 flex items-center justify-center text-3xl
                               hover:bg-magic-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={platform}
                    >
                      {platform === 'instagram' ? '📸' : platform === 'youtube' ? '📺' : '👍'}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;