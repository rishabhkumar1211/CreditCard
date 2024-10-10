import React from "react";
import { Button, Typography } from "@mui/material";
import "./MainSection.css"; // Custom CSS


const MainSection = () => {
  return (
    <div className="main-section">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/abstract-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="content-container">
        <Typography variant="h2" className="main-heading">
          We find the Best <br /> Credit Cards for You
        </Typography>
        <Button
          variant="contained"
          className="main-button"
          style={{ backgroundColor: "#333", color: "#fff" }}
        >
          Find A Credit Card
        </Button>
      </div>

      {/* Credit Card Image */}
      <div className="card-item">
        <img
          src="/Card.png"
          alt="Credit Card"
          className="floating-card"
        />
      </div>
    </div>
  );
};

export default MainSection;
