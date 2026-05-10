import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-5">
              🚀 100+ Free Online Tools Available
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your All-in-One
              <span className="text-blue-600"> Digital Tools Hub </span>
              for Everyday Work
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">
              Compress images, convert PDFs, count words, optimize SEO,
              and access powerful free tools designed to save your time
              and boost productivity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/tools"
                className="px-7 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
              >
                Explore Tools
              </Link>

              <Link
                to="/blog"
                className="px-7 py-4 rounded-2xl border border-gray-300 text-gray-700 font-semibold text-center hover:bg-gray-100 transition"
              >
                Read Blogs
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600 text-sm">Free Tools</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
                <p className="text-gray-600 text-sm">Monthly Users</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">99%</h3>
                <p className="text-gray-600 text-sm">User Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Hero"
              className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}