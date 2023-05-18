export function Payment(){
    return(
        <div className="payment bg-white w-full p-8 rounded-[24px]">
            <h2 className="font-sans font-bold text-3xl uppercase">Métodos de Pagamento</h2>
            <form className="payment-methods-form flex flex-col justify-center items-center gap-4 mt-4">
                <select name="" id="cart" className="w-full px-6 py-4 border-2 border-blackmedium rounded-[8px] font-sans text-xl text-black">
                    <option value="" disabled selected>Selecione uma opção de pagamento</option>
                    <option value="cartao">Cartão de Débito ou Crédito (Até 12x sem juros)</option>
                    <option value="pix">Pix</option>
                    <option value="boleto">Boleto</option>
                </select>
                <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Continuar</button>
            </form>
        </div>
    )
}