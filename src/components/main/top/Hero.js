import React from 'react';
import Line from '../../../img/hero-line.png';
const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Where <span class="blue">Your</span> Journey
        <span class="blue"> Begins</span>
      </h1>
      <div class="hero-line">
        <img src={Line} />
      </div>
      <p>
        Discover your next great adventure.
        <br />
        <span class="blue">Become an explorer to get started!</span>
      </p>
      <button class="btnContact">Contact Us</button>
    </div>
  );
};
export default Hero;
