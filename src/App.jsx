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
        <h3 className="md:text-2xl text-2xl">Hi, I'm</h3>
        <h1 className="md:text-9xl text-7xl">Andy Ho.</h1>
        <div className="md:w-1/2 w-3/4 px-2">
          <h5 className="md:text-2xl mt-4 text-md">
            A computer science student at University of California, Irvine with
            a passion for software engineering.
          </h5>
        </div>

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
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default App;
