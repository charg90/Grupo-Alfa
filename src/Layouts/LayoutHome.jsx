import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";

const LayoutHome = () => {
  return (
    <Stack display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </Stack>
  );
};

export default LayoutHome;
