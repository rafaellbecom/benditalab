export function Banner () {
    return (
        <section className="tobacconist-headshop container w-full h-[100vh] flex flex-col">
            <div className="title">
                <h1 className="uppercase text-5xl font-sans text-left font-bold">TABACARIA & HEADSHOP</h1>
            </div>
            <div className="banner flex flex-row justify-around  text-white text-3xl font-sans font-bold">
                <div className="banner-card flex flex-row w-[500px] h-[300px] rounded-[16px] bg-black">
                    <div className="image w-[75%] h-[300px] rounded-bl-[16px] bg-[url('../assets/home/banner/banner01.png')] bg-cover bg-no-repeat bg-center">
                    </div>
                    <div className="category-list w-[25%] h-[300px] flex flex-col items-center justify-center">
                        <ul className="ml-[-180px]">
                            <li>PODS</li>
                            <li>VAPORIZADORES</li>
                            <li>E-LIQUIDOS...</li>
                        </ul>
                        <div className="cta ml-[-220px]">
                            <button className="mt-4 rounded-[8px] bg-white  px-6 py-3 text-[18px] text-black font-bold">COMPRAR AGORA</button>
                        </div>
                    </div>
                </div>

                <div className="banner-card flex flex-row w-[500px] h-[300px] rounded-[16px] bg-black">
                    <div className="image w-[75%] h-[300px] rounded-bl-[16px] bg-[url('../assets/home/banner/banner02.png')] bg-cover bg-no-repeat bg-center">
                    </div>
                    <div className="category-list w-[25%] h-[300px] flex flex-col items-center justify-center">
                        <ul className="ml-[-180px]">
                            <li>ACESSORIOS</li>
                            <li>TABACO</li>
                            <li>SEDAS...</li>
                        </ul>
                        <div className="cta ml-[-180px]">
                            <button className="mt-4 rounded-[8px] bg-white  px-6 py-3 text-[18px] text-black font-bold">COMPRAR AGORA</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}