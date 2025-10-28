"use client"

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Interviewtype } from '@/services/Constants';
import { Button } from '@/components/ui/button' 

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from 'lucide-react';

function FormContainer({onHandleInputChange}) {
  const [interviewType, setInterviewType] = useState([]);
  useEffect(()=>{
    if(interviewType){
      onHandleInputChange('type',interviewType);
    }

  },[interviewType])
  return (
    <div className='p-5 bg-white rounded-2xl'>
      <div>
        <h2 className='text-sm font-medium'>Job Position</h2>
        <Input placeholder="e.g. Fullstack Developer " className='mt-2' 
        onChange={(event)=>onHandleInputChange('jobPosition',event.target.value)} />
      </div>
      <div className='mt-5'>
        <h2 className='text-sm font-medium'>Job Description</h2>
        <Textarea placeholder="Enter details job description " 
        className='h-[200px] mt-2'
        onChange={(event)=>onHandleInputChange('jobPosition',event.target.value)} />
      </div>
      <div className='mt-5'>
        <h2 className='text-sm font-medium'>Interview Duration</h2>
        <Select onValueChange={(value)=>onHandleInputChange('Duration',value)}>
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
        <h2 className='text-sm font-medium'>Interview Type</h2>
      <div className='flex gap-3 flex-wrap mt-2'>
        {Interviewtype.map((type, index) => (
  <div key={index} className={`flex gap-2 items-center 
  hover:bg-secondary cursor-pointer border-gray-900 p-1 px-2 bg-blue-50 rounded-2xl ${interviewType.includes(type.title)&&'bg-blue-100 text-primary'} `} 
  onClick={()=>setInterviewtype(prev=>[...prev.type.title])}>
    <type.icon className="h-4 w-4" />
    <span>{type.title}</span>
  </div>
))}
      </div>
       
      </div>
      <div className='mt-7 flex justify-end'>
      <Button > Generate Qustion <ArrowRight /></Button>
      </div>

    </div>
  )
}

export default FormContainer
