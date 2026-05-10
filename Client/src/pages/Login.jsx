import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    alert("Login UI ready hai, backend baad me connect karenge 🚀");

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md border grid md:grid-cols-2 overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-blue-600 text-white p-6">
          <p className="text-xs font-medium mb-2">
            Welcome Back 👋
          </p>

          <h1 className="text-2xl font-bold leading-tight mb-3">
            Login To Your
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
              Login
            </h2>

            <p className="text-gray-500 text-sm mb-5">
              Enter your account details
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

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

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Forgot?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm"
              >
                Login
              </button>

            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}