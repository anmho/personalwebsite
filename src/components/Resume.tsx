import { Document, Page } from "react-pdf";
import { useState, useRef } from "react";

function Resume({ parent }) {
  const [width, setWidth] = useState();

  return (
    <div className="shadow-xl hover:shadow-2xl w-max hover:cursor-pointer transition-all duration-300 hover:-translate-y-3 p-1">
      <a
        href="https://personalwebsiteserver.herokuapp.com/resume.pdf"
        target="_blank"
      >
        <Document
          file="https://personalwebsiteserver.herokuapp.com/resume.pdf"
          onLoadSuccess={() => {
            // console.log(parent.current.clientHeight, parent.current.clientWidth);
            console.log(window.innerHeight, window.innerWidth);
            setWidth(window.innerHeight * 0.5);
          }}
        >
          <Page pageNumber={1} width={width} />
        </Document>
      </a>
    </div>
  );
}

export default Resume;
