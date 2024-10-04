import React from 'react'
import HomeHeader from '@/components/shared/HomeHeader'
import HomeMain from '@/components/shared/HomeMain';
const page = () => {
  return (
    <div className="px-6">
      <div>
        <HomeHeader/>
      </div>
      <main className='mt-2'>
        <HomeMain/>
      </main>
    </div>
  )
}

export default page