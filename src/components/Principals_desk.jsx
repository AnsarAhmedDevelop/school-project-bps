import React from "react";
import H2Heading from "./H2Heading";

export default function Principals_desk() {
  return (
    <>
      <div className="items-center justify-center mt-3 mx-5">
        <img
          alt="chairman"
          src="./images/about/Principal-01.png"
          className="w-full h-full mx-auto"
        />
        <h3 className="font-semibold text-center text-lg text-blue-900 pt-2 ">
          Mr. Manoj Asha Ashok Savale
        </h3>
        <p className="text-gray-500 text-center pt-1">
          Principal, Bhondawe Patil Public School{" "}
        </p>
      </div>
      <H2Heading title="Message from the Principal" />
      <h3 className="font-semibold pt-5 px-5 text-lg">
        Welcome to Bhondawe Patil Public School, Bajaj Nagar!
      </h3>
      <p className="text-gray-500 px-5 text-lg pb-5">
        It gives me immense pleasure to share with you that our school has been
        recognized for its commitment to excellence in education. At Bhondawe
        Patil Public School, we are dedicated to implementing the{" "}
        <span className="font-semibold">
          National Education Policy (NEP) 2020
        </span>{" "}
        principles. We have restructured our curriculum and infrastructure to
        align with NEP guidelines, ensuring a robust educational framework that
        fosters holistic development.
        <br />
        <br />
        Our campus is a testament to our commitment to a positive and nurturing
        environment. Our school is surrounded by lush greenery, with thousands
        of trees and saplings, and offers a serene and refreshing atmosphere.
        This unique feature not only enhances the aesthetic appeal but also
        contributes to the well-being of everyone on campus.
        <br />
        <br />
        We take pride in providing an international level of education with a
        local touch. Our students excel in various disciplines, and we have
        integrated cutting-edge technology into our curriculum. From a
        state-of-the-art robotics lab to artificial intelligence facilities, we
        ensure that our students are well-equipped for the future.
        <br />
        <br />
        We promise our parents and community that every student at BPPS will
        experience comprehensive growth. Our vision and mission are clear: to
        develop the leaders of tomorrow through a blend of academic excellence
        and technological advancement.
        <br />
        <br />
        As we continue to strive for greater heights, we seek your cooperation
        and partnership. We can achieve our goals and make BPPS a beacon of
        educational excellence.
        <br />
      </p>
    </>
  );
}
