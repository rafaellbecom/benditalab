import { CartProduct } from "../Cart/CartProduct"

export function CartRevision(){
    return(
        <div className="cart-revision bg-white w-full h-full p-8 rounded-[24px]">
            <h2 className="font-sans font-bold text-3xl uppercase mb-5">Carrinho de Revisão</h2>
            
            <div className="list-cart-revision">
                <CartProduct></CartProduct>
            </div>

            <div className="value">
                <h3 className="font-sans font-bold text-xl text-black uppercase mt-6 mb-4">Cupom de Desconto</h3>
                <form className="discount flex items-center gap-6 mb-6">
                    <input type="text" name="discount" id="discount" placeholder="Adicionar cupom" className="w-[65%] px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                    <button className="w-[35%] px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Aplicar</button>
                </form>
                <div className="calculation">
                    <div className="subtotal flex justify-between items-center mb-2">
                        <h3 className="font-sans font-bold text-xl text-blackmedium uppercase">Subtotal:</h3>
                        <h3 className="font-sans font-bold text-xl text-black uppercase">R$109,90</h3>
                    </div>

                    <div className="discount-calc flex justify-between items-center mb-2">
                        <h3 className="font-sans font-bold text-xl text-blackmedium uppercase">Desconto:</h3>
                        <h3 className="font-sans font-bold text-xl text-black uppercase">FRETEGRATIS(-R$40,10)</h3>
                    </div>

                    <div className="discount-calc flex justify-between items-center mb-2">
                        <h3 className="font-sans font-bold text-xl text-blackmedium uppercase">Frete:</h3>
                        <h3 className="font-sans font-bold text-xl text-black uppercase">R$40,10</h3>
                    </div>

                    <hr className="text-blackmedium mb-2"/>

                    <div className="discount-calc flex justify-between items-center mb-2">
                        <h3 className="font-sans font-bold text-xl text-black uppercase">Total:</h3>
                        <h3 className="font-sans font-bold text-xl text-black uppercase">R$109,90</h3>
                    </div>

                    <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}