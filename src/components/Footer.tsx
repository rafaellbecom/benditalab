import logo from '../assets/logo.png';

export function Footer(){
    return (
        <footer className="footer">
            <div className="main w-full h-[20vh] bg-[url('../assets/home/fitas.svg')] bg-cover bg-no-repeat bg-center"></div>

            <div className="main container mx-auto w-full">
                <div className="row w-full h-[250px] flex justify-center items-center">
                    <div className="col flex flex-1 h-full items-end">
                        <ul className="nav-footer">
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Home</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Conta</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Carrinho</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Camisetas</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Tabacaria</a></li>
                        </ul>
                    </div>
                    <div className="col flex flex-1 h-full justify-end items-end">
                        <img src={logo} alt="Logo-BenditaLAB" />
                    </div>
                </div>

                <div className="row w-full h-full flex justify-center items-center mt-[50px]">
                    <div className="col flex flex-1 items-center">
                        <ul className="flex gap-[15px] justify-center align-center">
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Fale Conosco</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Entrega e Devolução</a></li>
                        </ul>
                    </div>

                    <div className="col flex flex-2 items-center">
                        <ul className="flex gap-[15px] justify-center align-center">
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Termos & Condições</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Política de Privacidade</a></li>
                            <li><span className="font-sans font-light text-lg text-blackdark italic">© 2023 Bendita. All rights reserved.</span></li>
                        </ul>
                    </div>
                </div>

                <div className="row w-full h-[70px] flex justify-center items-center py-[20px]">
                    <div className="h-full w-[500px] bg-black"></div>
                </div>
            </div>
        </footer>
    )
}