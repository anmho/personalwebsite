import ProjectCard from "./ProjectCard";
import personalWebsiteImage from "../assets/images/personalwebsite.png";
import steamStatsImage from "../assets/images/mysteamstats.png";
import currentlyPlayingImage from "../assets/images/currentlyplaying.png";
function Projects() {
  return (
    <section id="projects" className="h-max flex flex-col">
      <h1 className="text-5xl m-5">Projects</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 items-center">
        <ProjectCard
          title="This Website"
          image={personalWebsiteImage}
          technologies={["React", "TailwindCSS", "Flask"]}
          appUrl={"/"}
          githubUrl={"https://github.com/anmho/personalwebsite"}
          description={
            "My personal website to display my current and past projects."
          }
        />
        <ProjectCard
          title="Watchlist"
          image={undefined}
          technologies={["React", "Flask", "pandas", "PostgreSQL"]}
          // appUrl={"/"}
          githubUrl={"https://github.com/anmho/watchlist"}
          description={
            "A movie recommendation app. Utilizes a custom Flask REST API with collaborative filtering."
          }
        />
        <ProjectCard
          title="MySteamStats"
          technologies={["React", "Flask", "Recharts.js", "MaterialUI"]}
          image={steamStatsImage}
          appUrl={"https://mysteamstats.netlify.app/"}
          githubUrl={"https://github.com/anmho/personalwebsite"}
          description={"A Steam play time analytics app."}
        />

        <ProjectCard
          title="NowPlaying"
          technologies={["Javascript", "HTML", "CSS"]}
          image={currentlyPlayingImage}
          appUrl={
            "https://snap-engineering-academy-2022.github.io/classwebsite/andy/"
          }
          githubUrl={
            "https://github.com/Snap-Engineering-Academy-2022/classwebsite/tree/main/andy"
          }
          description={"A web page displaying some of my favorite albums"}
        />
        <ProjectCard
          title="Simdemic"
          technologies={["Javascript", "HTML", "CSS"]}
          appUrl={"https://devpost.com/software/simdemic"}
          description={"Pandemic simulator app."}
          placeholderIcon={undefined}
        />
      </div>
    </section>
  );
}

export default Projects;
