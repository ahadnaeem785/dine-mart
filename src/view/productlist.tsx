
import React from 'react'
// import p4 from "/public/assets/p4.png"
import ProductCard from '@/components/productCard'
import { Products } from '@/utils/mock'

export default function Productlist() {
    const productChuncks = Products.slice(0, 3);
    // console.log("data", productChuncks );
    return (
        <div className='mt-[50px] mb-[100px] px-8 lg:px-20'>
            <p className="leading-7 [&:not(:first-child)]:mt-6 uppercase text-xs font-semibold text-[#007aff] text-center">products</p>
            <h2 className="scroll-m-20 text-center mt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Check What WE Have
            </h2>
            <div className='flex gap-y-8 lg:gap-y-0 flex-col  items-center lg:flex-row lg:justify-around mt-10'>
                {
                    productChuncks.map((item) => (
                        <ProductCard key={item.id} title={item.title} price={item.price} src={item.image} category={item.category} id={item.id} />
                    ))
                }
            </div>
        </div>
    )
}
