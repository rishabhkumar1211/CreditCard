import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

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
          <Typography variant="body1">Our Products</Typography>
          <Typography variant="body1">Tools</Typography>
          <Typography variant="body1">Blogs</Typography>
          <Typography variant="body1">About Us</Typography>
        </div>
        <Button
          color="inherit"
          style={{ backgroundColor: "#f4b400", borderRadius: "20px" }}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
