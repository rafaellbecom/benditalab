import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Product } from './Product';
export function CarouselProduct (){
  return (
    <section className="main w-[100vw] h-auto mt-[45px] flex flex-col justify-center">
      <div className="title container flex h-[10vh] items-center">
        <h1 className="uppercase text-5xl  text-left font-bold">DESTAQUES</h1>
        <button className="ml-4 rounded-[8px] bg-transparent border-solid border-blackmedium border-[2px] font-medium px-6 py-[9px] text-[15px] text-blackmedium">#ESTILOSMAISQUENTES</button>
      </div>
      <div className="products flex w-[100vw] justify-center items-center my-[30px]">
        <div className="container h-auto flex items-center justify-center overflow-hidden">
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
      </div>
      <div className="text-container h-[70px] mt-[45px]">
        <div className="text-only">
          <p className="scrolling-text font-semibold italic">    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”       Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”</p>
        </div>    
      </div>

    </section>
  );
};