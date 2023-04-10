import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductDescription } from "../components/SingleProduct/ProductDescription.tsx"

export function SingleProduct(){
    return(
        <div className="main product">
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>

            <ProductDescription></ProductDescription>
            <Footer></Footer>
        </div>
    )
}