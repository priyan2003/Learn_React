import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import MyApp from './myApp'

createRoot(document.getElementById('root')).render(
    MyApp()
)