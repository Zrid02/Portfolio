import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="App">
      <Particles />
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
