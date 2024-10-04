import Image from 'next/image'
import React from 'react'
import { SignedIn,UserButton,SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'
const Header = () => {
  return (
    <div className='w-full h-[64px] shadow-sm flex items-center px-8 justify-between'>
       <div className="w-[100px] md:w-[120px]">
        <Image src="/logo.png" alt='logo' width={200} height={200}></Image>
       </div>
       <div className=""></div>
       <div className="">
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <div className="">
                <Button>Login</Button>
            </div>
        </SignedOut>
       </div>
    </div>
  )
}

export default Header