import './App.css'
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos'

function App() {

  return (
    <>
      <h1 className='text-lg'>Lets learn Redux-toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
