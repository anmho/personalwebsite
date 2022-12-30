import SectionContainer from "./SectionContainer";

interface Skill {
  name: string;
  image: string;
}

// interface SkillCard({skill}) {

// }

function SkillCard() {
  return <div className="bg-red-500 w-12 h-12 m-2"></div>;
}

function Skills() {
  return (
    <SectionContainer className="h-screen mt-64">
      {/* <div className="flex flex-row align-center justify-center bg-green-500">
        <div className="flex flex-col align-center justify-center">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div> */}
    </SectionContainer>
  );
}
export default Skills;
