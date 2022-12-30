import { motion } from "framer-motion";

export enum Sections {
  Projects,
  Experience,
}

interface ToggleSwitchProps {
  focused: Sections;
  setFocused: React.Dispatch<React.SetStateAction<Sections>>;
}

function ToggleSwitch({ focused, setFocused }: ToggleSwitchProps) {
  return (
    <div className="w-full flex items-center justify-center cursor-pointer">
      <div
        className={`w-1/6 h-12 shadow-inner bg-gray-100 rounded-full relative min-w-[150px]`}
      >
        {/* Labels */}
        <div className="flex w-full h-full items-center justify-center">
          <ToggleSection
            section={Sections.Projects}
            focused={focused}
            setFocused={setFocused}
          />
          {/* <button
            className={`text-center ${
              focused === Sections.Experience ? "text-white" : "text-black"
            } rounded-full w-1/2 z-50 h-full transition-colors duration-300`}
            onClick={() => setFocused(Sections.Experience)}
          >
            <h3>Experience</h3>
          </button> */}
          <ToggleSection
            section={Sections.Experience}
            focused={focused}
            setFocused={setFocused}
          />
        </div>

        {/* Selection Highlight */}
        {/* <Slider focused={focused} /> */}
        <span
          className={`left-[${
            focused === Sections.Projects ? "2%" : "52%"
          }] bg-blue-500 shadow-md w-[46%] h-[84%] rounded-full absolute top-[8%] transition-all duration-200`}
        />
      </div>
    </div>
  );
}

interface ToggleSectionProps {
  section: Sections;
  focused: Sections;
  setFocused: React.Dispatch<React.SetStateAction<Sections>>;
}

function ToggleSection({ section, focused, setFocused }: ToggleSectionProps) {
  return (
    <button
      className={`text-center ${
        focused === section ? "text-white" : "text-black"
      } rounded-full w-1/2 z-50 h-full transition-colors duration-300`}
      onClick={() => setFocused(section)}
    >
      <h3>{Sections[section]}</h3>
    </button>
  );
}

interface SliderProps {
  focused: Sections;
}

// function Slider({ focused }: SliderProps) {
//   return (

//   );
// }

export default ToggleSwitch;
