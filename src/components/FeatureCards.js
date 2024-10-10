import React from "react";
import { Grid, Typography } from "@mui/material";
import "./FeatureCards.css";

const features = [
  {
    title: "Personalised Offers",
    description: "Find best Credit Cards based on your spend pattern",
    icon: "/PersonalOffer.png",
  },
  {
    title: "Earn Rewards",
    description: "Earn Rewards for every successful Credit Card approval",
    icon: "/EarnRewards.png",
  },
  {
    title: "Compare Cards",
    description: "Compare your existing Cards with best in the industry",
    icon: "CompareCards.png",
  },
  {
    title: "Max Benefits",
    description: "Get maximum benefits from your Credit Cards",
    icon: "MaxBenifits.png",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-cards-container">
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="feature-card">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <Typography variant="h5" className="feature-title">
                {feature.title}
              </Typography>
              <Typography variant="button" className="feature-description">
                {feature.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureCards;
