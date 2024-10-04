"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@nextui-org/react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaArrowRightLong } from "react-icons/fa6";
import { ChekoutFormSchema } from '@/Zod/CheckoutFormSchema'
import { useAppDispatch,useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const CheckoutForm = ({onClose}:{onClose:any}) => {
    const router = useRouter()
    const orderData:any = useAppSelector(state=>state.Offer.order)

    const form = useForm<z.infer<typeof ChekoutFormSchema>>({
        resolver: zodResolver(ChekoutFormSchema),
        defaultValues: {
          name: "",
          phoneNumber:"07"
        },
      })
    async function onSubmit(values: z.infer<typeof ChekoutFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
  
        const FormCredentials = {
            name:values.name,
            phoneNumber:values.phoneNumber,
            price:orderData.price,
            order:orderData.label
        }

         try {
            const InitiatePayment = await axios.post('http://127.0.0.1:3001/api/pesapal/initiatepayment',FormCredentials)
            const response = InitiatePayment.data
            if(response){
                router.push(response.message.redirect_url)
            }
            onClose()
            
         } catch (error) {
            console.log(error)
         }
        


      }
  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0728***683" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 w-full justify-end pt-4">
            <Button onClick={onClose} radius='sm'>Cancel</Button>
            <Button type="submit" radius='sm' className='bg-gray-800 text-white d'>Proceed to checkout<FaArrowRightLong width={24} height={24} className='ml-2 inline-block'/></Button>
        </div>

      </form>
    </Form>
    </div>
  )
}

export default CheckoutForm