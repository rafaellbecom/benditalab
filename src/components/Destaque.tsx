export function Destaque(){
    return (
        <section className="destaque">
            <div className="main flex w-full h-[95vh] bg-[url('../assets/home/bg-destaque.png')] bg-cover bg-no-repeat bg-center">
                <div className="col w-[50%] h-full py-[50px] px-[100px] text-white font-sans mt-[-20px]">
                    <span className="text-whitemedium uppercase font-semibold tracking-widest">COLEÇÃO START</span>
                    <div className="text-box mt-4">
                        <h1 className="text-5xl font-semibold">CAMISETA BULLS</h1>
                        <p className="text-whitedark mt-2">Aproveite o máximo do seu estilo com a Camisa Streetwear Bulls que te dará a sensação que você espera, tanto de conforto quanto de elegância, com detalhes de design que remetem ao padrão da Bendita®.</p>
                    </div>
                    <button className="mt-4 rounded-[8px] bg-white  px-8 py-4 text-black font-bold">COMPRAR AGORA</button>
                </div>

                <div className="col w-[50%] h-full flex items-centers">
                    <div className="shirt-model w-[90%] mt-[-60px] h-full bg-[url('../assets/home/shirt-model-floating.png')] bg-cover bg-no-repeat bg-center"></div>
                </div>
            </div>
            <div className="main w-full h-[20vh] mt-[-120px] bg-[url('../assets/home/fitas.svg')] bg-cover bg-no-repeat bg-center"></div>
        </section>
    )
}