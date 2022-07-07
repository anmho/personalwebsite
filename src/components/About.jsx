import { useRef } from "react";
import Resume from "./Resume";

function About() {
  const resumeContainerRef = useRef();

  return (
    <section
      id="about"
      className="h-max flex flex-col justify-center items-center"
    >
      <div className="h-20 w-full" />

      <h1 className="text-5xl m-5">About</h1>
      <div
        // ref={resumeContainerRef}
        className="flex flex-row w-full items-center justify-evenly px-20"
      >
        <div className="text-2xl p-5 w-[30%] rounded-xl shadow-lg">
          <p className="m-4">
            I am currently studying Computer Science and Statistics at the
            University of California, Irvine.
          </p>
          <div className="flex flex-col">
            <h3 className="text-4xl">Interests</h3>
            <p className="m-4 text-2xl">
              frontend {"&"} backend web development, and machine learning.
            </p>
          </div>
        </div>
        <Resume parent={resumeContainerRef} />
      </div>
    </section>
  );
}

export default About;
