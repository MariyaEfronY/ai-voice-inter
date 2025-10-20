import { ArrowLeft } from 'lucide-react'
import React from 'react'

const CreateInterview = () => {
  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
     <div className='flex gap-5 items-center' >
      <ArrowLeft/>
      <h2 className='font-bold text-2xl'>Create New Interview</h2>
     </div>
    </div>
  )
}

export default CreateInterview
