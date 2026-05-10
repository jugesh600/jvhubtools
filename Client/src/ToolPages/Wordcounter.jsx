import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const sentences = text
    ? text.split(/[.!?]+/).filter(Boolean).length
    : 0;

  const paragraphs = text
    ? text.split(/\n+/).filter(Boolean).length
    : 0;

  const readingTime = (words / 200).toFixed(1);
  const speakingTime = (words / 130).toFixed(1);

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "word-counter-text.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = [
    { label: "Words", value: words },
    { label: "Characters", value: characters },
    { label: "No Spaces", value: charactersWithoutSpaces },
    { label: "Sentences", value: sentences },
    { label: "Paragraphs", value: paragraphs },
    { label: "Reading Time", value: `${readingTime} min` },
    { label: "Speaking Time", value: `${speakingTime} min` },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showAlert && (
          <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg font-medium">
            Text copied successfully!
          </div>
        )}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Word Counter Tool
          </h1>
          <p className="text-gray-600 text-lg">
            Count words, characters, sentences and reading time instantly
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="w-full h-72 p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-5 text-center hover:shadow-md transition"
              >
                <h3 className="text-sm text-gray-500 font-medium mb-2">
                  {item.label}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Clear Text
            </button>

            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Copy Text
            </button>

            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition"
            >
              Download TXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
