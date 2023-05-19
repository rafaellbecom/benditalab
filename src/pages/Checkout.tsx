import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Payment } from "../components/Checkout/Payment";
import { Delivery } from "../components/Checkout/Delivery";
import { CartRevision } from "../components/Checkout/CartRevision";

export function Checkout(){
    return(
        <main>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            <div className="checkout bg-[#f0f0f0]">
                <div className="container py-12">
                    <h1 className="uppercase text-5xl text-center font-bold">PÁGINA DE FINALIZAÇÃO DE COMPRA</h1>
                    <div className="mt-12 grid grid-cols-5 gap-6">
                        <div className="col-span-3 flex flex-col justify-center gap-6">
                            <Payment></Payment>
                            <Delivery></Delivery>
                        </div>

                        <div className="col-span-2">
                            <CartRevision></CartRevision>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}