import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="https://www.abridgeforward.com/" className="text-2xl font-bold text-primary">LEGAL PATHWAYS</a>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 hover:text-primary transition-colors duration-200">
          <a href="https://www.abridgeforward.com/" className="hover:text-primary transition-colors duration-200">Home</a>
          <a href="https://www.abridgeforward.com/about" className="hover:text-primary transition-colors duration-200">About</a>
          <a href="https://www.abridgeforward.com/blog" className="hover:text-primary transition-colors duration-200">Blog</a>
          <a href="https://www.abridgeforward.com/contact" className="hover:text-primary transition-colors duration-200">Contact</a>
          <a href="https://www.abridgeforward.com/expungement" className="hover:text-primary transition-colors duration-200">Expungement</a>
          <a href="https://www.abridgeforward.com/licensing" className="hover:text-primary transition-colors duration-200">Licensing</a>
          <a href="https://www.abridgeforward.com/sealing" className="hover:text-primary transition-colors duration-200">Sealing</a>
          <a href="https://www.abridgeforward.com/clemency" className="hover:text-primary transition-colors duration-200">Clemency</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;