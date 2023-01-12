// interface ContactProps P
import Resume from "./Resume";
import SectionContainer from "./SectionContainer";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  const githubUrl = "github.com/anmho";
  const linkedinUrl = "linkedin.com/in/andrewmnho";
  const gmail = "andyminhtuanho@gmail.com";

  return (
    <SectionContainer id="contact" className="h-48 mt-64 mb-32">
      <div className="w-full flex flex-col align-center">
        <div className="flex-row flex justify-center align-center w-full h-12">
          <div className="flex-row flex justify-between align-center bg-white w-3/4 h-fit p-4 rounded-md drop-shadow-xl">
            <div className="flex flex-col justify-center align-center">
              <h1
                className="text-5xl -tracking-wider p-4 font-semibold
            bg-gradient-to-r bg-clip-text text-transparent 
            from-blue-500 via-purple-500 to-blue-500
            animate-text mb-2 text-left"
              >
                Get in Touch
              </h1>
            </div>

            <div className="flex flex-col justify-center align-center w-fit">
              <a
                href={"https://github.com/anmho/resume/blob/main/main.pdf"}
                target="_blank"
              >
                <div className="flex flex-col justify-center align-center w-64 bg-gray-100 p-4 rounded-lg">
                  <div className="flex-row align-center justify-center flex">
                    <h3 className="mr-2">My Resume</h3>
                    <span className="flex justify-center align-center flex-col">
                      <FiExternalLink size={20} />
                    </span>
                  </div>
                </div>
              </a>

              <div className="flex flex-row align-center justify-evenly">
                <a
                  href={githubUrl}
                  className="flex-grow mx-2 my-4 rounded-md outline-gray-300 outline p-2 align-center justify-center flex"
                  target="_blank"
                >
                  <BsGithub size={20} />
                </a>
                <a
                  href={linkedinUrl}
                  className="flex-grow mx-2 my-4 rounded-md outline-gray-300 outline p-2  align-center justify-center flex"
                  target="_blank"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href={gmail}
                  className="flex-grow mx-2 my-4 rounded-md outline-gray-300 outline p-2  align-center justify-center flex"
                  target="_blank"
                >
                  <SiGmail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
