"use client"
 import { z } from "zod"
 
export const ChekoutFormSchema = z.object({
  name: z.string().min(2).max(50),
  phoneNumber: z.string().min(10).max(11)
})
