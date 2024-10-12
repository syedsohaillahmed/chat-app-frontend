import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import { orange } from "../constants/Colors";
import {
  Group,
  GroupAdd,
  List,
  Logout,
  Notifications,
  PersonAddAlt,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import Search from "../Specific/Search";

const HeaderLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchDialog, setSearchDialog] = useState(false);

  const [notificationDialog, setNotificationDailog] = useState(false);

  const [groupDialog, setGroupDialog] = useState(false);
  const [addGroupDialog, setAddGroupDialog] = useState(false);

  const navigate = useNavigate();
  const handleMobileMenu = (e) => {
    console.log("handleMobileMenu");
  };

  const handleSearch = (e) => {
    setSearchDialog((prev)=> !prev)
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
                  icon={<SearchIcon />}
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

      {isMobile && (
        <Suspense fallback={<Backdrop open />}>MobleDialog Will come</Suspense>
      )}
      {searchDialog && (
        <Suspense fallback={<Backdrop open />}><Search /> </Suspense>
      )}
      {notificationDialog && (
        <Suspense fallback={<Backdrop open />}>
          notificationDialog Will come
        </Suspense>
      )}
      {groupDialog && (
        <Suspense fallback={<Backdrop open />}>groupDialog Will come</Suspense>
      )}
      {addGroupDialog && (
        <Suspense fallback={<Backdrop open />}>
          addGroupDialog Will come
        </Suspense>
      )}
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
