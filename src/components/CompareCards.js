import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

// Video background container
const BackgroundVideo = styled.video`
  position: absolute;
  width: 98vw;
  height: 70vh;
  object-fit: cover;
  z-index: -1;
`;

// Main container
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: black; /* Changed to black */
`;

// Ellipse Overlay (Top)
const EllipseTop = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 98.5vw; /* Reduced width */
  height: 250px;
  background: black; /* Changed to black */
  border-radius: 40%;
  z-index: 0;
`;

// Ellipse Overlay (Bottom)
const EllipseBottom = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 98.5vw; /* Reduced width */
  height: 250px;
  background: black; /* Changed to black */
  border-radius: 40%;
  z-index: 0;
`;

// Title Component
const Title = styled.h1`
  font-size: 6rem;
  font-family: "PP Cirka";
  color: #d1ad83;
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, #524f4f 46.48%, #eead62 87.23%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  top: 6rem;
`;

// Card Showcase
const CardShowcase = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px; /* Reduced gap between cards */
  position: relative;
  margin-bottom: 265px;
  z-index: 2;
`;

// Individual Card Image
const CardImage = styled.img`
  width: 130px; /* Reduced size */
  height: auto;
  top: 8.5rem;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  position: relative; /* Ensures stacking order */
  z-index: 1; /* Ensures cards are above the podium */
  display: flex;
`;

// Individual Card Image
const MainCardImage = styled.img`
  width: 150px; /* Reduced size */
  height: auto;
  top: 8.5rem;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  position: relative; /* Ensures stacking order */
  z-index: 1; /* Ensures cards are above the podium */
  display: flex;
`;

// Podium Image for Center Card
const PodiumImage = styled.img`
  position: absolute;
  width: 324px;
  height: auto;
  object-fit: contain;
  z-index: 0; /* Podium is behind the cards */
`;

// Info Text
const InfoText = styled.p`
  color: white;
  font-family: "PP Cirka";
  font-size: 1.5rem;
  margin-top: 50px;
  z-index: 1;
  text-align: center;
  width: 30%;
`;

const CardComparisonUI = () => {
  return (
    <Container>
      {/* Background video */}
      <BackgroundVideo autoPlay muted loop>
        <source src="golden_podium.mp4" type="video/mp4" />
      </BackgroundVideo>

      {/* Ellipse Overlays */}
      <EllipseTop />
      <EllipseBottom />

      {/* Title */}
      <Title>Compare Cards</Title>

      {/* Card Showcase */}
      <CardShowcase>
        {/* Adjusted positioning for cards */}
        <CardImage src="./cc1.png" alt="HSBC Card" />
        <PodiumImage src="./mainArch.png" alt="Podium" />
        <MainCardImage src="./cc3.png" alt="AMEX Card" />
        <CardImage src="./cc2.png" alt="SBI Card" />
      </CardShowcase>

      {/* Info text */}
      <InfoText>
        Uncover hidden benefits and find the perfect card for your financial
        goals.
      </InfoText>
      <Button
        variant="contained"
        sx={{
          mb: 6,
          py: 2,
          px: 4,
          fontWeight: "bold",
          color: "#e4c2a2",
          background:
            "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
          border: "2.16px solid transparent", // Set border to transparent for gradient
          borderImage:
            "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
          borderImageSlice: 1, // Ensure the gradient is used for the border
          transition: "background-color 0.3s ease, border-color 0.3s ease", // Add transition for smooth effect
          "&:hover": {
            background:
              "linear-gradient(200.74deg, rgba(92, 92, 92, 0.5) 0%, rgba(214, 211, 194, 0.2) 100%)", // Change hover background
            border: "2.16px solid #FFFFFF", // Optional: change border color on hover
          },
        }}
      >
        Compare Cards
      </Button>
    </Container>
  );
};

export default CardComparisonUI;
