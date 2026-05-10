import { Link } from "react-router-dom";

export default function ToolCard({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition duration-300">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
        <span className="text-2xl">🛠️</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {desc}
      </p>

      {/* Button */}
      <Link
        to="/tools"
        className="inline-block px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Use Tool
      </Link>
    </div>
  );
}