import { useState} from 'react'
import CheckButton from './CheckButton'
import DeleteButton from './DeleteButton'

export default function NewTask({task}){   
    

    return(
        <div className=' h-12 border border-violet-700 m-4 flex flex-nowrap'>
        <div className='bg-white w-full text-xl p-2'
        // className ={check ? 'bg-white w-full text-xl p-2' : ''}
        >{task}</div> 
        <CheckButton />
        <DeleteButton />
        
       </div>
    )
}