import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { Vestuario } from '../pages/Vestuario';
import { Tabacaria } from '../pages/Tabacaria';
import { SingleProduct } from '../pages/SingleProduct';

export const RoutesBase = () => {
    return(
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/signin" element={<SignIn/>} />
             <Route path="/shop/vestuario" element={<Vestuario/>}/>
             <Route path="/shop/tabacaria" element={<Tabacaria/>}/>
             <Route path="/shop/product" element={<SingleProduct/>}/>
         </Routes>
      </BrowserRouter>
    )
 }