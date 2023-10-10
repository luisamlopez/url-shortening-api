import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 66%, 49%)",
      "100": "hsl(257, 27%, 26%)",
      contrastText: "#fff"
    },
    secondary: {
      main: "hsl(0, 87%, 67%)",
    },

  },

  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;
