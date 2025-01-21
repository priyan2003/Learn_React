import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("blue");
  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color, height: "100vh", width: "100%" }}
    >
      <div className=" flex flex wrap justify-center bottom 12 insert-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center
            gap-3 shadow-lg
            bg-white px-3 py-2 my-9
            rounded-3xl"
        >
          <button
          onClick={()=>setColor("red")}
          className="out line-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button> 
          <button
          onClick={()=>setColor("green")}
          className="out line-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button> 
          <button
          onClick={()=>setColor("black")}
          className="out line-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button> 
          <button
          onClick={()=>setColor("gray")}
          className="out line-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          >Gray</button> 
          <button
          onClick={()=>setColor("yellow")}
          className="out line-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button> 
        </div>
      </div>
    </div>
  )
}

export default App
