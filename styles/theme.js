import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "700",
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "700",
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "600",
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "600",
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "600",
    },
    h6: {
      fontFamily: '"Montserrat",sans-serif',
      fontWeight: "700",
    },
    subtitle2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: "700",
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: "300",
      fontSize: "1rem",
    },
    body2: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: "300",
      fontSize: "1rem",
    },
    button: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: "500",
      fontSize: "1rem",
    },
    caption: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: "300",
      fontSize: "0.875rem",
    },
    overline: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: "500",
      fontSize: "1.4375rem",
    },
  },
  palette: {
    primary: {
      main: "#40474f",
    },
    secondary: {
      main: "#a7aeb6",
    },
    common: {
      background: "#d3e6f0",
      backgroundHeader: "#eff7fa",
      green: "#5dc484",
      white: "#ffffff",
      buttons: "#6c7986",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
