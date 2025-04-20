
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-2xl font-bold mb-4">EduSpace</h3>
            <p className="text-gray-300 mb-4">
              Ауылдық мектеп оқушыларына арналған тегін IT білім беру платформасы
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8">
            <h4 className="text-xl font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Басты бет
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Курстар
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors">
                  Тәлімгерлік
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Байланыс
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-8">
            <h4 className="text-xl font-bold mb-4">Байланыс</h4>
            <p className="text-gray-300 mb-2">
              Email: info@eduspace.kz
            </p>
            <p className="text-gray-300 mb-4">
              Телефон: +7 (7XX) XXX-XX-XX
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EduSpace. Барлық құқықтар қорғалған.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
