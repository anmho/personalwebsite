// interface ContactProps P
import Resume from "./Resume";
import SectionContainer from "./SectionContainer";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useRef } from "react";
import { useInView } from "framer-motion";

/* Import as json */
const experiences = [
  {
    company: "Snap Inc.",
    year: "2023",
    title: "Software Engineer Intern",
    location: "New York, NY",
  },

  {
    company: "University of California, Irvine",
    year: "2022",
    title: "Web Developer",
    location: "Irvine, CA",
  },

  {
    company: "Snap Engineering Academy",
    year: "2022",
    title: "Engineering Scholar",
    location: "Santa Monica, CA",
  },
];

function Experience() {
  const githubUrl = "github.com/anmho";
  const linkedinUrl = "linkedin.com/in/andrewmnho";
  const gmail = "andyminhtuanho@gmail.com";

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionContainer
      id="contact"
      className="mb-40"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition:
          "transform 1s cubic-bezier(.33,.2,0,.9), opacity 0.5s cubic-bezier(.59,.08,.58,1)",
      }}
    >
      <div
        className="flex justify-between align-center w-full text-left md:flex-row flex-col"
        ref={ref}
      >
        <div className="flex w-1/2 text-left flex-col">
          <h1 className="text-5xl lg:text-7xl mb-8">Experience</h1>
        </div>

        <div className="md:w-1/2 h-full flex flex-col p-2 font-light">
          {experiences.map((exp, i) => (
            <ExperienceItem experience={exp} key={i} />
          ))}
          {/* <ExperienceItem />
          <ExperienceItem /> */}
        </div>
      </div>
    </SectionContainer>
  );
}

interface IExperience {
  company: string;
  year: string;
  title: string;
  location: string;
}

interface ExperienceItemProps {
  experience: IExperience;
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="w-full sm:mb-24 mb-10 text-lg sm:text-2xl">
      <div className="w-full flex flex-row justify-between">
        <h1>{experience.company}</h1>
        <h1 className="text-gray-300">{experience.year}</h1>
      </div>
      <div className="text-sm sm:text-lg w-full flex flex-row justify-between">
        <h3 className="text-gray-400">{experience.title}</h3>
        <h3 className="text-gray-400">{experience.location}</h3>
      </div>
    </div>
  );
}

export default Experience;
