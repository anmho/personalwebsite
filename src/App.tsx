import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
// import { pdfjs } from "react-pdf";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

import { useState, useEffect } from "react";
import projects from "./assets/static/json/projects.json";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return () => {window.removeEventListener("scroll")}
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center align-center flex-row">
        <div className="flex flex-col justify-center align-center w-full">
          <div className="flex flex-row justify-center align-center">
            <Hero />
          </div>
          <div
            className="
          z-20
          flex
          flex-row
          justify-center
          align-center
          relative
          after:bg-white
          after:content-['']
          after:w-full
          after:h-full
          after:absolute
          after:top-64
          after:left-0
          after:right-0
          after:bottom-0
          after:-z-[1]
          after:origin-top-left
          after:-skew-y-3
          "
          >
            <Projects projects={projects} />
          </div>
          <div className="flex flex-row justify-center align-center bg-gray-200">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
