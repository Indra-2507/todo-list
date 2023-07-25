import { useState } from "react"
import NewTask from "./NewTask"

export default function Select (){
    

    const [selectValue, setSelectValue]= useState("")
   
    const handleSelectFilter=(e)=>{
        console.log(e.target.value)
        setSelectValue(e.target.value)

    }
    
    return (
        <>
        <div className='border-2 border-blue-600 bg-white w-full m-2'>
        <label className='py-full flex flex-wrap text-xs' htmlFor="seleccionar">Seleccionar</label>
        <select 
        onChange={handleSelectFilter}
        value={selectValue}
        className='w-full' name="" id="">
        <option value="all">Todas</option>
        <option name="completes" value="completas">Completas</option>
        <option name="incompletes" value="incompletas">Incompletas</option>
        </select>
          </div>
    </>
    
    )
}