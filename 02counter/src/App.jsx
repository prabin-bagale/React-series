import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setcounter]= useState(10)
const addvalue = () =>{
setcounter(counter + 1)
if(counter === 20){
  alert("cannot add more")
}
}
const removevalue = () =>{
  setcounter(counter - 1)
}
  return (
    <>
      
      <h1> Coding started</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>ADD{counter}</button>
      <br />
      <button onClick={removevalue}>Delete{counter}</button>
      <p>{counter}</p>
      
    </>
  )
}

export default App
