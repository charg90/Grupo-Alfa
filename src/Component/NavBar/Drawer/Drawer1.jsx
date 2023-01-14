import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { navItems } from "../../../Helpers/navItems";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box } from "@mui/system";

const Drawer1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={open}
        sx={{ display: { xs: "block", md: "none" } }}
        variant="persistent"
      >
        <Box display="flex" justifyContent="end">
          <Button onClick={() => setOpen(!open)}>
            <ChevronLeftIcon textAlign="right" />
          </Button>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name}>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Drawer1;
