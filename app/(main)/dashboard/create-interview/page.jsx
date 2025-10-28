
"use client"
import { Progress } from '@/components/ui/progress'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'   
import { useState } from 'react'  
import FormContainer from './_components/FormContainer.jsx'


import React from 'react'
import { validateHeaderName } from 'http'
import QuestionList from './_components/QuestionList.jsx'
import { toast } from 'react-hot-toast'

const CreateInterview = () => {
  const router = useRouter();
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value)=>{
setFormData((prev) => ({
  ...prev,
  [field]: value
}));

    console.log("formData",formData); 

  }

  const onGoToNext=()=>{  
    if(!formData?.jobPosition||!formData?.jobDescription||!formData?.Duration||!formData?.type  )
    {
      toast("Please Enter all Details..!");
      return ;
    }
    setstep(step+1);
  }


  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
     <div className='flex gap-5 items-center' >
      <ArrowLeft 
      onClick={()=>router.back()} 
      className='cursor-pointer'/>
      <h2 className='font-bold text-2xl'>Create New Interview</h2>
     </div>
     <Progress value={step * 33.33} className='my-5'/>
     {step==1?<FormContainer onHandleInputChange={onHandleInputChange} 
     GoToNext={()=> onGoToNext()} />
     :step==2?<QuestionList formData={formData}/>:null}
    </div>
  )
}

export default CreateInterview
