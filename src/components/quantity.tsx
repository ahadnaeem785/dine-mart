"use client"
import { useState } from 'react'

export default function Quantity() {

    const[num,setNum] = useState(1)

  return (
    <div className='flex items-center gap-3'>
        {/* minus */}
      <button 
      onClick={()=>{setNum(num<=1 ? 1 : num-1)}}
      className='h-6 w-6 tracking-tight shadow-sm shadow-gray-300  rounded-full border border-gray-100 flex justify-center items-center'>
        -
      </button>
      {/* number */}
      <span className='text-sm font-medium tracking-tight'>{num}</span>
      {/* plus */}
      <button 
      onClick={()=>{setNum(num+1)}}
      className='h-6 tracking-tight shadow-sm w-6 shadow-gray-300 rounded-full border border-gray-100 flex justify-center items-center'>
        +
      </button>
    </div>
  )
}
