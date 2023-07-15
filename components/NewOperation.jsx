export default function NewOperation(){
    return(
        <div className='w-full h-12 border border-violet-700 m-2 flex flex-nowrap'>
        <div className='bg-white w-full'></div> 
        <div className='bg-green-200 w-20 text-center'>Check</div>
        <div className='bg-red-300 w-20 text-center'>Delete</div>
       </div>
    )
}