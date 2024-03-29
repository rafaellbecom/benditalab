import MenuIcon from '@mui/icons-material/Menu'
import CartIcon from '@mui/icons-material/ShoppingBagOutlined'

import React, { useState } from 'react'
import { SideBar } from './SideBar'
import { Cart } from '../Cart/Cart'

export function Header(){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <nav className="flex flex-col">
            <div className="text-container">    
                <p className="scrolling-text font-semibold italic">    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”       Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”    Frete Grátis usando o cupom “FRETEGRATIS”</p>
            </div>
            <div className="main container m-auto h-[50px] flex mt-1 justify-between items-center">
                <div className="menu ">
                    <MenuIcon onClick={handleOpen}></MenuIcon>
                    <SideBar open={open} onClose={handleClose}></SideBar>
                </div>
                <div className="logo w-[15%] h-[100%]">
                    <div className="logo-icon bg-[url('../assets/logo.png')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
                </div>
                <div className="user-control w-[10%] h-full flex justify-around items-center">
                    <div className="account w-[25%] h-full">
                        <div className="user-icon bg-[url('../assets/user.png')] w-full h-full bg-contain bg-no-repeat bg-center"></div>
                    </div>
                    <div className="checkout-bag w-[25%] h-full">
                        <CartIcon onClick={handleOpen2}></CartIcon>
                        <Cart open={open2} onClose={handleClose2}></Cart>
                    </div>
                </div>

            </div>
        </nav>
    )
}