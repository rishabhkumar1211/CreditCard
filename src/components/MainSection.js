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
          sx={{
            position: "relative", // Required for the pseudo-element
            mt: 4,
            py: 2,
            px: 4,
            fontWeight: "bold",
            color: "#e4c2a2",
            background:
              "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
            borderRadius: "10px", // Border radius for the button

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px", // Matching border radius
              padding: "2.16px", // Matches the border thickness
              boxSizing: "border-box",
              background:
                "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Ensures the gradient respects the border
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              pointerEvents: "none", // Prevents interaction with the pseudo-element
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
        <img src="/Card.png" alt="Credit Card" className="floating-card" />
      </div>
    </div>
  );
};

export default MainSection;
