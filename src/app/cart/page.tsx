import { Button } from '@/components/ui/button'
import CartItemCard from '@/view/cartItemCard'
import p1 from "/public/assets/p1.png"

export default function Page() {
    return (
        <div className='mb-[200px] mt-[60px] px-8 lg:px-20'>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* cart items */}
                <div className='col-span-2'>
                    <CartItemCard src={p1} tagline='dress' price={100} title='Decent Dress' />
                </div>

                {/* order summary */}
                <div className='max-w-sm lg:ml-6 mt-6 lg:mt-0'>
                    <div className='bg-gray-200/50 p-5 rounded-xl col-span-1 shadow-md shadow-gray-200'>
                        <h4 className='text-base font-bold'>Order Summary</h4>
                        <div>
                            <div className='flex justify-between mt-6'>
                                <p className='text-sm capitalize font-medium'>Quantity</p>
                                <p className='text-sm capitalize font-medium'>2 Product</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className='text-sm capitalize font-medium'>Sub total</p>
                                <p className='text-sm capitalize font-medium'>$200</p>
                            </div>
                            <div className='mt-1'>
                                <Button type="submit" className='h-9 rounded text-xs mt-5 px-7 font-medium w-full'>Procceed to checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
