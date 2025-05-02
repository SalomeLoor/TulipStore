import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/SliderCategory.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { SliderCategoryImgs } from "../js/SlidersComponent";

const SliderCategory = () => {
  return (
    <>
      <section className="slider-category">
        <h2 className='dancing-script'>Nuestras Colecciones</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiperCategory"
        >
          {
            SliderCategoryImgs.map((item, index) => (
              <SwiperSlide className="mySwiperCategorySlide" key={index}>
                <h3 className='pompiere-regular'>{item.title}</h3>
                <img className='IMG' src={item.image} alt={item.title} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

    </>
  )
}

export default SliderCategory
