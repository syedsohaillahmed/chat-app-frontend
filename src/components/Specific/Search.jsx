import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserList from "../shared-components/UserList";
import { userData } from "../constants/sampleData";
const Search = () => {
  const search = useInputValidation("");
  const [userList, setUserList] = useState(userData)

const handleAddFriend = ()=>{
  console.log("add clicked")
}

  return (
    <Dialog open={true}>
      <Stack p={2} spacing={"2rem"} width={"25rem"} alignItems={"center"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label=""
            value={search.value}
            onChange={search.changeHandler}
            size="small"
            sx={{ borderRight: "2px solid white" }}
          />
          <SearchIcon sx={{ m: 0, height: "40px", p: 0 }} />
        </div>

         <UserList user={userList} handleAddFriend={handleAddFriend} />
        
      </Stack>
    </Dialog>
  );
};

export default Search;
