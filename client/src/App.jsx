import { useState } from 'react'
import Home from './components/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />  
    </>
  )
}

export default App
