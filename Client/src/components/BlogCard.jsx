import { Link } from "react-router-dom";

export default function BlogCard({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Blog Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
          alt={title}
          className="w-full h-56 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Category + Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            SEO Guide
          </span>

          <span className="text-sm text-gray-500">
            May 2026
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {desc}
        </p>

        {/* Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}