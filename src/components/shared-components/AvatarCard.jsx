import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <Box width={"4rem"} height={"3rem"}>
        <AvatarGroup max={max}>
          {avatar.map((avatar, index) => (
            <Avatar
              key={Math.random() * 100}
              src={avatar}
              alt={`Avatar ${index}`}
              sx={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${1 + index}rem`,
                },
              }}
            />
          ))}
        </AvatarGroup>
      </Box>
    </Stack>
  );
};

export default AvatarCard;
