import { useState} from 'react'
import {AiOutlineCheckCircle, AiOutlineDelete} from 'react-icons/ai'

export default function NewTask({task}){   
    //const [allNotes, setAllNotes] = useState([])
 
    return(
        <div className=' h-12 border border-violet-700 m-4 flex flex-nowrap'>
        <div className='bg-white w-full'>{task}</div> 
        <button className='bg-green-300 w-20 '>
            <AiOutlineCheckCircle className='m-auto text-2xl'/>
        </button>
        <button className='bg-red-300 w-20 '
        >
            <AiOutlineDelete className='m-auto text-2xl'/>
        </button>
       </div>
    )
}