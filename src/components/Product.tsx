import {Tag} from './Utils/Tag';
import React from 'react';

export function Product(){
    return (
        <div className="product flex flex-col w-full h-auto">
            <div className="product-image w-full h-[400px] bg-[url('../assets/product/imagem-product.jpg')] bg-cover bg-no-repeat bg-center p-[15px]">
                <Tag></Tag>
            </div>

            <div className="product-content mt-[15px]">
                <h1 className="product-title font-sans font-bold uppercase text-lg text-blackdark ">START - Camiseta bulls</h1>
                
                <div className="price-product mt-[15px]">
                    <span className="installments font-sans font-regular text-sm text-black">6x de 18,32 sem juros</span>
                    <h2 className="value font-sans font-bold text-2xl">R$ 109,90</h2>
                </div>
            </div>
        </div>
    )
}