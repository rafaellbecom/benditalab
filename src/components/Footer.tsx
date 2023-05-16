import logo from '../assets/logo.png';
import bandeirasPagamento from '../assets/footer/bandeiras-pagamento.jpg'

export function Footer(){
    return (
        <footer className="footer w-full">
            <div className="main w-full h-[20vh] bg-[url('../assets/home/fitas.svg')] bg-cover bg-no-repeat bg-center"></div>

            <div className="main container">
                <div className="row w-full h-[250px] flex justify-center items-center tablet:flex-col">
                    <div className="col flex flex-1 h-full items-end tablet:justify-center">
                        <ul className="nav-footer tablet:flex tablet:flex-col tablet:items-center tablet:mt-[50px]">
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Home</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Conta</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Carrinho</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Camisetas</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-bold text-4xl uppercase">Tabacaria</a></li>
                        </ul>
                    </div>
                    <div className="col flex flex-1 h-full justify-end items-end tablet:mt-[25px]">
                        <img src={logo} alt="Logo-BenditaLAB" className='tablet:h-[50px]'/>
                    </div>
                </div>

                <div className="row w-full h-full flex justify-center items-center mt-[50px]">
                    <div className="col flex flex-1 items-center">
                        <ul className="flex gap-[20px] justify-center align-center">
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Fale Conosco</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Entrega e Devolução</a></li>
                        </ul>
                    </div>

                    <div className="col flex flex-2 items-center">
                        <ul className="flex gap-[20px] justify-center align-center">
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Termos & Condições</a></li>
                            <li><a href="../pages/Home.tsx" className="font-sans font-regular text-lg">Política de Privacidade</a></li>
                            <li className='tablet:hidden'><span className="font-sans font-light text-lg text-blackdark italic">© 2023 Bendita. All rights reserved.</span></li>
                        </ul>
                    </div>
                </div>

                <div className='row hidden tablet:flex tablet:justify-center'>
                    <span className="font-sans font-light text-lg text-blackdark italic">© 2023 Bendita. All rights reserved.</span>
                </div>

                <div className="row w-full h-[70px] flex justify-center items-center py-[40px]">
                    <img src={bandeirasPagamento} alt="Bandeiras-Pagamentos" className='w-[300px]'/>
                </div>
            </div>
        </footer>
    )
}