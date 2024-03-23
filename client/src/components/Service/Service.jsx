import React from 'react'
import { Link } from 'react-router-dom'; 

import './Service.scss'

function Service() {
  return (
    <div>
         <div className="section-3"> 
        <h1>Services</h1>
        <div className="services">  
          <div className="services-left"> 
            <img src="images/PNG-Tracker.png" alt="" />
          </div>     
          <div className="services-right">
            <h2>Track Your Expenses</h2> 
            <p>"Track Expense" is like a digital notebook where you can write down and organize all the money you spend,
              helping you understand where your money goes and plan your finances better.
            </p>
            <Link to="/login">
          <button>Track Expense</button>
        </Link>
          </div>             
        </div>        
        </div>
      
    </div>
  )
}

export default Service
