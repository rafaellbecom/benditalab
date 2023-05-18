import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Payment } from "../components/Checkout/Payment";

export function Checkout(){
    return(
        <main>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            <div className="checkout bg-[#e3e3e3]">
                <div className="container py-8 grid grid-cols-5 gap-6">
                    <div className="col-span-3">
                        <Payment></Payment>
                    </div>

                    <div className="col-span-2">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}