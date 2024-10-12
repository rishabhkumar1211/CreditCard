import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Importing images with corrected paths
import platinumCardImage from "../assets/images/platinum-card.png"; // Corrected path for Platinum Card image
import goldCardImage from "../assets/images/gold-card.png"; // Corrected path for Gold Card image
import silverCardImage from "../assets/images/silver-card.png"; // Corrected path for Silver Card image

const creditCards = [
  {
    title: "Platinum Card",
    image: platinumCardImage, // Use imported image
    description: "Best for travel rewards",
  },
  {
    title: "Gold Card",
    image: goldCardImage, // Use imported image
    description: "Great for cashback",
  },
  {
    title: "Silver Card",
    image: silverCardImage, // Use imported image
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
            <Card>
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
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CreditCards;
