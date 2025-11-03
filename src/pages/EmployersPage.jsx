import React from 'react';
import { Link } from 'react-router-dom';

function EmployersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              For Employers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Navigate the complex legal landscape of hiring individuals with criminal backgrounds while maintaining compliance and finding great talent
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              The Reality of Background Screening
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the scope and implications of criminal background screening in today's hiring landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">of employers conduct background screenings</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">1/3</div>
              <p className="text-gray-600">of US population has a criminal record</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-accent mb-2">96%</div>
              <p className="text-gray-600">of criminal defendants plead guilty</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Key Challenge</h3>
            <p className="text-lg text-gray-700">
              Today, HR professionals responsible for recruitment face an increasingly complicated matrix of federal, state, and local laws. 
              <span className="font-semibold text-primary"> A Bridge Forward is uniquely positioned to guide HR professionals through this legal maze</span>, 
              helping you interpret criminal background reports and evaluate whether a person with a criminal background is a liability or an asset.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Legal Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate federal and state regulations while maintaining fair and legal hiring practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ban-the-Box Laws */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ban-the-Box Laws</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">31 States Have Laws</h4>
                      <p className="text-gray-600">Regulating when employers can ask about criminal backgrounds</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Varying Requirements</h4>
                      <p className="text-gray-600">Laws vary significantly by state and local jurisdiction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Timing Restrictions</h4>
                      <p className="text-gray-600">Limits on when criminal history can be inquired about</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Federal Guidelines */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Federal Guidelines</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">EEOC Warnings</h4>
                      <p className="text-gray-600">Against screening policies that disproportionately exclude minorities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">FCRA Compliance</h4>
                      <p className="text-gray-600">Fair Credit Reporting Act regulates background check procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Disparate Impact</h4>
                      <p className="text-gray-600">Requirements to avoid discriminatory screening practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Best Practices for Employers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Develop nuanced, flexible hiring policies that evaluate candidates holistically while maintaining legal compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Individual Assessment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Individualized Assessment</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Consider individual circumstances
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Allow candidates to explain their background
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Focus on job-related factors
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Avoid blanket rejection policies
                </li>
              </ul>
            </div>

            {/* Background Verification */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Verification Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Verify accuracy of background checks
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Look beyond surface-level details
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Understand plea bargain context
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Consider rehabilitation evidence
                </li>
              </ul>
            </div>

            {/* Incentives & Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Financial Incentives</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Tax credits for hiring individuals with records
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Potential liability limitations
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Access to motivated workforce
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Enhanced company reputation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="text-2xl font-heading font-bold text-red-700 mb-4">Critical Consideration</h3>
                <p className="text-lg text-red-800 mb-4">
                  <strong>96% of criminal defendants plead guilty</strong> - but this doesn't necessarily mean they committed the crimes they're accused of.
                </p>
                <p className="text-red-700">
                  Some individuals may have pleaded guilty despite innocence due to various factors including legal costs, fear of harsher sentences, or inadequate legal representation. This underscores the importance of individualized assessment rather than automatic disqualification based on criminal records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Employers */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              How We Help Employers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Bridge Forward provides comprehensive guidance to help employers navigate the complex legal landscape of hiring and criminal background screening
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary">Our Employer Services</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Policy Development</h4>
                    <p className="text-gray-600">Create compliant hiring policies that balance legal requirements with business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Background Report Interpretation</h4>
                    <p className="text-gray-600">Help HR teams understand and properly evaluate criminal background reports</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compliance Training</h4>
                    <p className="text-gray-600">Train your team on federal, state, and local hiring regulations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Risk Assessment</h4>
                    <p className="text-gray-600">Evaluate whether a candidate poses a liability risk or represents a valuable asset</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Key Questions We Help You Answer</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-gray-700 italic">
                    "What procedures do you have to evaluate job applicants with criminal records?"
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-gray-700 italic">
                    "How can we ensure our hiring practices comply with Ban-the-Box laws?"
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-gray-700 italic">
                    "What factors should we consider when evaluating a candidate's criminal history?"
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-gray-700 italic">
                    "How can we access tax incentives for hiring individuals with criminal records?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Partner with A Bridge Forward
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you navigate the complex legal landscape of hiring while finding exceptional talent and maintaining full compliance with all applicable laws.
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg py-4 px-8">
              Schedule Employer Consultation
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

export default EmployersPage;