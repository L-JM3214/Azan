// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Code Zone', href: '#' },
    { label: 'Fun Projects', href: '#' },
    { label: 'Learn & Play', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[1000] transition-all duration-400
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-magic border-b border-prayer-violet-200' 
          : 'bg-transparent'}
      `}
    >
      <div className="mx-auto px-6 lg:px-12 max-w-7xl h-20 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-4 border-magic-gold shadow-gold-glow transform group-hover:scale-110 transition-transform">
            <img
              src="https://thumbs.dreamstime.com/b/cute-robot-gears-clouds-smiling-robot-big-eyes-ears-machine-mechanical-body-parts-illustration-tech-gadget-cute-421284066.jpg"
              alt="CodeBot - Friendly Robot Mascot"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-fun-title font-bold text-2xl md:text-3xl text-prayer-violet-600 group-hover:text-magic-gold transition-colors">
            Azan
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="
                    text-lg font-medium text-gray-700 hover:text-prayer-violet-600
                    transition-colors relative after:absolute after:bottom-[-6px] 
                    after:left-0 after:w-0 after:h-1 after:bg-magic-gold 
                    after:transition-all hover:after:w-full
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#signup"
            className="btn-fun bg-magic-gold hover:bg-magic-gold-dark text-gray-900 hover:text-white px-10 py-4 text-lg font-medium"
          >
            Join Adventure!🚀
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-prayer-violet-600 z-50 p-2 rounded-full hover:bg-prayer-violet-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-gradient-to-b from-prayer-violet-50 to-white 
          backdrop-blur-sm transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-24 px-8 flex flex-col items-center gap-10
        `}
      >
        <ul className="flex flex-col items-center gap-10 text-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-2xl font-medium text-gray-800 hover:text-prayer-violet-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#signup"
          className="btn-fun bg-magic-gold text-gray-900 text-xl px-12 py-5 mt-6"
          onClick={() => setIsOpen(false)}
        >
          Join dventure!🚀
        </a>
      </div>
    </nav>
  );
};

export default Navbar;