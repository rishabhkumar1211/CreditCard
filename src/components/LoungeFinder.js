import React from "react";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import LoungeCard from "./LoungeCard";

// Sample data for lounges
const lounges = [
  {
    imgSrc: "./indiagate.png", // Replace with actual image URLs
    loungeName: "Indra Gandhi Int’l",
    airportCode: "IGI",
    location: "New Delhi",
    loungeImage: "./green.png", // Lounge interior image
  },
  {
    imgSrc: "./mumbai.png",
    loungeName: "Indra Gandhi Int’l",
    airportCode: "IGI",
    location: "New Delhi",
    loungeImage: "./yellow.png",
  },
  {
    imgSrc: "./raj.png",
    loungeName: "Indra Gandhi Int’l",
    airportCode: "IGI",
    location: "New Delhi",
    loungeImage: "pink.png",
  },
];

const LoungeFinder = () => {
  return (
    <div style={{ background: "black" }}>
      <Container sx={{ textAlign: "center", py: 5 }}>
        {/* Heading */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff", pt: 6 }}
        >
          Lounge Finder
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ color: "#ccc", fontFamily: "PP Cirka" }}
        >
          Check which lounges you can access at a click!
        </Typography>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          sx={{
            position: "relative", // Required for the pseudo-element
            my: 3,
            mb: 12,
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
          Try Lounge Finder
        </Button>
      </Container>
      {/* Lounge Cards */}
      <Grid container spacing={2} justifyContent="center" sx={{ px: 5 }}>
        {lounges.map((lounge, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box sx={{ transform: "scale(1.1)", transition: "transform 0.3s" }}>
              <LoungeCard
                imgSrc={lounge.imgSrc}
                loungeName={lounge.loungeName}
                airportCode={lounge.airportCode}
                location={lounge.location}
                loungeImage={lounge.loungeImage}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LoungeFinder;
