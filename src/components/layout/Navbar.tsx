import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white dark:bg-gray-900 shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-blue-900 dark:text-blue-400 transition-colors duration-300"
          >
            NetEduPortal
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/materials" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
            >
              Materials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/login" 
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Login
            </NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Open menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen py-5' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/materials" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
              onClick={toggleMenu}
            >
              Materials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/login" 
              className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white text-center rounded-md transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;