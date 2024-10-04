'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs'
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios';
import { NavigationConstants } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Header = () => {
  const { user } = useUser()
  const pathname = usePathname()
  console.log(pathname)
  const [organizationData, setOrganizationData] = useState<any>()

  // Ensure data is fetched and set only after user is available
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user.publicMetadata?.organizationId) {
          const databaseId = user.publicMetadata.organizationId;
          const response = await axios.post(`http://127.0.0.1:3001/api/arduino/organization/getorganization`, {
            id: databaseId 
          }); // Use GET for fetching data

          if (response.status === 200) {
            setOrganizationData(response.data);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]); // Re-run useEffect only when user changes



  return (
    <div className='w-full h-[64px] shadow-sm flex items-center px-8 justify-between'>
      <div className="w-[100px] md:w-[120px]">
        <Image src="/logo.png" alt='logo' width={200} height={200}></Image>
      </div>
      <div className="space-x-2">
        {NavigationConstants.map((value)=>{
           return <Link href={value.route} className={`subtitlemedium font-regular text-gray-600 ${pathname == value.route ? 'font-bold text-gray-800':''}`}>{value.label}</Link>
        })}
      </div>
      <div className="">
        <SignedIn>
          <div className="flex space-x-2 items-center justify-center ">
            <div className="flex items-center"><UserButton /></div>
            <div className="flex flex-col">
              <div className="text-gray-600 subtitlemedium font-regular">{`${user?.fullName}`}</div>
              {organizationData && (
                <div className="text-gray-600 subtitlemedium font-light text-sm">{organizationData.data.role}</div>
              )}
            </div>
           
          </div>
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