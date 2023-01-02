import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../models/section";

interface NavbarProps {
  scrollYProgress: number;
}

// function Navbar({ scrollYProgress }: NavbarProps) {
//   const expanded = scrollYProgress > window.innerHeight * 0.8;
//   return (
//     <>
//       <ExpandedNavbar expanded={expanded} />
//       <MiniNavbar expanded={expanded} />
//     </>
//   );
// }

// interface ExpandedNavbarProps {
//   expanded: boolean;
// }

// function ExpandedNavbar({ expanded }: ExpandedNavbarProps) {
//   return (
//     <motion.div
//       animate={{
//         x: expanded ? "100%" : "0%",
//       }}
//       className="bg-white hidden w-[20vw] h-screen top-0 right-0 drop-shadow-xl lg:flex flex-col py-10 px-20 min-w-max z-[99] fixed"
//     >
//       <ExpandedNavItem title={"Projects"} sectionId={"projects"} />
//       <ExpandedNavItem title={"Experience"} sectionId={"experience"} />
//       <ExpandedNavItem title={"Skills"} sectionId={"skills"} />
//     </motion.div>
//   );
// }

// interface ExpandedNavItemProps {
//   title: string;
//   sectionId: string;
// }

// function ExpandedNavItem({ title, sectionId }: ExpandedNavItemProps) {
//   return (
//     <a className="group" href={`#${sectionId}`}>
//       <h1 className="text-5xl -tracking-wider mb-6 hover-underline relative w-fit">
//         {title}
//       </h1>
//     </a>
//   );
// }

// interface MiniNavbarProps {
//   expanded: boolean;
// }
// function MiniNavbar({ expanded }: MiniNavbarProps) {
//   const [focused, setFocused] = useState(Section.Home);

//   const constraintsRef = useRef<HTMLDivElement>(null);
//   console.log(Object.keys(Section).length / 2);

//   return (
//     <motion.div
//       animate={{
//         x: !expanded ? "100%" : "0%",
//       }}
//       className="flex flex-col justify-center align-center right-0 fixed z-[100] rounded-full pr-5 h-screen "
//     >
//       <div
//         className="bg-red-500 rounded-full drop-shadow-lg bg-opacity-50 w-12 flex flex-col justify-center align-center"
//         ref={constraintsRef}
//       >
//         <MiniNavItem
//           setFocused={setFocused}
//           section={Section.Home}
//           sectionLabel={"home"}
//         />
//         <MiniNavItem
//           setFocused={setFocused}
//           section={Section.Projects}
//           sectionLabel={"projects"}
//         />
//         <MiniNavItem
//           setFocused={setFocused}
//           section={Section.Skills}
//           sectionLabel={"skills"}
//         />
//         <MiniNavItem
//           setFocused={setFocused}
//           section={Section.Experience}
//           sectionLabel={"experience"}
//         />

//         <motion.div
//           className=" w-full aspect-square rounded-full p-1 z-[111] absolute top-0 left-0"
//           // animate={}
//           // onDragEnd={(e, info) =>
//           //   console.log(info.offset.x, info.offset.y, info.)
//           // }
//           // dragConstraints={constraintsRef}
//           animate={{
//             top:
//               String(focused * (100 / (Object.keys(Section).length / 2))) + "%",
//           }}
//           // drag="y"
//         >
//           <div
//             className="bg-red-500 aspect-square rounded-full z-[111]"
//             // animate={}
//             // onDragEnd={(e, info) =>
//             //   console.log(info.offset.x, info.offset.y, info.)
//             // }
//             // onClick={() => setFocused((focused) => focused + 1)}
//           ></div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );

//   interface MiniNavItemProps {
//     setFocused: React.Dispatch<React.SetStateAction<Section>>;
//     section: Section;
//     sectionLabel: string;
//   }

//   function MiniNavItem({
//     setFocused,
//     section,
//     sectionLabel,
//   }: MiniNavItemProps) {
//     return (
//       <a
//         href={`#${sectionLabel}`}
//         className="w-full aspect-square rounded-full opacity-80 p-1"
//         onClick={() => setFocused(section)}
//       >
//         <div className="w-full aspect-square bg-gray-500  rounded-full">
//           {/* <p>hello</p> */}
//         </div>
//       </a>
//     );
//   }
// }

// export default Navbar;

interface NavbarProps {
  scrollYProgress: number;
}

function Navbar({ scrollYProgress }: NavbarProps) {
  return (
    <div
      className={`transition-all duration-300 ${
        scrollYProgress > window.innerHeight / 2 ? "bg-white" : ""
      } flex justify-center items-center fixed top-0 left-0 w-full p-5 px-20 z-50 flex-row `}
    >
      <div className="flex justify-between items-center xl:max-w-[1440px] w-full">
        <span className="text-xl flex justify-center align-center">
          <a href="#home" className="-tracking-wide">
            Andrew Ho
          </a>
        </span>
        <ul className="flex flex-row justify-center align-center">
          <NavItem title="Projects" href="#projects" />
          <NavItem title="About" href="#about" />
          <NavItem title="Skills" href="#skills" />

          {/* <NavItem title="Contact" href="#contact" /> */}
        </ul>
        <a href="#contact">
          <div
            className={`h-full p-2 px-4 rounded-full drop-shadow-md transition-all ${
              scrollYProgress > window.innerHeight / 2
                ? "shadow-md bg-sky-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Contact
          </div>
        </a>
      </div>
    </div>
  );
}

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <li className="mx-2 text-lg relative group px-2">
      <a href={href}>{title}</a>
      <span className="bg-black w-0 group-hover:w-full group-hover:right-0 h-0.5 absolute left-0 bottom-0 transition-all" />
    </li>
  );
}

export default Navbar;
