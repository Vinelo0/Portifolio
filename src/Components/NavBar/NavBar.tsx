import React from "react";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NAVBAR_HEIGHT = 64;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  minHeight: NAVBAR_HEIGHT,
}));

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"    
      elevation={0}      
    >
      <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
