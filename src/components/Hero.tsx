import SectionContainer from "./SectionContainer";
import { IoIosSchool } from "react-icons/io";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <SectionContainer>
      <div
        className="flex justify-between text-left py-20 mt-20 flex-col sm:flex-row"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          //cubic-bezier(.12,.8,.16,.99)
          transition:
            "transform 1s cubic-bezier(.33,.2,0,.9), opacity 0.5s cubic-bezier(.59,.08,.58,1) 0.1s",
        }}
      >
        <div className="sm:w-1/2  mb-8 sm:mb-0">
          <h1 className="text-6xl sm:text-7xl xl:text-9xl flex-grow -tracking-wider">
            Andrew Ho
          </h1>
          <div className="text-gray-200 flex flex-row align-center pl-1">
            <div className="w-5 h-5 rounded-full mr-2">
              <IoIosSchool size={20} />
            </div>
            <p>University of California, Irvine</p>
          </div>
        </div>

        <div className="sm:w-1/2">
          <p
            className="text-md sm:text-xl 
          md:text-2xl
          text-gray-400 flex-grow 
          sm:leading-8 md:leading-10 -tracking-wide font-light
          
          sm:ml-4"
          >
            I'm interested in cloud technology, working with data flows, and
            creating maintainable, reusable services that can benefit anyone.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Hero;
