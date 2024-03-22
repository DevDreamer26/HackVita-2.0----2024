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

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content-wrapper">
          <div className="sticky-button">
            <Link to="/chatbot"><button>Chat with Us</button></Link>
          </div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<ChatWindow />} />
          </Routes>
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
