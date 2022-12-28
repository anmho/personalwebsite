import Navbar from "./Navbar";
import { BsArrowDown } from "react-icons/bs";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full text-left">
        <div className="md:w-1/2 w-3/4 text-left">
          <h3 className="md:text-2xl text-2xl ">Hi, my name is</h3>
          <h1 className="md:text-9xl text-7xl">Andy Ho.</h1>
          <div className="px-2">
            {/* <h5 className="md:text-2xl mt-4 text-md">
              I'm a computer science student at University of California, Irvine
              with a passion for software engineering.
            </h5> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center absolute bottom-0 mb-10">
        <a
          // href="#projects"
          // className="mt-4 rounded-full p-2 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100"
          className="text-white mt-4 rounded-full p-3 transition-all duration-300  bg-blue-500 hover:-translate-y-2 shadow-xl hover:bg-gray-600 cursor-pointer"
        >
          <BsArrowDown size={20}></BsArrowDown>
        </a>
      </div>
    </section>
  );
}
