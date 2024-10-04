import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-4 font-light'>
      <div className="text-gray-600">
        <h1>@2024 AutoVend All Rights Reserved</h1>
      </div>
      <div className="space-x-2 flex flex-row">
        <p className='text-gray-600 '>Privacy Policy</p>
        <p className='text-gray-600'>Terms of service</p>
      </div>
    </div>
  )
}

export default Footer