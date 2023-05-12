import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import ArrowBack from '@mui/icons-material/ArrowBackIosNew';

export function SignUp2(){
    return(
        <main>
            <Header></Header>
            <div className="grid grid-cols-5 h-auto py-8 tablet:bg-[url('../assets/login/img-signin.jpg')] tablet:grid-cols-12 tablet:bg-cover tablet:bg-bottom">
                <div className="hidden tablet:flex tablet:col-start-1"></div>
                <div className="col-form col-span-2 h-full flex items-center tablet:col-span-10 tablet:content-center">
                    <div className="w-[80%] mx-auto tablet:bg-white tablet:px-8 tablet:py-6 tablet:rounded-[16px]">
                        <button className="w-[50px] h-[50px] mb-[32px]"><ArrowBack className="text-lg"></ArrowBack></button>

                        <div className="formulario flex flex-col justify-center items-center gap-[32px]">
                            <h1 className="font-sans font-bold text-3xl uppercase">Cadastre-se</h1>
                        
                            <form action="" className="w-full flex flex-col justify-center items-center gap-[16px]">
                                <input type="text" name="cpf" id="cpf" placeholder="CPF" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                <input type="text" name="cep" id="cep" placeholder="CEP" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                <input type="text" name="cidade" id="cidade" placeholder="Cidade" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                <input type="text" name="endereco" id="endereco" placeholder="Endereço" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                <input type="text" name="bairro" id="bairro" placeholder="Bairro" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                <div className="flex justify-between items-center">
                                    <input type="text" name="complemento" id="complemento" placeholder="Complemento" className="w-[65%] px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                    <input type="number" name="numero" id="numero" placeholder="N°" className="w-[30%] px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>

                                </div>

                                <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Concluir</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden tablet:flex tablet:col-end-1"></div>

                <div className="col-span-3 h-full bg-[url('../assets/login/img-signin.jpg')] bg-cover bg-bottom tablet:hidden"></div>
            </div>
            <Footer></Footer>
        </main>
    )
}