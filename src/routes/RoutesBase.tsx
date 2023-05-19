import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { SignUp2 } from '../pages/SignUp2';
import { Vestuario } from '../pages/Vestuario';
import { Tabacaria } from '../pages/Tabacaria';
import { SingleProduct } from '../pages/SingleProduct';
import { Checkout } from '../pages/Checkout';
import { MyAccount } from '../pages/MyAccount';

export const RoutesBase = () => {
    return(
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/signin" element={<SignIn/>} />
             <Route path="/signup" element={<SignUp/>} />
             <Route path="/signup2" element={<SignUp2/>} />
             <Route path="/shop/vestuario" element={<Vestuario/>}/>
             <Route path="/shop/tabacaria" element={<Tabacaria/>}/>
             <Route path="/shop/product" element={<SingleProduct/>}/>
             <Route path="/checkout" element={<Checkout/>}/>
             <Route path="/myaccount" element={<MyAccount/>}/>
         </Routes>
      </BrowserRouter>
    )
 }