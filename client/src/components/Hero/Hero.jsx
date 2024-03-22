import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div class="content">
      <div class="container">
        <div class="info">
          <h1>Looking For Inspiration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
          <button>Button name</button>
        </div>
        <div class="image">
          <img src="images/hero-img.png"/>
        </div>
      </div>
    </div>
  )
}

export default Hero