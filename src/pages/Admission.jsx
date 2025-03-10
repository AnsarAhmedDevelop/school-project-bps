import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonBanner from "../components/CommonBanner";

const Admission = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [toSend, setToSend] = useState({
    name: "",
    grade: "",
    fname: "",
    fmobile: "",
    email: "",
    address: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  console.log(toSend,"form data")
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>  
      <div className="">
        <CommonBanner title="Admission"/>     
        <div className="bg-white py-10">
          <h2
            className=" text-blue-900 text-2xl sm:text-3xl font-serif font-bold leading-normal text-center "
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            School Virtual Tour
          </h2>
          <div className=" flex justify-center py-5 sm:py-10">
            <iframe
              className=" mb-2   items-center justify-center shadow-xl "
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              width="900"
              height="515"
              src="https://www.youtube.com/embed/cuIFuOVG9eA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="bg-gray-100 py-10">
          <div className="grid grid-cols-1 w-full sm:w-1/2 mx-auto">
            <div className=" bg-blue-900 rounded-md shadow-md p-6 sm:p-12 m-2 sm:m-5">
              <div className="font-play text-2xl md:w-xl text-gray-200 ">
                <span className="text-xl sm:text-3xl text-gray-200 font-semibold mb-4 ">
                  Please fill the Form below to<br /> Place  Admission Enquiry
                </span>
                <form action="" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1  gap-x-8 gap-y-8 my-3">
                    <input
                      type="text"
                      placeholder="Name of Student"
                      name="name"
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base   bg-blue-900 col-span-2"
                      value={toSend.name}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Admission Required For Which Grade? "
                      name="grade"
                      value={toSend.grade}
                      onChange={handleChange}
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base   bg-blue-900 col-span-2 "
                    />
                    <input
                      type="text"
                      placeholder="Parent Name "
                      name="fname"
                      value={toSend.fname}
                      onChange={handleChange}
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base    bg-blue-900 col-span-2 "
                    />
                    <input
                      type="text"
                      placeholder="Contact Number"
                      name="fmobile"
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base   bg-blue-900 col-span-2"
                      value={toSend.fmobile}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Email ID"
                      name="email"
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2  sm:text-xl text-base  bg-blue-900 col-span-2"
                      value={toSend.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Residential Address"
                      name="address"
                      className="border-b-2 sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base   bg-blue-900 col-span-2"
                      value={toSend.address}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="inline-block w-auto font-play mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
              
                </form>
              </div>
            </div>

     
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
