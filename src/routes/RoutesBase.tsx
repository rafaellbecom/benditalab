import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { Camisetas } from '../pages/Camisetas';

export const RoutesBase = () => {
    return(
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/signin" element={<SignIn/>} />
             <Route path="/camisetas" element={<Camisetas/>}/>
         </Routes>
      </BrowserRouter>
    )
 }