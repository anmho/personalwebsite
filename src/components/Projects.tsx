import ProjectCard, { ProjectProps } from "./ProjectCard";
import personalWebsiteImage from "../assets/images/personalwebsite.png";
import steamStatsImage from "../assets/images/mysteamstats.png";
import currentlyPlayingImage from "../assets/images/currentlyplaying.png";
import SectionContainer from "./SectionContainer";
import { Project } from "./ProjectCard";

interface ProjectsProps extends React.ComponentPropsWithRef<"div"> {
  projects: Project[];
}

function Projects({ projects, ...rest }: ProjectsProps) {
  return (
    <SectionContainer id="projects" {...rest}>
      <div className="flex flex-col w-full">
        <h1
          className="text-6xl -tracking-wider p-4 font-semibold
            bg-gradient-to-r bg-clip-text text-transparent 
            from-blue-500 via-purple-500 to-blue-500
            animate-text mb-2"
        >
          My Projects
        </h1>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            direction={i % 2 == 1 ? "reversed" : ""}
            // title={p.title}
            // year={p.year}
            // desc={p.desc}
            // skills={p.skills}
            // repoUrl={p.repoUrl}
            // websiteUrl={p.websiteUrl}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
