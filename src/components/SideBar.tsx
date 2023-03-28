import Slider from '@mui/material/Slider';

export function SideBar(){
    return (
        <main className="main side-bar w-1/3 bg-blacklight p-[32px] rounded-r-[8px]">
            <div>
                <h3 className="title-side-bar">Coleção:</h3>
                <div className="collections w-full flex flex-wrap justify-between items-center gap-y-[8px]">
                    <button className="collection">Start</button>
                    <button className="collection">Bendita's</button>
                    <button className="collection">Marijuana</button>
                    <button className="collection">Smoking Club</button>
                </div>
            </div>

            <div>
                <h3 className="title-side-bar">Tamanho:</h3>
                <div className="sizes w-full bg-white rounded-[8px] px-[24px] py-[18px] flex justify-between items-center">
                    <button className="size">P</button>
                    <button className="size">PP</button>
                    <button className="size">M</button>
                    <button className="size">G</button>
                    <button className="size">GG</button>
                </div>
            </div>

            <div>
                <h3 className="title-side-bar">Cor:</h3>
                <div className="colors w-full flex flex-wrap justify-between items-center">
                    <button className="color bg-black"></button>
                    <button className="color bg-white"></button>
                    <button className="color bg-purple"></button>
                    <button className="color bg-lime"></button>
                    <button className="color bg-sky"></button>
                    <button className="color bg-amber"></button>
                    <button className="color bg-grey"></button>
                </div>
            </div>

            <div>
                <h3 className="title-side-bar">Preço:</h3>
                <Slider></Slider>
            </div>
        </main>
    )
}