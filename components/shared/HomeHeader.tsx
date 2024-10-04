'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs'
import { convertTimestampToDateAndTime } from '@/lib/utils';
const HomeHeader = () => {
    const { user } = useUser()
    const [organizationData, setOrganizationData] = useState<any>()
    const [timeData, setTimeData] = useState<any>()


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

    useEffect(()=>{
      const fetchData = async () => {
        try {
          
            const response = await axios.get(`http://worldtimeapi.org/api/timezone/Africa/Nairobi`); // Use GET for fetching data
  
            if (response.status === 200) {
              const data = response.data.datetime
              const date = convertTimestampToDateAndTime(data)
              setTimeData(date);
            } else {
              console.error('Error fetching data:', response.statusText);
            }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    })
    console.log(timeData)
    
  return (
    <div className='space-y-2'>
        <div className="mt-[24px]">
            <h1 className='headingthree font-bold'>Karibu, {`${organizationData?.data?.role === "admin" ? 'Admin':'Customer'}`}</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className='text-gray-600 subtitlemedium '>hjh"</p>
          <p className='bg-green-100 p-2 rounded-full text-sm text-green-500'>All systems normal</p>
        </div>
    </div>
  )
}

export default HomeHeader