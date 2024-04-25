import React, { useState } from 'react';
import './App.css';
import 'animate.css';
import tengah from "/images/frame-tl.webp";
import kanan from "/images/frame-br.webp";
import kiri from "/images/frame-bl.webp";
import bawah from "/images/frame-tl.webp";
import atas from "/images/frame-tr.webp";


function App() {
  return (
    <>
    <div className="fixed h-screen w-full overflow-hidden flex-col flex">
      <div className="fixed h-screen w-full top-0 right-0 bottom-0 left-0 transform origin-center">
        <div className="flex flex-col items-center justify-center mx-auto h-full border-8">
          <div className="w-full max-w-[400px] h-screen border-8 border-red-500">
            <div>
              <div>
                <ul>
                  <li>
                    <div className="relative">
                      <div className="bg-contain min-h-screen" style={{ backgroundImage: "url(/images/bg.webp)" }}>
                        <div className="frame absolute inset-0 flex items-center justify-center">
                          <img srcSet="/images/frame-tl.webp" className="absolute top-0 left-0 w-48 h-48 animate__animated animate__fadeInDown  animate__slower" alt="frame" />
                          <img srcSet="/images/frame-tr.webp" className="absolute top-0 right-0 w-48 h-48 animate__animated animate__zoomIn animate__slower" alt="frame" />
                          <img srcSet="/images/frame-bl.webp" className="absolute bottom-0 left-0 w-48 h-48 animate__animated animate__zoomIn animate__slower" alt="frame" />
                          <img srcSet="/images/frame-br.webp" className="absolute bottom-0 right-0 w-48 h-48 animate__animated animate__zoomIn animate__slower" alt="frame" />
                        </div>
                        <div className="flex justify-center items-center h-screen w-full">
                          <div style={{ width: "100%" }}>
                            <div className="text-center editable animate__animated animate__fadeInDown animate__slower mb-1 text-sm" style={{ letterSpacing: "0.2rem" }}>
                              THE WEDDING OF
                            </div>
                            <div className="mb-4 flex flex-col justify-center animate__animated animate__zoomIn animate__slower image-editable" style={{ width: "80%", margin: "auto", overflow: "hidden", aspectRatio: "1/1", backgroundImage: "url(/images/circle.webp)", backgroundSize: "100%" }}>
                              <div className="text-center">
                                <div>
                                  <div className="editable text-accent mb-0 font-accent text-2xl leading-none">
                                    Ajeng
                                  </div>
                                  <div className="editable text-accent mt-1 text-sm">
                                    AND
                                  </div>
                                  <div className="editable text-accent mb-0 font-accent text-2xl leading-none">
                                    Aril
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center mx-auto" style={{ maxWidth: "300px" }}>
                              <div className="text-center mb-3 p-2 animate__animated animate__zoomIn animate__slower rounded" style={{ fontSize: "14px" }}>
                                <div className="editable mb-1">
                                  Dear
                                  <br />
                                  Mr/Ms/Brother/Sisters
                                </div>
                                <div id="guestNameSlot" className="editable text-accent font-bold text-lg mb-1" style={{ fontSize: "16px" }}>
                                  Guest Name
                                </div>
                              </div>
                              <button type="button" className="btn-open-invitation btn btn-primary rounded-full mb-4 animate__animated animate__fadeInUp animate__slow" style={{ fontSize: "14px" }}>
                                Open Invitation
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Navigation */}
            {/* end navigation */}
          </div>
        </div>
      </div>
    </div>
      <div className="flex bg-primary">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <li className="flex flex-col items-center justify-center space-y-2 hover:bg-primaryDarker cursor-pointer">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M9.144 20.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1 3.41 3.41 0 0 0 1.013-2.422V9.866c0-.735-.328-1.431-.895-1.902l-6.662-5.29a3.115 3.115 0 0 0-3.958.071L3.467 7.963A2.474 2.474 0 0 0 2.5 9.867v8.703C2.5 20.464 4.047 22 5.956 22h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z" fill="currentColor"/>
            </svg>
            <span className="text-xs">Opening</span>
          </li>
        </ul>
      </div>
  </>
  
  );
}

export default App;
