"use client"
import Image from 'next/image'
import React from 'react'
import logo from "/public/assets/Logo.webp"
import { ShoppingCart,SearchIcon } from "lucide-react"
import { Input } from './ui/input'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'
import DropDown from './dropDown'

export default function Header() {
    const cartValue = useAppSelector(state => state.cartArray.totalQuantity)
    return (
        <div className='flex justify-between items-center px-8 lg:px-20 py-8 mt-2'>
            <div><Link href={"/"}><Image src={logo} alt='logo' /></Link></div>
            <ul className='lg:flex gap-x-12 text-base hidden '>
                <Link href={"/category/femail"}><li className='hover:scale-105  duration-100 hover:font-medium'>Female</li></Link>
                <Link href={"/category/male"}><li className='hover:scale-105  duration-100 hover:font-medium'>Male</li></Link>
                <Link href={"/category/kids"}><li className='hover:scale-105  duration-100 hover:font-medium'>Kids</li></Link>
                <Link href={"/products"}><li className=' hover:scale-105 duration-100 hover:font-medium'>All Products</li></Link>

            </ul>
            <div className="w-[25%] hidden lg:block">
                <div className='flex justify-center items-center'><SearchIcon className='absolute z-10 -ml-[300px] w-4 h-4'/><Input id="picture" placeholder='what you looking for' className='rounded-lg relative pl-8'/></div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='flex lg:rounded-full lg:bg-gray-200 h-[42px] w-[42px] justify-center items-center relative'>
                    <Link href={"/cart"}>
                        <p className='bg-red-500 absolute h-[22px] w-[22px] top-0 right-0 rounded-full text-white text-center font-medium '>{cartValue}</p>
                        <ShoppingCart className='h-[26px] w-[26px]' />
                    </Link>
                </div>
                <DropDown/>
                {/* <div className='lg:hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-black w-7 h-7"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </div> */}
            </div>
        </div>
    )
}
