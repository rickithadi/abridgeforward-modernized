import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LEGAL PATHWAYS
            </h1>
            <div className="flex items-center space-x-4">
              <a href="https://www.abridgeforward.com/" className="inline-block">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5b7df1039f8770c8e3915eca/1535410521383-FV1Z99X8IGD89P0HWAU7/white+%2B+blue+logo.png"
                  alt="A Bridge Forward"
                  className="h-10 md:h-12 lg:h-14"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href="https://www.abridgeforward.com/"
              className="px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}