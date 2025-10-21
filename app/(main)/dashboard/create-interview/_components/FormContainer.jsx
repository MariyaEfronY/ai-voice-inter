import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Interviewtype } from '@/services/Constants';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from 'react'

const FormContainer = () => {
  return (
    <div className='p-5 bg-white'>
      <div>
        <h2 className='text-5m'>Job Position</h2>
        <Input placeholder="e.g. Fullstack Developer " className='mt-2' />
      </div>
      <div className='mt-5'>
        <h2 className='text-5m'>Job Description</h2>
        <Textarea placeholder="Enter details job description " 
        className='h-[200px] mt-2' />
      </div>
      <div className='mt-5'>
        <h2 className='text-5m'>Interview Duration</h2>
        <Select>
  <SelectTrigger className="w-full mt-2">
    <SelectValue placeholder="Select Duration" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5 Min">5 Min</SelectItem>
    <SelectItem value="15 Min">15 Min</SelectItem>
    <SelectItem value="30 Min">30 Min</SelectItem>
    <SelectItem value="45 Min">45 Min</SelectItem>
    <SelectItem value="60 Min">60 Min</SelectItem>
  </SelectContent>
</Select>
      </div>
      <div className='mt-5'>
        <h2 className='text-5m'>Interview Type</h2>
      <div className='flex gap-3 flex-wrap mt-2'>
        {Interviewtype.map((type, index) => (
  <div key={index} className="flex gap-2 border-gray-900 p-1 px-2 bg-blue-50 rounded-2xl">
    <type.icon className="h-6 w-6" />
    <span>{type.title}</span>
  </div>
))}
      </div>
       
      </div>
    </div>
  )
}

export default FormContainer
