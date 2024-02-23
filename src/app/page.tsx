import Hero from '@/view/hero'
import Productlist from '@/view/productlist'
import Promotion from '@/view/promotion'
import Subcribe from '@/view/subcribe'
import Unique from '@/view/unique'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <Hero/>
    <Promotion/>
    <Productlist/>
    <Unique/>
    <Subcribe/>
    </div>
  )
}
