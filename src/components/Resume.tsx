// @ts-ignore
import { Document, Page } from "react-pdf";
import { useState, useRef } from "react";

function Resume() {
  const [width, setWidth] = useState(0);

  return (
    <div className="drop-shadow-xl hover:drop-shadow-2xl w-max hover:cursor-pointer transition-all duration-300 hover:-translate-y-3 bg-white z-50 mt-64">
      <a
        href="https://github.com/anmho/resume/blob/main/main.pdf"
        target="_blank"
      >
        <Document
          file="https://personalwebsiteserver.herokuapp.com/resume.pdf"
          onLoadSuccess={() => {
            // console.log(parent.current.clientHeight, parent.current.clientWidth);
            console.log(window.innerHeight, window.innerWidth);
            // setWidth(window.innerHeight * 0.5);
          }}
        >
          <Page pageNumber={1} width={width} />
          {/* <Page pageNumber={1} width={width} /> */}
          {/* <Page pageNumber={1} width={width} /> */}
        </Document>
      </a>
    </div>
  );
}

export default Resume;
