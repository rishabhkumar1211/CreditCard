import React from "react";
import "../styles/Hero.css";

// Import the video and image directly
import heroVideo from "../assets/videos/ratan_tata_spinner.mp4";
import heroImage from "../assets/images/Hero.png";

function Hero() {
  return (
    <div className="hero-section">
      <div className="rectangle"></div>

      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="overlay-content">
        <h3>WHAT THEY SAY ABOUT BANKKARO</h3>
        <h1>
          See the <span className="highlight">Impact</span> in action
        </h1>

        {/* Image with spotlight effect */}
        <div className="image-container">
          <img src={heroImage} alt="Ratan Tata" className="image" />
          <div className="v-mega-spotlight"></div>{" "}
          <div className="v-spotlight"></div>{" "}
          {/* "V"-shaped spotlight effect */}
        </div>

        <div className="hero-details">
          {/* Left Side: Profile */}
          <div className="hero_profile">
            <h2>Ratan Tata</h2>
            <p className="subheading">Chairperson Tata Group</p>
          </div>

          {/* Right Side: Quote */}
          <div className="hero_quote">
            <blockquote>
              "BankKaro helped me find the perfect credit card that matches my
              spending on groceries and travel. Highly recommend it for
              personalized credit card options."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
