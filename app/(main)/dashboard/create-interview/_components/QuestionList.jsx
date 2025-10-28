import React, { useEffect } from 'react'

function QuestionList({formData }) {
    useEffect(()=>{
       if(formData){
        GenerateQuetionList();
       }
    },[formData]);
    const GenerateQuetionList=()=>{

    }
  return (
    <div>
      Questions List
    </div>
  )
}

export default QuestionList
