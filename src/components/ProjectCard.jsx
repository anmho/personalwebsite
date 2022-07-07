import test from "../images/test.png";
import { FiGlobe } from "react-icons/Fi";
import { BsGithub } from "react-icons/bs";

function ProjectCard({
  title = "Test",
  image = test,
  technologies = ["Python", "Flask", "Pandas"],
  appUrl,
  githubUrl,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nisl odio, in ultrices metus sollicitudin porta. ",
}) {
  return (
    <div>
      <HoverOverlay appUrl={appUrl} githubUrl={githubUrl} />
      <div className="col-span-1 flex flex-col aspect-square bg-white rounded-lg bg shadow-md p-6 items-stretch">
        {<img src={image} className="aspect-video object-cover rounded-lg" />}
        <div className="grow flex flex-col items-center justify-center">
          <h3 className="text-3xl">{title}</h3>
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
                <a href={appUrl}>
                  <FiGlobe size={28} />
                </a>
              </button>
            )}
            {githubUrl && (
              <button className={overlayButtonClass}>
                <a href={githubUrl}>
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
