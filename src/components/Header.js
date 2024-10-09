import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#1f1f1f" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          BANKKARO
        </Typography>
        <div style={{ display: "flex", gap: "1rem" }}>
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
