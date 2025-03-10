import React from "react";
import H2Heading from "./H2Heading";

export default function Chairmans_desk() {
  return (
    <>
      <div className="items-center justify-center mt-5 mx-5">
        <img
          alt="chairman"
          src="./images/about/chairman.jpg"
          className="w-full h-full bg-cover"
        />
        <h3 className="font-semibold text-center text-lg text-blue-900 pt-2 ">
          SHRI. HANUMAN BHONDAWE PATIL
        </h3>
        <p className="text-gray-500 text-center pt-1">Chairman</p>
      </div>
      <H2Heading title="Words of our Chairmain" />
      <h3 className=" font-semibold text-center  text-blue-900">
        &quot;AFFORDABLE AND QUALITY EDUCATION FOR ONE AND ALL&quot;
      </h3>
      <p className="px-5 text-gray-500 text-lg">
        Bhondawe Patil Public School is started with a focused mission to
        Inculcate a passion for lifelong learning among students and empower
        them to learn and excel, so that they can face the practical life
        situation with confidence and determination: standing true and tall to
        our vision of facilitating overall personality grooming, academic
        excellence as one of the primary objectives of our institution. <br />
        Our spacious, ventilated and smart classrooms, highly proficient
        faculty, professional &amp; experienced management, balanced curriculum
        with ample space for co-curricular activities, social and value based
        education etc; make our schooling experience a distinct and unique one.
        <br />
        I wish every learner for an empowered learning and excellence In school
        and all facets of life.
        <br />
        Best Wishes &amp; Warm Regards{" "}
      </p>
    </>
  );
}
