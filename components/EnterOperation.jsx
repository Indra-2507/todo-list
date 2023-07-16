import { useState } from "react"

export default function EnterOperation(){
  const [operation, setOperation]= useState("")
  const enterOperation = (e)=>{
   setOperation(e.target.value)
  }
  //localStorage.setItem("operation", JSON.stringify(enterOperation))
  return(
      <>
      <div className='border-2 border-blue-600 bg-white w-full m-2'>
      <label className='py-full flex flex-wrap text-xs' htmlFor="tarea">Tarea</label>
      <input onChange={enterOperation} className='w-full' type="text" name="tarea" id="" placeholder='Ingrese su tarea' aria-label='Tarea'/> 
      </div>
      <button className='bg-blue-700 text-white rounded-lg w-full m-2 p-2' onClick={EnterOperation}>Send</button>
       </>
    )   
}