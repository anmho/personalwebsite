import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <Navbar />
      <h3 className="md:text-2xl text-2xl">Hi, my name is</h3>
      <h1 className="md:text-9xl text-7xl">Andy Ho.</h1>
      <div className="md:w-1/2 w-3/4 px-2">
        <h5 className="md:text-2xl mt-4 text-md">
          I'm a computer science student at University of California, Irvine
          with a passion for software engineering.
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
  );
}
