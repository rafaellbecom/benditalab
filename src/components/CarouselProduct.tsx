import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Product } from './Product';
export function CarouselProduct (){
  return (
    <div className="main container w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <Swiper
            
              modules={[Pagination, Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              navigation
              pagination={{
                clickable: true,
                }}
              className="mySwiper"
            >
              <SwiperSlide className="w-[100vw]">
                <Product></Product>
              </SwiperSlide>
              <SwiperSlide>
                <Product></Product>
              </SwiperSlide>
              <SwiperSlide>
                <Product></Product>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-navigation-container"></div>
    </div>
  );
};