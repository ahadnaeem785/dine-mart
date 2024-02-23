import CartButton from '@/components/cartButton';
import Quantity from '@/components/quantity';
import { Button } from '@/components/ui/button';
import { Products } from '@/utils/mock'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const getProductDetail = (id: number | string) => {
  return Products.filter((val) => val.id == id);
};

const variants = ["XS", "S", "M", "L", "XL"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductDetail(params.id)
  // console.log(result)
  console.log(params)
  return (
    <div className=' mb-[100px] bg-gray-50 pt-1 lg:pt-6 px-8 lg:px-20'>
      <div className='flex flex-col lg:flex-row justify-center  mt-10'>
        {
          result.map((item) => (
            <div key={item.id} className='flex flex-col lg:flex-row justify-center lg:justify-between gap-20' >
              {/* image div*/}
              <div>
                <Image src={item.image} alt={item.title} height={600} width={600} className='h-[600px] w-[600px]' />
              </div>
              {/* content div */}
              <div>
                {/* title */}
                <div className='mt-10'>
                  <h1 className='text-2xl '>{item.title}</h1>
                  <h2 className='text-gray-400 xl font-semibold'>{item.tagline}</h2>
                </div >
                {/* sizes */}
                <div className='mt-6'>
                  <h4 className='text-xs font-semibold uppercase'>Select Size</h4>
                  {/* variants */}
                  <div className='flex gap-x-4 mt-1'>
                    {
                      variants.map((item, i) => (
                        <div key={i} className='flex h-6 w-6 border border-gray-100 rounded-full hover:shadow-2xl mt-2 justify-center items-center'>
                          <span className='text-xs font-semibold text-center text-gray-600'>{item}</span>
                        </div>
                      ))
                    }
                  </div>

                </div>
                {/* Quantity */}
                <div className='mt-6 flex gap-5'>
                  <h3 className='text-xs font-bold flex items-center'>Quantity:</h3>
                  <Quantity />
                </div>
                {/* add to cart */}
                <div className='mt-4 flex items-center gap-3'>
                  <CartButton />
                  <h2 className='text-xl font-bold '>${item.price.toFixed(2)}</h2>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/* product information */}
      <div className=' mt-10 pb-10'>
        <div className='bg-white px-8 pb-16'>
          <div className='pt-16 border-b border-b-gray-400'>
            <h3 className='font-bold text-xl pb-10'>Product Information</h3>
          </div>
          {/* product detail */}
          <div className='mt-6 flex text-sm'>
            <h1 className='w-[32%] text-gray-600 font-bold uppercase '>Product Details</h1>
            <p className='flex-1 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste libero iusto placeat? Et qui fuga architecto at quas praesentium aspernatur sequi voluptas unde similique, velit sit accusamus officia doloremque a cumque eos iusto! Laborum, quo odio? Quidem sint ab, dolor quod tenetur eaque delectus provident, aliquam laborum omnis ipsa ipsum veritatis expedita dignissimos perferendis perspiciatis nostrum blanditiis iure necessitatibus ducimus!
            </p>
          </div>
          {/* product detail */}
          <div className='mt-6 flex '>
            <h1 className='w-[32%] text-gray-600 font-bold uppercase text-sm'>Product Detail</h1>
            &nbsp;&nbsp;&nbsp;<ul className='flex-1 text-sm font-bold list-disc'>
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
