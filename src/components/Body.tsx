import Projects from "./Projects";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
function Body() {
  const [focused, setFocused] = useState("projects"); // typescript

  return (
    <>
      <ToggleSwitch
        focused={focused}
        setFocused={setFocused}
        labels={["Projects", "Experience"]}
      />
      <Projects />
      <div>
        {focused === "projects" && <Projects />}
        {focused === "experience" && <Projects />}
      </div>
    </>
  );
}

export default Body;
