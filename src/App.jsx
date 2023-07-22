import { useState } from 'react'
import Nav from './components/Nav'
import AddTask from './components/AddTask'


function App() {
  const [task, setTask]= useState("");

  
  return (
  <>
  <Nav />  
  <AddTask />
  </>   
  )
}

export default App
