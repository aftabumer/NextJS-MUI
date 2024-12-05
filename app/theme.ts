"use client";
import { createTheme } from "@mui/material/styles";
import { lato } from "./ui/fonts";

const theme = createTheme({
  typography: {
    fontFamily: lato.style.fontFamily,
  },
  palette: {
    background: { default: "#0c1844" },
    primary: { main: "#C80036" },
    text: { primary: "#FFF5E1" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
