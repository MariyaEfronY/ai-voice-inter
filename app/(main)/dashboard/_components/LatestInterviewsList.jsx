"use client"

import { Video } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui/button';    

const LatestInterviewsList = () => {
    const [interviews, setInterviews] = useState([]);
  return (
    <div>
       <h2 className='font-bold text-2xl mb-3'>Previously Created Interviews</h2>

      {interviews?.length === 0 && (
        <div className='p-5 text-center border rounded-md'>
          <Video className='h-10 w-10 text-primary mx-auto' />
          <h2 className='mt-2'>You don't have any Interview created!</h2>
          <Button className='mt-3'>+ Create New Interview</Button>
        </div>
      )}
      
    </div>

  )
}

export default LatestInterviewsList
