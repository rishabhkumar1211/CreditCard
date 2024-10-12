import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Link,
  Container,
  Divider,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa"; // Import new App Store icon

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "#fff", py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Left Section: Social Media and App Store Buttons */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Box>

            <Typography variant="body2" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit at faucibus.
            </Typography>

            {/* Buttons */}
            <Box display="flex" gap={2} mt={2}>
              <Button
                variant="contained"
                sx={{
                  position: "relative", // Required for the pseudo-element
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#e4c2a2",
                  background:
                    "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
                  borderRadius: "10px", // Border radius for the button

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px", // Matching border radius
                    padding: "2.16px", // Matches the border thickness
                    boxSizing: "border-box",
                    background:
                      "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Ensures the gradient respects the border
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    pointerEvents: "none", // Prevents interaction with the pseudo-element
                  },

                  "&:hover": {
                    backgroundColor: "#505050",
                  },
                }}
              >
                <FaAppStoreIos
                  style={{
                    padding: "5px",
                    fontSize: "20px",
                  }}
                />
                {/* New App Store icon */}
                APP STORE
              </Button>
              <Button
                variant="contained"
                sx={{
                  position: "relative", // Required for the pseudo-element
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#e4c2a2",
                  background:
                    "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
                  borderRadius: "10px", // Border radius for the button

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px", // Matching border radius
                    padding: "2.16px", // Matches the border thickness
                    boxSizing: "border-box",
                    background:
                      "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Ensures the gradient respects the border
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    pointerEvents: "none", // Prevents interaction with the pseudo-element
                  },

                  "&:hover": {
                    backgroundColor: "#505050",
                  },
                }}
              >
                <FaGooglePlay
                  style={{
                    padding: "5px",
                    fontSize: "20px",
                  }}
                />{" "}
                {/* Black Google icon */}
                GOOGLE PLAY
              </Button>
            </Box>

            {/* Horizontal Line */}
            <Divider
              sx={{
                bgcolor: "#fff",
                my: 2,
              }}
            />

            <Typography variant="body2" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit at faucibus.
            </Typography>
          </Grid>

          {/* Right Section: Links (Company, Blog, Features, Contact, Legal) */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <Link href="#" color="inherit" underline="hover">
                  About BankKaro
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Vision and Mission
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Our Team Members
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Partners and Investors
                </Link>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Blog
                </Typography>
                <Link href="#" color="inherit" underline="hover">
                  BankKaro Savings
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Cashless Makes Perfect
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  BankKaro No Interest
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  BankKaro Digital Wallet
                </Link>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Features
                </Typography>
                <Link href="#" color="inherit" underline="hover">
                  Card Genius
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Lounge Finder
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Beat My Card
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Compare Cards
                </Link>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Link href="#" color="inherit" underline="hover">
                  Contact Us
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Contact Support
                </Link>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <Link href="#" color="inherit" underline="hover">
                  Terms
                </Link>
                <br />
                <Link href="#" color="inherit" underline="hover">
                  Privacy
                </Link>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  sx={{
                    background:
                      "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
                    color: "#e4c2a2",
                    borderRadius: "40px",
                    px: 2,
                    py: 1,
                    display: "inline-block",
                    mt: { xs: 4, sm: 0 },
                    textAlign: "right",
                  }}
                >
                  © 2024 BankKaro
                  <br />
                  <span style={{ padding: 0, margin: 0 }}>
                    Powered by Pouring Pounds
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
