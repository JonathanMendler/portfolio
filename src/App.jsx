import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import PdfDownload from "./components/PdfDownload";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <PdfDownload /> */}
    </>
  );
}

export default App;
