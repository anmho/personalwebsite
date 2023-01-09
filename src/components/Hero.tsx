import { FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
// import { IconContext, BsArrowDown, FaLinkedinIn } from "react-icons/bs";
import { BsGithub, BsArrowDown } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import SectionContainer from "./SectionContainer";

function InfoCard() {
  return (
    <div className="w-full h-full flex-col justify-center align-center hidden sm:flex">
      <div className=" w-full h-1/2 rounded-lg"></div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="w-full text-left flex flex-col align-center justify-center">
      <div className="md:w-full w-full text-left text-gray-800 p-10">
        <h1 className="md:text-6xl sm:text-4xl text-3xl">Hi! My name is</h1>
        <div className="relative group w-fit mb-6">
          <a target="_blank" href="https://www.linkedin.com/in/andrewmnho/">
            <h1
              className="sm:text-9xl font-semibold 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-blue-500 via-purple-500 to-blue-500
            animate-text text-6xl transition-transform  hover:-skew-x-6"
            >
              Andrew.
            </h1>
          </a>
          <span className="bg-black w-0 group-hover:w-full group-hover:right-0 h-0.5 absolute left-0 bottom-0 transition-all duration-200" />
        </div>
        <div>
          <div className="text-gray-800 flex flex-row align-center ">
            <div className="w-5 h-5 rounded-full mr-1">
              <IoIosSchool size={20} />
            </div>
            <p>University of California, Irvine</p>
          </div>
          <p className="md:text-xl mt-4 text-md">
            I'm interested in cloud technology and working with data flows. I
            love creating maintainable, reusable services that can benefit
            anyone.
          </p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <SectionContainer
      id="home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col w-full h-full justify-center align-center sm:flex-row">
        <HeroText />
        <InfoCard />
      </div>

      <div className="flex flex-col items-center absolute bottom-0 mb-10">
        <a
          href="#body"
          // className="mt-4 rounded-full p-2 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100"
          className="text-white mt-4 rounded-full p-3 transition-all duration-300  bg-blue-500 hover:-translate-y-2 shadow-xl hover:bg-gray-600 cursor-pointer"
        >
          <BsArrowDown size={20}></BsArrowDown>
        </a>
      </div>
    </SectionContainer>
  );
}

export default Hero;
