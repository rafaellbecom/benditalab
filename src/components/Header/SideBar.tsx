import Drawer from '@mui/material/Drawer';

export interface SideBarProps{
    open: boolean;
    onClose: () => void;
    // items: [];
}   
export function SideBar(props:SideBarProps){
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div className="bg-black w-[80vw] h-[100vh] font-semibold font-sans bold p-4 text-white text-6xl">
                <nav className="flex items-end">
                    <div className="items">
                        <ul>
                            <li className='mt-5'>
                                <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                    HOME
                                </a>
                            </li>
                            <li className='mt-5'>
                                <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                    CONTA
                                </a>
                            </li>
                            <li className='mt-5'>
                                <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                    CARRINHO
                                </a>
                            </li>
                            <li className='mt-5'>
                                <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                    CAMISETA
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Drawer>
    )

}