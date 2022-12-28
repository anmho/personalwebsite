import { motion } from "framer-motion";

function ToggleSwitch({ focused, setFocused, labels }) {
  const left =
    "bg-blue-500 shadow-md w-[46%] h-[84%] rounded-full absolute top-[8%] left-[2%] transition-all";
  const right =
    "bg-blue-500 shadow-md w-[46%] h-[84%] rounded-full absolute top-[8%] left-[52%] transition-all";

  return (
    <div className="w-full flex items-center justify-center cursor-pointer">
      <div
        className={`w-1/6 h-12 shadow-inner bg-gray-100 rounded-full relative min-w-[150px]`}
      >
        {/* Labels */}
        <div className="flex w-full h-full items-center justify-center">
          <button
            className={`text-center ${
              focused === labels[0] ? "text-white" : "text-black"
            } rounded-full w-1/2 z-50 h-full transition-colors duration-300`}
            onClick={() => setFocused(labels[0])}
          >
            <h3>Projects</h3>
          </button>
          <button
            className={`text-center ${
              focused === labels[1] ? "text-white" : "text-black"
            } rounded-full w-1/2 z-50 h-full transition-colors duration-300`}
            onClick={() => setFocused(labels[1])}
          >
            <h3>Experience</h3>
          </button>
        </div>

        {/* Selection Highlight */}

        {/* on hover -> span moves 2% from right side */}
        {/* on click -> span moves 2% from right side permanently */}

        <span
          className={`bg-blue-500 shadow-md w-[46%] h-[84%] rounded-full absolute top-[8%] left-[${
            focused === 0 ? "2%" : "52%"
          }] transition-all duration-200`}
        />

        {/* use arbitrary group */}
      </div>
    </div>
  );
}

export default ToggleSwitch;
