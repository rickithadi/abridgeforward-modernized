import React from 'react';

const Section2 = () => {
  return (
    <div id="section-1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Individuals
        </h2>
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-gray-700">
            Nowadays, keeping your criminal background a secret is impossible. Criminal records do not disappear on their own, regardless of their age. A Bridge Forward removes your criminal background from the prying eyes of employers, landlords,
          </p>
          <p className="text-base md:text-lg text-gray-700">
            licensing agencies, and college admissions. Sign up for a free consultation and learn how your background can be eliminated and your future preserved.
          </p>
        </div>
        <a href="https://www.abridgeforward.com/individuals" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Section2;