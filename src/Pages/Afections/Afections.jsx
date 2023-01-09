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
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

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
import NavBar from "../../Components/NavBar";
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
      <NavBar />

      <Stack direction="row" justifyContent="center">
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: 20,
              md: 30,
            },
          }}
          align="center"
        >
          NTISS (Sistema de Puntuación de Intervención Terapéutica Neonatal)
        </Typography>
      </Stack>
      <Grid container gap={3} justifyContent="center">
        <Grid container xs={10} gap={2}>
          {" "}
          <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
            <h3 align="center">Respiratorio</h3>
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
            <h3 align="center">Accesos Vasculares</h3>
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
            <h3 align="center">Metabólico / Nutrición </h3>
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
            sx={{ position: "sticky", top: "80px", color: "#fafafa" }}
          >
            <p>Total Point :{total} </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={4} spacing={2}>
        <Grid maxWidth="800px">
          <Typography color="primary.main" fontSize="12px">
            Referencia Gray JE, Richardson DK et al. Sistema de puntuación de
            intervención terapéutica neonatal: un índice de gravedad de la
            enfermedad basado en la terapia. Pediatría. 1992;90:561-7.
          </Typography>
        </Grid>
        <Grid maxWidth="800px">
          <Typography fontSize="12px">
            SISTEMA DE PUNTUACIÓN DE INTERVENCIÓN TERAPÉUTICA NEONATAL (NTISS)
            Directrices de abstracción El Sistema de Puntuación de Intervención
            Terapéutica Neonatal (NTISS) (1) es un índice de evaluación de la
            gravedad de la enfermedad basado en la terapia. Es una modificación
            del puntaje TISS de Cullen et al (2, 3) adecuado para su uso en
            cuidados intensivos neonatales. NTISS mide la gravedad al
            cuantificar la intensidad y la complejidad de la atención que recibe
            un paciente. Se basa en la suposición de que dadas filosofías o
            estilos de atención similares, la intensidad terapéutica es una
            correlación directa con la gravedad de la enfermedad.
          </Typography>
        </Grid>
        <Grid maxWidth="800px">
          <Typography fontSize="12px">
            NTISS califica el nivel más intenso para cada terapia durante un
            período de calificación de 24 horas, por lo que algunas categorías
            de calificación son mutuamente excluyentes. El primer período de
            puntuación comienza en el momento de la admisión (es decir, el
            momento de los primeros signos vitales), aunque pueden ser factibles
            otros períodos de puntuación de 24 horas. Cuando las puntuaciones se
            calculan para días secuenciales, se debe prestar atención a si la
            puntuación se basa en el inicio de una terapia o simplemente en la
            presencia/continuación de la terapia. Para simplificar la
            recopilación de datos, cada una de las variables NTISS es un término
            binario, es decir, puede asumir uno de dos valores [Presente o
            Ausente]. El NTISS exige que se escaneen partes del gráfico que no
            sean el diagrama de flujo de la UCIN. Las notas de progreso de
            enfermería y médico pueden contener información valiosa sobre la
            realización de procedimientos. En los cálculos finales de puntajes
            para NTISS, los puntos se asignan solo para la intervención más
            intensa en una categoría terapéutica. Tomemos, por ejemplo, un
            paciente que comenzó un período de puntuación con oxígeno
            suplementario por campana y luego se le colocó CPAP nasal, seguido
            de intubación endotraqueal y ventilación mecánica con relajación
            muscular. En la puntuación final, esta paciente recibiría puntos
            solo por ventilación mecánica con relajación muscular porque es la
            terapia respiratoria más intensa (es decir, la puntuación más alta)
            que recibió dentro de la categoría respiratoria. Sin embargo, al
            completar la hoja de datos del período de puntuación, cada una de
            las tres terapias respiratorias enumeradas anteriormente debe
            marcarse como presente. De esta forma, se acumula la máxima
            información sobre el curso hospitalario de cada paciente. James E.
            Gray, MD, SM. enero de 1996
          </Typography>
        </Grid>
        <Grid maxWidth="800px">
          <Typography color="primary.main" fontSize="12px">
            <Typography fontSize="12px">Referencias</Typography>
            1. Gray JE, Richardson DK, McCormick MC, Workman-Daniels K, Goldmann
            D. Sistema de puntuación de intervención terapéutica neonatal
            (NTISS): un índice de gravedad de la enfermedad basado en la
            terapia. Pediatría, 1992;90:561-7. 2. Cullen DJ, Civetta JM, Briggs
            BA, et al. Sistema de puntuación de intervención terapéutica: un
            método para la comparación cuantitativa de la atención al paciente.
            Crit Care Med, 1974;2:57-60. 3. Keene AR, Cullen DJ. Sistema de
            Puntuación de Intervención Terapéutica: Actualización 1983. Crit
            Care Med 1983;11:1-3.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Afections;
