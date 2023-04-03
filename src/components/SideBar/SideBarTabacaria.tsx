import Slider from '@mui/material/Slider';

export function SideBarTabacaria(){
    return (
        <main className="main side-bar-tabacaria w-1/3 bg-blacklight p-[32px] rounded-r-[8px]">
            <div>
                <h3 className="title-side-bar">Categoria:</h3>
                <div className="marks w-full flex flex-wrap justify-between items-center gap-y-[8px]">
                    <button className="mark">Pod Descartável</button>
                    <button className="mark">Pod System</button>
                    <button className="mark">Seda</button>
                    <button className="mark">Piteira</button>
                    <button className="mark">Tesouras</button>
                    <button className="mark">Dichavadores</button>
                    <button className="mark">Boladores</button>
                </div>
            </div>

            <div>
                <h3 className="title-side-bar">Marcas:</h3>
                <div className="marks w-full flex flex-wrap justify-between items-center gap-y-[8px]">
                    <button className="mark">Ignite</button>
                    <button className="mark">Zomo</button>
                    <button className="mark">NikBar</button>
                    <button className="mark">ElfBar</button>
                    <button className="mark">PuffBar</button>
                    <button className="mark">Smokbar</button>
                    <button className="mark">Uewll</button>
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