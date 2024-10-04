import React from 'react'
import Offers from '@/components/shared/Offers'
const page = () => {
  return (
    <div className='p-4 space-y-2'>
      <div className="">
        <h1 className='headingfive font-bold text-gray-800'>See Available offers:</h1>
      </div>
      <div className="">
        <Offers></Offers>
      </div>
    </div>
  )
}

export default page