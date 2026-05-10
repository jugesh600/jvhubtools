import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              JVToolsHub
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Free online tools for PDF, Image, SEO,
              Text Utilities and many more.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm hover:bg-blue-600 transition"
              >
                FB
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm hover:bg-blue-600 transition"
              >
                IG
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm hover:bg-blue-600 transition"
              >
                TW
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tools">Tools</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-semibold mb-3">
              Categories
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>PDF Tools</li>
              <li>Image Tools</li>
              <li>SEO Tools</li>
              <li>Text Tools</li>
              <li>Calculator Tools</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-3">
              Newsletter
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Get latest updates & new tools.
            </p>

            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white outline-none"
              />

              <button
                className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 JVToolsHub. All Rights Reserved.
          </p>

          <div className="flex gap-4 text-xs text-gray-500">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-condition">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}