import React from "react";
import { Grid, Typography } from "@mui/material";
import "../styles/FeatureCards.css";

// Import icons with corrected paths
import personalOfferIcon from "../assets/images/PersonalOffer.png"; // Corrected path for Personalised Offers icon
import earnRewardsIcon from "../assets/images/EarnRewards.png"; // Corrected path for Earn Rewards icon
import compareCardsIcon from "../assets/images/CompareCards.png"; // Corrected path for Compare Cards icon
import maxBenefitsIcon from "../assets/images/MaxBenifits.png"; // Corrected path for Max Benefits icon

const features = [
  {
    title: "Personalised Offers",
    description: "Find best Credit Cards based on your spend pattern",
    icon: personalOfferIcon, // Use imported icon
  },
  {
    title: "Earn Rewards",
    description: "Earn Rewards for every successful Credit Card approval",
    icon: earnRewardsIcon, // Use imported icon
  },
  {
    title: "Compare Cards",
    description: "Compare your existing Cards with best in the industry",
    icon: compareCardsIcon, // Use imported icon
  },
  {
    title: "Max Benefits",
    description: "Get maximum benefits from your Credit Cards",
    icon: maxBenefitsIcon, // Use imported icon
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
