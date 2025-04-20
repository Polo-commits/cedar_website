
import {Routes, Route} from "react-router-dom";
import Home from "./screens/home/index.jsx";
import About from "./screens/about/index.jsx";
import Services from "./screens/services/index.jsx";
import Contact from "./screens/contact/index.jsx";
import HsePolicy from "./screens/hse-policy/index.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hse-policies" element={<HsePolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}

export default App
