import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { toast } from 'react-hot-toast';

function QuestionList({formData }) {
  const [loading,setLoading]=useState(true);
  const [questionList,setQuestionList]=useState([]);
    useEffect(()=>{
       if(formData){
        GenerateQuetionList();
       }
    },[formData]);
    const GenerateQuetionList=async()=>{
      setLoading(true);
      try{
      const result =await axios.post('/api/ai-model',{
        ...formData

      })

      const content=result.data.content;
      const FINAL_CONTENT=content.replace('"```json','').replace('```','');
      setQuestionList(JSON.parse(FINAL_CONTENT));
      console.log("AI raw content:", result.data.content);
      setLoading(false);  
    }catch(e){
      toast.error("Server Error. Please try again later.");
setLoading(false);
    }
  }
  return (
    <div>
      {loading&&<div className='p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center'>
        <Loader2Icon className='animate-spin' />
        <div>
          <h2 className='font-medium'>Generating Interview Questions..!</h2>
          <p className='text-primary'>Our AI is crafting personalized qustions based on your job possition</p>
        </div></div>}
    </div>
  )
}

export default QuestionList
