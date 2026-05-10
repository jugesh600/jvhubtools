import HeroSection from "../components/HeroSection";
import ToolCard from "../components/ToolCard";
import BlogCard from "../components/BlogCard";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Popular Tools
            </h2>
            <p className="text-gray-600 mt-3">
              Use our most popular free online tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard
              title="Image Compressor"
              desc="Compress images without losing quality"
            />
            <ToolCard
              title="PDF Converter"
              desc="Convert PDF files instantly online"
            />
            <ToolCard
              title="Word Counter"
              desc="Count words, characters & paragraphs"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Latest Blogs
            </h2>
            <p className="text-gray-600 mt-3">
              Read latest updates and guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="Best Free SEO Tools in 2026"
              desc="Top tools for keyword research and SEO growth"
            />
            <BlogCard
              title="How to Compress Images Fast"
              desc="Easy guide for beginners to reduce image size"
            />
            <BlogCard
              title="Top PDF Tools for Students"
              desc="Best tools to manage your study documents"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}