import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);

    alert("Register UI ready hai, backend baad me connect karenge 🚀");

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md border grid md:grid-cols-2 overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-blue-600 text-white p-6">
          <p className="text-xs font-medium mb-2">
            Join JVToolsHub 🚀
          </p>

          <h1 className="text-2xl font-bold leading-tight mb-3">
            Create Your
            <br />
            Account
          </h1>

          <p className="text-blue-100 text-sm leading-relaxed">
            Access PDF, SEO, Image tools and many more
            powerful utilities for free.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-5 md:p-6">
          <div className="max-w-xs mx-auto">

            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Register
            </h2>

            <p className="text-gray-500 text-sm mb-5">
              Create your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm"
              >
                Create Account
              </button>

            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}