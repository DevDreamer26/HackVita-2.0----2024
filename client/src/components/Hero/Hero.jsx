import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'; 

import "./Hero.scss";
import Module from "../Module/Module";
import Contact from "../Contact/Contact";
import './Hero.scss';

const Hero = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.accordion button');

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }

      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    return () => {
      items.forEach(item => item.removeEventListener('click', toggleAccordion));
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="info">
          <h1>Explore the financial literacy</h1>
          <p>Financial freedom is achieved through disciplined saving and smart investing.</p>
          <div className="hero-btn">
            <Link to="/chatbot">
              <button>Chat with Us</button>
            </Link>

            <Link to="/services">
              <button>Services</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="images/hero-img.png" alt="Hero Image" />
        </div>
      </div>

      {/* Modules */}
      <div className="modules">
        <h2>Modules</h2>
        <p>
          Explore all the open-access modules that cover the entire spectrum of financial literacy and capital markets;
          everything from savings and taxation to option strategies and technical analysis.
        </p>
        <div className="modules-card">
          <div className="card-container">
            <div className="card">
              <img src="images/F1.jpg" alt="" />
              <h2>Basics of personal finance</h2>
              <p>Understanding the basics of personal finance lays the foundation for ...</p>
            </div>
            <div className="card">
              <img src="images/F2.jpg" alt="" />
              <h2>Tax Strategies</h2>
              <p>Exploring effective tax strategies is crucial for optimizing financial ....</p>
            </div>
            <div className="card">
              <img src="images/F3.jpg" alt="" />
              <h2>Small Businesses</h2>
              <p>Small businesses are the backbone of our economy, representing innovation, ....</p>
            </div>
          </div>
          <Link to="/module">
            <button>Learn More</button>
          </Link>
        </div>
      </div>

      {/* services */}
      <div className="section-3"> 
        <h1>Services</h1>
        <div className="services">
         
            <img src="images/PNG-Tracker.png" alt="" />
            <h2>Track Your Expenses</h2>
            <p>
              "Track Expense" is like a digital notebook where you can write down and organize all the money you spend,
              helping you understand where your money goes and plan your finances better.
            </p>
        
        </div>
        <a href="https://expn-tracker.netlify.app">
          <button>Track Expense</button>
        </a>
        </div>
      
      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title">Why is the moon sometimes out during the day?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">Why is the sky blue?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false">
              <span className="accordion-title">Will we ever discover aliens?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-4" aria-expanded="false">
              <span className="accordion-title">How much does the Earth weigh?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Module/>
      <Contact/>
    </>
  );
};

export default Hero;
