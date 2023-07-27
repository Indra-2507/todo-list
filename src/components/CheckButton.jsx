import { useState } from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'



export default function CheckButton ({clickButton, value, id}){
  const [checkStyle, setCheckStyle] =useState('bg-green-300 w-20')
    const [check, setCheck]= useState(
      value === "done",

     )
   
    const handleButtonCheck = () => {
        setCheck(!check)
        clickButton(id)
      }

    //   let divClasses = 'bg-green-300 w-20';
    //   if (check) {
    //   divClasses = 'bg-gray-400 w-20' ;
    // }

    return(
        <button  
        
        className={check ? 'bg-green-300 w-20' : 'bg-gray-400 w-20' }
        onClick={handleButtonCheck} 
        >
       <AiOutlineCheckCircle className='m-auto text-2xl'/>    
        </button>
    )
}