export function Delivery(){
    return(
        <div className="delivery bg-white w-full p-8 rounded-[24px]">
            <h2 className="font-sans font-bold text-3xl uppercase">Informações de Entrega</h2>
            <form className="delivery-form flex flex-col gap-4 mt-4">
                <div className="row flex items-center gap-4">
                    <input type="text" name="nome" id="nome" placeholder="Nome Completo" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                    <input type="text" name="telefone" id="telefone" placeholder="Telefone" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                </div>

                <div className="row flex items-center gap-4">
                    <input type="text" name="email" id="email" placeholder="Email" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium w-[75%]"/>
                    <input type="text" name="cep" id="cep" placeholder="CEP" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium w-[25%]"/>
                </div>

                <div className="row flex items-center gap-4">
                    <input type="text" name="cidade" id="cidade" placeholder="Cidade" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium w-[75%]"/>
                    <input type="text" name="bairro" id="bairro" placeholder="Bairro" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                </div>

                <div className="row flex items-center gap-4">
                    <input type="text" name="endereco" id="endereco" placeholder="Endereço" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium w-[75%]"/>
                    <input type="number" name="numero" id="numero" placeholder="numero" className="px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium w-[25%]"/>
                </div>
                <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Continuar</button>
            </form>
        </div>
    )
}