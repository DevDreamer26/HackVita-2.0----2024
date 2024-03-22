import React from "react";
import { Link } from "react-router-dom"; // Uncomment this line

import "./Hero.scss";
import Module from "../Module/Module";
import Contact from "../Contact/Contact";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="info">
          <h1>Let's Talk Money !!</h1>
          <p>
          Financial freedom is achieved through disciplined saving and smart investing.
          </p>
          <div className="hero-btn">
            <Link to="/chatbot">
              <button>Chat with Us</button>
            </Link>
            <a href="https://expn-tracker.netlify.app">
              <button>Track Expense</button>
            </a>
            <Link to="/module">
              <button>Learn</button>
            </Link>
            <Link to="/chatbot">
              <button>Planner</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="images/malia" alt="Hero Image" />
        </div>
      </div>
      <div className="modules">
        <h2>Modules</h2>
        <p>
          Explore all the open-access modules that cover the entire spectrum of
          financial literacy and capital markets; everything from savings and
          taxation to option strategies and technical analysis.
        </p>
        <Link to="/module">
          <button>Learn More</button>
        </Link>
      </div>
      <Module/>
      <Contact/>
    </>
  );
};

export default Hero;
