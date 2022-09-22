import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BsChevronDown } from "react-icons/bs";
import { pdfjs } from "react-pdf";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center align-center">
        <div className="xl:max-w-[1440px] w-full flex flex-col text-center sm:px-20 sm:pt-20 px-5 pt-5">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
