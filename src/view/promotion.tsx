import Image from 'next/image'
import p1 from '/public/assets/event1.webp'
import p2 from '/public/assets/event2.webp'
import p3 from '/public/assets/event3.webp'

export default function Promotion() {
    return (
        <div className='mb-[100px] px-8 lg:px-20'>
            <p className="leading-7 [&:not(:first-child)]:mt-6 uppercase text-xs font-semibold text-[#007aff] text-center">Promotions</p>
            <h2 className="scroll-m-20 text-center mt-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Our Promotion Events 
            </h2>
            <div className='flex flex-col lg:flex-row  gap-6 mt-6'>
                <div className='basis-7/12'>
                    <div className='flex justify-between  bg-gray-300 pt-10 lg:pt-0'>
                        <div className='flex flex-col justify-center ml-6 '>
                            <h2 className=' text-2xl lg:text-3xl font-bold -mt-4 lg:-mt-0'>GET UP TO <span className='text-3xl font-bold'>60%</span></h2>
                            <p className=' text-sm lg:text-lg lg:mt-1'>For the summer season</p>
                        </div>
                        <div><Image src={p1} alt='image' /></div>
                    </div>
                    <div className='flex justify-center items-center bg-black/85 mt-4'>
                        <div className='py-10 lg:py-12 text-white text-center'>
                            <h3 className='text-3xl font-bold'>GET 30% Off</h3>
                            <p className='text-xs lg:text-sm  mt-3'>USE PROMO CODE</p>
                            <button className='bg-gray-50/20 px-7 py-1 mt-1 rounded'>DINEWEEKENDSALE</button>
                        </div>
                    </div>
                </div>
                <div className='basis-5/12'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className='bg-[#efe1c7]'>
                            <div className='pl-6 py-6'>
                                <h4 className='text-sm font-medium'>Flex Sweatshirt</h4>
                                <p className='font-semibold text-base'><span className='line-through font-medium'>$100.00</span> &nbsp; $75.00</p>
                            </div>
                            <div className='ml-14 lg:ml-0'><Image src={p2} alt='image' /></div>
                        </div>
                        <div className='bg-gray-300'>
                            <div className='pl-6 py-[22px]'>
                                <h4 className='text-sm font-medium'>Flex Sweatshirt</h4>
                                <p className='font-semibold text-base'><span className='line-through font-medium'>$100.00</span> &nbsp; $75.00</p>
                            </div>
                            <div className='ml-14 lg:ml-0'><Image src={p3} alt='image' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
