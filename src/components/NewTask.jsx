import CheckButton from './CheckButton'
import DeleteButton from './DeleteButton'
import { useState } from 'react';

export default function NewTask({task, id, setAllNotes,value,  onCheckButtonClick }){   

  const [check, setCheck]= useState(value === "done")

  const handleButtonClick = () => {
    onCheckButtonClick(id)
    setCheck(!check)
  }

  let divClasses = 'bg-white w-full text-xl p-2';
    if (check) {
    divClasses = 'bg-gray-300 w-full text-xl p-2 line-through';
  }
  
    return(
        <div
        key={id}
         className=' h-12 border border-violet-700 m-4 flex flex-nowrap'>
        <div 
        className={divClasses}
        >{task}</div> 
        <CheckButton 
        clickButton={handleButtonClick} 
        id={id} 
        setAllNotes={setAllNotes} 
        task={task}
        />
        <DeleteButton 
        task={task}
        id={id} 
        setAllNotes={setAllNotes} 
        />       
       </div>
    )
}