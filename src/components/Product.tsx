import {Tag} from './Utils/Tag';
import React from 'react';

export function Product(){
    return (
        <div className="product flex flex-col flex-1 w-[100%] h-[90vh]">
            <div className="product-image w-full h-[455px] bg-[url('../assets/product/imagem-product.jpg')] bg-cover bg-no-repeat bg-center p-[15px]">
                <Tag></Tag>
            </div>

            <div className="product-content">
                <h1 className="product-title font-sans font-bold uppercase text-lg mt-[15px] text-blackdark ">START - Camiseta bulls</h1>
                
                <div className="price-product">
                    <span className="installments font-sans font-regular text-sm mt-[15px] text-black">6x de 18,32 sem juros</span>
                    <h2 className="value font-sans font-bold text-2xl">R$ 109,90</h2>
                </div>
            </div>
        </div>
    )
}