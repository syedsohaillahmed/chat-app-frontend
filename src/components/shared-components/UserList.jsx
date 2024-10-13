import { AddBox } from "@mui/icons-material";
import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import React, { memo } from "react";

const UserList = ({ user = [], handleAddFriend }) => {
  return (
    <List sx={{ width: "100%" }}>
      {user.map((user, index) => (
        <ListItem key={index}>
          <Container
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems:"center",
              direction: "row",
              width: "100%",
            }}
          >
            <Container
              sx={{
                justifyContent: "start",
                display: "flex",
                direction: "row",
                alignItems:"center",
                width: "100%",
              }}
            >
            <Avatar src={user.imageUrl} />
            {user.name}
          </Container>
          <IconButton onClick={handleAddFriend}>
            <AddBox color="primary" />
          </IconButton>
          </Container>
        </ListItem>
      ))}
    </List>
  );
};

export default memo(UserList);
