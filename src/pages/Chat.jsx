import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { homeBackgroundColor } from "../components/constants/Colors";
import { AttachFile, Send } from "@mui/icons-material";
import { CustomInputBox } from "../components/styles/StyledComponent";
import { orange } from "../components/constants/Colors";
import { sampleMessage } from "../components/constants/sampleData";
import MessageComponent from "../components/shared-components/MessageComponent";

const user = {
  _id: "2",
  name: "sohail",
};

console.log("sample mesageee", sampleMessage)

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        sx={{
          bgcolor: { homeBackgroundColor },
          boxSizing: "border-box",
          padding: "1rem",
          spacing: "1rem",
          overflowX: "hidden",
          overflowY: "auto",
          height: "90%",
        }}
      >
        {sampleMessage.map((messageData, index) => (
          <MessageComponent message={messageData} key={index} user={user} />
        ))}
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          alignItems={"center"}
          height={"100%"}
          width={"100%"}
          display={"flex"}
          direction={"row"}
        >
          <IconButton>
            <AttachFile />
          </IconButton>
          <CustomInputBox placeholder="Type Message here....." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              color: "white",
              marginLeft: "0.5rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
