import { ArrowLeft } from 'lucide-react'
import React from 'react'

const CreateInterview = () => {
  return (
    <div className='p-10'>
     <div className='flex gap-5 items-center' >
      <ArrowLeft/>
      <h2 className='font-bold text-2xl'>Create New Interview</h2>
     </div>
    </div>
  )
}

export default CreateInterview
