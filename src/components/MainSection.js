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
          style={{
            color: "#e4c2a2",
            background:
              "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
            border: "2.16px solid transparent", // Set border to transparent for gradient
            borderImage:
              "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1, // Ensure the gradient is used for the border

            "&:hover": {
              backgroundColor: "#505050",
            },
          }}
        >
          Find A Credit Card
        </Button>
      </div>

      {/* Credit Card Image */}
      <div className="card-item">
        <img src="/Card.png" alt="Credit Card" className="floating-card" />
      </div>
    </div>
  );
};

export default MainSection;
