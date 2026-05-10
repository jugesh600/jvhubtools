import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const generatePassword = () => {
    let chars = "";

    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?/";

    if (!chars) {
      setPassword("Please select at least one option");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  const copyPassword = async () => {
    if (!password || password === "Please select at least one option") return;

    await navigator.clipboard.writeText(password);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {showAlert && (
          <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg font-medium">
            Password copied successfully!
          </div>
        )}

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Password Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate strong and secure passwords instantly
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3">
              Password Length: {length}
            </label>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              Uppercase Letters
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              Lowercase Letters
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              Symbols
            </label>
          </div>

          <div className="bg-gray-50 border rounded-2xl p-5 mb-6">
            <p className="text-lg font-semibold text-gray-800 break-all">
              {password || "Your generated password will appear here"}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={generatePassword}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Generate Password
            </button>

            <button
              onClick={copyPassword}
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition"
            >
              Copy Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
