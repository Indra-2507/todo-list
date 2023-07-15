import { useState } from 'react'
import Nav from '../components/Nav'
import Inputs from '../components/Inputs'
import Button from '../components/Button'
import NewOperation from '../components/NewOperation'

function App() {
  
  return (
  <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
  <Nav />
  <div className='flex justify-around flex-wrap'>
    <Inputs />
    <Button />
    <NewOperation />
  </div> 
  </div>
    
  )
}

export default App
