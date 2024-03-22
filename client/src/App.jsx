import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import About from "./components/About/About"
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import ChatWindow from './components/ChatWindow'
import Module from './components/Module/Module'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ChatWindow/> */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<ChatWindow />} />
            <Route path="/module" element={<Module />} />
            <Route path="/services" element={<Module />} />
          </Routes>
          
          <Footer />
       
      </BrowserRouter>
    </>
  )
}

export default App
