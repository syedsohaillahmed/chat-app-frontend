import { Typography } from "@mui/material";
import React, { memo } from "react";
import { messagebgcolor, senderNameColor } from "../constants/Colors";
import { fileFormat } from "../../lib/feature";
import RenderAttachmentComp from "./RenderAttachmentComp";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  console.log("messagggggggggee", message);
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
        {!sameSender && (
          <Typography
            color={senderNameColor}
            variant="caption"
            fontWeight={600}
          >
            {sender.name}
          </Typography>
        )}

        {content && <Typography>{content}</Typography>}

        {attachments.length > 0 &&
          attachments.map((attachment, index) => {
            let url = attachment.url
            const file = fileFormat(url)
            return <div key={index}>
              <a  href={url} target="_blank" download style={{color:"black"}} >
                <RenderAttachmentComp file={file} url={url} />
              </a>
            </div>;
          })}
      </div>
    </>
  );
};

export default memo(MessageComponent);
