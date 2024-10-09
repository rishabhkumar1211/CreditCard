import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
// import "./CardSection.css"; // Include custom CSS

const cards = [
  { title: "Personalized Offers", description: "Best offers curated for you" },
  { title: "Earn Rewards", description: "Maximize your rewards" },
  { title: "Compare Cards", description: "Easily compare the best cards" },
  { title: "Lounge Finder", description: "Access premium lounges" },
];

const CardSection = () => {
  return (
    <Grid container spacing={3} style={{ padding: "2rem" }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <div className="card-container">
            <CardContent className="card-content">
              <Typography className="card-title" gutterBottom>
                {card.title}
              </Typography>
              <Typography className="card-description">
                {card.description}
              </Typography>
            </CardContent>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSection;
