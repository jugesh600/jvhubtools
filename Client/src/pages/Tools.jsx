import ToolCard from "../components/ToolCard";

export default function Tools() {
  const toolsData = [
    {
      title: "Image Compressor",
      desc: "Compress images without losing quality quickly and easily.",
    },
    {
      title: "PDF Converter",
      desc: "Convert PDF files into Word, JPG, PNG and many more formats.",
    },
    {
      title: "Word Counter",
      desc: "Count words, characters, paragraphs and reading time instantly.",
    },
    {
      title: "SEO Meta Generator",
      desc: "Generate SEO-friendly meta title and descriptions for websites.",
    },
    {
      title: "QR Code Generator",
      desc: "Create custom QR codes for links, text, email and contacts.",
    },
    {
      title: "Password Generator",
      desc: "Generate strong and secure passwords for better protection.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            🚀 Powerful Free Online Utilities
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Popular Tools
          </h1>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
            Access high-quality tools for PDF, Image, SEO, Text Utilities,
            Calculators, Security and much more — all in one place.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-14">
          <input
            type="text"
            placeholder="Search your tool here..."
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              desc={tool.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}