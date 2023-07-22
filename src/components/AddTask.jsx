import { useState } from "react"
import { useEffect } from "react";
import NewTask from "./NewTask"
import {AiOutlineSend} from 'react-icons/ai'
import Select from "./Select";


export default function AddTask(){

const [task, setTask]= useState("")

const [allNotes, setAllNotes] = useState(()=>{
  const tasksLocal=window.localStorage.getItem("task")
  return tasksLocal ? JSON.parse(tasksLocal) : []
}
)
window.localStorage.setItem("task", JSON.stringify(allNotes)) 


const handleChange = (e)=>{
   setTask(e.target.value)
   
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    setAllNotes([...allNotes, task]) 
 
  }
  // {window.localStorage.setItem("task", JSON.stringify(allNotes)) }
 //lo guarda en el local pero no se mantiene
 
  return(
      <>
      <form
      onSubmit={handleSubmit}
      
      >
      <div className='flex justify-around '>
      <div className='border-2 border-blue-600 bg-white w-full m-2'>
      <label className='py-full flex flex-wrap text-xs' htmlFor="tarea">Tarea</label>
      <input 
      onChange={handleChange} 
      className='w-full' 
      type="text" 
      name="tarea" 
      value= {task}
      placeholder='Ingrese su tarea' aria-label='Tarea'/> 
      </div>
      <Select />
      </div>
      <div className="flex justify-center">
      <button 
        type="submit"
        className='bg-blue-700 text-white rounded-lg w-1/5 m-4 p-2 flex justify-center items-center gap-2'>
          Send 
          <AiOutlineSend />
          </button>
      </div>
      </form>  
    
      {allNotes.map((task, index)=>{
        return (    
        <NewTask 
        key={index} 
        task={task}
        
        />)
        
      } )
      }
     
  </> 
  )
}
