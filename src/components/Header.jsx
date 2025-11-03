import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-primary/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary">A Bridge Forward</span>
              <span className="text-xs text-gray-500 font-medium">Legal Pathways to Your Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">About</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services#expungement" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200">Expungement</Link>
                <Link to="/services#sealing" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200">Sealing</Link>
                <Link to="/services#licensing" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200">Licensing</Link>
                <Link to="/services#clemency" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 rounded-b-lg">Clemency</Link>
              </div>
            </div>
            <Link to="/employers" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">Employers</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">Blog</Link>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden md:inline-flex btn-accent">
              Free Consultation
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">About</Link>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</p>
                <Link to="/services#expungement" className="block text-gray-700 hover:text-primary transition-colors duration-200">Expungement</Link>
                <Link to="/services#sealing" className="block text-gray-700 hover:text-primary transition-colors duration-200">Sealing</Link>
                <Link to="/services#licensing" className="block text-gray-700 hover:text-primary transition-colors duration-200">Licensing</Link>
                <Link to="/services#clemency" className="block text-gray-700 hover:text-primary transition-colors duration-200">Clemency</Link>
              </div>
              <Link to="/employers" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">Employers</Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">Blog</Link>
              <Link to="/contact" className="btn-accent mt-4 text-center">
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;