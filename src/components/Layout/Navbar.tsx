import React, { useState } from 'react';
import { useTheme } from '../../utils/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
export const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#1a1a2e]/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#2563eb] dark:text-[#FF9900]">
              VP
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-300 hidden md:inline">
              Vaishnavi Pangare
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
              Contact
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label="Toggle menu">
              {isMenuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden mt-3 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#FF9900] transition-colors">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};