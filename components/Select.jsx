export default function Select (){
    return (
        <div className='border-2 border-blue-600 bg-white w-full m-2'>
        <label className='py-full flex flex-wrap text-xs' htmlFor="seleccionar">Seleccionar</label>
        <select className='w-full' name="" id="">
        <option value="todas">Todas</option>
        <option name="completas" id="">Completas</option>
        <option name="incompletas" id="">Incompletas</option>
        </select>
          </div>
    )
}