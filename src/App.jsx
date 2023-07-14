import { useState } from 'react'



function App() {
  
  return (<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
  <h1 className='text-slate-200 text-6xl text-bold p-4 w-full flex justify-center'>Todo List</h1>
  <div className='flex justify-around flex-wrap'>
    <div className='w-full m-2 flex flex-wrap sm: flex-nowrap'>
    <div className='border-2 border-blue-600 bg-white w-full m-2'>
    <label className='py-full flex flex-wrap text-xs' htmlFor="tarea">Tarea</label>
   <input className='w-full' type="text" name="tarea" id="" placeholder='Ingrese su tarea' aria-label='Tarea'/> 
   </div>
   <div className='border-2 border-blue-600 bg-white w-full m-2'>
    <label className='py-full flex flex-wrap text-xs' htmlFor="seleccionar">Seleccionar</label>
    <select className='w-full' name="" id="">
    <option value="todas">Todas</option>
    <option name="completas" id="">Completas</option>
    <option name="incompletas" id="">Incompletas</option>
    </select>
      </div>
    </div>
   
  <button className='bg-blue-700 text-white rounded-lg w-full m-2 p-2'>Send</button>   
  <div className='w-full h-12 border border-violet-700 m-2 flex flex-nowrap'>
   <div className='bg-white w-full'></div> 
   <div className='bg-green-200 w-20 text-center'>Check</div>
      <div className='bg-red-300 w-20 text-center'>Delete</div>
  </div>
  </div> 
  </div>
    
  )
}

export default App
