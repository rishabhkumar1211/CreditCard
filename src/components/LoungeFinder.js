// LoungeFinder.js
import React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import LoungeCard from './LoungeCard';

// Sample data for lounges
const lounges = [
  {
    imgSrc: 'https://example.com/igi.jpg', // Replace with actual image URLs
    loungeName: 'Indra Gandhi Int’l',
    airportCode: 'IGI',
    location: 'New Delhi',
    loungeImage: 'https://example.com/lounge1.jpg' // Lounge interior image
  },
  {
    imgSrc: 'https://example.com/igi2.jpg',
    loungeName: 'Indra Gandhi Int’l',
    airportCode: 'IGI',
    location: 'New Delhi',
    loungeImage: 'https://example.com/lounge2.jpg'
  },
  {
    imgSrc: 'https://example.com/igi3.jpg',
    loungeName: 'Indra Gandhi Int’l',
    airportCode: 'IGI',
    location: 'New Delhi',
    loungeImage: 'https://example.com/lounge3.jpg'
  }
];

const LoungeFinder = () => {
  return (
    <Container sx={{ textAlign: 'center', paddingY: 5 }}>
      {/* Heading */}
      <Typography variant="h3" component="h1" gutterBottom>
        Lounge Finder
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Check which lounges you can access at a click!
      </Typography>

      {/* Call to Action Button */}
      <Button variant="contained" color="primary" sx={{ marginY: 3 }}>
        Try Lounge Finder
      </Button>

      {/* Lounge Cards */}
      <Grid container spacing={4} justifyContent="center">
        {lounges.map((lounge, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <LoungeCard
              imgSrc={lounge.imgSrc}
              loungeName={lounge.loungeName}
              airportCode={lounge.airportCode}
              location={lounge.location}
              loungeImage={lounge.loungeImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LoungeFinder;
