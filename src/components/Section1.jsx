import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section id="section-0" className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Legal Pathways
              </span>
              <br />
              <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic">
                to a Brighter Future
              </span>
            </h1>
          </div>

          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">A Bridge Forward</span> helps individuals overcome the barriers of their criminal history and build a path to new opportunities.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              If you're tired of being stigmatized and stymied by your past, we're here to help you clear your record and reclaim your future through legal expungement, sealing, and clemency services.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Illinois Licensed Attorney
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15+ Years Experience
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              1000+ Successful Cases
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto pt-4">
            <Link to="/contact" className="btn-accent text-center text-lg py-4">
              Free Consultation
            </Link>
            <Link to="/services" className="btn-primary text-center">
              Learn About Our Services
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-2">
            <Link to="/employers" className="btn-secondary text-center text-sm">
              Resources for Employers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;