// src/components/FAQAccordion.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQAccordion.css';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is coding super hard?",
      answer: "Not at all! We make it as easy as playing your favorite game — step by step, with lots of fun and no scary words! ✨",
    },
    {
      question: "What age can join the fun?",
      answer: "Anyone who loves adventures and making cool stuff! From 7 to 17 (and even grown-ups can sneak in too) 🧑‍💻",
    },
    {
      question: "Do I need a super fancy computer?",
      answer: "Nope! Your regular laptop, tablet, or even an old one works great. We keep it simple and fun!",
    },
    {
      question: "What if I get stuck on a level?",
      answer: "Our friendly CodeBot and teacher friends are always ready to help! Just ask — we're your coding superheroes! 🤖💪",
    },
    {
      question: "Can I show my parents what I made?",
      answer: "YES! They'll be amazed by your games, websites, and robots. Get ready for big high-fives! 🏆",
    },
    {
      question: "Is it free to start?",
      answer: "Lots of super fun parts are free forever! Some extra magic adventures cost a little — like buying new game levels!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-prayer-violet-50 to-baby-pink-50">
      <div className="container mx-auto px-6">
        {/* Fun Header Image + Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-48 md:w-64 mx-auto mb-6 rounded-2xl overflow-hidden border-8 border-magic-gold shadow-gold-glow">
            <img
              src="https://thumbs.dreamstime.com/b/smiling-children-sitting-laptops-around-smart-robot-standing-table-school-classroom-robotics-programming-smiling-120164086.jpg"
              alt="Happy kids learning coding with friendly robot"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-fun-title font-bold text-prayer-violet-600 mb-4">
            Questions? We've Got Answers! ❓✨
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Curious about our magical coding world? Check out the most asked questions below!
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card-fun overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-gold-glow scale-[1.02]' : ''
              }`}
            >
              <button
                className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left bg-transparent border-none cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex-1 pr-4">
                  {faq.question}
                </h3>

                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-magic-gold text-white rotate-180'
                      : 'bg-prayer-violet-100 text-prayer-violet-600'
                  }`}
                >
                  {openIndex === index ? <Minus size={28} /> : <Plus size={28} />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 md:px-10 text-lg md:text-xl text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;