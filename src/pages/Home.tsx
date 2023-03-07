import { Header } from "../components/Header/Header";
import { Destaque } from "../components/Destaque";
export function Home(){
    return(
        <div className="flex flex-col">
            <Header></Header>
            <Destaque></Destaque>
        </div>
    )
}