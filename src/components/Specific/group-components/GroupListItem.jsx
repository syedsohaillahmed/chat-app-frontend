import React from "react";
import AvatarCard from "../../shared-components/AvatarCard";
import { Link } from "../../styles/StyledComponent";
import { Stack, Typography } from "@mui/material";

const GroupListItem = (group = {}, chatId) => {
  const { name, avatar, _id } = group.group;
  
  return (
    <Link to={`?group=${_id}`} onClick={(e)=>{
        if(chatId === _id){
            e.preventDefault()
            
        }
    }} >
      <Stack sx={{ display: "flex", flexDirection:"row", alignItems:"center" }}>
        
      <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
        
      </Stack>
    </Link>
  );
};

export default GroupListItem;
