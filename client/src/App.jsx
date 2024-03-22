import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from "./components/About/About"
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    <Home />  
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
