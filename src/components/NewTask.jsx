import CheckButton from './CheckButton'
import DeleteButton from './DeleteButton'
import { useState } from 'react';

export default function NewTask({task, id, setAllNotes}){   

//   const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [check, setCheck]= useState(false)
  const [addTaskStyle, setAddTaskStyle] = useState('bg-white w-full text-xl p-2');

  const handleButtonClick = () => {
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
        <div className={divClasses}
        style={{ backgroundColor: addTaskStyle }}
        >{task}</div> 
        <CheckButton 
        clickButton={handleButtonClick}/>
        <DeleteButton 
        id={id} 
        setAllNotes={setAllNotes} 
        />       
       </div>
    )
}