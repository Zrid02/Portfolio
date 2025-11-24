import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Particles from "./components/Particles";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Particles />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/accueil" element={<Hero />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
