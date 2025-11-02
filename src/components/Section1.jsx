import React from 'react';

const Section1 = () => {
  return (
    <section id="section-0" className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            LEGAL PATHWAYS
          </h1>
          <div className="space-y-4">
            <p className="text-base md:text-lg">
              _to a_ BRIGHTER FUTURE
            </p>
            <p className="text-base md:text-lg font-semibold">
              **A Bridge Forward** works with individuals **tired** of being **stigmatized** and **stymied** by their criminal history.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.abridgeforward.com/individuals" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 focus:ring-4 focus:ring-primary/25 transition-all">
              Individual Cases →
            </a>
            <a href="https://www.abridgeforward.com/employers" className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Employers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;