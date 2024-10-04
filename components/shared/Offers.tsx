'use client'
import React from 'react'
import { offers } from '@/constants'
import Image from 'next/image'
import { useAppDispatch,useAppSelector } from '@/redux/hooks'
import { updateOrderData } from '@/redux/slices/OrderSlice'
import { toast } from "sonner"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CheckoutForm from '../forms/CheckoutForm'
const Offers = () => {
  const dispatch = useAppDispatch()
  const orderData:any = useAppSelector(state=>state.Offer.order)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const placeOrder:any = (offer:any)=>{
   dispatch(updateOrderData(offer))
   toast(`order placed : ${offer.label}`)
   onOpen()

  }
  return (
    <div className="">
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {offers.map((offer,i)=>(
            <div className="border p-4 space-y-2 flex items-center flex-col " key={i}>
                <Image src={offer.image} width={200} height={200} alt="offer"></Image>
                <div className="flex-start w-full flex flex-col">
                    <p>{offer.label}</p>
                    <p className='headingsix font-medium'>{offer.price} Ksh</p>
                </div>
                
                <Button onClick={()=>placeOrder(offer)} radius='sm' className='w-full hover:bg-[#167EF4] hover:text-white active:bg-[#167EF4] active:text-white'>Place Order</Button>
            </div>
        ))}
    </div>
<>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  text-gray-800">Checkout</ModalHeader>
              <ModalBody>
                <div className="">
                  <div className="flex flex-row items-center gap-2">
                    <Image src={orderData.image} alt="order image" width={100} height={100}></Image>
                    <div className="">
                      <p>{orderData.label}</p>
                      <p className='font-medium'>{orderData.price} Ksh</p>
                    </div>
                  </div>
                  
                </div>
                <p className="bodysmall">Please input your payment information</p>
                <div className="flex flex-row gap-2 w-full items-center">
                    <Image src="/M-PESA.png" alt="payment pics" width={60} height={50}></Image>
                    <Image src="/images.png" alt="payment pics" width={60} height={50}></Image>
                    <Image src="/visa.png" alt="payment pics" width={60} height={50}></Image>
                    <Image src="/mastercard.jpg" alt="payment pics" width={60} height={50}></Image>
                </div>
                <div className="">
                  <CheckoutForm onClose={onClose}/>
                </div>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    </div>
    
  )
}

export default Offers