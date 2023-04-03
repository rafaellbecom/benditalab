import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SideBarTabacaria } from "../components/SideBar/SideBarTabacaria";

export function Tabacaria(){
    return(
        <main>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            <div className="flex flex-row justify-center items-center">
                <SideBarTabacaria></SideBarTabacaria>
                <div className="w-full"></div>
            </div>
            <Footer></Footer>
        </main>
    )
}