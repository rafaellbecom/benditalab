import Drawer from '@mui/material/Drawer';

export interface SideBarProps{
    open: boolean;
    onClose: () => void;
    // items: [];
}   
export function SideBar(props:SideBarProps){
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div className="bg-black w-[80vw] h-[100vh] font-bold p-4 text-white">
                <h1 className="text-lg font-bold mb-4">Minha Sidebar</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                Link 1
                            </a>
                        </li>
                        <li>
                            <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                Link 2
                            </a>
                        </li>
                        <li>
                            <a href="www.google.com" className="text-gray-600 hover:text-gray-800">
                                Link 3
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Drawer>
    )

}