import React from "react";

function H2Heading(props) {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center pt-6 pb-2 md:pt-12 text-blue-900">
        {props.title}
      </h2>
    </>
  );
}

export default H2Heading;