import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
export default function ProductCard({ title, price, src, category, id }: { title: string, price: number, src: string | StaticImageData, category: string, id: number }) {
  // console.log(props)
  return (
    <div className=' group hover:scale-110 duration-300'>
      <Link href={`/products/${id}`}>
        <Image src={src} alt='image' height={330} width={330} />
        <h3 className="scroll-m-20 text-base text-gray-800 mt-3 font-semibold tracking-tight">
          {title}
        </h3>
        <p className='scroll-m-20 text-base font-bold text-gray-900 tracking-tight'>
          ${price}
        </p>
      </Link>
    </div>
  )
}











{/* <p className='scroll-m-20 text-base font-semibold text-gray-900 tracking-tight'>
        Category &nbsp;<span className='text-base text-gray-400'>{category}</span>
    </p> */}
