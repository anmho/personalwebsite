import ProjectCard, { ProjectProps } from "./ProjectCard";
import personalWebsiteImage from "../assets/images/personalwebsite.png";
import steamStatsImage from "../assets/images/mysteamstats.png";
import currentlyPlayingImage from "../assets/images/currentlyplaying.png";
import SectionContainer from "./SectionContainer";

// const projects: ProjectProps[] =

interface ProjectsProps {
  projects: ProjectProps[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <SectionContainer id="projects">
      <div className="flex flex-col w-full sm:max-w-[50%]">
        <h1 className="text-5xl mb-4">My Projects</h1>
        {projects.map((p) => (
          <ProjectCard
            title={p.title}
            year={p.year}
            desc={p.desc}
            skills={p.skills}
            repoUrl={p.repoUrl}
            websiteUrl={p.websiteUrl}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
