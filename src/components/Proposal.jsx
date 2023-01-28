
import ReactDOM from "react-dom";
import "./styless.css";
// import styled from 'styled-components';
// import { MDBBtn } from 'mdb-react-ui-kit';

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

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-radius: 5px;
//   margin: 10px 0px;
//   cursor: pointer;
// `;
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
              {/* <ul className="pager"> */}
                {/* <li className="previous"> */}
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



// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';

// class Proposal extends Component {
  //   state = {
    //     numPages: null,
    //     pageNumber: 1,
    //   }
    
    //   onDocumentLoadSuccess = ({ numPages }) => {
      //     this.setState({ numPages });
      //   }
      
      //   render() {
        //     const { pageNumber, numPages } = this.state;

        //     return (
          //       <div>
//         <Document
//           file="./prop.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

// export default Proposal





// import React,{ useRef, useState } from 'react';
// import { usePdf } from '@mikecousins/react-pdf';
// import {
//   ArrowLeftCircleIcon,
//   ArrowRightCircleIcon,
// } from '@heroicons/react/24/outline';
// import './index.css';
// import clsx from 'clsx';

// function Proposal() {
//   const [page, setPage] = useState(1);
//   const canvasRef = useRef(null);

//   const { pdfDocument } = usePdf({
//     file: 'prop.pdf',
//     page,
//     canvasRef,
//     scale: 0.4,
//   });

//   const previousDisabled = page === 1;
//   const nextDisabled = Boolean(page === pdfDocument?.numPages);

//   return (
//     <div className="w-full flex flex-col">
//       {/* <div className="bg-gradient-to-r from-sky-800 to-indigo-800">
        
//       </div> */}
//       <div>
//         <div className="container text-center py-12 mx-auto flex">
//           <div className="flex-1 flex flex-col justify-center">
//             <div className="text-center">
//               <button
//                 disabled={previousDisabled}
//                 onClick={() => setPage(page - 1)}
//                 className={clsx(previousDisabled && 'text-gray-300')}
//               >
//                 <ArrowLeftCircleIcon className="h-12 w-12" />
//               </button>
//             </div>
//           </div>
//           <div>
//             {!pdfDocument && <span>Loading...</span>}
//             <canvas ref={canvasRef} />
//           </div>
//           <div className="flex-1 flex flex-col justify-center">
//             <div className="text-center">
//               <button
//                 disabled={nextDisabled}
//                 onClick={() => setPage(page + 1)}
//                 className={clsx(nextDisabled && 'text-gray-300')}
//               >
//                 <ArrowRightCircleIcon className="h-12 w-12" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
    
//     </div>
//   );
// }

// export default Proposal;