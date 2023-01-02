import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
// @ts-ignore

import { pdfjs } from "react-pdf";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect, useRef } from "react";
import projects from "./assets/static/json/projects.json";
import { motion, useScroll } from "framer-motion";
// import { Sections } from "./components/ToggleSwitch";
import Sections from "./models/section";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [scrollYProgress, setScrollYProgress] = useState(Number);
  // const [focused, setFocused] = useState(Sections.Home);

  // const homeRef = useRef()

  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [
    projectsRef,
    skillsRef,
    // experienceRef,
  ];

  const handleScroll = () => {
    setScrollYProgress(window.scrollY);
    const middle = window.innerHeight / 2;
    const sections = Object.values(Sections);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // use effect on viewport change and

  const [move, setMove] = useState(false);

  // console.log(
  //   Sections[focused],
  //   projectsRef.current?.offsetLeft,
  //   projectsRef.current?.offsetHeight
  // );

  return (
    <main className="w-full overflow-hidden scroll-pt-36 snap-y">
      <div className="flex justify-center align-center flex-row">
        {/* Nav Menu */}
        <div className="flex flex-col justify-center align-center w-full">
          <Navbar scrollYProgress={scrollYProgress} />
          <div className="flex flex-row justify-center align-center">
            <Hero />
          </div>
          {/* Projects */}
          <div
            // ref={projectsRef}
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
          after:drop-shadow-md
          "
          >
            <Projects
              projects={projects}
              // ref={projectsRef}
            />
          </div>
          <div
            className="flex flex-row justify-center align-center bg-gray-200"
            // ref={skillsRef}
          >
            {/* <Skills /> */}
            <Contact />
            {/* <div className="h-12 w-full"></div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
