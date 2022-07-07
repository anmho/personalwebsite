import ProjectCard from "./ProjectCard";
import personalWebsiteImage from "../assets/images/personalwebsite.png";
import steamStatsImage from "../assets/images/mysteamstats.png";
import currentlyPlayingImage from "../assets/images/currentlyplaying.png";
function Projects() {
  return (
    <section id="projects" className="h-max flex flex-col px-20 pt-20">
      <h1 className="text-5xl m-5">Projects</h1>
      <div className="grid grid-cols-3 gap-5 items-center">
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
          appUrl={"/"}
          githubUrl={"https://github.com/anmho/watchlist"}
          description={
            "A movie recommendation app which fetches user data and recommendations from a Flask REST API using collaborative filtering."
          }
        />
        <ProjectCard
          title="MySteamStats"
          technologies={["React", "Flask", "Recharts.js", "MaterialUI"]}
          image={steamStatsImage}
          appUrl={"https://inspiring-youtiao-2dfdd7.netlify.app/"}
          githubUrl={"https://github.com/anmho/personalwebsite"}
          description={
            "Steam play time analytics app. Built server which utilizes Steam Web API to handle user logins and serve play time data"
          }
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
          description={"Web page displaying some of my favorite music albums"}
        />
        <ProjectCard
          title="Simdemic"
          technologies={["Javascript", "HTML", "CSS"]}
          appUrl={"https://devpost.com/software/simdemic"}
          description={"Steam play time analytics app."}
          placeholderIcon={undefined}
        />
      </div>
    </section>
  );
}

export default Projects;
