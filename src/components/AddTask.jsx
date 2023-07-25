import { useState } from "react"
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
const handleChange = (e)=>{
   setTask(e.target.value)  
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
      if (task.trim() !== "") {
        const newTask = {
          id: Date.now(), 
          text: task.trim(),
          // checked: check ? check : "",
        };

        setAllNotes((prevNotes) => [...prevNotes, newTask]);
        setTask(""); 
      }
    };
  
    window.localStorage.setItem("task", JSON.stringify(allNotes)) 
  
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

      {allNotes.map((note)=>{
        return (    
        <NewTask 
        key={note.id} 
        task={note.text}
        id={note.id}
        // checked={note.checked}
        setAllNotes={setAllNotes}
        />
        )  
      })
      }
  </> 
  )
}
