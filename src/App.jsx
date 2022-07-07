import { useRef } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { BsChevronDown, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { pdfjs } from "react-pdf";
import Resume from "./components/Resume";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const resumeContainerRef = useRef();

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

      <section id="projects" className="h-max flex flex-col px-20 pt-20">
        <h1 className="text-5xl m-5">Projects</h1>
        <div className="grid grid-cols-3 gap-5 items-center">
          <ProjectCard
            title="Personal Website"
            appUrl={"#"}
            githubUrl={"https://github.com/anmho/personalwebsite"}
          />
          <ProjectCard title="WatchList" appUrl={""} githubUrl={""} />
          <ProjectCard title="MySteamStats" appUrl={""} githubUrl={""} />
          <ProjectCard title="unicart" appUrl={""} githubUrl={""} />
          <ProjectCard
            title="Simdemic"
            appUrl={""}
            githubUrl={""}
            urls={[{ url: "", urlName: "GitHub" }, {}]}
          />
        </div>
      </section>

      <section
        id="about"
        className="h-max flex flex-col justify-center items-center"
      >
        <div className="h-20 w-full"></div>

        <h1 className="text-5xl m-5">About</h1>
        <div
          ref={resumeContainerRef}
          className="flex flex-row w-full items-center justify-evenly px-20"
        >
          <div className="text-2xl p-5 w-[30%] rounded-xl shadow-lg">
            <p className="m-4">
              I currently attend University of California, Irvine, where I am
              majoring in Computer Science and minoring in Statistics.
            </p>
            <p className="m-4">
              My primary interests are frontend and backend web development, and
              integrating machine learning techniques into applications.
            </p>
            <p className="m-4">
              I'm constantly learning new things and love collaborating with
              others.
            </p>
          </div>
          <Resume parent={resumeContainerRef} />
        </div>
      </section>

      <footer id="contact" className="h-max flex flex-col p-10">
        <h1 className="text-5xl m-5">Contact</h1>
        <div className="flex flex-row justify-center items-center">
          <a
            href="https://github.com/anmho"
            className="m-2 p-2 rounded-full bg-black text-white transition-all hover:bg-green-800"
          >
            <BsGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewmnho/"
            className="m-2 p-2 rounded-full bg-black text-white transition-all hover:bg-blue-800 "
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
