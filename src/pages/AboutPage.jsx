import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              About A Bridge Forward
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to helping individuals overcome the barriers of their criminal history and build a path to new opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Ina's Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Meet Ina R. Silvergleid, Esq.
                  </h2>
                  <p className="text-lg text-secondary font-semibold mb-2">
                    Founder & Principal Attorney
                  </p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    1123 Emerson St, Ste 209, Evanston, IL 60201
                  </div>
                </div>

                <blockquote className="text-xl italic text-gray-700 border-l-4 border-secondary pl-6 py-4">
                  "I believe in the importance of giving people a second chance. There is nothing more gratifying than seeing someone feel whole again."
                </blockquote>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    After witnessing how criminal backgrounds impeded employment opportunities, especially following the 2008 economic collapse, Ina saw a critical need for someone with her unique legal skill set to offer affordable legal services to those facing barriers to employment and licensing.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ina tirelessly advocates for her clients, taking the time to understand their personal stories to better comprehend why they came to be arrested or convicted. She takes great pains to ensure that clients understand what legal remedies are being employed and why.
                  </p>
                  
                  <p className="text-lg font-semibold text-primary">
                    Ina tells clients that her role as legal advocate does not include judging them for their past mistakes.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">A Multifaceted Approach</h3>
                  <p className="text-gray-700 mb-4">
                    Ina is the first to admit that helping people overcome criminal record barriers sometimes means wearing multiple hats - all at the same time. Most of the time, Ina wears her attorney hat. At other times, she can be found wearing a:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      Career counselor hat
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      Job finder hat
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      Therapist hat
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      Friend hat
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-3 shadow-xl">
                  <img 
                    src="/src/assets/images/180811_Ina_IMG_6260.jpg" 
                    alt="Ina Silvergleid, Founder of A Bridge Forward" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Education & Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A strong foundation in law and communications, combined with deep experience in employment law and criminal justice advocacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Juris Doctor (1990)</h4>
                  <p className="text-gray-600">IIT Chicago-Kent College of Law</p>
                  <p className="text-sm text-secondary font-medium">Graduated Order of Coif</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor's Degree</h4>
                  <p className="text-gray-600">Communications</p>
                  <p className="text-gray-600">University of Illinois at Urbana-Champaign</p>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Professional Background</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Former Employment Law Attorney</h4>
                  <p className="text-gray-600">Extensive experience in workplace legal issues</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expungement Advocate</h4>
                  <p className="text-gray-600">Volunteered at expungement help desk in suburban Cook County</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Volunteer</h4>
                  <p className="text-gray-600">James B. Moran Center for Youth Advocacy</p>
                  <p className="text-gray-600">Center on Halsted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Interests Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Beyond the Law
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In addition to her legal practice, Ina uses her printmaking skills to explore and comment on flaws within the criminal justice system, bringing a unique artistic perspective to her advocacy work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact Ina today to discuss how A Bridge Forward can help you overcome the barriers of your criminal history and build a path to new opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-secondary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:(847) 804-0157" className="text-primary hover:text-primary-700 transition-colors">
                (847) 804-0157
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-secondary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:isilver@abridgeforward.com" className="text-primary hover:text-primary-700 transition-colors">
                isilver@abridgeforward.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-secondary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
              <address className="text-gray-600 not-italic text-center">
                1123 Emerson St, Ste 209<br />
                Evanston, IL 60201
              </address>
            </div>
          </div>
          
          <Link to="/contact" className="btn-accent text-lg py-4 px-8">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;