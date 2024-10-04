'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const HomeMain = () => {
    const router = useRouter()

  return (
    <div>
        <div className="flex flex-col md:space-x-2 md:flex-row  space-y-2 ">
          <div className="h-[450px] w-full">
            <div className="w-full h-full  object-cover relative cursor-pointer" onClick={()=>router.push("/shop")}>
              <img src="/water.jpg" alt="water"  className='object-cover w-full h-full rounded-md'></img>
              <div className="absolute inset-0 hover:bg-black hover:opacity-30 active:bg-black active:opacity-30"></div>
              <div className="absolute top-[300px] left-2 pl-8 ">
                <h1 className='font-bold text-[25px] text-white'>Premium Sparkling Water</h1>
                <p className='subtitlesmall text-white '>Refresh yourself with our crisp, bubbly sparkling water. Perfect for any occasion.</p>
                <div className="mt-2">
                  <Button className='bg-[#167EF4]' onClick={()=>router.push("/shop")}>Place an Order <FaArrowRightLong width={24} height={24} className='ml-4'/></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="h-[200px] md:h-full p-4 border-[1px] rounded-sm relative cursor-pointer hover:bg-gray-200 active:bg-gray-200 " onClick={()=>router.push("/about")}>
              <h1 className='headingfour font-medium '>About AutoVend</h1>
              <p className='text-gray-600 font-regular text-sm'>Learn about our mission to provide convenient, high-quality vending solutions</p>
              <p className='absolute bottom-10 text-gray-600 underline'>Company info <FaArrowRightLong width={24} height={24} className='ml-2 inline-block'/></p>
            </div>
            <div className="h-[200px] md:h-full p-4 border-[1px] relative cursor-pointer hover:bg-gray-200 active:bg-gray-200" onClick={()=>router.push("/support")}>
              <h1 className='headingfour font-medium rounded-sm'>Customer Support</h1>
              <p className='text-gray-600 text-sm'>Need help? Our support team is here to help. Contact us we would love to hear from you</p>
              <p className='absolute bottom-10 text-gray-600 underline'>Contact support <FaArrowRightLong width={24} height={24} className='ml-2 inline-block'/> </p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeMain