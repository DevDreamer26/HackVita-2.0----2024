import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home />  
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
