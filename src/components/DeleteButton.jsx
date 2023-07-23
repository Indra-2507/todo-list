import { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import NewTask from './NewTask'

export default function DeleteButton (){
   const [task, setTask] = useState([])
 
    const handleButtonDelete = (id) =>{
        const bringTask= JSON.parse(window.localStorage.getItem("task"))
        console.log(bringTask)
       const filterTask= bringTask.filter(task => task.id !== id)
        setTask(filterTask)
    }
  
    return(
        <button className='bg-red-300 w-20'
        onClick={()=>handleButtonDelete(task.id)}>
        <AiOutlineDelete className='m-auto text-2xl'/>
        </button>
    )

}