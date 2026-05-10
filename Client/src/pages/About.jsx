import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left Content */}
          <div>
            <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-5">
              🚀 About JVToolsHub
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Platform for
              <span className="text-blue-600"> Free Online Tools</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              JVToolsHub is built to make everyday digital work easier.
              From PDF tools to image optimization, SEO utilities,
              calculators, and productivity tools — everything is
              available in one place for free.
            </p>

            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Our mission is simple: save your time, improve your work,
              and help you grow faster with smart digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/tools"
                className="px-7 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
              >
                Explore Tools
              </Link>

              <Link
                to="/contact"
                className="px-7 py-4 rounded-2xl border border-gray-300 text-gray-700 font-semibold text-center hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="About JVToolsHub"
              className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
            />
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600 mt-2">Free Tools</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
            <p className="text-gray-600 mt-2">Monthly Users</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2">Blog Articles</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-2">User Satisfaction</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose JVToolsHub?
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We focus on simplicity, speed and real value so you can
            work smarter without wasting time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">⚡ Fast & Free</h3>
            <p className="text-gray-600">
              All tools are fast, simple and completely free to use.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">🔒 Secure & Reliable</h3>
            <p className="text-gray-600">
              Your files and data remain safe with trusted processing.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">📈 SEO Friendly</h3>
            <p className="text-gray-600">
              Built for growth, organic traffic and better productivity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}