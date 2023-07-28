import {AiOutlineCheckCircle} from 'react-icons/ai'
export default function Alert({task}){
    return(
        <div id="succesfull-alert" className="flex justify-center items-center bg-green-100 border border-green-400 text-green-700 p-4 rounded w-full h-16" role="alert"> <strong className="font-bold"> 
        <AiOutlineCheckCircle  />
        </strong>
        <span className="block sm:inline mx-2"> Eliminaste la tarea : {task} </span>
      </div>
    )
}