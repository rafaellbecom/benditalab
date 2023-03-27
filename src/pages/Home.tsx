import { Header } from "../components/Header/Header";
import { Destaque } from "../components/Destaque";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { CarouselProduct } from "../components/CarouselProduct";

export function Home(){
    return(
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <Header></Header>
            <Destaque></Destaque>
            <Slider></Slider>
            <CarouselProduct></CarouselProduct>
            <Footer></Footer>
        </div>
    )
}