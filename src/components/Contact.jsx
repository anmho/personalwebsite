import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <footer id="contact" className="h-max flex flex-col p-10">
      <h1 className="text-5xl m-5">Contact</h1>
      <div className="flex flex-row justify-center items-center">
        <a
          href="https://github.com/anmho"
          className="m-2 p-2 rounded-full bg-blue-500 text-white transition-all duration-200 hover:text-black"
        >
          <BsGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrewmnho/"
          className="m-2 p-2 rounded-full bg-blue-500 text-white transition-all duration-200 hover:text-black"
        >
          <FaLinkedinIn size={28} />
        </a>
        <a
          href="andyminhtuanho@gmail.com"
          className="m-2 p-2 rounded-full bg-blue-500 text-white transition-all duration-200 hover:text-black"
        >
          <HiOutlineMail size={28} />
        </a>
      </div>
    </footer>
  );
}

export default Contact;
