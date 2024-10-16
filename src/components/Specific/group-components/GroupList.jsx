import { Stack, Typography } from "@mui/material";
import React from "react";
import GroupListItem from "./GroupListItem";

const GroupList = ({ w = "100%", myGroups = [], chatId = "" }) => {
  return (
    <>
      <Stack>
        {myGroups.length > 0 ? (
          myGroups.map((group) => <GroupListItem key={group._id} group={group} chatId={chatId} />)
        ) : (
          <Typography textAlign={"center"} padding={"1rem"}>
            No groups Created
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default GroupList;
