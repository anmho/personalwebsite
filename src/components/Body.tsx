import Projects from "./Projects";
import { useState } from "react";
import ToggleSwitch, { Sections } from "./ToggleSwitch";
import Experience from "./Experience";

function Body() {
  const [focused, setFocused] = useState(Sections.Projects); // typescript
  console.log(focused);

  return (
    <section id="body">
      <ToggleSwitch focused={focused} setFocused={setFocused} />
      <div>
        {focused === Sections.Projects && <Projects />}
        {focused === Sections.Experience && <Experience />}
      </div>
    </section>
  );
}

export default Body;
