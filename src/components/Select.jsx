export default function Select (){
    return (
        <div className='border-2 border-blue-600 bg-white w-full m-2'>
        <label className='py-full flex flex-wrap text-xs' htmlFor="seleccionar">Seleccionar</label>
        <select className='w-full' name="" id="">
        <option value="todas">Todas</option>
        <option name="completas" value="completas">Completas</option>
        <option name="incompletas" value="incompletas">Incompletas</option>
        </select>
          </div>
    )
}