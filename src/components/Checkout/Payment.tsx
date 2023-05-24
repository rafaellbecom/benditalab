import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function Payment(){
    return(
        <div className="payment bg-white w-full p-8 rounded-[24px]">
            <div className="selectionPayment">
                <h2 className="font-sans font-bold text-3xl uppercase">Métodos de Pagamento</h2>
                <form className="payment-methods-form flex flex-col justify-center items-center gap-4 mt-4">
                    <select name="" id="cart" className="w-full px-6 py-4 border-2 border-blackmedium rounded-[8px] font-sans text-xl text-black">
                        <option value="" disabled selected>Selecione uma opção de pagamento</option>
                        <option value="cartao">Cartão de Crédito (Até 12x sem juros)</option>
                        <option value="pix">Pix</option>
                    </select>
                    <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Continuar</button>
                </form>
            </div>
            
            <div className="optionCart mt-8 hidden">
                <h2 className="font-sans font-bold text-2xl uppercase text-center">Cartão de Crédito (Até 12x sem juros)</h2>
                <form className="formCart flex flex-col gap-4 mt-4 w-[80%] m-auto">
                    <div className="row">
                        <h3 className="font-sans font-semibold text-lg uppercase">Nome do Titular</h3>
                            <input type="text" name="nameCart" id="nameCart" placeholder="Nome impresso no cartão" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                    </div>
                    
                    <div className="row">
                        <h3 className="font-sans font-semibold text-lg uppercase">Numeração do Cartão</h3>
                        <input type="text" name="numberCart" id="numberCart" placeholder="XXXX XXXX XXXX XXXX" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                    </div>

                    <div className="row flex items-center gap-4">
                        <div className="w-[50%]">
                            <h3 className="font-sans font-semibold text-lg uppercase">Data de Expedição</h3>
                            <input type="date" name="dateCart" id="dateCart" placeholder="mm/aa" className="w-full px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                        </div>

                        <div className="w-[50%]">
                            <h3 className="font-sans font-semibold text-lg uppercase">CCV</h3>
                            <input type="text" name="cvvCart" id="cvvCart" placeholder="XXX" className=" px-[32px] py-[16px] border-2 border-blackmedium rounded-[8px] font-sans text-xl text-blackmedium"/>
                        </div>
                    </div>

                    <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Continuar</button>
                </form>
            </div>

            <div className="optionPix mt-8 hidden">
                <h2 className="font-sans font-bold text-2xl uppercase text-center">PIX</h2>
                <div className="qrCodePix w-[300px] h-[300px] bg-black mt-6 m-auto rounded-[24px]">

                </div>
                <div className="infoPix mt-6">
                    <h3 className="font-sans font-semibold text-lg uppercase text-center">Nome beneficiário: <span className="nomePix font-extrabold">Benditalab</span></h3>
                    <h3 className="font-sans font-semibold text-lg uppercase text-center">Instiuição: <span className="nomePix font-extrabold">Nubank Pagamentos</span></h3>
                    <h3 className="font-sans font-semibold text-lg uppercase text-center">Chave pix: <span className="nomePix font-extrabold">vendas@benditalab.com.br</span></h3>
                     
                    <div className="buttons w-[80%] m-auto mt-6 flex flex-col gap-4 justify-center items-center">
                        <button className="w-full px-[32px] py-[16px] bg-black border-2 border-black rounded-[8px] font-sans font-bold text-xl text-white uppercase">Continuar</button>
                        <button className="w-full px-[32px] py-[16px] border-2 border-black rounded-[8px] font-sans font-bold text-xl text-black uppercase">PIX Copia e Cola <span className='ml-[5px]'><ContentCopyIcon/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}