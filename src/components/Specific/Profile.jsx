import { AlternateEmail, CalendarMonth, Face } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const Profile = () => {
  const date = new Date("2023-11-19").toISOString();
  //  updatedDate = moment.duration(date)

  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          height: 200,
          width: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <Profilecard text={"Bio"} heading={"wdhxbjehxkuej ejhdge3jdb jhed"} />
      <Profilecard
        text={"User Name"}
        heading={"@iamsyedssohailahmed"}
        Icon={<AlternateEmail />}
      />
      <Profilecard
        text={"Name"}
        heading={"Syeds Sohail Ahmed"}
        Icon={<Face />}
      />
      <Profilecard
        text={"Joined"}
        heading={moment("2023-11-19T00:00:00.000Z").fromNow().toLocaleUpperCase}
        Icon={<CalendarMonth />}
      />
    </Stack>
  );
};

export const Profilecard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      textAlign={"center"}
      spacing={"1rem"}
      color={"white"}
      alignItems={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color="grey" variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
