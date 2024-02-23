import ProductCard from '@/components/productCard'
import { Products } from '@/utils/mock'
import React from 'react'

export default function AllProducts() {
    return (
        <div className='mt-[50px] mb-[100px] px-8 lg:px-20'>
            <h2 className="scroll-m-20 text-center mt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                All Products
            </h2>
            <div className='flex justify-around gap-x-2 flex-wrap mt-10 gap-y-8'>
                {
                    Products.map((item) => (
                        <ProductCard key={item.id} title={item.title} price={item.price} src={item.image} category={item.category} id={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}
