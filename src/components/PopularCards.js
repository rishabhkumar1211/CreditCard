// App.js
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";

const cardData = [
  {
    title: "HDFC Regalia",
    image: "./pc1.png", // Replace with actual image URL
    cashback: "50% Cashback",
    description: "High cashback on online and offline spends",
    categories: ["Travel", "Online Shopping"],
  },
  {
    title: "Axis Bank Ace Credit Card",
    image: "./pc2.png", // Replace with actual image URL
    cashback: "50% Cashback",
    description: "High cashback on online and offline spends",
    categories: ["Travel", "Online Shopping"],
  },
  {
    title: "Indian Oil HDFC Credit Card",
    image: "./pc3.png", // Replace with actual image URL
    cashback: "50% Cashback",
    description: "High cashback on online and offline spends",
    categories: ["Travel", "Online Shopping"],
  },
];

const CardComponent = ({ card }) => (
  <Card
    sx={{
      maxWidth: 345,
      backgroundColor: "black",
      color: "#fff",
    }}
  >
    <CardContent>
      <img
        src={card.image}
        alt={card.title}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      <div style={{ marginLeft: "3rem" }}>
        <Typography variant="h5" sx={{ mt: 2 }}>
          {card.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          {card.categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              sx={{
                borderRadius: "2px",
                background:
                  "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
                color: "#e4c2a2",
              }}
            />
          ))}
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {card.cashback}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {card.description}
        </Typography>
        <Button variant="contained" color="warning" sx={{ mt: 2 }}>
          Apply Now
        </Button>
      </div>
    </CardContent>
  </Card>
);

const PopularCards = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#000", padding: "50px", color: "white" }}>
      <Typography variant="h3" color="#fff" align="center" sx={{ mb: 5 }}>
        Popular credit cards for every dedicated category
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
          }}
        >
          {["Featured", "Cashback", "Rewards", "Fuel", "Business"].map(
            (label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  backgroundColor:
                    selectedTab === index ? "#fff" : "transparent",
                  color: selectedTab === index ? "#000" : "#fff",
                  borderRadius: "12px",
                  borderTop: selectedTab === index ? "none" : "2px solid #fff", // White border for unselected tabs
                  borderLeft: selectedTab === index ? "none" : "2px solid #fff", // White border for unselected tabs
                  borderRight:
                    selectedTab === index ? "none" : "2px solid #fff", // White border for unselected tabs
                  margin: "0 10px",
                  "&:hover": {
                    backgroundColor: selectedTab === index ? "#fff" : "#1a1a1a",
                  },
                }}
              />
            )
          )}
        </Tabs>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardComponent card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularCards;
