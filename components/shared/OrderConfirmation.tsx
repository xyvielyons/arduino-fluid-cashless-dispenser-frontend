'use client'
import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Lottie from 'react-lottie-player'
import LottieAccepted from '@/public/Animation - 1728077551699.json'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FaArrowRightLong } from 'react-icons/fa6'
import MyProgress from './Progress'
import { useMqtt } from '@/hooks/useMqtt';
import { extractPumpValues } from '@/lib/utils'
const OrderConfirmation = () => {
    
    const searchParams = useSearchParams() 
    const router = useRouter()
    const [orderMerchantReference, setOrderMerchantReference] = useState<String | null>()
    const [orderTrackingId, setOrderTrackingId] = useState<String | null>()
    const { pumpMessage } = useMqtt();
    const [pumpValues, setPumpValues] = useState<any>(null)
    
   // Check if pumpMessage is properly updated
   useEffect(() => {
    if (pumpMessage && pumpMessage.message) {
        console.log("Pump Message:", pumpMessage.message);
        const pumpValues = extractPumpValues(pumpMessage.message)
        // You can update pumpValues here if needed
        setPumpValues(pumpValues);
    } else {
        console.log("Waiting for pumpMessage...");
    }
}, [pumpMessage]);

    useEffect(()=>{
        const trakingId = searchParams.get("OrderTrackingId")
        const merchantId = searchParams.get("OrderMerchantReference")
        setOrderMerchantReference(merchantId)
        setOrderTrackingId(trakingId)
    },[searchParams])
    
    
  
   
    

    

       
        
     
  return (
    <div className='flex flex-row gap-4 h-screen p-4'>
    <div className="w-full flex items-center justify-center">
        <Lottie
        loop
        animationData={LottieAccepted}
        play
        style={{ width: 400, height: 400 }}
        />
    </div>
    
    <div className="w-full space-y-4 justify-center flex flex-col">
        <h1 className='headingfour font-bold text-gray-800'>Your Payment Was Completed successfully</h1>
        <div className="">
          <MyProgress values={pumpValues}/>
        </div>
        <Button radius="sm" onClick={()=>router.push('/shop')} className='hover:text-white hover:bg-[#167EF4] active:text-white active:bg-[#167EF4]'>Back to shop <FaArrowRightLong width={24} height={24}/></Button>
    </div>


</div>
  )
}

export default OrderConfirmation