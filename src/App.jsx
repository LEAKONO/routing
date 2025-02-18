import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Theme from './pages/Theme'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
  
          <Routes>
            <Route path="/theme" element={<Theme />} />  
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
