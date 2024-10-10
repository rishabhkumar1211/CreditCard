// LoungeCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Avatar } from '@mui/material';

const LoungeCard = ({ imgSrc, loungeName, airportCode, location, loungeImage }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 3 }}>
      {/* Avatar and Lounge Information */}
      <CardContent>
        <Avatar
          alt={loungeName}
          src={imgSrc}
          sx={{ width: 56, height: 56, marginBottom: 2 }}
        />
        <Typography variant="h6" component="div">
          {loungeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {airportCode} - {location}
        </Typography>
      </CardContent>
      
      {/* Lounge Image */}
      <CardMedia
        component="img"
        height="140"
        image={loungeImage}
        alt={`${loungeName} Lounge`}
      />
    </Card>
  );
};

export default LoungeCard;
