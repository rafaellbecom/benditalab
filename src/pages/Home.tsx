import { Header } from "../components/Header/Header";
import { Destaque } from "../components/Destaque";
import { Slider } from "../components/Slider";
export function Home(){
    return(
        <div className="flex flex-col">
            <Header></Header>
            <Destaque></Destaque>
            <Slider></Slider>
        </div>
    )
}