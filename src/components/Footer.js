import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css"; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <Grid container spacing={4} className="footer-content">
        {/* Social Media and Description Section */}
        <Grid item xs={12} sm={6} md={4} direction="column" className="social-section">
          <div className="social-icons">
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
          <Typography variant="body2" className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis.
          </Typography>

          <div className="footer-bottom">
          <div className="download-buttons">
            <Button
              variant="outlined"
              className="download-button"
              style={{ color: "#fff", borderColor: "#fff" }}
            >
              APP STORE
            </Button>
            <Button
              variant="outlined"
              className="download-button"
              style={{ color: "#fff", borderColor: "#fff", marginLeft: "10px" }}
            >
              GOOGLE PLAY
            </Button>
            </div>
            </div>
       
          <Typography variant="body2" className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis.
          </Typography>
        </Grid>

        {/* Footer Links */}
        <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className="footer-heading">
                COMPANY
              </Typography>
              <ul className="footer-links">
                <li>About BankKaro</li>
                <li>Vision and Mission</li>
                <li>Our Team Members</li>
                <li>Partners and Investors</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className="footer-heading">
                BLOG
              </Typography>
              <ul className="footer-links">
                <li>BankKaro Savings</li>
                <li>Cashless Makes Perfect</li>
                <li>BankKaro No Interest</li>
                <li>BankKaro Digital Wallet</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className="footer-heading">
                FEATURES
              </Typography>
              <ul className="footer-links">
                <li>Card Genius</li>
                <li>Lounge Finder</li>
                <li>Beat My Card</li>
                <li>Compare Cards</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Legal Information */}
      <div className="footer-bottom">
        <Typography variant="body2" className="footer-legal">
          © 2024 Bankkaro Powered by Pouring Pounds
        </Typography>
        <div className="footer-legal-links">
          <Typography variant="body2">Terms</Typography>
          <Typography variant="body2">Privacy</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
