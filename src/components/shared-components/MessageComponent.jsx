import { Typography } from "@mui/material";
import React, { memo } from "react";
import {  messagebgcolor, senderNameColor } from "../constants/Colors";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  console.log("messagggggggggee", message)
  const sameSender = sender?._id === user?._id;

  return (
    <>
      <div
        style={{
          alignSelf: sameSender ? "flex-end" : "flex-start",
          backgroundColor: messagebgcolor,
          color: "white",
          borderRadius: "5px",
          padding: "0.5rem",
        }}
      >
        {
            !sameSender && <Typography color={senderNameColor} variant="caption" fontWeight={600} >
                {sender.name}
            </Typography>
        }

        {content &&  <Typography  >
            {content}
        </Typography> }
      </div>
    </>
  );
};

export default memo(MessageComponent);
