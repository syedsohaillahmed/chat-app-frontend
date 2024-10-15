import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Drawer, Grid, IconButton, Tooltip } from "@mui/material";
import { orange } from "../components/constants/Colors";
import {
  BackHandOutlined,
  Keyboard,
  KeyboardBackspace,
  Menu,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const navigate = useNavigate();
  const [isdrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const navigatBack = () => {
    navigate("/");
    console.log("navigate back clicked");
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Grid container height={"100vh"}>
      <Grid
        sm={4}
        // lg={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          width: "100%",
          bgcolor: "bisque",
        }}
      >
        Group list will render here
      </Grid>

      <Grid
        sm={8}
        // lg={8}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundColor: "aqua",
          padding: "1rem 3rem",
        }}
      >
        <div>
          <Tooltip title="Back">
            <IconButton
              onClick={() => navigatBack()}
              sx={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                bgcolor: "rgb(0, 0, 0, 0.8)",
                color: "white",
              }}
            >
              <KeyboardBackspace />
            </IconButton>
          </Tooltip>
        </div>

        <div>
          <Box>
            <IconButton
              onClick={handleMobileMenu}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  position: "fixed",
                  right: "1rem",
                  top: "1rem",
                },
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </div>
        <Drawer
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
          open={isdrawerOpen}
          onClose={handleCloseDrawer}
        >
          GroupList will render here
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Group;
