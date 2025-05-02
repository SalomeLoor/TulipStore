
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderAnuncioImgs } from '../js/SlidersComponent.js'
// Import Swiper styles
import '../styles/SliderAnuncio.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SliderAnuncio = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiperAnuncio"
            >
                {
                    SliderAnuncioImgs.map((item, index) => (
                        <SwiperSlide  className='myswiperslideImgs' key={index}>
                            <img className='imgsAnuncio' src={item.image} alt={item.image} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default SliderAnuncio
