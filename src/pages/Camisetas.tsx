import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import {SideBar} from "../components/SideBar";

export function Camisetas(){
    return(
        <main>
            <Header></Header>
            <div className="flex flex-row justify-center items-center">
                <SideBar></SideBar>
                <div className="w-full"></div>
            </div>
            <Footer></Footer>
        </main>
    )
}