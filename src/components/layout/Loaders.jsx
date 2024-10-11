import { Grid2, Skeleton, styled, Paper } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
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
  return (
    <Grid2 mt={0.1} height={"calc(100vh - 4rem)"} container spacing={"1rem"}>
      <Grid2
        height={"100%"}
        item
        xs={0} // Hide on extra small screens
        sm={4} // Show on small screens
        lg={3} // Adjust size on large screens
        sx={{
          display: { xs: "none", sm: "block" }, // Only show on small screens and above
        }}
      >
                <h1>item1</h1>

        <Skeleton variant="rectangular" height={"100rem"} />
      </Grid2>
      <Grid2
        height={"100%"}
        item
        xs={12} // Full width on extra small screens
        sm={8} // Medium width on small screens
        lg={6} // Adjust size on large screens
      >
                <h1>item2</h1>

        <Skeleton variant="rectangular" height={"100rem"} />
      </Grid2>
      <Grid2
        height={"100%"}
        item
        xs={0} // Hide on extra small screens
        md={4} // Show on medium screens and larger
        lg={3} // Adjust size on large screens
        sx={{
          display: { xs: "none", md: "block" }, // Only show on medium screens and above
        }}
      >
        <h1>item3</h1>
        <Skeleton variant="rectangular" height={"100rem"} />
      </Grid2>
    </Grid2>
  );
};
