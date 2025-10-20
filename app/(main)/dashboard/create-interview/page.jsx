
"use client"
import { Progress } from '@/components/ui/progress'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'   
import { useState } from 'react'  
import React from 'react'

const CreateInterview = () => {
  const router = useRouter();
  const [step, setstep] = useState(1);
  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
     <div className='flex gap-5 items-center' >
      <ArrowLeft 
      onClick={()=>router.back()} 
      className='cursor-pointer'/>
      <h2 className='font-bold text-2xl'>Create New Interview</h2>
     </div>
     <Progress value={step * 33.33} className='my-5'/>
    </div>
  )
}

export default CreateInterview
