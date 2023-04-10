import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function SingleProduct(){
    return(
        <div className="main">
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            <Footer></Footer>
        </div>
    )
}