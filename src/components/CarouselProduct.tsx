import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Product } from './Product';
export function CarouselProduct (){
  return (
    <div className="main container w-[100vw] h-[90vh] flex items-center justify-center overflow-hidden">
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
              <SwiperSlide>
                <Product></Product>
              </SwiperSlide>
              <SwiperSlide>
                <Product></Product>
              </SwiperSlide>
              <SwiperSlide>
                <Product></Product>
              </SwiperSlide>
            </Swiper>
    </div>
  );
};