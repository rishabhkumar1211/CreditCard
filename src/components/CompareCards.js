import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

// Video background container
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.8; /* Subtle background effect */
`;

// Main container
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  overflow: hidden;
  padding-top: 2rem; /* To give room for text */
  padding-bottom: 5rem; /* To prevent cutoff at the bottom */

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

// Ellipse Overlay (Top)
const EllipseTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: black;
  border-radius: 0 0 50% 50%;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

// Ellipse Overlay (Bottom)
const EllipseBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: black;
  border-radius: 50% 50% 0 0;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

// Title Component
const Title = styled.h1`
  font-size: 10rem;
  font-family: "PP Cirka";
  color: #d1ad83;
  background: linear-gradient(180deg, #524f4f 46.48%, #eead62 87.23%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin-bottom: 1rem;
  z-index: 1; /* Ensures text appears above other content */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Podium Image
const PodiumImage = styled.img`
  position: relative;
  width: 21vw;
  height: auto;
  bottom: 5rem;
  object-fit: contain;
  z-index: 1; /* Below the cards */

  @media (max-width: 768px) {
    width: 250px;
    margin-top: 50px;
  }
`;

// Info Text
const InfoText = styled.p`
  color: white;
  padding: 0px;
  margin: 0px;
  font-family: "PP Cirka";
  font-size: 1.5rem;
  text-align: center;
  width: 50%;
  z-index: 1; /* Ensures text is visible above the video and ellipses */

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 80%;
  }
`;
// Card Showcase
const CardShowcase = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: -60px; /* Reduced overlap for mobile */
  }
`;

// Card Image
const CardImage = styled.img`
  width: 120px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  @media (max-width: 768px) {
    width: 90px;
  }
`;

// Main Card Image (Center)
const MainCardImage = styled.img`
  width: 150px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  @media (max-width: 768px) {
    width: 110px;
  }
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

      {/* Podium and Cards */}
      <PodiumImage src="./mainArch.png" alt="Podium" />
      <CardShowcase>
        <CardImage src="./cc1.png" alt="HSBC Card" />
        <MainCardImage src="./cc3.png" alt="AMEX Card" />
        <CardImage src="./cc2.png" alt="SBI Card" />
      </CardShowcase>

      {/* Info text */}
      <InfoText>
        Uncover hidden benefits and find the perfect card for your financial
        goals.
        {/* Compare Cards Button */}
      </InfoText>
      <Button
        variant="contained"
        sx={{
          zIndex: 1,
          py: 2,
          px: 4,
          fontWeight: "bold",
          color: "#e4c2a2",
          background:
            "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
          borderRadius: "10px",
          mt: 2, // Adding margin to separate button from the info text
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
        Compare Cards
      </Button>
    </Container>
  );
};

export default CardComparisonUI;
