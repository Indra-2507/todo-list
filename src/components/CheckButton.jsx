import { useState } from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import NewTask from './NewTask'

export default function CheckButton (){
    const [check, setCheck]= useState(false)
   
    const handleButtonCheck=(e)=>{
        setCheck(!check)
    if(check){
    e.target.removeAttribute('data-id')
    }else{
        e.target.setAttribute('data-id', 'checked')
    }}
   
    return(
        <button  
        className={check ? 'bg-gray-400 w-20' :'bg-green-300 w-20'}
        value={check}
        onClick={handleButtonCheck} 
        >
       <AiOutlineCheckCircle className='m-auto text-2xl'/>    
        </button>
    )
}