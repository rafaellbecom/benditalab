import { Header } from "../components/Header/Header";
import { Destaque } from "../components/Destaque";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { Product } from "../components/Product";

export function Home(){
    return(
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <Header></Header>
            <Destaque></Destaque>
            <Slider></Slider>
            <Product></Product>
            <Footer></Footer>
        </div>
    )
}