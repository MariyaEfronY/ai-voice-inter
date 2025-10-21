import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const FormContainer = () => {
  return (
    <div className='p-5 bg-white'>
      <div>
        <h2 className='text-sm'>Job Position</h2>
        <Input placeholder="e.g. Fullstack Developer " className='mt-2' />
      </div>
      <div className='mt-5'>
        <h2 className='text-sm'>Job Description</h2>
        <Textarea placeholder="Enter details job description " 
        className='h-[200px] mt-2' />
      </div>
    </div>
  )
}

export default FormContainer
