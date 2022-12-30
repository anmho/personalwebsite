import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  isScrolled: boolean;
}

function Navbar({ isScrolled }: NavbarProps) {
  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : ""
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

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <li className="mx-2 text-lg font-semibold relative group px-2">
      <a href={href}>{title}</a>
      <span className="bg-black w-0 group-hover:w-full group-hover:right-0 h-0.5 absolute left-0 bottom-0 transition-all" />
    </li>
  );
}

export default Navbar;
