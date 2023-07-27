import { useState } from "react"
import ModalWindows from "./ModalWindows"

export default function Select ({setFilter, onChange}){

    return (
        <>
        <div className='border-2 border-blue-600 bg-white w-full m-2'>
        <label className='py-full flex flex-wrap text-xs' htmlFor="seleccionar">Seleccionar</label>
        <select 
        
        className='w-full'>
        onChange={setFilter}
        <option 
        value="all">
            Todas</option>
        <option 
        name="done" 
        value="done">
            Completas</option>
        <option 
        name="toDo" 
        value="toDo">
            Incompletas</option>
        </select>
          </div>
          <ModalWindows />
    </>    
    )
}