'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import { Button } from '@nextui-org/react'
import LottieCancelled from '@/public/Animation - 1728077125237.json'
import { useRouter } from 'next/navigation'
import { FaArrowRightLong } from "react-icons/fa6";

const CancelledOrder = () => {
    const router = useRouter()
  return (
    <div className='flex flex-row items-center h-screen gap-4'>
        <div className="w-full flex items-center justify-center">
            <Lottie
            loop
            animationData={LottieCancelled}
            play
            style={{ width: 250, height: 250 }}
            />
        </div>
        <div className="w-full space-y-4">
            <h1 className='headingfour font-bold text-gray-800'>Your Payment Was Cancelled Please Try Placing Order Again</h1>
            <Button radius="sm" onClick={()=>router.push('/shop')} className='hover:text-white hover:bg-[#167EF4] active:text-white active:bg-[#167EF4]'>Back to shop <FaArrowRightLong width={24} height={24}/></Button>
        </div>
    </div>
  )
}

export default CancelledOrder