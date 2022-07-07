import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BsChevronDown } from "react-icons/bs";
import { pdfjs } from "react-pdf";
import Contact from "./components/Contact";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  return (
    <div className="flex flex-col align-middle justify-center text-center">
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center"
      >
        <Navbar />
        <h1 className="text-9xl">Hi, I'm Andy.</h1>
        <h5 className="text-3xl mt-4">
          A college student with a passion for software engineering.
        </h5>

        <div className="flex flex-col items-center absolute bottom-0 mb-10">
          <h3 className="text-3xl">Projects</h3>
          <a
            href="#projects"
            className="mt-4 rounded-full p-2 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100"
          >
            <BsChevronDown size={25}></BsChevronDown>
          </a>
        </div>
      </section>
      <Projects />

      <About />

      <Contact />
    </div>
  );
}

export default App;
