// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export function Slider (){
  return (
    <div className="main container w-[100vw] h-[90vh] flex items-center justify-center">
        <div className="slider-box w-full h-full flex justify-center">
            <Swiper
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className="square bg-black w-[100%] h-[500px]"></div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
            </Swiper>

        </div>
    </div>
  );
};