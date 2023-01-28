
import ReactDOM from "react-dom";
import "./styless.css";


import React, { useState } from "react";
import Pdf from "@mikecousins/react-pdf";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
import './index.css';
// import Deliverables from "./Deliverables";

                        // <div>
                        //           <Deliverables />
                        //       </div>

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


const Proposal= () => {
  const [page, setPage] = useState(1);
  
  return (
    <div className="w-full flex flex-col">
      <div>
      <div className="container text-center my-12 mx-auto flex">
                   
    <Pdf file="prop.pdf" page={page} scale={0.4}>
      {({ pdfDocument, pdfPage, canvas  }) => (
        <>
          {Boolean(pdfDocument && pdfDocument.numPages) && (
            <nav>
          
                <div>

                    {!pdfDocument && <span>Loading...</span>}
                    {canvas}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="text-center">
                        <button
                          disabled={page === 1}
                          onClick={() => setPage(page - 1)}
                          >
                               <ArrowLeftCircleIcon className="h-12 w-12" />
                        </button>
                        {/* <div className="text-center"> */}
                          <button
                            disabled={page === pdfDocument.numPages}
                            onClick={() => setPage(page + 1)}
                            >
                   <ArrowRightCircleIcon className="h-12 w-12" />
                          </button>
                          
                          {/* </div> */}
                </div>
                </div>
             
<div className="my-dform">

                <button
                type="button"
                      class="dbtn-grid"
                      onClick={handleClick}
                      // variant="outline-primary"
                      // type="submit"
                    >
                      
                      <span class="front">Download Proposal</span>
                    </button>
</div>
          
                        {/* </div> */}
                {/* </li>
                <li className="next"> */}
                  <div className="flex-1 flex flex-col justify-center">

                  </div>
                {/* </li> */}
              {/* </ul> */}
            </nav>
          )}
        </>
      )}
    </Pdf>
    </div>
    </div>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Proposal />, rootElement);
export default Proposal



