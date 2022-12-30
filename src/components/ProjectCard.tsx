import test from "../assets/images/test.png";

import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  title: string;
  year: string;
  desc: string;
  skills: string[];
  repoUrl: string;
  websiteUrl: string;
}

function ProjectCard({
  title,
  year,
  desc,
  skills,
  repoUrl,
  websiteUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col justify-center align-center p-4 text-left mb-10 ">
      {/* Title and Year */}
      <div className="flex flex-row justify-between align-center mb-4">
        <h3 className="text-3xl">{title}</h3>
        <h3 className="text-xl text-gray-600">{year}</h3>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-md text-gray-500">{desc}</p>
      </div>

      {/* Skills */}
      <div className="mb-2 flex flex-row text-gray-600">
        <p className="text-md mr-1 font-semibold">Skills: </p>
        <p className="text-md">{skills.join(", ")}</p>
      </div>

      {/* Git Repo and Live Website */}
      <div className="flex flex-row align-center text-lg text-sky-500">
        <a href={repoUrl} className="mr-5 group">
          <p className="after:bg-sky-500 relative after:w-0 after:group-hover:w-full after:group-hover:right-0 after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200">
            Git Repository
          </p>
          {/* <p className="hover-underline">Git Repository</p> */}
        </a>
        <a href={websiteUrl} className="ml-5 group">
          {/* <p className="hover-underline">Live Website</p> */}
          <p className="after:bg-sky-500 after:w-0 relative after:group-hover:w-full after:group-hover:right-0 after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200">
            Live Website
          </p>
        </a>
      </div>
    </div>
  );
}

// function ProjectCard({
//   title = "Test",
//   // image = test,
//   image,
//   technologies,
//   appUrl,
//   githubUrl,
//   description,
//   placeholderIcon,
// }) {
//   return (
//     <div>
//       <HoverOverlay appUrl={appUrl} githubUrl={githubUrl} />
//       <div className="col-span-1 flex flex-col aspect-square bg-white rounded-lg bg shadow-md p-6 items-center justify-center">
//         <ProjectImage image={image} placeholderIcon={placeholderIcon} />
//         <div className="grow flex flex-col items-center justify-center">
//           <h3 className="text-3xl py-1">{title}</h3>
//           <div className="flex flex-row flex-wrap">
//             {technologies.map((tech) => (
//               <p className="bg-blue-500 px-2 pt-1 pb-1 text-white rounded-md m-1">
//                 {tech}
//               </p>
//             ))}
//           </div>
//           <p className="text-md">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProjectImage({ image, placeholderIcon }) {
//   return image ? (
//     <img src={image} className="aspect-video object-cover rounded-lg" />
//   ) : (
//     <div className="w-full aspect-video flex flex-col bg-gray h-100 justify-center items-center">
//       <span className="bg-blue-500 rounded-full w-max p-2 flex flex-col justify-center items-center text-white">
//         {placeholderIcon ? placeholderIcon : <BsCodeSlash size={40} />}
//       </span>
//     </div>
//   );
// }

// function HoverOverlay({ appUrl, githubUrl }) {
//   const overlayClass =
//     "bg-black absolute left-0 top-0 w-full aspect-square rounded-lg z-5 transition-all duration-200 bg-opacity-0 hover:bg-opacity-75 group";
//   const overlayButtonClass =
//     "mx-3 p-2 rounded-3xl bg-blue-500 text-white hover:text-black transition-all duration-200";

//   return (
//     <div className="relative bg-slate-800 w-full">
//       {(appUrl || githubUrl) && (
//         <span className={overlayClass}>
//           <div className="flex flex-row w-full h-full justify-center items-center scale-0 group-hover:scale-100">
//             {appUrl && (
//               <button className={overlayButtonClass}>
//                 <a href={appUrl} target="_blank">
//                   <BiGlobe size={28} />
//                 </a>
//               </button>
//             )}
//             {githubUrl && (
//               <button className={overlayButtonClass}>
//                 <a href={githubUrl} target="_blank">
//                   <BsGithub size={28} />
//                 </a>
//               </button>
//             )}
//           </div>
//         </span>
//       )}
//     </div>
//   );
// }

export default ProjectCard;
