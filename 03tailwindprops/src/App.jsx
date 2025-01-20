import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  

  return (
    <>
      <h1 className='bg-green-400 mb-5'>Tailwind Test</h1>
      <Cards name = "Paras Rajain" role = "Software Developer Engineer"/>
      <Cards name = "Karan Mittal" role = "Software Developer Engineer(II)"/>
    </>
  )
}

export default App
