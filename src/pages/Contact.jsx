import React, { useState } from 'react'
import CommonBanner from '../components/CommonBanner'

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form Data",toSend);
    setToSend({
      name: "",
      mobile: "",
      email: "",
      message: "",
      subject: "",
    }); 
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-gray-100 ">
      <CommonBanner title="Contact Us" />
      <div className=" container mx-auto grid grid-cols-1 items-center justify-center space-y-5 py-10">
          <div
            className="grid items-center justify-center mx-auto w-full bg-white rounded-md shadow-md pb-10"
           
          >
            <div className="text-center text-lg font-play text-gray-500  space-y-1">
             <h2  className=" text-primary text-2xl sm:text-3xl font-serif font-bold leading-normal text-center py-5 ">School Address</h2>
              <p className="pt-2">
                Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad –
                431136. (MH).
              </p>
              <p className="pt-2">Contact: 6232616161/ 6232717171</p>
              <p className="pt-2">Email: info@bhondawepatilschool.in</p>
            </div>
          </div>

          {/* MAP Section */}
          <div className="w-full space-y-5 md:space-y-0  md:grid md:grid-cols-2 md:justify-between md:space-x-10">
            <div className=" ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.821977343844!2d75.23331011491322!3d19.847484086650017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1647919318121!5m2!1sen!2sin"
                style={{ border: "0" }}
                // allowfullscreen=""
                loading="lazy"
                className="w-full h-1/2 content-start rounded-md shadow-md md:grid md:row col-span-5"
              ></iframe>
            </div>
            {/* Form */}
            <div className=" bg-blue-900 rounded-md shadow-md p-12">
              <div className="text-2xl md:w-xl text-gray-200 ">
                <span className="text-3xl text-gray-200 font-semibold mb-4">
                  Send Us a Message
                </span>
                <form action="" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1   gap-y-8 my-3">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="border-b-2  sm:w-[400px] 2xl:w-auto  border-gray-200 text-stone-300 outline-none px-4 py-2  sm:text-xl text-base  bg-blue-900 "
                      value={toSend.name}
                      onChange={handleChange}
                      required={true}
                    />
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      className="border-b-2  sm:w-[400px] 2xl:w-auto border-gray-200 text-stone-300 outline-none px-4 py-2  sm:text-xl text-base  bg-blue-900 col-span-2"
                      value={toSend.mobile}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="border-b-2  sm:w-[400px] 2xl:w-auto border-gray-200 text-stone-300 outline-none px-4 py-2  sm:text-xl text-base  bg-blue-900 col-span-2"
                      value={toSend.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={toSend.subject}
                      onChange={handleChange}
                      className="border-b-2  sm:w-[400px] 2xl:w-auto border-gray-200 text-stone-300 outline-none px-4 py-2  sm:text-xl text-base  bg-blue-900 col-span-2 "
                    />
                    <textarea
                      rows="3"
                      placeholder="Message"
                      name="message"
                      value={toSend.message}
                      onChange={handleChange}
                      className="border-b-2  sm:w-[400px] 2xl:w-auto border-gray-200 text-stone-300 outline-none px-4 py-2   sm:text-xl text-base bg-blue-900 md:col-span-2 "
                    ></textarea>
                  </div>
                  <button
                    className="inline-block w-auto font-play mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Send
                  </button>
             
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact