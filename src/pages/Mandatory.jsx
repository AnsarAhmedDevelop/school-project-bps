import React, { useEffect } from 'react'
import CommonBanner from '../components/CommonBanner'
import AOS from "aos";
import "aos/dist/aos.css";
import H2Heading from '../components/H2Heading';

const generalDetail = [
  {
    Information: "NAME OF THE SCHOOL",
    Details: "Bhondawe Patil Public School",
  },
  {
    Information: "AFFILIATION NO.",
    Details: "1131092",
  },
  {
    Information: "SCHOOL CODE",
    Details: "31078",
  },
  {
    Information: "COMPLETE ADDRESS WITH PIN CODE",
    Details:
      "Gut no. 49/52-2 opposite Dwarkanagari, Wadgaonko Bajajnagar Aurangabad",
  },
  {
    Information: "PRINCIPAL NAME",
    Details: "Mr. Manoj Ashok Savale",
  },
  {
    Information: "SCHOOL EMAIL ID",
    Details: "bhondawepatilschool@gmail.com",
  },
  {
    Information: "CONTACT DETAILS (LANDLINE/MOBILE)",
    Details: "6232616161, 6232717171",
  },
];


const documentInfo = [
  {
    Information:
      "COPIES OF AFFILIATION/ UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    Upload_01: "",
  },
  {
    Information:
      "COPIES OF SOCIETIES/ TRUST/ COMPANY REGISTRATION/ RENEWAL CERTIFICATE, AS APPLICABLE",
    Upload_01: "",
    Upload_02: "",
  },
  {
    Information:
      "COPY OF THE NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./ UT",
    Upload_01: "",
    Upload_02: "",
  },
  {
    Information:
      "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE",
    Upload_01: "",
  },
  {
    Information:
      "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER NATIONAL BUILDING CODE",
    Upload_01: "",
  },
  {
    Information:
      "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    Upload_01: "",
  },
  {
    Information:
      "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/ UPGRADATION/ EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY THE SCHOOL",
    Upload_01: "",
  },
  {
    Information: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    Upload_01: "",
  },
  //   {
  //     Information: "MANDATORY PUBLIC DISCLOSURE DETAILS LINK",
  //     Upload_01: "+91-8788801400, +91-8600344789, 02446-297537",
  //   },
  // {
  //   Information: "BUILDING CERTIFICATE",
  //   Upload_01: "/docs/COPY OF VALID BUILDING SAFETY CERTIFICATE.pdf",
  // },
  {
    Information: "LAND CERTIFICATE",
    Upload_01: "",
  },
  {
    Information: "FIRE CERTIFICATE",
    Upload_01: "",
  },
  //   {
  //     Information: "SELF DERL CERTIFICATE",
  //     Upload_01: "+91-8788801400, +91-8600344789, 02446-297537",
  //   },
  {
    Information: "WATER CERTIFICATE",
    Upload_01: "",
  },
  //   {
  //     Information: "WATER CHECKING REPORT",
  //     Upload_01: "+91-8788801400, +91-8600344789, 02446-297537",
  //   },
];

 const resultInfo = [
  {
    Information: "FEE STRUCTURE OF THE SCHOOL",
    document: [
      {
        title: "Click here to view the document",
        Upload_01: "",
      },
    ],
  },
  {
    Information: "ANNUAL ACADEMIC CALENDAR",
    document: [
      {
        title: "Click here to view the document",
        Upload_01: "",
      },
    ],
  },
  {
    Information: "SCHOOL MANAGEMENT COMMITTEE (SMC)",
    document: [
      {
        title: "Click here to view the document",
        Upload_01: "",
      },
    ],
  },
  {
    Information: "PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    document: [
      {
        title: "Click here to view the document",
        Upload_01: "",
      },
    ],
  },
  {
    Information:
      "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    document: [
      {
        title: "Click here to view Result Year 2023-24",
        Upload_01: "",
      },
      {
        title: "Click here to view Result Year 2022-23",
        Upload_01: "",
      },
    ],
  },
];


function Mandatory() {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 150 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <CommonBanner title="Mandatory Public Disclosure"/>
      <div className="bg-gray-100 py-10">
        
        <div className=" container mx-auto xl:w-8/12 grid grid-cols-1 items-center justify-center  ">
          <div
            className="grid items-center justify-center mx-auto w-full bg-white rounded-md shadow-md mb-5"
            data-aos="fade-up"
          >
            <div className="text-center px-3 text-lg font-play text-gray-500 pb-6  md:pb-12 ">
              <H2Heading
                title={"Mandatory Public Disclosure    APPENDIX - IX"}
              />
            </div>
          </div>
          {/* General Information */}
          <div className="bg-white rounded-md shadow-md pt-2 mb-5 overflow-auto">
            <h2 className="text-lg pl-2 py-2 sm:text-xl font-serif font-bold leading-normal text-blue-900">
              A: GENERAL INFORMATION
            </h2>
            <table className="table-auto w-full    whitespace-no-wrap">
              <thead>
                <tr className="border text-gray-900 text-left border-blue-900">
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    Sr. No.
                  </th>
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    Information
                  </th>
                  <th className="py-1 pl-2 font-semibold  text-left text-base   border-r border-blue-900 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="text-left border text-gray-900 border-blue-900">
                {generalDetail.map((item, key) => (
                  <tr className="" key={Math.random() * 100}>
                    <td className="py-1 text-left pl-2 text-base border border-blue-900">
                      {key + 1}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* NAME OF THE SCHOOL */}
                      {item.Information}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* Chhatrapati Sambhaji Raje Global School & Jr. College */}
                      {item.Details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* DOCUMENTS AND INFORMATION */}
          <div className="bg-white rounded-md shadow-md pt-2  mb-5 overflow-auto">
            <h2 className="text-lg pl-2 py-2 sm:text-xl font-serif font-bold leading-normal text-blue-900">
              B: DOCUMENTS AND INFORMATION
            </h2>
            <table className="table-auto w-full  whitespace-no-wrap">
              <thead>
                <tr className="border text-gray-900 text-left border-blue-900">
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    Sr. No.
                  </th>
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    DOCUMENTS/ INFORMATION
                  </th>
                  <th className="py-1 pl-2 font-semibold  text-left text-base   border-r border-blue-900 ">
                    UPLOAD DOCUMENTS
                  </th>
                </tr>
              </thead>
              <tbody className="text-left border text-gray-900 border-blue-900">
                {documentInfo.map((item, key) => (
                  <tr className="" key={Math.random() * 100}>
                    <td className="py-1 text-left pl-2 text-base border border-blue-900">
                      {key + 1}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* NAME OF THE SCHOOL */}
                      {item.Information}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* Chhatrapati Sambhaji Raje Global School & Jr. College */}
                      <a
                        href={item.Upload_01}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-semibold  text-blue-800 hover:text-red-700"
                      >
                        Click here to view the document
                      </a>
                      {item.Upload_02 ? (
                        <>
                          <br />
                          <a
                            href={item.Upload_02}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" font-semibold  text-blue-800 hover:text-red-700"
                          >
                            Click here to view the document 2
                          </a>
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Note */}
          <div className="mb-5 overflow-auto">
            <h3 className="bg-[#d1ecf1] py-3 px-2 text-justify">
              NOTE: THE SCHOOLS NEED TO UPLOAD THE SELF-ATTESTED COPIES OF THE
              ABOVE LISTED DOCUMENTS BY CHAIRMAN/ MANAGER/ SECRETARY AND
              PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED
              DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION
              AS PER NORMS.
            </h3>
          </div>
          {/*RESULTS AND ACADEMICS */}
          <div className="bg-white rounded-md shadow-md pt-2  mb-5 overflow-auto">
            <h2 className="text-lg pl-2 py-2 sm:text-xl font-serif font-bold leading-normal text-blue-900">
              C: RESULTS AND ACADEMICS
            </h2>
            <table className="table-auto w-full  whitespace-no-wrap">
              <thead>
                <tr className="border text-gray-900 text-left border-blue-900">
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    Sr. No.
                  </th>
                  <th className="py-1 pl-2 font-semibold text-left text-base   border-r border-blue-900  ">
                    DOCUMENTS/ INFORMATION
                  </th>
                  <th className="py-1 pl-2 font-semibold  text-left text-base   border-r border-blue-900 ">
                    UPLOAD DOCUMENTS
                  </th>
                </tr>
              </thead>
              <tbody className="text-left border text-gray-900 border-blue-900">
                {resultInfo.map((item, key) => (
                  <tr className="" key={Math.random() * 100}>
                    <td className="py-1 text-left pl-2 text-base border border-blue-900">
                      {key + 1}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* NAME OF THE SCHOOL */}
                      {item.Information}
                    </td>
                    <td className="py-1 pl-2 text-base border border-blue-900">
                      {/* Chhatrapati Sambhaji Raje Global School & Jr. College */}
                      {item.document.map((i, index) => (
                        <a
                          href={i.Upload_01}
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" font-semibold  text-blue-800 hover:text-red-700"
                        >
                          {i.title} <br />
                        </a>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Mandatory