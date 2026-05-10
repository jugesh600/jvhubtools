import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">
              JVToolsHub
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="w-full text-center px-5 py-3 rounded-xl border border-blue-600 text-blue-600 font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="w-full text-center px-5 py-3 rounded-xl bg-blue-600 text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}