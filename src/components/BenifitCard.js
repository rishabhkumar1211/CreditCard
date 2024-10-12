import React from "react";
import { Card, CardMedia, Grid } from "@mui/material";
// Import styles from the correct path
import "../styles/Benifit.css";

// Import images directly
import cardKundali from "../assets/images/cardKundali.png";
import beatCard from "../assets/images/beatCard.png";
import compareCard from "../assets/images/comparecard.png";
import loungeFinder from "../assets/images/loungefinder.png";

const ImageList = () => {
  const images = [
    {
      id: 1,
      src: cardKundali,
    },
    {
      id: 2,
      src: beatCard,
    },
    {
      id: 3,
      src: compareCard,
    },
    {
      id: 4,
      src: loungeFinder,
    },
  ];

  // Define the style for the card background color
  const cardStyle = {
    backgroundColor: "black", // Set card background to black
    color: "white", // Optional: Set text color to white if needed
    padding: "25px", // Remove padding inside card
  };

  return (
    <div className="benifitCard">
      <Grid container justifyContent="center">
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={3} key={image.id}>
            <Card sx={{ ...cardStyle, height: "100%" }}>
              <CardMedia
                component="img"
                image={image.src}
                alt={`Image ${image.id}`} // Updated alt text for accessibility
                style={{ width: "100%", objectFit: "cover" }} // Ensure image fits within card
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageList;
