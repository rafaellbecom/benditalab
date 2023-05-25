import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

export function Perfil(){
    return(
        <div className="perfil bg-white w-full p-8 rounded-[24px]">
            <div className="infosPerfil flex flex-col items-center gap-6">
                <div className="imagePerfil w-[120px] h-[120px] bg-black rounded-[100px] border-solid border-[5px] border-purple"></div>
                <span className="nomePerfil font-sans font-bold text-2xl">@nordevtech</span>
            </div>

            <nav className='mt-8'>
                <ul className='flex flex-col gap-4'>
                    <li><button className="flex items gap-2 bg-center font-sans text-lg uppercase"><AccountCircleIcon/> Meu Perfil</button></li>
                    <li><button className="flex items gap-2 bg-center font-sans text-lg uppercase"><MarkunreadMailboxIcon/> Meus Pedidos</button></li>
                    <li><button className="flex items gap-2 bg-center font-sans text-lg uppercase"><FavoriteIcon/> Lista de Desejos</button></li>
                    <li><button className="flex items gap-2 bg-center font-sans text-lg uppercase"><LogoutIcon/> Sair</button></li>
                </ul>
            </nav>
        </div>
    )
}