import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Tools,
  Blog,
  About,
  Contact,
  Login,
  Home,
  Register,
  WordCounter,
  PasswordGenerator,
  QRCodeGenerator,
} from "./utills/index";
export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route
            path="/tools/password-generator"
            element={<PasswordGenerator />}
          />
          <Route path="/tools/qr-code-generator" element={<QRCodeGenerator />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
