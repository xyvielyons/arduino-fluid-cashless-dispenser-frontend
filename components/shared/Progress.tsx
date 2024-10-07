'use client'
import React,{useState,useEffect} from 'react'
import { Progress } from '../ui/progress'
import { Button } from '@nextui-org/react'
const MyProgress = ({values}:{values:any}) => {

  const [totalLitres, setTotalLitres] = useState(0);
  const [targetLitres, setTargetLitres] = useState(0);
  const [percentage, setPercentage] = useState(0);
  // Use useEffect to handle changes in values
  useEffect(() => {
     if (values) {
        // Update totalLitres, targetLitres, and percentage whenever values change
        setTotalLitres((values.totalLiters) + 0.2);
        setTargetLitres(values.targetLitres);

        const newPercentage = ((totalLitres / (targetLitres)) * 100); // Avoid division by zero
        setPercentage(newPercentage);
     }
  }, [values]); // Dependency array to trigger whenever values change

  console.log(percentage)
  return (
    <div className='space-y-2'>
        <div className="space-y-2">
          {totalLitres >= targetLitres ? (
            <div className="">
              <p className='text-sm text-gray-600'>water vending complete</p>
            </div>  
          ):(
            <div className="">
              <p className='text-sm text-gray-600'>vending...........</p>
              <Progress value={percentage} />
            </div>   
          )}


            
        </div>
        <div className="">
            <h1 className='subtitlemedium font-medium text-gray-600'>Currently Vended : <span className='text-gray-800'>{`${totalLitres}`}</span> </h1>
            <h1 className='subtitlemedium font-medium text-gray-600'>Water to Vend : <span className='text-gray-800'>{`${targetLitres}`}</span> </h1>
        </div>
        {totalLitres >= targetLitres ? (
            <div className="">
              
            </div>  
          ):(
            <div className="w-full gap-2 flex flex-row">
              <Button className='w-full'>Stop</Button>
              <Button className='w-full'>cancel</Button>
            </div>
          )}
        

        
    </div>
  )
}

export default MyProgress