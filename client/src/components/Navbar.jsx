import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropOutLined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useDispatch } from "react-redux";
import { setmode } from "state";
import { useState } from "react";
// import profileImage from "assets/profile.jpeg";
import { AppBar, Toolbar, useTheme } from "@mui/material";

const Navbar = () => {
  const useDispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifycontent: "space-between" }}>
        {/* LEFT SIDE */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
