import React from "react";
import { Grid, Typography } from "@mui/material";
import "./FeatureCards.css";

const features = [
  {
    title: "Personalised Offers",
    description: "Find best Credit Cards based on your spend pattern",
    icon: "/path/icon1.png",
  },
  {
    title: "Earn Rewards",
    description: "Earn Rewards for every successful Credit Card approval",
    icon: "/path/icon2.png",
  },
  {
    title: "Compare Cards",
    description: "Compare your existing Cards with best in the industry",
    icon: "/path/icon3.png",
  },
  {
    title: "Max Benefits",
    description: "Get maximum benefits from your Credit Cards",
    icon: "/path/icon4.png",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-cards-container">
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="feature-card">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <Typography variant="h6" className="feature-title">
                {feature.title}
              </Typography>
              <Typography variant="body1" className="feature-description">
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
