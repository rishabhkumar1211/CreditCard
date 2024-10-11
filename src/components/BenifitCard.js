import React from "react";
import { Card, Typography, Box } from "@mui/material";
import "./Benifit.css"; // Assuming you want to use an external CSS file

const Benifit = () => {
  return (
    <div className="card-kundali-container">
      <div className="card-kundali">
        {/* Text Section */}
        <div className="card-text">
          <h1>Card</h1>
          <h1>Kundali</h1>
        </div>

        {/* Geometric Pattern at Bottom */}
        <div className="geometric-pattern">
          <div className="triangle-up"></div>
          <div className="triangle-up"></div>
          <div className="triangle-up"></div>
          <div className="semi-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
