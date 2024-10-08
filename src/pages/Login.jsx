import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidator } from "../utils/input-validators/Validators";

const Login = () => {
  const [toggleLoginregister, setToggleLoginregister] = useState(false);

  const handleToggle = () => {
    setToggleLoginregister((prev) => !prev);
  };

  const userName = useInputValidation("", userNameValidator);
  const password = useStrongPassword();
  const bio = useInputValidation("");
  const fullName = useInputValidation("");
  const avatar = useFileHandler("single");

  const onHandleLoginSubmit = (e) => {
    e.preventDefault();
  };

  const onHandleSignUpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    
      {!toggleLoginregister && (
        <div
        style={{
            height: "110vh",
          backgroundImage:
            "linear-gradient(rgba(200,200,200,0.5),rgba(126,110,220,0.5) )",
        }}
      >
        <Container
          component={"main"}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="xs"
        >
          <Paper
            elevation={2}
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Login</Typography>
            <form onSubmit={onHandleLoginSubmit}>
              <TextField
                required
                fullWidth
                label="User Name"
                margin="normal"
                variant="outlined"
                value={userName.value}
                onChange={userName.changeHandler}
              />
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="red" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                fullWidth
                sx={{ mt: "1rem" }}
                color="primary"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </form>
            <Typography mt={"1rem"}>or</Typography>
            <Button onClick={handleToggle}>Signup</Button>
          </Paper>
        </Container>
        </div>
      )}

      {toggleLoginregister && (
        <>
          <div
            style={{
                height: "110vh",

              backgroundImage:
                "linear-gradient(rgba(200,200,200,0.5),rgba(126,110,220,0.5) )",
            }}
          >
            <Container
              component={"main"}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              maxWidth="xs"
            >
              <Paper
                elevation={2}
                sx={{
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5">Register</Typography>
                <form
                  onSubmit={onHandleSignUpSubmit}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        objectFit: "contain",
                      }}
                      src={avatar.preview}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        ":hover": {
                          bgcolor: "skyblue",
                        },
                      }}
                      component="label"
                    >
                      <>
                        <CameraAlt />
                        <VisuallyHiddenInput
                          type="file"
                          onChange={avatar.changeHandler}
                        />
                      </>
                    </IconButton>
                  </Stack>
                  {avatar.error && (
                    <Typography
                      sx={{
                        margin: "1rem",
                        textAlign: "center",
                        display: "block",
                      }}
                      variant="caption"
                      color="red"
                    >
                      {avatar.error}
                    </Typography>
                  )}

                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    margin="normal"
                    variant="outlined"
                    value={fullName.value}
                    onChange={fullName.changeHandler}
                  />

                  <TextField
                    fullWidth
                    label="Bio"
                    margin="normal"
                    variant="outlined"
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="User Name"
                    margin="normal"
                    variant="outlined"
                    value={userName.value}
                    onChange={userName.changeHandler}
                  />

                  {userName.error && (
                    <Typography color="red" variant="caption">
                      {userName.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    type="password"
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                  />

                  {password.error && (
                    <Typography color="red" variant="caption">
                      {password.error}
                    </Typography>
                  )}

                  <Button
                    fullWidth
                    sx={{ mt: "1rem" }}
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Signup
                  </Button>
                </form>
                <Typography mt={"1rem"}>or</Typography>
                <Button onClick={handleToggle}>Login</Button>
              </Paper>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
