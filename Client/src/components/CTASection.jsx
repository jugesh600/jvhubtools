import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl overflow-hidden relative">

          {/* Background Blur Effect */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <p className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-5">
                🚀 Start Using Free Tools Today
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Save Time, Boost Productivity &
                Grow Faster with JVToolsHub
              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-relaxed max-w-xl">
                Access powerful online tools for PDF, Image, SEO,
                Calculators, Text Utilities and much more —
                all in one place, absolutely free.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Link
                to="/tools"
                className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold text-center hover:bg-gray-100 transition"
              >
                Explore Tools
              </Link>

              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl border border-white text-white font-semibold text-center hover:bg-white/10 transition"
              >
                Get Started Free
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}