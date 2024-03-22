import { useState } from 'react'
import Home from './components/Home/Home'
import './App.css'
import Module from './components/Module/Module'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />  
    <Module/>
    </>
  )
}

export default App
