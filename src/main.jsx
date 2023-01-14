import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/router";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
