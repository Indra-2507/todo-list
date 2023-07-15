export default function Inputs(){
    return(
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
    )
   
}