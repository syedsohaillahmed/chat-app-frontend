import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Done, Edit, KeyboardBackspace, Menu } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../components/Specific/group-components/groupList";
import { samplechatsData, userData } from "../components/constants/sampleData";
import UserList from "../components/shared-components/UserList";
import { backgroundgradient, orange } from "../components/constants/Colors";


const Group = () => {
  const navigate = useNavigate();

  const chatId = useSearchParams()[0].get("group");

  const [isdrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsDrawerOpen(true);
  };

  const navigatBack = () => {
    navigate("/");
    console.log("navigate back clicked");
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [isEditgroupName, setIsEditGroupName] = useState(false);
  const [groupNameheading, setGroupNameHeading] = useState("ws");
  const [groupNameheadingUPValue, setGroupNameHeadingUPvalue] = useState("");

  useEffect(() => {
    if(chatId){

    }
    return () => {
      setIsEditGroupName(false);
      setGroupNameHeading("ww");
      setGroupNameHeadingUPvalue("ss");
    };
  }, [chatId]);

  const handleGroupNameEdit = () => {
    setIsEditGroupName((prev) => !prev);
  };

  const handleUpdateGroupName = () => {
    setIsEditGroupName(false);
    console.log("group name edit");
  };

  const handleGroupNameChane = (e) => {
    console.log(e.target.value);
    setGroupNameHeading(e.target.value);
  };

  const GroupName = (
    <Stack
      direction={"row"}
      sx={{ ml:"2rem",padding: "1rem", display: "flex", flexDirection: "row" }}
    >
      {isEditgroupName ? (
        <>
          <TextField value={groupNameheading} onChange={handleGroupNameChane} />
          <IconButton onClick={handleUpdateGroupName}>
            <Done />
          </IconButton>
        </>
      ) : (
        
        <>
        {groupNameheading !=="" &&
          
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography variant="h5">{groupNameheading}</Typography>
              <IconButton onClick={handleGroupNameEdit}>
                <Edit />
              </IconButton>
            </Stack>
          
        }
        </>
    
      )}
    </Stack>
  );

  const handleAddMemeber = ()=>{
    //create a dialog
    console.log("add meber clicked")
  }

  const handleDeleteMmeber = ()=>{
    //create a dialog here as well
    console.log("delete meber clicked")
  }

  const ButtonGroup = (
    <>
      <Stack
        direction={{
          xs: "column-reverse",
          sm: "row",
        }}
        p={{
          xs: "0",
          sm: "1rem",
          md: "1rem 4rem",
        }}
        
      >
        <Button onClick={handleAddMemeber} size="large" variant="contained" color="primary">
          Add Member
        </Button>

        <Button onClick={handleDeleteMmeber} size="large" variant="outlined" color="error">
          Delete
        </Button>
      </Stack>
    </>
  );

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
          // bgcolor: "bisque",
          bgcolor:"rgb(237, 223, 224)"
        }}
      >
        <GroupList myGroups={samplechatsData} chatId={chatId} />
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
          // backgroundColor: "aqua",
          padding: "1rem 3rem",
          justifyContent:"space-between"
        }}
      >
        {/* //back button */}
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


        {GroupName}

        <Typography m={"2rem"} alignSelf={"flex-start"} variant="body1">
          Members
        </Typography>

        <Stack
          padding={{
            sm: "1rem",
            xs: "0rem",
            md: "1rem 4rem",
          }}
          spacing={"2rem"}
          direction={"column"}
          alignSelf={"flex-start"}
          sx={{
            boxSizing: "border-box",
            maxWidth: "45rem",
            width: "100%",
            height: "50vh",
            bgcolor: "white",
            overflow: "auto",
          }}
        >
         {
          userData &&
              <UserList   user={userData}   />
            
         }
        </Stack>

        {ButtonGroup}

        {/* //menu icon for mobile view */}
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
              xs: "block",
              sm: "none",
            },
            width: "100%",
            // bgcolor: "bisque",
           
          }}
          open={isdrawerOpen}
          onClose={handleCloseDrawer}
        >
          <GroupList w={"50vw"} myGroups={samplechatsData} chatId={chatId} />
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Group;
