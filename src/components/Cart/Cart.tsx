import Drawer from '@mui/material/Drawer';
import CloseButton from '@mui/icons-material/CloseOutlined';
import { CartProduct } from './CartProduct';

export interface CartProps{
    open: boolean;
    onClose: () => void;
    // items: [];
}

export function Cart(props:CartProps){
    return(
        <Drawer open={props.open} onClose={props.onClose}>
            <div className='bg-white w-[30vw] h-[100vh]'>
                <div className="titleCart w-full bg-black flex justify-center items-center">
                    <h1>Carrinho</h1>
                    <CloseButton className='text-white text-4xl float-right'></CloseButton>
                </div>
                
                <ul className="productList p-[15px]">
                    <li><CartProduct></CartProduct></li>
                </ul>
            </div>
        </Drawer>
    )
}