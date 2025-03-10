import React, { useEffect, useState } from 'react'
import CommonBanner from '../components/CommonBanner'
import AOS from "aos";
import "aos/dist/aos.css";
import Early_years from '../components/Early_years';
import Foundation_years from '../components/Foundation_years';
import Growing_years from '../components/Growing_years';

function Academic() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [active, setActive] = useState("early");
  return (
    <div className='bg-gray-100'>
      <CommonBanner title="Academic"/>
      <div className="container mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5  sm:gap-x-10 justify-center items-center mx-5 ">
            <button
              onClick={() => setActive("early")}
              className={`border-2  h-20 px-4 text-[14px] md:text-lg text-blue-900 font-bold  border-blue-900  w-full   ${
                active === "early" ? "bg-blue-900 text-white" : "bg-gray-100"
              } `}
            >
              EARLY YEARS PROGRAMME{" "}
            </button>
            <button
              onClick={() => setActive("foundation")}
              className={`border-2  h-20 px-4 text-[14px] md:text-lg text-blue-900 font-bold  border-blue-900   w-full 
              ${
                active === "foundation"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100"
              } 
              `}
            >
              THE FOUNDATION YEARS PROGRAMME
            </button>
            <button
              onClick={() => setActive("growing")}
              className={`border-2  h-20 px-4 text-[14px] md:text-lg text-blue-900 font-bold  border-blue-900  w-full   ${
                active === "growing" ? "bg-blue-900 text-white" : "bg-gray-100"
              } `}
            >
              {" "}
              GROWING YEARS PROGRAMME
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-center rounded-md mt-5 md:mx-40 mx-10">
          {active === "early" && (
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <Early_years />
            </div>
          )}
          {active === "foundation" && (
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <Foundation_years />
            </div>
          )}
          {active === "growing" && (
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <Growing_years />
            </div>
          )}
        </div>
    </div>
  )
}

export default Academic