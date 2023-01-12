import test from "../assets/images/test.png";

import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  project: Project;
  direction: string; // change to enum
}

export type Project = {
  title: string;
  year: string;
  desc: string;
  skills: string[];
  repoUrl: string;
  websiteUrl: string;
  imageUrl: string;
};

function ProjectCard({ project, direction }: ProjectProps) {
  return (
    <div
      className={`flex justify-around align-center mb-4 flex-row${
        direction === "reversed" ? "-reverse" : ""
      }`}
    >
      <ProjectDetails project={project} />
      {/* <div className="flex-grow bg-red-500 flex justify-center align-center relative">
        <div className="bg-white drop-shadow-md w-3/4 rounded-lg aspect-video" />
        <div className="bg-white drop-shadow-md w-10 aspect-[39/18] rounded-md absolute left-0 top-0" />
      </div> */}
    </div>
  );
}

interface ProjectDetailsProps {
  project: Project;
}

function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="flex flex-col justify-center align-center p-4 text-left mb-10 sm:w-[50%]">
      {/* Title and Year */}
      <div className="flex flex-row justify-between align-center mb-4">
        <h3 className="text-3xl">{project.title}</h3>
        <h3 className="text-xl text-gray-600">{project.year}</h3>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-md text-gray-500">{project.desc}</p>
      </div>

      {/* Skills */}
      <div className="mb-2 flex flex-row text-gray-600">
        <p className="text-md mr-1 font-semibold">Skills: </p>
        <p className="text-md">{project.skills.join(", ")}</p>
      </div>

      {/* Git Repo and Live Website */}
      <div className="flex flex-row align-center text-lg text-sky-500">
        <a href={project.repoUrl} className="mr-5 group">
          <p className="after:bg-sky-500 relative after:w-0 after:group-hover:w-full after:group-hover:right-0 after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200">
            Git Repository
          </p>
        </a>
        <a href={project.websiteUrl} className="ml-5 group">
          <p className="after:bg-sky-500 after:w-0 relative after:group-hover:w-full after:group-hover:right-0 after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200">
            Live Website
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
