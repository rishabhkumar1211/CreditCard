import React from "react";
import { Button } from "@mui/material";
import "../styles/CardComparisonUI.css"; // Import the CSS file

// Import the video and images directly
import backgroundVideo from "../assets/videos/golden_podium.mp4";
import podiumImage from "../assets/images/mainArch.png";
import cardImage1 from "../assets/images/cc1.png";
import mainCardImage from "../assets/images/cc3.png";
import cardImage2 from "../assets/images/cc2.png";

const CardComparisonUI = () => {
  return (
    <div className="container">
      {/* Background video */}
      <video className="comparisionbackground-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Ellipse Overlays */}
      <div className="ellipse-top" />
      <div className="ellipse-bottom" />

      {/* Title */}
      <h1 className="title">Compare Cards</h1>

      {/* Podium and Cards */}
      <img className="podium-image" src={podiumImage} alt="Podium" />
      <div className="card-showcase">
        <img className="card-image" src={cardImage1} alt="HSBC Card" />
        <img className="main-card-image" src={mainCardImage} alt="AMEX Card" />
        <img className="card-image" src={cardImage2} alt="SBI Card" />
      </div>

      {/* Info text */}
      <div className="info-text">
        Uncover hidden benefits and find the perfect card for your financial
        goals.
      </div>

      {/* Compare Cards Button */}
      <Button variant="contained" className="compare-button">
        Compare Cards
      </Button>
    </div>
  );
};

export default CardComparisonUI;
