import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
// import "./CardSection.css"; // Same styles/

const LoungeFinder = () => {
  return (
    <div className="lounge-finder-container">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Card className="card-container">
          <CardContent>
            <Typography className="card-title">
              Find Lounges Near You
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
            >
              Search Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoungeFinder;
