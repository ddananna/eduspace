
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-eduspace-700">EduSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-eduspace-600 font-medium">
              Басты бет
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-eduspace-600 font-medium">
              Курстар
            </Link>
            <Link to="/mentorship" className="text-gray-700 hover:text-eduspace-600 font-medium">
              Тәлімгерлік
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-eduspace-600 font-medium">
              Байланыс
            </Link>
            <Button asChild className="bg-eduspace-600 hover:bg-eduspace-700">
              <Link to="/contact#register">Тіркелу</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-eduspace-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Басты бет
            </Link>
            <Link 
              to="/courses" 
              className="block py-2 px-4 text-gray-700 hover:bg-eduspace-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Курстар
            </Link>
            <Link 
              to="/mentorship" 
              className="block py-2 px-4 text-gray-700 hover:bg-eduspace-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Тәлімгерлік
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-gray-700 hover:bg-eduspace-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Байланыс
            </Link>
            <div className="pt-2 pb-1">
              <Button asChild className="w-full bg-eduspace-600 hover:bg-eduspace-700">
                <Link to="/contact#register" onClick={() => setIsMenuOpen(false)}>Тіркелу</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
