import ProductCard from '@/components/productCard'
import { Products } from '@/utils/mock'
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
    const categoryFilter = Products.filter((val) => val.category == params.slug)
    // console.log(categoryFilter)
    return (
        <div className='flex px-8 lg:px-20 justify-around gap-x-2 flex-wrap mt-2 lg:mt-10 gap-y-8 mb-[100px] lg:mb-[200px]'>
           
           { categoryFilter.length>0 &&
            <h2 className="scroll-m-20 block lg:hidden capitalize text-gray-400/45 text-center text-3xl font-semibold tracking-tight first:mt-0">
                {params.slug}
            </h2>}
            {
                categoryFilter.length > 0
                    ?
                    categoryFilter.map((item) => (
                        <ProductCard key={item.id} title={item.title} price={item.price} src={item.image} category={item.category} id={item.id}/>
                    ))
                    :
                    <p>No Products Found</p>

            }

        </div>
    )
}
