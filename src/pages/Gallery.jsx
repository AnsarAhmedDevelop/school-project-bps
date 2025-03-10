import React, { useEffect } from 'react'
import CommonBanner from '../components/CommonBanner'
import AOS from "aos";
import "aos/dist/aos.css";

const gallery = [
  {
    id: 1,
    imgSrc: "/images/gallery/01.jpg"
  },
  {
    id: 2,
    imgSrc: "/images/gallery/02.jpg"
  },
  {
    id: 3,
    imgSrc: "/images/gallery/03.jpg"
  },
  {
    id: 4,
    imgSrc: "/images/gallery/04.jpg"
  },
  {
    id: 5,
    imgSrc: "/images/gallery/05.jpg"
  },
  {
    id: 6,
    imgSrc: "/images/gallery/06.jpg"
  },
  {
    id: 7,
    imgSrc: "/images/gallery/07.jpg"
  },
  {
    id: 8,
    imgSrc: "/images/gallery/08.jpg"
  },
  {
    id: 9,
    imgSrc: "/images/gallery/09.jpg"
  },
  {
    id: 10,
    imgSrc: "/images/gallery/10.jpg"
  },
  {
    id: 11,
    imgSrc: "/images/gallery/11.jpg"
  },
  {
    id: 12,
    imgSrc: "/images/gallery/12.jpg"
  },
  {
    id: 13,
    imgSrc: "/images/gallery/13.jpg"
  },
  {
    id: 14,
    imgSrc: "/images/gallery/14.jpg"
  },
  {
    id: 15,
    imgSrc: "/images/gallery/15.jpg"
  },
  {
    id: 16,
    imgSrc: "/images/gallery/16.jpg"
  },
  {
    id: 17,
    imgSrc: "/images/gallery/17.jpg"
  },
  {
    id: 18,
    imgSrc: "/images/gallery/18.jpg"
  },
  {
    id: 19,
    imgSrc: "/images/gallery/19.jpg"
  },
  {
    id: 20,
    imgSrc: "/images/gallery/20.jpg"
  },
  {
    id: 21,
    imgSrc: "/images/gallery/21.jpg"
  },
  {
    id: 22,
    imgSrc: "/images/gallery/22.jpg"
  },
 
]

function Gallery() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <CommonBanner title="Event Gallery" />
      <div className='bg-gray-100 py-10'>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 py-10'>
          {
            gallery.map((item) => (
              <img key={item.id}   data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out" className='h-[200px] w-full  rounded-md hover:contrast-125' src={item.imgSrc} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Gallery