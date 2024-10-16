import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "./ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <>
      <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"} >
        {chats?.map((data, index) => {
          const { avatar, _id, name, groupChat, members } = data;

          const newMessageAlert = newMessagesAlert.find(
            ({ chatId }) => chatId === _id
          );


          const isOnline = members?.some((member) => onlineUsers.includes(_id));

          return (
            <ChatItem
              avatar={avatar}
              name={name}
              _id={_id}
              key={_id}
              index={index}
              groupChat={groupChat}
              sameSender={chatId === _id}
              isOnline={isOnline}
              handleDeleteChat={handleDeleteChat}
              newMessageAlert={newMessageAlert}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default ChatList;
