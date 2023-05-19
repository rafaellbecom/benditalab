import { Header } from "../components/Header/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Footer } from "../components/Footer";
import { Perfil } from "../components/MyAccount/Perfil";

export function MyAccount(){
    return(
        <div className="main">
           <Header></Header>
           <Breadcrumbs></Breadcrumbs>
           <div className="myaccount bg-[#f0f0f0]">
                <div className="container py-12">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 bg-blackmedium h-[100vh]">
                            <Perfil></Perfil>
                        </div>

                        <div className="col-span-4 bg-purple h-[100vh]">

                        </div>
                    </div>
                </div>
           </div>
           <Footer></Footer> 
        </div>
    )
}