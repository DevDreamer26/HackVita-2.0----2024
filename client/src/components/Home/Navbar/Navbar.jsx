import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#services">Services</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>     
    </div>
  )
}

export default Navbar
