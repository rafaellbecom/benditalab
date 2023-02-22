import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { SideBar } from './SideBar'
export function Header(){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <nav className="container mx-auto w-[100%] h-[50px] flex">
            <div className="menu">
                <MenuIcon onClick={handleOpen}></MenuIcon>
                <SideBar open={open} onClose={handleClose}></SideBar>
            </div>
            <div className="logo"></div>
            <div className="user-control">
                <div className="account"></div>
                <div className="checkout-bag"></div>
            </div>
        </nav>
    )
}