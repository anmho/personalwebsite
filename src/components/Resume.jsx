import { Document, Page } from "react-pdf";
import { useState, useRef } from "react";

function Resume({ parent }) {
  const [width, setWidth] = useState();

  return (
    <div className="shadow-xl hover:shadow-2xl w-max hover:cursor-pointer transition-all duration-300 hover:-translate-y-3">
      <a href="https://github.com/anmho/resume/raw/main/main.pdf">
        <Document
          file="http://127.0.0.1:5000/"
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
