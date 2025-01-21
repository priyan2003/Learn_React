import { useState } from 'react'
import './App.css'


function App() {
  let [counter,setCounter] = useState(0);
  let addValue = () =>{
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }
  let removeValue = ()=>{
    if(counter>0) setCounter(counter-1);
  }
  return (
    <>
      <h1>Kya haal hai</h1>
      <h2>Counter is {counter}</h2>
      <button
      onClick = {addValue}>Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}>Decrease Value {counter}</button>
      <p>Hence, Counter is {counter}</p>
    </>
  )
}

export default App
