
import "./styless.css";

import React, { useState, useEffect } from "react";
import Pdf from "@mikecousins/react-pdf";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, } from '@heroicons/react/24/outline';
import './index.css';

const handleClick = () => {
  fetch('prop.pdf').then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'prop.pdf';
      alink.click();
    })
  })
};


const Proposal = () => {
  const [page, setPage] = useState(1);
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])



  return (

    <Pdf file="prop.pdf" page={page} scale={windowDimension.winWidth/5000 + 0.2}>
      {({ pdfDocument, pdfPage, canvas }) => (
        <>
          {Boolean(pdfDocument && pdfDocument.numPages) && (
            <nav>
              <div>
                {!pdfDocument && <span>Loading...</span>}
                {canvas}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center">
                  <button>
                    <ArrowLeftCircleIcon className="h-12 w-12" onClick={() => setPage(page - 1)} />
                  </button>
                  <button>
                    <ArrowRightCircleIcon className="h-12 w-12" onClick={() => setPage(page + 1)} />
                  </button>
                </div>
              </div>

              <div className="my-dform">

                <button
                  type="button"
                  class="dbtn-grid"
                  onClick={handleClick}
                >

                  <span class="front">Download Proposal</span>
                </button>
              </div>
            </nav>
          )}
        </>
      )}
    </Pdf>
  );
};

export default Proposal



