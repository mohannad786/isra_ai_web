import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Methodology', href: '#methodology' },
    // { title: 'Leadership', href: '#leadership' },
    // { title: 'Applications', href: '#applications' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when menu is open (mobile only)
  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className={`container mx-auto rounded-full transition-all duration-300 transform scale-75 md:scale-80 ${scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
        }`}>
        <div className="px-4 md:px-6 py-3 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button - MajorWerks style */}
          <div className="md:hidden flex items-center space-x-4 z-50 relative">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <span className={`text-xs uppercase tracking-widest transition-all duration-700 ${isMenuOpen
              ? 'opacity-100 translate-x-0 text-gray-700 dark:text-gray-200'
              : 'opacity-0 translate-x-8'
              }`}>
              {isMenuOpen ? 'Navigation' : ''}
            </span>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="flex flex-col space-y-2 relative w-8 h-8 justify-center">
                <span className={`block w-8 h-[3px] origin-center transition-all duration-700 ease-in-out bg-gray-700 dark:bg-gray-200 transform ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''
                  }`}></span>
                <span className={`block w-8 h-[3px] origin-center transition-all duration-700 ease-in-out bg-gray-700 dark:bg-gray-200 transform ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''
                  }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - MajorWerks style full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur-lg transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        style={{ zIndex: 40 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
      >
        <div className="h-full pt-32 container mx-auto px-6 pr-8">
          <nav className="max-w-6xl ml-auto w-fit">
            <ul className="flex flex-col space-y-8">
              {navLinks.map((link, index) => (
                <li
                  key={link.title}
                  className="transform transition-all duration-700 ease-in-out"
                  style={{
                    transitionDelay: `${(index + 1) * 50}ms`,
                    transform: `translateX(${isMenuOpen ? '0' : '2rem'})`,
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="relative block text-right text-3xl font-logo font-bold text-white/50 hover:text-white transition-colors group"
                  >
                    {link.title}
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;