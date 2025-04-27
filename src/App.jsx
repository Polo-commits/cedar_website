import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Services from "./pages/services/index.jsx";
import Contact from "./pages/contact/index.jsx";
import Gallery from "./pages/gallery/index.jsx";   // <--- NOTICE: lowercase 'gallery'
import HsePolicy from "./pages/hse-policy/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hse-policies" element={<HsePolicy />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} /> {/* <-- lowercase path */}
    </Routes>
  );
}

export default App;
