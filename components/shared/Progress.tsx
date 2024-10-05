import React from 'react'
import { Progress } from '../ui/progress'
import { Button } from '@nextui-org/react'
const MyProgress = () => {
  return (
    <div className='space-y-2'>
        <div className="space-y-2">
            <p className='text-sm text-gray-600'>please wait...........</p>
            <Progress value={44} />
        </div>
        <div className="">
            <h1 className='subtitlemedium font-medium text-gray-600'>Currently Vended : <span className='text-gray-800'>200 ml</span> </h1>
            <h1 className='subtitlemedium font-medium text-gray-600'>Water to Vend : <span className='text-gray-800'>2000 ml</span> </h1>
        </div>
        <div className="w-full gap-2 flex flex-row">
            <Button className='w-full'>Stop</Button>
            <Button className='w-full'>cancel</Button>
        </div>
        
    </div>
  )
}

export default MyProgress