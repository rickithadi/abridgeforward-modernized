import React from 'react';

const Footer = () => {
  const { links } = {
    text: '',
    links: [
      {
        text: '(847) 804-0157',
        href: 'tel:(847) 804-0157',
        internal: false,
      },
      {
        text: 'isilver@abridgeforward.com',
        href: 'mailto:isilver@abridgeforward.com',
        internal: false,
      },
      {
        text: 'Mulberry Design Co.',
        href: 'http://www.mulberrydesignco.com',
        internal: false,
      },
    ],
    html: '',
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="space-y-4 md:space-y-6">
            <a href={links[0].href} className="text-gray-400 hover:text-primary transition-colors duration-300">
              {links[0].text}
            </a>
            <a href={links[1].href} className="text-gray-400 hover:text-primary transition-colors duration-300">
              {links[1].text}
            </a>
          </div>
          <div className="space-y-4 md:space-y-6">
            <a href={links[2].href} className="text-gray-400 hover:text-primary transition-colors duration-300">
              {links[2].text}
            </a>
          </div>
          <div className="space-y-4 md:space-y-6">
            <p className="text-gray-400">© 2023 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;