import React from 'react'
import CommonBanner from '../components/CommonBanner'

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
]

function Gallery() {
  return (
    <div className=''>
      <CommonBanner title="Event Gallery" />
      <div className='bg-gray-100 '>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 py-10'>
          {
            gallery.map((item) => (
              <img key={item.id} className='h-[200px] w-full rounded-md' src={item.imgSrc} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Gallery