import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  SwipeableDrawer,
  Box,
} from "@mui/material";
import { Stack } from "@mui/system";

import { navItems } from "../../Helpers/navItems";
import Drawer1 from "./Drawer/Drawer1";

function NavBar(props) {
  return (
    <>
      <Box>
        <Drawer1 />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        maxWidth="1200px"
        justifyContent="center"
        gap={4}
        fontWeight="400"
        lineHeight="24px"
        color="#151515"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {navItems.map((items, index) => (
          <Typography key={index}>{items.name}</Typography>
        ))}
      </Box>
    </>
  );
}

export default NavBar;
