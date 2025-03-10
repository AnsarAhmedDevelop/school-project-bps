import React, { useEffect, useState } from 'react'
import Our_Distinctions from '../components/Our_Distinctions'
import Our_Aim from '../components/Our_Aim'
import Principals_desk from '../components/Principals_desk'
import Chairmans_desk from '../components/Chairmans_desk'

import AOS from "aos";
import "aos/dist/aos.css";
import Philosophy from '../components/Philosophy'

function About() {
  const [title, setTitle]=useState("Mission")
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <div>
        <img src='/images/about/about-bg.jpg' alt='banner' />
      </div>
      <div className='bg-gray-100 py-10'>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12 gap-x-4'>
          <div className='col-span-3 self-start bg-white rounded-sm p-5 grid grid-cols-1 gap-y-3 '>
            <button onClick={()=>setTitle("Mission")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold ${title==="Mission"?"bg-primary text-white":""}`}>Mission and Vision</button>

            <button onClick={()=>setTitle("philosophy")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="philosophy"?"bg-primary text-white":""}`}>Phylosophy</button>

            <button onClick={()=>setTitle("chairman")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="chairman"?"bg-primary text-white":""}`}>Chairman's Desk</button>
            <button onClick={()=>setTitle("principal")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="principal"?"bg-primary text-white":""}`}>Principal's Desk</button>
            <button onClick={()=>setTitle("ourAim")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="ourAim"?"bg-primary text-white":""}`}>Our Aim</button>
            <button onClick={()=>setTitle("OurDistinctions")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="OurDistinctions"?"bg-primary text-white":""}`}>Our Distinctions</button>
          </div>
          <div className='col-span-9 bg-white rounded-sm p-3'>

            {
              title==="Mission" && 
              <div  data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">
                <h2 className='font-bold text-3xl text-primary my-3 text-center'>Mission</h2>
                <p className='text-justify'>We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the worl</p>
                <h2 className='font-bold text-3xl text-primary my-3 text-center'>Vision</h2>
                <p className='text-justify'>To prepare dynamic and caring citizens of tomorrow, to meet the challenges of a global society, while retaining their traditional values.</p>
                <p className='text-justify'>To develop our school into a vibrant and an exemplary educational institution where students are nurtured, encouraged and motivated to achieve their ultimate potential by exploring limitless possibilities with utmost confidence, dedication and excellence.</p>
              </div>
            }
             {title === "philosophy" && (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Philosophy />
              </div>
            )}
            {title === "chairman" && (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Chairmans_desk />
              </div>
            )}
            {title === "principal" && (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Principals_desk />
              </div>
            )}
            {title === "ourAim" && (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Our_Aim />
              </div>
            )}
            {title === "OurDistinctions" && (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Our_Distinctions />
              </div>
            )}
          </div>
   

        </div>

      </div>
    </div>
  )
}

export default About