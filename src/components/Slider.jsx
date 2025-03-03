import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

function Slider() {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/sliders/slide-1.jpg" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliders/slide-2.jpg" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliders/slide-3.jpg" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliders/slide-4.jpg" className='w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider