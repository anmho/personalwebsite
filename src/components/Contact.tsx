// interface ContactProps P
import Resume from './Resume';
import SectionContainer from './SectionContainer';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function Contact() {
  const githubUrl = 'https://github.com/anmho';
  const linkedinUrl = 'https://linkedin.com/in/andrewmnho';
  const gmail = 'andyminhtuanho@gmail.com';

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionContainer
      id="contact"
      className="mb-64"
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        //cubic-bezier(.12,.8,.16,.99)
        transition:
          'transform 1s cubic-bezier(.33,.2,0,.9), opacity 0.5s cubic-bezier(.59,.08,.58,1)',
      }}
    >
      <div
        className="flex justify-between align-center w-full  text-left md:flex-row flex-col"
        ref={ref}
      >
        <div className="flex w-1/2 text-left flex-col">
          <h1 className="text-5xl md:text-7xl mb-6">Contact</h1>
          <p className="text-xl sm:text-2xl">andyminhtuanho@gmail.com</p>
        </div>

        <div className="w-1/2 h-full flex flex-col sm:flex-row md:p-2 text-xl sm:text-2xl">
          <div className="w-1/2 h-full">
            <a href={githubUrl} target="_blank">
              <p>Github</p>
            </a>
            <a href={linkedinUrl} target="_blank">
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
