import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Our Legal Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions to help you clear your criminal record and reclaim your future
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Specialized Criminal Record Relief
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Bridge Forward specializes in helping individuals overcome the barriers created by their criminal history through proven legal remedies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expungement Service */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Expungement</h3>
              <p className="text-gray-600 mb-6">
                Remove arrest records as if the arrest never happened. Available for both adult and juvenile records under specific circumstances.
              </p>
              <a href="#expungement" className="btn-primary text-sm">
                Learn More
              </a>
            </div>

            {/* Sealing Service */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Record Sealing</h3>
              <p className="text-gray-600 mb-6">
                Limit public access to conviction records. Most Illinois convictions are now eligible for sealing under updated laws.
              </p>
              <a href="#sealing" className="btn-primary text-sm">
                Learn More
              </a>
            </div>

            {/* Licensing Service */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Professional Licensing</h3>
              <p className="text-gray-600 mb-6">
                Navigate licensing barriers and regulatory requirements for professional and occupational licenses.
              </p>
              <a href="#licensing" className="btn-primary text-sm">
                Learn More
              </a>
            </div>

            {/* Clemency Service */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Executive Clemency</h3>
              <p className="text-gray-600 mb-6">
                Petition for clemency to eliminate statutory barriers, restore rights, or expunge convictions.
              </p>
              <a href="#clemency" className="btn-primary text-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      
      {/* Expungement Detail Section */}
      <section id="expungement" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/images/chicago-expungement-attorney.jpg" 
                alt="Chicago Expungement Attorney" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Expungement Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Expungement allows you to remove arrest records as if the arrest never happened. This powerful legal remedy can help you move forward without the burden of past arrests affecting your opportunities.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Adult Arrest Record Expungement</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Eligible if no case was filed after arrest</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Available when charges were filed but court dismissed the case</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Expanded eligibility under 2016 law amendments</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Successful completion of court supervision typically required</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Juvenile Record Expungement</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Juvenile records are typically not public</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Three categories of potential automatic or mandatory expungement</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Can expunge "delinquency" findings</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Important Considerations</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Filing fees vary by county</li>
                  <li>• Some court appearances may be mandatory</li>
                  <li>• FBI is notified when records are expunged</li>
                  <li>• Not guaranteed - judges have discretion</li>
                </ul>
              </div>

              <Link to="/contact" className="btn-accent inline-block">
                Get Started with Expungement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sealing Detail Section */}
      <section id="sealing" className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Record Sealing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Think your Illinois conviction can't be sealed? Check again. Today, most Illinois convictions are eligible for sealing, providing a path to limit public access to your criminal record.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Record Sealing Accomplishes</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Limits public access to conviction records</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Prevents most employers from seeing sealed records</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Improves opportunities for employment and housing</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Essential before applying for professional licenses</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-primary mb-3">Expanded Eligibility</h4>
                <p className="text-gray-700">
                  Recent changes to Illinois law have dramatically expanded which convictions are eligible for sealing. Many individuals who were previously ineligible may now qualify for this important relief.
                </p>
              </div>

              <Link to="/contact" className="btn-primary inline-block">
                Check Your Sealing Eligibility
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">When to Consider Sealing</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                    </svg>
                    <span className="text-gray-700">Before job searching</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m0 0h16m0 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" />
                    </svg>
                    <span className="text-gray-700">Professional license applications</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700">Housing applications</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-700">Educational opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing and Clemency Combined Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Licensing */}
            <div id="licensing" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Professional Licensing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Don't let your criminal background prevent you from pursuing your professional goals. We help navigate the complex requirements for professional and occupational licensing.
              </p>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensing Assistance Includes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Evaluation of licensing barriers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Regulatory compliance guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Application assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Appeals and hearings representation</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="btn-primary inline-block">
                Licensing Consultation
              </Link>
            </div>

            {/* Clemency */}
            <div id="clemency" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Executive Clemency
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Want to eliminate a statutory barrier to licensing, reinstate your gun rights, or expunge a conviction? We can help you petition for clemency.
              </p>

              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clemency Can Help With</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Eliminating statutory barriers to licensing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Reinstating gun rights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Expunging certain convictions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Restoring civil rights</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="btn-accent inline-block">
                Clemency Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We guide you through every step of the legal process with transparency and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free initial consultation to assess your case and options</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
              <p className="text-gray-600">Thorough review of your criminal record and eligibility</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Careful preparation of all necessary legal documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolution</h3>
              <p className="text-gray-600">Court representation and follow-through to completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Clear Your Record?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let your past define your future. Contact us today for a free consultation and take the first step toward clearing your criminal record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg py-4 px-8">
              Schedule Free Consultation
            </Link>
            <a href="tel:(847) 804-0157" className="btn-secondary text-lg py-4 px-8">
              Call (847) 804-0157
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;