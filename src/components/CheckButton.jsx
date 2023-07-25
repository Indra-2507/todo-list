import { useState } from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function CheckButton ({clickButton}){
    const [check, setCheck]= useState(false)
   
    const handleButtonCheck=(e)=>{
        setCheck(!check)
    if(check){
    e.target.removeAttribute('data-id')
    }else{
        e.target.setAttribute('data-id', 'checked')
    }
    clickButton()
    }
    // const [isChecked, setIsChecked] = useState(false);

    // const handleButtonClick = () => {
    //   // Actualizar el estado y el localStorage cuando hagas clic en el botón
    //   const updatedValue = !isChecked;
    //   setIsChecked(updatedValue);
    //   localStorage.setItem('isChecked', JSON.stringify(updatedValue));
    // };
    return(
        <button  
        className={check ? 'bg-gray-400 w-20' :'bg-green-300 w-20'}
        value={check}
        onClick={handleButtonCheck} 
        >
       <AiOutlineCheckCircle className='m-auto text-2xl'/>    
        </button>
    )
}