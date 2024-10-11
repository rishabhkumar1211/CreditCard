import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Import the dropdown icon

const Header = () => {
  return (
    <AppBar
      style={{
        background:
          "radial-gradient(75.73% 238.9% at 100% 60.92%, rgba(46, 46, 46, 0) 54.75%, #1A1A1A 85.72%, #131313 100%)",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ fontWeight: "bold", zIndex: 2 }}>
          <span style={{ color: "grey" }}>BANK</span>
          <span style={{ color: "white" }}>KARO</span>
        </Typography>
        <div style={{ display: "flex", gap: "6rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1">OUR PRODUCTS</Typography>
            <IconButton size="small">
              <KeyboardArrowDownIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1">TOOLS</Typography>
            <IconButton size="small">
              <KeyboardArrowDownIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <Typography variant="body1">BLOGS</Typography>
          <Typography variant="body1">ABOUT US</Typography>
        </div>
        <Button
          color="inherit"
          style={{
            color: "#e4c2a2",
            borderRadius: "4px",
            background:
              "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
            border: "2.16px solid transparent",
            borderImage:
              "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
            "&:hover": {
              backgroundColor: "#505050",
            },
            textTransform: "none",
            display: "flex", // Align items in a row
            alignItems: "center", // Center vertically
            gap: "0.5rem", // Space between avatar and text
          }}
        >
          Sign In
          <Avatar
            alt="User Avatar" // Alt text for accessibility
            src="./profile.png" // Replace with your image path
            style={{ width: 30, height: 30 }} // Size of the avatar
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
