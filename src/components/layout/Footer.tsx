import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">NetEduPortal</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dedicated to providing quality computer networking education and resources for students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/materials" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  Materials
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">123 University Campus, Building 4, Room 201</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5 text-amber-600 dark:text-amber-400" />
                <a href="mailto:contact@neteduportal.com" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  contact@neteduportal.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-amber-600 dark:text-amber-400" />
                <a href="tel:+1234567890" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} NetEduPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;