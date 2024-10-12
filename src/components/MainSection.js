import React from "react";
import { Button, Typography } from "@mui/material";
// Adjust this based on the location of your CSS
import "../styles/MainSection.css";

// Import video and image directly from src/assets
import backgroundVideo from "../assets/videos/abstract-video.mp4";
import cardImage from "../assets/images/card.png";

const MainSection = () => {
  return (
    <div className="main-section">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        {/* Use imported video */}
        <source src={backgroundVideo} type="video/mp4" />
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
          sx={{
            position: "relative",
            mt: 4,
            py: 2,
            px: 4,
            fontWeight: "bold",
            color: "#e4c2a2",
            background:
              "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
            borderRadius: "10px",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              padding: "2.16px",
              boxSizing: "border-box",
              background:
                "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              pointerEvents: "none",
            },

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
        {/* Use imported image */}
        <img src={cardImage} alt="Credit Card" className="floating-card" />
      </div>
    </div>
  );
};

export default MainSection;
