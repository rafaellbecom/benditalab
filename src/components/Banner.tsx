export function Banner () {
    return (
        <section className="tobacconist-headshop container w-full h-[100vh] flex flex-col">
            <div className="title my-12 flex h-[12vh] items-center">
                <h1 className="uppercase text-5xl  text-left font-bold">TABACARIA & HEADSHOP</h1>
                <button className="mt-4 ml-4 rounded-[8px] bg-transparent border-solid border-blackmedium border-[2px] font-medium px-6 py-[9px] text-[15px] text-blackmedium">#ESTILOSMAISQUENTES</button>
            </div>
            <div className="banner flex flex-row justify-around  text-white text-3xl font-sans font-bold tablet:flex-col tablet:gap-[30px]">
                <div className="banner-card flex flex-row w-[500px] h-[300px] rounded-[16px] bg-black tablet:w-[90%] tablet:m-auto">
                    <div className="image w-[75%] h-[300px] rounded-bl-[16px] bg-[url('../assets/home/banner/banner01.png')] bg-cover bg-no-repeat bg-center celg:w-[70%]">
                    </div>
                    <div className="category-list w-[25%] h-[300px] flex flex-col items-center justify-center">
                        <ul className="ml-[-180px] celg:ml-[-160px]">
                            <li className="celg:text-[24px]">PODS</li>
                            <li className="celg:text-[24px]">VAPORIZADORES</li>
                            <li className="celg:text-[24px]">E-LIQUIDOS...</li>
                        </ul>
                        <div className="cta ml-[-220px] celg:ml-[-160px]">
                            <button className="mt-4 rounded-[8px] bg-white px-6 py-3 text-[18px] text-black font-bold celg:px-5 celg:py-2">COMPRAR AGORA</button>
                        </div>
                    </div>
                </div>

                <div className="banner-card flex flex-row w-[500px] h-[300px] rounded-[16px] bg-black tablet:w-[90%] tablet:m-auto">
                    <div className="image w-[75%] h-[300px] rounded-bl-[16px] bg-[url('../assets/home/banner/banner02.png')] bg-cover bg-no-repeat bg-center celg:w-[70%]">
                    </div>
                    <div className="category-list w-[25%] h-[300px] flex flex-col items-center justify-center">
                        <ul className="ml-[-180px] celg:ml-[-160px]">
                            <li className="celg:text-[24px]">ACESSORIOS</li>
                            <li className="celg:text-[24px]">TABACO</li>
                            <li className="celg:text-[24px]">SEDAS...</li>
                        </ul>
                        <div className="cta ml-[-180px] celg:ml-[-160px]">
                            <button className="mt-4 rounded-[8px] bg-white  px-6 py-3 text-[18px] text-black font-bold celg:px-5 celg:py-2">COMPRAR AGORA</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}