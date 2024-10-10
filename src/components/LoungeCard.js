import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

const LoungeCard = ({
  imgSrc,
  loungeName,
  airportCode,
  location,
  loungeImage,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Hexagonal background effect */}
      <Card
        sx={{
          borderRadius: "12px",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Avatar and Lounge Information (side-by-side) */}
        <CardContent
          sx={{
            paddingTop: "15px",
            display: "flex",
            alignItems: "center",
            ml: "2rem",
          }}
        >
          <Avatar
            alt={loungeName}
            src={imgSrc}
            sx={{
              width: 64,
              height: 64,
              marginRight: 2, // Adds space between avatar and text
            }}
          />
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              {loungeName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#bbb" }}
            >
              {airportCode} - {location}
            </Typography>
          </Box>
        </CardContent>

        {/* Lounge Interior Image */}
        <CardMedia
          component="img"
          image={loungeImage}
          alt={`${loungeName} Lounge`}
          sx={{
            borderRadius: "12px",
            marginTop: "20px", // Adjusted to provide better spacing
          }}
        />
      </Card>
    </Box>
  );
};

export default LoungeCard;
