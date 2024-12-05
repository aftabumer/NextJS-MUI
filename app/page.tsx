"use client";
import { Button, styled, Typography } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color="textPrimary" fontWeight={600}>
          NEXT JS BOILER PLATE
        </Typography>

        <Typography
          variant="h5"
          color="textPrimary"
          margin="0.25rem 0 1.5rem 0"
        >
          Boiler plate using MUI Customization
        </Typography>
        <StyledButton
          onClick={() => window.open("https://github.com/aftabumer/NextJS-MUI")}
          variant="contained"
          color="primary"
          startIcon={<span>🚀</span>}
        >
          Get Started
        </StyledButton>
        {/* <Button
          variant="contained"
          startIcon={<span>🚀</span>}
          sx={{
            fontWeight: (theme) => theme.typography.fontWeightBold,
          }}
          onClick={() => window.open("https://github.com/aftabumer/NextJS-MUI")}
          color="primary"
        >
          Get Started
        </Button> */}
      </div>
    </>
  );
};

export default HomePage;
