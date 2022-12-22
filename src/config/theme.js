import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
      light: "#bbdefb",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
  },
});
export default theme;
