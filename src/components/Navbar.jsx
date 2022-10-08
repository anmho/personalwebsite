import { useState, useRef, useEffect } from "react";

function Navbar({ isScrolled }) {
  return (
    <div
      className={`transition-shadow duration-500 bg-white ${
        isScrolled ? "shadow-md" : ""
      } flex justify-between items-center fixed top-0 left-0 w-full p-5 px-20 z-50`}
    >
      <span className="text-3xl">
        <a href="#home">AH</a>
      </span>
      <ul className="flex flex-row">
        <NavItem title="Projects" href="#projects" />
        <NavItem title="About" href="#about" />
        <NavItem title="Contact" href="#contact" />
      </ul>
    </div>
  );
}

function NavItem({ title, href }) {
  return (
    <li className="pl-2 pr-2 text-lg font-semibold">
      <a href={href}>{title}</a>
    </li>
  );
}

export default Navbar;
