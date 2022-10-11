import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BsChevronDown } from "react-icons/bs";
import { pdfjs } from "react-pdf";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    setIsScrolled(window.scrollY > 0);
    // console.log(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return () => {window.removeEventListener("scroll")}
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center align-center">
        <div className="xl:max-w-[1440px] w-full flex flex-col text-center sm:px-20 px-5">
          <Navbar isScrolled={isScrolled} />
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
