"use client"
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/slice/cart'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
  const dispatch = useAppDispatch()
  return (
    <div>
      <Button onClick={() => dispatch(addToCart({ quantity: 1 }))}
        className='mt-2 font-semibold text-xs px-12 h-9 bg-[#212121]'>
        <ShoppingCart className="mr-2 h-5 w-5 flex justify-center items-center" /> Add to Cart
      </Button>
    </div>
  )
}
