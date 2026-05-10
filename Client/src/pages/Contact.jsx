import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form UI ready hai, backend baad me connect karenge 🚀");

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            📩 Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Work Together
          </h1>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a question, suggestion, or business inquiry?
            Reach out to us and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Side */}
          <div className="space-y-5">

            <div className="bg-gray-50 border rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Mail className="text-blue-600" size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Email Address
                </h3>
                <p className="text-gray-600 mt-1">
                  support@jvtoolshub.com
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Phone className="text-blue-600" size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Phone Number
                </h3>
                <p className="text-gray-600 mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <MapPin className="text-blue-600" size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Office Location
                </h3>
                <p className="text-gray-600 mt-1">
                  New Delhi, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white border rounded-3xl shadow-sm p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send Message
            </h2>

            <p className="text-gray-600 mb-6">
              Fill the form below and we’ll contact you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}