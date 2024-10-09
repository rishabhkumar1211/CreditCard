import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
// import "./CardSection.css"; // Same CSS file for consistency

const creditCards = [
  {
    title: "Platinum Card",
    image: "/images/platinum-card.png",
    description: "Best for travel rewards",
  },
  {
    title: "Gold Card",
    image: "/images/gold-card.png",
    description: "Great for cashback",
  },
  {
    title: "Silver Card",
    image: "/images/silver-card.png",
    description: "Low interest rates",
  },
];

const CreditCards = () => {
  return (
    <Grid container spacing={3} style={{ padding: "2rem" }}>
      {creditCards.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="card-container"
          >
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography className="card-title">{card.title}</Typography>
              <Typography className="card-description">
                {card.description}
              </Typography>
            </CardContent>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CreditCards;
