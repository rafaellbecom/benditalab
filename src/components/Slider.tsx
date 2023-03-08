import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Timer } from './Timer';
import { Button } from './Utils/Button';
export function Slider (){
  return (
    <div className="main container w-[100vw] h-[90vh] flex items-center justify-center overflow-hidden">
            <Swiper
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="w-[100vw] h-[60vh] rounded-sm px-[100px] py-[50px] flex justify-center bg-blacklight bg-[url('../assets/home/banner-timer-background.png')]">
                <div className="column w-[50%] font-sans text-white">
                  <h1 className="uppercase text-7xl  text-center font-bold">BENDITA SMOKING CLUB</h1>
                  <p className='uppercase text-xl font-normal text-center mt-2'>30 PRIMEIRAS PEÇAS COM 30% OFF</p>
                </div>

                <div className="column w-[50%] flex flex-col items-center justify-center font-sans text-white">
                  <Timer initialTime={1000}></Timer>
                  <button className="mt-4 rounded-[8px] bg-white  px-8 py-4 text-black font-bold">COMPRAR NA PRE-VENDA</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
    </div>
  );
};