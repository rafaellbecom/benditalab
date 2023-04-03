import Delete from '@mui/icons-material/DeleteOutlined';

export function CartProduct(){
    return(
        <div className="main">
            <div className='productCart flex mb-[15px]'>
                <div className="productDetails w-4/5 flex gap-x-[15px]">
                    <div className="productImage w-5/12 h-[180px] rounded-[8px] bg-[url('../assets/product/imagem-product.jpg')] bg-cover bg-no-repeat bg-center p-[15px]"></div>
                    <div className="productDescription w-7/12 font-sans text-sm semibold uppercase flex flex-col justify-around">
                        <h1>Camiseta Bulls</h1>
                        <div className="choices">
                            <h2 className="color semibold uppercase text-blackdark text-xs">Cor: <span className="choice text-black text-sm">Preta</span></h2>
                            <h2 className="size semibold uppercase text-blackdark text-xs">Tamanho: <span className="choice text-black text-sm">M</span></h2>
                        </div>
                        <span className="price">R$109,90</span>
                    </div>
                </div>
                <div className="controls w-1/5 flex flex-col justify-between items-end">
                    <Delete className='text-black'></Delete>
                    <div>
                        <h2 className='quantity semibold uppercase text-blackdark text-xs mb-[10px]'>Quantidade:</h2>
                    </div>
                </div>
            </div>

            <hr className='text-blackmedium'/>
        </div>
    )
}