import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#5e5e5e",
    },
    secondary: {
      main: "#2b76d2",
    },
  },
  typography: {
    fontFamily: `"Open Sans", "arial", "Arial", sans-serif`,
  },
});
export default theme;
