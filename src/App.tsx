import Projects from './components/Projects';
import Hero from './components/Hero';

// import { pdfjs } from "react-pdf";
import { useState, useEffect, useRef } from 'react';
import projects from './assets/static/json/projects.json';
import { motion, useScroll } from 'framer-motion';
import Sections from './models/section';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  // use CMS

  return (
    <main className="w-full overflow-hidden scroll-pt-36 snap-y text-white">
      <Navbar />

      <div className="flex justify-center align-center flex-col  pt-20">
        <div className="flex justify-center align-center h-screen">
          <Hero />
        </div>
        <div className="flex justify-center align-center">
          <Experience />
        </div>
        <div className="flex justify-center align-center">
          <Projects projects={[]} />
        </div>
        <div className="flex justify-center align-center">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
