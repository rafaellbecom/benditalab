import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SideBar } from "../components/SideBar/SideBar";

export function Vestuario(){
    return(
        <main>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            <div className="flex flex-row justify-center items-center">
                <SideBar></SideBar>
                <div className="w-full"></div>
            </div>
            <Footer></Footer>
        </main>
    )
}