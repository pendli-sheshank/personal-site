import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsSection from "./components/Projects/Projects";
import ContactUsSection from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <ProjectsSection />
      <ContactUsSection />
    </>
  );
}

export default App;
