import Quantity from "@/components/quantity";
import Image, { StaticImageData } from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function CartItemCard({ src, tagline, price, title }: { title: string, src: string | StaticImageData, tagline: string, price: number }) {
    return (
        <div className="flex flex-col lg:flex-row p-6">
            {/* image */}
            <Image src={src} alt={title} width={140} height={140} className="object-cover rounded-lg" />
            <div className="flex lg:px-7 mt-3 lg:mt-0 justify-between items-center w-full">
                 {/* some info */}
                <div>
                    {/* title */}
                    <h3 className="font-semibold  text-lg leading-none text-gray-900">{title}</h3>
                    {/* tagline */}
                    <p className="text-[13px] uppercase text-gray-500 mt-2 lg:mt-3 font-medium tracking-tight">{tagline}</p>
                    {/* delivery estimation */}
                    <h4 className="text-[15px] tracking-tight text-gray-800 mt-[2px] lg:mt-2 font-semibold capitalize">Delivery Estimation</h4>
                    <p className="text-rose-600 font-bold text-[15px] mt-1 lg:mt-2">5 Working Days</p>
                    {/* price */}
                    <h4 className="text-gray-900 font-bold text-base mt-1 lg:mt-2">$120</h4>
                </div>
                {/* buttons */}
                <div className="flex flex-col  items-end">
                <RiDeleteBin6Line className="w-6 h-6 mb-20 cursor-pointer"/>
                <Quantity />
                </div>
            </div>
        </div>
    )
}
