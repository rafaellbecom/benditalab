import ArrowBack from '@mui/icons-material/ArrowBackIosNew';

export function Breadcrumbs(){
    return(
        <div className="main bg-black py-[32px]">
            <div className='container mx-auto flex justify-between items-center'>
                <div className="flex justify-center items-center gap-[16px]">
                    <ArrowBack className="text-white text-lg"></ArrowBack>
                    <nav>
                        <ul className="flex justify-center items-center gap-[8px] text-white font-sans text-xl uppercase ">
                            <li><a href="" className="text-whitedark">Home</a></li>
                            <li>/</li>
                            <li><a href="">Camisetas</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="search w-1/2 flex justify-end">
                    <input type="text" id="searchBreadcrumbs" placeholder="O que você busca?" className="w-[5/6] bg-transparent px-[32px] py-[16px] border-2 border-solid border-whitedark color-whitedark rounded-[8px]"/>
                </div>
            </div>
        </div>
    )
}