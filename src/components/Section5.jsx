import React from 'react';
import { Link } from 'react-router-dom';

export default function Section5() {
  return (
    <div id="section-4" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Path Forward
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Take the first step towards clearing your criminal record and opening new opportunities. Our experienced legal team is here to guide you through every step of the process.
            </p>
            <Link
              to="/contact"
              className="inline-block text-primary hover:bg-primary/10 px-4 py-2 rounded-md transition-colors"
            >
              Get Started Today →
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
            <div className="aspect-video md:aspect-square">
              <img
                src="/hero-image.jpg"
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}