import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-section">
          {/* Background Video */}
          <video className="hero-video" autoPlay loop muted>
            <source src="ratan_tata_spinner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          {/* Overlay content */}
          <div className="overlay-content">
            <h1>See the <span className="highlight">Impact</span> in action</h1>
    
            {/* Image with spotlight and bronze effect */}
            <div className="image-container">
              <img src="./Hero.png" alt="Ratan Tata" className="image" />
            </div>
    
            <h2>Ratan Tata</h2>
            <p className="subheading">Chairperson Tata Group</p>
            <blockquote>
              "BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options."
            </blockquote>
          </div>
        </div>
      );
}

export default Hero;
