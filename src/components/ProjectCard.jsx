import test from "../assets/images/test.png";

import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";

function ProjectCard({
  title = "Test",
  // image = test,
  image,
  technologies = ["Python", "Flask", "Pandas"],
  appUrl,
  githubUrl,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nisl odio, in ultrices metus sollicitudin porta. ",
  placeholderIcon,
}) {
  console.log(test);
  return (
    <div>
      <HoverOverlay appUrl={appUrl} githubUrl={githubUrl} />
      <div className="col-span-1 flex flex-col aspect-square bg-white rounded-lg bg shadow-md p-6 items-center justify-center">
        {image ? (
          <img src={image} className="aspect-video object-cover rounded-lg" />
        ) : (
          <div className="w-full aspect-video flex flex-col bg-gray h-100 justify-center items-center">
            <span className="bg-blue-500 rounded-full w-max p-2 flex flex-col justify-center items-center text-white">
              {placeholderIcon ? placeholderIcon : <BsCodeSlash size={40} />}
            </span>
          </div>
        )}
        <div className="grow flex flex-col items-center justify-center">
          <h3 className="text-3xl pt-1 pb-1">{title}</h3>
          <div className="flex flex-row">
            {technologies.map((tech) => (
              <p className="bg-blue-500 px-2 pt-1 pb-1 text-white rounded-md m-1">
                {tech}
              </p>
            ))}
          </div>
          <p className="text-md">{description}</p>
        </div>
      </div>
    </div>
  );
}

function HoverButton() {}

function HoverOverlay({ appUrl, githubUrl }) {
  const overlayClass =
    "bg-black absolute left-0 top-0 w-full aspect-square rounded-lg z-5 transition-all duration-200 bg-opacity-0 hover:bg-opacity-75 group";
  const overlayButtonClass =
    "mx-3 p-2 rounded-3xl bg-blue-500 text-white hover:text-black transition-all duration-200";

  return (
    <div className="relative bg-slate-800 w-full">
      {(appUrl || githubUrl) && (
        <span className={overlayClass}>
          <div className="flex flex-row w-full h-full justify-center items-center scale-0 group-hover:scale-100">
            {appUrl && (
              <button className={overlayButtonClass}>
                <a href={appUrl} target="_blank">
                  <BiGlobe size={28} />
                </a>
              </button>
            )}
            {githubUrl && (
              <button className={overlayButtonClass}>
                <a href={githubUrl} target="_blank">
                  <BsGithub size={28} />
                </a>
              </button>
            )}
          </div>
        </span>
      )}
    </div>
  );
}

export default ProjectCard;
