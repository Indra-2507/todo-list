import { useState } from 'react'
import Nav from '../components/Nav'
import EnterOperation from '../components/EnterOperation'
import Select from '../components/select'
import NewOperation from '../components/NewOperation'

function App() {
  
  return (
  <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
  <Nav />
  <div className='flex justify-around flex-wrap'>
  <form className='w-full m-2 flex flex-wrap sm: flex-nowrap'>
    <EnterOperation />
    <Select />
  </form>
    <NewOperation />
  </div> 
  </div>
    
  )
}

export default App
