import React from 'react'
import Slider from '../components/Slider'

function Home() {
  return (
    <div className=''>
      {/* Slider */}
      <Slider />
      {/* welcome */}
      <div className="container mx-auto px-2 md:px-0  py-2 md:py-12 grid grid-cols-1 md:grid-cols-2">
        <div className="flex gap-x-5 justify-between">
          <div className="">
            <img
              alt=""
              src="./images/home/home-welcome-1.jpg"
              className="mr-10 hover:scale-110 transition duration-300 mt-10"

            />
          </div>
          <div className="">
            <img
              alt=""
              src="./images/home/home-welcome-2.jpg"
              className="mr-10 hover:scale-110 transition duration-300"

            />
          </div>
        </div>
        <div className="p-5 sm:p-14 text-center">
          <h2
            className="text-red-700 text-2xl sm:text-3xl font-serif font-bold leading-normal mb-2"

          >
            Welcome to <br />
            <span className="text-blue-900">Bhondawe Patil Public School</span>
          </h2>
          <p
            className="text-gray-500"

          >
            Welcome to the abode of intellect where the purpose of education is
            to equip the child with the most excellent technological
            proficiency; to empower him with the skills in order to realize his
            God gifted potential; to creole the light climate so that the child
            may develop fully as a complete human being at BHONDAWE PATIL PUBLIC
            SCHOOL, one&apos;s intellect is I transformed into an illuminated
            reflection of knowledge and broad outlook towards life.
          </p>
        </div>
      </div>
      {/* virtual tour */}
      <div className="py-5 sm:py-10 bg-[#eee]">
        <h2
          className=" text-primary text-2xl sm:text-3xl font-serif font-bold leading-normal text-center py-5 "

        >
          School Virtual Tour
        </h2>
        <div className="px-0 sm:px-14 flex justify-center ">
          <iframe
            className=" mb-2   items-center justify-center shadow-xl"

            width="900"
            height="515"
            src="https://www.youtube.com/embed/cuIFuOVG9eA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Our Mission */}
      <div className='bg-[url(/images/home/bg-building.jpg)] bg-no-repeat bg-cover'>
        <div className='container mx-auto grid  grid-cols-1 sm:grid-cols-2 py-10' >
          <div></div>
          <div className='bg-primary/90 opacity-80 p-7 text-white'>
            <h2 className='font-bold text-4xl mb-5'>Our Mission</h2>
            <p className='text-justify'>We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home