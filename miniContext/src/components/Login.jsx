import {useContext,useState} from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext';
function login() {
    const [username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,Password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" 
        value = {username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='User Name' />
        <input type="text" 
        value = {Password} onChange={(e)=>{setPassword(e.target.value)}}placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login