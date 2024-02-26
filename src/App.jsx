import "./App.css";
import { Navbar, Section, Projects, About, Experience, Skills, Footer } from "./components";

function App() {
  return (
    <div className="container-main item" id="inicio">
      <Navbar />

      <Section />
      <div className="container-sections item" id="proyectos">
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
