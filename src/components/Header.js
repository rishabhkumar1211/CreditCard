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

// Import the profile image
import profileImg from "../assets/images/profile.png"; // Adjust the path to match your project structure

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
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            textTransform: "none",
            color: "#e4c2a2",
            gap: "0.5rem", // Space between text and avatar
            background:
              "linear-gradient(200.74deg, rgba(214, 211, 194, 0.2) 0%, rgba(92, 92, 92, 0.14) 100%)",
            borderRadius: "10px",
            padding: "0.5rem 2rem", // Adjust padding to give some space around content
            overflow: "visible", // Allow content to overflow (for avatar)

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              padding: "2.16px",
              boxSizing: "border-box",
              background:
                "linear-gradient(200.74deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              pointerEvents: "none",
            },

            "&:hover": {
              backgroundColor: "#505050",
            },
          }}
        >
          Sign In
          <Avatar
            alt="User Avatar"
            src={profileImg} // Use the imported profile image
            sx={{
              width: 40, // Increase size of avatar
              height: 40, // Ensure avatar is larger than the button height
              position: "absolute", // Absolute positioning for overlap
              right: -15, // Adjust position to overlap the button
              border: "1px solid white",
            }}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
