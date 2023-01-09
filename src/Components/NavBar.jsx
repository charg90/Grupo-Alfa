import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "./../assets/GrupoAlfa logo.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid
          container
          display="flex"
          alignItems="center"
          spacing={2}
          justifyContent="center"
        >
          <Grid>
            <img src={logo} alt="logo-alfa" width={80} height={80} />
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: {
                  lg: 30,
                  md: 20,
                  sm: 15,
                  xs: 15,
                },
              }}
            >
              Grupo Alfa, Formación en Enfermería y Salud/Recursos
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default NavBar;
