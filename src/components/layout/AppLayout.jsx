import React from "react";
import Title from "../shared-components/Title";
import HeaderLayout from "./HeaderLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChatList from "../Specific/ChatList";
import { samplechatsData } from "../constants/sampleData";
import { Link, useNavigate, useParams } from "react-router-dom";
import Profile from "../Specific/Profile";

const AppLayout = () => (WrappedComponet) => {
  // const chatId = params.chatId

  return (props) => {
    let { chatId } = useParams();

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(e, _id, groupChat);
    };
    const navigate = useNavigate();
    const handlenavigate = () => {
      console.log("clicked");
      navigate("/");
    };
    return (
      <>
        <div onClick={() => handlenavigate()}>
          <Title />
        </div>
        <HeaderLayout />
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Grid height={"calc(100vh - 4rem)"} container spacing={2}>
          <Grid
            height={"100%"}
            item
            mt={2}
            xs={0} // Hide on extra small screens
            sm={4} // Show on small screens
            lg={3} // Adjust size on large screens
            sx={{
              backgroundColor: "#EDDFE0",
              display: { xs: "none", sm: "block" }, // Only show on small screens and above
            }}
          >
            <ChatList
              chats={samplechatsData}
              chatId={chatId}
              newMessagesAlert={[
                {
                  chatId: "1",
                  count: 10,
                },
              ]}
              // onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid
            height={"100%"}
            item
            xs={12} // Full width on extra small screens
            sm={8} // Medium width on small screens
            lg={6} // Adjust size on large screens
          >
            <WrappedComponet {...props} />
          </Grid>

          <Grid
            height={"100%"}
            item
            mt={2}
            xs={0} // Hide on extra small screens
            md={4} // Show on medium screens and larger
            lg={3} // Adjust size on large screens
            sx={{
              display: { xs: "none", md: "block" }, // Only show on medium screens and above
            }}
            bgcolor={"black"}
          >
            <Profile />
          </Grid>
        </Grid>

        {/* </Box> */}
      </>
    );
  };
};

export default AppLayout;
