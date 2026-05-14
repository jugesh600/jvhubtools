import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Sorry, the page you are looking for does not exist or may have been moved.
            Please check the URL or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>

            <Link
              to="/tools"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
