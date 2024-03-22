import React from "react";
import { Link } from "react-router-dom"; // Uncomment this line

import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="info">
          <h1>Explore the financial literacy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
          </p>
          <div className="hero-btn">
            <button>Services</button>
            <button>Chat with us</button>
            <button>Modules</button>
          </div>
        </div>
        <div className="image">
          <img src="images/hero-img.png" alt="Hero Image" />
        </div>
      </div>
      <div className="modules">
        <h2>Modules</h2>
        <p>
          Explore all the open-access modules that cover the entire
          spectrum of financial literacy and capital markets; everything from
          savings and taxation to option strategies and technical analysis.
        </p>
        <Link to="/module"> {/* Replace the button with Link */}
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
