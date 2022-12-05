import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "ltr",
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: "#6C7A7A",
    },
    secondary: {
      main: "#C66078",
    },

    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },

    info: {
      main: "#387E8D",
    },
  },
  typography: {
    fontFamily: "Cairo !important",
    allVariants: {
      textTransform: "none",
      //  fontFamily: `"Arial", "Helvetica", sans-serif `,
    },
  },
});

export default theme;
