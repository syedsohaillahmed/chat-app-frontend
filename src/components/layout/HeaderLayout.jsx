import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { orange } from "../constants/Colors";
import {
  Group,
  GroupAdd,
  List,
  Logout,
  Notifications,
  PersonAddAlt,
  Search,
} from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const handleMobileMenu = (e) => {
    console.log("handleMobileMenu");
  };

  const handleSearch = (e) => {
    console.log("handleSearch");
  };

  const handleNotifications = (e) => {
    console.log("handleNotifications");
  };
  const handleNewGroup = (e) => {
    console.log("handleNewGroup");
  };
  const handleGroupNavigate = (e) => {
    console.log("handleGroupNavigate");
    navigate("/group");
  };
  const handleLogout = (e) => {
    console.log("handleLogout");
  };

  handleSearch;
  return (
    <>
      <Box flexGrow={1} sx={{ height: "4rem" }}>
        <AppBar position="static" sx={{ backgroundColor: orange }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Chat APP
              </Typography>

              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <IconButton color="inherit" onClick={handleMobileMenu}>
                  <List />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <IconWithButton
                  title={"search"}
                  handleFunc={handleSearch}
                  icon={<Search />}
                />

                <IconWithButton
                  title={"Notification"}
                  handleFunc={handleNotifications}
                  icon={<Notifications />}
                />

                <IconWithButton
                  title={"New Group"}
                  handleFunc={handleNewGroup}
                  icon={<GroupAdd />}
                />

                <IconWithButton
                  title={"Groups"}
                  handleFunc={handleGroupNavigate}
                  icon={<Group />}
                />
                <IconWithButton
                  title={"Logout"}
                  handleFunc={handleLogout}
                  icon={<Logout />}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

const IconWithButton = ({ title, handleFunc, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={() => handleFunc()}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default HeaderLayout;
