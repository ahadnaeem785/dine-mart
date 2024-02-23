import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'
import heroimg from "/public/assets/header.webp"
import logo1 from "/public/assets/ht1.webp"
import logo2 from "/public/assets/ht2.webp"
import logo3 from "/public/assets/ht3.webp"
import logo4 from "/public/assets/ht4.webp"
import { Button } from '@/components/ui/button'
import { ShoppingCart } from "lucide-react"

export default function Hero() {
  return (
    <section className='flex mt-6 mb-[100px] px-8 lg:px-20'>
      {/* content div*/}
      <div className='flex-1 lg:mt-16'>
        <Badge className='py-2 text-sm px-6 font-extrabold rounded-md text-[#007aff] bg-[#e1edff]'>Sale 70%</Badge>
        <h1 className="scroll-m-20 mt-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-8 text-gray-600">
          Anyone can beat you but no one can beat your outfit as long as <br /> you wear Dine outfits.
        </p>
        <Button className='mt-8 font-semibold text-sm px-6 lg:px-8 h-12 lg:h-14 bg-[#212121]'>
          <ShoppingCart className="mr-2 h-5 w-5 flex justify-center items-center" /> Start Shopping
        </Button>
        <div className='flex flex-wrap gap-x-20 lg:gap-x-16 mt-10 gap-y-8  lg:mt-24'>
          <Image src={logo1} alt='image' />
          <Image src={logo2} alt='image' />
          <Image src={logo3} alt='image' />
          <Image src={logo4} alt='image' />
        </div>
      </div>
      {/* image div*/}
      <div className='flex-1 relative hidden lg:block'>
        <div className='overflow-hidden rounded-full bg-[#ffece3] h-[550px] w-[550px] '>
          <Image src={heroimg} alt='image' className='absolute -mt-8 -ml-4' />
        </div>
      </div>
      {/* <div className='flex-1 relative'>
        <div className=' rounded-full overflow-hidden bg-gray-500 h-[500px] w-[500px]'>
          <Image src={heroimg} alt='image' className='absolute inset-0  ' />
        </div>
      </div> */}
    </section>
  )
}


{/* <div className='flex-1 relative'>
  <div className='relative rounded-full overflow-hidden bg-gray-500 h-[200px] w-[200px]'>
    <img src={heroimg} alt='image' className='absolute inset-0 w-full h-full object-cover' />
  </div>
</div>  */}
