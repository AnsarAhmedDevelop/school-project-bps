import React, { useState } from 'react'

function About() {
  const [title, setTitle]=useState("Mission")
  return (
    <div className=''>
      <div>
        <img src='/images/about/about-bg.jpg' alt='banner' />
      </div>
      <div className='bg-gray-100 py-10'>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12 gap-x-4'>
          <div className='col-span-3 self-start bg-white rounded-sm p-5 grid grid-cols-1 gap-y-3 '>
            <button onClick={()=>setTitle("Mission")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold ${title==="Mission"?"bg-primary text-white":""}`}>Mission and Vision</button>

            <button onClick={()=>setTitle("Phylosophy")} className={`border rounded-md border-gray-100 py-3 cursor-pointer text-primary font-semibold  ${title==="Phylosophy"?"bg-primary text-white":""}`}>Phylosophy</button>

            <button className='border border-gray-100 p-2 cursor-pointer text-primary font-semibold'>Chairman's Desk</button>
            <button className='border border-gray-100 p-2 cursor-pointer text-primary font-semibold'>Principal's Desk</button>
            <button className='border border-gray-100 p-2 cursor-pointer text-primary font-semibold'>Our Aim</button>
            <button className='border border-gray-100 p-2 cursor-pointer text-primary font-semibold'>Our Distinctions</button>
          </div>
          <div className='col-span-9 bg-white rounded-sm p-3'>

            {
              title==="Mission" && 
              <div>
                <h2 className='font-bold text-3xl text-primary my-3 text-center'>Mission</h2>
                <p className='text-justify'>We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the worl</p>
                <h2 className='font-bold text-3xl text-primary my-3 text-center'>Vision</h2>
                <p className='text-justify'>To prepare dynamic and caring citizens of tomorrow, to meet the challenges of a global society, while retaining their traditional values.</p>
                <p className='text-justify'>To develop our school into a vibrant and an exemplary educational institution where students are nurtured, encouraged and motivated to achieve their ultimate potential by exploring limitless possibilities with utmost confidence, dedication and excellence.</p>
              </div>
            }
            {
              title==="Phylosophy" && 
              <div>
                <h1>Hello Phylosophy</h1>
              </div>
            }
          </div>
   

        </div>

      </div>
    </div>
  )
}

export default About