import BlogCard from "../components/BlogCard";
import { blogData } from "../utills/blogdata";
export default function Blog() {
 

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            ✍️ Latest Guides & Updates
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Latest Blog Articles
          </h1>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
            Explore helpful guides, SEO tips, productivity hacks,
            digital tools tutorials and the latest online trends.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-14">
          <input
            type="text"
            placeholder="Search blog articles..."
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}