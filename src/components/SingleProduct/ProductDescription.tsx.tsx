export function ProductDescription(){
    return(
        <div className="main container mx-auto flex justify-center items-start">
            <div className="box w-1/3">
                <h3 className="font-sans font-black text-xl font-bold uppercase mb-[15px]">Descrição:</h3>
                <p className="font-sans font-blackmedium text-lg">Aproveite o máximo do seu estilo com a Camisa Streetwear Bulls que te dará a sensação que você espera, tanto de conforto quanto de elegância, com detalhes de design que remetem ao padrão da Bendita®.</p>
            </div>

            <div className="box w-1/3">
                <h3 className="font-sans font-black text-xl font-bold uppercase mb-[15px]">Composição:</h3>
                <ul className="font-sans font-blackmedium text-lg uppercase">
                    <li>EXTERIOR 72% POLIÉSTER</li>
                    <li>5% VISCOSE</li>
                    <li>3% ELASTANO</li>
                </ul>
            </div>

            <div className="box w-1/3">
                <h3 className="font-sans font-black text-xl font-bold uppercase mb-[15px]">Cuidados:</h3>
                <ul className="font-sans font-blackmedium text-lg">
                    <li>Temperatura máxima de lavagem 40ºC</li>
                    <li>Não pode ser seca em máquina</li>
                    <li>Chapa da base do ferro com temperatura máxima de 110ºC</li>
                    <li>Não remover manchas com solventes</li>
                </ul>
            </div>
        </div>
    )
}