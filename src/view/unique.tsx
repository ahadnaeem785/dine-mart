import Image from 'next/image'
import pic from '/public/assets/feature.webp'
import { Button } from '@/components/ui/button'


const leftContentData = [
    {
        heading: "Using Good Quality Materials",
        description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
        heading: "100% Handmade Products",
        description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
        heading: "Modern Fashion Design",
        description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
        heading: "Discount for Bulk Orders",
        description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },

]
export default function Unique() {
    return (
        <section className='mb-[100px]'>
            <h2 className="scroll-m-20 text-center mt-2 pb-2 text-3xl lg:text-4xl font-semibold tracking-tight first:mt-0">
                Unique and Authentic Vintage Designer Jewellery.
            </h2>
            <div className='flex pt-[50px] lg:pb-[50px] px-8 lg:px-20 gap-8 mt-8 flex-col lg:flex-row bg-gray-50'>
                {/* left */}
                <div className='flex-1 mt-8'>
                    <div className='grid grid-cols-2 gap-x-16 px-8 gap-y-10'>
                        {
                            leftContentData.map((item, i) => (
                                <div key={i}>
                                    <h4 className='text-base font-bold '>{item.heading}</h4>
                                    <p className='text-sm mt-3 text-gray-600'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* right */}
                <div className='flex-1'>
                    <div className='flex flex-col lg:flex-row gap-y-8 gap-x-8 justify-between items-center '>
                        <div className='basis-5/12 px-6 lg:px-0'><Image src={pic} alt='image' /></div>
                        <div className='basis-7/12'>
                            <p className='text-sm '>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Button type="submit" className='h-8 text-xs mt-5 px-7 font-medium flex justify-center items-center'>See All Products</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
