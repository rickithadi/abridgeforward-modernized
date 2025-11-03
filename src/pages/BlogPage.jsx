import React from 'react';
import { Link } from 'react-router-dom';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Illinois Expungement Laws: What's Changed in 2024",
      excerpt: "Recent changes to Illinois expungement laws have expanded eligibility for many individuals. Learn what these changes mean for your case.",
      date: "November 1, 2024",
      category: "Legal Updates",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Complete Guide to Record Sealing in Illinois",
      excerpt: "A comprehensive overview of the record sealing process, eligibility requirements, and benefits for individuals with criminal convictions.",
      date: "October 28, 2024",
      category: "Legal Guides",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Professional Licensing with a Criminal Record: Your Options",
      excerpt: "Don't let your criminal history prevent you from pursuing professional goals. Understand your options for obtaining professional licenses.",
      date: "October 25, 2024",
      category: "Career Guidance",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Employer Best Practices: Hiring Individuals with Criminal Records",
      excerpt: "A guide for HR professionals on legal compliance, fair hiring practices, and the benefits of second-chance employment.",
      date: "October 22, 2024",
      category: "For Employers",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Legal Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about criminal record law changes, legal processes, and success stories from A Bridge Forward
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary to-secondary"></div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium mr-3">Featured</span>
                    <span>November 1, 2024</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    Understanding Illinois Expungement Laws: What's Changed in 2024
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Recent legislative changes have significantly expanded expungement eligibility in Illinois. These updates provide new opportunities for individuals who were previously ineligible to clear their records and move forward with their lives.
                  </p>
                  <button className="btn-primary">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights on criminal record law, legal processes, and practical guidance for moving forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mr-3">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary hover:text-primary-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Stay Updated on Legal Changes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Subscribe to receive updates on criminal record law changes, new opportunities for record clearing, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-yellow-800">Blog Coming Soon</h3>
          </div>
          <p className="text-yellow-700 mb-4">
            We're currently developing our blog section with valuable legal insights and updates. In the meantime, learn more about our services or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;