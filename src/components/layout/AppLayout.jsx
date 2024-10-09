import React from "react";
import Title from "../shared-components/Title";
import HeaderLayout from "./HeaderLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Grid2, Grid22 } from "@mui/material";

const AppLayout = () => (WrappedComponet) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (props) => {
    return (
      <>
        <Title />
        <HeaderLayout />
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Grid mt={0.1} height={"calc(100vh - 4rem)"} container spacing={2}>
          <Grid
            height={"100%"}
            item
            xs={0} // Hide on extra small screens
            sm={4} // Show on small screens
            lg={3} // Adjust size on large screens
            sx={{
              display: { xs: "none", sm: "block" }, // Only show on small screens and above
            }}
          >
            <Item>Left Item</Item>
          </Grid>

          <Grid
            height={"100%"}
            bgcolor={"primary.main"}
            item
            xs={12} // Full width on extra small screens
            sm={8} // Medium width on small screens
            lg={6} // Adjust size on large screens
          >
            <WrappedComponet {...props} />
          </Grid>

          <Grid
            height={"100%"}
            item
            xs={0} // Hide on extra small screens
            md={4} // Show on medium screens and larger
            lg={3} // Adjust size on large screens
            sx={{
              display: { xs: "none", md: "block" }, // Only show on medium screens and above
            }}
          >
            <Item>Right Item</Item>
          </Grid>
        </Grid>

        {/* </Box> */}
      </>
    );
  };
};

export default AppLayout;
