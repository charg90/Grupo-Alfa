import {
  Box,
  Divider,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import alfaLogo from "../../assets/GrupoAlfa logo.png";
import {
  respiratorio,
  vigilancia,
  cardiovascular,
  accesoVascular,
  metabolicoNutricion,
  transfusiones,
  procedimientos,
  terapiaDeDrogras,
} from "../../Helpers/afection";
const Afections = () => {
  const afections = [
    ...respiratorio,
    ...vigilancia,
    ...cardiovascular,
    ...accesoVascular,
    ...metabolicoNutricion,
    ...transfusiones,
    ...procedimientos,
    ...terapiaDeDrogras,
  ];
  const [isChecked, setIsChecked] = useState(
    afections.map((obj) => {
      return { ...obj, active: false };
    })
  );
  const [total, setTotal] = useState();
  console.log(total);

  const handleChange = (id) => {
    const checkedItems = isChecked.map((item) => {
      return id === item.id ? { ...item, active: !item.active } : item;
    });
    setIsChecked(checkedItems);
  };

  const totalPoints = isChecked.reduce((sum, state) => {
    if (state.active === true) {
      return sum + state.points;
    }
    return sum;
  }, 0);
  useEffect(() => {
    setTotal(totalPoints);
  }, [isChecked]);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={4}
        padding={2}
      >
        <img src={alfaLogo} alt="alfaLogo" height={80} width={80} />
        <h1 align="center">Formulario SArasasa</h1>
      </Stack>
      <Grid container gap={3} justifyContent="center">
        <Grid container xs={10} gap={2}>
          {" "}
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Respiratorias</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {respiratorio.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Vigilancia</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vigilancia.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Cardiovascular</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cardiovascular.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Acceso Vascular</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accesoVascular.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Metabolico Nutricion</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {metabolicoNutricion.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Transfuciones</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transfusiones.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Procedimientos</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {procedimientos.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Terapia de drogas</h3>
            <Divider />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700" }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>Puntos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {terapiaDeDrogras.map((resp, index) => {
                  return (
                    <TableRow
                      key={resp.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "primary.light" : null,
                      }}
                    >
                      <TableCell>{resp.name}</TableCell>
                      <TableCell align="center">{resp.points}</TableCell>
                      <TableCell>
                        <Switch
                          onChange={() => handleChange(resp.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid>
          <Box
            minWidth={100}
            maxHeight={100}
            backgroundColor="primary.main"
            padding={1}
            borderRadius={6}
            sx={{ position: "sticky", top: "80px" }}
          >
            <p>Total Point :{total} </p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Afections;
