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
          <h1>Let's Talk Money !</h1>
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
          <img src="images/finance.jpg" alt="Hero Image" />
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
        </div>v
      
      
      {/* <Module/> */}
      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title">What is Finance Forge ?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
              Finance Forge is a comprehensive online platform dedicated to providing financial education, resources, and expert advice to individuals and businesses seeking to improve their financial well-being.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">Who can benefit from Finance Forge?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
              Finance Forge is designed to benefit anyone interested in enhancing their financial literacy and achieving their financial goals. Whether you're a beginner looking to learn the basics of personal finance or a seasoned investor seeking advanced strategies, Finance Forge has something for everyone.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false">
              <span className="accordion-title">What types of resources are available on Finance Forge?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
              Finance Forge offers a wide range of resources, including educational articles, guides, tutorials, tools, calculators, and expert insights. Topics covered include budgeting, saving, investing, retirement planning, debt management, and more.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-4" aria-expanded="false">
              <span className="accordion-title">How frequently is the content on Finance Forge updated ?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
              We strive to keep our content updated regularly to reflect the latest trends, news, and insights in the world of finance. New articles, guides, and tools are added frequently to ensure our users have access to the most relevant and up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default Hero;
